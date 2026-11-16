import {floorPassable} from './building.js';
import {blocked,clearSight} from './logic.js';
class Heap{
 constructor(){this.a=[];}push(v){let i=this.a.length;this.a.push(v);while(i){const p=(i-1)>>1;if(this.a[p][0]<=v[0])break;this.a[i]=this.a[p];i=p;}this.a[i]=v;}
 pop(){const r=this.a[0],v=this.a.pop();if(this.a.length){let i=0;while(i*2+1<this.a.length){let c=i*2+1;if(c+1<this.a.length&&this.a[c+1][0]<this.a[c][0])c++;if(this.a[c][0]>=v[0])break;this.a[i]=this.a[c];i=c;}this.a[i]=v;}return r;}
}
export class Navigator{
 constructor(building){
  this.building=building;this.nodes=[];this.byFloor={};this.cells=new Map();this.cache=new Map();
  for(const f of building.floors){this.byFloor[f.id]=[];for(let z=2.5;z<30;z+=.5)for(let x=2.5;x<34;x+=.5)if(floorPassable(f,{x,z},.27)){
   const n={x,z,floor:f.id,id:this.nodes.length,edges:[]};this.nodes.push(n);this.byFloor[f.id].push(n);this.cells.set(`${f.id},${x},${z}`,n);
  }}
  for(const n of this.nodes)for(const [dx,dz]of[[.5,0],[-.5,0],[0,.5],[0,-.5],[.5,.5],[.5,-.5],[-.5,.5],[-.5,-.5]]){const b=this.cells.get(`${n.floor},${n.x+dx},${n.z+dz}`);if(b&&floorPassable(building.byId[n.floor],{x:n.x+dx/2,z:n.z+dz/2},.27))n.edges.push({to:b.id,cost:Math.hypot(dx,dz)});}
  for(const link of building.links){const core=link.from[1],z=core==='A'?8:24,a=this.closest({floor:link.from[0],x:8.8,z}),b=this.closest({floor:link.to[0],x:8.8,z});
   a.edges.push({to:b.id,cost:13,core});b.edges.push({to:a.id,cost:13,core});}
 }
 closest(p,blocks=[]){let best=null,d=Infinity;for(const n of this.byFloor[p.floor]||[]){const v=(n.x-p.x)**2+(n.z-p.z)**2;if(v<d&&!blocked(n.x,n.z,blocks,.27)){best=n;d=v;}}return best;}
 path(a,b,doors=[],architectural=false){
  const blockers=f=>architectural?[]:doors.filter(d=>d.floor===f).map(d=>d.block);
  const start=this.closest(a,blockers(a.floor)),end=this.closest(b,blockers(b.floor));if(!start||!end)return[];
  const cacheKey=`${start.id}:${end.id}`;if(architectural&&this.cache.has(cacheKey))return this.cache.get(cacheKey);
  const open=new Heap(),dist=new Map([[start.id,0]]),prev=new Map();open.push([0,start.id]);
  while(open.a.length){const [,id]=open.pop(),n=this.nodes[id];if(id===end.id)break;
   for(const e of n.edges){const v=this.nodes[e.to],blocks=blockers(v.floor);
    if(e.core&&!architectural&&doors.some(d=>(d.floor===n.floor||d.floor===v.floor)&&d.id.endsWith('-'+e.core)&&d.amount<.85))continue;
    if(!architectural&&(blocked(v.x,v.z,blocks,.27)||(!e.core&&!clearSight(n,v,blocks))))continue;
    const cost=dist.get(id)+e.cost;if(cost>=(dist.get(v.id)??Infinity))continue;dist.set(v.id,cost);prev.set(v.id,{id,edge:e});const h=v.floor===end.floor?Math.hypot(v.x-end.x,v.z-end.z):Math.abs(v.floor-end.floor)*3;open.push([cost+h,v.id]);
   }
  }
  if(!dist.has(end.id))return[];const result=[];let id=end.id;
  while(id!==start.id){const n=this.nodes[id],p=prev.get(id);result.unshift({x:n.x,z:n.z,floor:n.floor,core:p.edge.core,cost:p.edge.cost});id=p.id;}
  result.unshift({x:start.x,z:start.z,floor:start.floor,cost:0});result.distance=dist.get(end.id);
  if(architectural){if(this.cache.size>250)this.cache.clear();this.cache.set(cacheKey,result);}return result;
 }
 distance(a,b){return this.path(a,b,[],true).distance??Infinity;}
}
