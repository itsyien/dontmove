import {assetUrl} from './asset-url.js';
const FILES=['room-tone','tv-static','warning','scare','power-off','click','pickup','switch'];
export class GameAudio{
 constructor(){this.buffers=new Map();this.loops=new Map();this.voices=new Set();this.previousThreat=null;this.volume=0;}
 async unlock(){
  if(!this.ctx){
   this.ctx=new AudioContext();this.master=this.ctx.createGain();this.master.gain.value=0;const compressor=this.ctx.createDynamicsCompressor();compressor.threshold.value=-16;compressor.ratio.value=5;compressor.attack.value=.008;compressor.release.value=.2;this.master.connect(compressor).connect(this.ctx.destination);
   this.ambience=this.ctx.createGain();this.sfx=this.ctx.createGain();this.ambience.connect(this.master);this.sfx.connect(this.master);
   this.loading=Promise.allSettled(FILES.map(async id=>{try{const r=await fetch(assetUrl(`/assets/audio/${id}.ogg`));if(!r.ok)throw new Error(r.status);this.buffers.set(id,await this.ctx.decodeAudioData(await r.arrayBuffer()));}catch(e){console.warn(`Audio unavailable: ${id}`,e.message);}}));
  }
  if(this.ctx.state==='suspended')await this.ctx.resume();
 }
 play(id,volume=.3){
  if(!this.ctx||!this.volume||!this.buffers.has(id))return false;
  if(this.voices.size>=6){const oldest=this.voices.values().next().value;this.voices.delete(oldest);oldest.stop();}
  const source=this.ctx.createBufferSource(),gain=this.ctx.createGain();source.buffer=this.buffers.get(id);gain.gain.value=volume*({warning:4.7,scare:7.5,'power-off':9.5}[id]??1);source.connect(gain).connect(this.sfx);this.voices.add(source);
  source.onended=()=>{this.voices.delete(source);source.disconnect();gain.disconnect();};source.start();return true;
 }
 loop(id,volume,pan=0,rate=1){
  let l=this.loops.get(id);if(!l&&volume>0&&this.buffers.has(id)){
   const source=this.ctx.createBufferSource(),gain=this.ctx.createGain(),panner=this.ctx.createStereoPanner();source.buffer=this.buffers.get(id);source.loop=true;gain.gain.value=0;source.connect(gain).connect(panner).connect(this.ambience);source.start();l={source,gain,panner};this.loops.set(id,l);
  }
  if(l){l.gain.gain.setTargetAtTime(volume,this.ctx.currentTime,.18);l.panner.pan.setTargetAtTime(pan,this.ctx.currentTime,.15);l.source.playbackRate.setTargetAtTime(rate,this.ctx.currentTime,.2);}
 }
 update(game,mode,volume,yaw,hidden=false,fade=1){
  if(!this.ctx)return;const active=!hidden&&(mode==='playing'||mode==='scare');this.volume=active?volume:0;this.master.gain.setTargetAtTime(this.volume/100*.7*fade,this.ctx.currentTime,.04);
  const t=game.threat;if(t!==this.previousThreat){if(t&&mode==='playing'&&!game.debugCalm)this.play('warning',.2);this.previousThreat=t;}
  this.loop('room-tone',mode==='playing'&&!game.debugCalm&&!hidden?(game.state.blackout?.06:.12):0);
  const tv=mode==='playing'&&t?.kind==='liang'&&!game.debugCalm&&!hidden;
  const dx=tv?t.x-game.player.x:0,dz=tv?t.z-game.player.z:0,distance=Math.hypot(dx,dz),pan=distance?(Math.cos(yaw)*dx-Math.sin(yaw)*dz)/distance:0;
  this.loop('tv-static',tv?(.10+t.pressure*.17)/(1+distance/5)*(game.line(game.player,t)?1:.3):0,pan,tv?.85+t.pressure*.3:1);
 }
 stop(){
  if(this.master)this.master.gain.setValueAtTime(0,this.ctx.currentTime);this.volume=0;
  for(const l of this.loops.values()){l.source.stop();l.source.disconnect();l.gain.disconnect();l.panner.disconnect();}this.loops.clear();
  for(const s of [...this.voices])s.stop();this.voices.clear();
 }
}
