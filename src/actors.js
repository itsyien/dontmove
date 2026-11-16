import * as T from 'three';
import {stairHeight,RISE} from './building.js';
export function createActor(texture,name){
 // Outline geometry keeps the supplied photographs unchanged and removes their rectangular backdrops.
 const silhouettes={
  kun:{w:2.95,top:.075,bottom:1,p:[[.49,.13],[.51,.10],[.55,.085],[.59,.09],[.62,.12],[.61,.18],[.59,.22],[.65,.25],[.68,.29],[.68,.32],[.72,.34],[.74,.36],[.80,.365],[.845,.38],[.855,.41],[.855,.49],[.83,.52],[.79,.53],[.75,.52],[.73,.49],[.72,.45],[.735,.41],[.68,.39],[.63,.37],[.61,.41],[.56,.46],[.57,.50],[.61,.57],[.66,.68],[.66,.73],[.635,.83],[.61,.91],[.62,.95],[.655,.975],[.66,1],[.54,.98],[.54,.96],[.56,.91],[.575,.78],[.58,.73],[.55,.68],[.49,.60],[.47,.59],[.46,.67],[.475,.70],[.46,.74],[.45,.87],[.44,.92],[.45,.965],[.44,1],[.39,1],[.385,.985],[.40,.94],[.405,.90],[.39,.86],[.39,.76],[.38,.68],[.37,.61],[.375,.52],[.38,.465],[.365,.46],[.38,.40],[.40,.37],[.36,.39],[.31,.43],[.28,.46],[.25,.50],[.235,.52],[.23,.55],[.22,.56],[.205,.55],[.20,.53],[.21,.51],[.22,.50],[.23,.46],[.26,.42],[.30,.38],[.35,.33],[.38,.29],[.41,.265],[.41,.245],[.46,.23],[.46,.22],[.51,.20]]},
  liang:{w:2.55,top:.175,bottom:.66,p:[[.26,.31],[.27,.26],[.31,.22],[.37,.195],[.44,.18],[.51,.18],[.58,.195],[.62,.23],[.64,.28],[.64,.32],[.66,.33],[.66,.37],[.64,.40],[.65,.44],[.80,.46],[1,.495],[1,.66],[0,.66],[0,.49],[.15,.46],[.27,.44],[.27,.40],[.25,.37],[.245,.34]]},
  naiwa:{w:1.85,top:.245,bottom:.955,p:[[.35,.285],[.40,.26],[.46,.25],[.52,.25],[.56,.27],[.59,.31],[.62,.35],[.66,.39],[.69,.44],[.71,.49],[.75,.55],[.765,.61],[.76,.66],[.74,.70],[.68,.73],[.67,.80],[.65,.86],[.65,.89],[.68,.91],[.67,.935],[.62,.95],[.55,.95],[.51,.94],[.505,.92],[.53,.90],[.60,.885],[.55,.83],[.51,.76],[.50,.755],[.48,.82],[.47,.86],[.48,.87],[.50,.89],[.49,.902],[.43,.91],[.30,.91],[.285,.90],[.29,.89],[.32,.88],[.43,.865],[.38,.82],[.35,.77],[.335,.72],[.30,.70],[.27,.66],[.25,.61],[.235,.605],[.225,.59],[.225,.55],[.24,.52],[.28,.50],[.31,.47],[.35,.44],[.37,.41],[.385,.38],[.38,.35],[.35,.335],[.345,.325]]}
 };
 if(name === "inspector") return makePhotoActor(texture); const s=silhouettes[name],shape=new T.Shape();
 s.p.forEach(([x,y],i)=>shape[i?'lineTo':'moveTo']((x-.5)*s.w,(.5-(y-s.top)/(s.bottom-s.top))*2.65));shape.closePath();
 const geometry=new T.ShapeGeometry(shape),positions=geometry.attributes.position,uvs=geometry.attributes.uv;
 for(let i=0;i<positions.count;i++)uvs.setXY(i,positions.getX(i)/s.w+.5,1-(s.top+(.5-positions.getY(i)/2.65)*(s.bottom-s.top)));
 const material=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,
  uniforms:{uHeat:{value:0},uGround:{value:-1000},uMap:{value:texture},uTime:{value:0},uOpacity:{value:1},uLight:{value:.68},uKind:{value:{naiwa:0,sun:1,kun:2,liang:3}[name]}},
  vertexShader:`varying vec2 vUv; varying float vDistance; varying float vWorldY; void main(){vWorldY=(modelMatrix*vec4(position,1.)).y;vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDistance=-p.z;gl_Position=projectionMatrix*p;}`,
  fragmentShader:`uniform float uHeat;uniform float uGround;varying float vWorldY;uniform sampler2D uMap;uniform float uTime;uniform float uOpacity;uniform float uLight;uniform int uKind;varying vec2 vUv;varying float vDistance;
   void main(){if(vWorldY<uGround)discard;vec2 uv=vUv;
   vec4 c=texture2D(uMap,uv);float edge=uKind==3?smoothstep(.34,.48,uv.y):uKind==1?smoothstep(0.,.12,uv.y):1.;
   float mask=1.;float lum=dot(c.rgb,vec3(.2126,.7152,.0722));
   
   float alpha=c.a*mask*edge*uOpacity;if(alpha<.02)discard;
   vec3 col=mix(vec3(lum),c.rgb,uKind==4?.65:uKind==0?.35:.05)*uLight;col=mix(col,vec3(.035,.055,.045),smoothstep(8.,32.,vDistance));
   col=mix(col,col*vec3(1.5,.65,.15)+vec3(.65,.16,.015),uHeat*.8);gl_FragColor=vec4(col,alpha);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
  }`});
 return new T.Mesh(geometry,material);
}

function makePhotoActor(texture){const a=createActor(texture,'liang');a.geometry.dispose();a.geometry=new T.PlaneGeometry(2.4,2.4);a.material.uniforms.uKind.value=1;return a;}
export function scareKey(threat){return threat.kind;}
export const SCARE_IMPACT=.16,SCARE_DURATION=1.55;
export function scareFrame(age,reduced=false){
 const t=Math.max(0,age-SCARE_IMPACT),reveal=T.MathUtils.smoothstep(t,0,reduced?.28:.055),fade=T.MathUtils.smoothstep(age,1.13,SCARE_DURATION);
 const rush=1-Math.exp(-t*(reduced?6:28)),settle=reduced?0:Math.exp(-t*8);
 return{visible:age>=SCARE_IMPACT&&age<SCARE_DURATION,black:1-reveal*(1-fade),fade,
  distance:1.65-.59*rush-.10*T.MathUtils.smoothstep(t,.3,1),
  x:reduced?0:Math.sin(t*61)*.035*settle,y:reduced?0:Math.sin(t*47)*.022*settle,
  roll:reduced?0:Math.sin(t*38)*.045*settle,light:.88+settle*.16,grain:reduced?0:.10*(1-fade)};
}
export function createCutoutActor(texture,frame){
 const [left,top,right,bottom]=frame.bounds,{width,height}=texture.image,a=createActor(texture,'liang');a.geometry.dispose();a.geometry=new T.PlaneGeometry(2.65*(right-left)/(bottom-top),2.65);
 const uv=a.geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,(left+uv.getX(i)*(right-left))/width,1-(bottom-uv.getY(i)*(bottom-top))/height);
 a.material.uniforms.uKind.value=4;return a;
}
