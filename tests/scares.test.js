import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {createCutoutActor,scareKey,scareFrame,SCARE_IMPACT,SCARE_DURATION} from '../src/actors.js';
test('new Kun pursuit PNG is the supplied unchanged RGBA image',()=>{const bytes=fs.readFileSync(new URL('../public/assets/apartment/kun-chase.png',import.meta.url));assert.equal(bytes.readUInt32BE(16),474);assert.equal(bytes.readUInt32BE(20),526);assert.equal(bytes[25],6);assert.equal(createHash('sha256').update(bytes).digest('hex'),'b2ec2baa51f455e59969803a9ba24e64fc9d8b078197a5a0a351281cc28f2a93');});
test('Kun uses the supplied transparent basketball cutout during pursuit and a separate horror image only for capture',()=>{const m=JSON.parse(fs.readFileSync(new URL('../public/assets/apartment/runtime-manifest.json',import.meta.url)));assert.equal(m.textures.kun.url,'/assets/apartment/kun-chase.png');assert.notEqual(m.scares.kun.asset,'kun');assert.equal(m.textures[m.scares.kun.asset].url,'/assets/apartment/scares/kunKunKongBu.png');assert(!m.characterModels?.kun);assert.deepEqual(m.billboards.kun.bounds,[51,0,372,526]);});
test('inspector keeps its dedicated catch image in both inspections; other identities stay distinct',()=>{assert.equal(scareKey({kind:'inspector',checks:0}),'inspector');assert.equal(scareKey({kind:'inspector',checks:1}),'inspector');assert.equal(scareKey({kind:'kun',checks:0}),'kun');assert.equal(scareKey({kind:'naiwa'}),'naiwa');assert.equal(scareKey({kind:'liang'}),'liang');});
test('pre-cut character keeps full alpha and uses the supplied crop without stretching',()=>{const t=new T.Texture({width:597,height:332}),a=createCutoutActor(t,{bounds:[225,22,457,332]});a.geometry.computeBoundingBox();const b=a.geometry.boundingBox;assert(Math.abs((b.max.x-b.min.x)/(b.max.y-b.min.y)-232/310)<1e-6);assert.equal(a.material.uniforms.uMap.value,t);assert.equal(a.material.uniforms.uKind.value,4);const uv=a.geometry.attributes.uv;assert(Math.abs(uv.getX(0)-225/597)<1e-6);assert(Math.abs(uv.getY(0)-(1-22/332))<1e-6);a.geometry.dispose();a.material.dispose();});
test('every dedicated scare explicitly references a shipped texture and framing',()=>{const m=JSON.parse(fs.readFileSync(new URL('../public/assets/apartment/runtime-manifest.json',import.meta.url)));for(const k of ['inspector','kun']){const s=m.scares[k];assert(s.offset.length===2);assert(s.scale>0);assert(fs.existsSync(new URL('../public'+m.textures[s.asset].url,import.meta.url)));}});

test('Naiwa keeps its normal image and uses the newly supplied transparent thinking pose only for capture',()=>{const m=JSON.parse(fs.readFileSync(new URL('../public/assets/apartment/runtime-manifest.json',import.meta.url)));assert.equal(m.textures.naiwa.url,'/assets/naiwa.jpg');const s=m.scares.naiwa;assert.equal(s.asset,'naiwaScare');const bytes=fs.readFileSync(new URL('../public'+m.textures[s.asset].url,import.meta.url));assert.equal(bytes.readUInt32BE(16),1254);assert.equal(bytes.readUInt32BE(20),1254);assert(s.bounds[2]<=1254&&s.bounds[3]<=1254);});
test('capture has a dark intake, fast arrival, readable hold and black ending without flashing',()=>{
 const before=scareFrame(SCARE_IMPACT-.01),hit=scareFrame(SCARE_IMPACT+.13),hold=scareFrame(.8),end=scareFrame(SCARE_DURATION);
 assert.equal(before.visible,false);assert.equal(before.black,1);assert(hit.visible);assert(hit.distance<1.1);assert.equal(hit.black,0);assert.equal(hold.black,0);assert(Math.abs(hold.roll)<.001);assert.equal(end.visible,false);assert.equal(end.black,1);assert.equal(end.fade,1);
 for(let a=0;a<2;a+=.01){const s=scareFrame(a);assert(s.black>=0&&s.black<=1);assert(s.light<=1.04);assert(s.distance>.9);}
});
test('reduced motion removes all shake, roll and scan noise, keeps a slower reveal and the same end time',()=>{
 for(let a=0;a<2;a+=.01){const s=scareFrame(a,true);assert.equal(s.x,0);assert.equal(s.y,0);assert.equal(s.roll,0);assert.equal(s.grain,0);}
 assert(scareFrame(.25,true).black>scareFrame(.25).black);assert(scareFrame(.3,true).distance>scareFrame(.3).distance);assert.equal(scareFrame(SCARE_DURATION,true).visible,false);
});
