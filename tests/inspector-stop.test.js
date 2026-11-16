import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {prepareBuilding} from '../src/building.js';
import {Game} from '../src/simulation.js';
const building=prepareBuilding(JSON.parse(fs.readFileSync(new URL('../public/assets/apartment/floors.json',import.meta.url))));
function encounter(){const g=new Game(building,8);g.player={floor:5,x:18,z:4,y:12.96};g.beginEncounter('inspector',{floor:5,x:30,z:4});g.threat.age=2;return g;}
test('one stopped frame cannot renew the inspector warning, even before the deadline',()=>{
 const g=encounter();g.tick(.02,{forward:1});assert(g.threat.moveDeadline);g.tick(.02,{});assert.equal(g.mode,'playing');g.tick(.02,{forward:1});assert.equal(g.mode,'lost');assert.equal(g.lastCatch,'inspector');assert(g.threat);
});
test('sub-five-millimetre movement is detected, and a later tiny step catches immediately',()=>{
 const g=encounter();g.tick(.001,{forward:1});assert(g.threat.moveDeadline);g.tick(.001,{});g.tick(.001,{right:1});assert.equal(g.mode,'lost');
});
test('stopping permits looking around, but renewed movement during either check or the gap is fatal',()=>{
 for(const age of [2.4,4.8,6.2,9.2]){const g=encounter();g.updateThreat(.01,{},.001);g.updateThreat(.01,{},0);g.threat.age=age;g.updateThreat(.01,{yaw:2,pitch:.8},0);assert.equal(g.mode,'playing');g.updateThreat(.01,{},.00001);assert.equal(g.mode,'lost');assert(g.threat);}
});
test('continuing movement still gets only the original half-second deadline',()=>{
 const g=encounter();g.updateThreat(.01,{},.0001);const deadline=g.threat.moveDeadline;for(let i=0;i<49;i++)g.updateThreat(.01,{},.0001);assert.equal(g.mode,'playing');assert.equal(g.threat.moveDeadline,deadline);g.updateThreat(.01,{},.0001);assert.equal(g.mode,'lost');
});
