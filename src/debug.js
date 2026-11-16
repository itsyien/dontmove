import * as T from 'three';
import {RISE} from './building.js';
import {RULES} from './simulation.js';
import {tr} from './i18n.js';

export function installDebug(ctx){
 const panel=document.createElement('aside');panel.id='debug-panel';panel.setAttribute('aria-label','Game debug tools');
 panel.innerHTML=`<header><strong>DEBUG / SAFE</strong><button id="debug-collapse" aria-expanded="true">收起</button></header>
 <div id="debug-body"><p class="debug-safe">免死 · jumpscare 正常显示 · 鼠标拖动转头</p>
 <div class="debug-floors" aria-label="切换楼层">${[5,4,3,2,1].map(f=>`<button data-floor="${f}">${f}F</button>`).join('')}</div>
 <label><input id="debug-calm" type="checkbox" checked> 明亮环境 / 停止灯闪</label>
 <label><input id="debug-xray" type="checkbox" checked> 角色透视标记</label>
 <button id="debug-clear">清除当前遭遇</button><pre id="debug-info" aria-label="实时游戏状态"></pre>
 <small>仅此调试链接生效；普通模式保留原玩法。</small></div>`;
 document.body.append(panel);const body=panel.querySelector('#debug-body'),info=panel.querySelector('#debug-info');
 panel.querySelector('#debug-collapse').onclick=e=>{body.hidden=!body.hidden;e.currentTarget.textContent=body.hidden?'展开':'收起';e.currentTarget.setAttribute('aria-expanded',String(!body.hidden));};
 for(const b of panel.querySelectorAll('[data-floor]'))b.onclick=()=>ctx.jump(Number(b.dataset.floor));
 panel.querySelector('#debug-calm').onchange=e=>{ctx.settings.calm=e.target.checked;ctx.calm();};
 panel.querySelector('#debug-xray').onchange=e=>{ctx.settings.xray=e.target.checked;};
 panel.querySelector('#debug-clear').onclick=()=>ctx.game().resolveThreat();
 const shape=new T.BoxGeometry(1.25,2.65,.6),lines=new T.EdgesGeometry(shape);shape.dispose();
 const marker=new T.LineSegments(lines,new T.LineBasicMaterial({color:0x44e6b1,depthTest:false,transparent:true,opacity:.95}));marker.renderOrder=25;ctx.scene.add(marker);
 const tag=document.createElement('div');tag.className='debug-target';document.body.append(tag);const markers=[{marker,tag}];for(let i=0;i<2;i++){const m=marker.clone(),label=tag.cloneNode();ctx.scene.add(m);document.body.append(label);markers.push({marker:m,tag:label});}const projected=new T.Vector3();let elapsed=1;
 function update(dt){
  const g=ctx.game(),t= g.threat,playing=ctx.mode()==='playing',points=t?(t.copies||[t]):[];
  markers.forEach(({marker,tag},i)=>{const p=points[i];marker.visible=!!p&&playing;tag.hidden=!marker.visible;
  if(marker.visible){marker.position.set(p.x,(p.y??(p.floor-1)*RISE)+1.325,p.z);marker.material.depthTest=!ctx.settings.xray;projected.copy(marker.position);projected.y+=1.5;projected.project(ctx.camera);tag.hidden=projected.z< -1||projected.z>1||Math.abs(projected.x)>1||Math.abs(projected.y)>1||!ctx.settings.xray;if(!tag.hidden){tag.style.left=`${(projected.x*.5+.5)*innerWidth}px`;tag.style.top=`${(-projected.y*.5+.5)*innerHeight}px`;tag.textContent=`${tr(RULES[t.kind].title)} · ${Math.hypot(p.x-g.player.x,p.z-g.player.z).toFixed(1)} m`;}}
  });
  elapsed+=dt;if(elapsed<.2)return;elapsed=0;
  for(const b of panel.querySelectorAll('[data-floor]'))b.setAttribute('aria-pressed',String(Number(b.dataset.floor)===g.player.floor));
  const s=ctx.stats(),p=g.player,d=g.state.doors.reduce((best,d)=>!best||Math.hypot(d.x-p.x,d.z-p.z)<Math.hypot(best.x-p.x,best.z-p.z)?d:best,null),travel=g.travel;
  info.textContent=[`状态 ${ctx.mode()} · ${p.floor}F · seed ${g.seed}`,`位置 X ${p.x.toFixed(2)}  Y ${p.y.toFixed(2)}  Z ${p.z.toFixed(2)}`,`楼梯 ${travel?`${travel.core} / ${travel.phase} / from ${travel.from}`:'走廊'}`,`理智 ${g.sanity.toFixed(1)} / 100 · 检查点 ${g.checkpoint.floor}F`,t?`角色 ${t.kind} · ${t.phase} · ${points.length} 个\n遭遇 ${t.age.toFixed(1)}s / 预警 ${t.warning.toFixed(1)}s\n可见 ${!!t.observed} · 位置 ${t.x.toFixed(1)}, ${t.z.toFixed(1)} / ${t.floor}F`:'角色 无',t?.kind==='liang'?`遥控器 ${t.remotes.filter(r=>r.collected).length}/2 · 剩余 ${Math.max(0,t.warning+t.duration-t.age).toFixed(1)}s`:'',`供电 ${g.state.blackout?'断电':'正常'} · 复位 ${g.state.restoredSwitches.length}/${g.powerSwitchesRequired} · 画像 ${g.discoveredPortraits.length}/${g.portraitTotal} · ${g.score} 分`,`下次巡楼 ${g.state.patrolWait.toFixed(1)}s · 来访 ${g.state.yujieWait.toFixed(1)}s`,[1,4].includes(p.floor)?`坤坤返回 ${g.state.kunWait.toFixed(1)}s`:'',p.floor===1?`巡楼已过 ${g.state.patrolCleared} · 滚木 ${g.state.logKey?'持有':'无'} · 最终防火门 ${g.state.doors.find(d=>d.logLock).locked?'上锁':'已解锁'}`:'',p.floor===1?`强光 ${g.state.flashlight?'已拾取':'未拾取'} · 棍母 ${g.state.doubaoWait===null?'未安排':g.state.doubaoWait>0?'出生重试 '+g.state.doubaoWait.toFixed(1)+'s':'等待南侧第二走廊'}${t?.kind==='doubao'?' · 照射 '+t.exposure.toFixed(1)+'/5s':''}`:'',d?`最近门 ${d.id} · ${Math.round(d.amount*100)}%\n${d.open?'开启':'关闭'} / ${d.held?'受阻':'未受阻'} / 距离 ${Math.hypot(d.x-p.x,d.z-p.z).toFixed(1)}m`:'',g.debugLastCatch?`已拦截抓捕 ${g.debugLastCatch.kind} @ ${g.debugLastCatch.time.toFixed(1)}s`:'已拦截抓捕 无',`FPS ${s.medianMs?Math.round(1000/s.medianMs):'—'} · p95 ${s.p95Ms.toFixed(1)}ms`,`绘制 ${s.drawCalls} · 三角形 ${s.triangles.toLocaleString()}`,`分辨率 ${s.resolution.join(' × ')}`].join('\n');
 }
 update(0);return{update};
}
