(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Kd="modulepreload",jd=function(s){return"/dontmove/"+s},Bc={},Zd=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=jd(c),c in Bc)return;Bc[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Kd,h||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};const Gl="182",Jd=0,kc=1,Qd=2,to=1,ef=2,Gs=3,ii=0,on=1,sn=2,Qn=0,as=1,La=2,zc=3,Vc=4,tf=5,Di=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,hf=203,Da=204,Na=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,xf=212,_f=213,vf=214,Ua=0,Fa=1,Oa=2,fs=3,Ba=4,ka=5,za=6,Va=7,yu=0,yf=1,Mf=2,Ln=0,Mu=1,Su=2,bu=3,Hl=4,Eu=5,Tu=6,wu=7,Gc="attached",Sf="detached",Au=300,Oi=301,ps=302,Ga=303,Ha=304,To=306,Bi=1e3,Pn=1001,co=1002,Dt=1003,Ru=1004,Hs=1005,Nt=1006,no=1007,jn=1008,un=1009,Cu=1010,Pu=1011,tr=1012,Wl=1013,Un=1014,_n=1015,si=1016,Xl=1017,Yl=1018,nr=1020,Iu=35902,Lu=35899,Du=1021,Nu=1022,vn=1023,ri=1026,Ui=1027,ql=1028,$l=1029,ms=1030,Kl=1031,jl=1033,io=33776,so=33777,ro=33778,oo=33779,Wa=35840,Xa=35841,Ya=35842,qa=35843,$a=36196,Ka=37492,ja=37496,Za=37488,Ja=37489,Qa=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,xl=36495,_l=36283,vl=36284,yl=36285,Ml=36286,ir=2300,sr=2301,zo=2302,Hc=2400,Wc=2401,Xc=2402,bf=2500,Ef=0,Uu=1,Sl=2,Tf=3200,Fu=0,wf=1,gi="",Ct="srgb",Jt="srgb-linear",ho="linear",dt="srgb",Wi=7680,Yc=519,Af=512,Rf=513,Cf=514,Zl=515,Pf=516,If=517,Jl=518,Lf=519,bl=35044,qc="300 es",In=2e3,uo=2001;function Ou(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Df(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){const s=rr("canvas");return s.style.display="block",s}const $c={};function fo(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fe(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ve(...s){const e="THREE."+s.shift();console.error(e,...s)}function or(...s){const e=s.join(" ");e in $c||($c[e]=!0,Fe(...s))}function Uf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kc=1234567;const ls=Math.PI/180,gs=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Ff(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Of(s,e,t){return s!==e?(t-s)/(e-s):0}function $s(s,e,t){return(1-t)*s+t*e}function Bf(s,e,t,n){return $s(s,e,1-Math.exp(-t*n))}function kf(s,e=1){return e-Math.abs(Ql(s,e*2)-e)}function zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hf(s,e){return s+Math.random()*(e-s)}function Wf(s){return s*(.5-Math.random())}function Xf(s){s!==void 0&&(Kc=s);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yf(s){return s*ls}function qf(s){return s*gs}function $f(s){return(s&s-1)===0&&s!==0}function Kf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Et={DEG2RAD:ls,RAD2DEG:gs,generateUUID:yn,clamp:Qe,euclideanModulo:Ql,mapLinear:Ff,inverseLerp:Of,lerp:$s,damp:Bf,pingpong:kf,smoothstep:zf,smootherstep:Vf,randInt:Gf,randFloat:Hf,randFloatSpread:Wf,seededRandom:Xf,degToRad:Yf,radToDeg:qf,isPowerOfTwo:$f,ceilPowerOfTwo:Kf,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Zf,normalize:ft,denormalize:En};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const b=Math.acos(g),_=Math.sin(b);p=Math.sin(p*b)/_,a=Math.sin(a*b)/_,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new N,jc=new oi;class je{constructor(e,t,n,i,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],b=i[1],_=i[4],S=i[7],w=i[2],R=i[5],I=i[8];return r[0]=o*x+a*b+l*w,r[3]=o*g+a*_+l*R,r[6]=o*p+a*S+l*I,r[1]=c*x+h*b+u*w,r[4]=c*g+h*_+u*R,r[7]=c*p+h*S+u*I,r[2]=d*x+f*b+m*w,r[5]=d*g+f*_+m*R,r[8]=d*p+f*S+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new je,Zc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const rt=Jf();function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class Qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=rr("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ho(i[o].image)):r.push(Ho(i[o]))}else r=Ho(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let tp=0;const Wo=new N;class Ut extends bs{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Pn,i=Pn,r=Nt,o=jn,a=vn,l=un,c=Ut.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=yn(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Au;Ut.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(f+1)/2,w=(p+1)/2,R=(h+d)/4,I=(u+x)/4,C=(m+g)/4;return _>S&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=R/n,r=I/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=I/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ut(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Er.subVectors(this.max,Ls),Yi.subVectors(e.a,Ls),qi.subVectors(e.b,Ls),$i.subVectors(e.c,Ls),li.subVectors(qi,Yi),ci.subVectors($i,qi),bi.subVectors(Yi,$i);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-bi.z,bi.y,li.z,0,-li.x,ci.z,0,-ci.x,bi.z,0,-bi.x,-li.y,li.x,0,-ci.y,ci.x,0,-bi.y,bi.x,0];return!Xo(t,Yi,qi,$i,Er)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Yi,qi,$i,Er))?!1:(Tr.crossVectors(li,ci),t=[Tr.x,Tr.y,Tr.z],Xo(t,Yi,qi,$i,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,br=new ai,Yi=new N,qi=new N,$i=new N,li=new N,ci=new N,bi=new N,Ls=new N,Er=new N,Tr=new N,Ei=new N;function Xo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sp=new ai,Ds=new N,Yo=new N;class Bn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Yo)),this.expandByPoint(Ds.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new N,qo=new N,wr=new N,hi=new N,$o=new N,Ar=new N,Ko=new N;class mr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=hi.dot(this.direction),l=-hi.dot(wr),c=hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qo).addScaledVector(wr,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){$o.subVectors(t,e),Ar.subVectors(n,e),Ko.crossVectors($o,Ar);let o=this.direction.dot(Ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Ar.crossVectors(hi,Ar));if(l<0)return null;const c=a*this.direction.dot($o.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(Ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,x,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,op)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ui.crossVectors(n,cn),ui.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ui.crossVectors(n,cn)),ui.normalize(),Rr.crossVectors(cn,ui),i[0]=ui.x,i[4]=Rr.x,i[8]=cn.x,i[1]=ui.y,i[5]=Rr.y,i[9]=cn.y,i[2]=ui.z,i[6]=Rr.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],_=n[7],S=n[11],w=n[15],R=i[0],I=i[4],C=i[8],y=i[12],E=i[1],D=i[5],W=i[9],H=i[13],K=i[2],ne=i[6],$=i[10],Z=i[14],re=i[3],ve=i[7],fe=i[11],Me=i[15];return r[0]=o*R+a*E+l*K+c*re,r[4]=o*I+a*D+l*ne+c*ve,r[8]=o*C+a*W+l*$+c*fe,r[12]=o*y+a*H+l*Z+c*Me,r[1]=h*R+u*E+d*K+f*re,r[5]=h*I+u*D+d*ne+f*ve,r[9]=h*C+u*W+d*$+f*fe,r[13]=h*y+u*H+d*Z+f*Me,r[2]=m*R+x*E+g*K+p*re,r[6]=m*I+x*D+g*ne+p*ve,r[10]=m*C+x*W+g*$+p*fe,r[14]=m*y+x*H+g*Z+p*Me,r[3]=b*R+_*E+S*K+w*re,r[7]=b*I+_*D+S*ne+w*ve,r[11]=b*C+_*W+S*$+w*fe,r[15]=b*y+_*H+S*Z+w*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],b=l*f-c*d,_=a*f-c*u,S=a*d-l*u,w=o*f-c*h,R=o*d-l*h,I=o*u-a*h;return t*(x*b-g*_+p*S)-n*(m*b-g*w+p*R)+i*(m*_-x*w+p*I)-r*(m*S-x*R+g*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,_=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,S=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,w=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,R=t*b+n*_+i*S+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=b*I,e[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*I,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*p+n*l*p)*I,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*I,e[4]=_*I,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*I,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*I,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*I,e[8]=S*I,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*I,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*I,e[12]=w*I,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*g+t*u*g)*I,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*I,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,b=l*c,_=l*h,S=l*u,w=n.x,R=n.y,I=n.z;return i[0]=(1-(x+p))*w,i[1]=(f+S)*w,i[2]=(m-_)*w,i[3]=0,i[4]=(f-S)*R,i[5]=(1-(d+p))*R,i[6]=(g+b)*R,i[7]=0,i[8]=(m+_)*I,i[9]=(g-b)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ki.set(i[0],i[1],i[2]).length();const o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Sn.copy(this);const c=1/r,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=In,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===uo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=In,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===In)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===uo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new N,Sn=new $e,rp=new N(0,0,0),op=new N(1,1,1),ui=new N,Rr=new N,cn=new N,Qc=new $e,eh=new oi;class Fn{constructor(e=0,t=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const th=new N,ji=new oi,Wn=new $e,Cr=new N,Ns=new N,lp=new N,cp=new oi,nh=new N(1,0,0),ih=new N(0,1,0),sh=new N(0,0,1),rh={type:"added"},hp={type:"removed"},Zi={type:"childadded",child:null},jo={type:"childremoved",child:null};class Mt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new N,t=new Fn,n=new oi,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ns,Cr,this.up):Wn.lookAt(Cr,Ns,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new N,Xn=new N,Zo=new N,Yn=new N,Ji=new N,Qi=new N,oh=new N,Jo=new N,Qo=new N,ea=new N,ta=new bt,na=new bt,ia=new bt;class xn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Xn.subVectors(n,t),Zo.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Xn),l=bn.dot(Zo),c=Xn.dot(Xn),h=Xn.dot(Zo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(r,n),Jo.subVectors(e,n);const l=Ji.dot(Jo),c=Qi.dot(Jo);if(l<=0&&c<=0)return t.copy(n);Qo.subVectors(e,i);const h=Ji.dot(Qo),u=Qi.dot(Qo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ji,o);ea.subVectors(e,r);const f=Ji.dot(ea),m=Qi.dot(ea);if(m>=0&&f<=m)return t.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Qi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return oh.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(oh,a);const p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Ql(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sa(o,r,e+1/3),this.g=sa(o,r,e),this.b=sa(o,r,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return rt.workingToColorSpace(Xt.copy(this),e),Math.round(Qe(Xt.r*255,0,255))*65536+Math.round(Qe(Xt.g*255,0,255))*256+Math.round(Qe(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){rt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Pr);const n=$s(di.h,Pr.h,t),i=$s(di.s,Pr.s,t),r=$s(di.l,Pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ze;ze.NAMES=ku;let up=0;class Nn extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=as,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gt extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new N,Ir=new Ae;let dp=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class zu extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vu extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fp=0;const pn=new $e,ra=new Mt,es=new N,hn=new ai,Us=new ai,kt=new N;class Bt extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Vu:zu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(hn.min,Us.min),hn.expandByPoint(kt),kt.addVectors(hn.max,Us.max),hn.expandByPoint(kt)):(hn.expandByPoint(Us.min),hn.expandByPoint(Us.max))}hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),kt.add(es)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,u=new N,d=new Ae,f=new Ae,m=new Ae,x=new N,g=new N;function p(C,y,E){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[C].add(x),a[y].add(x),a[E].add(x),l[C].add(g),l[y].add(g),l[E].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,y=b.length;C<y;++C){const E=b[C],D=E.start,W=E.count;for(let H=D,K=D+W;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new N,S=new N,w=new N,R=new N;function I(C){w.fromBufferAttribute(i,C),R.copy(w);const y=a[C];_.copy(y),_.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(R,y);const D=S.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,D)}for(let C=0,y=b.length;C<y;++C){const E=b[C],D=E.start,W=E.count;for(let H=D,K=D+W;H<K;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ht(d,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new $e,Ti=new mr,Lr=new Bn,lh=new N,Dr=new N,Nr=new N,Ur=new N,oa=new N,Fr=new N,ch=new N,Or=new N;class st extends Mt{constructor(e=new Bt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(oa.fromBufferAttribute(u,e),o?Fr.addScaledVector(oa,h):Fr.addScaledVector(oa.sub(t),h))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Lr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Lr,lh)===null||Ti.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=b,w=_;S<w;S+=3){const R=a.getX(S),I=a.getX(S+1),C=a.getX(S+2);i=Br(this,p,e,n,c,h,u,R,I,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);i=Br(this,o,e,n,c,h,u,b,_,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=b,w=_;S<w;S+=3){const R=S,I=S+1,C=S+2;i=Br(this,p,e,n,c,h,u,R,I,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=g,_=g+1,S=g+2;i=Br(this,o,e,n,c,h,u,b,_,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function pp(s,e,t,n,i,r,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ii,a),l===null)return null;Or.copy(a),Or.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:s}}function Br(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Dr),s.getVertexPosition(l,Nr),s.getVertexPosition(c,Ur);const h=pp(s,e,t,n,Dr,Nr,Ur,ch);if(h){const u=new N;xn.getBarycoord(ch,Dr,Nr,Ur,u),i&&(h.uv=xn.getInterpolatedAttribute(i,a,l,c,u,new Ae)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new Ae)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};xn.getNormal(Dr,Nr,Ur,d.normal),h.face=d,h.barycoord=u}return h}class ct extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function m(x,g,p,b,_,S,w,R,I,C,y){const E=S/I,D=w/C,W=S/2,H=w/2,K=R/2,ne=I+1,$=C+1;let Z=0,re=0;const ve=new N;for(let fe=0;fe<$;fe++){const Me=fe*D-H;for(let Ke=0;Ke<ne;Ke++){const qe=Ke*E-W;ve[x]=qe*b,ve[g]=Me*_,ve[p]=K,c.push(ve.x,ve.y,ve.z),ve[x]=0,ve[g]=0,ve[p]=R>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(Ke/I),u.push(1-fe/C),Z+=1}}for(let fe=0;fe<C;fe++)for(let Me=0;Me<I;Me++){const Ke=d+Me+ne*fe,qe=d+Me+ne*(fe+1),St=d+(Me+1)+ne*(fe+1),T=d+(Me+1)+ne*fe;l.push(Ke,qe,T),l.push(qe,St,T),re+=6}a.addGroup(f,re,y),f+=re,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=xs(s[t]);for(const i in n)e[i]=n[i]}return e}function mp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const gp={clone:xs,merge:Kt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hu extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new N,hh=new Ae,uh=new Ae;class jt extends Hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,hh,uh),t.subVectors(uh,hh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class vp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(ts,ns,e,t);i.layers=this.layers,this.add(i);const r=new jt(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new jt(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new jt(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new jt(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new jt(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wu extends Ut{constructor(e=[],t=Oi,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xu extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ct(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qn});r.uniforms.tEquirect.value=t;const o=new st(i,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Nt),new vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Lt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mp extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new N;class ic{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ic(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dh=new N,fh=new bt,ph=new bt,bp=new N,mh=new $e,kr=new N,la=new Bn,gh=new $e,ca=new mr;class Ep extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gc,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1&&(gh.copy(i).invert(),ca.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fh.fromBufferAttribute(i.attributes.skinIndex,e),ph.fromBufferAttribute(i.attributes.skinWeight,e),dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ph.getComponent(r);if(o!==0){const a=fh.getComponent(r);mh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bp.copy(dh).applyMatrix4(mh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yu extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sc extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Dt,h=Dt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xh=new $e,Tp=new $e;class rc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Tp;xh.multiplyMatrices(a,t[r]),xh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sc(t,e,e,vn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new Yu),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class El extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new $e,_h=new $e,zr=[],vh=new ai,wp=new $e,Fs=new st,Os=new Bn;class oc extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),vh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Os.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,is),_h.multiplyMatrices(n,is),Fs.matrixWorld=_h,Fs.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const l=zr[o];l.instanceId=r,l.object=this,t.push(l)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(i*this.count),i,this.count,ql,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ha=new N,Ap=new N,Rp=new je;class Ii{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ha.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rp.getNormalMatrix(e),i=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Bn,Cp=new Ae(.5,.5),Vr=new N;class ac{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],_=r[13],S=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,p-m,w-b).normalize(),i[1].setComponents(c+o,f+h,p+m,w+b).normalize(),i[2].setComponents(c+a,f+u,p+x,w+_).normalize(),i[3].setComponents(c-a,f-u,p-x,w-_).normalize(),n)i[4].setComponents(l,d,g,S).normalize(),i[5].setComponents(c-l,f-d,p-g,w-S).normalize();else if(i[4].setComponents(c-l,f-d,p-g,w-S).normalize(),t===In)i[5].setComponents(c+l,f+d,p+g,w+S).normalize();else if(t===uo)i[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=Cp.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lc extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new N,mo=new N,yh=new $e,Bs=new mr,Gr=new Bn,ua=new N,Mh=new N;class cc extends Mt{constructor(e=new Bt,t=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)po.fromBufferAttribute(t,i-1),mo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=po.distanceTo(mo);e.setAttribute("lineDistance",new Tt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;yh.copy(i).invert(),Bs.copy(e.ray).applyMatrix4(yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),b=h.getX(x+1),_=Hr(this,e,Bs,l,p,b,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Hr(this,e,Bs,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=Hr(this,e,Bs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Hr(this,e,Bs,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(po.fromBufferAttribute(a,i),mo.fromBufferAttribute(a,r),t.distanceSqToSegment(po,mo,ua,Mh)>n)return;ua.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ua);if(!(c<e.near||c>e.far))return{distance:c,point:Mh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Sh=new N,bh=new N;class qu extends cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Sh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sh.distanceTo(bh);e.setAttribute("lineDistance",new Tt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pp extends cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hc extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eh=new $e,Tl=new mr,Wr=new Bn,Xr=new N;class $u extends Mt{constructor(e=new Bt,t=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Eh.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(Eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Xr.fromBufferAttribute(u,g),Th(Xr,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Xr.fromBufferAttribute(u,m),Th(Xr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Th(s,e,t,n,i,r,o){const a=Tl.distanceSqToPoint(s);if(a<t){const l=new N;Tl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uc extends Ut{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends Ut{constructor(e,t,n=Un,i,r,o,a=Dt,l=Dt,c,h=ri,u=1){if(h!==ri&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ip extends ar{constructor(e,t=Un,n=Oi,i,r,o=Dt,a=Dt,l,c=ri){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ku extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ks extends Bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,h=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kn extends Bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function b(){const S=new N,w=new N;let R=0;const I=(t-e)/n;for(let C=0;C<=r;C++){const y=[],E=C/r,D=E*(t-e)+e;for(let W=0;W<=i;W++){const H=W/i,K=H*l+a,ne=Math.sin(K),$=Math.cos(K);w.x=D*ne,w.y=-E*n+g,w.z=D*$,u.push(w.x,w.y,w.z),S.set(ne,I,$).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-E),y.push(m++)}x.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){const E=x[y][C],D=x[y+1][C],W=x[y+1][C+1],H=x[y][C+1];(e>0||y!==0)&&(h.push(E,D,H),R+=3),(t>0||y!==r-1)&&(h.push(D,W,H),R+=3)}c.addGroup(p,R,0),p+=R}function _(S){const w=m,R=new Ae,I=new N;let C=0;const y=S===!0?e:t,E=S===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;const D=m;for(let W=0;W<=i;W++){const K=W/i*l+a,ne=Math.cos(K),$=Math.sin(K);I.x=y*$,I.y=g*E,I.z=y*ne,u.push(I.x,I.y,I.z),d.push(0,E,0),R.x=ne*.5+.5,R.y=$*.5*E+.5,f.push(R.x,R.y),m++}for(let W=0;W<i;W++){const H=w+W,K=D+W;S===!0?h.push(K,K+1,H):h.push(K+1,K,H),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Yr=new N,qr=new N,da=new N,$r=new xn;class Lp extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ls*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:g,c:p}=$r;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),$r.getNormal(da),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const _=(b+1)%3,S=u[b],w=u[_],R=$r[h[b]],I=$r[h[_]],C=`${S}_${w}`,y=`${w}_${S}`;y in d&&d[y]?(da.dot(d[y].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(I.x,I.y,I.z)),d[y]=null):C in d||(d[C]={index0:c[b],index1:c[_],normal:da.clone()})}}for(const m in d)if(d[m]){const{index0:x,index1:g}=d[m];Yr.fromBufferAttribute(a,x),qr.fromBufferAttribute(a,g),f.push(Yr.x,Yr.y,Yr.z),f.push(qr.x,qr.y,qr.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,i=[],r=[],o=[],a=new N,l=new $e;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dc extends kn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dp extends dc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Kr=new N,fa=new fc,pa=new fc,ma=new fc;class Np extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Kr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),pa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),ma.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),pa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ma.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fa.calc(l),pa.calc(l),ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Up(s,e){const t=1-s;return t*t*e}function Fp(s,e){return 2*(1-s)*s*e}function Op(s,e){return s*s*e}function js(s,e,t,n){return Up(s,e)+Fp(s,t)+Op(s,n)}function Bp(s,e){const t=1-s;return t*t*t*e}function kp(s,e){const t=1-s;return 3*t*t*s*e}function zp(s,e){return 3*(1-s)*s*s*e}function Vp(s,e){return s*s*s*e}function Zs(s,e,t,n,i){return Bp(s,e)+kp(s,t)+zp(s,n)+Vp(s,i)}class ju extends kn{constructor(e=new Ae,t=new Ae,n=new Ae,i=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ae){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gp extends kn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y),Zs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zu extends kn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hp extends kn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends kn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(js(e,i.x,r.x,o.x),js(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends kn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(js(e,i.x,r.x,o.x),js(e,i.y,r.y,o.y),js(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qu extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(wh(a,l.x,c.x,h.x,u.x),wh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ae().fromArray(i))}return this}}var Ah=Object.freeze({__proto__:null,ArcCurve:Dp,CatmullRomCurve3:Np,CubicBezierCurve:ju,CubicBezierCurve3:Gp,EllipseCurve:dc,LineCurve:Zu,LineCurve3:Hp,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:Wp,SplineCurve:Qu});class Xp extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ah[i.type]().fromJSON(i))}return this}}class Rh extends Xp{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zu(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ju(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ju(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new dc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ed extends Rh{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Rh().fromJSON(i))}return this}}function Yp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=td(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Zp(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){const f=s[d],m=s[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return lr(r,o,t,a,l,c,0),o}function td(s,e,t,n,i){let r;if(i===lm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ch(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ch(o/n|0,s[o],s[o+1],r);return r&&_s(r,r.next)&&(hr(r),r=r.next),r}function ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_s(t,t.next)||wt(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&nm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?$p(s,n,i,r):qp(s)){e.push(l.i,s.i,c.i),hr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Kp(ki(s),e),lr(s,e,t,n,i,r,2)):o===2&&jp(s,e,t,n,i,r):lr(ki(s),e,t,n,i,r,1);break}}}function qp(s){const e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ws(i,a,r,l,o,c,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $p(s,e,t,n){const i=s.prev,r=s,o=s.next;if(wt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=wl(f,m,e,t,n),b=wl(x,g,e,t,n);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ws(a,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Ws(a,h,l,u,c,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ws(a,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Ws(a,h,l,u,c,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Kp(s,e){let t=s;do{const n=t.prev,i=t.next.next;!_s(n,i)&&id(n,t,t.next,i)&&cr(n,i)&&cr(i,n)&&(e.push(n.i,t.i,i.i),hr(t),hr(t.next),t=s=i),t=t.next}while(t!==s);return ki(t)}function jp(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rm(o,a)){let l=sd(o,a);o=ki(o,o.next),l=ki(l,l.next),lr(o,e,t,n,i,r,0),lr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Zp(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=td(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(sm(c))}i.sort(Jp);for(let r=0;r<i.length;r++)t=Qp(i[r],t);return t}function Jp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Qp(s,e){const t=em(s,e);if(!t)return e;const n=sd(t,s);return ki(n,n.next),ki(t,t.next)}function em(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(_s(s,t))return t;do{if(_s(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);cr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&tm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function tm(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function nm(s,e,t,n){let i=s;do i.z===0&&(i.z=wl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,im(i)}function im(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function wl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function sm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function nd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ws(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&nd(s,e,t,n,i,r,o,a)}function rm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!om(s,e)&&(cr(s,e)&&cr(e,s)&&am(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||_s(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _s(s,e){return s.x===e.x&&s.y===e.y}function id(s,e,t,n){const i=Zr(wt(s,e,t)),r=Zr(wt(s,e,n)),o=Zr(wt(t,n,s)),a=Zr(wt(t,n,e));return!!(i!==r&&o!==a||i===0&&jr(s,t,e)||r===0&&jr(s,n,e)||o===0&&jr(t,s,n)||a===0&&jr(t,e,n))}function jr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Zr(s){return s>0?1:s<0?-1:0}function om(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&id(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function cr(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function am(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function sd(s,e){const t=Al(s.i,s.x,s.y),n=Al(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ch(s,e,t,n){const i=Al(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function hr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Al(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class cm{static triangulate(e,t,n=2){return Yp(e,t,n)}}class Js{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Js.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ph(e),Ih(n,e);let o=e.length;t.forEach(Ph);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ih(n,t[l]);const a=cm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ph(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ih(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class It extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*d-o;for(let _=0;_<c;_++){const S=_*u-r;m.push(S,-b,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const _=b+c*p,S=b+c*(p+1),w=b+1+c*(p+1),R=b+1+c*p;f.push(_,S,R),f.push(S,w,R)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}class pc extends Bt{constructor(e=new ed([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(i,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Js.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const b=m[g];Js.isClockWise(b)===!0&&(m[g]=b.reverse())}const x=Js.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const b=m[g];f=f.concat(b)}for(let g=0,p=f.length;g<p;g++){const b=f[g];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,p=x.length;g<p;g++){const b=x[g],_=b[0]+u,S=b[1]+u,w=b[2]+u;n.push(_,S,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return hm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new pc(n,e.curveSegments)}}function hm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class go extends Bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,b=(i+1)*f+m;o.push(x,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class um extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dm extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fm extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function rd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class gr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mm extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,a=2*t-n;break;case Xc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:o=e,l=2*n-t;break;case Xc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,S=f*g-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+b*o[c+w]+_*o[l+w]+S*o[u+w];return r}}class gm extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class xm extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Df(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=sr;class Es extends Tn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ir;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class od extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}od.prototype.ValueTypeName="color";class vs extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}vs.prototype.ValueTypeName="number";class _m extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ys extends Tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _m(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Tn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ir;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}Ms.prototype.ValueTypeName="vector";class vm{constructor(e="",t=-1,n=[],i=bf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=pm(l);l=Lh(l,1,h),c=Lh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];rd(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let b=0;b!==d[m].morphTargets.length;++b){const _=d[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new vs(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ms,f+".position",d,"pos",i),n(ys,f+".quaternion",d,"rot",i),n(Ms,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ym(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return od;case"quaternion":return ys;case"bool":case"boolean":return Es;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ym(s.type);if(s.times===void 0){const t=[],n=[];rd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bm=new Sm;class ws{constructor(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class Em extends Error{constructor(e,t){super(e),this.response=t}}class ad extends ws{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:S})=>{if(_)p.close();else{x+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let R=0,I=h.length;R<I;R++){const C=h[R];C.onProgress&&C.onProgress(w)}p.enqueue(S),b()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Em(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Zn.add(`file:${e}`,c);const h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ss=new WeakMap;class Tm extends ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ss.get(o);u===void 0&&(u=[],ss.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=rr("img");function l(){h(),t&&t(this);const u=ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ss.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Zn.remove(`image:${e}`);const d=ss.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class ld extends ws{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,o=new Tm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class wo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class wm extends wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new $e,Dh=new N,Nh=new N;class mc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Am extends mc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cd extends wo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Am}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rm extends mc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class hd extends wo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ao extends Hu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cm extends mc{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Cm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xa=new WeakMap;class Im extends ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(xa.has(o)===!0)i&&i(xa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xa.set(l,c),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Lm extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gc="\\[\\]\\.:\\/",Dm=new RegExp("["+gc+"]","g"),xc="[^"+gc+"]",Nm="[^"+gc.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",xc),Fm=/(WCOD+)?/.source.replace("WCOD",Nm),Om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),km=new RegExp("^"+Um+Fm+Om+Bm+"$"),zm=["material","materials","bones","map"];class Vm{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(e){const t=km.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Vm;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uh=new $e;class Gm{constructor(e,t,n=0,i=1/0){this.ray=new mr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,t=!0,n=[]){return Rl(e,this,n,t),n.sort(Fh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Rl(e[i],this,n,t);return n.sort(Fh),n}}function Fh(s,e){return s.distance-e.distance}function Rl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Rl(r[o],e,t,!0)}}function Oh(s,e,t,n){const i=Hm(n);switch(t){case Du:return s*e;case ql:return s*e/i.components*i.byteLength;case $l:return s*e/i.components*i.byteLength;case ms:return s*e*2/i.components*i.byteLength;case Kl:return s*e*2/i.components*i.byteLength;case Nu:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case jl:return s*e*4/i.components*i.byteLength;case io:case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:case qa:return Math.max(s,16)*Math.max(e,8)/4;case Wa:case Ya:return Math.max(s,8)*Math.max(e,8)/2;case $a:case Ka:case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _l:case vl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yl:case Ml:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(s){switch(s){case un:case Cu:return{byteLength:1,components:1};case tr:case Pu:case si:return{byteLength:2,components:1};case Xl:case Yl:return{byteLength:2,components:4};case Un:case Wl:case _n:return{byteLength:4,components:1};case Iu:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);function ud(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wm(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Xm,alphahash_pars_fragment:Ym,alphamap_fragment:qm,alphamap_pars_fragment:$m,alphatest_fragment:Km,alphatest_pars_fragment:jm,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:hg,color_pars_fragment:ug,color_pars_vertex:dg,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:xg,displacementmap_vertex:_g,emissivemap_fragment:vg,emissivemap_pars_fragment:yg,colorspace_fragment:Mg,colorspace_pars_fragment:Sg,envmap_fragment:bg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Og,envmap_vertex:Ag,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Ug,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:kg,lights_phong_fragment:zg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:Yg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:jg,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:v0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:z0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:q0,cube_vert:$0,cube_frag:K0,depth_vert:j0,depth_frag:Z0,distance_vert:J0,distance_frag:Q0,equirect_vert:ex,equirect_frag:tx,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:xx,points_vert:_x,points_frag:vx,shadow_vert:yx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:bx},xe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Cn={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:Kt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Qr={r:0,b:0,g:0},Ai=new Fn,Ex=new $e;function Tx(s,e,t,n,i,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function x(_){let S=!1;const w=m(_);w===null?p(a,l):w&&w.isColor&&(p(w,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,S){const w=m(S);w&&(w.isCubeTexture||w.mapping===To)?(h===void 0&&(h=new st(new ct(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:xs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(S.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(Ai)),h.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new st(new It(2,2),new dn({name:"BackgroundMaterial",uniforms:xs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=rt.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(Qr,Gu(s)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,S,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g,dispose:b}}function wx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(E,D,W,H,K){let ne=!1;const $=u(H,W,D);r!==$&&(r=$,c(r.object)),ne=f(E,H,W,K),ne&&m(E,H,W,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(E,D,W,H),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,D,W){const H=W.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let ne=K[D.id];ne===void 0&&(ne={},K[D.id]=ne);let $=ne[H];return $===void 0&&($=d(l()),ne[H]=$),$}function d(E){const D=[],W=[],H=[];for(let K=0;K<t;K++)D[K]=0,W[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:H,object:E,attributes:{},index:null}}function f(E,D,W,H){const K=r.attributes,ne=D.attributes;let $=0;const Z=W.getAttributes();for(const re in Z)if(Z[re].location>=0){const fe=K[re];let Me=ne[re];if(Me===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function m(E,D,W,H){const K={},ne=D.attributes;let $=0;const Z=W.getAttributes();for(const re in Z)if(Z[re].location>=0){let fe=ne[re];fe===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),K[re]=Me,$++}r.attributes=K,r.attributesNum=$,r.index=H}function x(){const E=r.newAttributes;for(let D=0,W=E.length;D<W;D++)E[D]=0}function g(E){p(E,0)}function p(E,D){const W=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;W[E]=1,H[E]===0&&(s.enableVertexAttribArray(E),H[E]=1),K[E]!==D&&(s.vertexAttribDivisor(E,D),K[E]=D)}function b(){const E=r.newAttributes,D=r.enabledAttributes;for(let W=0,H=D.length;W<H;W++)D[W]!==E[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function _(E,D,W,H,K,ne,$){$===!0?s.vertexAttribIPointer(E,D,W,K,ne):s.vertexAttribPointer(E,D,W,H,K,ne)}function S(E,D,W,H){x();const K=H.attributes,ne=W.getAttributes(),$=D.defaultAttributeValues;for(const Z in ne){const re=ne[Z];if(re.location>=0){let ve=K[Z];if(ve===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),ve!==void 0){const fe=ve.normalized,Me=ve.itemSize,Ke=e.get(ve);if(Ke===void 0)continue;const qe=Ke.buffer,St=Ke.type,T=Ke.bytesPerElement,P=St===s.INT||St===s.UNSIGNED_INT||ve.gpuType===Wl;if(ve.isInterleavedBufferAttribute){const U=ve.data,B=U.stride,J=ve.offset;if(U.isInstancedInterleavedBuffer){for(let ee=0;ee<re.locationSize;ee++)p(re.location+ee,U.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ee=0;ee<re.locationSize;ee++)g(re.location+ee);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ee=0;ee<re.locationSize;ee++)_(re.location+ee,Me/re.locationSize,St,fe,B*T,(J+Me/re.locationSize*ee)*T,P)}else{if(ve.isInstancedBufferAttribute){for(let U=0;U<re.locationSize;U++)p(re.location+U,ve.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let U=0;U<re.locationSize;U++)g(re.location+U);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let U=0;U<re.locationSize;U++)_(re.location+U,Me/re.locationSize,St,fe,Me*T,Me/re.locationSize*U*T,P)}}else if($!==void 0){const fe=$[Z];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(re.location,fe);break;case 3:s.vertexAttrib3fv(re.location,fe);break;case 4:s.vertexAttrib4fv(re.location,fe);break;default:s.vertexAttrib1fv(re.location,fe)}}}}b()}function w(){C();for(const E in n){const D=n[E];for(const W in D){const H=D[W];for(const K in H)h(H[K].object),delete H[K];delete D[W]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const W in D){const H=D[W];for(const K in H)h(H[K].object),delete H[K];delete D[W]}delete n[E.id]}function I(E){for(const D in n){const W=n[D];if(W[E.id]===void 0)continue;const H=W[E.id];for(const K in H)h(H[K].object),delete H[K];delete W[E.id]}}function C(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Ax(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==vn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const C=I===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==un&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_n&&!C)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:R}}function Cx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ii,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const b=r?0:n,_=b*4;let S=p.clippingState||null;l.value=S,S=h(m,d,_,f);for(let w=0;w!==_;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,S=f;_!==x;++_,S+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Px(s){let e=new WeakMap;function t(o,a){return a===Ga?o.mapping=Oi:a===Ha&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ga||a===Ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xu(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const _i=4,Bh=[.125,.215,.35,.446,.526,.582],Ni=20,Ix=256,ks=new Ao,kh=new ze;let _a=null,va=0,ya=0,Ma=!1;const Lx=new N;class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Lx}=r;_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,ya),this._renderer.xr.enabled=Ma,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:si,format:vn,colorSpace:Jt,depthBuffer:!1},i=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dx(r)),this._blurMaterial=Ux(r,e,t),this._ggxMaterial=Nx(r,e,t)}return i}_compileMaterial(e){const t=new st(new Bt,e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,n,i,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(kh),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new ct,new Gt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(kh),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;rs(i,S*w,_>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-_i?n-m+_i:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,rs(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,ks),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,rs(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(a,ks)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ni;g>Ni&&Fe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);const p=[];let b=0;for(let I=0;I<Ni;++I){const C=I/x,y=Math.exp(-C*C/2);p.push(y),I===0?b+=y:I<g&&(b+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const S=this._sizeLods[i],w=3*S*(i>_-_i?i-_+_i:0),R=4*(this._cubeSize-S);rs(t,w,R,3*S,2*S),l.setRenderTarget(t),l.render(u,ks)}}function Dx(s){const e=[],t=[],n=[];let i=s;const r=s-_i+1+Bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-_i?l=Bh[o-s+_i-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),_=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let R=0;R<f;R++){const I=R%3*2/3-1,C=R>2?0:-1,y=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];b.set(y,x*m*R),_.set(d,g*m*R);const E=[R,R,R,R,R,R];S.set(E,p*m*R)}const w=new Bt;w.setAttribute("position",new Ht(b,x)),w.setAttribute("uv",new Ht(_,g)),w.setAttribute("faceIndex",new Ht(S,p)),n.push(new st(w,null)),i>_i&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vh(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nx(s,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ux(s,e,t){const n=new Float32Array(Ni),i=new N(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Gh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Hh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Ha,h=l===Oi||l===ps;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zh(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new zh(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ox(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&or("WebGLRenderer: "+n+" extension not supported."),i}}}function Bx(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let _=0,S=b.length;_<S;_+=3){const w=b[_+0],R=b[_+1],I=b[_+2];d.push(w,R,R,I,I,w)}}else if(m!==void 0){const b=m.array;x=m.version;for(let _=0,S=b.length/3-1;_<S;_+=3){const w=_+0,R=_+1,I=_+2;d.push(w,R,R,I,I,w)}}else return;const g=new(Ou(d)?Vu:zu)(d,1);g.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vx(s,e,t){const n=new WeakMap,i=new bt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let S=a.attributes.position.count*_,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*w*4*u),I=new Bu(R,S,w,u);I.type=_n,I.needsUpdate=!0;const C=_*4;for(let E=0;E<u;E++){const D=g[E],W=p[E],H=b[E],K=S*w*4*E;for(let ne=0;ne<D.count;ne++){const $=ne*C;f===!0&&(i.fromBufferAttribute(D,ne),R[K+$+0]=i.x,R[K+$+1]=i.y,R[K+$+2]=i.z,R[K+$+3]=0),m===!0&&(i.fromBufferAttribute(W,ne),R[K+$+4]=i.x,R[K+$+5]=i.y,R[K+$+6]=i.z,R[K+$+7]=0),x===!0&&(i.fromBufferAttribute(H,ne),R[K+$+8]=i.x,R[K+$+9]=i.y,R[K+$+10]=i.z,R[K+$+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Ae(S,w)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Hx={[Mu]:"LINEAR_TONE_MAPPING",[Su]:"REINHARD_TONE_MAPPING",[bu]:"CINEON_TONE_MAPPING",[Hl]:"ACES_FILMIC_TONE_MAPPING",[Tu]:"AGX_TONE_MAPPING",[wu]:"NEUTRAL_TONE_MAPPING",[Eu]:"CUSTOM_TONE_MAPPING"};function Wx(s,e,t,n,i){const r=new Dn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Dn(e,t,{type:si,depthBuffer:!1,stencilBuffer:!1}),a=new Bt;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new um({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new st(a,l),h=new Ao(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(b,_){r.setSize(b,_),o.setSize(b,_);for(let S=0;S<g.length;S++){const w=g[S];w.setSize&&w.setSize(b,_)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const _=r.width,S=r.height;for(let w=0;w<g.length;w++){const R=g[w];R.setSize&&R.setSize(_,S)}},this.begin=function(b,_){if(f||b.toneMapping===Ln&&g.length===0)return!1;if(x=_,_!==null){const S=_.width,w=_.height;(r.width!==S||r.height!==w)&&this.setSize(S,w)}return p===!1&&b.setRenderTarget(r),m=b.toneMapping,b.toneMapping=Ln,!0},this.hasRenderPass=function(){return p},this.end=function(b,_){b.toneMapping=m,f=!0;let S=r,w=o;for(let R=0;R<g.length;R++){const I=g[R];if(I.enabled!==!1&&(I.render(b,w,S,_),I.needsSwap!==!1)){const C=S;S=w,w=C}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},rt.getTransfer(u)===dt&&(l.defines.SRGB_TRANSFER="");const R=Hx[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(x),b.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const dd=new Ut,Cl=new ar(1,1),fd=new Bu,pd=new ip,md=new Wu,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),$h=new Float32Array(4);function As(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wh[i];if(r===void 0&&(r=new Float32Array(i),Wh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Co(s,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;$h.set(n),s.uniformMatrix2fv(this.addr,!1,$h),Ot(t,n)}}function jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;qh.set(n),s.uniformMatrix3fv(this.addr,!1,qh),Ot(t,n)}}function Zx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Yh.set(n),s.uniformMatrix4fv(this.addr,!1,Yh),Ot(t,n)}}function Jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function n_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function o_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cl.compareFunction=t.isReversedDepthBuffer()?Jl:Zl,r=Cl):r=dd,t.setTexture2D(e||r,i)}function a_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pd,i)}function l_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||md,i)}function c_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fd,i)}function h_(s){switch(s){case 5126:return Xx;case 35664:return Yx;case 35665:return qx;case 35666:return $x;case 35674:return Kx;case 35675:return jx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(s,e){s.uniform1fv(this.addr,e)}function d_(s,e){const t=As(e,this.size,2);s.uniform2fv(this.addr,t)}function f_(s,e){const t=As(e,this.size,3);s.uniform3fv(this.addr,t)}function p_(s,e){const t=As(e,this.size,4);s.uniform4fv(this.addr,t)}function m_(s,e){const t=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function g_(s,e){const t=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x_(s,e){const t=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function __(s,e){s.uniform1iv(this.addr,e)}function v_(s,e){s.uniform2iv(this.addr,e)}function y_(s,e){s.uniform3iv(this.addr,e)}function M_(s,e){s.uniform4iv(this.addr,e)}function S_(s,e){s.uniform1uiv(this.addr,e)}function b_(s,e){s.uniform2uiv(this.addr,e)}function E_(s,e){s.uniform3uiv(this.addr,e)}function T_(s,e){s.uniform4uiv(this.addr,e)}function w_(s,e,t){const n=this.cache,i=e.length,r=Co(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Cl:o=dd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function A_(s,e,t){const n=this.cache,i=e.length,r=Co(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pd,r[o])}function R_(s,e,t){const n=this.cache,i=e.length,r=Co(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||md,r[o])}function C_(s,e,t){const n=this.cache,i=e.length,r=Co(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fd,r[o])}function P_(s){switch(s){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class I_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}}class L_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}}class D_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Kh(s,e){s.seq.push(e),s.map[e.id]=e}function N_(s,e,t){const n=s.name,i=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),o=Sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kh(t,c===void 0?new I_(a,s,e):new L_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new D_(a),Kh(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);N_(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function jh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const U_=37297;let F_=0;function O_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zh=new je;function B_(s){rt._getMatrix(Zh,rt.workingColorSpace,s);const e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case ho:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+O_(s.getShaderSource(e),a)}else return r}function k_(s,e){const t=B_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z_={[Mu]:"Linear",[Su]:"Reinhard",[bu]:"Cineon",[Hl]:"ACESFilmic",[Tu]:"AgX",[wu]:"Neutral",[Eu]:"Custom"};function V_(s,e){const t=z_[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new N;function G_(){rt.getLuminanceCoefficients(eo);const s=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function W_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xs(s){return s!==""}function Qh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(s){return s.replace(Y_,$_)}const q_=new Map;function $_(s,e){let t=Ze[e];if(t===void 0){const n=q_.get(e);if(n!==void 0)t=Ze[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(s){return s.replace(K_,j_)}function j_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z_={[to]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function J_(s){return Z_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q_={[Oi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function ev(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const tv={[ps]:"ENVMAP_MODE_REFRACTION"};function nv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iv={[yu]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function sv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iv[s.combine]||"ENVMAP_BLENDING_NONE"}function rv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ov(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=J_(t),c=ev(t),h=nv(t),u=sv(t),d=rv(t),f=H_(t),m=W_(r),x=i.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ln?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),G_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Pl(o),o=Qh(o,t),o=eu(o,t),a=Pl(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=b+g+o,S=b+p+a,w=jh(i,i.VERTEX_SHADER,_),R=jh(i,i.FRAGMENT_SHADER,S);i.attachShader(x,w),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(D){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(w)||"",K=i.getShaderInfoLog(R)||"",ne=W.trim(),$=H.trim(),Z=K.trim();let re=!0,ve=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,R);else{const fe=Jh(i,w,"vertex"),Me=Jh(i,R,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ne+`
`+fe+`
`+Me)}else ne!==""?Fe("WebGLProgram: Program Info Log:",ne):($===""||Z==="")&&(ve=!1);ve&&(D.diagnostics={runnable:re,programLog:ne,vertexShader:{log:$,prefix:g},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(w),i.deleteShader(R),C=new ao(i,x),y=X_(i,x)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,U_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function hv(s,e,t,n,i,r,o){const a=new tc,l=new lv,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,E,D,W,H){const K=W.fog,ne=H.geometry,$=y.isMeshStandardMaterial?W.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),re=Z&&Z.mapping===To?Z.image.height:null,ve=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Fe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const fe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Me=fe!==void 0?fe.length:0;let Ke=0;ne.morphAttributes.position!==void 0&&(Ke=1),ne.morphAttributes.normal!==void 0&&(Ke=2),ne.morphAttributes.color!==void 0&&(Ke=3);let qe,St,T,P;if(ve){const ht=Cn[ve];qe=ht.vertexShader,St=ht.fragmentShader}else qe=y.vertexShader,St=y.fragmentShader,l.update(y),T=l.getVertexShaderID(y),P=l.getFragmentShaderID(y);const U=s.getRenderTarget(),B=s.state.buffers.depth.getReversed(),J=H.isInstancedMesh===!0,ee=H.isBatchedMesh===!0,Y=!!y.map,me=!!y.matcap,j=!!Z,Se=!!y.aoMap,Te=!!y.lightMap,z=!!y.bumpMap,Re=!!y.normalMap,L=!!y.displacementMap,it=!!y.emissiveMap,De=!!y.metalnessMap,ot=!!y.roughnessMap,be=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,O=y.iridescence>0,te=y.sheen>0,se=y.transmission>0,Q=be&&!!y.anisotropyMap,Ne=A&&!!y.clearcoatMap,ue=A&&!!y.clearcoatNormalMap,Ie=A&&!!y.clearcoatRoughnessMap,He=O&&!!y.iridescenceMap,le=O&&!!y.iridescenceThicknessMap,pe=te&&!!y.sheenColorMap,Pe=te&&!!y.sheenRoughnessMap,Le=!!y.specularMap,de=!!y.specularColorMap,Je=!!y.specularIntensityMap,F=se&&!!y.transmissionMap,ye=se&&!!y.thicknessMap,ce=!!y.gradientMap,Ee=!!y.alphaMap,ae=y.alphaTest>0,ie=!!y.alphaHash,he=!!y.extensions;let We=Ln;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(We=s.toneMapping);const _t={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:St,defines:y.defines,customVertexShaderID:T,customFragmentShaderID:P,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ee,batchingColor:ee&&H._colorsTexture!==null,instancing:J,instancingColor:J&&H.instanceColor!==null,instancingMorph:J&&H.morphTexture!==null,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Jt,alphaToCoverage:!!y.alphaToCoverage,map:Y,matcap:me,envMap:j,envMapMode:j&&Z.mapping,envMapCubeUVHeight:re,aoMap:Se,lightMap:Te,bumpMap:z,normalMap:Re,displacementMap:L,emissiveMap:it,normalMapObjectSpace:Re&&y.normalMapType===wf,normalMapTangentSpace:Re&&y.normalMapType===Fu,metalnessMap:De,roughnessMap:ot,anisotropy:be,anisotropyMap:Q,clearcoat:A,clearcoatMap:Ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:O,iridescenceMap:He,iridescenceThicknessMap:le,sheen:te,sheenColorMap:pe,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:de,specularIntensityMap:Je,transmission:se,transmissionMap:F,thicknessMap:ye,gradientMap:ce,opaque:y.transparent===!1&&y.blending===as&&y.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:ie,combine:y.combine,mapUv:Y&&x(y.map.channel),aoMapUv:Se&&x(y.aoMap.channel),lightMapUv:Te&&x(y.lightMap.channel),bumpMapUv:z&&x(y.bumpMap.channel),normalMapUv:Re&&x(y.normalMap.channel),displacementMapUv:L&&x(y.displacementMap.channel),emissiveMapUv:it&&x(y.emissiveMap.channel),metalnessMapUv:De&&x(y.metalnessMap.channel),roughnessMapUv:ot&&x(y.roughnessMap.channel),anisotropyMapUv:Q&&x(y.anisotropyMap.channel),clearcoatMapUv:Ne&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(y.sheenRoughnessMap.channel),specularMapUv:Le&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:Je&&x(y.specularIntensityMap.channel),transmissionMapUv:F&&x(y.transmissionMap.channel),thicknessMapUv:ye&&x(y.thicknessMap.channel),alphaMapUv:Ee&&x(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Re||be),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(Y||Ee),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:B,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Y&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(b(E,y),_(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const E=m[y.type];let D;if(E){const W=Cn[E];D=gp.clone(W.uniforms)}else D=y.uniforms;return D}function w(y,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new ov(s,E,y,r),h.push(D),u.set(E,D)),D}function R(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function I(y){l.remove(y)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:C}}function uv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function iu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function su(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||dv),n.length>1&&n.sort(d||iu),i.length>1&&i.sort(d||iu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new su,s.set(n,[o])):i>=r.length?(o=new su,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function mv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gv=0;function xv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _v(s){const e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new $e,o=new $e;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,_=0,S=0,w=0,R=0,I=0;c.sort(xv);for(let y=0,E=c.length;y<E;y++){const D=c[y],W=D.color,H=D.intensity,K=D.distance;let ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ms?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*H,u+=W.g*H,d+=W.b*H;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],H);I++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,re=t.get(D);re.shadowIntensity=Z.intensity,re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,n.directionalShadow[f]=re,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=$,f++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(W).multiplyScalar(H),$.distance=K,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const Z=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Z.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=Z.matrix,D.castShadow){const re=t.get(D);re.shadowIntensity=Z.intensity,re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,n.spotShadow[x]=re,n.spotShadowMap[x]=ne,S++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(W).multiplyScalar(H),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=$,g++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Z=D.shadow,re=t.get(D);re.shadowIntensity=Z.intensity,re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,re.shadowCameraNear=Z.camera.near,re.shadowCameraFar=Z.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=D.shadow.matrix,_++}n.point[m]=$,m++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(H),$.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=$,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==_||C.numSpotShadows!==S||C.numSpotMaps!==w||C.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=_,C.numSpotShadows=S,C.numSpotMaps=w,C.numLightProbes=I,n.version=gv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const _=c[p];if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(_.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ru(s){const e=new _v(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ru(s),e.set(i,[a])):r>=o.length?(a=new ru(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],bv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ou=new $e,zs=new N,ba=new N;function Ev(s,e,t){let n=new ac;const i=new Ae,r=new Ae,o=new bt,a=new dm,l=new fm,c={},h=t.maxTextureSize,u={[ii]:on,[on]:ii,[sn]:sn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new st(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let p=this.type;this.render=function(R,I,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===ef&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=to);const y=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Qn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==this.type;H&&I.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ne=>ne.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ne=R.length;K<ne;K++){const $=R[K],Z=$.shadow;if(Z===void 0){Fe("WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const re=Z.getFrameExtents();if(i.multiply(re),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,Z.mapSize.y=r.y)),Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Gs){if($.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Dn(i.x,i.y,{format:ms,type:si,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),Z.map.texture.name=$.name+".shadowMap",Z.map.depthTexture=new ar(i.x,i.y,_n),Z.map.depthTexture.name=$.name+".shadowMapDepth",Z.map.depthTexture.format=ri,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dt,Z.map.depthTexture.magFilter=Dt}else{$.isPointLight?(Z.map=new Xu(i.x),Z.map.depthTexture=new Ip(i.x,Un)):(Z.map=new Dn(i.x,i.y),Z.map.depthTexture=new ar(i.x,i.y,Un)),Z.map.depthTexture.name=$.name+".shadowMap",Z.map.depthTexture.format=ri;const fe=s.state.buffers.depth.getReversed();this.type===to?(Z.map.depthTexture.compareFunction=fe?Jl:Zl,Z.map.depthTexture.minFilter=Nt,Z.map.depthTexture.magFilter=Nt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dt,Z.map.depthTexture.magFilter=Dt)}Z.camera.updateProjectionMatrix()}const ve=Z.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ve;fe++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(Z.map),s.clear());const Me=Z.getViewport(fe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),W.viewport(o)}if($.isPointLight){const Me=Z.camera,Ke=Z.matrix,qe=$.distance||Me.far;qe!==Me.far&&(Me.far=qe,Me.updateProjectionMatrix()),zs.setFromMatrixPosition($.matrixWorld),Me.position.copy(zs),ba.copy(Me.position),ba.add(Sv[fe]),Me.up.copy(bv[fe]),Me.lookAt(ba),Me.updateMatrixWorld(),Ke.makeTranslation(-zs.x,-zs.y,-zs.z),ou.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ou,Me.coordinateSystem,Me.reversedDepth)}else Z.updateMatrices($);n=Z.getFrustum(),S(I,C,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Gs&&b(Z,C),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,E,D)};function b(R,I){const C=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(i.x,i.y,{format:ms,type:si})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,C,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,C,f,x,null)}function _(R,I,C,y){let E=null;const D=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)E=D;else if(E=C.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=E.uuid,H=I.uuid;let K=c[W];K===void 0&&(K={},c[W]=K);let ne=K[H];ne===void 0&&(ne=E.clone(),K[H]=ne,I.addEventListener("dispose",w)),E=ne}if(E.visible=I.visible,E.wireframe=I.wireframe,y===Gs?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:u[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=s.properties.get(E);W.light=C}return E}function S(R,I,C,y,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Gs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const H=e.update(R),K=R.material;if(Array.isArray(K)){const ne=H.groups;for(let $=0,Z=ne.length;$<Z;$++){const re=ne[$],ve=K[re.materialIndex];if(ve&&ve.visible){const fe=_(R,ve,y,E);R.onBeforeShadow(s,R,I,C,H,fe,re),s.renderBufferDirect(C,null,H,fe,R,re),R.onAfterShadow(s,R,I,C,H,fe,re)}}}else if(K.visible){const ne=_(R,K,y,E);R.onBeforeShadow(s,R,I,C,H,ne,null),s.renderBufferDirect(C,null,H,ne,R,null),R.onAfterShadow(s,R,I,C,H,ne,null)}}const W=R.children;for(let H=0,K=W.length;H<K;H++)S(W[H],I,C,y,E)}function w(R){R.target.removeEventListener("dispose",w);for(const C in c){const y=c[C],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const Tv={[Ua]:Fa,[Oa]:za,[Ba]:Va,[fs]:ka,[Fa]:Ua,[za]:Oa,[Va]:Ba,[ka]:fs};function wv(s,e){function t(){let F=!1;const ye=new bt;let ce=null;const Ee=new bt(0,0,0,0);return{setMask:function(ae){ce!==ae&&!F&&(s.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){F=ae},setClear:function(ae,ie,he,We,_t){_t===!0&&(ae*=We,ie*=We,he*=We),ye.set(ae,ie,he,We),Ee.equals(ye)===!1&&(s.clearColor(ae,ie,he,We),Ee.copy(ye))},reset:function(){F=!1,ce=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,ce=null,Ee=null,ae=null;return{setReversed:function(ie){if(ye!==ie){const he=e.get("EXT_clip_control");ie?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ye=ie;const We=ae;ae=null,this.setClear(We)}},getReversed:function(){return ye},setTest:function(ie){ie?U(s.DEPTH_TEST):B(s.DEPTH_TEST)},setMask:function(ie){ce!==ie&&!F&&(s.depthMask(ie),ce=ie)},setFunc:function(ie){if(ye&&(ie=Tv[ie]),Ee!==ie){switch(ie){case Ua:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case ka:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ae!==ie&&(ye&&(ie=1-ie),s.clearDepth(ie),ae=ie)},reset:function(){F=!1,ce=null,Ee=null,ae=null,ye=!1}}}function i(){let F=!1,ye=null,ce=null,Ee=null,ae=null,ie=null,he=null,We=null,_t=null;return{setTest:function(ht){F||(ht?U(s.STENCIL_TEST):B(s.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!F&&(s.stencilMask(ht),ye=ht)},setFunc:function(ht,wn,Vn){(ce!==ht||Ee!==wn||ae!==Vn)&&(s.stencilFunc(ht,wn,Vn),ce=ht,Ee=wn,ae=Vn)},setOp:function(ht,wn,Vn){(ie!==ht||he!==wn||We!==Vn)&&(s.stencilOp(ht,wn,Vn),ie=ht,he=wn,We=Vn)},setLocked:function(ht){F=ht},setClear:function(ht){_t!==ht&&(s.clearStencil(ht),_t=ht)},reset:function(){F=!1,ye=null,ce=null,Ee=null,ae=null,ie=null,he=null,We=null,_t=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,_=null,S=null,w=null,R=null,I=new ze(0,0,0),C=0,y=!1,E=null,D=null,W=null,H=null,K=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=Z>=1):re.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=Z>=2);let ve=null,fe={};const Me=s.getParameter(s.SCISSOR_BOX),Ke=s.getParameter(s.VIEWPORT),qe=new bt().fromArray(Me),St=new bt().fromArray(Ke);function T(F,ye,ce,Ee){const ae=new Uint8Array(4),ie=s.createTexture();s.bindTexture(F,ie),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let he=0;he<ce;he++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(ye+he,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return ie}const P={};P[s.TEXTURE_2D]=T(s.TEXTURE_2D,s.TEXTURE_2D,1),P[s.TEXTURE_CUBE_MAP]=T(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[s.TEXTURE_2D_ARRAY]=T(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),P[s.TEXTURE_3D]=T(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(s.DEPTH_TEST),o.setFunc(fs),z(!1),Re(kc),U(s.CULL_FACE),Se(Qn);function U(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function B(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function J(F,ye){return u[F]!==ye?(s.bindFramebuffer(F,ye),u[F]=ye,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ye),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function ee(F,ye){let ce=f,Ee=!1;if(F){ce=d.get(ye),ce===void 0&&(ce=[],d.set(ye,ce));const ae=F.textures;if(ce.length!==ae.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,he=ae.length;ie<he;ie++)ce[ie]=s.COLOR_ATTACHMENT0+ie;ce.length=ae.length,Ee=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(ce)}function Y(F){return m!==F?(s.useProgram(F),m=F,!0):!1}const me={[Di]:s.FUNC_ADD,[nf]:s.FUNC_SUBTRACT,[sf]:s.FUNC_REVERSE_SUBTRACT};me[rf]=s.MIN,me[of]=s.MAX;const j={[af]:s.ZERO,[lf]:s.ONE,[cf]:s.SRC_COLOR,[Da]:s.SRC_ALPHA,[mf]:s.SRC_ALPHA_SATURATE,[ff]:s.DST_COLOR,[uf]:s.DST_ALPHA,[hf]:s.ONE_MINUS_SRC_COLOR,[Na]:s.ONE_MINUS_SRC_ALPHA,[pf]:s.ONE_MINUS_DST_COLOR,[df]:s.ONE_MINUS_DST_ALPHA,[gf]:s.CONSTANT_COLOR,[xf]:s.ONE_MINUS_CONSTANT_COLOR,[_f]:s.CONSTANT_ALPHA,[vf]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(F,ye,ce,Ee,ae,ie,he,We,_t,ht){if(F===Qn){x===!0&&(B(s.BLEND),x=!1);return}if(x===!1&&(U(s.BLEND),x=!0),F!==tf){if(F!==g||ht!==y){if((p!==Di||S!==Di)&&(s.blendEquation(s.FUNC_ADD),p=Di,S=Di),ht)switch(F){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFunc(s.ONE,s.ONE);break;case zc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}b=null,_=null,w=null,R=null,I.set(0,0,0),C=0,g=F,y=ht}return}ae=ae||ye,ie=ie||ce,he=he||Ee,(ye!==p||ae!==S)&&(s.blendEquationSeparate(me[ye],me[ae]),p=ye,S=ae),(ce!==b||Ee!==_||ie!==w||he!==R)&&(s.blendFuncSeparate(j[ce],j[Ee],j[ie],j[he]),b=ce,_=Ee,w=ie,R=he),(We.equals(I)===!1||_t!==C)&&(s.blendColor(We.r,We.g,We.b,_t),I.copy(We),C=_t),g=F,y=!1}function Te(F,ye){F.side===sn?B(s.CULL_FACE):U(s.CULL_FACE);let ce=F.side===on;ye&&(ce=!ce),z(ce),F.blending===as&&F.transparent===!1?Se(Qn):Se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):B(s.SAMPLE_ALPHA_TO_COVERAGE)}function z(F){E!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),E=F)}function Re(F){F!==Jd?(U(s.CULL_FACE),F!==D&&(F===kc?s.cullFace(s.BACK):F===Qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):B(s.CULL_FACE),D=F}function L(F){F!==W&&($&&s.lineWidth(F),W=F)}function it(F,ye,ce){F?(U(s.POLYGON_OFFSET_FILL),(H!==ye||K!==ce)&&(s.polygonOffset(ye,ce),H=ye,K=ce)):B(s.POLYGON_OFFSET_FILL)}function De(F){F?U(s.SCISSOR_TEST):B(s.SCISSOR_TEST)}function ot(F){F===void 0&&(F=s.TEXTURE0+ne-1),ve!==F&&(s.activeTexture(F),ve=F)}function be(F,ye,ce){ce===void 0&&(ve===null?ce=s.TEXTURE0+ne-1:ce=ve);let Ee=fe[ce];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[ce]=Ee),(Ee.type!==F||Ee.texture!==ye)&&(ve!==ce&&(s.activeTexture(ce),ve=ce),s.bindTexture(F,ye||P[F]),Ee.type=F,Ee.texture=ye)}function A(){const F=fe[ve];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function te(){try{s.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function se(){try{s.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ue(){try{s.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Ie(){try{s.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function He(){try{s.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function le(){try{s.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function pe(F){qe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),qe.copy(F))}function Pe(F){St.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),St.copy(F))}function Le(F,ye){let ce=c.get(ye);ce===void 0&&(ce=new WeakMap,c.set(ye,ce));let Ee=ce.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(ye,F.name),ce.set(F,Ee))}function de(F,ye){const Ee=c.get(ye).get(F);l.get(ye)!==Ee&&(s.uniformBlockBinding(ye,Ee,F.__bindingPointIndex),l.set(ye,Ee))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ve=null,fe={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,_=null,S=null,w=null,R=null,I=new ze(0,0,0),C=0,y=!1,E=null,D=null,W=null,H=null,K=null,qe.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:B,bindFramebuffer:J,drawBuffers:ee,useProgram:Y,setBlending:Se,setMaterial:Te,setFlipSided:z,setCullFace:Re,setLineWidth:L,setPolygonOffset:it,setScissorTest:De,activeTexture:ot,bindTexture:be,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:He,texImage3D:le,updateUBOMapping:Le,uniformBlockBinding:de,texStorage2D:ue,texStorage3D:Ie,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ne,scissor:pe,viewport:Pe,reset:Je}}function Av(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return f?new OffscreenCanvas(A,v):rr("canvas")}function x(A,v,O){let te=1;const se=be(A);if((se.width>O||se.height>O)&&(te=O/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(te*se.width),Ne=Math.floor(te*se.height);u===void 0&&(u=m(Q,Ne));const ue=v?m(Q,Ne):u;return ue.width=Q,ue.height=Ne,ue.getContext("2d").drawImage(A,0,0,Q,Ne),Fe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Ne+")."),ue}else return"data"in A&&Fe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,v,O,te,se=!1){if(A!==null){if(s[A]!==void 0)return s[A];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=v;if(v===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),v===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RG8UI),O===s.UNSIGNED_SHORT&&(Q=s.RG16UI),O===s.UNSIGNED_INT&&(Q=s.RG32UI),O===s.BYTE&&(Q=s.RG8I),O===s.SHORT&&(Q=s.RG16I),O===s.INT&&(Q=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),O===s.UNSIGNED_INT&&(Q=s.RGB32UI),O===s.BYTE&&(Q=s.RGB8I),O===s.SHORT&&(Q=s.RGB16I),O===s.INT&&(Q=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),O===s.UNSIGNED_INT&&(Q=s.RGBA32UI),O===s.BYTE&&(Q=s.RGBA8I),O===s.SHORT&&(Q=s.RGBA16I),O===s.INT&&(Q=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),v===s.RGBA){const Ne=se?ho:rt.getTransfer(te);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=Ne===dt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(A,v){let O;return A?v===null||v===Un||v===nr?O=s.DEPTH24_STENCIL8:v===_n?O=s.DEPTH32F_STENCIL8:v===tr&&(O=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===nr?O=s.DEPTH_COMPONENT24:v===_n?O=s.DEPTH_COMPONENT32F:v===tr&&(O=s.DEPTH_COMPONENT16),O}function w(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),C(v),v.isVideoTexture&&h.delete(v)}function I(A){const v=A.target;v.removeEventListener("dispose",I),E(v)}function C(A){const v=n.get(A);if(v.__webglInit===void 0)return;const O=A.source,te=d.get(O);if(te){const se=te[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(A),Object.keys(te).length===0&&d.delete(O)}n.remove(A)}function y(A){const v=n.get(A);s.deleteTexture(v.__webglTexture);const O=A.source,te=d.get(O);delete te[v.__cacheKey],o.memory.textures--}function E(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let se=0;se<v.__webglFramebuffer[te].length;se++)s.deleteFramebuffer(v.__webglFramebuffer[te][se]);else s.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)s.deleteFramebuffer(v.__webglFramebuffer[te]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=A.textures;for(let te=0,se=O.length;te<se;te++){const Q=n.get(O[te]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(O[te])}n.remove(A)}let D=0;function W(){D=0}function H(){const A=D;return A>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function K(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ne(A,v){const O=n.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const te=A.image;if(te===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{P(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function $(A,v){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){P(O,A,v);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function Z(A,v){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){P(O,A,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function re(A,v){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){U(O,A,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const ve={[Bi]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},fe={[Dt]:s.NEAREST,[Ru]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[no]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},Me={[Af]:s.NEVER,[Lf]:s.ALWAYS,[Rf]:s.LESS,[Zl]:s.LEQUAL,[Cf]:s.EQUAL,[Jl]:s.GEQUAL,[Pf]:s.GREATER,[If]:s.NOTEQUAL};function Ke(A,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===no||v.magFilter===Hs||v.magFilter===jn||v.minFilter===Nt||v.minFilter===no||v.minFilter===Hs||v.minFilter===jn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ve[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ve[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ve[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,fe[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dt||v.minFilter!==Hs&&v.minFilter!==jn||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qe(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const te=v.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const Q=K(v);if(Q!==A.__cacheKey){se[Q]===void 0&&(se[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[Q].usedTimes++;const Ne=se[A.__cacheKey];Ne!==void 0&&(se[A.__cacheKey].usedTimes--,Ne.usedTimes===0&&y(v)),A.__cacheKey=Q,A.__webglTexture=se[Q].texture}return O}function St(A,v,O){return Math.floor(Math.floor(A/O)/v)}function T(A,v,O,te){const Q=A.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,te,v.data);else{Q.sort((le,pe)=>le.start-pe.start);let Ne=0;for(let le=1;le<Q.length;le++){const pe=Q[Ne],Pe=Q[le],Le=pe.start+pe.count,de=St(Pe.start,v.width,4),Je=St(pe.start,v.width,4);Pe.start<=Le+1&&de===Je&&St(Pe.start+Pe.count-1,v.width,4)===de?pe.count=Math.max(pe.count,Pe.start+Pe.count-pe.start):(++Ne,Q[Ne]=Pe)}Q.length=Ne+1;const ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ie=s.getParameter(s.UNPACK_SKIP_PIXELS),He=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let le=0,pe=Q.length;le<pe;le++){const Pe=Q[le],Le=Math.floor(Pe.start/4),de=Math.ceil(Pe.count/4),Je=Le%v.width,F=Math.floor(Le/v.width),ye=de,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Je,F,ye,ce,O,te,v.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,He)}}function P(A,v,O){let te=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=s.TEXTURE_3D);const se=qe(A,v),Q=v.source;t.bindTexture(te,A.__webglTexture,s.TEXTURE0+O);const Ne=n.get(Q);if(Q.version!==Ne.__version||se===!0){t.activeTexture(s.TEXTURE0+O);const ue=rt.getPrimaries(rt.workingColorSpace),Ie=v.colorSpace===gi?null:rt.getPrimaries(v.colorSpace),He=v.colorSpace===gi||ue===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=x(v.image,!1,i.maxTextureSize);le=ot(v,le);const pe=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Le=_(v.internalFormat,pe,Pe,v.colorSpace,v.isVideoTexture);Ke(te,v);let de;const Je=v.mipmaps,F=v.isVideoTexture!==!0,ye=Ne.__version===void 0||se===!0,ce=Q.dataReady,Ee=w(v,le);if(v.isDepthTexture)Le=S(v.format===Ui,v.type),ye&&(F?t.texStorage2D(s.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Le,le.width,le.height,0,pe,Pe,null));else if(v.isDataTexture)if(Je.length>0){F&&ye&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,Je[0].width,Je[0].height);for(let ae=0,ie=Je.length;ae<ie;ae++)de=Je[ae],F?ce&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,de.width,de.height,pe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,ae,Le,de.width,de.height,0,pe,Pe,de.data);v.generateMipmaps=!1}else F?(ye&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,le.width,le.height),ce&&T(v,le,pe,Pe)):t.texImage2D(s.TEXTURE_2D,0,Le,le.width,le.height,0,pe,Pe,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,Je[0].width,Je[0].height,le.depth);for(let ae=0,ie=Je.length;ae<ie;ae++)if(de=Je[ae],v.format!==vn)if(pe!==null)if(F){if(ce)if(v.layerUpdates.size>0){const he=Oh(de.width,de.height,v.format,v.type);for(const We of v.layerUpdates){const _t=de.data.subarray(We*he/de.data.BYTES_PER_ELEMENT,(We+1)*he/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,We,de.width,de.height,1,pe,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,le.depth,pe,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Le,de.width,de.height,le.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,le.depth,pe,Pe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Le,de.width,de.height,le.depth,0,pe,Pe,de.data)}else{F&&ye&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,Je[0].width,Je[0].height);for(let ae=0,ie=Je.length;ae<ie;ae++)de=Je[ae],v.format!==vn?pe!==null?F?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Le,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ce&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,de.width,de.height,pe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,ae,Le,de.width,de.height,0,pe,Pe,de.data)}else if(v.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,le.width,le.height,le.depth),ce)if(v.layerUpdates.size>0){const ae=Oh(le.width,le.height,v.format,v.type);for(const ie of v.layerUpdates){const he=le.data.subarray(ie*ae/le.data.BYTES_PER_ELEMENT,(ie+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,pe,Pe,he)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,Pe,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,pe,Pe,le.data);else if(v.isData3DTexture)F?(ye&&t.texStorage3D(s.TEXTURE_3D,Ee,Le,le.width,le.height,le.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,Pe,le.data)):t.texImage3D(s.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,pe,Pe,le.data);else if(v.isFramebufferTexture){if(ye)if(F)t.texStorage2D(s.TEXTURE_2D,Ee,Le,le.width,le.height);else{let ae=le.width,ie=le.height;for(let he=0;he<Ee;he++)t.texImage2D(s.TEXTURE_2D,he,Le,ae,ie,0,pe,Pe,null),ae>>=1,ie>>=1}}else if(Je.length>0){if(F&&ye){const ae=be(Je[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height)}for(let ae=0,ie=Je.length;ae<ie;ae++)de=Je[ae],F?ce&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,pe,Pe,de):t.texImage2D(s.TEXTURE_2D,ae,Le,pe,Pe,de);v.generateMipmaps=!1}else if(F){if(ye){const ae=be(le);t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Pe,le)}else t.texImage2D(s.TEXTURE_2D,0,Le,pe,Pe,le);g(v)&&p(te),Ne.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function U(A,v,O){if(v.image.length!==6)return;const te=qe(A,v),se=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const Q=n.get(se);if(se.version!==Q.__version||te===!0){t.activeTexture(s.TEXTURE0+O);const Ne=rt.getPrimaries(rt.workingColorSpace),ue=v.colorSpace===gi?null:rt.getPrimaries(v.colorSpace),Ie=v.colorSpace===gi||Ne===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!He&&!le?pe[ie]=x(v.image[ie],!0,i.maxCubemapSize):pe[ie]=le?v.image[ie].image:v.image[ie],pe[ie]=ot(v,pe[ie]);const Pe=pe[0],Le=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Je=_(v.internalFormat,Le,de,v.colorSpace),F=v.isVideoTexture!==!0,ye=Q.__version===void 0||te===!0,ce=se.dataReady;let Ee=w(v,Pe);Ke(s.TEXTURE_CUBE_MAP,v);let ae;if(He){F&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,Je,Pe.width,Pe.height);for(let ie=0;ie<6;ie++){ae=pe[ie].mipmaps;for(let he=0;he<ae.length;he++){const We=ae[he];v.format!==vn?Le!==null?F?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he,0,0,We.width,We.height,Le,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he,Je,We.width,We.height,0,We.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he,0,0,We.width,We.height,Le,de,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he,Je,We.width,We.height,0,Le,de,We.data)}}}else{if(ae=v.mipmaps,F&&ye){ae.length>0&&Ee++;const ie=be(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,Je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){F?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Le,de,pe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,pe[ie].width,pe[ie].height,0,Le,de,pe[ie].data);for(let he=0;he<ae.length;he++){const _t=ae[he].image[ie].image;F?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he+1,0,0,_t.width,_t.height,Le,de,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he+1,Je,_t.width,_t.height,0,Le,de,_t.data)}}else{F?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,de,pe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,Le,de,pe[ie]);for(let he=0;he<ae.length;he++){const We=ae[he];F?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he+1,0,0,Le,de,We.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he+1,Je,Le,de,We.image[ie])}}}g(v)&&p(s.TEXTURE_CUBE_MAP),Q.__version=se.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function B(A,v,O,te,se,Q){const Ne=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),Ie=_(O.internalFormat,Ne,ue,O.colorSpace),He=n.get(v),le=n.get(O);if(le.__renderTarget=v,!He.__hasExternalTextures){const pe=Math.max(1,v.width>>Q),Pe=Math.max(1,v.height>>Q);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,Ie,pe,Pe,v.depth,0,Ne,ue,null):t.texImage2D(se,Q,Ie,pe,Pe,0,Ne,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),it(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,se,le.__webglTexture,0,L(v)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,se,le.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(A,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){const te=v.depthTexture,se=te&&te.isDepthTexture?te.type:null,Q=S(v.stencilBuffer,se),Ne=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;it(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(v),Q,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(v),Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,A)}else{const te=v.textures;for(let se=0;se<te.length;se++){const Q=te[se],Ne=r.convert(Q.format,Q.colorSpace),ue=r.convert(Q.type),Ie=_(Q.internalFormat,Ne,ue,Q.colorSpace);it(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(v),Ie,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(v),Ie,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(A,v,O){const te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(v.depthTexture);if(se.__renderTarget=v,(!se.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te){if(se.__webglInit===void 0&&(se.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Ke(s.TEXTURE_CUBE_MAP,v.depthTexture);const He=r.convert(v.depthTexture.format),le=r.convert(v.depthTexture.type);let pe;v.depthTexture.format===ri?pe=s.DEPTH_COMPONENT24:v.depthTexture.format===Ui&&(pe=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,pe,v.width,v.height,0,He,le,null)}}else ne(v.depthTexture,0);const Q=se.__webglTexture,Ne=L(v),ue=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Ie=v.depthTexture.format===Ui?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===ri)it(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ue,Q,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ue,Q,0);else if(v.depthTexture.format===Ui)it(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ue,Q,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ue,Q,0);else throw new Error("Unknown depthTexture format")}function Y(A){const v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=te}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let te=0;te<6;te++)ee(v.__webglFramebuffer[te],A,te);else{const te=A.texture.mipmaps;te&&te.length>0?ee(v.__webglFramebuffer[0],A,0):ee(v.__webglFramebuffer,A,0)}else if(O){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=s.createRenderbuffer(),J(v.__webglDepthbuffer[te],A,!1);else{const se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,Q)}}else{const te=A.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),J(v.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(A,v,O){const te=n.get(A);v!==void 0&&B(te.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Y(A)}function j(A){const v=A.texture,O=n.get(A),te=n.get(v);A.addEventListener("dispose",I);const se=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ne=se.length>1;if(Ne||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=v.version,o.memory.textures++),Q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)O.__webglFramebuffer[ue][Ie]=s.createFramebuffer()}else O.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[ue]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let ue=0,Ie=se.length;ue<Ie;ue++){const He=n.get(se[ue]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&it(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Ie=se[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const He=r.convert(Ie.format,Ie.colorSpace),le=r.convert(Ie.type),pe=_(Ie.internalFormat,He,le,Ie.colorSpace,A.isXRRenderTarget===!0),Pe=L(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,pe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),J(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ke(s.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)B(O.__webglFramebuffer[ue][Ie],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie);else B(O.__webglFramebuffer[ue],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ue=0,Ie=se.length;ue<Ie;ue++){const He=se[ue],le=n.get(He);let pe=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),Ke(pe,He),B(O.__webglFramebuffer,A,He,s.COLOR_ATTACHMENT0+ue,pe,0),g(He)&&p(pe)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),Ke(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)B(O.__webglFramebuffer[Ie],A,v,s.COLOR_ATTACHMENT0,ue,Ie);else B(O.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,ue,0);g(v)&&p(ue),t.unbindTexture()}A.depthBuffer&&Y(A)}function Se(A){const v=A.textures;for(let O=0,te=v.length;O<te;O++){const se=v[O];if(g(se)){const Q=b(A),Ne=n.get(se).__webglTexture;t.bindTexture(Q,Ne),p(Q),t.unbindTexture()}}}const Te=[],z=[];function Re(A){if(A.samples>0){if(it(A)===!1){const v=A.textures,O=A.width,te=A.height;let se=s.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(A),ue=v.length>1;if(ue)for(let He=0;He<v.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ie=A.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let He=0;He<v.length;He++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[He]);const le=n.get(v[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,O,te,0,0,O,te,se,s.NEAREST),l===!0&&(Te.length=0,z.length=0,Te.push(s.COLOR_ATTACHMENT0+He),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Te.push(Q),z.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let He=0;He<v.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[He]);const le=n.get(v[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function L(A){return Math.min(i.maxSamples,A.samples)}function it(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function De(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ot(A,v){const O=A.colorSpace,te=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Jt&&O!==gi&&(rt.getTransfer(O)===dt?(te!==vn||se!==un)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",O)),v}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=re,this.rebindTextures=me,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=B,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rv(s,e){function t(n,i=gi){let r;const o=rt.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===Xl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return s.BYTE;if(n===Pu)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===Wl)return s.INT;if(n===Un)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===si)return s.HALF_FLOAT;if(n===Du)return s.ALPHA;if(n===Nu)return s.RGB;if(n===vn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===ql)return s.RED;if(n===$l)return s.RED_INTEGER;if(n===ms)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===Ya||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===ja||n===Za||n===Ja||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===vl||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new It(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends bs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Iv,p={},b=t.getContextAttributes();let _=null,S=null;const w=[],R=[],I=new Ae;let C=null;const y=new jt;y.viewport=new bt;const E=new jt;E.viewport=new bt;const D=[y,E],W=new Lm;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let U=w[P];return U===void 0&&(U=new aa,w[P]=U),U.getTargetRaySpace()},this.getControllerGrip=function(P){let U=w[P];return U===void 0&&(U=new aa,w[P]=U),U.getGripSpace()},this.getHand=function(P){let U=w[P];return U===void 0&&(U=new aa,w[P]=U),U.getHandSpace()};function ne(P){const U=R.indexOf(P.inputSource);if(U===-1)return;const B=w[U];B!==void 0&&(B.update(P.inputSource,P.frame,c||o),B.dispatchEvent({type:P.type,data:P.inputSource}))}function $(){i.removeEventListener("select",ne),i.removeEventListener("selectstart",ne),i.removeEventListener("selectend",ne),i.removeEventListener("squeeze",ne),i.removeEventListener("squeezestart",ne),i.removeEventListener("squeezeend",ne),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Z);for(let P=0;P<w.length;P++){const U=R[P];U!==null&&(R[P]=null,w[P].disconnect(U))}H=null,K=null,g.reset();for(const P in p)delete p[P];e.setRenderTarget(_),f=null,d=null,u=null,i=null,S=null,T.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",ne),i.addEventListener("selectstart",ne),i.addEventListener("selectend",ne),i.addEventListener("squeeze",ne),i.addEventListener("squeezestart",ne),i.addEventListener("squeezeend",ne),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,J=null,ee=null;b.depth&&(ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=b.stencil?Ui:ri,J=b.stencil?nr:Un);const Y={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Y),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Dn(d.textureWidth,d.textureHeight,{format:vn,type:un,depthTexture:new ar(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const B={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Dn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),T.setContext(i),T.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(P){for(let U=0;U<P.removed.length;U++){const B=P.removed[U],J=R.indexOf(B);J>=0&&(R[J]=null,w[J].disconnect(B))}for(let U=0;U<P.added.length;U++){const B=P.added[U];let J=R.indexOf(B);if(J===-1){for(let Y=0;Y<w.length;Y++)if(Y>=R.length){R.push(B),J=Y;break}else if(R[Y]===null){R[Y]=B,J=Y;break}if(J===-1)break}const ee=w[J];ee&&ee.connect(B)}}const re=new N,ve=new N;function fe(P,U,B){re.setFromMatrixPosition(U.matrixWorld),ve.setFromMatrixPosition(B.matrixWorld);const J=re.distanceTo(ve),ee=U.projectionMatrix.elements,Y=B.projectionMatrix.elements,me=ee[14]/(ee[10]-1),j=ee[14]/(ee[10]+1),Se=(ee[9]+1)/ee[5],Te=(ee[9]-1)/ee[5],z=(ee[8]-1)/ee[0],Re=(Y[8]+1)/Y[0],L=me*z,it=me*Re,De=J/(-z+Re),ot=De*-z;if(U.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ot),P.translateZ(De),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ee[10]===-1)P.projectionMatrix.copy(U.projectionMatrix),P.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const be=me+De,A=j+De,v=L-ot,O=it+(J-ot),te=Se*j/A*be,se=Te*j/A*be;P.projectionMatrix.makePerspective(v,O,te,se,be,A),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Me(P,U){U===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(U.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;let U=P.near,B=P.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(B=g.depthFar)),W.near=E.near=y.near=U,W.far=E.far=y.far=B,(H!==W.near||K!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),H=W.near,K=W.far),W.layers.mask=P.layers.mask|6,y.layers.mask=W.layers.mask&3,E.layers.mask=W.layers.mask&5;const J=P.parent,ee=W.cameras;Me(W,J);for(let Y=0;Y<ee.length;Y++)Me(ee[Y],J);ee.length===2?fe(W,y,E):W.projectionMatrix.copy(y.projectionMatrix),Ke(P,W,J)};function Ke(P,U,B){B===null?P.matrix.copy(U.matrixWorld):(P.matrix.copy(B.matrixWorld),P.matrix.invert(),P.matrix.multiply(U.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(U.projectionMatrix),P.projectionMatrixInverse.copy(U.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=gs*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(P){return p[P]};let qe=null;function St(P,U){if(h=U.getViewerPose(c||o),m=U,h!==null){const B=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let J=!1;B.length!==W.cameras.length&&(W.cameras.length=0,J=!0);for(let j=0;j<B.length;j++){const Se=B[j];let Te=null;if(f!==null)Te=f.getViewport(Se);else{const Re=u.getViewSubImage(d,Se);Te=Re.viewport,j===0&&(e.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(S))}let z=D[j];z===void 0&&(z=new jt,z.layers.enable(j),z.viewport=new bt,D[j]=z),z.matrix.fromArray(Se.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Se.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Te.x,Te.y,Te.width,Te.height),j===0&&(W.matrix.copy(z.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),J===!0&&W.cameras.push(z)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const j=u.getDepthInformation(B[0]);j&&j.isValid&&j.texture&&g.init(j,i.renderState)}if(ee&&ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let j=0;j<B.length;j++){const Se=B[j].camera;if(Se){let Te=p[Se];Te||(Te=new Ku,p[Se]=Te);const z=u.getCameraImage(Se);Te.sourceTexture=z}}}}for(let B=0;B<w.length;B++){const J=R[B],ee=w[B];J!==null&&ee!==void 0&&ee.update(J,U,c||o)}qe&&qe(P,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),m=null}const T=new ud;T.setAnimationLoop(St),this.setAnimationLoop=function(P){qe=P},this.dispose=function(){}}}const Ri=new Fn,Dv=new $e;function Nv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),_=b.envMap,S=b.envMapRotation;_&&(g.envMap.value=_,Ri.copy(S),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Ri)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Uv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const S=_.program;n.uniformBlockBinding(b,S)}function c(b,_){let S=i[b.id];S===void 0&&(m(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(b,w);const R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const _=u();b.__bindingPointIndex=_;const S=s.createBuffer(),w=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,w,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=i[b.id],S=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,I=S.length;R<I;R++){const C=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,E=C.length;y<E;y++){const D=C[y];if(f(D,R,y,w)===!0){const W=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let ne=0;ne<H.length;ne++){const $=H[ne],Z=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,W+K,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,_,S,w){const R=b.value,I=_+"_"+S;if(w[I]===void 0)return typeof R=="number"||typeof R=="boolean"?w[I]=R:w[I]=R.clone(),!0;{const C=w[I];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return w[I]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function m(b){const _=b.uniforms;let S=0;const w=16;for(let I=0,C=_.length;I<C;I++){const y=Array.isArray(_[I])?_[I]:[_[I]];for(let E=0,D=y.length;E<D;E++){const W=y[E],H=Array.isArray(W.value)?W.value:[W.value];for(let K=0,ne=H.length;K<ne;K++){const $=H[K],Z=x($),re=S%w,ve=re%Z.boundary,fe=re+ve;S+=ve,fe!==0&&w-fe<Z.storage&&(S+=w-fe),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Z.storage}}}const R=S%w;return R>0&&(S+=w-R),b.__size=S,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",b),_}function g(b){const _=b.target;_.removeEventListener("dispose",g);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}const Fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function Ov(){return An===null&&(An=new sc(Fv,16,16,ms,si),An.name="DFG_LUT",An.minFilter=Nt,An.magFilter=Nt,An.wrapS=Pn,An.wrapT=Pn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class Bv{constructor(e={}){const{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=f,g=new Set([jl,Kl,$l]),p=new Set([un,Un,tr,nr,Xl,Yl]),b=new Uint32Array(4),_=new Int32Array(4);let S=null,w=null;const R=[],I=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=Ct;let D=0,W=0,H=null,K=-1,ne=null;const $=new bt,Z=new bt;let re=null;const ve=new ze(0);let fe=0,Me=t.width,Ke=t.height,qe=1,St=null,T=null;const P=new bt(0,0,Me,Ke),U=new bt(0,0,Me,Ke);let B=!1;const J=new ac;let ee=!1,Y=!1;const me=new $e,j=new N,Se=new bt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function Re(){return H===null?qe:1}let L=n;function it(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ht,!1),L===null){const k="webgl2";if(L=it(k,M),L===null)throw it(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ve("WebGLRenderer: "+M.message),M}let De,ot,be,A,v,O,te,se,Q,Ne,ue,Ie,He,le,pe,Pe,Le,de,Je,F,ye,ce,Ee,ae;function ie(){De=new Ox(L),De.init(),ce=new Rv(L,De),ot=new Rx(L,De,e,ce),be=new wv(L,De),ot.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),A=new zx(L),v=new uv,O=new Av(L,De,be,v,ot,ce,A),te=new Px(y),se=new Fx(y),Q=new Wm(L),Ee=new wx(L,Q),Ne=new Bx(L,Q,A,Ee),ue=new Gx(L,Ne,Q,A),Je=new Vx(L,ot,O),Pe=new Cx(v),Ie=new hv(y,te,se,De,ot,Ee,Pe),He=new Nv(y,v),le=new fv,pe=new vv(De),de=new Tx(y,te,se,be,ue,m,l),Le=new Ev(y,ue,ot),ae=new Uv(L,A,ot,be),F=new Ax(L,De,A),ye=new kx(L,De,A),A.programs=Ie.programs,y.capabilities=ot,y.extensions=De,y.properties=v,y.renderLists=le,y.shadowMap=Le,y.state=be,y.info=A}ie(),x!==un&&(C=new Wx(x,t.width,t.height,i,r));const he=new Lv(y,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=De.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=De.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(M){M!==void 0&&(qe=M,this.setSize(Me,Ke,!1))},this.getSize=function(M){return M.set(Me,Ke)},this.setSize=function(M,k,q=!0){if(he.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Ke=k,t.width=Math.floor(M*qe),t.height=Math.floor(k*qe),q===!0&&(t.style.width=M+"px",t.style.height=k+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Me*qe,Ke*qe).floor()},this.setDrawingBufferSize=function(M,k,q){Me=M,Ke=k,qe=q,t.width=Math.floor(M*q),t.height=Math.floor(k*q),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(x===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,k,q,X){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,k,q,X),be.viewport($.copy(P).multiplyScalar(qe).round())},this.getScissor=function(M){return M.copy(U)},this.setScissor=function(M,k,q,X){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,k,q,X),be.scissor(Z.copy(U).multiplyScalar(qe).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(M){be.setScissorTest(B=M)},this.setOpaqueSort=function(M){St=M},this.setTransparentSort=function(M){T=M},this.getClearColor=function(M){return M.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,q=!0){let X=0;if(M){let G=!1;if(H!==null){const ge=H.texture.format;G=g.has(ge)}if(G){const ge=H.texture.type,we=p.has(ge),_e=de.getClearColor(),Ce=de.getClearAlpha(),Ue=_e.r,Ge=_e.g,Be=_e.b;we?(b[0]=Ue,b[1]=Ge,b[2]=Be,b[3]=Ce,L.clearBufferuiv(L.COLOR,0,b)):(_[0]=Ue,_[1]=Ge,_[2]=Be,_[3]=Ce,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),de.dispose(),le.dispose(),pe.dispose(),v.dispose(),te.dispose(),se.dispose(),ue.dispose(),Ee.dispose(),ae.dispose(),Ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ic),he.removeEventListener("sessionend",Lc),Mi.stop()};function We(M){M.preventDefault(),fo("WebGLRenderer: Context Lost."),E=!0}function _t(){fo("WebGLRenderer: Context Restored."),E=!1;const M=A.autoReset,k=Le.enabled,q=Le.autoUpdate,X=Le.needsUpdate,G=Le.type;ie(),A.autoReset=M,Le.enabled=k,Le.autoUpdate=q,Le.needsUpdate=X,Le.type=G}function ht(M){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wn(M){const k=M.target;k.removeEventListener("dispose",wn),Vn(k)}function Vn(M){Vd(M),v.remove(M)}function Vd(M){const k=v.get(M).programs;k!==void 0&&(k.forEach(function(q){Ie.releaseProgram(q)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,q,X,G,ge){k===null&&(k=Te);const we=G.isMesh&&G.matrixWorld.determinant()<0,_e=Hd(M,k,q,X,G);be.setMaterial(X,we);let Ce=q.index,Ue=1;if(X.wireframe===!0){if(Ce=Ne.getWireframeAttribute(q),Ce===void 0)return;Ue=2}const Ge=q.drawRange,Be=q.attributes.position;let et=Ge.start*Ue,mt=(Ge.start+Ge.count)*Ue;ge!==null&&(et=Math.max(et,ge.start*Ue),mt=Math.min(mt,(ge.start+ge.count)*Ue)),Ce!==null?(et=Math.max(et,0),mt=Math.min(mt,Ce.count)):Be!=null&&(et=Math.max(et,0),mt=Math.min(mt,Be.count));const At=mt-et;if(At<0||At===1/0)return;Ee.setup(G,X,_e,q,Ce);let Rt,gt=F;if(Ce!==null&&(Rt=Q.get(Ce),gt=ye,gt.setIndex(Rt)),G.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*Re()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(G.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),be.setLineWidth(ke*Re()),G.isLineSegments?gt.setMode(L.LINES):G.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else G.isPoints?gt.setMode(L.POINTS):G.isSprite&&gt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)or("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,ut=G._multiDrawCounts,lt=G._multiDrawCount,an=Ce?Q.get(Ce).bytesPerElement:1,Hi=v.get(X).currentProgram.getUniforms();for(let ln=0;ln<lt;ln++)Hi.setValue(L,"_gl_DrawID",ln),gt.render(ke[ln]/an,ut[ln])}else if(G.isInstancedMesh)gt.renderInstances(et,At,G.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ut=Math.min(q.instanceCount,ke);gt.renderInstances(et,At,ut)}else gt.render(et,At)};function Pc(M,k,q){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Sr(M,k,q),M.side=ii,M.needsUpdate=!0,Sr(M,k,q),M.side=sn):Sr(M,k,q)}this.compile=function(M,k,q=null){q===null&&(q=M),w=pe.get(q),w.init(k),I.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const X=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const _e=ge[we];Pc(_e,q,G),X.add(_e)}else Pc(ge,q,G),X.add(ge)}),w=I.pop(),X},this.compileAsync=function(M,k,q=null){const X=this.compile(M,k,q);return new Promise(G=>{function ge(){if(X.forEach(function(we){v.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){G(M);return}setTimeout(ge,10)}De.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Oo=null;function Gd(M){Oo&&Oo(M)}function Ic(){Mi.stop()}function Lc(){Mi.start()}const Mi=new ud;Mi.setAnimationLoop(Gd),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(M){Oo=M,he.setAnimationLoop(M),M===null?Mi.stop():Mi.start()},he.addEventListener("sessionstart",Ic),he.addEventListener("sessionend",Lc),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const q=he.enabled===!0&&he.isPresenting===!0,X=C!==null&&(H===null||q)&&C.begin(y,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,k,H),w=pe.get(M,I.length),w.init(k),I.push(w),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(me,In,k.reversedDepth),Y=this.localClippingEnabled,ee=Pe.init(this.clippingPlanes,Y),S=le.get(M,R.length),S.init(),R.push(S),he.enabled===!0&&he.isPresenting===!0){const we=y.xr.getDepthSensingMesh();we!==null&&Bo(we,k,-1/0,y.sortObjects)}Bo(M,k,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(St,T),z=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,z&&de.addToRenderList(S,M),this.info.render.frame++,ee===!0&&Pe.beginShadows();const G=w.state.shadowsArray;if(Le.render(G,M,k),ee===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){const we=S.opaque,_e=S.transmissive;if(w.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(_e.length>0)for(let Ue=0,Ge=Ce.length;Ue<Ge;Ue++){const Be=Ce[Ue];Nc(we,_e,M,Be)}z&&de.render(M);for(let Ue=0,Ge=Ce.length;Ue<Ge;Ue++){const Be=Ce[Ue];Dc(S,M,Be,Be.viewport)}}else _e.length>0&&Nc(we,_e,M,k),z&&de.render(M),Dc(S,M,k)}H!==null&&W===0&&(O.updateMultisampleRenderTarget(H),O.updateRenderTargetMipmap(H)),X&&C.end(y),M.isScene===!0&&M.onAfterRender(y,M,k),Ee.resetDefaultState(),K=-1,ne=null,I.pop(),I.length>0?(w=I[I.length-1],ee===!0&&Pe.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Bo(M,k,q,X){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){X&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const we=ue.update(M),_e=M.material;_e.visible&&S.push(M,we,_e,q,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||J.intersectsObject(M))){const we=ue.update(M),_e=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Se.copy(we.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(_e)){const Ce=we.groups;for(let Ue=0,Ge=Ce.length;Ue<Ge;Ue++){const Be=Ce[Ue],et=_e[Be.materialIndex];et&&et.visible&&S.push(M,we,et,q,Se.z,Be)}}else _e.visible&&S.push(M,we,_e,q,Se.z,null)}}const ge=M.children;for(let we=0,_e=ge.length;we<_e;we++)Bo(ge[we],k,q,X)}function Dc(M,k,q,X){const{opaque:G,transmissive:ge,transparent:we}=M;w.setupLightsView(q),ee===!0&&Pe.setGlobalState(y.clippingPlanes,q),X&&be.viewport($.copy(X)),G.length>0&&Mr(G,k,q),ge.length>0&&Mr(ge,k,q),we.length>0&&Mr(we,k,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Nc(M,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const et=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new Dn(1,1,{generateMipmaps:!0,type:et?si:un,minFilter:jn,samples:ot.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const ge=w.state.transmissionRenderTarget[X.id],we=X.viewport||$;ge.setSize(we.z*y.transmissionResolutionScale,we.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),Ce=y.getActiveCubeFace(),Ue=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(ve),fe=y.getClearAlpha(),fe<1&&y.setClearColor(16777215,.5),y.clear(),z&&de.render(q);const Ge=y.toneMapping;y.toneMapping=Ln;const Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),ee===!0&&Pe.setGlobalState(y.clippingPlanes,X),Mr(M,q,X),O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge),De.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let mt=0,At=k.length;mt<At;mt++){const Rt=k[mt],{object:gt,geometry:ke,material:ut,group:lt}=Rt;if(ut.side===sn&&gt.layers.test(X.layers)){const an=ut.side;ut.side=on,ut.needsUpdate=!0,Uc(gt,q,X,ke,ut,lt),ut.side=an,ut.needsUpdate=!0,et=!0}}et===!0&&(O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge))}y.setRenderTarget(_e,Ce,Ue),y.setClearColor(ve,fe),Be!==void 0&&(X.viewport=Be),y.toneMapping=Ge}function Mr(M,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ge=M.length;G<ge;G++){const we=M[G],{object:_e,geometry:Ce,group:Ue}=we;let Ge=we.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),_e.layers.test(q.layers)&&Uc(_e,k,q,Ce,Ge,Ue)}}function Uc(M,k,q,X,G,ge){M.onBeforeRender(y,k,q,X,G,ge),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(y,k,q,X,M,ge),G.transparent===!0&&G.side===sn&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,y.renderBufferDirect(q,k,X,G,M,ge),G.side=ii,G.needsUpdate=!0,y.renderBufferDirect(q,k,X,G,M,ge),G.side=sn):y.renderBufferDirect(q,k,X,G,M,ge),M.onAfterRender(y,k,q,X,G,ge)}function Sr(M,k,q){k.isScene!==!0&&(k=Te);const X=v.get(M),G=w.state.lights,ge=w.state.shadowsArray,we=G.state.version,_e=Ie.getParameters(M,G.state,ge,k,q),Ce=Ie.getProgramCacheKey(_e);let Ue=X.programs;X.environment=M.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(M.isMeshStandardMaterial?se:te).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",wn),Ue=new Map,X.programs=Ue);let Ge=Ue.get(Ce);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===we)return Oc(M,_e),Ge}else _e.uniforms=Ie.getUniforms(M),M.onBeforeCompile(_e,y),Ge=Ie.acquireProgram(_e,Ce),Ue.set(Ce,Ge),X.uniforms=_e.uniforms;const Be=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Pe.uniform),Oc(M,_e),X.needsLights=Xd(M),X.lightsStateVersion=we,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Fc(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=ao.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Oc(M,k){const q=v.get(M);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Hd(M,k,q,X,G){k.isScene!==!0&&(k=Te),O.resetTextureUnits();const ge=k.fog,we=X.isMeshStandardMaterial?k.environment:null,_e=H===null?y.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Jt,Ce=(X.isMeshStandardMaterial?se:te).get(X.envMap||we),Ue=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,mt=!!q.morphAttributes.color;let At=Ln;X.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(At=y.toneMapping);const Rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=Rt!==void 0?Rt.length:0,ke=v.get(X),ut=w.state.lights;if(ee===!0&&(Y===!0||M!==ne)){const qt=M===ne&&X.id===K;Pe.setState(X,M,qt)}let lt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ut.state.version||ke.outputColorSpace!==_e||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Ce||X.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Pe.numPlanes||ke.numIntersection!==Pe.numIntersection)||ke.vertexAlphas!==Ue||ke.vertexTangents!==Ge||ke.morphTargets!==Be||ke.morphNormals!==et||ke.morphColors!==mt||ke.toneMapping!==At||ke.morphTargetsCount!==gt)&&(lt=!0):(lt=!0,ke.__version=X.version);let an=ke.currentProgram;lt===!0&&(an=Sr(X,k,G));let Hi=!1,ln=!1,Is=!1;const vt=an.getUniforms(),Qt=ke.uniforms;if(be.useProgram(an.program)&&(Hi=!0,ln=!0,Is=!0),X.id!==K&&(K=X.id,ln=!0),Hi||ne!==M){be.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",M.projectionMatrix),vt.setValue(L,"viewMatrix",M.matrixWorldInverse);const en=vt.map.cameraPosition;en!==void 0&&en.setValue(L,j.setFromMatrixPosition(M.matrixWorld)),ot.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,ln=!0,Is=!0)}if(ke.needsLights&&(ut.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",ut.state.directionalShadowMap,O),ut.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",ut.state.spotShadowMap,O),ut.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",ut.state.pointShadowMap,O)),G.isSkinnedMesh){vt.setOptional(L,G,"bindMatrix"),vt.setOptional(L,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),vt.setValue(L,"boneTexture",qt.boneTexture,O))}G.isBatchedMesh&&(vt.setOptional(L,G,"batchingTexture"),vt.setValue(L,"batchingTexture",G._matricesTexture,O),vt.setOptional(L,G,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",G._indirectTexture,O),vt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",G._colorsTexture,O));const fn=q.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Je.update(G,q,an),(ln||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,vt.setValue(L,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qt.envMap.value=Ce,Qt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Qt.envMapIntensity.value=k.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Ov()),ln&&(vt.setValue(L,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&Wd(Qt,Is),ge&&X.fog===!0&&He.refreshFogUniforms(Qt,ge),He.refreshMaterialUniforms(Qt,X,qe,Ke,w.state.transmissionRenderTarget[M.id]),ao.upload(L,Fc(ke),Qt,O)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ao.upload(L,Fc(ke),Qt,O),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",G.center),vt.setValue(L,"modelViewMatrix",G.modelViewMatrix),vt.setValue(L,"normalMatrix",G.normalMatrix),vt.setValue(L,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let en=0,ko=qt.length;en<ko;en++){const Si=qt[en];ae.update(Si,an),ae.bind(Si,an)}}return an}function Wd(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,k,q){const X=v.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=k,v.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const q=v.get(M);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Yd=L.createFramebuffer();this.setRenderTarget=function(M,k=0,q=0){H=M,D=k,W=q;let X=null,G=!1,ge=!1;if(M){const _e=v.get(M);if(_e.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(L.FRAMEBUFFER,_e.__webglFramebuffer),$.copy(M.viewport),Z.copy(M.scissor),re=M.scissorTest,be.viewport($),be.scissor(Z),be.setScissorTest(re),K=-1;return}else if(_e.__webglFramebuffer===void 0)O.setupRenderTarget(M);else if(_e.__hasExternalTextures)O.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(_e.__boundDepthTexture!==Ge){if(Ge!==null&&v.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ge=!0);const Ue=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?X=Ue[k][q]:X=Ue[k],G=!0):M.samples>0&&O.useMultisampledRTT(M)===!1?X=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[q]:X=Ue,$.copy(M.viewport),Z.copy(M.scissor),re=M.scissorTest}else $.copy(P).multiplyScalar(qe).floor(),Z.copy(U).multiplyScalar(qe).floor(),re=B;if(q!==0&&(X=Yd),be.bindFramebuffer(L.FRAMEBUFFER,X)&&be.drawBuffers(M,X),be.viewport($),be.scissor(Z),be.setScissorTest(re),G){const _e=v.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,q)}else if(ge){const _e=k;for(let Ce=0;Ce<M.textures.length;Ce++){const Ue=v.get(M.textures[Ce]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,q,_e)}}else if(M!==null&&q!==0){const _e=v.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,q)}K=-1},this.readRenderTargetPixels=function(M,k,q,X,G,ge,we,_e=0){if(!(M&&M.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){be.bindFramebuffer(L.FRAMEBUFFER,Ce);try{const Ue=M.textures[_e],Ge=Ue.format,Be=Ue.type;if(!ot.textureFormatReadable(Ge)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Be)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-X&&q>=0&&q<=M.height-G&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(k,q,X,G,ce.convert(Ge),ce.convert(Be),ge))}finally{const Ue=H!==null?v.get(H).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,k,q,X,G,ge,we,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(k>=0&&k<=M.width-X&&q>=0&&q<=M.height-G){be.bindFramebuffer(L.FRAMEBUFFER,Ce);const Ue=M.textures[_e],Ge=Ue.format,Be=Ue.type;if(!ot.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(k,q,X,G,ce.convert(Ge),ce.convert(Be),0);const mt=H!==null?v.get(H).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,mt);const At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Uf(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.deleteBuffer(et),L.deleteSync(At),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,q=0){const X=Math.pow(2,-q),G=Math.floor(M.image.width*X),ge=Math.floor(M.image.height*X),we=k!==null?k.x:0,_e=k!==null?k.y:0;O.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,we,_e,G,ge),be.unbindTexture()};const qd=L.createFramebuffer(),$d=L.createFramebuffer();this.copyTextureToTexture=function(M,k,q=null,X=null,G=0,ge=null){ge===null&&(G!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=G,G=0):ge=0);let we,_e,Ce,Ue,Ge,Be,et,mt,At;const Rt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(q!==null)we=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Ge=q.min.y,Be=q.isBox3?q.min.z:0;else{const fn=Math.pow(2,-G);we=Math.floor(Rt.width*fn),_e=Math.floor(Rt.height*fn),M.isDataArrayTexture?Ce=Rt.depth:M.isData3DTexture?Ce=Math.floor(Rt.depth*fn):Ce=1,Ue=0,Ge=0,Be=0}X!==null?(et=X.x,mt=X.y,At=X.z):(et=0,mt=0,At=0);const gt=ce.convert(k.format),ke=ce.convert(k.type);let ut;k.isData3DTexture?(O.setTexture3D(k,0),ut=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(O.setTexture2DArray(k,0),ut=L.TEXTURE_2D_ARRAY):(O.setTexture2D(k,0),ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),an=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hi=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),Is=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const vt=M.isDataArrayTexture||M.isData3DTexture,Qt=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const fn=v.get(M),qt=v.get(k),en=v.get(fn.__renderTarget),ko=v.get(qt.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let Si=0;Si<Ce;Si++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(M).__webglTexture,G,Be+Si),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(k).__webglTexture,ge,At+Si)),L.blitFramebuffer(Ue,Ge,we,_e,et,mt,we,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||v.has(M)){const fn=v.get(M),qt=v.get(k);be.bindFramebuffer(L.READ_FRAMEBUFFER,qd),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,$d);for(let en=0;en<Ce;en++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fn.__webglTexture,G,Be+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fn.__webglTexture,G),Qt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,ge,At+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,ge),G!==0?L.blitFramebuffer(Ue,Ge,we,_e,et,mt,we,_e,L.COLOR_BUFFER_BIT,L.NEAREST):Qt?L.copyTexSubImage3D(ut,ge,et,mt,At+en,Ue,Ge,we,_e):L.copyTexSubImage2D(ut,ge,et,mt,Ue,Ge,we,_e);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(ut,ge,et,mt,At,we,_e,Ce,gt,ke,Rt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(ut,ge,et,mt,At,we,_e,Ce,gt,Rt.data):L.texSubImage3D(ut,ge,et,mt,At,we,_e,Ce,gt,ke,Rt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,et,mt,we,_e,gt,ke,Rt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,et,mt,Rt.width,Rt.height,gt,Rt.data):L.texSubImage2D(L.TEXTURE_2D,ge,et,mt,we,_e,gt,ke,Rt);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,an),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hi),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Is),ge===0&&k.generateMipmaps&&L.generateMipmap(ut),be.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&O.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?O.setTextureCube(M,0):M.isData3DTexture?O.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?O.setTexture2DArray(M,0):O.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){D=0,W=0,H=null,be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Ys=(s,e="/dontmove/")=>e+s.replace(/^\//,"");function au(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Bt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=lu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const m=lu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function lu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Ht(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function cu(s,e){if(e===Ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sl||e===Uu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Sl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class kv extends ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qs.extractUrlBase(e);o=Qs.resolveURL(c,this.path)}else o=Qs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ad(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gd){try{o[tt.KHR_BINARY_GLTF]=new ry(e)}catch(u){i&&i(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _y(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new Gv;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new oy(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new ay;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new ly;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Vv{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pm(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hd(h),c.distance=u;break;case"spot":c=new cd(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Gv{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class Hv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Wv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Yv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class qv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Kv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Jt),Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class Jv{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Qv{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ey{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ty{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class ny{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class iy{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class sy{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const x=new $e,g=new N,p=new oi,b=new N(1,1,1),_=new oc(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,x.compose(g,p,b));for(const S in l)if(S==="_COLOR_0"){const w=l[S];_.instanceColor=new El(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);Mt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const gd="glTF",Vs=12,hu={JSON:1313821514,BIN:5130562};class ry{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,r=new DataView(e,Vs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hu.JSON){const c=new Uint8Array(e,Vs+o,a);this.content=n.decode(c)}else if(l===hu.BIN){const c=Vs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Il[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Il[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=hs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},a,c,Jt,d)})})}}class ay{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ly{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class xd extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,b=1-g,_=p-d+u;for(let S=0;S!==a;S++){const w=o[x+S+a],R=o[x+S+l]*h,I=o[m+S+a],C=o[m+S]*h;r[S]=b*w+_*R+g*I+p*C}return r}}const cy=new oi;class hy extends xd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return cy.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uu={9728:Dt,9729:Nt,9984:Ru,9985:no,9986:Hs,9987:jn},du={33071:Pn,33648:co,10497:Bi},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),s.DefaultMaterial}function Ci(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function py(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wa(t.attributes):e=s.indices+":"+wa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wa(s.targets[n]);return e}function wa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ll(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xy=new $e;class _y{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ld(this.options.manager):this.textureLoader=new Im(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ad(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ci(r,a,i),Rn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Qs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ea[i.type],a=hs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ea[i.type],c=hs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(b);_||(x=new c(a,p*f,i.count*f/h),_=new Sp(x,f/h),t.cache.add(b,_)),g=new ic(_,l,d%f/h,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),g=new Ht(x,l,m);if(i.sparse!==void 0){const p=Ea.SCALAR,b=hs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,w=new b(o[1],_,i.sparse.count*p),R=new c(o[2],S,i.sparse.count*l);a!==null&&(g=new Ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,C=w.length;I<C;I++){const y=w[I];if(g.setX(y,R[I*l]),l>=2&&g.setY(y,R[I*l+1]),l>=3&&g.setZ(y,R[I*l+2]),l>=4&&g.setW(y,R[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=uu[d.magFilter]||Nt,h.minFilter=uu[d.minFilter]||jn,h.wrapS=du[d.wrapS]||Bi,h.wrapT=du[d.wrapT]||Bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Ut(x);g.needsUpdate=!0,d(g)}),t.load(Qs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Rn(u,o),u.userData.mimeType=o.mimeType||gy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hc,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lc,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);const h=r.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ta.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){const u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&o!==Gt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Rn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ci(i,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=my(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fu(new Bt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?dy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=o[f];let p;const b=c[f];if(g.mode===mn.TRIANGLES||g.mode===mn.TRIANGLE_STRIP||g.mode===mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ep(x,b):new st(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===mn.TRIANGLE_STRIP?p.geometry=cu(p.geometry,Uu):g.mode===mn.TRIANGLE_FAN&&(p.geometry=cu(p.geometry,Sl));else if(g.mode===mn.LINES)p=new qu(x,b);else if(g.mode===mn.LINE_STRIP)p=new cc(x,b);else if(g.mode===mn.LINE_LOOP)p=new Pp(x,b);else if(g.mode===mn.POINTS)p=new $u(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&py(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Rn(p,r),g.extensions&&Ci(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ci(i,u[0],r),u[0];const d=new Lt;r.extensions&&Ci(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new $e;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new rc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let _=0,S=d.length;_<S;_++){const w=d[_],R=f[_],I=m[_],C=x[_],y=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const E=n._createAnimationTracks(w,R,I,C,y);if(E)for(let D=0;D<E.length;D++)p.push(E[D])}const b=new vm(r,void 0,p);return Rn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Yu:c.length>1?h=new Lt:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Rn(h,r),r.extensions&&Ci(n,h,r),r.matrix!==void 0){const u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Lt;n.name&&(r.name=i.createUniqueName(n.name)),Rn(r,n),n.extensions&&Ci(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Nn||d instanceof Ut)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];pi[r.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(pi[r.path]){case pi.weights:c=vs;break;case pi.rotation:c=ys;break;case pi.translation:case pi.scale:c=Ms;break;default:n.itemSize===1?c=vs:c=Ms;break}const h=i.interpolation!==void 0?uy[i.interpolation]:sr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+pi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ll(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ys?hy:xd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vy(s,e,t){const n=e.attributes,i=new ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=Ll(hs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=Ll(hs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Bn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function fu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Il[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return rt.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Rn(s,e),vy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fy(s,e.targets,t):s})}const yy=["room-tone","tv-static","warning","scare","power-off","click","pickup","switch"];class My{constructor(){this.buffers=new Map,this.loops=new Map,this.voices=new Set,this.previousThreat=null,this.volume=0}async unlock(){if(!this.ctx){this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=0;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=5,e.attack.value=.008,e.release.value=.2,this.master.connect(e).connect(this.ctx.destination),this.ambience=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.ambience.connect(this.master),this.sfx.connect(this.master),this.loading=Promise.allSettled(yy.map(async t=>{try{const n=await fetch(Ys(`/assets/audio/${t}.ogg`));if(!n.ok)throw new Error(n.status);this.buffers.set(t,await this.ctx.decodeAudioData(await n.arrayBuffer()))}catch(n){console.warn(`Audio unavailable: ${t}`,n.message)}}))}this.ctx.state==="suspended"&&await this.ctx.resume()}play(e,t=.3){if(!this.ctx||!this.volume||!this.buffers.has(e))return!1;if(this.voices.size>=6){const r=this.voices.values().next().value;this.voices.delete(r),r.stop()}const n=this.ctx.createBufferSource(),i=this.ctx.createGain();return n.buffer=this.buffers.get(e),i.gain.value=t*({warning:4.7,scare:7.5,"power-off":9.5}[e]??1),n.connect(i).connect(this.sfx),this.voices.add(n),n.onended=()=>{this.voices.delete(n),n.disconnect(),i.disconnect()},n.start(),!0}loop(e,t,n=0,i=1){let r=this.loops.get(e);if(!r&&t>0&&this.buffers.has(e)){const o=this.ctx.createBufferSource(),a=this.ctx.createGain(),l=this.ctx.createStereoPanner();o.buffer=this.buffers.get(e),o.loop=!0,a.gain.value=0,o.connect(a).connect(l).connect(this.ambience),o.start(),r={source:o,gain:a,panner:l},this.loops.set(e,r)}r&&(r.gain.gain.setTargetAtTime(t,this.ctx.currentTime,.18),r.panner.pan.setTargetAtTime(n,this.ctx.currentTime,.15),r.source.playbackRate.setTargetAtTime(i,this.ctx.currentTime,.2))}update(e,t,n,i,r=!1,o=1){if(!this.ctx)return;const a=!r&&(t==="playing"||t==="scare");this.volume=a?n:0,this.master.gain.setTargetAtTime(this.volume/100*.7*o,this.ctx.currentTime,.04);const l=e.threat;l!==this.previousThreat&&(l&&t==="playing"&&!e.debugCalm&&this.play("warning",.2),this.previousThreat=l),this.loop("room-tone",t==="playing"&&!e.debugCalm&&!r?e.state.blackout?.06:.12:0);const c=t==="playing"&&l?.kind==="liang"&&!e.debugCalm&&!r,h=c?l.x-e.player.x:0,u=c?l.z-e.player.z:0,d=Math.hypot(h,u),f=d?(Math.cos(i)*h-Math.sin(i)*u)/d:0;this.loop("tv-static",c?(.1+l.pressure*.17)/(1+d/5)*(e.line(e.player,l)?1:.3):0,f,c?.85+l.pressure*.3:1)}stop(){this.master&&this.master.gain.setValueAtTime(0,this.ctx.currentTime),this.volume=0;for(const e of this.loops.values())e.source.stop(),e.source.disconnect(),e.gain.disconnect(),e.panner.disconnect();this.loops.clear();for(const e of[...this.voices])e.stop();this.voices.clear()}}const xo={开灯:"Turn lights on",关灯:"Turn lights off","开关已复位。供电恢复。":"Switch reset. Power restored.","巡楼结束了。按一个灯开关，恢复本层照明。":"The warden has gone. Reset one light switch to restore this floor’s lights.","防火门 · 滚木锁":"FIRE DOOR · LOG LOCK","防火门已锁 · 需要滚木":"Fire door locked · Wooden log required",使用滚木开锁:"Unlock with wooden log","防火门锁住了。先躲过巡楼，再到南侧第二走廊驱散棍母，取得滚木。":"The fire door is locked. Survive the warden, then dispel Gunmu in the second, south corridor to obtain a wooden log.","滚木嵌进锁槽，防火门打开了。":"The wooden log fits the lock. The fire door opens.","棍母终究还是不存在的。获得滚木，前往尽头防火门按 E 开锁。":"Gunmu never existed after all. Wooden log obtained. Take it to the final fire door and press E to unlock it.","已获得滚木。跟随旧照片到尽头防火门，按 E 开锁。":"Wooden log acquired. Follow the old photos to the final fire door. Press E to unlock it.","前往南侧第二走廊。准备强光，驱散棍母可获得滚木。":"Head to the second corridor on the south side. Ready your flashlight: dispel Gunmu to obtain a wooden log.","先躲过巡楼。红灯亮起时，藏进画像标记的门内或柜内。":"Survive the warden first. When the lights turn red, hide behind a portrait-marked door or in a marked wardrobe.",通行提示:"FINDING YOUR WAY","跟随地上散落的旧照片，找到楼梯，继续下楼。":"Follow the old photos scattered on the floor. They lead to the stairs. Keep going down.","跟随旧照片到外门。按 E 开门，再走到室外。":"Follow the old photos to the outside door. Press E to open it, then step outside.","E 操作 · Shift 快走 · Esc 暂停":"E Interact · Shift Run · Esc Pause","沿地上的旧照片找路，目标是一楼外门。遇到异常时，先看屏幕上方的应对提示。":"Follow the old photos to the ground-floor exit. When something appears, read the instructions at the top of the screen.","出口前还有一次查房。停住脚步，可以转头。":"One last inspection before the exit. Stand still. You may look around.","查房结束。打开外门，走出去。":"The inspection is over. Open the outside door and leave.",躲藏衣柜:"Wardrobe",躲入:"Hide inside",离开衣柜:"Leave wardrobe","躲进衣柜等它走远，或关门绕路。":"Hide in a wardrobe until it leaves, or shut a door and take another route.","它比你跑得快。靠近衣柜按 E 躲藏，等它走远再出来；也可以关门争取撤离时间。":"It is faster than you. Press E at a wardrobe and stay inside until it leaves, or shut doors to buy time to escape.","藏好了。坤坤会在外面搜寻，等它离开；按 E 出来。":"Hidden. Kun will search outside. Wait for it to leave; press E to get out.","柜门外有东西挡着。再等一下。":"Something is blocking the wardrobe door. Wait a little longer.","离开衣柜。继续往出口走。":"Out of the wardrobe. Keep heading for the exit.","它正在走远。继续待在柜内。":"It is moving away. Stay inside a little longer.","藏好 · 它还在柜外搜寻":"STAY HIDDEN · It is searching outside.","它正在走远 · 继续等候":"It is moving away · Keep waiting.","找到两个遥控器，再回到电视按 E 关闭。":"Find both remotes, then return to the TV and press E to switch it off.","电视里的良子膨胀到了极限。跟随透视标记拿齐两个遥控器，再及时回到电视按 E 关闭。":"Liang outgrew the screen. Follow the visible markers, collect BOTH remotes, then return to the TV and press E before time runs out.","遥控器已集齐。回到电视按 E 关闭！":"Both remotes found. Return to the TV and press E to shut it off!","拿到一个遥控器。还有一个，跟着标记走。":"One remote found. Follow the marker to the other one.","先拿齐两个遥控器。标记会一直显示。":"Find both remotes first. Their markers stay visible through walls.","画面快撑破了。拿齐遥控器，立即关电视！":"The screen is about to burst. Get both remotes and switch it off!",遥控器:"Remote",拾取:"Pick up","回到电视 · E 关闭":"RETURN TO TV · E TO SWITCH OFF","回到电视按 E 关闭":"Return to the TV and press E",复位:"Reset",已复位:"Already reset",已发现:"Discovered","七秒内进入避险房间，关好所有门。":"Enter a refuge room within seven seconds. Close every door.","巡楼者到来时，你不在密闭房间里。红灯亮起后有七秒：进入值班室、储物间或东侧双门房，关好全部房门。":"You were outside a sealed room when the warden arrived. Red lights give you seven seconds: enter the duty room, storage room or east double-door room and shut every door.","走廊灯变红了。七秒内进入避险房间，关好所有门。":"Red lights. Seven seconds to get into a refuge room and shut every door.","灯灭了。留在关好所有门的房间里。":"Lights out. Stay inside with every door shut.","巡查尚未结束。等它离开后再恢复供电。":"The inspection is still underway. Wait until it leaves before restoring power.","这个开关已经复位。去找另一个位置的开关。":"This switch is already reset. Find a different switch.","两处开关已复位。供电恢复。":"Both switches reset. Power restored.","已复位一处开关。还需要另一个位置的开关。":"One switch reset. Find another switch in a different location.","巡楼结束了。找到两处不同的开关，恢复本层照明。":"The warden has gone. Reset two different switches to restore this floor’s lights.",值班室:"DUTY ROOM",储物间:"STORAGE ROOM",关门避险:"CLOSE ALL DOORS TO SHELTER",北侧配电开关:"North power switch",南侧配电开关:"South power switch","房间已密闭 · 等待巡查结束":"ROOM SEALED · Wait for the inspection to end.","房间未密闭 · 危险":"ROOM NOT SEALED · DANGER",避险房间:"REFUGE ROOM",复位开关:"POWER RESET","东北雨姐 · 来访者":"YUJIE · THE VISITOR","别看她。低头或转身，把她完全移出视野。":"Do not look at her. Look down or turn away until she is out of view.","理智耗尽，她来拜访你了。雨姐不会移动；看到她会掉理智，低头或转开视线才能停止。":"Your sanity ran out. She came to visit. Yujie stays still; seeing her drains sanity. Look down or turn away to stop it.","灯光发冷。有人要来拜访了。低头，别看她。":"The lights turn cold. Someone is coming to visit. Look down. Do not look at her.","来访者消失了。可以抬头了。":"The visitor is gone. You can look up now.","别再看了。低头！":"Stop looking. Look down!","来访将至 · 低头或转开视线":"A visitor is coming. Look down or turn away.","她正在消失 · 继续避开视线":"She is fading. Keep looking away.","正在失去理智 · 低头或转身":"SANITY DRAINING · Look down or turn away.","视线已避开 · 可以低头继续走":"Eyes averted. You can keep moving while looking down.","你暴露在巡楼者的视线中太久。走廊灯变红时寻找实体遮挡，等巡查结束再出来。":"You stayed in the warden’s sight too long. When the hallway lights turn red, get behind solid cover and wait for the sweep to end.","走廊灯变红了。巡楼者要来了，找实体遮挡。":"The hallway lights have turned red. The warden is coming. Find solid cover.","汪精卫 · 巡楼者":"WANG · THE NIGHT WARDEN","离开通道，躲到侧室或实体隔断后。玻璃挡不住视线。":"Leave the corridor. Hide in a side room or behind a solid partition. Glass will not hide you.","巡楼者看见你了。立刻退到实体遮挡后！":"The warden sees you. Get behind solid cover now!","巡楼结束了。现在可以离开遮挡，继续找出口。":"The sweep is over. Leave cover and keep looking for the exit.","巡楼者正在退去 · 再等一下":"The warden is leaving. Wait a moment.","正在暴露 · 立刻退到墙后":"EXPOSED · Get behind a wall now.","保持实体遮挡 · 等巡楼结束":"Stay behind solid cover until the sweep ends.",请勿:"DO NOT",搬动:"MOVE","。":".","请勿搬动 · The Extra Floor":"DO NOT MOVE · The Extra Floor",第一人称三维公寓场景:"First-person apartment scene",暂停游戏:"Pause game",出口在楼下:"THE EXIT IS DOWNSTAIRS",开门:"Open door","不明物业 / 夜间通行须知":"BUILDING MANAGEMENT / AFTER HOURS","你记得这栋楼只有四层。":"You remember four floors.","现在，你在第五层。":"You are on the fifth.","正在检查楼道…":"Checking the halls…",准备场景与角色:"Preparing the building",移动:"Move",鼠标:"Mouse",观察:"Look",交互:"Interact",快走:"Move faster","唯一的目标：找到一楼出口。":"One objective: reach the ground-floor exit.",画面与声音:"Settings",画面质量:"Graphics","标准 · 推荐":"Standard",流畅:"Low",清晰:"High",环境声音:"Ambient sound",鼠标灵敏度:"Mouse sensitivity",镜头起伏:"Head bob",减少闪烁:"Reduce flicker","静音也能游玩，危险都有视觉预兆。":"Sound is optional. Every threat has a visual warning.","包含突发近景；减少闪烁会将灯闪改为缓慢变暗。":"Contains jumpscares. Reduce flicker replaces flashes with slow dimming.","先别走。":"Stay a moment.","游戏已暂停，楼道不会继续变化。":"Paused. Nothing in the hallway will move.",继续下楼:"Keep going",返回入口:"Main menu","Esc 暂停 · M 开关声音 · 鼠标拖动也可观察":"Esc: pause · M: sound · Drag the mouse to look",再走一次:"Walk again",重新开始一整局:"Start a new run","无法启动 WebGL。请在 Chrome 或 Edge 中开启硬件加速。":"WebGL could not start. Enable hardware acceleration in Chrome or Edge.",重新加载:"Reload","按住鼠标拖动观察 · 方向键也可转头":"Drag the mouse to look · Arrow keys also turn","到一楼出去。跟着地上的旧照片找到每层出口。E 操作。":"Reach the ground-floor exit. Follow the discarded photos. E to interact.","第五层。地上的旧照片留下了一条通往出口的痕迹。":"Fifth floor. Discarded photographs trace a way toward the exit.","你出来了。":"You made it out.","它还在这一层。":"It is still here.",查看封闭梯段:"Inspect blocked stairs",木门已损坏:"Broken wooden door",门扇受阻:"Door obstructed",关闭:"Close",打开:"Open",近看:"Inspect",木门:"Wooden door",它正在注意你:"It has noticed you","第一次通过。它还没有走。":"First check passed. It has not left.","两次检查通过，等它退去。":"Both checks passed. Wait for it to leave.","保持背对与静止 · 信号正在消退":"Keep your back turned. Stay still. The signal is fading.","背对电视并停下 · 别低头躲画面":"Face away from the TV and stop. Looking down will not help.","木门正在变形 · 从另一边离开":"The wooden door is bending. Take the other exit.","门挡住了它 · 继续绕过实体墙":"The door is holding it. Keep moving behind solid walls.","它停住了 · 后退，别靠近":"It stopped. Back away. Do not touch it.","它仍在寻找你 · 绕过实体墙，拉开距离":"It is searching. Get behind solid walls and gain distance.","尚未脱险 · 检查点待生效":"STILL TRACKED · CHECKPOINT PENDING",环境声音已开启:"Ambient sound on",环境声音已关闭:"Ambient sound off",进入楼道:"Enter the building","建议电脑游玩 · 静音也能判断全部危险":"Best on desktop · All threats have visual cues","场景加载失败，请重新加载。":"The scene could not load. Please reload.",公共通道:"COMMON HALL",楼梯间连廊:"STAIR ACCESS",室外门厅:"EXIT VESTIBULE",楼道通行:"KEEP PASSAGE CLEAR","室外 / EXIT":"OUTSIDE / EXIT",门厅外廊:"EXIT PORCH","木门 · 不能久留":"WOOD · KEEP MOVING",走到室外:"STEP OUTSIDE",闭门后离开门口:"CLOSE, THEN MOVE AWAY",今晚不安排活动:"NO ACTIVITIES TONIGHT",查房者:"THE INSPECTOR","停住脚步。可以转头。":"Stop moving. You may look around.","它看见你动了。两次检查期间都要停住，转头不会惊动它。":"It saw you move. Stay still during both checks. Looking around is safe.",偷步者:"THE CREEPER","看着它后退，别碰到它；再绕过实体墙。":"Watch it as you back away. Do not touch it. Break sight behind a solid wall.","它碰到了你。凝视只能阻止它移动，不能保护贴得太近的你。看着它退到拐角，再拉开距离。":"It touched you. Watching only stops it moving. Back toward a corner while watching, then gain distance.",借路者:"THE PURSUER","关门争取时间，再从另一边离开。":"Close a door to buy time. Leave through another way.","它比你跑得快。木门只能拖延，防火门能挡住冲撞。":"It runs faster than you. Wooden doors buy time; fire doors withstand a charge.","良子 · 播报者":"LIANG · THE BROADCASTER","背对电视，停下脚步，等信号消失。":"Turn your back to the TV. Stand still until the signal fades.","播报记住了你的动作。背对电视并停下约四秒；低头或边跑边转身都不能解除信号。":"The broadcast recorded your movement. Face away and stand still for about four seconds. Looking down or turning while running will not clear the signal.","检修围挡封住了梯段。沿另一侧下楼。":"Maintenance has blocked these stairs. Use the other stairwell.","木门已经被撞坏。继续离开。":"The wooden door is broken. Keep moving.","门正在打开。":"The door is opening.","门正在合拢。留开门扇的位置。":"The door is closing. Stay clear of its swing.","开关失灵。背对屏幕，停住脚步。":"The switch is dead. Face away from the screen and stop.","观察中 · 转头查看，E 或移动退出":"Looking through · Look around; E or move to leave",离开观察孔:"Stepped away from the peephole","这一组灯熄灭了。":"This group of lights is off.","灯亮了。故障的灯管仍不稳定。":"Lights on. Faulty tubes are still unstable.","屏幕亮了。画面里的人没有眨眼。":"The screen lights up. The person never blinks.","屏幕暗了。":"The screen goes dark.","照片下没有名字。玻璃上却留着指印。":"No name below the photo. Fingerprints on the glass.","画框恢复了原样。":"The frame is back as it was.","内筒是空的。":"The drum is empty.","洗衣机门合上了。":"The washer door is closed.","遮帘拉开了。":"The curtain is open.","柜门打开。里面只有旧生活的痕迹。":"The cabinet opens. Only traces of an old life remain.","遮帘落下了。":"The curtain falls.","柜门合上了。":"The cabinet is closed.","尚未脱险 · 检查点暂未生效":"Still tracked. Checkpoint pending.","已脱险 · 下次从这一层继续":"Safe for now. You will restart on this floor.","回到检查点。同一次异常，仍会在前面等你。":"Back at the checkpoint. The same encounters are waiting ahead.","信号消失了。现在可以继续走。":"The signal is gone. You can move now.","它暂时离开了。继续下楼。":"It has left for now. Keep going down.","门扇被挡住了。侧退一步，它会继续转动；E 可反向开关。":"The door is obstructed. Step aside to let it move. E reverses it.","外门开了。走出去。":"The exit is open. Step outside.","门已打开。":"Door open.","防火门合上了。继续离开门口。":"Fire door closed. Move away from the doorway.","门已合上。":"Door closed.","画面正在靠近。背过去，别再走！":"The image is getting closer. Turn away. Stop moving!","它看见你动了。现在停住！":"It saw you move. Stop now!","木门开始变形。离开门口，从另一边撤离！":"The wooden door is bending. Move away and use the other exit!","门外的影子停住了。继续拉开距离。":"The shadow outside stopped. Keep gaining distance.","门外停了下来。撤离通路被关上了。":"It stopped outside. Your other escape route is closed.","门被撞开了。继续走！":"The door gave way. Keep moving!",检修封闭:"CLOSED FOR REPAIRS","防火门 · A 梯":"FIRE DOOR · STAIR A","防火门 · B 梯":"FIRE DOOR · STAIR B","防火门 · 门厅":"FIRE DOOR · LOBBY",公共区:"COMMON ROOM",内侧门:"REAR DOOR","防火门 · 缓闭":"FIRE DOOR · SLOW CLOSE",通向室外:"EXIT TO STREET",汪精卫画像:"Wang Jingwei portrait",防火门:"Fire door",外门:"Exit door",门厅灯:"Lobby lights",出口观察窗:"Exit observation window",出口:"Exit",停用的顶层住区:"Disused Top Floor",残留生活:"TRACES OF LIFE",旧客厅:"OLD LIVING ROOM","封闭住户 / 杂物":"SEALED FLATS / STORAGE",天井东廊:"EAST COURTYARD HALL",南侧住区:"SOUTH RESIDENCES",客厅开关:"Living room switch","502 观察孔":"Flat 502 peephole",南窗窗帘:"South window curtain",旧电视:"Old television",信箱:"Mailboxes",公共生活区:"Shared Living Quarters",不完整的人影:"INCOMPLETE FIGURES",公共厨房:"SHARED KITCHEN",洗衣房:"LAUNDRY",晾晒间:"DRYING ROOM",盥洗与储物:"WASHROOM / STORAGE",厨房开关:"Kitchen switch",洗衣机门:"Washer door",晾晒隔断:"Drying room partition",湿窗窗帘:"Damp window curtain",盥洗灯:"Washroom lights",储物柜:"Storage cabinet",旧活动与资料区:"Recreation & Records",失去对应:"OUT OF PLACE",阅览室:"READING ROOM",旧活动室:"OLD ACTIVITY ROOM",画像回廊:"PORTRAIT GALLERY",物业资料间:"BUILDING RECORDS",阅览灯:"Reading lights",新查房者画像:"Inspector portrait",蒋介石画像:"Chiang Kai-shek portrait",资料柜:"Records cabinet",老大画像:"Laoda portrait",过亮的活动大厅:"Overlit Assembly Hall",用途错位:"WRONG PURPOSE",主活动厅:"MAIN HALL",关闭的儿童角:"CHILDREN’S CORNER · CLOSED",侧面服务通道:"SERVICE PASSAGE",低顶集会区:"ASSEMBLY ROOM",北组照明:"North lights",电视:"Television",儿童角卷帘:"Children’s corner shutter",服务照明:"Service lights",南组照明:"South lights",空旷门厅:"Empty Lobby",出口可见:"EXIT IN SIGHT",信箱与门卫:"MAIL / SECURITY",接待值班区:"RECEPTION",门厅东侧:"EAST LOBBY",出口前厅:"EXIT VESTIBULE",门卫观察窗:"Security observation window",接待电视:"Reception television"};Object.assign(xo,{"已经被盯上。再次移动会被抓，可以转头。":"It is watching you. Move again and it catches you. You may look around.","画像在柜门上。巡楼者找不到这里，按 E 离开。":"The portrait is on the door. The Warden cannot find you here. E to leave.","这个柜子没有画像，挡不住巡楼者。按 E 离开。":"No portrait on this wardrobe. It will NOT protect you from the Warden. E to leave.","找蒋介石画像：躲进标记衣柜，或进入标记房间关好门。":"Find a Chiang Kai-shek portrait. Hide in its wardrobe or close every door of its room.","没有画像的门和衣柜挡不住巡楼者。红灯亮起后七秒内，藏进带蒋介石画像的衣柜，或进入画像标记的房间并关好全部门。":"Unmarked doors and wardrobes cannot stop the Warden. Within seven seconds of the red lights, enter a wardrobe bearing a Chiang Kai-shek portrait, or its marked room and close all doors.","走廊变红了。七秒内躲到蒋介石画像标记的门内或柜内，关好门。":"Red lights. Seven seconds: find a Chiang Kai-shek portrait on a door or wardrobe and hide inside. Close all room doors.","灯灭了。留在蒋介石画像标记的门内或衣柜里。":"Lights out. Stay inside the portrait-marked room or wardrobe.",画像保护中:"PORTRAIT PROTECTION",没有画像保护:"NO PORTRAIT PROTECTION","它看见你动了。半秒内停住！":"It saw you move. Stop within HALF A SECOND!",强光手电筒:"HIGH-POWER FLASHLIGHT","先到大厅东侧带画像的双门避险房拿强光手电筒。靠近按 E。":"First, enter the portrait-marked double-door shelter on the east side of the lobby. Approach the flashlight and press E.","强光手电已拾取。对准黑影累计照射五秒，边退边照。":"Flashlight ready. Keep its beam on the shadow for five seconds in total. Back away while aiming.",棍母:"GUNMU","用强光对准它，累计照射五秒。边退边照。":"Aim the strong beam at it for five seconds in total. Keep backing away.","棍母追上了你。拿起一楼强光手电筒，对准它累计照射五秒；隔墙、关门或躲柜时照射无效。":"Gunmu caught you. Take the ground-floor flashlight and aim at it for five seconds in total. Walls, closed doors and hiding block the beam.","灯闪了。棍母来了，举起强光对准它！":"The lights flickered. Gunmu is coming. Aim your flashlight at it!","灯闪了 · 强光对准即将出现的黑影":"LIGHTS FLICKERING · Prepare to shine at the shadow",黑影正在消散:"The shadow is dissolving.","棍母终究还是不存在的。":"Gunmu never existed after all.","门把手动了。准备好强光。":"The handle is moving. Get your beam ready.",留在里面:"STAY INSIDE"});let ur="en";const _d=()=>ur;function _c(s){return ur=s==="zh"?"zh":"en",ur}function Ye(s){if(ur==="zh"||typeof s!="string")return s;if(xo[s]!==void 0)return xo[s];const e=[[/^巡楼将至 · (\d+) 秒 · 画像保护中$/,(t,n)=>`WARDEN IN ${n}s · PORTRAIT PROTECTION`],[/^巡楼将至 · (\d+) 秒 · 找蒋介石画像的门或柜$/,(t,n)=>`WARDEN IN ${n}s · Find a portrait-marked door or wardrobe`],[/^(强光命中|对准黑影) · 照射 ([\d.]+) \/ 5 秒$/,(t,n,i)=>`${n==="强光命中"?"BEAM ON TARGET":"AIM AT THE SHADOW"} · ${i} / 5 seconds`],[/^遥控器 (\d)$/,(t,n)=>`REMOTE ${n}`],[/^遥控器 (\d) \/ 2 · 剩余 (\d+) 秒(.*)$/,(t,n,i,r)=>`REMOTES ${n} / 2 · ${i}s REMAINING${r?" · RETURN TO THE TV, PRESS E":""}`],[/^巡楼将至 · (\d+) 秒 · 房间已密闭$/,(t,n)=>`WARDEN IN ${n}s · ROOM SEALED. Stay inside.`],[/^巡楼将至 · (\d+) 秒 · 进入房间并关好所有门$/,(t,n)=>`WARDEN IN ${n}s · Enter a room and close ALL doors.`],[/^本层断电 · 复位开关 (\d+) \/ (\d+)$/,(t,n,i)=>`POWER OUT · Reset switches ${n} / ${i}`],[/^发现画像 (\d+) \/ (\d+) · \+100 分$/,(t,n,i)=>`PORTRAIT FOUND ${n} / ${i} · +100 points`],[/^发现画像 (\d+) \/ (\d+) · 得分 (\d+)$/,(t,n,i,r)=>`PORTRAITS FOUND ${n} / ${i} · SCORE ${r}`],[/^理智 (\d+) \/ 100$/,(t,n)=>`SANITY ${n} / 100`],[/^巡楼将至 · (\d+) 秒 · 躲到实体遮挡后$/,(t,n)=>`WARDEN IN ${n}s · Get behind solid cover.`],[/^0(\d) \/ (.+)$/,(t,n,i)=>`0${n} / ${Ye(i)}`],[/^继续点 · (\d) 楼$/,(t,n)=>`CHECKPOINT · FLOOR ${n}`],[/^准备照片与装置 (\d+) \/ (\d+)$/,(t,n,i)=>`Preparing photos and objects ${n} / ${i}`],[/^静止检查 (\d) \/ 2 · 可以转头$/,(t,n)=>`Stand still: check ${n} / 2. You may look around.`],[/^([AB]) 梯 · 下层通行$/,(t,n)=>`STAIR ${n} · DOWNSTAIRS`],[/^用时 (\d+) 分 (\d+) 秒，摆脱 (\d+) 次异常。身后，第五层的灯又亮了。$/,(t,n,i,r)=>`${n}m ${i}s. ${r} encounters survived. Behind you, the fifth-floor light comes on again.`],[/^(.+) 从 (\d) 楼继续，异常次序保持不变。$/,(t,n,i)=>`${Ye(n)} Resume on floor ${i}; the encounter order stays the same.`],[/^从 (\d) 楼继续$/,(t,n)=>`Resume on floor ${n}`]];for(const[t,n]of e)if(t.test(s))return s.replace(t,n);return s.includes(" · ")?s.split(" · ").map(Ye).join(" · "):s}function Sy(s){const e=[],t=s.ownerDocument.createTreeWalker(s,4);let n;for(;n=t.nextNode();){const r=n.textContent.trim();(xo[r]!==void 0||/[\u3400-\u9fff]/.test(r))&&e.push({node:n,source:r})}const i=[...s.querySelectorAll("[aria-label]")].map(r=>({node:r,source:r.getAttribute("aria-label")}));return()=>{for(const{node:r,source:o}of e)r.isConnected&&(r.textContent=Ye(o));for(const{node:r,source:o}of i)r.setAttribute("aria-label",Ye(o));s.ownerDocument.documentElement.lang=ur==="en"?"en":"zh-CN",s.ownerDocument.title=Ye("请勿搬动 · The Extra Floor")}}function by(s,e){const t=new Lt;s.add(t);const n=new Yt({color:2698794,roughness:.8}),i=new Yt({color:11709580}),r=new Yt({color:8863019}),o=new lc({color:15981733,depthTest:!1,transparent:!0,opacity:.85}),a=Array.from({length:2},()=>{const m=new Lt;t.add(m);const x=(p,b,_,S,w=0,R=0,I=0)=>{const C=new st(new ct(p,b,_),S);C.position.set(w,R,I),m.add(C)};x(.16,.045,.34,n),x(.045,.015,.045,r,0,.027,-.1);for(const p of[-.04,.04])for(const b of[-.02,.045,.11])x(.032,.012,.035,i,p,.027,b);const g=new qu(new Lp(new ct(.21,.07,.39)),o);return g.renderOrder=15,m.add(g),m}),l=new oc(new It(1,1),new Gt({map:e,transparent:!0,opacity:.5,depthWrite:!1,side:sn,color:13158589}),12);l.frustumCulled=!1,t.add(l);const c=Array.from({length:3},()=>{const m=document.createElement("div");return m.className="remote-marker",m.hidden=!0,document.body.append(m),m}),h=new N,u=new Mt;function d(m,x,g,p){h.set(x.x,(x.floor-1)*3.24+(x.y??.55),x.z).project(p);const b=h.z>1;b&&(h.x=-Math.sign(h.x||1)*2,h.y=0),m.style.left=`${Et.clamp((h.x+1)*50,12,88)}%`,m.style.top=`${Et.clamp((1-h.y)*50,19,80)}%`,m.classList.toggle("offscreen",b||Math.abs(h.x)>1||Math.abs(h.y)>1),m.textContent=g,m.hidden=!1}function f(m,x,g,p){c.forEach(R=>R.hidden=!0);const b=m.threat;if(t.visible=b?.kind==="liang"&&p==="playing",!t.visible)return;const _=m.building.byId[b.floor].interactions.find(R=>R.id===b.tvId),S=(b.floor-1)*3.24,w=b.pressure;a.forEach((R,I)=>{const C=b.remotes[I];R.visible=!C.collected,R.position.set(C.x,S+.04,C.z),R.rotation.y=I*.7,C.collected||d(c[I],C,Ye(`遥控器 ${I+1}`)+` · ${Math.round(Math.hypot(C.x-m.player.x,C.z-m.player.z))} m`,x)}),b.remotes.every(R=>R.collected)&&d(c[2],{floor:b.floor,..._.target},Ye("回到电视 · E 关闭"),x),l.visible=b.age>=b.warning,l.material.opacity=.2+w*.25;for(let R=0;R<12;R++){const I=(g*.32+R/12)%1,C=R*2.399,y=Math.sin(C)*I*(1.1+w),E=.3+I*(.9+w*.65),D=Math.sin(I*Math.PI)*(.35+w*.65);u.position.set(b.x+Math.sin(_.yaw)*E+Math.cos(_.yaw)*y,S+1.15+Math.sin(I*Math.PI)*(.5+R%3*.3),b.z+Math.cos(_.yaw)*E-Math.sin(_.yaw)*y);const W=Et.smoothstep(u.position.distanceTo(x.position),.8,1.6);u.quaternion.copy(x.quaternion),u.rotateZ(Math.sin(C+I)*.3),u.scale.set(D*W*e.image.width/e.image.height,D*W,1),u.updateMatrix(),l.setMatrixAt(R,u.matrix)}l.instanceMatrix.needsUpdate=!0}return{root:t,remotes:a,particles:l,labels:c,update:f,dispose(){s.remove(t),c.forEach(m=>m.remove()),t.traverse(m=>m.geometry?.dispose());for(const m of[n,i,r,o,l.material])m.dispose();l.dispose()}}}const Ey=.24,Dl=(s,e)=>e.angle==null?s:{x:(s.x-e.cx)*Math.cos(e.angle)-(s.z-e.cz)*Math.sin(e.angle),z:(s.x-e.cx)*Math.sin(e.angle)+(s.z-e.cz)*Math.cos(e.angle),y:s.y};function ti(s,e,t,n=Ey){return t.some(i=>{if(s<i.minX-n||s>i.maxX+n||e<i.minZ-n||e>i.maxZ+n)return!1;const r=Dl({x:s,z:e},i),o=i.angle!=null,a=r.x-Math.max(o?-.95:i.minX,Math.min(r.x,o?.95:i.maxX)),l=r.z-Math.max(o?-.055:i.minZ,Math.min(r.z,o?.055:i.maxZ));return a*a+l*l<n*n})}function vc(s,e,t){return!t.some(n=>{let i=0,r=1;const o=Dl(s,n),a=Dl(e,n),l=n.angle!=null,c=[[o.x,a.x-o.x,l?-.95:n.minX,l?.95:n.maxX],[o.z,a.z-o.z,l?-.055:n.minZ,l?.055:n.maxZ]];n.minY!=null&&s.y!=null&&e.y!=null&&c.push([s.y,e.y-s.y,n.minY,n.maxY]);for(const[h,u,d,f]of c){if(Math.abs(u)<1e-9){if(h<d||h>f)return!1;continue}const m=(d-h)/u,x=(f-h)/u;if(i=Math.max(i,Math.min(m,x)),r=Math.min(r,Math.max(m,x)),i>r)return!1}return r>.001&&i<.999})}function Ty(s,e,t,n){const i=t+n*Math.PI/2,r=s-Math.cos(t)*.95+Math.cos(i)*.95,o=e+Math.sin(t)*.95-Math.sin(i)*.95,a=Math.abs(Math.cos(i))*.95+Math.abs(Math.sin(i))*.055,l=Math.abs(Math.sin(i))*.95+Math.abs(Math.cos(i))*.055;return{minX:r-a,maxX:r+a,minZ:o-l,maxZ:o+l,cx:r,cz:o,angle:i}}const xt=3.24,vd=.24,$n=s=>({minX:s.x,maxX:s.x+s.w,minZ:s.z,maxZ:s.z+s.d,glass:s.material==="fixed-glass"}),xr=(s,e,t=0)=>s.x>=e.x-t&&s.x<=e.x+e.w+t&&s.z>=e.z-t&&s.z<=e.z+e.d+t;function wy(s){const e=s.floors.map(t=>{const n=structuredClone(t);n.base=(n.id-1)*xt;for(const o of n.walkableRects)o.x<8&&o.z>=11&&o.z+o.d<=21&&(o.w-=8-o.x,o.x=8);if(n.spawn={x:8.8,z:n.arrival==="A"?8:24},n.destination=n.id===1?{x:6.5,z:30.35}:{x:8.8,z:n.departure==="A"?8:24},n.partitions=[...n.walls],n.doorSpecs=[],n.id<=2){if(n.id===1)for(const o of n.partitions)o.w>20&&(o.z===5||o.z===27)&&(o.material="plaster");if(n.id===1){for(const o of n.partitions)if(o.material==="fixed-glass"&&o.x===10&&o.d===8){const a=o.z===5;o.z+=a?.2:.09,o.d-=a?.29:.09}}n.partitions.push({x:28.9,z:12.12,w:.18,d:7.76,material:"plaster"});for(const o of[5,27]){const a=n.partitions.findIndex(c=>c.z===o&&c.w>20);if(a<0)continue;const l=n.partitions.splice(a,1)[0];n.partitions.push({...l,w:16.5},{...l,x:28.3,w:l.x+l.w-28.3})}}n.partitions.push({x:2,z:10.82,w:6.1,d:.18},{x:2,z:21,w:6.1,d:.18,material:n.id===1?"fixed-glass":"plaster"});const i=(o,a,l,c,h,u,d=!0,f=!1)=>n.doorSpecs.push({id:`${n.id}-${o}`,x:a,z:l,axis:c,kind:h,title:u,angle:c==="x"?Math.PI/2:0,swing:h==="exit"?-1:1,open:d,locked:f,width:1.9});i("A",8.2,8,"x","fire",n.id===5?"检修封闭":"防火门 · A 梯",n.id!==5,n.id===5),i("B",8.2,24,"x","fire",n.id===1?"防火门 · 滚木锁":"防火门 · B 梯",n.id!==1,n.id===1),n.id===1&&(n.doorSpecs.at(-1).logLock=!0),n.id>=2&&(i("room",22.1,4,"x","wood","公共区"),i("room-back",22.1,9,"x","wood","内侧门"));for(const o of[12,20])n.partitions.push({x:28.9,z:o-.12,w:2.15,d:.24},{x:32.95,z:o-.12,w:1.05,d:.24}),i(`east-${o}`,32,o,"z","fire","防火门 · 缓闭");if(n.shelters=[],n.id<=2){n.shelters.push({x:29.4,z:12.4,w:4.2,d:7.2,doors:[`${n.id}-east-12`,`${n.id}-east-20`]});for(const o of n.shelters)for(const a of o.doors)n.doorSpecs.find(l=>l.id===a).wardPortrait=!0}n.id===1&&(i("exit",6.5,29.9,"z","exit","通向室外",!1),n.partitions.push({x:2,z:27,w:4.5,d:.18},{x:5.5,z:28.4,w:2.6,d:.18}),n.walkableRects.push({x:5.2,z:29.8,w:2.6,d:1.5})),n.interactions.push({id:"f"+n.id+"-wang-north",label:"汪精卫画像",asset:"wangjingwei",x:14+n.id%3,z:9},{id:"f"+n.id+"-wang-south",label:"汪精卫画像",asset:"wangjingwei",x:17+n.id%2*4,z:23}),n.interactions=n.interactions.map((o,a)=>{const l=/开关|照明|阅览灯|盥洗灯/.test(o.label)?"switch":/观察/.test(o.label)?"peek":/电视/.test(o.label)?"tv":/帘|隔断/.test(o.label)?"curtain":/画像/.test(o.label)?"portrait":/洗衣机/.test(o.label)?"washer":"cabinet";return{...o,type:l,number:a,zone:Math.min(3,a%4),target:{x:o.x,y:l==="switch"?1.45:l==="tv"?1.25:l==="washer"?.58:1.6,z:o.z+.72},name:o.label}}).filter(o=>!["防火门","外门"].includes(o.label)),n.id===1&&n.interactions.push({id:"f1-e6",label:"门厅灯",name:"门厅灯",type:"switch",zone:3,x:17,z:26.4,target:{x:17,y:1.45,z:25.6}},{id:"f1-e7",label:"出口观察窗",name:"出口观察窗",type:"peek",zone:3,x:9,z:26,target:{x:8.4,y:1.65,z:26}});for(const o of n.interactions){const a=o.target;o.type==="washer"&&(a.x=26.47,a.z=7.35,o.x=26.47),o.type==="switch"&&(o.z<12?a.z=5.25:o.z>21?a.z=26.94:a.x=25.14),["portrait","curtain"].includes(o.type)&&(o.z<12?a.z=10.86:o.z>21?a.z=o.type==="portrait"?21.14:26.91:a.x=25.14),o.type==="peek"&&(o.label.includes("出口")?(a.x=8.4,a.z=26):(a.z=5.28,o.z=6.25)),o.yaw=Math.atan2(o.x-a.x,o.z-a.z),o.zone=a.z>21?3:a.x>=25&&a.z>10?2:a.x>22?1:0}for(const[o,a,l,c]of[[0,14,29.86,Math.PI],[1,24,29.86,Math.PI],[2,33.86,16,-Math.PI/2]])n.interactions.push({id:`f${n.id}-portrait-${o}`,type:"portrait",label:["新查房者画像","老大画像","蒋介石画像"][o],asset:["inspectorPortrait","laodaPortrait","chiangkaishekPortrait"][o],x:a,z:l,zone:3,yaw:c,target:{x:a,y:1.65,z:l}});if(n.id===1&&n.interactions.push({id:"f1-flashlight",type:"flashlight",label:"强光手电筒",x:33.15,z:13.8,yaw:-Math.PI/2,zone:2,target:{x:33.15,y:.96,z:13.8}}),n.id<=2)for(const o of[12,20])n.interactions.push({id:`f${n.id}-power-${o}`,type:"switch",label:o===12?"北侧配电开关":"南侧配电开关",x:10.1,z:o,zone:o===12?0:3,yaw:-Math.PI/2,target:{x:9.96,y:1.45,z:o}});for(const o of n.interactions.filter(a=>a.type==="peek")){const a=o.target,l=o.label.includes("出口"),c=n.partitions.findIndex(u=>l?u.x===8.1&&u.z===25.2:u.z===5&&u.w>20);if(c<0)continue;const h=n.partitions.splice(c,1)[0];l?n.partitions.push({...h,d:a.z-.4-h.z},{...h,z:a.z-.4,d:.8,material:"fixed-glass"},{...h,z:a.z+.4,d:h.z+h.d-a.z-.4}):n.partitions.push({...h,w:a.x-.4-h.x},{...h,x:a.x-.4,w:.8,material:"fixed-glass"},{...h,x:a.x+.4,w:h.x+h.w-a.x-.4})}n.obstacles=[...n.partitions.map($n),...n.furniture.map(o=>({...$n(o),height:/书架|资料柜|储物柜|矮柜|设备柜/.test(o.name)?1.9:/晾衣/.test(o.name)?2.8:/信箱/.test(o.name)?2.1:1.3})),...n.props.map((o,a)=>{const l=Math.max(o.footprint.w,o.footprint.d);return{...$n({x:o.x-l/2,z:o.z-l/2,w:l,d:l}),propIndex:a,height:2.2}})];const r=(o,a)=>n.walkableRects.some(l=>xr({x:o,z:a},l));n.boundaries=[];for(let o=2;o<30;o++)for(let a=2;a<34;a++)if(r(a+.5,o+.5)){for(const[l,c]of[[-1,0],[1,0],[0,-1],[0,1]])if(!r(a+.5+l,o+.5+c)&&!(n.id===1&&c===1&&a>=5&&a<8)){const h=n.id===1&&c!==0&&a<11&&[12,19].includes(o);n.boundaries.push({...$n({x:l?a+.5+l*.5-.09:a,z:c?o+.5+c*.5-.09:o,w:l?.18:1,d:c?.18:1}),glass:h})}}for(const o of n.interactions.filter(a=>["tv","cabinet"].includes(a.type))){const a=o.type==="tv"?[1.1,.7]:[.95,.55],l=Math.abs(Math.sin(o.yaw))>.7;n.obstacles.push({...$n({x:o.target.x-a[l?1:0]/2,z:o.target.z-a[l?0:1]/2,w:a[l?1:0],d:a[l?0:1]}),height:o.type==="tv"?1.5:1.25})}if([1,2,4].includes(n.id))for(const[o,a,l,c]of[[0,14,2.5,0],[1,24,2.5,0],[2,33.5,17.8,-Math.PI/2],[3,27,29.5,Math.PI],[4,14,29.5,Math.PI]]){const u=Math.abs(Math.sin(c))>.5,d=u?.6:1.3,f=u?1.3:.6,m={x:a+Math.sin(c)*1.3,z:l+Math.cos(c)*1.3};n.interactions.push({id:`f${n.id}-wardrobe-${o}`,type:"wardrobe",label:"躲藏衣柜",name:"躲藏衣柜",wardPortrait:n.id<=2&&[0,3].includes(o),x:a,z:l,yaw:c,depth:.6,zone:l>21?3:l>11?2:0,target:{x:a,y:1.4,z:l},entry:m}),n.obstacles.push({...$n({x:a-d/2,z:l-f/2,w:d,d:f}),height:2.35,wardrobe:!0})}for(const o of n.interactions.filter(a=>a.type==="flashlight"))n.obstacles.push({...$n({x:o.target.x-.23,z:o.target.z-.23,w:.46,d:.46}),height:.85});n.sightObstacles=[...n.obstacles,...n.boundaries].filter(o=>!o.glass).map(o=>({...o,minY:n.base,maxY:n.base+(o.height??3)}));for(const o of n.walkableRects){const a=o.x<8&&(o.z<11||o.z>=21),l=a?8:o.x,c=o.x+o.w-l;if(c>0){const h=$n({...o,x:l,w:c});n.sightObstacles.push({...h,minY:n.base-.16,maxY:n.base},{...h,minY:n.base+3,maxY:n.base+3.16})}a&&n.id===1&&o.z>=21&&n.sightObstacles.push({...$n(o),minY:-.16,maxY:0})}for(const o of["A","B"])n.id===1&&o==="B"||n.sightObstacles.push(...yd(n.id,o,o===n.departure));return n.id>1&&n.sightObstacles.push(...yo(n.id,n.departure),...Nl(n.id,n.departure),vo(n.id,n.departure)),n.id<5&&n.sightObstacles.push(...yo(n.id+1,n.arrival),...Nl(n.id+1,n.arrival),vo(n.id+1,n.arrival)),n});return{...s,floors:e,byId:Object.fromEntries(e.map(t=>[t.id,t]))}}function tn(s,e,t=vd,n=[]){return e.x<7.9&&(e.z<11||e.z>=21)&&!(s.id===1&&e.z>=21)?!1:[e,{x:e.x-t,z:e.z},{x:e.x+t,z:e.z},{x:e.x,z:e.z-t},{x:e.x,z:e.z+t}].every(i=>s.walkableRects.some(r=>xr(i,r)))&&!ti(e.x,e.z,s.obstacles,t)&&!ti(e.x,e.z,n,t)}const _o=(s,e)=>({x:s.x-2,z:e==="A"?s.z-2:30-s.z}),Rs=(s,e,t)=>({x:s+2,z:t==="A"?e+2:30-e});function yd(s,e,t=!1){const n=s===5&&!t?6.5:7.1,i=[[0,0,.9,9],[.9,0,5.1,1.13],[.9,n,5.1,9-n],[3.85,1.13,2.15,3.87]],r=(s-1)*xt;return i.flatMap(([o,a,l,c],h)=>[!1,!0].filter(u=>!(u&&h===3&&t)).map(u=>{u&&h===1&&(c=1.03),u&&h===2&&(a=n+.08,c=9-a);const d=Rs(o+l/2,a+c/2,e),f=r+(u?3.08:-.08);return{minX:d.x-l/2,maxX:d.x+l/2,minZ:d.z-c/2,maxZ:d.z+c/2,minY:f-.08,maxY:f+.08,ceiling:u}}))}function vo(s,e){const t=Rs(3.125,4.96,e),n=(s-1)*xt;return{minX:t.x-.625,maxX:t.x+.625,minZ:t.z-.06,maxZ:t.z+.06,minY:n,maxY:n+1.05}}function yo(s,e){return[[2.375,-.23,3.74,.25,6.1,2.52],[.9,-.2,3.045,.12,6.2,3.91],[3.85,-.2,3.045,.12,6.2,3.91],[3.675,-.2,7.18,5.35,6.2,.16],[5.12,-.2,4.94,2.5,6.2,.12],[2.375,-.2,1.05,3.07,6.2,.16]].map(([t,n,i,r,o,a])=>{const l=Rs(t,i,e),c=(s-1)*xt;return{minX:l.x-r/2,maxX:l.x+r/2,minZ:l.z-a/2,maxZ:l.z+a/2,minY:c+n-o/2,maxY:c+n+o/2}})}function Nl(s,e){return[[2.375,-1.67,1.805,2.75,1.35],[3.675,-.05,6.05,5.35,2.1],[3.675,-3.29,6.05,5.35,2.1]].map(([t,n,i,r,o])=>{const a=Rs(t,i,e),l=(s-1)*xt;return{minX:a.x-r/2,maxX:a.x+r/2,minZ:a.z-o/2,maxZ:a.z+o/2,minY:l+n-.05,maxY:l+n+.05}})}function Ay(s,e,t){if(!t)return(e-1)*xt;const n=_o(s,t.core),i=(t.from-1)*xt;return n.z<2.48?i-1.62:n.z>=5?i-(t.phase==="lower"?xt:0):i-(t.phase==="lower"?1.62+1.62*(n.z-2.48)/2.52:1.62*(5-n.z)/2.52)}function Aa(s,e,t=vd){const n=_o(s,e.core),i=[{x:1,z:5,w:5.5,d:2.1},{x:1,z:1.13,w:2.75,d:1.35},e.phase==="lower"?{x:2.5,z:2.48,w:1.25,d:2.52}:{x:1,z:2.48,w:1.25,d:2.52}];return[n,{x:n.x-t,z:n.z},{x:n.x+t,z:n.z},{x:n.x,z:n.z-t},{x:n.x,z:n.z+t}].every(r=>i.some(o=>xr(r,o)))&&!ti(s.x,s.z,yo(e.from,e.core),t)&&(e.phase==="lower"||!ti(s.x,s.z,[vo(e.from,e.core)],t))}const Ra=[[6.4,6,0],[1.625,5.7,0],[1.625,2.1,-1.62],[3.125,2.1,-1.62],[3.125,5.7,-3.24],[6.4,6,-3.24]];function Ry(s,e,t){const n=Math.max(0,Math.min(.999999,t))*(Ra.length-1),i=Math.floor(n),r=t===1?1:n-i,o=Ra[i],a=Ra[i+1];return{...Rs(o[0]+(a[0]-o[0])*r,o[1]+(a[1]-o[1])*r,e),y:(s-1)*xt+o[2]+(a[2]-o[2])*r}}const os=s=>Ty(s.x,s.z,s.angle,s.amount*(s.swing||1));function Cy(s,e,t){let n=(t^Math.imul(s.id,2654435761))>>>0;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296,r=[];for(let h=1;h<s.mainRoute.length;h++){const u=s.mainRoute[h-1],d=s.mainRoute[h],f=e.path({floor:s.id,x:u[0],z:u[1]},{floor:s.id,x:d[0],z:d[1]},[],!0);for(const m of f)m.floor===s.id&&(!r.length||Math.hypot(m.x-r.at(-1).x,m.z-r.at(-1).z)>.01)&&r.push({...m});r.length&&(r.at(-1).turn=!0)}const o=s.doorSpecs.flatMap(h=>[0,.25,.5,.75,1].map(u=>os({...h,amount:u}))),a=[];let l=0,c=.7;for(let h=1;h<r.length;h++){const u=r[h-1],d=r[h],f=d.x-u.x,m=d.z-u.z,x=Math.hypot(f,m);for(d.turn&&c>l+x&&l+x-(a.at(-1)?.distance??0)>1.3&&(c=l+x);c<=l+x;c+=.45+i()*1.9){const g=(c-l)/x,p=u.x+f*g,b=u.z+m*g;for(const _ of[(i()-.5)*2.2,(i()-.5)*1.6,-.55,.55,0]){const S=p-m/x*_,w=b+f/x*_;if(!tn(s,{x:S,z:w},.37,o)||a.some(I=>Math.hypot(I.x-S,I.z-w)<.49))continue;const R=(.18+i()*.08)*1.15;a.push({x:S,z:w,y:.018,width:R,height:R*1.18,yaw:i()*Math.PI*2,tint:.76+i()*.2,distance:c});break}}l+=x}return a.map(h=>({...h,variant:Math.floor(i()*4)}))}function Py(s,e){const t=new Yt({map:s,color:14010792,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});t.onBeforeCompile=o=>{o.uniforms.uPhotoAspect={value:s.image.width/s.image.height*1.18},o.fragmentShader=`uniform float uPhotoAspect;
`+o.fragmentShader.replace("#include <map_fragment>",`
  vec2 uv=vMapUv;
  vec2 photoUV=(uv-vec2(.035))/vec2(.93);
  photoUV=(photoUV-.5)*vec2(min(1.,1./uPhotoAspect),min(1.,uPhotoAspect))+.5;
  vec4 photo=texture2D(map,clamp(photoUV,0.,1.));
  float mask=step(.035,uv.x)*step(uv.x,.965)*step(.035,uv.y)*step(uv.y,.965);
  float grey=dot(photo.rgb,vec3(.2126,.7152,.0722));
  // Work in perceptual grayscale so stronger contrast retains dark photographic detail.
  grey=clamp((pow(grey,1./2.2)-.5)*1.25+.5,0.,1.);
  float grain=fract(sin(dot(floor(uv*280.),vec2(12.9898,78.233)))*43758.5453);
  float edge=min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y));
  float nick=fract(sin(dot(floor(uv*95.),vec2(41.37,17.23)))*15731.71);
  if(edge<.003+nick*.005)discard;
  float stain=1.-.28*exp(-length((uv-vec2(.13,.22))*vec2(7.,5.)))-.22*(1.-smoothstep(0.,.12,edge));
  float crease=1.-.10*exp(-abs(uv.y-.32-uv.x*.24)*180.);
  vec3 paper=vec3(.73,.67,.55);
  vec3 printColor=vec3(pow(.07+grey*.83,2.2))*vec3(1.04,1.,.89);
  diffuseColor.rgb*=mix(paper,printColor,photo.a*mask*.98)*stain*crease*(.92+grain*.08);
 `)};const n=new It(1,1);n.rotateX(-Math.PI/2);const i=new oc(n,t,e.length),r=new Mt;return i.name="discarded-photo-trail",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.yaw,0),r.scale.set(o.width,1,o.height),r.updateMatrix(),i.setMatrixAt(a,r.matrix),i.setColorAt(a,new ze().setScalar(o.tint))}),i.computeBoundingSphere(),i}const Iy=new ct(1,1,1),Ca=new Map;function Li(s){if(Ca.has(s))return Ca.get(s);const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle=s==="floor"?"#878476":s==="wood"?"#6b6049":"#b5b0a0",t.fillRect(0,0,256,256);let n=991;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let o=0;o<6200;o++)t.fillStyle=`rgba(${i()>.55?"225,225,201":"31,42,32"},${i()*.16})`,t.fillRect(i()*256,i()*256,s==="wood"?i()*50+5:2,s==="wood"?1:3);if(s==="floor"&&(t.strokeStyle="#454e40",t.lineWidth=3,t.strokeRect(1,1,254,254),t.lineWidth=1,t.strokeStyle="#9b9e87",t.strokeRect(7,7,242,242)),s==="wall")for(let o=0;o<18;o++)t.fillStyle=`rgba(39,48,31,${i()*.11})`,t.beginPath(),t.ellipse(i()*256,i()*256,i()*19+4,i()*60+10,0,0,Math.PI*2),t.fill();const r=new uc(e);return r.colorSpace=Ct,r.wrapS=r.wrapT=Bi,Ca.set(s,r),r}function pu(s,e="#233b30",t="#d4d8be",n=512,i=180){const r=document.createElement("canvas");r.width=n,r.height=i;const o=r.getContext("2d"),a=new uc(r);return a.colorSpace=Ct,a.userData.redraw=()=>{o.fillStyle=e,o.fillRect(0,0,n,i),o.fillStyle=t,o.textAlign="center",o.textBaseline="middle";for(let l=0;l<s.length;l++){const c=Ye(s[l]),h=l?22:Math.min(65,i*.4);o.font=`${h}px Microsoft YaHei`;const u=o.measureText?.(c).width||0;u>n*.91&&(o.font=`${h*n*.91/u}px Microsoft YaHei`),o.fillText(c,n/2,i*(s.length===1?.5:l===0?.4:.79),n*.91)}a.needsUpdate=!0},a.userData.redraw(),a}function Ly(s,e,t,n=!0){if(!n)return .025;if(!s.faulty)return 1;const i=8+s.index*7%13,r=(e+s.index*2.31)%i,o=Math.min(Math.abs(r-.9),i-Math.abs(r-.9));return(1-(t?.62*Math.exp(-((o/.53)**2)):r<.15+s.index%3*.1?.91:0))*(.94+Math.sin(e*.8+s.index)*.06)}function Dy(s,e,t,n,i={}){const r=new Lt;r.position.y=t.base,s.add(r);let o=new Map,a=r;const l=[],c=[],h=[],u=[],d=[],f=[],m=[],x=[],g=[],p=(T,P=null,U=.95)=>{const B=new Yt({color:T,map:P,roughness:U});return l.push(B),B},b=t.id===2,_={wall:p(b?13551794:10726034,Li("wall")),lower:p(b?8752766:4217163,Li("wall")),floor:p(b?11119252:7569004,Li("floor")),wood:p(8549466,Li("wood")),metal:p(6913394,null,.55),trim:p(2571571),dark:p(1187354),cream:p(11842976),red:p(7292472),paper:p(12629647),ceiling:p(b?13027508:8095604),green:p(5401425)},S=new Yt({roughness:.95,metalness:0,map:e.chiangkaishekPortrait,color:12829354});l.push(S);function w(T,P,U,B,J,ee,Y=0){const me=e.chiangkaishekPortrait,j=new st(new It(J*me.image.width/me.image.height,J),S);return j.position.set(P,U,B),j.rotation.y=Y,j.userData.target=ee,j.userData.wardPortrait=!0,T.add(j),u.push(j),j}const R=new Gt({color:8099978,transparent:!0,opacity:.18,depthWrite:!1});l.push(R);const I=p(b?11974048:9672577,Li("floor"),.82);function C(T,P,U,B,J,ee,Y=_.wall){const me=Iy.clone();if(me.scale(B,J,ee),me.translate(T,P,U),Y.map&&Y!==_.floor&&Y!==I){const j=me.attributes.position,Se=me.attributes.normal,Te=me.attributes.uv;for(let z=0;z<j.count;z++)Te.setXY(z,(Math.abs(Se.getX(z))>.5?j.getZ(z):j.getX(z))*.65,(Math.abs(Se.getY(z))>.5?j.getZ(z):j.getY(z))*.65)}o.has(Y)||o.set(Y,[]),o.get(Y).push(me)}function y(T,P,U,B,J,ee,Y,me,j=0){T.scale(J,ee,Y),T.rotateX(j),T.translate(P,U,B),o.has(me)||o.set(me,[]),o.get(me).push(T)}function E(T,P,U,B,J=!1){if(J){C(T,.4,P,U,.8,B,_.lower);const ee=B>U;C(T,1.85,P,ee?.016:U-.06,2.1,ee?B-.06:.016,R);for(const Y of[-1,1])C(T+(ee?0:Y*(U/2-.025)),1.85,P+(ee?Y*(B/2-.025):0),ee?U:.05,2.1,ee?.05:B,_.metal);C(T,.82,P,U,.04,B,_.metal),C(T,2.96,P,U,.08,B,_.metal);return}C(T,.7,P,U,1.4,B,_.lower),C(T,2.2,P,U,1.6,B,_.wall),C(T,.085,P,U+.015,.17,B+.015,_.trim),C(T,1.43,P,U+.018,.035,B+.018,_.wood)}function D(T,P,U,B,J,ee,Y=0,me,j){const Se=pu(ee,me,j);c.push(Se);const Te=new Yt({roughness:.95,metalness:0,map:Se,side:sn});l.push(Te);const z=new st(new It(B,J),Te);return z.position.set(T,P,U),z.rotation.y=Y,a.add(z),z}function W(){for(const[T,P]of o){const U=au(P);P.forEach(B=>B.dispose()),a.add(new st(U,T))}}const H=(T,P)=>t.walkableRects.some(U=>xr({x:T,z:P},U));for(let T=2;T<30;T++)for(let P=2;P<34;P++)if(H(P+.5,T+.5)){const U=P<8&&(T<11||T>=21),B=t.id===1&&T>=21;(!U||B)&&C(P+.5,-.08,T+.5,1,.16,1,_.floor),U||C(P+.5,3.08,T+.5,1,.16,1,_.ceiling),H(P-.5,T+.5)||E(P,T+.5,.18,1),H(P+1.5,T+.5)||E(P+1,T+.5,.18,1),H(P+.5,T-.5)||E(P+.5,T,1,.18,t.id===1&&P<11&&T===19),!H(P+.5,T+1.5)&&!(t.id===1&&P>=5&&P<8)&&E(P+.5,T+1,1,.18,t.id===1&&P<11&&T===12)}for(const T of t.partitions)E(T.x+T.w/2,T.z+T.d/2,T.w,T.d,T.material==="fixed-glass");if(t.id<=2)for(const T of[5,27])C(27.4,2.75,T+.1,1.8,.5,.2,_.wall),D(27.4,2.72,T===5?4.99:27.21,1.1,.25,["公共区"],T===5?Math.PI:0,"#364139","#bdc1ae");C(18,-.18,16,14,.2,10,_.dark);for(const T of[12,15,18,20])C(11.13,1.7,T,.05,1.2,1.5,_.dark),C(11.17,1.7,T,.04,1.05,1.3,_.metal),C(11.2,1.7,T,.04,1.05,.05,_.trim);for(const T of[13,17,21,24])C(T,1.8,11.14,1.5,1.4,.06,_.dark),C(T,1.8,11.18,1.3,1.2,.04,_.metal);const K=t.zones.map(T=>T.label);D(8.37,2.4,t.arrival==="A"?9.9:22,1.3,.36,[`0${t.id} F`,t.title],Math.PI/2);for(const[T,P,U,B]of[[18,2.12,0,K[0]],[33.86,9,-Math.PI/2,K[1]],[25.12,16,Math.PI/2,K[2]],[18,29.86,Math.PI,K[3]]])D(T,2.35,P,2,.43,[B],U);for(const[T,P,U,B]of[[30,2.14,0,"公共通道"],[33.85,18,-Math.PI/2,"楼梯间连廊"],[18,29.85,Math.PI,"公共通道"]])D(T,2.6,P,1.4,.28,[B],U,"#173b2a","#b9dba4");if(D(8.37,2.84,t.id===1?24:t.destination.z,1.4,.32,[t.id===1?"室外门厅":`${t.departure} 梯 · 下层通行`],Math.PI/2),D(8.37,1.85,t.arrival==="A"?6:26,1.15,.35,["楼道通行"],Math.PI/2,"#173b2a","#c8d9ae"),t.id<=2)for(const T of[11.83,20.17])D(32,2.84,T,1.7,.24,["避险房间"],T<16?Math.PI:0,"#173b2a","#c8d9ae");t.id===1&&(D(6.7,2.3,28.35,1.5,.32,["室外 / EXIT"],Math.PI,"#173b2a","#c8d9ae"),D(6.8,2.2,26.95,1.3,.3,["门厅外廊"],Math.PI,"#173b2a","#c8d9ae"));for(let T=1;T<t.mainRoute.length;T++){const P=t.mainRoute[T-1],U=t.mainRoute[T],B=Math.floor(Math.hypot(U[0]-P[0],U[1]-P[1])/2.4);for(let J=0;J<B;J++){const ee=(J+.5)/B,Y=P[0]+(U[0]-P[0])*ee,me=P[1]+(U[1]-P[1])*ee;if(Y<8.5||t.id===1&&Y<9&&me>24)continue;const j=J%3===0?-.35:.1,Se=Math.floor(Y+(P[0]===U[0]?j:0))+.5,Te=Math.floor(me+(P[1]===U[1]?j:0))+.5;C(Se,.004,Te,.985,.008,.985,I)}}for(const T of n.doors){const P=new Lt;P.position.set(T.x,0,T.z),P.rotation.y=T.angle,r.add(P);const U=new Lt;U.position.x=-.95,P.add(U);const B=p(T.kind==="wood"?7758667:T.locked?4541762:5598044,T.kind==="wood"?Li("wood"):null,.8),J=new st(new ct(1.9,2.6,.11),B);J.position.set(.95,1.3,0),U.add(J),J.userData.target=T.id;const ee=new st(new ct(.28,.06,.1),_.metal);ee.position.set(.66,-.06,.09),J.add(ee);const Y=pu([T.title,T.logLock?"使用滚木开锁":T.kind==="wood"?"木门 · 不能久留":T.kind==="exit"?"走到室外":"闭门后离开门口"],"#25372e","#d1d6be",512,200);c.push(Y);const me=new Yt({roughness:.95,metalness:0,map:Y,side:sn});l.push(me);const j=new st(new It(1.25,.46),me);j.position.set(0,.55,.061),J.add(j),j.userData.target=T.id;let Se;if(T.logLock){const Te=new st(new go(.095,.025,6,12),_.metal);Te.position.set(0,-.32,.085),Te.userData.target=T.id,J.add(Te),u.push(Te);const z=new st(new Ks(.075,12),_.dark);z.position.set(0,-.32,.063),J.add(z),Se=new st(new Kn(.07,.075,.25,10),_.wood),Se.rotation.x=Math.PI/2,Se.position.set(0,-.32,.13),Se.visible=!T.locked,J.add(Se)}if(h.push({...T,pivot:U,mesh:J,handle:ee,dm:B,logSocket:Se,data:T}),u.push(J,j),T.wardPortrait&&(w(J,0,-.22,.062,.62,T.id),w(J,0,-.22,-.062,.62,T.id,Math.PI)),T.axis==="x"){C(T.x,2.84,T.z,.32,.46,2.3,_.trim);for(const Te of[-1,1])C(T.x,1.3,T.z+Te*1.06,.32,2.6,.16,_.trim)}else{C(T.x,2.84,T.z,2.3,.46,.32,_.trim);for(const Te of[-1,1])C(T.x+Te*1.06,1.3,T.z,.16,2.6,.32,_.trim)}}const ne=(T,P)=>{C(T,.46,P,.52,.09,.55,_.cream),C(T,.86,P+.24,.52,.75,.08,_.cream);for(const U of[-.21,.21])for(const B of[-.21,.21])C(T+U,.22,P+B,.045,.44,.045,_.metal)};for(const T of t.furniture){const P=T.x+T.w/2,U=T.z+T.d/2;if(T.name.includes("沙发")){C(P,.42,U,T.w,.55,T.d,_.green),C(P,.9,U+T.d*.38,T.w,.65,.22,_.green);for(const B of[-1,1])C(P+B*(T.w/2-.15),.7,U,.3,.6,T.d,_.wood);for(let B=0;B<3;B++)C(P+(B-1)*1.12,.73,U-.1,1.08,.09,.75,_.green)}else if(T.name.includes("椅列"))for(let B=0;B<7;B++)ne(T.x+.5+B*.95,U);else if(T.name.includes("洗衣机"))for(let B=0;B<4;B++){const J=T.x+.47+B;C(J,.56,U,.9,1.12,T.d,_.cream),y(new Kn(1,1,1,16),J,.58,U+T.d/2+.02,.28,.045,.28,_.dark,Math.PI/2),C(J,.99,U+T.d/2+.03,.65,.12,.05,_.metal)}else if(/书架|资料柜|储物柜|矮柜|设备柜/.test(T.name)){C(P,.95,U,T.w,1.9,T.d,_.wood);for(let B=.35;B<1.8;B+=.45){C(P,B,U+T.d/2+.015,T.w-.08,.055,.035,_.trim);for(let J=0;J<Math.min(12,T.w/.14);J++)C(T.x+.13+J*.14,B+.17,U+T.d/2+.035,.095,.28,.04,J%3?_.paper:_.red)}}else if(T.name.includes("信箱")){C(P,.3,U,T.w,.6,T.d,_.trim),C(P,1.35,U,T.w,1.5,T.d,_.metal);for(let B=0;B<7;B++)for(let J=0;J<3;J++)C(T.x+.3+B*.52,.9+J*.43,U+T.d/2+.02,.46,.36,.04,_.green),C(T.x+.3+B*.52,.96+J*.43,U+T.d/2+.047,.28,.025,.02,_.dark)}else if(/台|桌/.test(T.name)){if(C(P,.85,U,T.w,.16,T.d,/灶|洗|前台|接待/.test(T.name)?_.cream:_.wood),/台/.test(T.name))C(P,.4,U,T.w-.08,.8,T.d-.08,_.green);else for(const B of[-1,1])for(const J of[-1,1])C(P+B*(T.w/2-.12),.4,U+J*(T.d/2-.12),.09,.8,.09,_.trim);if(T.name.includes("灶"))for(const B of[-1.4,0,1.4])y(new Kn(1,1,1,12),P+B,.95,U,.22,.03,.22,_.dark)}else if(T.name.includes("晾衣")){for(const B of[-1,1])C(P,1.4,U+B*1.4,.05,2.8,.05,_.metal);C(P,2.75,U,.05,.06,3,_.metal);for(let B=0;B<4;B++)C(P,1.8,U-1.2+B*.7,.04,1.6,.55,B%2?_.cream:_.paper)}else if(T.name.includes("护栏")){for(let B=0;B<9;B++)C(T.x+.2+B*.4,.65,U,.045,1.3,.08,_.cream);C(P,1.3,U,T.w,.08,.1,_.red)}else T.name.includes("长椅")?(C(P,.48,U,T.w,.12,T.d,_.wood),C(P+.4,.85,U,.12,.7,T.d,_.wood)):(C(P,.45,U,T.w,.9,T.d,_.wood),C(P-.15,.99,U,T.w*.66,.19,T.d*.8,_.paper))}for(const T of t.interactions){const{x:P,z:U}=T.target,B=new Lt;B.position.set(P,0,U),B.rotation.y=T.yaw,r.add(B);const J=(Y,me,j,Se,Te)=>{const z=new st(Y,me);return z.position.set(j,Se,Te),z.userData.target=T.id,B.add(z),u.push(z),z},ee={i:T,group:B};if(T.type==="wardrobe"){const Y=T.depth/2,me=new Gt({visible:!1});l.push(me),J(new ct(1.25,2.3,.03),me,0,1.175,Y-.01);const j=Math.abs(Math.sin(T.yaw))>.5,Se=(Te,z,Re,L,it,De)=>C(P+Math.cos(T.yaw)*Te+Math.sin(T.yaw)*Re,z,U-Math.sin(T.yaw)*Te+Math.cos(T.yaw)*Re,j?De:L,it,j?L:De,_.wood);Se(0,1.175,-Y+.03,1.3,2.35,.06);for(const Te of[-1,1])Se(Te*.62,1.175,0,.06,2.35,T.depth);Se(0,.04,0,1.3,.08,T.depth),Se(0,2.28,0,1.3,.14,T.depth),ee.wardrobe=[];for(const Te of[-1,1]){const z=new Lt;z.position.set(Te*.62,0,Y-.02),B.add(z);const Re=[[.46,1.98],[1.46,.78],[.035,1.61]].map(([De,ot])=>{const be=new ct(.6,De,.045);return be.translate(-Te*.31,ot,0),be}),L=new ct(.035,.18,.055);L.translate(-Te*.53,1.21,.047),Re.push(L);const it=new st(au(Re),_.wood);Re.forEach(De=>De.dispose()),it.userData.target=T.id,z.add(it),u.push(it),ee.wardrobe.push({hinge:z,side:Te}),T.wardPortrait&&Te===-1&&w(z,.31,1.98,.029,.43,T.id)}}else if(T.type==="flashlight"){J(new ct(.46,.85,.46),_.wood,0,.425,0);const Y=new Lt;B.add(Y),ee.torch=Y;for(const[Se,Te,z]of[[.055,.3,0],[.095,.12,.18]]){const Re=new st(new Kn(Se,Se,Te,12),_.metal);Re.rotation.x=Math.PI/2,Re.position.set(0,.95,z),Re.userData.target=T.id,Y.add(Re),u.push(Re)}const me=new Gt({color:15003596});l.push(me);const j=new st(new Ks(.082,16),me);j.position.set(0,.95,.242),j.userData.target=T.id,Y.add(j),u.push(j)}else if(T.type==="switch"){const Y=new Gt({color:7443569});l.push(Y),ee.indicator=J(new It(.045,.035),Y,.055,1.55,.067),J(new ct(.19,.29,.07),_.cream,0,1.45,.025),ee.toggle=J(new ct(.09,.13,.035),_.red,0,1.45,.075)}else if(T.type==="tv"){J(new ct(1.1,.7,.62),_.wood,0,.4,0),J(new ct(.95,.73,.5),_.dark,0,1.12,0);const Y=new dn({uniforms:{uTime:{value:0},uOn:{value:0},uIntrusion:{value:0},uPressure:{value:0},uPhotoAspect:{value:e.liang.image.width/e.liang.image.height},uPhoto:{value:e.liang}},vertexShader:"varying vec2 vUv;uniform float uPressure;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.x*3.14159)*sin(uv.y*3.14159)*uPressure*.18;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"varying vec2 vUv;uniform float uTime;uniform float uOn;uniform float uIntrusion;uniform float uPressure;uniform float uPhotoAspect;uniform sampler2D uPhoto;void main(){float n=fract(sin(dot(floor(vUv*190.),vec2(12.98,78.23))+floor(uTime*7.))*43758.5);vec2 uv=vUv-.5;if(uPhotoAspect<1.453)uv.y*=uPhotoAspect/1.453;else uv.x*=1.453/uPhotoAspect;uv=uv/(1.+uPressure*.8)+vec2(.5,.65);vec3 p=texture2D(uPhoto,clamp(uv,0.,1.)).rgb;float g=dot(p,vec3(.299,.587,.114));float reveal=max(uIntrusion,step(.86,fract(uTime*.027)));gl_FragColor=vec4(mix(vec3(.009,.02,.017),mix(vec3(n*.18),vec3(g*(.38+uIntrusion*.3)),reveal),uOn),1.);}"});l.push(Y);const me=J(new It(.77,.53,12,8),Y,0,1.13,.256);x.push({...ee,sm:Y,screen:me})}else if(T.type==="portrait"){const Y=e[T.asset],me=.9,j=me*(Y.image.width/Y.image.height);J(new ct(j+.12,me+.12,.07),_.wood,0,1.65,0),T.asset==="wangjingwei"&&J(new It(j,me),_.paper,0,1.65,.037);const Se=new Yt({roughness:.95,metalness:0,map:Y,color:9345928,transparent:T.asset==="wangjingwei",alphaTest:.1});l.push(Se),ee.photo=J(new It(j,me),Se,0,1.65,.042),m.push(ee)}else if(T.type==="curtain"){const Y=new Gt({color:t.id===2?12110011:3492161});if(l.push(Y),J(new It(1.9,1.65),Y,0,1.75,0),t.id===4&&e.wangjingwei){const me=new Yt({roughness:.95,metalness:0,map:e.wangjingwei,transparent:!0,alphaTest:.1,color:5398619});l.push(me);const j=1.7,Se=j*e.wangjingwei.image.width/e.wangjingwei.image.height;J(new It(Se,j),me,-.2,1.73,.015)}for(const me of[-.93,0,.93])J(new ct(.045,1.7,.025),_.trim,me,1.75,.025);ee.curtain=J(new ct(2,1.8,.065),_.cream,0,1.72,.08),J(new ct(2.2,.055,.12),_.metal,0,2.67,.1)}else if(T.type==="washer"){const Y=new Lt;Y.position.set(-.29,.58,0),B.add(Y),ee.cabinet=Y;const me=new st(new go(.29,.045,6,16),_.metal);me.position.x=.29,me.userData.target=T.id,Y.add(me),u.push(me);const j=new st(new Ks(.26,16),R);j.position.set(.29,0,.012),j.userData.target=T.id,Y.add(j),u.push(j)}else if(T.type==="peek"){J(new It(.61,.51),R,0,1.65,.045);for(const Y of[-1,1])J(new ct(.07,.66,.08),_.wood,Y*.34,1.65,0),J(new ct(.68,.07,.08),_.wood,0,1.65+Y*.295,0)}else{J(new ct(.9,1.25,.05),_.dark,0,.625,-.18);for(const j of[-1,1])J(new ct(.05,1.25,.4),_.wood,j*.425,.625,0);for(const j of[.04,.62,1.23])J(new ct(.9,.05,.4),_.wood,0,j,0);const Y=new Lt;Y.position.set(-.45,0,.23),B.add(Y);const me=new st(new ct(.88,1.18,.04),_.green);me.position.set(.44,.64,0),me.userData.target=T.id,Y.add(me),u.push(me),ee.cabinet=Y,J(new ct(.55,.025,.2),_.paper,0,.66,.02)}T.renderTarget={x:P,z:U,y:T.target.y},ee.data=T,r.userData.interactions??=[],r.userData.interactions.push(ee)}for(const[T,P]of t.props.entries()){const U=i[P.model];if(!U)continue;const B=U.clone(!0);B.position.set(P.x,0,P.z),B.rotation.y=P.yaw,B.userData.sharedModel=!0,r.add(B),f.push({obj:B,p:P,index:T})}for(const T of["A","B"])if(!(t.id===1&&T==="B"))for(const P of yd(t.id,T,T===t.departure))C((P.minX+P.maxX)/2,(P.minY+P.maxY)/2-t.base,(P.minZ+P.maxZ)/2,P.maxX-P.minX,P.maxY-P.minY,P.maxZ-P.minZ,P.ceiling?_.ceiling:_.floor);if(e.floorPhoto&&n.photoTrail?.length){const T=e.floorPhotos||[e.floorPhoto];T.forEach((P,U)=>{const B=n.photoTrail.filter(ee=>(ee.variant??0)%T.length===U);if(!B.length)return;const J=Py(P,B);r.add(J),l.push(J.material)})}const $=[];t.id>1&&$.push({from:t.id,core:t.departure}),t.id<5&&$.push({from:t.id+1,core:t.arrival});for(const T of $){const P=o;o=new Map,a=new Lt,r.add(a),g.push({from:T.from,core:T.core,group:a});const U=(T.from-t.id)*xt,B=(j,Se,Te)=>({...Rs(j,Te,T.core),y:Se+U}),J=(j,Se,Te,z,Re,L,it)=>{const De=B(j,Se,Te);C(De.x,De.y,De.z,z,Re,L,it)};for(let j=0;j<9;j++)J(1.625,-(j+1)*.18-.09,5-(j+.5)*.28,1.25,.18,.28,_.floor),J(3.125,-1.62-(j+1)*.18-.09,2.48+(j+.5)*.28,1.25,.18,.28,_.floor),J(1.625,-(j+1)*.18+.005,5-(j+1)*.28+.02,.95,.01,.035,I),J(3.125,-1.62-(j+1)*.18+.005,2.48+(j+1)*.28-.02,.95,.01,.035,I);for(const j of Nl(T.from,T.core))C((j.minX+j.maxX)/2,(j.minY+j.maxY)/2-t.base,(j.minZ+j.maxZ)/2,j.maxX-j.minX,j.maxY-j.minY,j.maxZ-j.minZ,_.floor);J(3.675,3.08,4.105,5.35,.16,6.15,_.ceiling),J(3.675,-3.4,4.105,5.35,.16,6.15,_.floor);for(const j of yo(T.from,T.core))C((j.minX+j.maxX)/2,(j.minY+j.maxY)/2-t.base,(j.minZ+j.maxZ)/2,j.maxX-j.minX,j.maxY-j.minY,j.maxZ-j.minZ,_.lower);const ee=vo(T.from,T.core);C((ee.minX+ee.maxX)/2,(ee.minY+ee.maxY)/2-t.base,(ee.minZ+ee.maxZ)/2,1.25,1.05,.12,_.lower),J(3.125,1.065,4.96,1.29,.03,.16,_.metal);for(const[j,Se,Te]of[[1.06,-.62,1],[3.69,-.62,-2.24]]){const z=B(j,Se,2.48),Re=B(j,Te,5),L=new N(z.x,z.y,z.z),it=new N(Re.x,Re.y,Re.z),De=it.clone().sub(L),ot=new Kn(.025,.025,De.length(),8);ot.applyQuaternion(new oi().setFromUnitVectors(new N(0,1,0),De.clone().normalize()));const be=L.add(it).multiplyScalar(.5);ot.translate(be.x,be.y,be.z),o.has(_.metal)||o.set(_.metal,[]),o.get(_.metal).push(ot)}const Y=B(2.35,-.45,1.22);D(Y.x,Y.y,Y.z,1.1,.4,[`0${T.from-1} F`],T.core==="A"?0:Math.PI,"#234332","#d2dec4");const me=new Gt({color:11650976});l.push(me),J(2.4,.6,1.75,1.2,.04,.2,me),W(),o=P,a=r}const Z=[[9,3.7],[16,3],[21,3],[26,3],[31,3.7],[13,8],[19,8],[26,8],[32,8],[32,12],[32,16],[32,20],[32,25],[32,28],[27,13],[27,18],[26,24],[19,24],[13,24],[9,28],[16,29],[22,29],[28,29],t.id===1?[6.5,29.1]:[8.9,t.destination.z]];for(let T=0;T<Z.length;T++){const[P,U]=Z[T],B=U>21?3:P>=25&&U>10?2:P>22?1:0;C(P,2.96,U,1.2,.1,.28,_.trim);const J=new Gt({color:13163200});l.push(J);const ee=new st(new ct(.98,.025,.14),J);ee.position.set(P,2.897,U),r.add(ee),d.push({x:P,z:U,zone:B,index:T,guide:[0,4,13,19,23].includes(T),faulty:[3,12,20].includes(T),tube:ee,power:1})}const re=new ze(1,.045,.025),ve=new ze(.58,.73,1),fe=new ze(16716808),Me=new ze(10864639),Ke={5:12768174,4:12966374,3:14076333,2:14936282,1:11914182}[t.id],qe=Array.from({length:5},()=>{const T=new hd(Ke,0,11,2);return r.add(T),T});for(const T of[3,29])for(const P of[0,.28])C(18,2.82,T+P,31,.045,.045,_.metal);if(t.id===5)for(const T of[12,16,20,25,29])C(T,1.2,2.12,1.15,2.4,.06,_.wood),C(T+.4,1.15,2.17,.12,.07,.04,_.metal);if(t.id===2){D(18,2.2,21.13,3,.6,["今晚不安排活动"],0,"#b5b59f","#505d50"),C(25.8,.05,7.9,2.5,.08,1.5,_.red);for(const T of[12,17,22,27,32])C(T,2.78,25,.22,.3,8,_.ceiling)}if(t.id===1){const T=new Gt({color:1478143});l.push(T),C(6.5,1.5,30.95,2,3,.5,T),C(6.5,-.08,31,2.8,.16,2.5,_.floor)}W();function St(T,P,U,B,J){const ee=B.states[t.id],Y=B.debugCalm?null:B.threat,me=Y?.floor===t.id?Y:null,j=me?.kind==="patrol"&&!ee.blackout?Et.smoothstep(Y.age,0,.8)*(Y.phase==="leaving"?Math.max(0,1-Y.retreat/1.3):1):0,Se=me?.kind==="yujie"?Et.smoothstep(Y.age,0,1)*(Y.phase==="leaving"?Math.max(0,1-Y.retreat/1.3):1):0;for(const z of h)z.pivot.rotation.y=z.data.amount*Math.PI/2*z.data.swing,z.logSocket&&(z.logSocket.visible=!z.data.locked),z.handle.rotation.z=Y?.doorId===z.id?Math.sin(U*14)*.18:0,z.dm.emissive.setHex(Y?.doorId===z.id?2560266:0);for(const z of r.userData.interactions||[]){const Re=!!ee.interactions[z.data.id];if(z.torch&&(z.torch.visible=!ee.flashlight),z.wardrobe){z.wasHidden!==Re&&(z.wasHidden!==void 0&&(z.doorPulse=.45),z.wasHidden=Re),z.doorPulse=Math.max(0,(z.doorPulse||0)-T);for(const{hinge:L,side:it}of z.wardrobe)L.rotation.y=Et.damp(L.rotation.y,z.doorPulse>0?it*.65:0,12,T)}z.toggle&&(z.toggle.rotation.x=Re?.25:-.25,z.indicator.material.color.setHex(ee.blackout?ee.restoredSwitches.includes(z.data.id)?9427379:14923876:7443569)),z.curtain&&(z.curtain.scale.x=Et.damp(z.curtain.scale.x,Re?.09:1,7,T)),z.cabinet&&(z.cabinet.rotation.y=Et.damp(z.cabinet.rotation.y,Re?-1.4:0,7,T))}for(const z of x){z.sm.uniforms.uTime.value=U;const Re=Y?.kind==="liang"&&Y.floor===t.id&&Y.tvId===z.i.id;z.sm.uniforms.uOn.value=Re?1:B.debugCalm?0:ee.interactions[z.i.id]?1:0,z.screen.scale.setScalar(Re?1+Y.pressure*1.8:1),z.screen.position.z=.256+(Re?Y.pressure*.25:0),z.sm.uniforms.uIntrusion.value=Re?1:0,z.sm.uniforms.uPressure.value=Re?Y.pressure:0}for(const z of m){const Re=ee.portraitShift&&Math.sin(U*.09+t.id)>0;z.photo.material.color.setScalar(Re?.4:.72),z.photo.rotation.z=Et.damp(z.photo.rotation.z,Re?.035:0,3,T)}for(const z of d){const Re=t.interactions.some(De=>De.type==="switch"&&De.zone===z.zone&&ee.interactions[De.id]);let L=B.debugCalm?1:Ly(z,U,J,!Re);if(Y&&Y.floor===t.id){if(Y.kind==="inspector")L*=Y.phase==="checking"?.38:.7;else if(Y.kind==="patrol"){const De=Y.age<Y.warning?Y.route[Math.min(Y.route.length-1,Math.floor(Y.age/Y.warning*(Y.route.length-1)))]:Y,ot=Math.hypot(z.x-De.x,z.z-De.z),be=Y.phase==="leaving"?Math.max(0,1-Y.retreat/1.3):1;L*=1-.88*be*(1-Et.smoothstep(ot,2,10))}else if(Y.kind==="yujie")L*=1-Se*.5;else if(Y.age<Y.warning){const De=Math.hypot(z.x-Y.x,z.z-Y.z);L*=.2+.8*Et.smoothstep(De,Y.age*8,Y.age*8+4)}}const it=z.z<5||z.z>27||z.x>=31||z.x<10;if(z.alarm=it?j:0,z.visit=Se,z.alarm&&(L=Math.max(L,.42*z.alarm)),ee.blackout&&!B.debugCalm&&(L=0),Y?.kind==="doubao"&&Y.floor===t.id&&Y.age<Y.warning&&!B.debugCalm){const De=Y.age;L=J?.12+.5*Math.sin(Math.PI*De/2)**2:De<.3||De>.65&&De<.9?.7:.06}z.power=L,z.tube.material.color.setRGB(z.guide?.95:.7,.82,z.guide?.56:.64).lerp(re,z.alarm).lerp(ve,Se).multiplyScalar(L)}const Te=[...d].sort((z,Re)=>(z.x-P.position.x)**2+(z.z-P.position.z)**2-((Re.x-P.position.x)**2+(Re.z-P.position.z)**2)).slice(0,5);qe.forEach((z,Re)=>{const L=Te[Re];z.position.set(L.x,2.6,L.z),z.color.setHex(L.guide?15061921:Ke).lerp(fe,L.alarm).lerp(Me,L.visit),z.intensity=L.power*(b?24:19)*(L.guide?1.25:1)});for(const z of f){const Re={floor:t.id,x:z.p.x,z:z.p.z,propIndex:z.index};U-ee.lastAnomaly>14&&B.player.floor===t.id&&!B.debugCalm&&!B.viewed(Re,B.lastInput||{})&&!B.threat&&(ee.propTurns[z.index]=(ee.propTurns[z.index]+1)%4,ee.lastAnomaly=U),z.obj.rotation.y=z.p.yaw+ee.propTurns[z.index]*Math.PI/2}}return{root:r,doors:h,interactables:u,fixtures:d,lights:qe,stairGroups:g,update:St,materials:_,localize(){c.forEach(T=>T.userData.redraw())},dispose(){s.remove(r),r.traverse(T=>{T.isMesh&&!Ny(T)&&(T.geometry.dispose(),T.isInstancedMesh&&T.dispose())}),l.forEach(T=>T.dispose()),c.forEach(T=>T.dispose())}}}function Ny(s){for(let e=s;e;e=e.parent)if(e.userData.sharedModel)return!0;return!1}function yc(s,e){const t={kun:{w:2.95,top:.075,bottom:1,p:[[.49,.13],[.51,.1],[.55,.085],[.59,.09],[.62,.12],[.61,.18],[.59,.22],[.65,.25],[.68,.29],[.68,.32],[.72,.34],[.74,.36],[.8,.365],[.845,.38],[.855,.41],[.855,.49],[.83,.52],[.79,.53],[.75,.52],[.73,.49],[.72,.45],[.735,.41],[.68,.39],[.63,.37],[.61,.41],[.56,.46],[.57,.5],[.61,.57],[.66,.68],[.66,.73],[.635,.83],[.61,.91],[.62,.95],[.655,.975],[.66,1],[.54,.98],[.54,.96],[.56,.91],[.575,.78],[.58,.73],[.55,.68],[.49,.6],[.47,.59],[.46,.67],[.475,.7],[.46,.74],[.45,.87],[.44,.92],[.45,.965],[.44,1],[.39,1],[.385,.985],[.4,.94],[.405,.9],[.39,.86],[.39,.76],[.38,.68],[.37,.61],[.375,.52],[.38,.465],[.365,.46],[.38,.4],[.4,.37],[.36,.39],[.31,.43],[.28,.46],[.25,.5],[.235,.52],[.23,.55],[.22,.56],[.205,.55],[.2,.53],[.21,.51],[.22,.5],[.23,.46],[.26,.42],[.3,.38],[.35,.33],[.38,.29],[.41,.265],[.41,.245],[.46,.23],[.46,.22],[.51,.2]]},liang:{w:2.55,top:.175,bottom:.66,p:[[.26,.31],[.27,.26],[.31,.22],[.37,.195],[.44,.18],[.51,.18],[.58,.195],[.62,.23],[.64,.28],[.64,.32],[.66,.33],[.66,.37],[.64,.4],[.65,.44],[.8,.46],[1,.495],[1,.66],[0,.66],[0,.49],[.15,.46],[.27,.44],[.27,.4],[.25,.37],[.245,.34]]},naiwa:{w:1.85,top:.245,bottom:.955,p:[[.35,.285],[.4,.26],[.46,.25],[.52,.25],[.56,.27],[.59,.31],[.62,.35],[.66,.39],[.69,.44],[.71,.49],[.75,.55],[.765,.61],[.76,.66],[.74,.7],[.68,.73],[.67,.8],[.65,.86],[.65,.89],[.68,.91],[.67,.935],[.62,.95],[.55,.95],[.51,.94],[.505,.92],[.53,.9],[.6,.885],[.55,.83],[.51,.76],[.5,.755],[.48,.82],[.47,.86],[.48,.87],[.5,.89],[.49,.902],[.43,.91],[.3,.91],[.285,.9],[.29,.89],[.32,.88],[.43,.865],[.38,.82],[.35,.77],[.335,.72],[.3,.7],[.27,.66],[.25,.61],[.235,.605],[.225,.59],[.225,.55],[.24,.52],[.28,.5],[.31,.47],[.35,.44],[.37,.41],[.385,.38],[.38,.35],[.35,.335],[.345,.325]]}};if(e==="inspector")return Uy(s);const n=t[e],i=new ed;n.p.forEach(([c,h],u)=>i[u?"lineTo":"moveTo"]((c-.5)*n.w,(.5-(h-n.top)/(n.bottom-n.top))*2.65)),i.closePath();const r=new pc(i),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,o.getX(c)/n.w+.5,1-(n.top+(.5-o.getY(c)/2.65)*(n.bottom-n.top)));const l=new dn({transparent:!0,depthWrite:!1,side:sn,uniforms:{uHeat:{value:0},uGround:{value:-1e3},uMap:{value:s},uTime:{value:0},uOpacity:{value:1},uLight:{value:.68},uKind:{value:{naiwa:0,sun:1,kun:2,liang:3}[e]}},vertexShader:"varying vec2 vUv; varying float vDistance; varying float vWorldY; void main(){vWorldY=(modelMatrix*vec4(position,1.)).y;vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDistance=-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform float uHeat;uniform float uGround;varying float vWorldY;uniform sampler2D uMap;uniform float uTime;uniform float uOpacity;uniform float uLight;uniform int uKind;varying vec2 vUv;varying float vDistance;
   void main(){if(vWorldY<uGround)discard;vec2 uv=vUv;
   vec4 c=texture2D(uMap,uv);float edge=uKind==3?smoothstep(.34,.48,uv.y):uKind==1?smoothstep(0.,.12,uv.y):1.;
   float mask=1.;float lum=dot(c.rgb,vec3(.2126,.7152,.0722));
   
   float alpha=c.a*mask*edge*uOpacity;if(alpha<.02)discard;
   vec3 col=mix(vec3(lum),c.rgb,uKind==4?.65:uKind==0?.35:.05)*uLight;col=mix(col,vec3(.035,.055,.045),smoothstep(8.,32.,vDistance));
   col=mix(col,col*vec3(1.5,.65,.15)+vec3(.65,.16,.015),uHeat*.8);gl_FragColor=vec4(col,alpha);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
  }`});return new st(r,l)}function Uy(s){const e=yc(s,"liang");return e.geometry.dispose(),e.geometry=new It(2.4,2.4),e.material.uniforms.uKind.value=1,e}function Md(s){return s.kind}const Ul=.16,Fl=1.55;function Mc(s,e=!1){const t=Math.max(0,s-Ul),n=Et.smoothstep(t,0,e?.28:.055),i=Et.smoothstep(s,1.13,Fl),r=1-Math.exp(-t*(e?6:28)),o=e?0:Math.exp(-t*8);return{visible:s>=Ul&&s<Fl,black:1-n*(1-i),fade:i,distance:1.65-.59*r-.1*Et.smoothstep(t,.3,1),x:e?0:Math.sin(t*61)*.035*o,y:e?0:Math.sin(t*47)*.022*o,roll:e?0:Math.sin(t*38)*.045*o,light:.88+o*.16,grain:e?0:.1*(1-i)}}function mu(s,e){const[t,n,i,r]=e.bounds,{width:o,height:a}=s.image,l=yc(s,"liang");l.geometry.dispose(),l.geometry=new It(2.65*(i-t)/(r-n),2.65);const c=l.geometry.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,(t+c.getX(h)*(i-t))/o,1-(r-c.getY(h)*(r-n))/a);return l.material.uniforms.uKind.value=4,l}function Sd(s){return s.travel?!1:s.hiding?!!s.floor.interactions.find(e=>e.id===s.hiding.id&&e.type==="wardrobe"&&e.wardPortrait):s.floor.shelters?.find(e=>xr(s.player,e)&&e.doors.every(t=>{const n=s.state.doors.find(i=>i.id===t);return n?.wardPortrait&&!n.open&&!n.broken&&n.amount<.05}))}function Fy(s){const e=s.floor,t=(e.shelters||[]).filter(n=>n.doors.every(i=>{const r=s.state.doors.find(o=>o.id===i);return r?.wardPortrait&&!r.broken})).map(n=>{const i={floor:e.id,x:n.x+n.w/2,z:n.z+n.d/2},r=s.nav.path(s.player,i,s.doors.filter(o=>!n.doors.includes(o.id)));return{refuge:i,refugeDistance:r.distance??1/0,sameFloor:r.every(o=>o.floor===e.id),doors:n.doors}}).filter(n=>n.sameFloor&&n.refugeDistance/3.65+n.doors.length*.7+1.2<=7).sort((n,i)=>n.refugeDistance-i.refugeDistance);if(!t.length)for(const n of e.interactions.filter(i=>i.type==="wardrobe"&&i.wardPortrait)){const i={floor:e.id,...n.entry},r=s.nav.path(s.player,i,s.doors);r.length&&r.every(o=>o.floor===e.id)&&r.distance/3.65+1.2<=7&&t.push({refuge:i,refugeDistance:r.distance,doors:[],wardrobe:n.id})}return t.length?{floor:e.id,route:e.mainRoute.map(([n,i])=>({floor:e.id,x:n,z:i})),...t[0],warning:7}:null}function Oy(s,e,t){if(e.phase==="warning"&&(s.state.blackout=!0,s.state.restoredSwitches=[],e.phase="sweeping",s.emit("灯灭了。留在蒋介石画像标记的门内或衣柜里。",3)),e.phase==="leaving"){e.retreat+=t,e.retreat>=1.3&&s.resolveThreat();return}e.sealed=!!Sd(s),e.visible=!e.sealed,e.exposure=e.sealed?0:1,e.sealed||s.fail("patrol"),e.age>=e.warning+3&&(e.phase="leaving",e.retreat=0)}class By{constructor(){this.a=[]}push(e){let t=this.a.length;for(this.a.push(e);t;){const n=t-1>>1;if(this.a[n][0]<=e[0])break;this.a[t]=this.a[n],t=n}this.a[t]=e}pop(){const e=this.a[0],t=this.a.pop();if(this.a.length){let n=0;for(;n*2+1<this.a.length;){let i=n*2+1;if(i+1<this.a.length&&this.a[i+1][0]<this.a[i][0]&&i++,this.a[i][0]>=t[0])break;this.a[n]=this.a[i],n=i}this.a[n]=t}return e}}class ky{constructor(e){this.building=e,this.nodes=[],this.byFloor={},this.cells=new Map,this.cache=new Map;for(const t of e.floors){this.byFloor[t.id]=[];for(let n=2.5;n<30;n+=.5)for(let i=2.5;i<34;i+=.5)if(tn(t,{x:i,z:n},.27)){const r={x:i,z:n,floor:t.id,id:this.nodes.length,edges:[]};this.nodes.push(r),this.byFloor[t.id].push(r),this.cells.set(`${t.id},${i},${n}`,r)}}for(const t of this.nodes)for(const[n,i]of[[.5,0],[-.5,0],[0,.5],[0,-.5],[.5,.5],[.5,-.5],[-.5,.5],[-.5,-.5]]){const r=this.cells.get(`${t.floor},${t.x+n},${t.z+i}`);r&&tn(e.byId[t.floor],{x:t.x+n/2,z:t.z+i/2},.27)&&t.edges.push({to:r.id,cost:Math.hypot(n,i)})}for(const t of e.links){const n=t.from[1],i=n==="A"?8:24,r=this.closest({floor:t.from[0],x:8.8,z:i}),o=this.closest({floor:t.to[0],x:8.8,z:i});r.edges.push({to:o.id,cost:13,core:n}),o.edges.push({to:r.id,cost:13,core:n})}}closest(e,t=[]){let n=null,i=1/0;for(const r of this.byFloor[e.floor]||[]){const o=(r.x-e.x)**2+(r.z-e.z)**2;o<i&&!ti(r.x,r.z,t,.27)&&(n=r,i=o)}return n}path(e,t,n=[],i=!1){const r=m=>i?[]:n.filter(x=>x.floor===m).map(x=>x.block),o=this.closest(e,r(e.floor)),a=this.closest(t,r(t.floor));if(!o||!a)return[];const l=`${o.id}:${a.id}`;if(i&&this.cache.has(l))return this.cache.get(l);const c=new By,h=new Map([[o.id,0]]),u=new Map;for(c.push([0,o.id]);c.a.length;){const[,m]=c.pop(),x=this.nodes[m];if(m===a.id)break;for(const g of x.edges){const p=this.nodes[g.to],b=r(p.floor);if(g.core&&!i&&n.some(w=>(w.floor===x.floor||w.floor===p.floor)&&w.id.endsWith("-"+g.core)&&w.amount<.85)||!i&&(ti(p.x,p.z,b,.27)||!g.core&&!vc(x,p,b)))continue;const _=h.get(m)+g.cost;if(_>=(h.get(p.id)??1/0))continue;h.set(p.id,_),u.set(p.id,{id:m,edge:g});const S=p.floor===a.floor?Math.hypot(p.x-a.x,p.z-a.z):Math.abs(p.floor-a.floor)*3;c.push([_+S,p.id])}}if(!h.has(a.id))return[];const d=[];let f=a.id;for(;f!==o.id;){const m=this.nodes[f],x=u.get(f);d.unshift({x:m.x,z:m.z,floor:m.floor,core:x.edge.core,cost:x.edge.cost}),f=x.id}return d.unshift({x:o.x,z:o.z,floor:o.floor,cost:0}),d.distance=h.get(a.id),i&&(this.cache.size>250&&this.cache.clear(),this.cache.set(l,d)),d}distance(e,t){return this.path(e,t,[],!0).distance??1/0}}const bd=.48,xi=5;function Mo(s){const e=Math.max(0,Math.min(1,s/2));return-2.65*(1-e*e*(3-2*e))}const ni={inspector:{title:"查房者",action:"停住脚步。可以转头。",failure:"它看见你动了。两次检查期间都要停住，转头不会惊动它。"},naiwa:{title:"偷步者",action:"看着它后退，别碰到它；再绕过实体墙。",failure:"它碰到了你。凝视只能阻止它移动，不能保护贴得太近的你。看着它退到拐角，再拉开距离。"},kun:{title:"借路者",action:"躲进衣柜等它走远，或关门绕路。",failure:"它比你跑得快。靠近衣柜按 E 躲藏，等它走远再出来；也可以关门争取撤离时间。"}};ni.liang={title:"良子 · 播报者",action:"找到两个遥控器，再回到电视按 E 关闭。",failure:"电视里的良子膨胀到了极限。跟随透视标记拿齐两个遥控器，再及时回到电视按 E 关闭。"};ni.patrol={title:"汪精卫 · 巡楼者",action:"找蒋介石画像：躲进标记衣柜，或进入标记房间关好门。",failure:"没有画像的门和衣柜挡不住巡楼者。红灯亮起后七秒内，藏进带蒋介石画像的衣柜，或进入画像标记的房间并关好全部门。"};ni.yujie={title:"东北雨姐 · 来访者",action:"别看她。低头或转身，把她完全移出视野。",failure:"理智耗尽，她来拜访你了。雨姐不会移动；看到她会掉理智，低头或转开视线才能停止。"};ni.doubao={title:"棍母",action:"用强光对准它，累计照射五秒。边退边照。",failure:"棍母追上了你。拿起一楼强光手电筒，对准它累计照射五秒；隔墙、关门或躲柜时照射无效。"};const Xe=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Pa=s=>structuredClone(s);class Ed{constructor(e,t=1){this.building=e,this.nav=new ky(e),this.seed=t>>>0,this.reset()}reset(){this.discoveredPortraits=[],this.sanity=100,this.sanityRest=0,this.sanityExposed=!1,this.mode="playing",this.time=0,this.states={},this.threat=null,this.travel=null,this.peek=null,this.hiding=null,this.messages=[],this.resolved=0,this.cooldown=7,this.failure=null,this.pendingCheckpoint=null,this.startedFloors=new Set([5]);for(const e of this.building.floors)this.states[e.id]=this.initialFloor(e);this.player={floor:5,...this.building.byId[5].spawn,y:4*xt},this.checkpoint={floor:5,states:Pa(this.states),resolved:0,sanity:100},this.emit("第五层。地上的旧照片留下了一条通往出口的痕迹。",6)}initialFloor(e){return{photoTrail:Cy(e,this.nav,this.seed),doors:e.doorSpecs.map(t=>({...t,floor:e.id,amount:t.open?1:0,block:os({...t,amount:t.open?1:0}),broken:!1})),interactions:{},blackout:!1,flashlight:!1,liangCleared:!1,gunmuDefeated:!1,yujieFollowup:null,patrolCleared:!1,logKey:!1,doubaoWait:null,exitInspection:!1,exitInspectionWait:null,restoredSwitches:[],events:0,kunWait:30,yujieVisits:0,yujieWait:14+(this.seed+e.id*3)%8,patrols:0,patrolWait:10+(this.seed+e.id)%3,progress:0,propTurns:e.props.map(()=>0),lastAnomaly:0,portraitShift:!1}}get floor(){return this.building.byId[this.player.floor]}beginPatrol(){if(this.threat||this.player.floor>2)return!1;const e=Fy(this);return e?(this.beginEncounter("patrol",e.route[0]),Object.assign(this.threat,e,{routeIndex:1,exposure:0,blockedTime:0,retreat:0}),this.state.patrols++,this.emit("走廊变红了。七秒内躲到蒋介石画像标记的门内或柜内，关好门。",e.warning),!0):!1}get powerSwitchesRequired(){return this.player.floor===2?1:2}get state(){return this.states[this.player.floor]}get portraitTotal(){return this.building.floors.reduce((e,t)=>e+t.interactions.filter(n=>n.type==="portrait").length,0)}get score(){return this.discoveredPortraits.length*100}get doors(){return Object.values(this.states).flatMap(e=>e.doors)}emit(e,t=3){this.messages.push({text:e,duration:t})}obstacles(e,t=!1){const n=this.building.byId[e];return[...n.obstacles,...n.boundaries].filter(i=>!t||!i.glass).concat(this.states[e].doors.filter(i=>i.kind!=="exit"||i.amount<.9).map(i=>i.block))}line(e,t){if(Math.abs(e.floor-t.floor)>1)return!1;const n={...e,y:(e.y??(e.floor-1)*xt)+1.65},i={...t,y:(t.y??(t.floor-1)*xt)+1.65},r=Math.min(n.y,i.y),o=Math.max(n.y,i.y),a=this.building.floors.filter(l=>l.base<=o&&l.base+xt>=r).flatMap(l=>[...l.sightObstacles.filter(c=>t.floor!==l.id||t.propIndex==null||c.propIndex!==t.propIndex),...this.states[l.id].doors.map(c=>({...c.block,minY:l.base,maxY:l.base+2.6}))]);return vc(n,i,a)}renderFloors(){if(this.travel)return[this.travel.from,this.travel.from-1];const e=this.floor,t=this.player,n=t.z<11?"A":t.z>21?"B":null,i=[e.id];return t.x<19.8&&n&&(n===e.departure&&e.id>1?i.push(e.id-1):n===e.arrival&&e.id<5&&i.push(e.id+1)),i}viewed(e,t,n=140){if(this.hiding||!this.renderFloors().includes(e.floor)||Xe(e,this.player)>n||!this.line(this.player,e))return!1;const i=t.yaw||0,r=t.pitch||0,o=e.x-this.player.x,a=e.z-this.player.z,l=(e.y??(e.floor-1)*xt)+1.325-this.player.y-1.65,c=-Math.sin(i)*o-Math.cos(i)*a,h=c*Math.cos(r)+l*Math.sin(r),u=Math.cos(i)*o-Math.sin(i)*a,d=l*Math.cos(r)-c*Math.sin(r),f=Math.tan((t.verticalFov||72*Math.PI/180)/2),m=f*(t.aspect||16/9),x=e.propIndex==null?.85:.8;return h>-.2&&Math.abs(u)<h*m+x&&Math.abs(d)<h*f+1.35}interact(e){if(this.hiding)return e!==this.hiding.id?!1:this.useWardrobe(this.floor.interactions.find(a=>a.id===e));const t=this.threat?.kind==="liang"?this.threat:null,n=t?.remotes.find(a=>a.id===e);if(n)return n.collected||this.player.floor!==n.floor||Xe(this.player,n)>1.8||!this.line(this.player,n)?!1:(n.collected=!0,this.emit(t.remotes.every(a=>a.collected)?"遥控器已集齐。回到电视按 E 关闭！":"拿到一个遥控器。还有一个，跟着标记走。",4),!0);const i=this.state.doors.find(a=>a.id===e);if(i)return i.logLock&&i.locked?this.state.logKey?Xe(this.player,i)>2.65?!1:(this.state.logKey=!1,this.state.exitInspectionWait=1,this.state.yujieFollowup=null,i.locked=!1,i.open=!0,i.held=!1,this.emit("滚木嵌进锁槽，防火门打开了。",4),!0):(this.emit("防火门锁住了。先躲过巡楼，再到南侧第二走廊驱散棍母，取得滚木。",5),!1):i.locked?(this.emit("检修围挡封住了梯段。沿另一侧下楼。"),!1):i.broken?(this.emit("木门已经被撞坏。继续离开。"),!1):(i.open=!i.open,i.held=!1,this.peek=null,this.emit(i.open?"门正在打开。":"门正在合拢。留开门扇的位置。",1.5),!0);const r=this.floor.interactions.find(a=>a.id===e);if(!r)return!1;if(r.type==="flashlight")return this.state.flashlight||Xe(this.player,r.target)>2||!this.line(this.player,{floor:1,...r.target,y:0})?!1:(this.state.flashlight=!0,this.state.interactions[e]=!0,this.emit("强光手电已拾取。对准黑影累计照射五秒，边退边照。",6),!0);if(r.type==="wardrobe")return this.useWardrobe(r);if(r.type==="tv"&&t?.tvId===e)return t.remotes.every(a=>a.collected)?Xe(this.player,r.target)>2.65?!1:(t.closedByPlayer=!0,this.resolveThreat(),!0):(this.emit("先拿齐两个遥控器。标记会一直显示。",3),!1);if(r.type==="switch"&&this.state.blackout){if(this.threat?.kind==="patrol")return this.emit("巡查尚未结束。等它离开后再恢复供电。",3),!1;const a=this.state.restoredSwitches;return a.includes(e)?(this.emit("这个开关已经复位。去找另一个位置的开关。",3),!0):(a.push(e),this.state.interactions[e]=!1,a.length>=this.powerSwitchesRequired?(this.state.blackout=!1,this.emit(this.powerSwitchesRequired===1?"开关已复位。供电恢复。":"两处开关已复位。供电恢复。",4)):this.emit("已复位一处开关。还需要另一个位置的开关。",4),!0)}this.state.interactions[e]=!this.state.interactions[e];const o=this.state.interactions[e];if(r.type==="peek")this.peek=o?e:null,this.emit(o?"观察中 · 转头查看，E 或移动退出":"离开观察孔",2);else if(r.type==="switch")this.emit(o?"这一组灯熄灭了。":"灯亮了。故障的灯管仍不稳定。",2);else if(r.type==="tv")this.emit(o?"屏幕亮了。画面里的人没有眨眼。":"屏幕暗了。",2.5);else if(r.type==="portrait"){if(!this.discoveredPortraits.includes(e))return this.discoveredPortraits.push(e),this.emit(`发现画像 ${this.discoveredPortraits.length} / ${this.portraitTotal} · +100 分`,4),this.state.portraitShift=!this.state.portraitShift,!0;this.state.portraitShift=!this.state.portraitShift,this.emit(o?"照片下没有名字。玻璃上却留着指印。":"画框恢复了原样。",3)}else r.type==="washer"?this.emit(o?"内筒是空的。":"洗衣机门合上了。",2):this.emit(o?r.type==="curtain"?"遮帘拉开了。":"柜门打开。里面只有旧生活的痕迹。":r.type==="curtain"?"遮帘落下了。":"柜门合上了。",2);return!0}useWardrobe(e){if(this.hiding){const t={floor:this.player.floor,...e.entry,y:this.floor.base};return!tn(this.floor,t,.24,this.state.doors.map(n=>n.block))||this.threat?.floor===t.floor&&Xe(this.threat,t)<.85?(this.emit("柜门外有东西挡着。再等一下。",2),!1):(this.player=t,this.hiding=null,this.state.interactions[e.id]=!1,this.threat?.kind==="kun"&&(this.threat.wardrobeAge=0,this.threat.wardrobeRetreat=null,this.threat.pathAge=1,this.threat.lastSeen={...t}),this.emit("离开衣柜。继续往出口走。",2),!0)}return this.travel||Xe(this.player,e.entry)>1.65||(this.player.x-e.x)*Math.sin(e.yaw)+(this.player.z-e.z)*Math.cos(e.yaw)<.48||!this.line(this.player,{floor:this.player.floor,...e.entry})?!1:(this.hiding={id:e.id,entry:{floor:this.player.floor,...e.entry},yaw:e.yaw},this.peek=null,Object.assign(this.player,{x:e.x,z:e.z,y:this.floor.base}),this.state.interactions[e.id]=!0,this.emit(this.threat?.kind==="kun"?"藏好了。坤坤会在外面搜寻，等它离开；按 E 出来。":e.wardPortrait?"画像在柜门上。巡楼者找不到这里，按 E 离开。":"这个柜子没有画像，挡不住巡楼者。按 E 离开。",5),!0)}enterFloor(e){if(this.hiding&&(this.states[this.player.floor].interactions[this.hiding.id]=!1),this.hiding=null,e!==this.player.floor){this.state.yujieFollowup=null;const t=this.threat;t?.kind==="liang"&&(this.states[t.floor].interactions[t.tvId]=!1),this.threat=null,this.debugPendingScare=!1,this.debugLastCatch=null,this.sanityExposed=!1,this.sanityRest=0,this.pendingCheckpoint=null,this.messages=[],this.cooldown=3,this.directorAge=0;const n=this.states[e];n.yujieFollowup=null,n.events=0,n.kunWait=30,n.patrolWait=10+(this.seed+e)%3,n.yujieWait=14+(this.seed+e*3)%8}this.player.floor=e,this.peek=null,this.startedFloors.has(e)||(this.startedFloors.add(e),this.emit(this.building.byId[e].title,4)),[3,1].includes(e)&&e<this.checkpoint.floor&&(this.threat?(this.pendingCheckpoint=e,this.emit("尚未脱险 · 检查点暂未生效",4)):this.saveCheckpoint(e))}saveCheckpoint(e){this.pendingCheckpoint=null,this.checkpoint={floor:e,states:Pa(this.states),resolved:this.resolved,sanity:this.sanity},this.emit("已脱险 · 下次从这一层继续",3)}retry(){const e=this.checkpoint;this.states=Pa(e.states),this.sanity=e.sanity,this.sanityRest=0,this.sanityExposed=!1,this.player={floor:e.floor,...this.building.byId[e.floor].spawn,y:(e.floor-1)*xt},this.threat=null,this.travel=null,this.peek=null,this.hiding=null,this.mode="playing",this.failure=null,this.pendingCheckpoint=null,this.resolved=e.resolved,this.cooldown=5,this.messages=[],this.emit("回到检查点。同一次异常，仍会在前面等你。",4)}fail(e){if(this.debugMode){this.threat&&!this.threat.debugScared&&(this.threat.debugScared=!0,this.debugPendingScare=!0),this.debugLastCatch={kind:e,time:this.time};return}this.mode="lost",this.failure=ni[e].failure,this.lastCatch=e}resolveThreat(){if(!this.threat)return;const e=this.threat;if(e.kind==="kun"&&(this.states[e.floor].kunWait=30),e.kind==="liang"){const t=this.states[e.floor];t.interactions[e.tvId]=!1,e.floor===3&&e.closedByPlayer&&this.mode==="playing"&&(t.liangCleared=!0,t.yujieFollowup=2)}if(e.kind==="yujie"&&(this.states[e.floor].yujieWait=35+(this.seed+e.floor+this.states[e.floor].yujieVisits*7)%16,this.emit("来访者消失了。可以抬头了。",4)),e.kind==="doubao"){const t=this.states[e.floor];t.doubaoWait=null,this.emit("棍母终究还是不存在的。",4),this.mode==="playing"&&e.phase==="leaving"&&e.exposure>=xi&&(t.gunmuDefeated=!0,t.yujieFollowup=3),this.mode==="playing"&&t.patrolCleared&&e.phase==="leaving"&&e.exposure>=xi&&t.doors.some(n=>n.logLock&&n.locked)&&!t.logKey&&(t.logKey=!0,this.emit("棍母终究还是不存在的。获得滚木，前往尽头防火门按 E 开锁。",6))}e.kind==="patrol"&&(e.floor===1&&(this.states[1].doubaoWait=0,this.mode==="playing"&&e.phase==="leaving"&&!e.debugScared&&(this.states[1].patrolCleared=!0)),this.states[e.floor].patrolWait=28+(this.seed+e.floor+this.states[e.floor].patrols*7)%11,this.emit(e.floor===2?"巡楼结束了。按一个灯开关，恢复本层照明。":"巡楼结束了。找到两处不同的开关，恢复本层照明。",5)),this.threat=null,this.resolved++,this.cooldown=9,e.kind!=="patrol"&&e.kind!=="yujie"&&e.kind!=="doubao"&&this.emit(e.exitInspection?"查房结束。打开外门，走出去。":e.kind==="liang"?"信号消失了。现在可以继续走。":"它暂时离开了。继续下楼。",3),this.pendingCheckpoint&&this.saveCheckpoint(this.pendingCheckpoint)}beginEncounter(e,t){if(this.threat||e==="kun"&&(t?.floor??this.player.floor)===2||e==="doubao"&&((t?.floor??this.player.floor)!==1||!this.states[1].flashlight)||e==="yujie"&&(t?.floor??this.player.floor)>3)return!1;const n=t||this.spawnFor(e);if(!n)return!1;const i=e==="liang"?this.planBroadcast(n):null;return e==="liang"&&!i?!1:(this.threat={kind:e,...n,age:0,unseen:0,hidden:0,phase:"warning",checks:0,moving:0,secondChance:!1,lastSeen:{...this.player},searchPoints:[],searched:0,path:[],pathAge:1,searchAge:0,distance:1/0,observed:!1,warning:e==="inspector"?1.6:e==="kun"&&n.floor===1?6:2.8},e==="liang"&&(Object.assign(this.threat,i,{pressure:0,quiet:0,warning:3}),this.states[n.floor].interactions[n.tvId]=!0),e==="doubao"?(Object.assign(this.threat,{warning:2,exposure:0,retreat:0}),this.emit("灯闪了。棍母来了，举起强光对准它！",5),!0):(e==="yujie"?(n.floor===1&&(this.threat.copies=(n.copies||[{floor:n.floor,x:n.x,z:n.z}]).slice(0,1)),this.threat.warning=3,this.threat.retreat=0,this.states[n.floor].yujieVisits++,this.emit("灯光发冷。有人要来拜访了。低头，别看她。",3)):this.emit(ni[e].action,6),!0))}planBroadcast(e){const t=this.building.byId[e.floor],n=t.interactions.find(d=>d.id===e.tvId&&d.type==="tv");if(!n)return null;const i=this.states[e.floor].doors,r=i.flatMap(d=>[0,.5,1].map(f=>os({...d,amount:f}))),o=this.nav.byFloor[e.floor].filter(d=>d.x>10.5&&tn(t,d,.45,r)),a=d=>({floor:e.floor,x:d.x,z:d.z}),l={floor:e.floor,...n.target,y:t.base},c=o.filter(d=>Xe(d,n.target)>=1.3&&Xe(d,n.target)<=2.2&&this.line(l,d)).sort((d,f)=>Xe(d,this.player)-Xe(f,this.player))[0];if(!c)return null;const h=this.nav.path(this.player,c,this.doors);if(!h.length||h.some(d=>d.floor!==e.floor))return null;const u=o.filter((d,f)=>f%7===0&&Xe(d,c)>7&&Xe(d,c)<14).sort((d,f)=>(d.x*13+d.z*31+this.seed)%19-(f.x*13+f.z*31+this.seed)%19);for(const d of u){const f=this.nav.path(c,d,this.doors);if(!f.length||f.some(x=>x.floor!==e.floor)||f.distance>18)continue;const m=Math.max(28,Math.ceil((h.distance+f.distance*2)/2.4+12));if(!(m>45))return{remotes:[c,d].map((x,g)=>({...a(x),id:`${e.tvId}-remote-${g}`,collected:!1})),duration:m}}return null}spawnFor(e){if(e==="doubao")return this.nav.byFloor[1].filter((o,a)=>a%3===0&&Xe(o,this.player)>=11&&Xe(o,this.player)<=16&&this.line(this.player,o)&&tn(this.floor,o,.4,this.state.doors.map(l=>l.block))).sort((o,a)=>Math.abs(Xe(o,this.player)-13)-Math.abs(Xe(a,this.player)-13)).find(o=>{const a=this.nav.path(o,this.player,this.doors);return a.length&&a.every(l=>l.floor===1)})||null;if(e==="yujie"){if(this.player.floor>3)return null;const r=this.state.doors.flatMap(d=>[0,.5,1].map(f=>os({...d,amount:f}))),o=this.nav.byFloor[this.player.floor].filter((d,f)=>f%3===0&&d.x>10.5&&Xe(d,this.player)>=7&&tn(this.floor,d,1.4,r)),a=o.filter(d=>Xe(d,this.player)<=15&&this.line(this.player,d));if(!a.length)return null;let l=(this.seed^Math.imul(this.player.floor,73856093)^Math.imul(this.state.yujieVisits+1,19349663))>>>0;const c=d=>(l=Math.imul(l^l>>>16,73244475)>>>0,d[l%d.length]),h=d=>({floor:d.floor,x:d.x,z:d.z}),u=[h(c(a))];for(;u.length<(this.player.floor===1?1:3);){const d=o.filter(f=>u.every(m=>Xe(f,m)>=4));if(!d.length)break;u.push(h(c(d)))}return{...u[0],copies:u}}if(e==="liang"){const r=this.floor.interactions.find(o=>o.type==="tv"&&Xe(o.target,this.player)<10&&this.line({floor:this.player.floor,...o.target,y:this.floor.base},this.player));return r?{floor:this.player.floor,x:r.target.x,z:r.target.z,tvId:r.id}:null}const t=this.floor.mainRoute;let n=null,i=1/0;for(const[r,o]of t.flatMap((a,l)=>{if(!l)return[a];const c=t[l-1],h=Math.ceil(Math.hypot(a[0]-c[0],a[1]-c[1]));return Array.from({length:h},(u,d)=>[c[0]+(a[0]-c[0])*(d+1)/h,c[1]+(a[1]-c[1])*(d+1)/h])})){const a={x:r,z:o,floor:this.player.floor},l=Xe(a,this.player);if(l<9||l>16||!this.line(a,this.player)||!tn(this.floor,a,.3,this.state.doors.map(d=>d.block)))continue;const c=this.nav.distance(a,{...this.floor.spawn,floor:a.floor}),h=e==="kun"&&c>this.nav.distance(this.player,{...this.floor.spawn,floor:a.floor})-6,u=Math.abs(l-12)+c*.002+(h?1e3:0);u<i&&(n=a,i=u)}return n}updateDoors(e){for(const t of this.doors){const n=t.open?1:0;if(t.amount===n)continue;const i=Math.abs(n-t.amount)<.002?n:t.amount+(n-t.amount)*(1-Math.exp(-8*e)),r=Math.max(1,Math.ceil(Math.abs(i-t.amount)/.035)),o=(i-t.amount)/r,a=(t.floor-1)*xt,l=[this.player,...this.threat?.copies||[this.threat]].filter(h=>h&&(h.y??(h.floor-1)*xt)<a+2.6&&(h.y??(h.floor-1)*xt)+1.6>a),c=t.held;t.held=!1;for(let h=0;h<r;h++){const u=t.amount+o,d=os({...t,amount:u});if(l.some(f=>ti(f.x,f.z,[d],.27))){t.held=!0;break}t.amount=u,t.block=d}t.held&&!c&&t.floor===this.player.floor&&this.emit("门扇被挡住了。侧退一步，它会继续转动；E 可反向开关。",3),!t.held&&Math.abs(t.amount-n)<.001&&(t.amount=n,t.block=os(t),t.floor===this.player.floor&&this.emit(n?t.kind==="exit"?"外门开了。走出去。":"门已打开。":t.kind==="fire"?"防火门合上了。继续离开门口。":"门已合上。",1.8))}}movePlayer(e,t){if(this.hiding)return 0;let n=t.forward||0,i=t.right||0;const r=Math.hypot(n,i);if(!r)return 0;n/=r,i/=r,this.peek&&(this.state.interactions[this.peek]=!1),this.peek=null;const o=t.sprint?3.65:2.4,a=t.yaw||0,l=(-Math.sin(a)*n+Math.cos(a)*i)*o*e,c=(-Math.cos(a)*n-Math.sin(a)*i)*o*e,h={...this.player},u=Math.max(1,Math.ceil(Math.hypot(l,c)/.09)),d=f=>{const m=this.state.doors.map(g=>g.block);if(this.travel)return f.x>8.15&&_o(f,this.travel.core).z>5?tn(this.floor,f,.24,m):Aa(f,this.travel)&&!ti(f.x,f.z,m,.24);const x=this.stairEntry(f);return tn(this.floor,f,.24,m)&&(!x||Aa(f,x))};for(let f=0;f<u;f++){let m={...this.player,x:this.player.x+l/u};d(m)&&(this.player.x=m.x),m={...this.player,z:this.player.z+c/u},d(m)&&(this.player.z=m.z)}return this.updateStairs(),this.player.y=Ay(this.player,this.player.floor,this.travel),Xe(h,this.player)}stairEntry(e){if(e.x>=8.15||e.z>=11&&e.z<21)return null;const t=e.z<15?"A":"B",n=this.player.floor;return t===this.floor.departure&&n>1?{from:n,core:t,phase:"upper"}:t===this.floor.arrival&&n<5?{from:n+1,core:t,phase:"lower"}:null}updateStairs(){if(!this.travel){const n=this.stairEntry(this.player);n&&Aa(this.player,n)&&(this.travel=n)}if(!this.travel)return;const e=this.travel,t=_o(this.player,e.core);t.z<2.4&&(t.x>2.5&&e.phase==="upper"?(e.phase="lower",this.enterFloor(e.from-1)):t.x<2.25&&e.phase==="lower"&&(e.phase="upper",this.enterFloor(e.from))),t.x>6.15&&t.z>5&&(this.enterFloor(e.phase==="lower"?e.from-1:e.from),this.travel=null)}director(e){const t=this.player.floor===1&&this.state.exitInspectionWait!==null;if(t&&(this.state.exitInspectionWait=Math.max(0,this.state.exitInspectionWait-e)),this.hiding)return;if(t||this.player.floor===1&&this.player.x<8.1&&this.player.z>=23&&this.player.z<30.1&&!this.travel){if(t&&this.state.exitInspectionWait>1e-6)return;if(!this.state.exitInspection&&!this.state.doors.find(a=>a.logLock).locked&&(t||!this.threat)){const l=[{x:4.5,z:25.6},{x:6.5,z:26.1},{x:4.5,z:24},{x:6.5,z:29.1},{x:9,z:24},...this.nav.byFloor[1].filter(c=>Xe(c,this.player)<8)].map(c=>({floor:1,...c})).find(c=>Xe(c,this.player)>=2&&this.line(this.player,c)&&tn(this.floor,c,.3,this.state.doors.map(h=>h.block)));l&&(t&&(this.threat?.kind==="liang"&&(this.state.interactions[this.threat.tvId]=!1),this.threat=null,this.sanityExposed=!1,this.debugPendingScare=!1),this.beginEncounter("inspector",l)&&(this.state.exitInspection=!0,this.state.exitInspectionWait=null,this.threat.exitInspection=!0,this.threat.warning=2,this.emit("出口前还有一次查房。停住脚步，可以转头。",5)))}return}if(this.cooldown=Math.max(0,this.cooldown-e),this.travel||this.mode!=="playing"||this.player.floor===1&&!this.state.flashlight)return;if(this.player.floor===1&&this.state.doubaoWait!==null){if(this.player.x<10.5||this.player.z<21)return;if(this.state.doubaoWait=Math.max(0,this.state.doubaoWait-e),this.state.doubaoWait===0&&!this.threat){this.beginEncounter("doubao")||(this.state.doubaoWait=3);return}return}if([1,3].includes(this.player.floor)&&this.state.yujieFollowup!==null){if(this.threat)return;this.state.yujieFollowup=Math.max(0,this.state.yujieFollowup-e),this.state.yujieFollowup<1e-6&&(this.beginEncounter("yujie")?this.state.yujieFollowup=null:this.state.yujieFollowup=.5);return}if(this.state.blackout)return;[1,4].includes(this.player.floor)&&this.threat?.kind!=="kun"&&(this.state.kunWait=Math.max(0,this.state.kunWait-e)),this.player.floor<=2&&!this.threat&&(this.state.patrolWait=Math.max(0,this.state.patrolWait-e)),[1,3].includes(this.player.floor)&&!this.threat&&(this.state.yujieWait=Math.max(0,this.state.yujieWait-e));const n=this.state,i=this.floor;if(this.directorAge=(this.directorAge||0)+e,this.directorAge<.35)return;this.directorAge=0;const r=this.nav.distance(this.player,{floor:i.id,...i.destination}),o=this.nav.distance({floor:i.id,...i.spawn},{floor:i.id,...i.destination});if(n.progress=Math.max(n.progress,Math.max(0,Math.min(1,1-r/o))),[1,4].includes(i.id)&&!this.threat&&this.cooldown===0&&n.kunWait===0&&!(i.id===1&&this.player.x<8&&this.player.z>29.4)&&!(i.id<=2&&n.patrolWait===0)){this.beginEncounter("kun")?i.id===4&&n.events===0&&(n.events=1):n.kunWait=3;return}if((i.id===3&&n.liangCleared||i.id===1&&n.gunmuDefeated)&&!this.threat&&this.cooldown===0&&n.yujieWait===0&&!(i.id===1&&this.player.x<8&&this.player.z>29.4)&&!(i.id<=2&&n.patrolWait===0)){this.beginEncounter("yujie")||(n.yujieWait=3);return}if(i.id<=2){if(this.threat||this.cooldown>0||i.id===1&&this.player.x<8&&this.player.z>29.4)return;if(n.patrolWait===0&&n.doubaoWait===null){this.beginPatrol()||(n.patrolWait=3);return}if(n.patrols>0&&n.events<1&&n.progress>.55&&n.patrolWait>12){const a=["naiwa","liang"][(this.seed+i.id)%2];this.beginEncounter(a)&&n.events++}return}if(!this.threat&&this.cooldown===0&&n.events<2&&n.progress>=[.12,.58][n.events]){const a={5:["inspector","naiwa"],4:["kun","naiwa"],3:["liang","naiwa"]},l=["inspector","naiwa","kun","liang"],c=a[i.id]?.[n.events]||l[(this.seed+i.id+n.events*2)%l.length];this.beginEncounter(c)&&n.events++}}planSearch(e){const t=this.building.byId[e.lastSeen.floor],n=[...t.mainRoute.map(([i,r])=>({x:i,z:r,floor:t.id})),...this.nav.nodes.filter((i,r)=>i.floor===e.floor&&r%13===0&&Xe(i,e)<12)];e.searchPoints=[];for(const i of n.sort((r,o)=>Xe(r,e.lastSeen)-Xe(o,e.lastSeen))){if(Xe(i,e.lastSeen)<2||e.searchPoints.some(a=>Xe(i,a)<4))continue;const r=this.nav.path(e,i,this.doors),o=r.at(-1);if(!(!o||r.distance<1)&&(e.searchPoints.push({...o}),e.searchPoints.length===2))break}e.searched=0,e.searchAge=0}escapeRoute(e){if(e.kind!=="wood")return null;const t=this.state.doors.find(o=>o.kind==="wood"&&o.id!==e.id&&o.open);if(!t)return null;const n=this.player.x<e.x?-1:1,i={floor:this.player.floor,x:t.x+n*1.6,z:t.z},r=this.nav.path(this.player,i,this.doors);return r.length&&r.distance>2?r:null}travelActor(e,t,n,i){if(e.link){const o=e.link,a=this.states[o.to].doors.find(u=>u.id===`${o.to}-${o.core}`);o.blocked&&a.amount>.85&&(o.blocked=!1,e.searched=0,e.trail=o.destination);let l=Math.min(1,o.progress+t*n/13);if(o.blocked){const u=e.searched===0?.8:.6;l=Math.max(u,o.progress-t*n/13),l===u&&e.searched<2&&e.searched++}const c=Ry(o.from,o.core,o.down?l:1-l),h=l>.5?o.to:o.down?o.from:o.from-1;if(this.states[h].doors.some(u=>ti(c.x,c.z,[u.block],.27))){o.progress<.2?(e.link=null,e.trail=null,e.path=[],e.pathAge=1):(o.blocked=!0,e.trail=null,e.searchPoints=[],e.searched=0);return}o.progress=l,Object.assign(e,c),e.floor=h,l>=1&&(Object.assign(e,o.destination),e.link=null,e.path=[],e.pathAge=1);return}if(e.pathAge+=t,e.pathAge>.5){for(e.path=this.nav.path(e,i,this.doors),e.pathAge=0;e.path.length&&e.path[0].floor===e.floor&&Xe(e,e.path[0])<.035;)e.path.shift();const o=e.path[1];if(e.path.length>1&&Xe(e,e.path[0])<.35&&o.floor===e.floor){const a=Math.ceil(Xe(e,o)/.08),l=this.states[e.floor].doors.map(h=>h.block);let c=!0;for(let h=1;h<=a;h++)if(!tn(this.building.byId[e.floor],{x:e.x+(o.x-e.x)*h/a,z:e.z+(o.z-e.z)*h/a},.27,l)){c=!1;break}c&&e.path.shift()}}let r=n*t;for(;r>0&&e.path.length;){const o=e.path[0];if(o.floor!==e.floor){const h=o.floor<e.floor;e.link={from:Math.max(e.floor,o.floor),to:o.floor,core:o.core,down:h,progress:0,destination:o},e.path=[];return}const a=Xe(o,e);if(a<.01){e.path.shift();continue}const l=Math.min(r,a),c={x:e.x+(o.x-e.x)*l/a,z:e.z+(o.z-e.z)*l/a};if(!tn(this.building.byId[e.floor],c,.26,this.states[e.floor].doors.map(h=>h.block))){e.pathAge=1;return}e.x=c.x,e.z=c.z,r-=l,l===a&&e.path.shift()}e.y=(e.floor-1)*xt}blockedDoor(e){const t=this.nav.path(e,e.lastSeen,[],!0);for(const n of t){const i=this.states[n.floor].doors.find(r=>!r.open&&!r.locked&&!r.broken&&Xe(r,n)<1.5);if(i)return i}return null}updateThreat(e,t,n){this.sanityExposed=!1;const i=this.threat;if(!i||(i.age+=e,i.visible=this.line(i,this.player),i.observed=this.viewed(i,t),i.distance=Math.hypot(i.x-this.player.x,i.z-this.player.z,(i.y??(i.floor-1)*xt)-this.player.y),i.kind==="patrol"&&(i.sealed=!!Sd(this)),i.age<i.warning&&i.kind!=="doubao"))return;if(i.kind==="doubao"){if(i.phase==="leaving"){i.retreat+=e,i.retreat>=1&&this.resolveThreat();return}i.phase=i.age<i.warning?"rising":"pursuing";const c=i.x-this.player.x,h=i.z-this.player.z,u=(i.y??0)+Math.max(.08,(2.65+Mo(i.age))/2)-this.player.y-1.65,d=Math.hypot(c,u,h),f=t.yaw||0,m=t.pitch||0,x=((-Math.sin(f)*c-Math.cos(f)*h)*Math.cos(m)+u*Math.sin(m))/Math.max(.001,d);if(i.illuminated=this.states[1].flashlight&&!this.hiding&&!this.peek&&this.line(this.player,{...i,y:(i.y??0)+Math.max(.08,(2.65+Mo(i.age))/2)-1.65})&&d<=18&&x>=Math.cos(bd),i.illuminated&&(i.exposure=Math.min(xi,i.exposure+e)),i.exposure>=xi-1e-6){i.exposure=xi,i.phase="leaving";return}if(i.age<i.warning)return;i.lastSeen={...this.hiding?this.hiding.entry:this.player};const g=this.blockedDoor(i);g&&g.floor===i.floor&&Xe(i,g)<2.5&&(i.doorId!==g.id&&(i.doorId=g.id,i.doorTime=0,this.emit("门把手动了。准备好强光。",2)),i.doorTime+=e,i.doorTime>=1.2&&(g.open=!0,i.pathAge=1)),(!this.hiding||Xe(i,this.hiding.entry)>6.5)&&this.travelActor(i,e,3.85,i.lastSeen),!this.hiding&&Xe(i,this.player)<.72&&this.line(i,this.player)&&this.fail("doubao");return}if(i.kind==="kun"&&this.hiding){if(i.wardrobeAge=(i.wardrobeAge||0)+e,i.phase=i.wardrobeAge<6?"wardrobe-search":"wardrobe-leaving",i.wardrobeAge<6)this.travelActor(i,e,3.2,this.hiding.entry);else{if(!i.wardrobeRetreat){const c=this.nav.byFloor[i.floor].filter((h,u)=>u%13===0&&Xe(h,this.hiding.entry)>6&&Xe(h,this.hiding.entry)<10);i.wardrobeRetreat=c.find(h=>{const u=this.nav.path(i,h,this.doors);return u.length&&u.distance<14})||{floor:i.floor,x:i.x,z:i.z},i.pathAge=1,this.emit("它正在走远。继续待在柜内。",3)}this.travelActor(i,e,3.2,i.wardrobeRetreat)}i.wardrobeAge>=8.5&&this.resolveThreat();return}if(i.kind==="patrol"){Oy(this,i,e);return}if(i.kind==="yujie"){if(i.phase==="warning"){if(i.copies=(i.copies||[{floor:i.floor,x:i.x,z:i.z}]).filter(c=>Xe(c,this.player)>=2.4&&tn(this.building.byId[c.floor],c,1.4,this.states[c.floor].doors.map(h=>h.block))),!i.copies.length){this.resolveThreat();return}Object.assign(i,i.copies[0])}if(i.age>=i.warning+22){i.phase="leaving",i.retreat+=e,i.retreat>=1.3&&this.resolveThreat();return}i.phase="watching",i.observed=(i.copies||[i]).some(c=>this.viewed(c,t,32)),this.sanityExposed=i.observed,i.observed&&(this.sanityRest=0,this.sanity=Math.max(0,this.sanity-e*44),this.sanity<=30&&!i.secondChance&&(i.secondChance=!0,this.emit("别再看了。低头！",2)),this.sanity===0&&this.fail("yujie"));return}if(i.kind==="liang"){i.phase="broadcasting",i.pressure=Math.min(1,(i.age-i.warning)/i.duration),i.pressure>.75&&!i.secondChance&&(i.secondChance=!0,this.emit("画面快撑破了。拿齐遥控器，立即关电视！",4)),i.pressure>=1&&this.fail("liang");return}if(i.kind==="inspector"){const c=i.age-i.warning,h=c<3?0:c<4.2?1:c<7.2?2:3;if(i.phase=h===0||h===2?"checking":h===1?"between":"leaving",i.checks=c<3?0:c<7.2?1:2,i.movementLocked&&n>0){this.fail("inspector");return}if(i.phase==="checking"&&n>0&&i.moveDeadline==null&&(i.moveDeadline=i.age+.5,this.emit("它看见你动了。半秒内停住！",2)),i.moveDeadline!=null){if(n===0)i.moveDeadline=null,i.movementLocked=!0;else if(i.age>=i.moveDeadline-1e-6){this.fail("inspector");return}}c>=8.5&&this.resolveThreat();return}i.phase="pursuing",i.visible?(i.lastSeen={...this.player},i.hidden=0,i.searchPoints=[],i.searched=0,i.trail=null):(i.hidden+=e,!i.trail&&!i.link?.blocked&&!i.searchPoints.length&&i.hidden>.8&&this.planSearch(i)),i.unseen=i.observed?0:i.unseen+e;const r=i.kind==="naiwa"&&(i.observed||i.unseen<.6),o=i.kind==="kun"?4.25:2.95,a=this.blockedDoor(i);if(a&&a.floor===i.floor&&Xe(i,a)<3.1&&i.kind==="kun"){if(i.doorId!==a.id){i.doorId=a.id,i.doorTime=0;const c=this.escapeRoute(a);i.breachAllowed=!!c,i.breachWarning=Math.max(4,(c?.distance||0)/3.65+1.5),i.breachAllowed?this.emit("木门开始变形。离开门口，从另一边撤离！",i.breachWarning):this.emit("门外的影子停住了。继续拉开距离。",4)}if(i.breachAllowed&&!this.escapeRoute(a)&&(i.breachAllowed=!1,this.emit("门外停了下来。撤离通路被关上了。",3)),i.doorTime+=e,i.phase=i.breachAllowed?"breaching":"held",i.breachAllowed&&i.doorTime>=i.breachWarning)a.broken=!0,a.open=!0,i.pathAge=1,i.doorId=null,this.emit("门被撞开了。继续走！",3);else if(i.doorTime<4||i.breachAllowed)return}const l=i.visible?this.player:i.trail||(i.searched<i.searchPoints.length?i.searchPoints[i.searched]:i.lastSeen);if(r||this.travelActor(i,e,o,l),i.trail?i.floor===i.trail.floor&&Xe(i,i.trail)<.65?(i.lastSeen={...i.trail},i.trail=null,this.planSearch(i)):!i.link&&i.path.length===0?(i.trailBlocked=(i.trailBlocked||0)+e,i.trailBlocked>4&&(i.trail=null,this.planSearch(i))):i.trailBlocked=0:i.visible||(i.searchAge+=e,i.searchPoints.length&&i.searched<i.searchPoints.length&&i.floor===l.floor&&Xe(i,l)<.65?(i.searched++,i.searchAge=0,i.pathAge=1):i.searchAge>10&&i.path.length===0&&!i.link&&this.planSearch(i)),i.hidden>2&&i.searched>=2&&(i.rangeAge=(i.rangeAge||0)+e,i.rangeAge>.6)){i.rangeAge=0;const c=this.nav.distance(i,this.player);if(Number.isFinite(c)&&c>=(i.kind==="kun"?12:8)){this.resolveThreat();return}}i.distance=Math.hypot(i.x-this.player.x,i.z-this.player.z,(i.y??(i.floor-1)*xt)-this.player.y),i.distance<.72&&this.line(i,this.player)&&this.fail(i.kind)}tick(e,t={}){if(this.mode!=="playing")return;e=Math.min(.1,Math.max(0,e)),this.time+=e,this.updateDoors(e);const n=this.movePlayer(e,t);if(this.player.floor===1&&this.player.x<7.5&&this.player.z>30.1&&this.state.doors.find(i=>i.kind==="exit").amount>.85){this.mode="won",this.threat=null;return}this.director(e),this.updateThreat(e,t,n),this.mode==="playing"&&!this.sanityExposed&&(this.sanityRest+=e,this.sanityRest>2&&(this.sanity=Math.min(100,this.sanity+e*6)))}}try{_c(JSON.parse(localStorage.getItem("extra-floor-settings")||"{}").language)}catch{}const Td=Sy(document.body);Td();const Ol=new URLSearchParams(location.search),zi=Ol.has("debug")&&!Ol.has("qa"),So={calm:!0,xray:!0};let wd;const oe=s=>document.getElementById(s),dr=oe("game");let rn;try{rn=new Bv({canvas:dr,antialias:!0,powerPreference:"high-performance"})}catch(s){throw oe("load-status").textContent=Ye("无法启动 WebGL。请在 Chrome 或 Edge 中开启硬件加速。"),oe("start").disabled=!1,oe("start").textContent=Ye("重新加载"),oe("start").onclick=()=>location.reload(),s}rn.outputColorSpace=Ct;rn.toneMapping=Hl;rn.toneMappingExposure=1.4;const Vt=new Mp;Vt.background=new ze(1055254);Vt.fog=new nc(1055254,.033);const Sc=new wm(12175279,2504495,.72);Vt.add(Sc);const at=new jt(72,1,.055,140);at.rotation.order="YXZ";Vt.add(at);const Vi=new st(new It(2,2),new dn({transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"void main(){gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"void main(){gl_FragColor=vec4(.004,.006,.005,1.);}"}));Vi.frustumCulled=!1;Vi.renderOrder=19;Vi.visible=!1;Vt.add(Vi);const Jn=new cd(14935502,12,16,.64,.78,1.7);Jn.position.set(.12,-.12,0);Jn.target.position.set(0,-.12,-6);at.add(Jn,Jn.target);const Cs=new Lt;Cs.position.set(.24,-.27,-.46);Cs.scale.setScalar(.82);at.add(Cs);for(const[s,e,t]of[[.035,.24,0],[.06,.09,-.15]]){const n=new st(new Kn(s,s,e,12),new Gt({color:t===0?2568492:4412234}));n.rotation.x=Math.PI/2,n.position.z=t,Cs.add(n)}Cs.visible=!1;const Ps=new st(new Kn(.075,.085,.48,10),[new Yt({color:9204043,map:Li("wood"),roughness:1}),new Yt({color:11242071,roughness:1}),new Yt({color:11242071,roughness:1})]);Ps.position.set(-.3,-.3,-.58);Ps.scale.setScalar(.85);Ps.rotation.set(.65,0,-.35);Ps.visible=!1;at.add(Ps);const Fi=document.createElement("div");Fi.className="remote-marker";Fi.hidden=!0;document.body.append(Fi);const Pi=new N,Ad=[],mi={},Rd={},vi={},Po={},Bl={},gu=new Gm,zt=new Set,er=[];let us,V,bc,Oe="loading",Ss=0,Zt=-Math.PI/2,nn=0,Ia=0,ds=0,xu=0;const gn=new Map;let _u,nt=null,_r=!1,kl=!1,Cd=0,Pd=0,qs=0,fr=0,zl=!1,yi=Mc(0);const On=new My,zy=matchMedia("(prefers-reduced-motion: reduce)").matches,yt={quality:"medium",volume:35,sensitivity:65,bob:!1,reduced:zy,language:_d()};try{Object.assign(yt,JSON.parse(localStorage.getItem("extra-floor-settings")||"{}"))}catch{}["low","medium","high"].includes(yt.quality)||(yt.quality="medium");for(const s of["volume","sensitivity"])yt[s]=Math.max(s==="volume"?0:20,Math.min(s==="volume"?100:150,Number(yt[s])||0));yt.language=_c(yt.language);const Ec=()=>{try{localStorage.setItem("extra-floor-settings",JSON.stringify(yt))}catch{}};function Tc(){const s={low:.8,medium:1,high:1.5}[yt.quality];rn.setPixelRatio(Math.min(devicePixelRatio,s,Math.sqrt(21e5/(innerWidth*innerHeight)))),rn.setSize(innerWidth,innerHeight,!1),at.aspect=innerWidth/innerHeight,at.updateProjectionMatrix()}addEventListener("resize",Tc);Tc();let Id=null,Ld="";function Io(s,e=4){Oe!=="scare"&&(Ld=s,oe("subtitle").textContent=Ye(s),oe("subtitle").classList.add("shown"),Cd=e)}function Dd(s){oe("chapter").querySelector("strong").textContent=Ye(s.title),oe("chapter").querySelector("span").textContent=Ye(`0${s.id} / ${s.tag}`),oe("chapter").classList.add("shown"),Pd=2.6}function Vl(s="click"){yt.volume&&On.play(s,s==="scare"?.55:.3)}function Nd(){if(!zi)try{const s=dr.requestPointerLock?.();s?.catch&&s.catch(()=>Io("按住鼠标拖动观察 · 方向键也可转头",4))}catch{}}function Lo(){kl=!1,document.pointerLockElement&&document.exitPointerLock()}function Gi(s){oe("hud").hidden=!s,oe("crosshair").hidden=!s,s||(oe("interact").hidden=!0,oe("threat").hidden=!0)}function Vy(){const s=V?.floor.interactions.find(i=>i.type==="flashlight"),e=Oe==="playing"&&s&&!V.state.flashlight;Fi.hidden=!e,e&&(Pi.set(s.x,1.1,s.z).project(at),Pi.z>1&&(Pi.x=-Math.sign(Pi.x||1)*2,Pi.y=0),Fi.style.left=`${Et.clamp((Pi.x+1)*50,12,88)}%`,Fi.style.top=`${Et.clamp((1-Pi.y)*50,20,80)}%`,Fi.textContent=Ye("强光手电筒")+` · ${Math.round(Math.hypot(s.x-V.player.x,s.z-V.player.z))} m`);const t=oe("guide");if(t.hidden=Oe!=="playing"||!!V.threat||!!V.hiding||!!V.peek||oe("subtitle").classList.contains("shown"),t.hidden)return;const n=Ye(e?"先到大厅东侧带画像的双门避险房拿强光手电筒。靠近按 E。":V.player.floor===1?V.state.logKey?"已获得滚木。跟随旧照片到尽头防火门，按 E 开锁。":V.state.doors.find(i=>i.logLock).locked?V.state.patrolCleared?"前往南侧第二走廊。准备强光，驱散棍母可获得滚木。":"先躲过巡楼。红灯亮起时，藏进画像标记的门内或柜内。":"跟随旧照片到外门。按 E 开门，再走到室外。":"跟随地上散落的旧照片，找到楼梯，继续下楼。");oe("guide-copy").textContent!==n&&(oe("guide-copy").textContent=n)}function Ud(){const s=V.floor.id===2,e=zi&&So.calm;Vt.fog.color.setHex(e?8754315:s?4805707:1055254),Vt.background.copy(Vt.fog.color),Vt.fog.density=e?.006:s?.018:.033,Sc.intensity=e?2:s?1.05:.72,Jn.intensity=e?3:12,document.body.classList.toggle("debug-calm",e)}function Do(){if(V.debugMode=zi,V.debugCalm=zi&&So.calm,_u!==V.states){for(const t of gn.values())t.dispose();gn.clear(),_u=V.states}const s=V.renderFloors();for(const t of s)gn.has(t)||gn.set(t,Dy(Vt,mi,us.byId[t],V.states[t],Rd));for(const[t,n]of gn)s.includes(t)||(n.dispose(),gn.delete(t));for(const[t,n]of gn){for(const i of n.stairGroups)i.group.visible=t===i.from||!gn.has(i.from);for(const i of n.lights)i.visible=t===V.player.floor}if(bc=gn.get(V.player.floor),Ss===V.player.floor)return;Ss=V.player.floor;const e=V.floor;Ud(),oe("floor-label").textContent=Ye(`0${e.id} / ${e.title}`),Oe==="playing"&&Dd(e)}function vr(){at.position.set(V.player.x,V.player.y+1.65,V.player.z),at.rotation.set(nn,Zt,0)}function No(s=!1){Uo(),s?V.retry():V=new Ed(us,crypto.getRandomValues(new Uint32Array(1))[0]),Oe="playing",Ss=0,zt.clear(),Zt=0,nn=0,Do(),vr(),oe("menu").hidden=!0,oe("pause").hidden=!0,oe("ending").hidden=!0,oe("fade").classList.remove("active"),oe("scare").classList.remove("shown"),Gi(!0),On.stop(),On.unlock().catch(e=>console.warn("Audio unlock failed",e.message)),Nd(),fr=.35,er.length=0,s||Io("到一楼出去。跟着地上的旧照片找到每层出口。E 操作。",6)}function yr(){Oe==="playing"&&(On.stop(),Oe="paused",zt.clear(),_r=!1,Lo(),oe("pause").hidden=!1,Gi(!1))}function wc(){Oe==="paused"&&(Oe="playing",oe("pause").hidden=!0,Gi(!0),fr=.5,Nd())}function Ac(){Uo(),On.stop(),Oe="menu",zt.clear(),Lo(),oe("menu").hidden=!1,oe("pause").hidden=!0,oe("ending").hidden=!0,oe("fade").classList.remove("active"),oe("scare").classList.remove("shown"),oe("subtitle").classList.remove("shown"),oe("chapter").classList.remove("shown"),Gi(!1),V=new Ed(us,8),Ss=0,Do(),V.player.x=30.6,V.player.z=8.4,vr(),Zt=1.1,nn=.01,Object.values(vi).forEach(s=>s.visible=!1)}function Fd(s){Uo(),Vi.visible=!s,On.stop(),Oe=s?"won":"lost",zt.clear(),Lo(),Gi(!1),oe("ending").hidden=!1,oe("scare").classList.remove("shown"),oe("vignette").classList.remove("danger"),oe("subtitle").classList.remove("shown"),oe("chapter").classList.remove("shown"),oe("end-en").textContent=s?"OUTSIDE / 01":"THE SAME NIGHT",oe("end-title").textContent=Ye(s?"你出来了。":"它还在这一层。"),oe("end-copy").textContent=Ye(s?`用时 ${Math.floor(V.time/60)} 分 ${Math.floor(V.time%60)} 秒，摆脱 ${V.resolved} 次异常。身后，第五层的灯又亮了。`:`${V.failure} 从 ${V.checkpoint.floor} 楼继续，异常次序保持不变。`),oe("end-stats").textContent=Ye(`发现画像 ${V.discoveredPortraits.length} / ${V.portraitTotal} · 得分 ${V.score}`),oe("restart").innerHTML=Ye(s?"再走一次":`从 ${V.checkpoint.floor} 楼继续`)+" <span>↗</span>",oe("new-run").hidden=s}function Uo(){Vi.visible=!1,document.body.classList.remove("is-scaring"),oe("scare").classList.remove("shown");for(const s of[...Object.values(Po),...Object.values(vi)])s.visible=!1}function vu(){Oe="scare",qs=0,zl=!1,yi=Mc(0,yt.reduced),On.stop(),zt.clear(),_r=!1,Lo(),Gi(!1),oe("peek").hidden=!0,oe("chapter").classList.remove("shown"),oe("subtitle").classList.remove("shown"),oe("vignette").classList.remove("danger"),oe("scare").classList.add("shown"),document.body.classList.add("is-scaring")}function Od(){if(V.hiding){nt=V.floor.interactions.find(e=>e.id===V.hiding.id),oe("interact").hidden=Oe!=="playing",oe("interact").querySelector("span").textContent=Ye("离开衣柜");return}nt=null,gu.setFromCamera(new Ae,at);for(const e of gu.intersectObjects(bc.interactables,!1)){if(e.distance>2.65)break;const t=e.object.userData.target,n=V.state.doors.find(o=>o.id===t),i=V.floor.interactions.find(o=>o.id===t);if(i?.type==="flashlight"&&V.state.flashlight)continue;const r=V.obstacles(Ss,!0).filter(o=>o!==n?.block&&!(e.point.x>=o.minX-.08&&e.point.x<=o.maxX+.08&&e.point.z>=o.minZ-.08&&e.point.z<=o.maxZ+.08));if(vc(V.player,{x:e.point.x,z:e.point.z},r)){nt=n||i;break}}const s=V.threat?.kind==="liang"?V.threat.remotes.find(e=>!e.collected&&Math.hypot(e.x-V.player.x,e.z-V.player.z)<=1.8&&V.line(V.player,e)):null;if(s&&(nt={...s,type:"remote",label:"遥控器"}),V.threat?.kind==="liang"&&V.threat.remotes.every(e=>e.collected)){const e=V.floor.interactions.find(t=>t.id===V.threat.tvId);Math.hypot(e.target.x-V.player.x,e.target.z-V.player.z)<=2.65&&V.line(V.player,V.threat)&&(nt=e)}if(oe("interact").hidden=!nt||Oe!=="playing",nt){const e=V.state.interactions[nt.id];oe("interact").querySelector("span").textContent=nt.kind?nt.locked?Ye(nt.logLock?V.state.logKey?"使用滚木开锁":"防火门已锁 · 需要滚木":"查看封闭梯段"):nt.broken?Ye("木门已损坏"):[nt.held?Ye("门扇受阻")+" · ":"",Ye(nt.open?"关闭":"打开")," ",Ye(nt.kind==="fire"?"防火门":nt.kind==="exit"?"外门":"木门")].join(""):Ye(nt.label)+" · "+Ye(nt.type==="wardrobe"?"躲入":["remote","flashlight"].includes(nt.type)?"拾取":nt.type==="switch"&&V.state.blackout?V.state.restoredSwitches.includes(nt.id)?"已复位":"复位":nt.type==="switch"?e?"开灯":"关灯":nt.type==="peek"?"观察":nt.type==="portrait"?V.discoveredPortraits.includes(nt.id)?"已发现":"近看":e?"关闭":"打开")}}function Gy(){if(Oe==="playing"){if(V.peek){V.interact(V.peek);return}if(nt?.type==="wardrobe"){V.interact(nt.id)&&(V.hiding&&(Zt=V.hiding.yaw+Math.PI,nn=0),vr(),Vl("switch"));return}nt&&V.interact(nt.id)&&Vl(["remote","flashlight"].includes(nt.type)?"pickup":nt.type==="tv"?V.state.interactions[nt.id]?"switch":"power-off":nt.kind||nt.type==="switch"?"switch":"click")}}function Bd(){const s=V.threat,e=oe("threat");if(e.hidden=!s||Oe!=="playing",oe("vignette").classList.toggle("danger",!!s&&Oe==="playing"&&s.age>s.warning&&(s.kind!=="yujie"||V.sanityExposed)),oe("sanity").hidden=V.player.floor>3&&V.sanity>=100,oe("sanity-value").textContent=Ye(`理智 ${Math.ceil(V.sanity)} / 100`),oe("sanity-fill").style.transform=`scaleX(${V.sanity/100})`,oe("sanity").classList.toggle("draining",V.sanityExposed),s){let t=ni[s.kind].action,n=0;if(s.kind==="yujie")t=s.age<s.warning?"来访将至 · 低头或转开视线":s.phase==="leaving"?"她正在消失 · 继续避开视线":s.observed?"正在失去理智 · 低头或转身":"视线已避开 · 可以低头继续走",n=V.sanity/100;else if(s.kind==="doubao")t=s.phase==="leaving"?"黑影正在消散":`${s.illuminated?"强光命中":"对准黑影"} · 照射 ${s.exposure.toFixed(1)} / ${xi} 秒`,n=s.exposure/xi;else if(s.kind==="patrol")t=s.age<s.warning?s.sealed?`巡楼将至 · ${Math.ceil(s.warning-s.age)} 秒 · 画像保护中`:`巡楼将至 · ${Math.ceil(s.warning-s.age)} 秒 · 找蒋介石画像的门或柜`:s.phase==="leaving"?"巡楼者正在退去 · 再等一下":s.sealed?"画像保护中 · 等待巡查结束":"没有画像保护 · 危险",n=s.age<s.warning?s.age/s.warning:Math.min(1,(s.age-s.warning)/3);else if(s.kind==="liang"){const i=s.remotes.filter(r=>r.collected).length;t=`遥控器 ${i} / 2 · 剩余 ${Math.ceil(Math.max(0,s.warning+s.duration-s.age))} 秒`+(i===2?" · 回到电视按 E 关闭":""),n=1-s.pressure}else s.age<s.warning?(t=`${ni[s.kind].action} · 它正在注意你`,n=s.age/s.warning):s.kind==="inspector"?(t=s.phase==="checking"?`静止检查 ${s.checks+1} / 2 · 可以转头`:s.phase==="between"?"第一次通过。它还没有走。":"两次检查通过，等它退去。",n=s.checks/2,s.phase==="checking"&&(n+=Math.min(1,(s.age-s.warning-(s.checks?4.2:0))/3)*.5)):s.phase==="wardrobe-search"||s.phase==="wardrobe-leaving"?(t=s.phase==="wardrobe-search"?"藏好 · 它还在柜外搜寻":"它正在走远 · 继续等候",n=1-s.wardrobeAge/8.5):s.phase==="breaching"?(t="木门正在变形 · 从另一边离开",n=Math.min(1,s.doorTime/s.breachWarning)):s.phase==="held"?t="门挡住了它 · 继续绕过实体墙":s.kind==="naiwa"&&(t=s.observed?"它停住了 · 后退，别靠近":"它仍在寻找你 · 绕过实体墙，拉开距离");s.kind==="inspector"&&s.movementLocked&&(t="已经被盯上。再次移动会被抓，可以转头。"),s.kind==="inspector"&&s.moveDeadline!=null&&(t="它看见你动了。半秒内停住！",n=Math.max(0,(s.moveDeadline-s.age)/.5)),oe("threat-name").textContent=Ye(ni[s.kind].title),oe("threat-action").textContent=Ye(t),oe("threat-progress").style.transform=`scaleX(${Math.max(.025,n)})`,e.dataset.kind=s.kind}oe("checkpoint").textContent=V.state.blackout?Ye(`本层断电 · 复位开关 ${V.state.restoredSwitches.length} / ${V.powerSwitchesRequired}`):Ye(V.pendingCheckpoint?"尚未脱险 · 检查点待生效":`继续点 · ${V.checkpoint.floor} 楼`)}const lo=new Float32Array(144),Rc=new Bt;Rc.setAttribute("position",new Ht(lo,3));const bo=document.createElement("canvas");bo.width=bo.height=32;const Cc=bo.getContext("2d"),Fo=Cc.createRadialGradient(16,16,0,16,16,16);Fo.addColorStop(0,"white");Fo.addColorStop(.2,"#fff1bb");Fo.addColorStop(1,"transparent");Cc.fillStyle=Fo;Cc.fillRect(0,0,32,32);const Hy=new uc(bo),pr=new $u(Rc,new hc({map:Hy,color:16757579,size:.14,transparent:!0,opacity:.85,blending:La,depthWrite:!1}));pr.frustumCulled=!1;pr.visible=!1;Vt.add(pr);function Wy(s){const e=V.threat;if(pr.visible=Oe==="playing"&&e?.kind==="doubao"&&e.illuminated&&e.phase!=="leaving",pr.visible){const n=Math.max(.1,2.65+Mo(e.age));for(let i=0;i<48;i++){const r=i*2.399+ds*.4,o=.4+i%7*.075;lo[i*3]=e.x+Math.cos(r)*o,lo[i*3+1]=(e.floor-1)*xt+(i/48+ds*.65)%1*n,lo[i*3+2]=e.z+Math.sin(r)*o}Rc.attributes.position.needsUpdate=!0}for(const[n,i]of Object.entries(vi)){const r=V.threat;if(i.visible=!!r&&n===r.kind&&(Oe==="scare"?yi.visible&&!Po[Md(r)]:["playing","paused"].includes(Oe)&&n!=="liang"&&gn.has(r.floor)&&!(n==="yujie"&&r.age<r.warning)),!i.visible)continue;const o=(r.y??(r.floor-1)*xt)+1.325;i.position.set(r.x,o+(n==="doubao"?Mo(r.age):0),r.z),i.rotation.y=Math.atan2(at.position.x-r.x,at.position.z-r.z);const a=i.material.uniforms;if(a.uHeat.value=n==="doubao"?Math.min(1,r.exposure/xi+(r.illuminated?.15:0)):0,a.uGround.value=n==="doubao"?(r.floor-1)*xt:-1e3,a.uTime.value=ds,a.uLight.value=r.kind==="doubao"&&r.illuminated?1.1:r.kind==="inspector"?.82:.76,a.uOpacity.value=(r.kind==="patrol"||r.kind==="yujie"||r.kind==="doubao")&&r.phase==="leaving"?Math.max(0,1-r.retreat/1.3):r.kind==="inspector"&&r.phase==="leaving"?Math.max(0,1-(r.age-r.warning-7.2)/1.3):1,i.scale.setScalar(r.kind==="inspector"?1.05:1),i.material.depthTest=Oe!=="scare",i.renderOrder=Oe==="scare"?20:0,Oe==="scare"){const l={inspector:[0,-.65],kun:[-.25,-1.28],naiwa:[.08,-1.18],liang:[0,-.5]}[n];kd(i,l,n==="naiwa"?1.15:1.3)}}const t=V.threat;Ad.forEach((n,i)=>{const r=t?.kind==="yujie"?t.copies?.[i+1]:null;n.visible=!!r&&vi.yujie.visible&&Oe!=="scare",n.visible&&(n.position.set(r.x,(r.floor-1)*xt+1.325,r.z),n.rotation.y=Math.atan2(at.position.x-r.x,at.position.z-r.z))})}function Xy(){for(const[s,e]of Object.entries(Po)){if(e.visible=Oe==="scare"&&yi.visible&&!!V.threat&&s===Md(V.threat),!e.visible)continue;const t=Bl[s];kd(e,t.offset,t.scale)}}function kd(s,e,t){const n=yi,i=new N(e[0]+n.x,e[1]+n.y,-n.distance).applyQuaternion(at.quaternion);s.position.copy(at.position).add(i),s.quaternion.copy(at.quaternion),s.rotateZ(n.roll),s.scale.setScalar(t),s.material.uniforms.uLight.value=n.light,s.material.uniforms.uOpacity.value=1}function Yy(s){if(V.hiding){const r=V.hiding.yaw+Math.PI;Zt=r+Et.clamp(Math.atan2(Math.sin(Zt-r),Math.cos(Zt-r)),-.35,.35),nn=Et.clamp(nn,-.18,.18)}zt.has("ArrowLeft")&&(Zt+=s*1.5),zt.has("ArrowRight")&&(Zt-=s*1.5),zt.has("ArrowUp")&&(nn+=s),zt.has("ArrowDown")&&(nn-=s),nn=Et.clamp(nn,-1.15,1.15);const e={yaw:Zt,pitch:nn,verticalFov:at.fov*Math.PI/180,aspect:at.aspect,forward:+zt.has("KeyW")-+zt.has("KeyS"),right:+zt.has("KeyD")-+zt.has("KeyA"),sprint:zt.has("ShiftLeft")||zt.has("ShiftRight")};V.lastInput=e,fr>0?fr-=s:V.tick(s,e),Do(),vr();const t=V.states[1].flashlight;Cs.visible=t&&!V.hiding&&!V.peek,Ps.visible=Oe==="playing"&&V.states[1].logKey&&!V.hiding&&!V.peek,Jn.intensity=V.hiding?0:t?65:V.debugCalm?3:12,Jn.angle=t?bd:.64,Jn.distance=t?20:16,Jn.penumbra=t?.25:.78,Sc.intensity=V.debugCalm?2:V.state.blackout?.09:V.floor.id===2?1.05:.72,yt.bob&&!V.hiding&&(e.forward||e.right)&&(xu+=s*(e.sprint?3.65:2.4),at.position.y+=Math.sin(xu*7)*.015);const n=V.floor.interactions.find(r=>r.id===V.peek);oe("peek").hidden=!n;const i=V.hiding?60:n?43:e.sprint?74:72;if(at.fov=Et.damp(at.fov,i,5,s),at.updateProjectionMatrix(),n){const r=Math.sign((V.player.x-n.target.x)*Math.sin(n.yaw)+(V.player.z-n.target.z)*Math.cos(n.yaw))||1;at.position.x=Et.lerp(at.position.x,n.target.x+Math.sin(n.yaw)*.25*r,.92),at.position.z=Et.lerp(at.position.z,n.target.z+Math.cos(n.yaw)*.25*r,.92)}if(Od(),Bd(),V.threat&&oe("chapter").classList.remove("shown"),V.messages.length){const r=V.messages.pop();V.messages=[],Io(r.text,r.duration)}V.debugPendingScare?(V.debugPendingScare=!1,vu()):V.mode==="lost"?vu():V.mode==="won"&&Fd(!0)}function zd(s){requestAnimationFrame(zd);const e=Ia?(s-Ia)/1e3:0;Ia=s;const t=Math.min(e,.08);if(Oe==="playing"&&(Yy(t),er.push(e*1e3),er.length>600&&er.shift()),(Oe==="playing"||Oe==="menu"||Oe==="scare")&&(ds+=t),Oe==="scare"&&(qs+=t,yi=Mc(qs,yt.reduced),Vi.visible=!0,oe("scare").style.setProperty("--scare-black",yi.black),oe("scare").style.setProperty("--scare-grain",yi.grain),qs>=Fl&&(zi?(Uo(),On.stop(),Oe="playing",Gi(!0),fr=.35):Fd(!1))),bc){if(Oe==="menu"&&at.rotation.set(.01,Zt+Math.sin(s*8e-5)*.025,0),Oe!=="paused")for(const n of gn.values())n.update(t,at,ds,V,yt.reduced);Wy(),Xy()}Oe==="playing"&&((Cd-=t)<=0&&oe("subtitle").classList.remove("shown"),(Pd-=t)<=0&&oe("chapter").classList.remove("shown")),Vy(),On.update(V,Oe,yt.volume,Zt,document.hidden,Oe==="scare"?1-yi.fade:1),Oe==="scare"&&!zl&&qs>=Ul&&(zl=!0,Vl("scare")),Id?.update(V,at,ds,Oe),wd?.update(t),rn.render(Vt,at),Eo&&Math.floor(s/500)!==Math.floor((s-e*1e3)/500)&&(Eo.textContent=JSON.stringify({state:window.__game.state,stats:window.__game.stats}))}addEventListener("keydown",s=>{if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&Oe==="playing"&&s.preventDefault(),s.code==="Escape"){Oe==="playing"?yr():Oe==="paused"&&wc();return}["playing","scare"].includes(Oe)&&(Oe==="playing"&&(zt.add(s.code),s.code==="KeyE"&&!s.repeat&&Gy()),s.code==="KeyM"&&!s.repeat&&(yt.volume=yt.volume?0:35,oe("volume").value=yt.volume,Ec(),Oe==="playing"&&Io(yt.volume?"环境声音已开启":"环境声音已关闭",2)))});addEventListener("keyup",s=>zt.delete(s.code));addEventListener("blur",yr);document.addEventListener("visibilitychange",()=>{document.hidden&&(On.stop(),yr())});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===dr?kl=!0:kl&&Oe==="playing"&&yr()});dr.addEventListener("pointerdown",s=>{Oe==="playing"&&(_r=!0,dr.setPointerCapture(s.pointerId))});addEventListener("pointerup",()=>_r=!1);addEventListener("mousemove",s=>{if(Oe!=="playing"||!document.pointerLockElement&&!_r)return;const e=yt.sensitivity*3e-5;Zt-=s.movementX*e,nn=Et.clamp(nn-s.movementY*e,-1.15,1.15)});oe("start").onclick=()=>No();oe("resume").onclick=wc;oe("pause-button").onclick=yr;oe("quit").onclick=Ac;oe("end-menu").onclick=Ac;oe("restart").onclick=()=>No(V.mode==="lost");oe("new-run").onclick=()=>No();oe("settings-toggle").onclick=()=>{oe("settings").hidden=!oe("settings").hidden};for(const s of["quality","volume","sensitivity","bob","reduced"]){const e=oe(s),t=["bob","reduced"].includes(s);t?e.checked=!!yt[s]:e.value=yt[s],e.oninput=()=>{yt[s]=t?e.checked:s==="quality"?e.value:Number(e.value),Ec(),s==="quality"&&Tc()}}function qy(s){yt.language=_c(s),Ec(),Td();for(const e of["language","pause-language"])oe(e).value=yt.language;if(oe("subtitle").textContent=Ye(Ld),Oe!=="loading"&&(oe("start").innerHTML=Ye("进入楼道")+" <span>↗</span>",oe("load-status").textContent=Ye("建议电脑游玩 · 静音也能判断全部危险")),V){for(const e of gn.values())e.localize();oe("floor-label").textContent=Ye(`0${V.floor.id} / ${V.floor.title}`),Dd(V.floor),Oe!=="playing"&&oe("chapter").classList.remove("shown"),Bd(),Od()}}for(const s of["language","pause-language"])oe(s).value=yt.language,oe(s).onchange=e=>qy(e.target.value);const Eo=Ol.has("debug")&&!zi?document.body.appendChild(document.createElement("pre")):null;Eo&&(Eo.id="diagnostics");window.__game={get state(){return{mode:Oe,language:_d(),floor:V?.player.floor,position:V?{...V.player}:null,yaw:Zt,elapsed:V?.time,sanity:V?.sanity,seed:V?.seed,threat:V?.threat?{kind:V.threat.kind,phase:V.threat.phase,checks:V.threat.checks,searched:V.threat.searched,position:[V.threat.x,V.threat.z],observed:V.threat.observed,age:V.threat.age,warning:V.threat.warning,copies:V.threat.copies}:null,checkpoint:V?.checkpoint.floor,pendingCheckpoint:V?.pendingCheckpoint,target:nt?.id,travel:V?.travel,hiding:V?.hiding,interactions:V?.state.interactions}},get stats(){const s=[...er].sort((e,t)=>e-t);return{samples:s.length,medianMs:s[Math.floor(s.length*.5)]||0,p95Ms:s[Math.floor(s.length*.95)]||0,drawCalls:rn.info.render.calls,triangles:rn.info.render.triangles,textures:rn.info.memory.textures,geometries:rn.info.memory.geometries,resolution:rn.getDrawingBufferSize(new Ae).toArray()}}};async function $y(){try{const s=await fetch(Ys("/assets/apartment/floors.json"));if(!s.ok)throw new Error("Floor data unavailable");us=wy(await s.json());const e=await fetch(Ys("/assets/apartment/runtime-manifest.json"));if(!e.ok)throw new Error("Asset manifest unavailable");const t=await e.json();for(const r of us.floors)for(const o of r.interactions)o.type==="portrait"&&(o.asset=t.portraitInteractions[o.id]||o.asset);const n=Object.keys(t.textures).length+Object.keys(t.models).length;let i=0;await Promise.all(Object.entries(t.textures).map(async([r,o])=>{const a=await new ld().loadAsync(Ys(o.url));a.colorSpace=Ct,a.anisotropy=Math.min(4,rn.capabilities.getMaxAnisotropy()),mi[r]=a,oe("load-status").textContent=Ye(`准备照片与装置 ${++i} / ${n}`)})),await Promise.all(Object.entries(t.models).map(async([r,o])=>{Rd[r]=(await new kv().loadAsync(Ys(o))).scene,oe("load-status").textContent=Ye(`准备照片与装置 ${++i} / ${n}`)})),mi.floorPhotos=t.floorPhotos.map(r=>mi[r]);for(const r of["inspector","naiwa","kun","liang","patrol","yujie","doubao"])vi[r]=t.billboards?.[r]?mu(mi[t.billboards[r].asset||r],t.billboards[r]):yc(mi[r],r),vi[r].visible=!1,Vt.add(vi[r]);for(let r=0;r<2;r++){const o=vi.yujie.clone();o.visible=!1,Ad.push(o),Vt.add(o)}Object.assign(Bl,t.scares);for(const[r,o]of Object.entries(Bl)){const a=mu(mi[o.asset],o);a.material.depthTest=!1,a.renderOrder=20,a.visible=!1,Vt.add(a),Po[r]=a}if(Id=by(Vt,mi.liang),Ac(),await rn.compileAsync(Vt,at),oe("start").disabled=!1,oe("start").innerHTML=Ye("进入楼道")+" <span>↗</span>",oe("load-status").textContent=Ye("建议电脑游玩 · 静音也能判断全部危险"),zi){const{installDebug:r}=await Zd(async()=>{const{installDebug:o}=await import("./debug-8OX8gVQp.js");return{installDebug:o}},[]);wd=r({scene:Vt,camera:at,game:()=>V,stats:()=>window.__game.stats,mode:()=>Oe,settings:So,calm:()=>{V.debugCalm=So.calm,Ud()},jump:o=>{Oe==="paused"?wc():Oe!=="playing"&&No(),V.threat=null,V.travel=null,V.peek=null,V.pendingCheckpoint=null,V.player={floor:o,x:12,z:us.byId[o].arrival==="A"?4:28,y:(o-1)*xt},V.cooldown=3,nt=null,zt.clear(),Ss=0,Do(),Zt=-Math.PI/2,nn=0,vr(),oe("chapter").classList.remove("shown"),oe("subtitle").classList.remove("shown")}})}requestAnimationFrame(zd)}catch(s){console.error(s),oe("load-status").textContent=Ye("场景加载失败，请重新加载。"),oe("start").disabled=!1,oe("start").textContent=Ye("重新加载"),oe("start").onclick=()=>location.reload()}}$y();export{ct as B,Lp as E,qu as L,xt as R,N as V,lc as a,ni as b,Ye as t};
