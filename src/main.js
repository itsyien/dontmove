import * as T from 'three';
import {assetUrl} from './asset-url.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {GameAudio} from './audio.js';
import {createBroadcast} from './broadcast.js';
import {createWorld,painted} from './world.js';
import {createActor,createCutoutActor,scareKey,scareFrame,SCARE_IMPACT,SCARE_DURATION} from './actors.js';
import {prepareBuilding,RISE} from './building.js';
import {Game,RULES,FLASHLIGHT_HALF_ANGLE,DISPEL_SECONDS,gunmuRise} from './simulation.js';
import {clearSight} from './logic.js';
import './style.css';
import {tr,setLanguage,getLanguage,staticLocalization} from './i18n.js';
try{setLanguage(JSON.parse(localStorage.getItem('extra-floor-settings')||'{}').language);}catch{}
const localizeStatic=staticLocalization(document.body);localizeStatic();

const parameters=new URLSearchParams(location.search),debugEnabled=parameters.has('debug')&&!parameters.has('qa'),debugSettings={calm:true,xray:true};let debugTools;
const $=id=>document.getElementById(id),canvas=$('game');
let renderer;
try{renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});}catch(error){
 $('load-status').textContent=tr('无法启动 WebGL。请在 Chrome 或 Edge 中开启硬件加速。');
 $('start').disabled=false;$('start').textContent=tr('重新加载');$('start').onclick=()=>location.reload();throw error;
}
renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.4;
const scene=new T.Scene();scene.background=new T.Color(0x101a16);scene.fog=new T.FogExp2(0x101a16,.033);
const ambient=new T.HemisphereLight(0xb9c7af,0x26372f,.72);scene.add(ambient);
const camera=new T.PerspectiveCamera(72,1,.055,140);camera.rotation.order='YXZ';scene.add(camera);
// A single screen-space backdrop isolates the unchanged photograph, even in bright debug rooms.
const scareBackdrop=new T.Mesh(new T.PlaneGeometry(2,2),new T.ShaderMaterial({transparent:true,depthTest:false,depthWrite:false,vertexShader:'void main(){gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:'void main(){gl_FragColor=vec4(.004,.006,.005,1.);}'}));
scareBackdrop.frustumCulled=false;scareBackdrop.renderOrder=19;scareBackdrop.visible=false;scene.add(scareBackdrop);
const flashlight=new T.SpotLight(0xe3e5ce,12,16,.64,.78,1.7);flashlight.position.set(.12,-.12,0);flashlight.target.position.set(0,-.12,-6);camera.add(flashlight,flashlight.target);
const heldTorch=new T.Group();heldTorch.position.set(.24,-.27,-.46);heldTorch.scale.setScalar(.82);camera.add(heldTorch);
for(const [radius,length,z]of [[.035,.24,0],[.06,.09,-.15]]){const mesh=new T.Mesh(new T.CylinderGeometry(radius,radius,length,12),new T.MeshBasicMaterial({color:z===0?0x27312c:0x43534a}));mesh.rotation.x=Math.PI/2;mesh.position.z=z;heldTorch.add(mesh);}heldTorch.visible=false;
const heldLog=new T.Mesh(new T.CylinderGeometry(.075,.085,.48,10),[new T.MeshStandardMaterial({color:0x8c714b,map:painted('wood'),roughness:1}),new T.MeshStandardMaterial({color:0xab8a57,roughness:1}),new T.MeshStandardMaterial({color:0xab8a57,roughness:1})]);heldLog.position.set(-.3,-.3,-.58);heldLog.scale.setScalar(.85);heldLog.rotation.set(.65,0,-.35);heldLog.visible=false;camera.add(heldLog);
const torchMarker=document.createElement('div');torchMarker.className='remote-marker';torchMarker.hidden=true;document.body.append(torchMarker);const torchProjection=new T.Vector3();
const visitorCopies=[],assets={},models={},actors={},scareActors={},scareDefinitions={},ray=new T.Raycaster(),keys=new Set(),frameTimes=[];
let building,game,world,mode='loading',floorShown=0,yaw=-Math.PI/2,pitch=0,last=0,visualTime=0,walkTime=0;
const worlds=new Map();let worldStates;
let target=null,dragging=false,hadLock=false,subtitleTime=0,chapterTime=0,scareAge=0,resumeGrace=0;
let scareHit=false,scareVisual=scareFrame(0);
const gameAudio=new GameAudio();
const reducedPreference=matchMedia('(prefers-reduced-motion: reduce)').matches;
const settings={quality:'medium',volume:35,sensitivity:65,bob:false,reduced:reducedPreference,language:getLanguage()};
try{Object.assign(settings,JSON.parse(localStorage.getItem('extra-floor-settings')||'{}'));}catch{}
if(!['low','medium','high'].includes(settings.quality))settings.quality='medium';
for(const id of ['volume','sensitivity'])settings[id]=Math.max(id==='volume'?0:20,Math.min(id==='volume'?100:150,Number(settings[id])||0));
settings.language=setLanguage(settings.language);
const save=()=>{try{localStorage.setItem('extra-floor-settings',JSON.stringify(settings));}catch{}};
function resize(){const cap={low:.8,medium:1,high:1.5}[settings.quality];renderer.setPixelRatio(Math.min(devicePixelRatio,cap,Math.sqrt(2100000/(innerWidth*innerHeight))));renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
addEventListener('resize',resize);resize();
let broadcastVisual=null;
let subtitleMessage='';
function say(text,duration=4){if(mode==='scare')return;subtitleMessage=text;$('subtitle').textContent=tr(text);$('subtitle').classList.add('shown');subtitleTime=duration;}
function chapter(f){$('chapter').querySelector('strong').textContent=tr(f.title);$('chapter').querySelector('span').textContent=tr(`0${f.id} / ${f.tag}`);$('chapter').classList.add('shown');chapterTime=2.6;}
function sound(id='click'){if(settings.volume)gameAudio.play(id,id==='scare'?.55:.3);}
function lock(){if(debugEnabled)return;try{const p=canvas.requestPointerLock?.();if(p?.catch)p.catch(()=>say('按住鼠标拖动观察 · 方向键也可转头',4));}catch{}}
function unlock(){hadLock=false;if(document.pointerLockElement)document.exitPointerLock();}
function hud(show){$('hud').hidden=!show;$('crosshair').hidden=!show;if(!show){$('interact').hidden=true;$('threat').hidden=true;}}
function updateGuide(){
 const pickup=game?.floor.interactions.find(i=>i.type==='flashlight'),showPickup=mode==='playing'&&pickup&&!game.state.flashlight;
 torchMarker.hidden=!showPickup;
 if(showPickup){torchProjection.set(pickup.x,1.1,pickup.z).project(camera);const behind=torchProjection.z>1;if(behind){torchProjection.x=-Math.sign(torchProjection.x||1)*2;torchProjection.y=0;}torchMarker.style.left=`${T.MathUtils.clamp((torchProjection.x+1)*50,12,88)}%`;torchMarker.style.top=`${T.MathUtils.clamp((1-torchProjection.y)*50,20,80)}%`;torchMarker.textContent=tr('强光手电筒')+` · ${Math.round(Math.hypot(pickup.x-game.player.x,pickup.z-game.player.z))} m`;}
 const el=$('guide');el.hidden=mode!=='playing'||!!game.threat||!!game.hiding||!!game.peek||$('subtitle').classList.contains('shown');
 if(el.hidden)return;const text=tr(showPickup?'先到大厅东侧带画像的双门避险房拿强光手电筒。靠近按 E。':game.player.floor===1?(game.state.logKey?'已获得滚木。跟随旧照片到尽头防火门，按 E 开锁。':game.state.doors.find(d=>d.logLock).locked?(game.state.patrolCleared?'前往南侧第二走廊。准备强光，驱散棍母可获得滚木。':'先躲过巡楼。红灯亮起时，藏进画像标记的门内或柜内。'):'跟随旧照片到外门。按 E 开门，再走到室外。'):'跟随地上散落的旧照片，找到楼梯，继续下楼。');if($('guide-copy').textContent!==text)$('guide-copy').textContent=text;
}
function atmosphere(){
 const bright=game.floor.id===2,calm=debugEnabled&&debugSettings.calm;scene.fog.color.setHex(calm?0x85948b:bright?0x49544b:0x101a16);scene.background.copy(scene.fog.color);scene.fog.density=calm?.006:bright?.018:.033;ambient.intensity=calm?2:bright?1.05:.72;flashlight.intensity=calm?3:12;document.body.classList.toggle('debug-calm',calm);
}
function showFloor(){
 game.debugMode=debugEnabled;game.debugCalm=debugEnabled&&debugSettings.calm;
 if(worldStates!==game.states){for(const w of worlds.values())w.dispose();worlds.clear();worldStates=game.states;}
 const visible=game.renderFloors();
 for(const id of visible)if(!worlds.has(id))worlds.set(id,createWorld(scene,assets,building.byId[id],game.states[id],models));
 for(const [id,w]of worlds)if(!visible.includes(id)){w.dispose();worlds.delete(id);}
 for(const [id,w]of worlds){for(const s of w.stairGroups)s.group.visible=id===s.from||!worlds.has(s.from);for(const l of w.lights)l.visible=id===game.player.floor;}
 world=worlds.get(game.player.floor);if(floorShown===game.player.floor)return;
 floorShown=game.player.floor;const f=game.floor;
 atmosphere();
 $('floor-label').textContent=tr(`0${f.id} / ${f.title}`);
 if(mode==='playing')chapter(f);
}
function pose(){camera.position.set(game.player.x,game.player.y+1.65,game.player.z);camera.rotation.set(pitch,yaw,0);}
function start(retry=false){
 clearScare();
 if(retry)game.retry();else game=new Game(building,crypto.getRandomValues(new Uint32Array(1))[0]);
 mode='playing';floorShown=0;keys.clear();yaw=0;pitch=0;showFloor();pose();
 $('menu').hidden=true;$('pause').hidden=true;$('ending').hidden=true;$('fade').classList.remove('active');$('scare').classList.remove('shown');hud(true);
 gameAudio.stop();gameAudio.unlock().catch(e=>console.warn('Audio unlock failed',e.message));lock();resumeGrace=.35;frameTimes.length=0;
 if(!retry)say('到一楼出去。跟着地上的旧照片找到每层出口。E 操作。',6);
}
function pause(){if(mode!=='playing')return;gameAudio.stop();mode='paused';keys.clear();dragging=false;unlock();$('pause').hidden=false;hud(false);}
function resume(){if(mode!=='paused')return;mode='playing';$('pause').hidden=true;hud(true);resumeGrace=.5;lock();}
function menu(){clearScare();gameAudio.stop();mode='menu';keys.clear();unlock();$('menu').hidden=false;$('pause').hidden=true;$('ending').hidden=true;$('fade').classList.remove('active');$('scare').classList.remove('shown');$('subtitle').classList.remove('shown');$('chapter').classList.remove('shown');hud(false);game=new Game(building,8);floorShown=0;showFloor();game.player.x=30.6;game.player.z=8.4;pose();yaw=1.1;pitch=.01;Object.values(actors).forEach(a=>a.visible=false);}
function finish(won){
 clearScare();scareBackdrop.visible=!won;
 gameAudio.stop();mode=won?'won':'lost';keys.clear();unlock();hud(false);$('ending').hidden=false;$('scare').classList.remove('shown');$('vignette').classList.remove('danger');$('subtitle').classList.remove('shown');$('chapter').classList.remove('shown');
 $('end-en').textContent=won?'OUTSIDE / 01':'THE SAME NIGHT';$('end-title').textContent=tr(won?'你出来了。':'它还在这一层。');
 $('end-copy').textContent=tr(won?`用时 ${Math.floor(game.time/60)} 分 ${Math.floor(game.time%60)} 秒，摆脱 ${game.resolved} 次异常。身后，第五层的灯又亮了。`:`${game.failure} 从 ${game.checkpoint.floor} 楼继续，异常次序保持不变。`);
 $('end-stats').textContent=tr(`发现画像 ${game.discoveredPortraits.length} / ${game.portraitTotal} · 得分 ${game.score}`);
 $('restart').innerHTML=tr(won?'再走一次':`从 ${game.checkpoint.floor} 楼继续`)+' <span>↗</span>';$('new-run').hidden=won;
}
function clearScare(){
 scareBackdrop.visible=false;document.body.classList.remove('is-scaring');$('scare').classList.remove('shown');
 for(const a of [...Object.values(scareActors),...Object.values(actors)])a.visible=false;
}
function scare(){
 mode='scare';scareAge=0;scareHit=false;scareVisual=scareFrame(0,settings.reduced);gameAudio.stop();keys.clear();dragging=false;unlock();hud(false);
 $('peek').hidden=true;$('chapter').classList.remove('shown');$('subtitle').classList.remove('shown');$('vignette').classList.remove('danger');$('scare').classList.add('shown');document.body.classList.add('is-scaring');
}
function aim(){
 if(game.hiding){target=game.floor.interactions.find(i=>i.id===game.hiding.id);$('interact').hidden=mode!=='playing';$('interact').querySelector('span').textContent=tr('离开衣柜');return;}
 target=null;ray.setFromCamera(new T.Vector2(),camera);
 for(const hit of ray.intersectObjects(world.interactables,false)){
  if(hit.distance>2.65)break;const id=hit.object.userData.target;
  const d=game.state.doors.find(d=>d.id===id),item=game.floor.interactions.find(i=>i.id===id);
  if(item?.type==='flashlight'&&game.state.flashlight)continue;
  const walls=game.obstacles(floorShown,true).filter(w=>w!==d?.block&&!(hit.point.x>=w.minX-.08&&hit.point.x<=w.maxX+.08&&hit.point.z>=w.minZ-.08&&hit.point.z<=w.maxZ+.08));
  if(clearSight(game.player,{x:hit.point.x,z:hit.point.z},walls)){target=d||item;break;}
 }
 const remote=game.threat?.kind==='liang'?game.threat.remotes.find(r=>!r.collected&&Math.hypot(r.x-game.player.x,r.z-game.player.z)<=1.8&&game.line(game.player,r)):null;if(remote)target={...remote,type:'remote',label:'遥控器'};
 if(game.threat?.kind==='liang'&&game.threat.remotes.every(r=>r.collected)){const tv=game.floor.interactions.find(i=>i.id===game.threat.tvId);if(Math.hypot(tv.target.x-game.player.x,tv.target.z-game.player.z)<=2.65&&game.line(game.player,game.threat))target=tv;}
 $('interact').hidden=!target||mode!=='playing';
 if(target){const on=game.state.interactions[target.id];$('interact').querySelector('span').textContent=target.kind?(target.locked?tr(target.logLock?(game.state.logKey?'使用滚木开锁':'防火门已锁 · 需要滚木'):'查看封闭梯段'):target.broken?tr('木门已损坏'):[target.held?tr('门扇受阻')+' · ':'',tr(target.open?'关闭':'打开'),' ',tr(target.kind==='fire'?'防火门':target.kind==='exit'?'外门':'木门')].join('')):tr(target.label)+' · '+tr(target.type==='wardrobe'?'躲入':['remote','flashlight'].includes(target.type)?'拾取':target.type==='switch'&&game.state.blackout?(game.state.restoredSwitches.includes(target.id)?'已复位':'复位'):target.type==='switch'?(on?'开灯':'关灯'):target.type==='peek'?'观察':target.type==='portrait'?(game.discoveredPortraits.includes(target.id)?'已发现':'近看'):on?'关闭':'打开');}
}
function interact(){if(mode!=='playing')return;if(game.peek){game.interact(game.peek);return;}if(target?.type==='wardrobe'){if(game.interact(target.id)){if(game.hiding){yaw=game.hiding.yaw+Math.PI;pitch=0;}pose();sound('switch');}return;}if(target&&game.interact(target.id))sound(['remote','flashlight'].includes(target.type)?'pickup':target.type==='tv'?(game.state.interactions[target.id]?'switch':'power-off'):target.kind||target.type==='switch'?'switch':'click');}
function threatHud(){
 const t=game.threat,el=$('threat');el.hidden=!t||mode!=='playing';$('vignette').classList.toggle('danger',!!t&&mode==='playing'&&t.age>t.warning&&(t.kind!=='yujie'||game.sanityExposed));
 $('sanity').hidden=game.player.floor>3&&game.sanity>=100;$('sanity-value').textContent=tr(`理智 ${Math.ceil(game.sanity)} / 100`);$('sanity-fill').style.transform=`scaleX(${game.sanity/100})`;$('sanity').classList.toggle('draining',game.sanityExposed);
 if(t){let text=RULES[t.kind].action,progress=0;
  if(t.kind==='yujie'){text=t.age<t.warning?'来访将至 · 低头或转开视线':t.phase==='leaving'?'她正在消失 · 继续避开视线':t.observed?'正在失去理智 · 低头或转身':'视线已避开 · 可以低头继续走';progress=game.sanity/100;}
  else if(t.kind==='doubao'){text=t.phase==='leaving'?'黑影正在消散':`${t.illuminated?'强光命中':'对准黑影'} · 照射 ${t.exposure.toFixed(1)} / ${DISPEL_SECONDS} 秒`;progress=t.exposure/DISPEL_SECONDS;}
  else if(t.kind==='patrol'){text=t.age<t.warning?(t.sealed?`巡楼将至 · ${Math.ceil(t.warning-t.age)} 秒 · 画像保护中`:`巡楼将至 · ${Math.ceil(t.warning-t.age)} 秒 · 找蒋介石画像的门或柜`):t.phase==='leaving'?'巡楼者正在退去 · 再等一下':t.sealed?'画像保护中 · 等待巡查结束':'没有画像保护 · 危险';progress=t.age<t.warning?t.age/t.warning:Math.min(1,(t.age-t.warning)/3);}
  else if(t.kind==='liang'){const count=t.remotes.filter(r=>r.collected).length;text=`遥控器 ${count} / 2 · 剩余 ${Math.ceil(Math.max(0,t.warning+t.duration-t.age))} 秒`+(count===2?' · 回到电视按 E 关闭':'');progress=1-t.pressure;}
  else if(t.age<t.warning){text=`${RULES[t.kind].action} · 它正在注意你`;progress=t.age/t.warning;}
  else if(t.kind==='inspector'){text=t.phase==='checking'?`静止检查 ${t.checks+1} / 2 · 可以转头`:t.phase==='between'?'第一次通过。它还没有走。':'两次检查通过，等它退去。';progress=t.checks/2;if(t.phase==='checking')progress+=Math.min(1,((t.age-t.warning-(t.checks?4.2:0))/3))*.5;}
  else if(t.phase==='wardrobe-search'||t.phase==='wardrobe-leaving'){text=t.phase==='wardrobe-search'?'藏好 · 它还在柜外搜寻':'它正在走远 · 继续等候';progress=1-t.wardrobeAge/8.5;}
  else if(t.phase==='breaching'){text='木门正在变形 · 从另一边离开';progress=Math.min(1,t.doorTime/t.breachWarning);}
  else if(t.phase==='held')text='门挡住了它 · 继续绕过实体墙';
  else if(t.kind==='naiwa')text=t.observed?'它停住了 · 后退，别靠近':'它仍在寻找你 · 绕过实体墙，拉开距离';
  if(t.kind==='inspector'&&t.movementLocked)text='已经被盯上。再次移动会被抓，可以转头。';
  if(t.kind==='inspector'&&t.moveDeadline!=null){text='它看见你动了。半秒内停住！';progress=Math.max(0,(t.moveDeadline-t.age)/.5);}
  $('threat-name').textContent=tr(RULES[t.kind].title);$('threat-action').textContent=tr(text);$('threat-progress').style.transform=`scaleX(${Math.max(.025,progress)})`;el.dataset.kind=t.kind;
 }
 $('checkpoint').textContent=game.state.blackout?tr(`本层断电 · 复位开关 ${game.state.restoredSwitches.length} / ${game.powerSwitchesRequired}`):tr(game.pendingCheckpoint?'尚未脱险 · 检查点待生效':`继续点 · ${game.checkpoint.floor} 楼`);
}
const heatPositions=new Float32Array(48*3),heatGeometry=new T.BufferGeometry();heatGeometry.setAttribute('position',new T.BufferAttribute(heatPositions,3));
const sparkCanvas=document.createElement('canvas');sparkCanvas.width=sparkCanvas.height=32;const sparkContext=sparkCanvas.getContext('2d'),sparkGradient=sparkContext.createRadialGradient(16,16,0,16,16,16);sparkGradient.addColorStop(0,'white');sparkGradient.addColorStop(.2,'#fff1bb');sparkGradient.addColorStop(1,'transparent');sparkContext.fillStyle=sparkGradient;sparkContext.fillRect(0,0,32,32);const sparkTexture=new T.CanvasTexture(sparkCanvas);
const heatParticles=new T.Points(heatGeometry,new T.PointsMaterial({map:sparkTexture,color:0xffb34b,size:.14,transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false}));heatParticles.frustumCulled=false;heatParticles.visible=false;scene.add(heatParticles);
function updateActors(dt){
 const heat=game.threat;heatParticles.visible=mode==='playing'&&heat?.kind==='doubao'&&heat.illuminated&&heat.phase!=='leaving';
 if(heatParticles.visible){const height=Math.max(.1,2.65+gunmuRise(heat.age));for(let i=0;i<48;i++){const a=i*2.399+visualTime*.4,r=.4+(i%7)*.075;heatPositions[i*3]=heat.x+Math.cos(a)*r;heatPositions[i*3+1]=(heat.floor-1)*RISE+((i/48+visualTime*.65)%1)*height;heatPositions[i*3+2]=heat.z+Math.sin(a)*r;}heatGeometry.attributes.position.needsUpdate=true;}

 for(const [kind,a]of Object.entries(actors)){
  const t=game.threat;a.visible=!!t&&kind===t.kind&&(mode==='scare'?scareVisual.visible&&!scareActors[scareKey(t)]:['playing','paused'].includes(mode)&&kind!=='liang'&&worlds.has(t.floor)&&!(kind==='yujie'&&t.age<t.warning));
  if(!a.visible)continue;
  const y=(t.y??(t.floor-1)*RISE)+1.325;a.position.set(t.x,y+(kind==='doubao'?gunmuRise(t.age):0),t.z);a.rotation.y=Math.atan2(camera.position.x-t.x,camera.position.z-t.z);
  const u=a.material.uniforms;u.uHeat.value=kind==='doubao'?Math.min(1,t.exposure/DISPEL_SECONDS+(t.illuminated?.15:0)):0;u.uGround.value=kind==='doubao'?(t.floor-1)*RISE:-1000;u.uTime.value=visualTime;u.uLight.value=t.kind==='doubao'&&t.illuminated?1.1:t.kind==='inspector'?.82:.76;u.uOpacity.value=(t.kind==='patrol'||t.kind==='yujie'||t.kind==='doubao')&&t.phase==='leaving'?Math.max(0,1-t.retreat/1.3):t.kind==='inspector'&&t.phase==='leaving'?Math.max(0,1-(t.age-t.warning-7.2)/1.3):1;
  a.scale.setScalar(t.kind==='inspector'?1.05:1);
  a.material.depthTest=mode!=='scare';a.renderOrder=mode==='scare'?20:0;
  if(mode==='scare'){
   const offset={inspector:[0,-.65],kun:[-.25,-1.28],naiwa:[.08,-1.18],liang:[0,-.5]}[kind];placeScareActor(a,offset,kind==='naiwa'?1.15:1.3);
  }
 }
 const t=game.threat;
 visitorCopies.forEach((a,i)=>{const p=t?.kind==='yujie'?t.copies?.[i+1]:null;a.visible=!!p&&actors.yujie.visible&&mode!=='scare';if(a.visible){a.position.set(p.x,(p.floor-1)*RISE+1.325,p.z);a.rotation.y=Math.atan2(camera.position.x-p.x,camera.position.z-p.z);}});
}
function updateScareActors(){
 for(const [key,a]of Object.entries(scareActors)){
  a.visible=mode==='scare'&&scareVisual.visible&&!!game.threat&&key===scareKey(game.threat);if(!a.visible)continue;
  const def=scareDefinitions[key];placeScareActor(a,def.offset,def.scale);
 }
}
function placeScareActor(a,offset,scale){
 const s=scareVisual,p=new T.Vector3(offset[0]+s.x,offset[1]+s.y,-s.distance).applyQuaternion(camera.quaternion);
 a.position.copy(camera.position).add(p);a.quaternion.copy(camera.quaternion);a.rotateZ(s.roll);a.scale.setScalar(scale);a.material.uniforms.uLight.value=s.light;a.material.uniforms.uOpacity.value=1;
}
function step(dt){
 if(game.hiding){const facing=game.hiding.yaw+Math.PI;yaw=facing+T.MathUtils.clamp(Math.atan2(Math.sin(yaw-facing),Math.cos(yaw-facing)),-.35,.35);pitch=T.MathUtils.clamp(pitch,-.18,.18);}
 if(keys.has('ArrowLeft'))yaw+=dt*1.5;if(keys.has('ArrowRight'))yaw-=dt*1.5;if(keys.has('ArrowUp'))pitch+=dt;if(keys.has('ArrowDown'))pitch-=dt;pitch=T.MathUtils.clamp(pitch,-1.15,1.15);
 const input={yaw,pitch,verticalFov:camera.fov*Math.PI/180,aspect:camera.aspect,forward:+keys.has('KeyW')-+keys.has('KeyS'),right:+keys.has('KeyD')-+keys.has('KeyA'),sprint:keys.has('ShiftLeft')||keys.has('ShiftRight')};game.lastInput=input;
 if(resumeGrace>0)resumeGrace-=dt;else game.tick(dt,input);
 showFloor();pose();const strong=game.states[1].flashlight;heldTorch.visible=strong&&!game.hiding&&!game.peek;heldLog.visible=mode==='playing'&&game.states[1].logKey&&!game.hiding&&!game.peek;flashlight.intensity=game.hiding?0:strong?65:game.debugCalm?3:12;flashlight.angle=strong?FLASHLIGHT_HALF_ANGLE:.64;flashlight.distance=strong?20:16;flashlight.penumbra=strong?.25:.78;ambient.intensity=game.debugCalm?2:game.state.blackout?.09:game.floor.id===2?1.05:.72;
 if(settings.bob&&!game.hiding&&(input.forward||input.right)){walkTime+=dt*(input.sprint?3.65:2.4);camera.position.y+=Math.sin(walkTime*7)*.015;}
 const peek=game.floor.interactions.find(i=>i.id===game.peek);$('peek').hidden=!peek;
 const targetFov=game.hiding?60:peek?43:input.sprint?74:72;camera.fov=T.MathUtils.damp(camera.fov,targetFov,5,dt);camera.updateProjectionMatrix();
 if(peek){const side=Math.sign((game.player.x-peek.target.x)*Math.sin(peek.yaw)+(game.player.z-peek.target.z)*Math.cos(peek.yaw))||1;camera.position.x=T.MathUtils.lerp(camera.position.x,peek.target.x+Math.sin(peek.yaw)*.25*side,.92);camera.position.z=T.MathUtils.lerp(camera.position.z,peek.target.z+Math.cos(peek.yaw)*.25*side,.92);}
 aim();threatHud();if(game.threat)$('chapter').classList.remove('shown');
 if(game.messages.length){const message=game.messages.pop();game.messages=[];say(message.text,message.duration);}
 if(game.debugPendingScare){game.debugPendingScare=false;scare();}else if(game.mode==='lost')scare();else if(game.mode==='won')finish(true);
}
function frame(t){
 requestAnimationFrame(frame);const raw=last?(t-last)/1000:0;last=t;const dt=Math.min(raw,.08);
 if(mode==='playing'){step(dt);frameTimes.push(raw*1000);if(frameTimes.length>600)frameTimes.shift();}
 if(mode==='playing'||mode==='menu'||mode==='scare')visualTime+=dt;
 if(mode==='scare'){
  scareAge+=dt;scareVisual=scareFrame(scareAge,settings.reduced);scareBackdrop.visible=true;
  $('scare').style.setProperty('--scare-black',scareVisual.black);$('scare').style.setProperty('--scare-grain',scareVisual.grain);
  if(scareAge>=SCARE_DURATION){if(debugEnabled){clearScare();gameAudio.stop();mode='playing';hud(true);resumeGrace=.35;}else finish(false);}
 }
 if(world){if(mode==='menu')camera.rotation.set(.01,yaw+Math.sin(t*.00008)*.025,0);if(mode!=='paused')for(const w of worlds.values())w.update(dt,camera,visualTime,game,settings.reduced);updateActors(dt);updateScareActors();}
 if(mode==='playing'){if((subtitleTime-=dt)<=0)$('subtitle').classList.remove('shown');if((chapterTime-=dt)<=0)$('chapter').classList.remove('shown');}
 updateGuide();gameAudio.update(game,mode,settings.volume,yaw,document.hidden,mode==='scare'?1-scareVisual.fade:1);
 if(mode==='scare'&&!scareHit&&scareAge>=SCARE_IMPACT){scareHit=true;sound('scare');}
 broadcastVisual?.update(game,camera,visualTime,mode);debugTools?.update(dt);renderer.render(scene,camera);
 if(diagnostics&&Math.floor(t/500)!==Math.floor((t-raw*1000)/500))diagnostics.textContent=JSON.stringify({state:window.__game.state,stats:window.__game.stats});
}
addEventListener('keydown',e=>{
 if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)&&mode==='playing')e.preventDefault();
 if(e.code==='Escape'){if(mode==='playing')pause();else if(mode==='paused')resume();return;}
 if(!['playing','scare'].includes(mode))return;if(mode==='playing'){keys.add(e.code);if(e.code==='KeyE'&&!e.repeat)interact();}if(e.code==='KeyM'&&!e.repeat){settings.volume=settings.volume?0:35;$('volume').value=settings.volume;save();if(mode==='playing')say(settings.volume?'环境声音已开启':'环境声音已关闭',2);}
});
addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',pause);document.addEventListener('visibilitychange',()=>{if(document.hidden){gameAudio.stop();pause();}});
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement===canvas)hadLock=true;else if(hadLock&&mode==='playing')pause();});
canvas.addEventListener('pointerdown',e=>{if(mode==='playing'){dragging=true;canvas.setPointerCapture(e.pointerId);}});addEventListener('pointerup',()=>dragging=false);
addEventListener('mousemove',e=>{if(mode!=='playing'||(!document.pointerLockElement&&!dragging))return;const s=settings.sensitivity*.00003;yaw-=e.movementX*s;pitch=T.MathUtils.clamp(pitch-e.movementY*s,-1.15,1.15);});
$('start').onclick=()=>start();$('resume').onclick=resume;$('pause-button').onclick=pause;$('quit').onclick=menu;$('end-menu').onclick=menu;$('restart').onclick=()=>start(game.mode==='lost');$('new-run').onclick=()=>start();
$('settings-toggle').onclick=()=>{$('settings').hidden=!$('settings').hidden;};
for(const id of ['quality','volume','sensitivity','bob','reduced']){const el=$(id),checkbox=['bob','reduced'].includes(id);if(checkbox)el.checked=!!settings[id];else el.value=settings[id];el.oninput=()=>{settings[id]=checkbox?el.checked:id==='quality'?el.value:Number(el.value);save();if(id==='quality')resize();};}
function changeLanguage(value){
 settings.language=setLanguage(value);save();localizeStatic();
 for(const id of ['language','pause-language'])$(id).value=settings.language;
 $('subtitle').textContent=tr(subtitleMessage);
 if(mode!=='loading'){$('start').innerHTML=tr('进入楼道')+' <span>↗</span>';$('load-status').textContent=tr('建议电脑游玩 · 静音也能判断全部危险');}
 if(game){for(const w of worlds.values())w.localize();$('floor-label').textContent=tr(`0${game.floor.id} / ${game.floor.title}`);chapter(game.floor);if(mode!=='playing')$('chapter').classList.remove('shown');threatHud();aim();}
}
for(const id of ['language','pause-language']){$(id).value=settings.language;$(id).onchange=e=>changeLanguage(e.target.value);}
const diagnostics=parameters.has('debug')&&!debugEnabled?document.body.appendChild(document.createElement('pre')):null;
if(diagnostics)diagnostics.id='diagnostics';
window.__game={get state(){return{mode,language:getLanguage(),floor:game?.player.floor,position:game?{...game.player}:null,yaw,elapsed:game?.time,sanity:game?.sanity,seed:game?.seed,threat:game?.threat?{kind:game.threat.kind,phase:game.threat.phase,checks:game.threat.checks,searched:game.threat.searched,position:[game.threat.x,game.threat.z],observed:game.threat.observed,age:game.threat.age,warning:game.threat.warning,copies:game.threat.copies}:null,checkpoint:game?.checkpoint.floor,pendingCheckpoint:game?.pendingCheckpoint,target:target?.id,travel:game?.travel,hiding:game?.hiding,interactions:game?.state.interactions};},get stats(){const s=[...frameTimes].sort((a,b)=>a-b);return{samples:s.length,medianMs:s[Math.floor(s.length*.5)]||0,p95Ms:s[Math.floor(s.length*.95)]||0,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,textures:renderer.info.memory.textures,geometries:renderer.info.memory.geometries,resolution:renderer.getDrawingBufferSize(new T.Vector2()).toArray()};}};
async function boot(){
 try{
  const response=await fetch(assetUrl('/assets/apartment/floors.json'));if(!response.ok)throw new Error('Floor data unavailable');building=prepareBuilding(await response.json());
  const assetResponse=await fetch(assetUrl('/assets/apartment/runtime-manifest.json'));if(!assetResponse.ok)throw new Error('Asset manifest unavailable');const manifest=await assetResponse.json();
  for(const f of building.floors)for(const i of f.interactions)if(i.type==='portrait')i.asset=manifest.portraitInteractions[i.id]||i.asset;
  const total=Object.keys(manifest.textures).length+Object.keys(manifest.models).length;let loaded=0;await Promise.all(Object.entries(manifest.textures).map(async([key,item])=>{const tex=await new T.TextureLoader().loadAsync(assetUrl(item.url));tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());assets[key]=tex;$('load-status').textContent=tr(`准备照片与装置 ${++loaded} / ${total}`);}));
  await Promise.all(Object.entries(manifest.models).map(async([key,url])=>{models[key]=(await new GLTFLoader().loadAsync(assetUrl(url))).scene;$('load-status').textContent=tr(`准备照片与装置 ${++loaded} / ${total}`);}));
  assets.floorPhotos=manifest.floorPhotos.map(key=>assets[key]);
  for(const kind of ['inspector','naiwa','kun','liang','patrol','yujie','doubao']){actors[kind]=manifest.billboards?.[kind]?createCutoutActor(assets[manifest.billboards[kind].asset||kind],manifest.billboards[kind]):createActor(assets[kind],kind);actors[kind].visible=false;scene.add(actors[kind]);}
  for(let i=0;i<2;i++){const copy=actors.yujie.clone();copy.visible=false;visitorCopies.push(copy);scene.add(copy);}
  Object.assign(scareDefinitions,manifest.scares);for(const [key,def]of Object.entries(scareDefinitions)){const a=createCutoutActor(assets[def.asset],def);a.material.depthTest=false;a.renderOrder=20;a.visible=false;scene.add(a);scareActors[key]=a;}
  broadcastVisual=createBroadcast(scene,assets.liang);
  menu();await renderer.compileAsync(scene,camera);$('start').disabled=false;$('start').innerHTML=tr('进入楼道')+' <span>↗</span>';$('load-status').textContent=tr('建议电脑游玩 · 静音也能判断全部危险');
  // The development-only rehearsal is served from work/ and excluded from production builds.
  if(import.meta.env.DEV&&(parameters.has('qa')||parameters.has('safeqa'))){const url='/work/integration-20261115/rehearsal.js?revision=46';const {install}=await import(/* @vite-ignore */url);install({audio:gameAudio,game:()=>game,start,scene,camera,actors,scareActors,world:()=>world,worlds,showFloor,setView:(y,p=0)=>{yaw=y;pitch=p;pose();},mode:()=>mode,pause,resume,settings});}
  if(debugEnabled){const {installDebug}=await import('./debug.js');debugTools=installDebug({scene,camera,game:()=>game,stats:()=>window.__game.stats,mode:()=>mode,settings:debugSettings,calm:()=>{game.debugCalm=debugSettings.calm;atmosphere();},jump:floor=>{if(mode==='paused')resume();else if(mode!=='playing')start();game.threat=null;game.travel=null;game.peek=null;game.pendingCheckpoint=null;game.player={floor,x:12,z:building.byId[floor].arrival==='A'?4:28,y:(floor-1)*RISE};game.cooldown=3;target=null;keys.clear();floorShown=0;showFloor();yaw=-Math.PI/2;pitch=0;pose();$('chapter').classList.remove('shown');$('subtitle').classList.remove('shown');}});}
  requestAnimationFrame(frame);
 }catch(error){console.error(error);$('load-status').textContent=tr('场景加载失败，请重新加载。');$('start').disabled=false;$('start').textContent=tr('重新加载');$('start').onclick=()=>location.reload();}
}
boot();

