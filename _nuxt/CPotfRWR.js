import{d as Be,B as pt,C as yt,I as Yn,J as nn,_ as We,K as Qe,x as xs,o as Dn,c as nr,F as Me,T as Xc,G as Ke,L as Ue,M as Xe,D as xt,E as Xt,l as F,N as Ie,i as ye,O as qc,P as $c,H as Ki,Q as tn,R as pi,S as Yc,m as cn,a as Kc,U as Zc,V as Jc,W as or,X as lr}from"./BHBtNHp5.js";import{u as jc}from"./DB6vLrOW.js";const uo="169",Qc=0,Lo=1,tu=2,Ql=1,eu=2,Cn=3,Jn=0,He=1,Ln=2,Kn=0,qi=1,Do=2,Io=3,Uo=4,nu=5,di=100,iu=101,ru=102,su=103,au=104,ou=200,lu=201,cu=202,uu=203,ga=204,_a=205,hu=206,du=207,fu=208,pu=209,mu=210,gu=211,_u=212,vu=213,xu=214,va=0,xa=1,Ma=2,Zi=3,Sa=4,ya=5,Ea=6,Ta=7,tc=0,Mu=1,Su=2,Zn=0,yu=1,Eu=2,Tu=3,bu=4,Au=5,wu=6,ec=7,nc=300,Ji=301,ji=302,ba=303,Aa=304,ws=306,wa=1e3,mi=1001,Ra=1002,en=1003,Ru=1004,Ur=1005,hn=1006,Ns=1007,gi=1008,On=1009,ic=1010,rc=1011,Er=1012,ho=1013,_i=1014,In=1015,Cr=1016,fo=1017,po=1018,Qi=1020,sc=35902,ac=1021,oc=1022,fn=1023,lc=1024,cc=1025,$i=1026,tr=1027,uc=1028,mo=1029,hc=1030,go=1031,_o=1033,hs=33776,ds=33777,fs=33778,ps=33779,Ca=35840,Pa=35841,La=35842,Da=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,$a=37819,Ya=37820,Ka=37821,ms=36492,Za=36494,Ja=36495,dc=36283,ja=36284,Qa=36285,to=36286,Cu=3200,Pu=3201,fc=0,Lu=1,$n="",ln="srgb",jn="srgb-linear",vo="display-p3",Rs="display-p3-linear",Ms="linear",ve="srgb",Ss="rec709",ys="p3",wi=7680,No=519,Du=512,Iu=513,Uu=514,pc=515,Nu=516,Fu=517,Ou=518,Bu=519,Fo=35044,Oo=35048,Bo="300 es",Un=2e3,Es=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const vr=Math.PI/180,Tr=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function xo(i,t){return(i%t+t)%t}function zu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function Hu(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function Vu(i,t=1){return t-Math.abs(xo(i,t*2)-t)}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qu(i,t){return i+Math.random()*(t-i)}function $u(i){return i*(.5-Math.random())}function Yu(i){i!==void 0&&(zo=i);let t=zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ku(i){return i*vr}function Zu(i){return i*Tr}function Ju(i){return(i&i-1)===0&&i!==0}function ju(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function th(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:vr,RAD2DEG:Tr,generateUUID:Si,clamp:Le,euclideanModulo:xo,mapLinear:zu,inverseLerp:ku,lerp:xr,damp:Hu,pingpong:Vu,smoothstep:Gu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:$u,seededRandom:Yu,degToRad:Ku,radToDeg:Zu,isPowerOfTwo:Ju,ceilPowerOfTwo:ju,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:th,normalize:ze,denormalize:Vi};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,r,s,a,o,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],v=r[0],d=r[3],p=r[6],b=r[1],S=r[4],T=r[7],z=r[2],C=r[5],w=r[8];return s[0]=a*v+o*b+l*z,s[3]=a*d+o*S+l*C,s[6]=a*p+o*T+l*w,s[1]=c*v+u*b+f*z,s[4]=c*d+u*S+f*C,s[7]=c*p+u*T+f*w,s[2]=h*v+m*b+g*z,s[5]=h*d+m*S+g*C,s[8]=h*p+m*T+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=e*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(r*c-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new te;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){const i=bs("canvas");return i.style.display="block",i}const ko={};function gs(i){i in ko||(ko[i]=!0,console.warn(i))}function nh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ih(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ho=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[jn]:{transfer:Ms,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ln]:{transfer:ve,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rs]:{transfer:Ms,primaries:ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(Ho)},[vo]:{transfer:ve,primaries:ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(Ho).convertLinearToSRGB()}},sh=new Set([jn,Rs]),ue={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!sh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cr[t].toReference,r=cr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cr[i].primaries},getTransfer:function(i){return i===$n?Ms:cr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(cr[t].luminanceCoefficients)}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class ah{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=bs("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oh=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bs(r[a].image)):s.push(Bs(r[a]))}else s=Bs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;class Ve extends ir{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=mi,r=mi,s=hn,a=gi,o=fn,l=On,c=Ve.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Si(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=nc;Ve.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,T=(m+1)/2,z=(p+1)/2,C=(u+h)/4,w=(f+v)/4,N=(g+d)/4;return S>T&&S>z?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=w/n):T>z?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=C/r,s=N/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=w/s,r=N/s),this.set(n,r,s,e),this}let b=Math.sqrt((d-g)*(d-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ch extends ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uh extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==h||c!==m||u!==g){let d=1-o;const p=l*h+c*m+u*g+f*v,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const z=Math.sqrt(S),C=Math.atan2(z,p*b);d=Math.sin(d*C)/z,o=Math.sin(o*C)/z}const T=o*b;if(l=l*d+h*T,c=c*d+m*T,u=u*d+g*T,f=f*d+v*T,d===1-o){const z=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=z,c*=z,u*=z,f*=z}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*f+l*m-c*h,t[e+1]=l*g+u*h+c*f-o*m,t[e+2]=c*g+u*m+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new L,Go=new Pr;class Lr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Fr.subVectors(this.max,ur),Ci.subVectors(t.a,ur),Pi.subVectors(t.b,ur),Li.subVectors(t.c,ur),zn.subVectors(Pi,Ci),kn.subVectors(Li,Pi),ii.subVectors(Ci,Li);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!ks(e,Ci,Pi,Li,Fr)||(e=[1,0,0,0,1,0,0,0,1],!ks(e,Ci,Pi,Li,Fr))?!1:(Or.crossVectors(zn,kn),e=[Or.x,Or.y,Or.z],ks(e,Ci,Pi,Li,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Nr=new Lr,Ci=new L,Pi=new L,Li=new L,zn=new L,kn=new L,ii=new L,ur=new L,Fr=new L,Or=new L,ri=new L;function ks(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ri.fromArray(i,s);const o=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hh=new Lr,hr=new L,Hs=new L;class Cs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(hr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Hs)),this.expandByPoint(hr.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new L,Vs=new L,Br=new L,Hn=new L,Gs=new L,zr=new L,Ws=new L;class vc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Vs.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Vs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=Hn.dot(this.direction),l=-Hn.dot(Br),c=Hn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vs).addScaledVector(Br,h),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),r=bn.dot(bn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,r,s){Gs.subVectors(e,t),zr.subVectors(n,t),Ws.crossVectors(Gs,zr);let a=this.direction.dot(Ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(zr.crossVectors(Hn,zr));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Ws);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,a,o,l,c,u,f,h,m,g,v,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,m,g,v,d)}set(t,e,n,r,s,a,o,l,c,u,f,h,m,g,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=g,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*f,g=c*u,v=c*f;e[0]=h+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*f,g=c*u,v=c*f;e[0]=h-v*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+v,e[1]=l*f,e[5]=v*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*f,e[8]=g*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+g,e[10]=h-v*f}else if(t.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+v,e[5]=a*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dh,t,fh)}lookAt(t,e,n){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Vn.crossVectors(n,qe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Vn.crossVectors(n,qe)),Vn.normalize(),kr.crossVectors(qe,Vn),r[0]=Vn.x,r[4]=kr.x,r[8]=qe.x,r[1]=Vn.y,r[5]=kr.y,r[9]=qe.y,r[2]=Vn.z,r[6]=kr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],v=n[6],d=n[10],p=n[14],b=n[3],S=n[7],T=n[11],z=n[15],C=r[0],w=r[4],N=r[8],ot=r[12],_=r[1],y=r[5],W=r[9],V=r[13],G=r[2],Q=r[6],B=r[10],st=r[14],k=r[3],ht=r[7],Tt=r[11],Y=r[15];return s[0]=a*C+o*_+l*G+c*k,s[4]=a*w+o*y+l*Q+c*ht,s[8]=a*N+o*W+l*B+c*Tt,s[12]=a*ot+o*V+l*st+c*Y,s[1]=u*C+f*_+h*G+m*k,s[5]=u*w+f*y+h*Q+m*ht,s[9]=u*N+f*W+h*B+m*Tt,s[13]=u*ot+f*V+h*st+m*Y,s[2]=g*C+v*_+d*G+p*k,s[6]=g*w+v*y+d*Q+p*ht,s[10]=g*N+v*W+d*B+p*Tt,s[14]=g*ot+v*V+d*st+p*Y,s[3]=b*C+S*_+T*G+z*k,s[7]=b*w+S*y+T*Q+z*ht,s[11]=b*N+S*W+T*B+z*Tt,s[15]=b*ot+S*V+T*st+z*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],g=t[3],v=t[7],d=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*m-n*l*m)+v*(+e*l*m-e*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+e*c*f-e*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+p*(-r*o*u-e*l*f+e*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],g=t[12],v=t[13],d=t[14],p=t[15],b=f*d*c-v*h*c+v*l*m-o*d*m-f*l*p+o*h*p,S=g*h*c-u*d*c-g*l*m+a*d*m+u*l*p-a*h*p,T=u*v*c-g*f*c+g*o*m-a*v*m-u*o*p+a*f*p,z=g*f*l-u*v*l-g*o*h+a*v*h+u*o*d-a*f*d,C=e*b+n*S+r*T+s*z;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=b*w,t[1]=(v*h*s-f*d*s-v*r*m+n*d*m+f*r*p-n*h*p)*w,t[2]=(o*d*s-v*l*s+v*r*c-n*d*c-o*r*p+n*l*p)*w,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*m-n*l*m)*w,t[4]=S*w,t[5]=(u*d*s-g*h*s+g*r*m-e*d*m-u*r*p+e*h*p)*w,t[6]=(g*l*s-a*d*s-g*r*c+e*d*c+a*r*p-e*l*p)*w,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*m+e*l*m)*w,t[8]=T*w,t[9]=(g*f*s-u*v*s-g*n*m+e*v*m+u*n*p-e*f*p)*w,t[10]=(a*v*s-g*o*s+g*n*c-e*v*c-a*n*p+e*o*p)*w,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*m-e*o*m)*w,t[12]=z*w,t[13]=(u*v*r-g*f*r+g*n*h-e*v*h-u*n*d+e*f*d)*w,t[14]=(g*o*r-a*v*r-g*n*l+e*v*l+a*n*d-e*o*d)*w,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,v=a*u,d=a*f,p=o*f,b=l*c,S=l*u,T=l*f,z=n.x,C=n.y,w=n.z;return r[0]=(1-(v+p))*z,r[1]=(m+T)*z,r[2]=(g-S)*z,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(h+p))*C,r[6]=(d+b)*C,r[7]=0,r[8]=(g+S)*w,r[9]=(d-b)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const a=Di.set(r[4],r[5],r[6]).length(),o=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],an.copy(this);const c=1/s,u=1/a,f=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,e.setFromRotationMatrix(an),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Un){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let m,g;if(o===Un)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Es)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Un){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(a-s),h=(e+t)*c,m=(n+r)*u;let g,v;if(o===Un)g=(a+s)*f,v=-2*f;else if(o===Es)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new L,an=new pe,dh=new L(0,0,0),fh=new L(1,1,1),Vn=new L,kr=new L,qe=new L,Wo=new pe,Xo=new Pr;class vn{constructor(t=0,e=0,n=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ph=0;const qo=new L,Ii=new Pr,An=new pe,Hr=new L,dr=new L,mh=new L,gh=new Pr,$o=new L(1,0,0),Yo=new L(0,1,0),Ko=new L(0,0,1),Zo={type:"added"},_h={type:"removed"},Ui={type:"childadded",child:null},Xs={type:"childremoved",child:null};class Ge extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new L,e=new vn,n=new Pr,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new te}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(dr,Hr,this.up):An.lookAt(Hr,dr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(An),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_h),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new L,wn=new L,qs=new L,Rn=new L,Ni=new L,Fi=new L,Jo=new L,$s=new L,Ys=new L,Ks=new L,Zs=new de,Js=new de,js=new de;class dn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),on.subVectors(t,e),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){on.subVectors(r,e),wn.subVectors(n,e),qs.subVectors(t,e);const a=on.dot(on),o=on.dot(wn),l=on.dot(qs),c=wn.dot(wn),u=wn.dot(qs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Zs.setScalar(0),Js.setScalar(0),js.setScalar(0),Zs.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),js.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Zs,s.x),a.addScaledVector(Js,s.y),a.addScaledVector(js,s.z),a}static isFrontFacing(t,e,n,r){return on.subVectors(n,e),wn.subVectors(t,e),on.cross(wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,n),Fi.subVectors(s,n),$s.subVectors(t,n);const l=Ni.dot($s),c=Fi.dot($s);if(l<=0&&c<=0)return e.copy(n);Ys.subVectors(t,r);const u=Ni.dot(Ys),f=Fi.dot(Ys);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ni,a);Ks.subVectors(t,s);const m=Ni.dot(Ks),g=Fi.dot(Ks);if(g>=0&&m<=g)return e.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Jo.subVectors(s,r),o=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(Jo,o);const p=1/(d+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=xo(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Qs(a,s,t+1/3),this.g=Qs(a,s,t),this.b=Qs(a,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ue.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Le(Fe.r*255,0,255))*65536+Math.round(Le(Fe.g*255,0,255))*256+Math.round(Le(Fe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ln){ue.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Vr);const n=xr(Gn.h,Vr.h,e),r=xr(Gn.s,Vr.s,e),s=xr(Gn.l,Vr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new ie;ie.NAMES=Mc;let vh=0;class rr extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class br extends rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new L,Gr=new Rt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}}class Sc extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yc extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fn extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xh=0;const je=new pe,ta=new Ge,Oi=new L,$e=new Lr,fr=new Lr,Pe=new L;class mn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?yc:Sc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,fr.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,fr.max),$e.expandByPoint(Pe)):($e.expandByPoint(fr.min),$e.expandByPoint(fr.max))}$e.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Pe.add(Oi)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;const c=new L,u=new L,f=new L,h=new Rt,m=new Rt,g=new Rt,v=new L,d=new L;function p(N,ot,_){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,ot),f.fromBufferAttribute(n,_),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,ot),g.fromBufferAttribute(s,_),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(y),d.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(y),o[N].add(v),o[ot].add(v),o[_].add(v),l[N].add(d),l[ot].add(d),l[_].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,ot=b.length;N<ot;++N){const _=b[N],y=_.start,W=_.count;for(let V=y,G=y+W;V<G;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const S=new L,T=new L,z=new L,C=new L;function w(N){z.fromBufferAttribute(r,N),C.copy(z);const ot=o[N];S.copy(ot),S.sub(z.multiplyScalar(z.dot(ot))).normalize(),T.crossVectors(C,ot);const y=T.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,y)}for(let N=0,ot=b.length;N<ot;++N){const _=b[N],y=_.start,W=_.count;for(let V=y,G=y+W;V<G;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),v=t.getX(h+1),d=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,d=l.length;v<d;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new Oe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new pe,si=new vc,Wr=new Cs,Qo=new L,Xr=new L,qr=new L,$r=new L,ea=new L,Yr=new L,tl=new L,Kr=new L;class _e extends Ge{constructor(t=new mn,e=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ea.fromBufferAttribute(f,t),a?Yr.addScaledVector(ea,u):Yr.addScaledVector(ea.sub(e),u))}e.add(Yr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(Wr.containsPoint(si.origin)===!1&&(si.intersectSphere(Wr,Qo)===null||si.origin.distanceToSquared(Qo)>(t.far-t.near)**2))&&(jo.copy(s).invert(),si.copy(t.ray).applyMatrix4(jo),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,z=S;T<z;T+=3){const C=o.getX(T),w=o.getX(T+1),N=o.getX(T+2);r=Zr(this,p,t,n,c,u,f,C,w,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const b=o.getX(d),S=o.getX(d+1),T=o.getX(d+2);r=Zr(this,a,t,n,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,z=S;T<z;T+=3){const C=T,w=T+1,N=T+2;r=Zr(this,p,t,n,c,u,f,C,w,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const b=d,S=d+1,T=d+2;r=Zr(this,a,t,n,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Mh(i,t,e,n,r,s,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Jn,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Zr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Xr),i.getVertexPosition(l,qr),i.getVertexPosition(c,$r);const u=Mh(i,t,e,n,Xr,qr,$r,tl);if(u){const f=new L;dn.getBarycoord(tl,Xr,qr,$r,f),r&&(u.uv=dn.getInterpolatedAttribute(r,o,l,c,f,new Rt)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,l,c,f,new Rt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};dn.getNormal(Xr,qr,$r,h.normal),u.face=h,u.barycoord=f}return u}class sr extends mn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(f,2));function g(v,d,p,b,S,T,z,C,w,N,ot){const _=T/w,y=z/N,W=T/2,V=z/2,G=C/2,Q=w+1,B=N+1;let st=0,k=0;const ht=new L;for(let Tt=0;Tt<B;Tt++){const Y=Tt*y-V;for(let St=0;St<Q;St++){const Zt=St*_-W;ht[v]=Zt*b,ht[d]=Y*S,ht[p]=G,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[d]=0,ht[p]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),f.push(St/w),f.push(1-Tt/N),st+=1}}for(let Tt=0;Tt<N;Tt++)for(let Y=0;Y<w;Y++){const St=h+Y+Q*Tt,Zt=h+Y+Q*(Tt+1),H=h+(Y+1)+Q*(Tt+1),nt=h+(Y+1)+Q*Tt;l.push(St,Zt,nt),l.push(Zt,H,nt),k+=6}o.addGroup(m,k,ot),m+=k,h+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const r in n)t[r]=n[r]}return t}function Sh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const yh={clone:er,merge:ke};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tc extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new L,el=new Rt,nl=new Rt;class Ye extends Tc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class bh extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ye(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new Ye(Bi,zi,t,e);s.layers=this.layers,this.add(s);const a=new Ye(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Bi,zi,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bc extends Ve{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ah extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sr(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Kn});s.uniforms.tEquirect.value=e;const a=new _e(r,s),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=hn),new bh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const na=new L,wh=new L,Rh=new te;class ci{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=na.subVectors(n,e).cross(wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rh.getNormalMatrix(t),r=this.coplanarPoint(na).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Cs,Jr=new L;class Mo{constructor(t=new ci,e=new ci,n=new ci,r=new ci,s=new ci,a=new ci){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],v=r[10],d=r[11],p=r[12],b=r[13],S=r[14],T=r[15];if(n[0].setComponents(l-s,h-c,d-m,T-p).normalize(),n[1].setComponents(l+s,h+c,d+m,T+p).normalize(),n[2].setComponents(l+a,h+u,d+g,T+b).normalize(),n[3].setComponents(l-a,h-u,d-g,T-b).normalize(),n[4].setComponents(l-o,h-f,d-v,T-S).normalize(),e===Un)n[5].setComponents(l+o,h+f,d+v,T+S).normalize();else if(e===Es)n[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Jr.x=r.normal.x>0?t.max.x:t.min.x,Jr.y=r.normal.y>0?t.max.y:t.min.y,Jr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Ch(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class xi extends mn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,m=[],g=[],v=[],d=[];for(let p=0;p<u;p++){const b=p*h-a;for(let S=0;S<c;S++){const T=S*f-s;g.push(T,-b,0),v.push(0,0,1),d.push(S/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const S=b+c*p,T=b+c*(p+1),z=b+1+c*(p+1),C=b+1+c*p;m.push(S,T,C),m.push(T,z,C)}this.setIndex(m),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fh=`#ifdef USE_AOMAP
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
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bh=`#ifdef USE_BATCHING
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
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
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
#endif`,Wh=`#ifdef USE_BUMPMAP
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bf=`#define DISTANCE
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
}`,zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Yf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
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
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rp=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Ph,alphahash_pars_fragment:Lh,alphamap_fragment:Dh,alphamap_pars_fragment:Ih,alphatest_fragment:Uh,alphatest_pars_fragment:Nh,aomap_fragment:Fh,aomap_pars_fragment:Oh,batching_pars_vertex:Bh,batching_vertex:zh,begin_vertex:kh,beginnormal_vertex:Hh,bsdfs:Vh,iridescence_fragment:Gh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:qh,clipping_planes_pars_vertex:$h,clipping_planes_vertex:Yh,color_fragment:Kh,color_pars_fragment:Zh,color_pars_vertex:Jh,color_vertex:jh,common:Qh,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:sd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:ud,envmap_pars_vertex:hd,envmap_physical_pars_fragment:yd,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_pars_fragment:vd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:Ed,lights_toon_pars_fragment:Td,lights_phong_fragment:bd,lights_phong_pars_fragment:Ad,lights_physical_fragment:wd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Cd,lights_fragment_maps:Pd,lights_fragment_end:Ld,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:$d,normal_fragment_maps:Yd,normal_pars_fragment:Kd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:rf,packing:sf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:vf,skinnormal_vertex:xf,specularmap_fragment:Mf,specularmap_pars_fragment:Sf,tonemapping_fragment:yf,tonemapping_pars_fragment:Ef,transmission_fragment:Tf,transmission_pars_fragment:bf,uv_pars_fragment:Af,uv_pars_vertex:wf,uv_vertex:Rf,worldpos_vertex:Cf,background_vert:Pf,background_frag:Lf,backgroundCube_vert:Df,backgroundCube_frag:If,cube_vert:Uf,cube_frag:Nf,depth_vert:Ff,depth_frag:Of,distanceRGBA_vert:Bf,distanceRGBA_frag:zf,equirect_vert:kf,equirect_frag:Hf,linedashed_vert:Vf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:$f,meshmatcap_vert:Yf,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:jf,meshphong_frag:Qf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:rp,points_frag:sp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},Et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},_n={basic:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ke([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ke([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ke([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ke([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ke([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ke([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:ke([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:ke([Et.lights,Et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};_n.physical={uniforms:ke([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const jr={r:0,b:0,g:0},oi=new vn,up=new pe;function hp(i,t,e,n,r,s,a){const o=new ie(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1;const T=g(b);T===null?p(o,l):T&&T.isColor&&(p(T,1),S=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(b,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===ws)?(u===void 0&&(u=new _e(new sr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:er(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),oi.copy(S.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(oi)),u.material.toneMapped=ue.getTransfer(T.colorSpace)!==ve,(f!==T||h!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _e(new xi(2,2),new pn({name:"BackgroundMaterial",uniforms:er(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ue.getTransfer(T.colorSpace)!==ve,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(jr,Ec(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:d}}function dp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(_,y,W,V,G){let Q=!1;const B=f(V,W,y);s!==B&&(s=B,c(s.object)),Q=m(_,V,W,G),Q&&g(_,V,W,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,T(_,y,W,V),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function f(_,y,W){const V=W.wireframe===!0;let G=n[_.id];G===void 0&&(G={},n[_.id]=G);let Q=G[y.id];Q===void 0&&(Q={},G[y.id]=Q);let B=Q[V];return B===void 0&&(B=h(l()),Q[V]=B),B}function h(_){const y=[],W=[],V=[];for(let G=0;G<e;G++)y[G]=0,W[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:W,attributeDivisors:V,object:_,attributes:{},index:null}}function m(_,y,W,V){const G=s.attributes,Q=y.attributes;let B=0;const st=W.getAttributes();for(const k in st)if(st[k].location>=0){const Tt=G[k];let Y=Q[k];if(Y===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Tt===void 0||Tt.attribute!==Y||Y&&Tt.data!==Y.data)return!0;B++}return s.attributesNum!==B||s.index!==V}function g(_,y,W,V){const G={},Q=y.attributes;let B=0;const st=W.getAttributes();for(const k in st)if(st[k].location>=0){let Tt=Q[k];Tt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Tt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Tt=_.instanceColor));const Y={};Y.attribute=Tt,Tt&&Tt.data&&(Y.data=Tt.data),G[k]=Y,B++}s.attributes=G,s.attributesNum=B,s.index=V}function v(){const _=s.newAttributes;for(let y=0,W=_.length;y<W;y++)_[y]=0}function d(_){p(_,0)}function p(_,y){const W=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;W[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),G[_]!==y&&(i.vertexAttribDivisor(_,y),G[_]=y)}function b(){const _=s.newAttributes,y=s.enabledAttributes;for(let W=0,V=y.length;W<V;W++)y[W]!==_[W]&&(i.disableVertexAttribArray(W),y[W]=0)}function S(_,y,W,V,G,Q,B){B===!0?i.vertexAttribIPointer(_,y,W,G,Q):i.vertexAttribPointer(_,y,W,V,G,Q)}function T(_,y,W,V){v();const G=V.attributes,Q=W.getAttributes(),B=y.defaultAttributeValues;for(const st in Q){const k=Q[st];if(k.location>=0){let ht=G[st];if(ht===void 0&&(st==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),st==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){const Tt=ht.normalized,Y=ht.itemSize,St=t.get(ht);if(St===void 0)continue;const Zt=St.buffer,H=St.type,nt=St.bytesPerElement,Lt=H===i.INT||H===i.UNSIGNED_INT||ht.gpuType===ho;if(ht.isInterleavedBufferAttribute){const _t=ht.data,kt=_t.stride,dt=ht.offset;if(_t.isInstancedInterleavedBuffer){for(let tt=0;tt<k.locationSize;tt++)p(k.location+tt,_t.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let tt=0;tt<k.locationSize;tt++)d(k.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let tt=0;tt<k.locationSize;tt++)S(k.location+tt,Y/k.locationSize,H,Tt,kt*nt,(dt+Y/k.locationSize*tt)*nt,Lt)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<k.locationSize;_t++)p(k.location+_t,ht.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<k.locationSize;_t++)d(k.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let _t=0;_t<k.locationSize;_t++)S(k.location+_t,Y/k.locationSize,H,Tt,Y*nt,Y/k.locationSize*_t*nt,Lt)}}else if(B!==void 0){const Tt=B[st];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(k.location,Tt);break;case 3:i.vertexAttrib3fv(k.location,Tt);break;case 4:i.vertexAttrib4fv(k.location,Tt);break;default:i.vertexAttrib1fv(k.location,Tt)}}}}b()}function z(){N();for(const _ in n){const y=n[_];for(const W in y){const V=y[W];for(const G in V)u(V[G].object),delete V[G];delete y[W]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const W in y){const V=y[W];for(const G in V)u(V[G].object),delete V[G];delete y[W]}delete n[_.id]}function w(_){for(const y in n){const W=n[y];if(W[_.id]===void 0)continue;const V=W[_.id];for(const G in V)u(V[G].object),delete V[G];delete W[_.id]}}function N(){ot(),a=!0,s!==r&&(s=r,c(s.object))}function ot(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:ot,dispose:z,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:d,disableUnusedAttributes:b}}function fp(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];e.update(m,n,1)}function l(c,u,f,h){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<h.length;v++)e.update(g,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const N=w===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!N)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:z,maxSamples:C}}function mp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ci,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,d=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const b=s?0:n,S=b*4;let T=p.clippingState||null;l.value=T,T=u(g,h,S,m);for(let z=0;z!==S;++z)T[z]=e[z];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,g){const v=f!==null?f.length:0;let d=null;if(v!==0){if(d=l.value,g!==!0||d===null){const p=m+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let S=0,T=m;S!==v;++S,T+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function gp(i){let t=new WeakMap;function e(a,o){return o===ba?a.mapping=Ji:o===Aa&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===Aa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ah(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class _p extends Tc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,il=[.125,.215,.35,.446,.526,.582],fi=20,ia=new _p,rl=new ie;let ra=null,sa=0,aa=0,oa=!1;const ui=(1+Math.sqrt(5))/2,ki=1/ui,sl=[new L(-ui,ki,0),new L(ui,ki,0),new L(-ki,0,ui),new L(ki,0,ui),new L(0,ui,-ki),new L(0,ui,ki),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,sa,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Cr,format:fn,colorSpace:jn,depthBuffer:!1},r=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(s)),this._blurMaterial=xp(s,t,e)}return r}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,r){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(rl),u.toneMapping=Zn,u.autoClear=!1;const m=new br({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new _e(new sr,m);let v=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy(rl),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Qr(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ji||t.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sl[(r-s-1)%sl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _e(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fi-1),v=s/g,d=isFinite(s)?1+Math.floor(u*v):fi;d>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${fi}`);const p=[];let b=0;for(let w=0;w<fi;++w){const N=w/v,ot=Math.exp(-N*N/2);p.push(ot),w===0?b+=ot:w<d&&(b+=2*ot)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const T=this._sizeLods[r],z=3*T*(r>S-Gi?r-S+Gi:0),C=4*(this._cubeSize-T);Qr(e,z,C,3*T,2*T),l.setRenderTarget(e),l.render(f,ia)}}function vp(i){const t=[],e=[],n=[];let r=i;const s=i-Gi+1+il.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Gi?l=il[a-i+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,d=2,p=1,b=new Float32Array(v*g*m),S=new Float32Array(d*g*m),T=new Float32Array(p*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,N=C>2?0:-1,ot=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];b.set(ot,v*g*C),S.set(h,d*g*C);const _=[C,C,C,C,C,C];T.set(_,p*g*C)}const z=new mn;z.setAttribute("position",new Oe(b,v)),z.setAttribute("uv",new Oe(S,d)),z.setAttribute("faceIndex",new Oe(T,p)),t.push(z),r>Gi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function xp(i,t,e){const n=new Float32Array(fi),r=new L(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:So(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ol(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ll(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function Mp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===Aa,u=l===Ji||l===ji;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new eo(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new eo(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yp(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let d=0,p=v.length;d<p;d++)t.remove(v[d])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let d=0,p=v.length;d<p;d++)t.update(v[d],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let S=0,T=b.length;S<T;S+=3){const z=b[S+0],C=b[S+1],w=b[S+2];h.push(z,C,C,w,w,z)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,T=b.length/3-1;S<T;S+=3){const z=S+0,C=S+1,w=S+2;h.push(z,C,C,w,w,z)}}else return;const d=new(mc(h)?yc:Sc)(h,1);d.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ep(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),e.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*a,g),e.update(m,n,g))}function u(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function f(h,m,g,v){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)c(h[p]/a,m[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=m[b];for(let b=0;b<v.length;b++)e.update(p,n,v[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Tp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function bp(i,t,e){const n=new WeakMap,r=new de;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let ot=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",ot)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let T=o.attributes.position.count*S,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*z*4*f),w=new _c(C,T,z,f);w.type=In,w.needsUpdate=!0;const N=S*4;for(let _=0;_<f;_++){const y=d[_],W=p[_],V=b[_],G=T*z*4*_;for(let Q=0;Q<y.count;Q++){const B=Q*N;m===!0&&(r.fromBufferAttribute(y,Q),C[G+B+0]=r.x,C[G+B+1]=r.y,C[G+B+2]=r.z,C[G+B+3]=0),g===!0&&(r.fromBufferAttribute(W,Q),C[G+B+4]=r.x,C[G+B+5]=r.y,C[G+B+6]=r.z,C[G+B+7]=0),v===!0&&(r.fromBufferAttribute(V,Q),C[G+B+8]=r.x,C[G+B+9]=r.y,C[G+B+10]=r.z,C[G+B+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Rt(T,z)},n.set(o,h),o.addEventListener("dispose",ot)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Ap(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class wc extends Ve{constructor(t,e,n,r,s,a,o,l,c,u=$i){if(u!==$i&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$i&&(n=_i),n===void 0&&u===tr&&(n=Qi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rc=new Ve,cl=new wc(1,1),Cc=new _c,Pc=new uh,Lc=new bc,ul=[],hl=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ul[r];if(s===void 0&&(s=new Float32Array(r),ul[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=hl[t];e===void 0&&(e=new Int32Array(t),hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Lp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),Re(e,n)}}function Dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),Re(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),Re(e,n)}}function Up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Vp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=pc,s=cl):s=Rc,e.setTexture2D(t||s,r)}function Gp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pc,r)}function Wp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Lc,r)}function Xp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cc,r)}function qp(i){switch(i){case 5126:return wp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return kp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function $p(i,t){i.uniform1fv(this.addr,t)}function Yp(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Zp(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Jp(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jp(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qp(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tm(i,t){i.uniform1iv(this.addr,t)}function em(i,t){i.uniform2iv(this.addr,t)}function nm(i,t){i.uniform3iv(this.addr,t)}function im(i,t){i.uniform4iv(this.addr,t)}function rm(i,t){i.uniform1uiv(this.addr,t)}function sm(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function om(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Rc,s[a])}function cm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Pc,s[a])}function um(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lc,s[a])}function hm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cc,s[a])}function dm(i){switch(i){case 5126:return $p;case 35664:return Yp;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return jp;case 35676:return Qp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return hm}}class fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qp(e.type)}}class pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dm(e.type)}}class mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function ml(i,t){i.seq.push(t),i.map[t.id]=t}function gm(i,t,e){const n=i.name,r=n.length;for(la.lastIndex=0;;){const s=la.exec(n),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ml(e,c===void 0?new fm(o,i,t):new pm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new mm(o),ml(e,f)),e=f}}}class _s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);gm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _m=37297;let vm=0;function xm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mm(i){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i);let n;switch(t===e?n="":t===ys&&e===Ss?n="LinearDisplayP3ToLinearSRGB":t===Ss&&e===ys&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case Rs:return[n,"LinearTransferOETF"];case ln:case vo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+xm(i.getShaderSource(t),a)}else return r}function Sm(i,t){const e=Mm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ym(i,t){let e;switch(t){case yu:e="Linear";break;case Eu:e="Reinhard";break;case Tu:e="Cineon";break;case bu:e="ACESFilmic";break;case wu:e="AgX";break;case ec:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ts=new L;function Em(){ue.getLuminanceCoefficients(ts);const i=ts.x.toFixed(4),t=ts.y.toFixed(4),e=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _r(i){return i!==""}function vl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(wm,Cm)}const Rm=new Map;function Cm(i,t){let e=Qt[t];if(e===void 0){const n=Rm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return no(e)}const Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(i){return i.replace(Pm,Lm)}function Lm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Im(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case ji:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Um(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(t="ENVMAP_MODE_REFRACTION"),t}function Nm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function Fm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Om(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Dm(e),c=Im(e),u=Um(e),f=Nm(e),h=Fm(e),m=Tm(e),g=bm(s),v=r.createProgram();let d,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(d=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Sm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=no(a),a=vl(a,e),a=xl(a,e),o=no(o),o=vl(o,e),o=xl(o,e),a=Ml(a),o=Ml(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+d+a,T=b+p+o,z=gl(r,r.VERTEX_SHADER,S),C=gl(r,r.FRAGMENT_SHADER,T);r.attachShader(v,z),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(y){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(z).trim(),G=r.getShaderInfoLog(C).trim();let Q=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,z,C);else{const st=_l(r,z,"vertex"),k=_l(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+W+`
`+st+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||G==="")&&(B=!1);B&&(y.diagnostics={runnable:Q,programLog:W,vertexShader:{log:V,prefix:d},fragmentShader:{log:G,prefix:p}})}r.deleteShader(z),r.deleteShader(C),N=new _s(r,v),ot=Am(r,v)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let ot;this.getAttributes=function(){return ot===void 0&&w(this),ot};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,_m)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=C,this}let Bm=0;class zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new km(t),e.set(t,n)),n}}class km{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Hm(i,t,e,n,r,s,a){const o=new xc,l=new zm,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,y,W,V,G){const Q=V.fog,B=G.geometry,st=_.isMeshStandardMaterial?V.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||st),ht=k&&k.mapping===ws?k.image.height:null,Tt=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,St=Y!==void 0?Y.length:0;let Zt=0;B.morphAttributes.position!==void 0&&(Zt=1),B.morphAttributes.normal!==void 0&&(Zt=2),B.morphAttributes.color!==void 0&&(Zt=3);let H,nt,Lt,_t;if(Tt){const De=_n[Tt];H=De.vertexShader,nt=De.fragmentShader}else H=_.vertexShader,nt=_.fragmentShader,l.update(_),Lt=l.getVertexShaderID(_),_t=l.getFragmentShaderID(_);const kt=i.getRenderTarget(),dt=G.isInstancedMesh===!0,tt=G.isBatchedMesh===!0,Yt=!!_.map,K=!!_.matcap,A=!!k,mt=!!_.aoMap,it=!!_.lightMap,lt=!!_.bumpMap,Mt=!!_.normalMap,Bt=!!_.displacementMap,bt=!!_.emissiveMap,E=!!_.metalnessMap,x=!!_.roughnessMap,O=_.anisotropy>0,q=_.clearcoat>0,J=_.dispersion>0,$=_.iridescence>0,Ut=_.sheen>0,vt=_.transmission>0,At=O&&!!_.anisotropyMap,Jt=q&&!!_.clearcoatMap,ct=q&&!!_.clearcoatNormalMap,It=q&&!!_.clearcoatRoughnessMap,Vt=$&&!!_.iridescenceMap,Gt=$&&!!_.iridescenceThicknessMap,Ft=Ut&&!!_.sheenColorMap,ee=Ut&&!!_.sheenRoughnessMap,qt=!!_.specularMap,ce=!!_.specularColorMap,I=!!_.specularIntensityMap,wt=vt&&!!_.transmissionMap,X=vt&&!!_.thicknessMap,j=!!_.gradientMap,Ct=!!_.alphaMap,Dt=_.alphaTest>0,re=!!_.alphaHash,me=!!_.extensions;let Te=Zn;_.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(Te=i.toneMapping);const se={shaderID:Tt,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:nt,defines:_.defines,customVertexShaderID:Lt,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:tt,batchingColor:tt&&G._colorsTexture!==null,instancing:dt,instancingColor:dt&&G.instanceColor!==null,instancingMorph:dt&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:jn,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:K,envMap:A,envMapMode:A&&k.mapping,envMapCubeUVHeight:ht,aoMap:mt,lightMap:it,bumpMap:lt,normalMap:Mt,displacementMap:m&&Bt,emissiveMap:bt,normalMapObjectSpace:Mt&&_.normalMapType===Lu,normalMapTangentSpace:Mt&&_.normalMapType===fc,metalnessMap:E,roughnessMap:x,anisotropy:O,anisotropyMap:At,clearcoat:q,clearcoatMap:Jt,clearcoatNormalMap:ct,clearcoatRoughnessMap:It,dispersion:J,iridescence:$,iridescenceMap:Vt,iridescenceThicknessMap:Gt,sheen:Ut,sheenColorMap:Ft,sheenRoughnessMap:ee,specularMap:qt,specularColorMap:ce,specularIntensityMap:I,transmission:vt,transmissionMap:wt,thicknessMap:X,gradientMap:j,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Dt,alphaHash:re,combine:_.combine,mapUv:Yt&&d(_.map.channel),aoMapUv:mt&&d(_.aoMap.channel),lightMapUv:it&&d(_.lightMap.channel),bumpMapUv:lt&&d(_.bumpMap.channel),normalMapUv:Mt&&d(_.normalMap.channel),displacementMapUv:Bt&&d(_.displacementMap.channel),emissiveMapUv:bt&&d(_.emissiveMap.channel),metalnessMapUv:E&&d(_.metalnessMap.channel),roughnessMapUv:x&&d(_.roughnessMap.channel),anisotropyMapUv:At&&d(_.anisotropyMap.channel),clearcoatMapUv:Jt&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&d(_.sheenRoughnessMap.channel),specularMapUv:qt&&d(_.specularMap.channel),specularColorMapUv:ce&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:wt&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:Ct&&d(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Mt||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Yt||Ct),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function b(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const W in _.defines)y.push(W),y.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(S(y,_),T(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function T(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function z(_){const y=v[_.type];let W;if(y){const V=_n[y];W=yh.clone(V.uniforms)}else W=_.uniforms;return W}function C(_,y){let W;for(let V=0,G=u.length;V<G;V++){const Q=u[V];if(Q.cacheKey===y){W=Q,++W.usedTimes;break}}return W===void 0&&(W=new Om(i,y,_,s),u.push(W)),W}function w(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function N(_){l.remove(_)}function ot(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:z,acquireProgram:C,releaseProgram:w,releaseShaderCache:N,programs:u,dispose:ot}}function Vm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function El(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,m,g,v,d){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:d},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=d),t++,p}function o(f,h,m,g,v,d){const p=a(f,h,m,g,v,d);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(f,h,m,g,v,d){const p=a(f,h,m,g,v,d);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||Gm),n.length>1&&n.sort(h||yl),r.length>1&&r.sort(h||yl)}function u(){for(let f=t,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Wm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new El,i.set(n,[a])):r>=s.length?(a=new El,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ie};break;case"SpotLight":e={position:new L,direction:new L,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $m=0;function Ym(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new Xm,e=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new pe,a=new pe;function o(c){let u=0,f=0,h=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let m=0,g=0,v=0,d=0,p=0,b=0,S=0,T=0,z=0,C=0,w=0;c.sort(Ym);for(let ot=0,_=c.length;ot<_;ot++){const y=c[ot],W=y.color,V=y.intensity,G=y.distance,Q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=W.r*V,f+=W.g*V,h+=W.b*V;else if(y.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(y.sh.coefficients[B],V);w++}else if(y.isDirectionalLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const st=y.shadow,k=e.get(y);k.shadowIntensity=st.intensity,k.shadowBias=st.bias,k.shadowNormalBias=st.normalBias,k.shadowRadius=st.radius,k.shadowMapSize=st.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=y.shadow.matrix,b++}n.directional[m]=B,m++}else if(y.isSpotLight){const B=t.get(y);B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(W).multiplyScalar(V),B.distance=G,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,n.spot[v]=B;const st=y.shadow;if(y.map&&(n.spotLightMap[z]=y.map,z++,st.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[v]=st.matrix,y.castShadow){const k=e.get(y);k.shadowIntensity=st.intensity,k.shadowBias=st.bias,k.shadowNormalBias=st.normalBias,k.shadowRadius=st.radius,k.shadowMapSize=st.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=Q,T++}v++}else if(y.isRectAreaLight){const B=t.get(y);B.color.copy(W).multiplyScalar(V),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),n.rectArea[d]=B,d++}else if(y.isPointLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),B.distance=y.distance,B.decay=y.decay,y.castShadow){const st=y.shadow,k=e.get(y);k.shadowIntensity=st.intensity,k.shadowBias=st.bias,k.shadowNormalBias=st.normalBias,k.shadowRadius=st.radius,k.shadowMapSize=st.mapSize,k.shadowCameraNear=st.camera.near,k.shadowCameraFar=st.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=y.shadow.matrix,S++}n.point[g]=B,g++}else if(y.isHemisphereLight){const B=t.get(y);B.skyColor.copy(y.color).multiplyScalar(V),B.groundColor.copy(y.groundColor).multiplyScalar(V),n.hemi[p]=B,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==d||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==T||N.numSpotMaps!==z||N.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+z-C,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=d,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=T,N.numSpotMaps=z,N.numLightProbes=w,n.version=$m++)}function l(c,u){let f=0,h=0,m=0,g=0,v=0;const d=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(S.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),h++}else if(S.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:n}}function Tl(i){const t=new Km(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Zm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Tl(i),t.set(r,[o])):s>=a.length?(o=new Tl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jm extends rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jm extends rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(i,t,e){let n=new Mo;const r=new Rt,s=new Rt,a=new de,o=new Jm({depthPacking:Pu}),l=new jm,c={},u=e.maxTextureSize,f={[Jn]:He,[He]:Jn,[Ln]:Ln},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Qm,fragmentShader:tg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _e(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(C,w,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const ot=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Kn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=p!==Cn&&this.type===Cn,G=p===Cn&&this.type!==Cn;for(let Q=0,B=C.length;Q<B;Q++){const st=C[Q],k=st.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ht=k.getFrameExtents();if(r.multiply(ht),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,k.mapSize.y=s.y)),k.map===null||V===!0||G===!0){const Y=this.type!==Cn?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new vi(r.x,r.y,Y),k.map.texture.name=st.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Tt=k.getViewportCount();for(let Y=0;Y<Tt;Y++){const St=k.getViewport(Y);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),W.viewport(a),k.updateMatrices(st,Y),n=k.getFrustum(),T(w,N,k.camera,st,this.type)}k.isPointLightShadow!==!0&&this.type===Cn&&b(k,N),k.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(ot,_,y)};function b(C,w){const N=t.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,N,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,N,m,v,null)}function S(C,w,N,ot){let _=null;const y=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)_=y;else if(_=N.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=_.uuid,V=w.uuid;let G=c[W];G===void 0&&(G={},c[W]=G);let Q=G[V];Q===void 0&&(Q=_.clone(),G[V]=Q,w.addEventListener("dispose",z)),_=Q}if(_.visible=w.visible,_.wireframe=w.wireframe,ot===Cn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:f[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=i.properties.get(_);W.light=N}return _}function T(C,w,N,ot,_){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const V=t.update(C),G=C.material;if(Array.isArray(G)){const Q=V.groups;for(let B=0,st=Q.length;B<st;B++){const k=Q[B],ht=G[k.materialIndex];if(ht&&ht.visible){const Tt=S(C,ht,ot,_);C.onBeforeShadow(i,C,w,N,V,Tt,k),i.renderBufferDirect(N,null,V,Tt,C,k),C.onAfterShadow(i,C,w,N,V,Tt,k)}}}else if(G.visible){const Q=S(C,G,ot,_);C.onBeforeShadow(i,C,w,N,V,Q,null),i.renderBufferDirect(N,null,V,Q,C,null),C.onAfterShadow(i,C,w,N,V,Q,null)}}const W=C.children;for(let V=0,G=W.length;V<G;V++)T(W[V],w,N,ot,_)}function z(C){C.target.removeEventListener("dispose",z);for(const N in c){const ot=c[N],_=C.target.uuid;_ in ot&&(ot[_].dispose(),delete ot[_])}}}const ng={[va]:xa,[Ma]:Ea,[Sa]:Ta,[Zi]:ya,[xa]:va,[Ea]:Ma,[Ta]:Sa,[ya]:Zi};function ig(i){function t(){let I=!1;const wt=new de;let X=null;const j=new de(0,0,0,0);return{setMask:function(Ct){X!==Ct&&!I&&(i.colorMask(Ct,Ct,Ct,Ct),X=Ct)},setLocked:function(Ct){I=Ct},setClear:function(Ct,Dt,re,me,Te){Te===!0&&(Ct*=me,Dt*=me,re*=me),wt.set(Ct,Dt,re,me),j.equals(wt)===!1&&(i.clearColor(Ct,Dt,re,me),j.copy(wt))},reset:function(){I=!1,X=null,j.set(-1,0,0,0)}}}function e(){let I=!1,wt=!1,X=null,j=null,Ct=null;return{setReversed:function(Dt){wt=Dt},setTest:function(Dt){Dt?Lt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Dt){X!==Dt&&!I&&(i.depthMask(Dt),X=Dt)},setFunc:function(Dt){if(wt&&(Dt=ng[Dt]),j!==Dt){switch(Dt){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=Dt}},setLocked:function(Dt){I=Dt},setClear:function(Dt){Ct!==Dt&&(i.clearDepth(Dt),Ct=Dt)},reset:function(){I=!1,X=null,j=null,Ct=null}}}function n(){let I=!1,wt=null,X=null,j=null,Ct=null,Dt=null,re=null,me=null,Te=null;return{setTest:function(se){I||(se?Lt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(se){wt!==se&&!I&&(i.stencilMask(se),wt=se)},setFunc:function(se,De,Ze){(X!==se||j!==De||Ct!==Ze)&&(i.stencilFunc(se,De,Ze),X=se,j=De,Ct=Ze)},setOp:function(se,De,Ze){(Dt!==se||re!==De||me!==Ze)&&(i.stencilOp(se,De,Ze),Dt=se,re=De,me=Ze)},setLocked:function(se){I=se},setClear:function(se){Te!==se&&(i.clearStencil(se),Te=se)},reset:function(){I=!1,wt=null,X=null,j=null,Ct=null,Dt=null,re=null,me=null,Te=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,g=!1,v=null,d=null,p=null,b=null,S=null,T=null,z=null,C=new ie(0,0,0),w=0,N=!1,ot=null,_=null,y=null,W=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,B=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(st)[1]),Q=B>=1):st.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),Q=B>=2);let k=null,ht={};const Tt=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),St=new de().fromArray(Tt),Zt=new de().fromArray(Y);function H(I,wt,X,j){const Ct=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(I,Dt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<X;re++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(wt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return Dt}const nt={};nt[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Lt(i.DEPTH_TEST),s.setFunc(Zi),it(!1),lt(Lo),Lt(i.CULL_FACE),A(Kn);function Lt(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function _t(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function kt(I,wt){return u[I]!==wt?(i.bindFramebuffer(I,wt),u[I]=wt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function dt(I,wt){let X=h,j=!1;if(I){X=f.get(wt),X===void 0&&(X=[],f.set(wt,X));const Ct=I.textures;if(X.length!==Ct.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,re=Ct.length;Dt<re;Dt++)X[Dt]=i.COLOR_ATTACHMENT0+Dt;X.length=Ct.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function tt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Yt={[di]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};Yt[su]=i.MIN,Yt[au]=i.MAX;const K={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[hu]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function A(I,wt,X,j,Ct,Dt,re,me,Te,se){if(I===Kn){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(Lt(i.BLEND),g=!0),I!==nu){if(I!==v||se!==N){if((d!==di||S!==di)&&(i.blendEquation(i.FUNC_ADD),d=di,S=di),se)switch(I){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,T=null,z=null,C.set(0,0,0),w=0,v=I,N=se}return}Ct=Ct||wt,Dt=Dt||X,re=re||j,(wt!==d||Ct!==S)&&(i.blendEquationSeparate(Yt[wt],Yt[Ct]),d=wt,S=Ct),(X!==p||j!==b||Dt!==T||re!==z)&&(i.blendFuncSeparate(K[X],K[j],K[Dt],K[re]),p=X,b=j,T=Dt,z=re),(me.equals(C)===!1||Te!==w)&&(i.blendColor(me.r,me.g,me.b,Te),C.copy(me),w=Te),v=I,N=!1}function mt(I,wt){I.side===Ln?_t(i.CULL_FACE):Lt(i.CULL_FACE);let X=I.side===He;wt&&(X=!X),it(X),I.blending===qi&&I.transparent===!1?A(Kn):A(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(I){ot!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),ot=I)}function lt(I){I!==Qc?(Lt(i.CULL_FACE),I!==_&&(I===Lo?i.cullFace(i.BACK):I===tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),_=I}function Mt(I){I!==y&&(Q&&i.lineWidth(I),y=I)}function Bt(I,wt,X){I?(Lt(i.POLYGON_OFFSET_FILL),(W!==wt||V!==X)&&(i.polygonOffset(wt,X),W=wt,V=X)):_t(i.POLYGON_OFFSET_FILL)}function bt(I){I?Lt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+G-1),k!==I&&(i.activeTexture(I),k=I)}function x(I,wt,X){X===void 0&&(k===null?X=i.TEXTURE0+G-1:X=k);let j=ht[X];j===void 0&&(j={type:void 0,texture:void 0},ht[X]=j),(j.type!==I||j.texture!==wt)&&(k!==X&&(i.activeTexture(X),k=X),i.bindTexture(I,wt||nt[I]),j.type=I,j.texture=wt)}function O(){const I=ht[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){St.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),St.copy(I))}function Ft(I){Zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function ee(I,wt){let X=l.get(wt);X===void 0&&(X=new WeakMap,l.set(wt,X));let j=X.get(I);j===void 0&&(j=i.getUniformBlockIndex(wt,I.name),X.set(I,j))}function qt(I,wt){const j=l.get(wt).get(I);o.get(wt)!==j&&(i.uniformBlockBinding(wt,j,I.__bindingPointIndex),o.set(wt,j))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,ht={},u={},f=new WeakMap,h=[],m=null,g=!1,v=null,d=null,p=null,b=null,S=null,T=null,z=null,C=new ie(0,0,0),w=0,N=!1,ot=null,_=null,y=null,W=null,V=null,St.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Lt,disable:_t,bindFramebuffer:kt,drawBuffers:dt,useProgram:tt,setBlending:A,setMaterial:mt,setFlipSided:it,setCullFace:lt,setLineWidth:Mt,setPolygonOffset:Bt,setScissorTest:bt,activeTexture:E,bindTexture:x,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:It,texImage3D:Vt,updateUBOMapping:ee,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:ct,texSubImage2D:$,texSubImage3D:Ut,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Gt,viewport:Ft,reset:ce}}function bl(i,t,e,n){const r=rg(n);switch(e){case ac:return i*t;case lc:return i*t;case cc:return i*t*2;case uc:return i*t/r.components*r.byteLength;case mo:return i*t/r.components*r.byteLength;case hc:return i*t*2/r.components*r.byteLength;case go:return i*t*2/r.components*r.byteLength;case oc:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case _o:return i*t*4/r.components*r.byteLength;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case La:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ms:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dc:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(i){switch(i){case On:case ic:return{byteLength:1,components:1};case Er:case rc:case Cr:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case _i:case ho:case In:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):bs("canvas")}function v(E,x,O){let q=1;const J=bt(E);if((J.width>O||J.height>O)&&(q=O/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(q*J.width),Ut=Math.floor(q*J.height);f===void 0&&(f=g($,Ut));const vt=x?g($,Ut):f;return vt.width=$,vt.height=Ut,vt.getContext("2d").drawImage(E,0,0,$,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Ut+")."),vt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function d(E){return E.generateMipmaps&&E.minFilter!==en&&E.minFilter!==hn}function p(E){i.generateMipmap(E)}function b(E,x,O,q,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const Ut=J?Ms:ue.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Ut===ve?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(E,x){let O;return E?x===null||x===_i||x===Qi?O=i.DEPTH24_STENCIL8:x===In?O=i.DEPTH32F_STENCIL8:x===Er&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===Qi?O=i.DEPTH_COMPONENT24:x===In?O=i.DEPTH_COMPONENT32F:x===Er&&(O=i.DEPTH_COMPONENT16),O}function T(E,x){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function z(E){const x=E.target;x.removeEventListener("dispose",z),w(x),x.isVideoTexture&&u.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),ot(x)}function w(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,q=h.get(O);if(q){const J=q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(E),Object.keys(q).length===0&&h.delete(O)}n.remove(E)}function N(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const O=E.source,q=h.get(O);delete q[x.__cacheKey],a.memory.textures--}function ot(E){const x=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let J=0;J<x.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[q][J]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=E.textures;for(let q=0,J=O.length;q<J;q++){const $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(E)}let _=0;function y(){_=0}function W(){const E=_;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),_+=1,E}function V(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function G(E,x){const O=n.get(E);if(E.isVideoTexture&&Mt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(O,E,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Q(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Zt(O,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function B(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Zt(O,E,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function st(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){H(O,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const k={[wa]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},ht={[en]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Tt={[Du]:i.NEVER,[Bu]:i.ALWAYS,[Iu]:i.LESS,[pc]:i.LEQUAL,[Uu]:i.EQUAL,[Ou]:i.GEQUAL,[Nu]:i.GREATER,[Fu]:i.NOTEQUAL};function Y(E,x){if(x.type===In&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===Ns||x.magFilter===Ur||x.magFilter===gi||x.minFilter===hn||x.minFilter===Ns||x.minFilter===Ur||x.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,k[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,k[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,k[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Tt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Ur&&x.minFilter!==gi||x.type===In&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function St(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",z));const q=x.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const $=V(x);if($!==E.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;const Ut=J[E.__cacheKey];Ut!==void 0&&(J[E.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(x)),E.__cacheKey=$,E.__webglTexture=J[$].texture}return O}function Zt(E,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const J=St(E,x),$=x.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+O);const Ut=n.get($);if($.version!==Ut.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const vt=ue.getPrimaries(ue.workingColorSpace),At=x.colorSpace===$n?null:ue.getPrimaries(x.colorSpace),Jt=x.colorSpace===$n||vt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ct=v(x.image,!1,r.maxTextureSize);ct=Bt(x,ct);const It=s.convert(x.format,x.colorSpace),Vt=s.convert(x.type);let Gt=b(x.internalFormat,It,Vt,x.colorSpace,x.isVideoTexture);Y(q,x);let Ft;const ee=x.mipmaps,qt=x.isVideoTexture!==!0,ce=Ut.__version===void 0||J===!0,I=$.dataReady,wt=T(x,ct);if(x.isDepthTexture)Gt=S(x.format===tr,x.type),ce&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,It,Vt,null));else if(x.isDataTexture)if(ee.length>0){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,ee[0].width,ee[0].height);for(let X=0,j=ee.length;X<j;X++)Ft=ee[X],qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Ft.width,Ft.height,It,Vt,Ft.data):e.texImage2D(i.TEXTURE_2D,X,Gt,Ft.width,Ft.height,0,It,Vt,Ft.data);x.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,ct.width,ct.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,It,Vt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,It,Vt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Gt,ee[0].width,ee[0].height,ct.depth);for(let X=0,j=ee.length;X<j;X++)if(Ft=ee[X],x.format!==fn)if(It!==null)if(qt){if(I)if(x.layerUpdates.size>0){const Ct=bl(Ft.width,Ft.height,x.format,x.type);for(const Dt of x.layerUpdates){const re=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Dt,Ft.width,Ft.height,1,It,re,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ft.width,Ft.height,ct.depth,It,Ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Gt,Ft.width,Ft.height,ct.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ft.width,Ft.height,ct.depth,It,Vt,Ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Gt,Ft.width,Ft.height,ct.depth,0,It,Vt,Ft.data)}else{qt&&ce&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,ee[0].width,ee[0].height);for(let X=0,j=ee.length;X<j;X++)Ft=ee[X],x.format!==fn?It!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Ft.width,Ft.height,It,Ft.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Ft.width,Ft.height,It,Vt,Ft.data):e.texImage2D(i.TEXTURE_2D,X,Gt,Ft.width,Ft.height,0,It,Vt,Ft.data)}else if(x.isDataArrayTexture)if(qt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Gt,ct.width,ct.height,ct.depth),I)if(x.layerUpdates.size>0){const X=bl(ct.width,ct.height,x.format,x.type);for(const j of x.layerUpdates){const Ct=ct.data.subarray(j*X/ct.data.BYTES_PER_ELEMENT,(j+1)*X/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ct.width,ct.height,1,It,Vt,Ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,It,Vt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,It,Vt,ct.data);else if(x.isData3DTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_3D,wt,Gt,ct.width,ct.height,ct.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,It,Vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,It,Vt,ct.data);else if(x.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(i.TEXTURE_2D,wt,Gt,ct.width,ct.height);else{let X=ct.width,j=ct.height;for(let Ct=0;Ct<wt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Gt,X,j,0,It,Vt,null),X>>=1,j>>=1}}else if(ee.length>0){if(qt&&ce){const X=bt(ee[0]);e.texStorage2D(i.TEXTURE_2D,wt,Gt,X.width,X.height)}for(let X=0,j=ee.length;X<j;X++)Ft=ee[X],qt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,It,Vt,Ft):e.texImage2D(i.TEXTURE_2D,X,Gt,It,Vt,Ft);x.generateMipmaps=!1}else if(qt){if(ce){const X=bt(ct);e.texStorage2D(i.TEXTURE_2D,wt,Gt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Vt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,It,Vt,ct);d(x)&&p(q),Ut.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function H(E,x,O){if(x.image.length!==6)return;const q=St(E,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const $=n.get(J);if(J.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Ut=ue.getPrimaries(ue.workingColorSpace),vt=x.colorSpace===$n?null:ue.getPrimaries(x.colorSpace),At=x.colorSpace===$n||Ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Jt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,It=[];for(let j=0;j<6;j++)!Jt&&!ct?It[j]=v(x.image[j],!0,r.maxCubemapSize):It[j]=ct?x.image[j].image:x.image[j],It[j]=Bt(x,It[j]);const Vt=It[0],Gt=s.convert(x.format,x.colorSpace),Ft=s.convert(x.type),ee=b(x.internalFormat,Gt,Ft,x.colorSpace),qt=x.isVideoTexture!==!0,ce=$.__version===void 0||q===!0,I=J.dataReady;let wt=T(x,Vt);Y(i.TEXTURE_CUBE_MAP,x);let X;if(Jt){qt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ee,Vt.width,Vt.height);for(let j=0;j<6;j++){X=It[j].mipmaps;for(let Ct=0;Ct<X.length;Ct++){const Dt=X[Ct];x.format!==fn?Gt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,ee,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,ee,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(X=x.mipmaps,qt&&ce){X.length>0&&wt++;const j=bt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ee,j.width,j.height)}for(let j=0;j<6;j++)if(ct){qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,It[j].width,It[j].height,Gt,Ft,It[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,It[j].width,It[j].height,0,Gt,Ft,It[j].data);for(let Ct=0;Ct<X.length;Ct++){const re=X[Ct].image[j].image;qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,re.width,re.height,Gt,Ft,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,ee,re.width,re.height,0,Gt,Ft,re.data)}}else{qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Gt,Ft,It[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Gt,Ft,It[j]);for(let Ct=0;Ct<X.length;Ct++){const Dt=X[Ct];qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,Gt,Ft,Dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,ee,Gt,Ft,Dt.image[j])}}}d(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function nt(E,x,O,q,J,$){const Ut=s.convert(O.format,O.colorSpace),vt=s.convert(O.type),At=b(O.internalFormat,Ut,vt,O.colorSpace);if(!n.get(x).__hasExternalTextures){const ct=Math.max(1,x.width>>$),It=Math.max(1,x.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,At,ct,It,x.depth,0,Ut,vt,null):e.texImage2D(J,$,At,ct,It,0,Ut,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,n.get(O).__webglTexture,0,it(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,n.get(O).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const q=x.depthTexture,J=q&&q.isDepthTexture?q.type:null,$=S(x.stencilBuffer,J),Ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=it(x);lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,E)}else{const q=x.textures;for(let J=0;J<q.length;J++){const $=q[J],Ut=s.convert($.format,$.colorSpace),vt=s.convert($.type),At=b($.internalFormat,Ut,vt,$.colorSpace),Jt=it(x);O&&lt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,At,x.width,x.height):lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,J=it(x);if(x.depthTexture.format===$i)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===tr)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function kt(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");_t(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Lt(x.__webglDepthbuffer[q],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Lt(x.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(E,x,O){const q=n.get(E);x!==void 0&&nt(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(E)}function tt(E){const x=E.texture,O=n.get(E),q=n.get(x);E.addEventListener("dispose",C);const J=E.textures,$=E.isWebGLCubeRenderTarget===!0,Ut=J.length>1;if(Ut||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[vt]=[];for(let At=0;At<x.mipmaps.length;At++)O.__webglFramebuffer[vt][At]=i.createFramebuffer()}else O.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let vt=0;vt<x.mipmaps.length;vt++)O.__webglFramebuffer[vt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let vt=0,At=J.length;vt<At;vt++){const Jt=n.get(J[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&lt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<J.length;vt++){const At=J[vt];O.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);const Jt=s.convert(At.format,At.colorSpace),ct=s.convert(At.type),It=b(At.internalFormat,Jt,ct,At.colorSpace,E.isXRRenderTarget===!0),Vt=it(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,It,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Y(i.TEXTURE_CUBE_MAP,x);for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)nt(O.__webglFramebuffer[vt][At],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else nt(O.__webglFramebuffer[vt],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);d(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let vt=0,At=J.length;vt<At;vt++){const Jt=J[vt],ct=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Y(i.TEXTURE_2D,Jt),nt(O.__webglFramebuffer,E,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),d(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(vt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,q.__webglTexture),Y(vt,x),x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)nt(O.__webglFramebuffer[At],E,x,i.COLOR_ATTACHMENT0,vt,At);else nt(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,vt,0);d(x)&&p(vt),e.unbindTexture()}E.depthBuffer&&kt(E)}function Yt(E){const x=E.textures;for(let O=0,q=x.length;O<q;O++){const J=x[O];if(d(J)){const $=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ut=n.get(J).__webglTexture;e.bindTexture($,Ut),p($),e.unbindTexture()}}}const K=[],A=[];function mt(E){if(E.samples>0){if(lt(E)===!1){const x=E.textures,O=E.width,q=E.height;let J=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(E),vt=x.length>1;if(vt)for(let At=0;At<x.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let At=0;At<x.length;At++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const Jt=n.get(x[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,J,i.NEAREST),l===!0&&(K.length=0,A.length=0,K.push(i.COLOR_ATTACHMENT0+At),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push($),A.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<x.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);const Jt=n.get(x[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function it(E){return Math.min(r.maxSamples,E.samples)}function lt(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(E){const x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function Bt(E,x){const O=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==jn&&O!==$n&&(ue.getTransfer(O)===ve?(q!==fn||J!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=y,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=B,this.setTextureCube=st,this.rebindTextures=dt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=lt}function ag(i,t){function e(n,r=$n){let s;const a=ue.getTransfer(r);if(n===On)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===rc)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===fn)return i.RGBA;if(n===lc)return i.LUMINANCE;if(n===cc)return i.LUMINANCE_ALPHA;if(n===$i)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===hs||n===ds||n===fs||n===ps)if(a===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===La||n===Da)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ia||n===Ua)return a===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Na)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===$a||n===Ya||n===Ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ms||n===Za||n===Ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ms)return a===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===ja||n===Qa||n===to)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ms)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class og extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,n),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`;class hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:cg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends ir{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const v=new hg,d=e.getContextAttributes();let p=null,b=null;const S=[],T=[],z=new Rt;let C=null;const w=new Ye;w.layers.enable(1),w.viewport=new de;const N=new Ye;N.layers.enable(2),N.viewport=new de;const ot=[w,N],_=new og;_.layers.enable(1),_.layers.enable(2);let y=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let nt=S[H];return nt===void 0&&(nt=new ca,S[H]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(H){let nt=S[H];return nt===void 0&&(nt=new ca,S[H]=nt),nt.getGripSpace()},this.getHand=function(H){let nt=S[H];return nt===void 0&&(nt=new ca,S[H]=nt),nt.getHandSpace()};function V(H){const nt=T.indexOf(H.inputSource);if(nt===-1)return;const Lt=S[nt];Lt!==void 0&&(Lt.update(H.inputSource,H.frame,c||a),Lt.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Q);for(let H=0;H<S.length;H++){const nt=T[H];nt!==null&&(T[H]=null,S[H].disconnect(nt))}y=null,W=null,v.reset(),t.setRenderTarget(p),m=null,h=null,f=null,r=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Q),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(z),r.renderState.layers===void 0){const nt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new vi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let nt=null,Lt=null,_t=null;d.depth&&(_t=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=d.stencil?tr:$i,Lt=d.stencil?Qi:_i);const kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(kt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new vi(h.textureWidth,h.textureHeight,{format:fn,type:On,depthTexture:new wc(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(H){for(let nt=0;nt<H.removed.length;nt++){const Lt=H.removed[nt],_t=T.indexOf(Lt);_t>=0&&(T[_t]=null,S[_t].disconnect(Lt))}for(let nt=0;nt<H.added.length;nt++){const Lt=H.added[nt];let _t=T.indexOf(Lt);if(_t===-1){for(let dt=0;dt<S.length;dt++)if(dt>=T.length){T.push(Lt),_t=dt;break}else if(T[dt]===null){T[dt]=Lt,_t=dt;break}if(_t===-1)break}const kt=S[_t];kt&&kt.connect(Lt)}}const B=new L,st=new L;function k(H,nt,Lt){B.setFromMatrixPosition(nt.matrixWorld),st.setFromMatrixPosition(Lt.matrixWorld);const _t=B.distanceTo(st),kt=nt.projectionMatrix.elements,dt=Lt.projectionMatrix.elements,tt=kt[14]/(kt[10]-1),Yt=kt[14]/(kt[10]+1),K=(kt[9]+1)/kt[5],A=(kt[9]-1)/kt[5],mt=(kt[8]-1)/kt[0],it=(dt[8]+1)/dt[0],lt=tt*mt,Mt=tt*it,Bt=_t/(-mt+it),bt=Bt*-mt;if(nt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(bt),H.translateZ(Bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),kt[10]===-1)H.projectionMatrix.copy(nt.projectionMatrix),H.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const E=tt+Bt,x=Yt+Bt,O=lt-bt,q=Mt+(_t-bt),J=K*Yt/x*E,$=A*Yt/x*E;H.projectionMatrix.makePerspective(O,q,J,$,E,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ht(H,nt){nt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(nt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let nt=H.near,Lt=H.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(Lt=v.depthFar)),_.near=N.near=w.near=nt,_.far=N.far=w.far=Lt,(y!==_.near||W!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,W=_.far);const _t=H.parent,kt=_.cameras;ht(_,_t);for(let dt=0;dt<kt.length;dt++)ht(kt[dt],_t);kt.length===2?k(_,w,N):_.projectionMatrix.copy(w.projectionMatrix),Tt(H,_,_t)};function Tt(H,nt,Lt){Lt===null?H.matrix.copy(nt.matrixWorld):(H.matrix.copy(Lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(nt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(nt.projectionMatrix),H.projectionMatrixInverse.copy(nt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Tr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Y=null;function St(H,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){const Lt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let _t=!1;Lt.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let dt=0;dt<Lt.length;dt++){const tt=Lt[dt];let Yt=null;if(m!==null)Yt=m.getViewport(tt);else{const A=f.getViewSubImage(h,tt);Yt=A.viewport,dt===0&&(t.setRenderTargetTextures(b,A.colorTexture,h.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(b))}let K=ot[dt];K===void 0&&(K=new Ye,K.layers.enable(dt),K.viewport=new de,ot[dt]=K),K.matrix.fromArray(tt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(tt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),dt===0&&(_.matrix.copy(K.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(K)}const kt=r.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const dt=f.getDepthInformation(Lt[0]);dt&&dt.isValid&&dt.texture&&v.init(t,dt,r.renderState)}}for(let Lt=0;Lt<S.length;Lt++){const _t=T[Lt],kt=S[Lt];_t!==null&&kt!==void 0&&kt.update(_t,nt,c||a)}Y&&Y(H,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Zt=new Ac;Zt.setAnimationLoop(St),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}const li=new vn,fg=new pe;function pg(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Ec(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,b,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,T)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),v(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,b,S):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===He&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===He&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,T=b.envMapRotation;S&&(d.envMap.value=S,li.copy(T),li.x*=-1,li.y*=-1,li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),d.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(li)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=S*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const b=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const T=S.program;n.uniformBlockBinding(b,T)}function c(b,S){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",d));const z=S.program;n.updateUBOMapping(b,z);const C=t.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const S=f();b.__bindingPointIndex=S;const T=i.createBuffer(),z=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],T=b.uniforms,z=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,w=T.length;C<w;C++){const N=Array.isArray(T[C])?T[C]:[T[C]];for(let ot=0,_=N.length;ot<_;ot++){const y=N[ot];if(m(y,C,ot,z)===!0){const W=y.__offset,V=Array.isArray(y.value)?y.value:[y.value];let G=0;for(let Q=0;Q<V.length;Q++){const B=V[Q],st=v(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,W+G,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):(B.toArray(y.__data,G),G+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,T,z){const C=b.value,w=S+"_"+T;if(z[w]===void 0)return typeof C=="number"||typeof C=="boolean"?z[w]=C:z[w]=C.clone(),!0;{const N=z[w];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return z[w]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(b){const S=b.uniforms;let T=0;const z=16;for(let w=0,N=S.length;w<N;w++){const ot=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,y=ot.length;_<y;_++){const W=ot[_],V=Array.isArray(W.value)?W.value:[W.value];for(let G=0,Q=V.length;G<Q;G++){const B=V[G],st=v(B),k=T%z,ht=k%st.boundary,Tt=k+ht;T+=ht,Tt!==0&&z-Tt<st.storage&&(T+=z-Tt),W.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=st.storage}}}const C=T%z;return C>0&&(T+=z-C),b.__size=T,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function d(b){const S=b.target;S.removeEventListener("dispose",d);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class gg{constructor(t={}){const{canvas:e=eh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,d=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Zn,this.toneMappingExposure=1;const S=this;let T=!1,z=0,C=0,w=null,N=-1,ot=null;const _=new de,y=new de;let W=null;const V=new ie(0);let G=0,Q=e.width,B=e.height,st=1,k=null,ht=null;const Tt=new de(0,0,Q,B),Y=new de(0,0,Q,B);let St=!1;const Zt=new Mo;let H=!1,nt=!1;const Lt=new pe,_t=new pe,kt=new L,dt=new de,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function K(){return w===null?st:1}let A=n;function mt(M,R){return e.getContext(M,R)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),A===null){const R="webgl2";if(A=mt(R,M),A===null)throw mt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let it,lt,Mt,Bt,bt,E,x,O,q,J,$,Ut,vt,At,Jt,ct,It,Vt,Gt,Ft,ee,qt,ce,I;function wt(){it=new Sp(A),it.init(),qt=new ag(A,it),lt=new pp(A,it,t,qt),Mt=new ig(A),lt.reverseDepthBuffer&&Mt.buffers.depth.setReversed(!0),Bt=new Tp(A),bt=new Vm,E=new sg(A,it,Mt,bt,lt,qt,Bt),x=new gp(S),O=new Mp(S),q=new Ch(A),ce=new dp(A,q),J=new yp(A,q,Bt,ce),$=new Ap(A,J,q,Bt),Gt=new bp(A,lt,E),ct=new mp(bt),Ut=new Hm(S,x,O,it,lt,ce,ct),vt=new pg(S,bt),At=new Wm,Jt=new Zm(it),Vt=new hp(S,x,O,Mt,$,h,l),It=new eg(S,$,lt),I=new mg(A,Bt,lt,Mt),Ft=new fp(A,it,Bt),ee=new Ep(A,it,Bt),Bt.programs=Ut.programs,S.capabilities=lt,S.extensions=it,S.properties=bt,S.renderLists=At,S.shadowMap=It,S.state=Mt,S.info=Bt}wt();const X=new dg(S,A);this.xr=X,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(M){M!==void 0&&(st=M,this.setSize(Q,B,!1))},this.getSize=function(M){return M.set(Q,B)},this.setSize=function(M,R,D=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,B=R,e.width=Math.floor(M*st),e.height=Math.floor(R*st),D===!0&&(e.style.width=M+"px",e.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(Q*st,B*st).floor()},this.setDrawingBufferSize=function(M,R,D){Q=M,B=R,st=D,e.width=Math.floor(M*D),e.height=Math.floor(R*D),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,R,D,U){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,R,D,U),Mt.viewport(_.copy(Tt).multiplyScalar(st).round())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,R,D,U){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,R,D,U),Mt.scissor(y.copy(Y).multiplyScalar(st).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(M){Mt.setScissorTest(St=M)},this.setOpaqueSort=function(M){k=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(M=!0,R=!0,D=!0){let U=0;if(M){let P=!1;if(w!==null){const Z=w.texture.format;P=Z===_o||Z===go||Z===mo}if(P){const Z=w.texture.type,ft=Z===On||Z===_i||Z===Er||Z===Qi||Z===fo||Z===po,ut=Vt.getClearColor(),rt=Vt.getClearAlpha(),gt=ut.r,Pt=ut.g,at=ut.b;ft?(m[0]=gt,m[1]=Pt,m[2]=at,m[3]=rt,A.clearBufferuiv(A.COLOR,0,m)):(g[0]=gt,g[1]=Pt,g[2]=at,g[3]=rt,A.clearBufferiv(A.COLOR,0,g))}else U|=A.COLOR_BUFFER_BIT}R&&(U|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(U|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),At.dispose(),Jt.dispose(),bt.dispose(),x.dispose(),O.dispose(),$.dispose(),ce.dispose(),I.dispose(),Ut.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qn),X.removeEventListener("sessionend",ti),Mn.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Bt.autoReset,R=It.enabled,D=It.autoUpdate,U=It.needsUpdate,P=It.type;wt(),Bt.autoReset=M,It.enabled=R,It.autoUpdate=D,It.needsUpdate=U,It.type=P}function Dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const R=M.target;R.removeEventListener("dispose",re),me(R)}function me(M){Te(M),bt.remove(M)}function Te(M){const R=bt.get(M).programs;R!==void 0&&(R.forEach(function(D){Ut.releaseProgram(D)}),M.isShaderMaterial&&Ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,D,U,P,Z){R===null&&(R=tt);const ft=P.isMesh&&P.matrixWorld.determinant()<0,ut=zt(M,R,D,U,P);Mt.setMaterial(U,ft);let rt=D.index,gt=1;if(U.wireframe===!0){if(rt=J.getWireframeAttribute(D),rt===void 0)return;gt=2}const Pt=D.drawRange,at=D.attributes.position;let $t=Pt.start*gt,Kt=(Pt.start+Pt.count)*gt;Z!==null&&($t=Math.max($t,Z.start*gt),Kt=Math.min(Kt,(Z.start+Z.count)*gt)),rt!==null?($t=Math.max($t,0),Kt=Math.min(Kt,rt.count)):at!=null&&($t=Math.max($t,0),Kt=Math.min(Kt,at.count));const ne=Kt-$t;if(ne<0||ne===1/0)return;ce.setup(P,U,ut,D,rt);let fe,jt=Ft;if(rt!==null&&(fe=q.get(rt),jt=ee,jt.setIndex(fe)),P.isMesh)U.wireframe===!0?(Mt.setLineWidth(U.wireframeLinewidth*K()),jt.setMode(A.LINES)):jt.setMode(A.TRIANGLES);else if(P.isLine){let Nt=U.linewidth;Nt===void 0&&(Nt=1),Mt.setLineWidth(Nt*K()),P.isLineSegments?jt.setMode(A.LINES):P.isLineLoop?jt.setMode(A.LINE_LOOP):jt.setMode(A.LINE_STRIP)}else P.isPoints?jt.setMode(A.POINTS):P.isSprite&&jt.setMode(A.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)jt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))jt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Nt=P._multiDrawStarts,ge=P._multiDrawCounts,ae=P._multiDrawCount,xe=rt?q.get(rt).bytesPerElement:1,oe=bt.get(U).currentProgram.getUniforms();for(let he=0;he<ae;he++)oe.setValue(A,"_gl_DrawID",he),jt.render(Nt[he]/xe,ge[he])}else if(P.isInstancedMesh)jt.renderInstances($t,ne,P.count);else if(D.isInstancedBufferGeometry){const Nt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,ge=Math.min(D.instanceCount,Nt);jt.renderInstances($t,ne,ge)}else jt.render($t,ne)};function se(M,R,D){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,bi(M,R,D),M.side=Jn,M.needsUpdate=!0,bi(M,R,D),M.side=Ln):bi(M,R,D)}this.compile=function(M,R,D=null){D===null&&(D=M),d=Jt.get(D),d.init(R),b.push(d),D.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),M!==D&&M.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();const U=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Z=P.material;if(Z)if(Array.isArray(Z))for(let ft=0;ft<Z.length;ft++){const ut=Z[ft];se(ut,D,P),U.add(ut)}else se(Z,D,P),U.add(Z)}),b.pop(),d=null,U},this.compileAsync=function(M,R,D=null){const U=this.compile(M,R,D);return new Promise(P=>{function Z(){if(U.forEach(function(ft){bt.get(ft).currentProgram.isReady()&&U.delete(ft)}),U.size===0){P(M);return}setTimeout(Z,10)}it.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let De=null;function Ze(M){De&&De(M)}function Qn(){Mn.stop()}function ti(){Mn.start()}const Mn=new Ac;Mn.setAnimationLoop(Ze),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(M){De=M,X.setAnimationLoop(M),M===null?Mn.stop():Mn.start()},X.addEventListener("sessionstart",Qn),X.addEventListener("sessionend",ti),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(R),R=X.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,R,w),d=Jt.get(M,b.length),d.init(R),b.push(d),_t.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Zt.setFromProjectionMatrix(_t),nt=this.localClippingEnabled,H=ct.init(this.clippingPlanes,nt),v=At.get(M,p.length),v.init(),p.push(v),X.enabled===!0&&X.isPresenting===!0){const Z=S.xr.getDepthSensingMesh();Z!==null&&yi(Z,R,-1/0,S.sortObjects)}yi(M,R,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(k,ht),Yt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Yt&&Vt.addToRenderList(v,M),this.info.render.frame++,H===!0&&ct.beginShadows();const D=d.state.shadowsArray;It.render(D,M,R),H===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=v.opaque,P=v.transmissive;if(d.setupLights(),R.isArrayCamera){const Z=R.cameras;if(P.length>0)for(let ft=0,ut=Z.length;ft<ut;ft++){const rt=Z[ft];Ei(U,P,M,rt)}Yt&&Vt.render(M);for(let ft=0,ut=Z.length;ft<ut;ft++){const rt=Z[ft];Dr(v,M,rt,rt.viewport)}}else P.length>0&&Ei(U,P,M,R),Yt&&Vt.render(M),Dr(v,M,R);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(S,M,R),ce.resetDefaultState(),N=-1,ot=null,b.pop(),b.length>0?(d=b[b.length-1],H===!0&&ct.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function yi(M,R,D,U){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)D=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Zt.intersectsSprite(M)){U&&dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);const ft=$.update(M),ut=M.material;ut.visible&&v.push(M,ft,ut,D,dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Zt.intersectsObject(M))){const ft=$.update(M),ut=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),dt.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),dt.copy(ft.boundingSphere.center)),dt.applyMatrix4(M.matrixWorld).applyMatrix4(_t)),Array.isArray(ut)){const rt=ft.groups;for(let gt=0,Pt=rt.length;gt<Pt;gt++){const at=rt[gt],$t=ut[at.materialIndex];$t&&$t.visible&&v.push(M,ft,$t,D,dt.z,at)}}else ut.visible&&v.push(M,ft,ut,D,dt.z,null)}}const Z=M.children;for(let ft=0,ut=Z.length;ft<ut;ft++)yi(Z[ft],R,D,U)}function Dr(M,R,D,U){const P=M.opaque,Z=M.transmissive,ft=M.transparent;d.setupLightsView(D),H===!0&&ct.setGlobalState(S.clippingPlanes,D),U&&Mt.viewport(_.copy(U)),P.length>0&&Ti(P,R,D),Z.length>0&&Ti(Z,R,D),ft.length>0&&Ti(ft,R,D),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ei(M,R,D,U){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[U.id]===void 0&&(d.state.transmissionRenderTarget[U.id]=new vi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Cr:On,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const Z=d.state.transmissionRenderTarget[U.id],ft=U.viewport||_;Z.setSize(ft.z,ft.w);const ut=S.getRenderTarget();S.setRenderTarget(Z),S.getClearColor(V),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),Yt&&Vt.render(D);const rt=S.toneMapping;S.toneMapping=Zn;const gt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),d.setupLightsView(U),H===!0&&ct.setGlobalState(S.clippingPlanes,U),Ti(M,D,U),E.updateMultisampleRenderTarget(Z),E.updateRenderTargetMipmap(Z),it.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let at=0,$t=R.length;at<$t;at++){const Kt=R[at],ne=Kt.object,fe=Kt.geometry,jt=Kt.material,Nt=Kt.group;if(jt.side===Ln&&ne.layers.test(U.layers)){const ge=jt.side;jt.side=He,jt.needsUpdate=!0,Ir(ne,D,U,fe,jt,Nt),jt.side=ge,jt.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(Z),E.updateRenderTargetMipmap(Z))}S.setRenderTarget(ut),S.setClearColor(V,G),gt!==void 0&&(U.viewport=gt),S.toneMapping=rt}function Ti(M,R,D){const U=R.isScene===!0?R.overrideMaterial:null;for(let P=0,Z=M.length;P<Z;P++){const ft=M[P],ut=ft.object,rt=ft.geometry,gt=U===null?ft.material:U,Pt=ft.group;ut.layers.test(D.layers)&&Ir(ut,R,D,rt,gt,Pt)}}function Ir(M,R,D,U,P,Z){M.onBeforeRender(S,R,D,U,P,Z),M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(S,R,D,U,M,Z),P.transparent===!0&&P.side===Ln&&P.forceSinglePass===!1?(P.side=He,P.needsUpdate=!0,S.renderBufferDirect(D,R,U,P,M,Z),P.side=Jn,P.needsUpdate=!0,S.renderBufferDirect(D,R,U,P,M,Z),P.side=Ln):S.renderBufferDirect(D,R,U,P,M,Z),M.onAfterRender(S,R,D,U,P,Z)}function bi(M,R,D){R.isScene!==!0&&(R=tt);const U=bt.get(M),P=d.state.lights,Z=d.state.shadowsArray,ft=P.state.version,ut=Ut.getParameters(M,P.state,Z,R,D),rt=Ut.getProgramCacheKey(ut);let gt=U.programs;U.environment=M.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(M.isMeshStandardMaterial?O:x).get(M.envMap||U.environment),U.envMapRotation=U.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,gt===void 0&&(M.addEventListener("dispose",re),gt=new Map,U.programs=gt);let Pt=gt.get(rt);if(Pt!==void 0){if(U.currentProgram===Pt&&U.lightsStateVersion===ft)return Ot(M,ut),Pt}else ut.uniforms=Ut.getUniforms(M),M.onBeforeCompile(ut,S),Pt=Ut.acquireProgram(ut,rt),gt.set(rt,Pt),U.uniforms=ut.uniforms;const at=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(at.clippingPlanes=ct.uniform),Ot(M,ut),U.needsLights=Wt(M),U.lightsStateVersion=ft,U.needsLights&&(at.ambientLightColor.value=P.state.ambient,at.lightProbe.value=P.state.probe,at.directionalLights.value=P.state.directional,at.directionalLightShadows.value=P.state.directionalShadow,at.spotLights.value=P.state.spot,at.spotLightShadows.value=P.state.spotShadow,at.rectAreaLights.value=P.state.rectArea,at.ltc_1.value=P.state.rectAreaLTC1,at.ltc_2.value=P.state.rectAreaLTC2,at.pointLights.value=P.state.point,at.pointLightShadows.value=P.state.pointShadow,at.hemisphereLights.value=P.state.hemi,at.directionalShadowMap.value=P.state.directionalShadowMap,at.directionalShadowMatrix.value=P.state.directionalShadowMatrix,at.spotShadowMap.value=P.state.spotShadowMap,at.spotLightMatrix.value=P.state.spotLightMatrix,at.spotLightMap.value=P.state.spotLightMap,at.pointShadowMap.value=P.state.pointShadowMap,at.pointShadowMatrix.value=P.state.pointShadowMatrix),U.currentProgram=Pt,U.uniformsList=null,Pt}function et(M){if(M.uniformsList===null){const R=M.currentProgram.getUniforms();M.uniformsList=_s.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function Ot(M,R){const D=bt.get(M);D.outputColorSpace=R.outputColorSpace,D.batching=R.batching,D.batchingColor=R.batchingColor,D.instancing=R.instancing,D.instancingColor=R.instancingColor,D.instancingMorph=R.instancingMorph,D.skinning=R.skinning,D.morphTargets=R.morphTargets,D.morphNormals=R.morphNormals,D.morphColors=R.morphColors,D.morphTargetsCount=R.morphTargetsCount,D.numClippingPlanes=R.numClippingPlanes,D.numIntersection=R.numClipIntersection,D.vertexAlphas=R.vertexAlphas,D.vertexTangents=R.vertexTangents,D.toneMapping=R.toneMapping}function zt(M,R,D,U,P){R.isScene!==!0&&(R=tt),E.resetTextureUnits();const Z=R.fog,ft=U.isMeshStandardMaterial?R.environment:null,ut=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jn,rt=(U.isMeshStandardMaterial?O:x).get(U.envMap||ft),gt=U.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Pt=!!D.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),at=!!D.morphAttributes.position,$t=!!D.morphAttributes.normal,Kt=!!D.morphAttributes.color;let ne=Zn;U.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ne=S.toneMapping);const fe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,jt=fe!==void 0?fe.length:0,Nt=bt.get(U),ge=d.state.lights;if(H===!0&&(nt===!0||M!==ot)){const Ce=M===ot&&U.id===N;ct.setState(U,M,Ce)}let ae=!1;U.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ge.state.version||Nt.outputColorSpace!==ut||P.isBatchedMesh&&Nt.batching===!1||!P.isBatchedMesh&&Nt.batching===!0||P.isBatchedMesh&&Nt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Nt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Nt.instancing===!1||!P.isInstancedMesh&&Nt.instancing===!0||P.isSkinnedMesh&&Nt.skinning===!1||!P.isSkinnedMesh&&Nt.skinning===!0||P.isInstancedMesh&&Nt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Nt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Nt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Nt.instancingMorph===!1&&P.morphTexture!==null||Nt.envMap!==rt||U.fog===!0&&Nt.fog!==Z||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ct.numPlanes||Nt.numIntersection!==ct.numIntersection)||Nt.vertexAlphas!==gt||Nt.vertexTangents!==Pt||Nt.morphTargets!==at||Nt.morphNormals!==$t||Nt.morphColors!==Kt||Nt.toneMapping!==ne||Nt.morphTargetsCount!==jt)&&(ae=!0):(ae=!0,Nt.__version=U.version);let xe=Nt.currentProgram;ae===!0&&(xe=bi(U,R,P));let oe=!1,he=!1,be=!1;const le=xe.getUniforms(),Ae=Nt.uniforms;if(Mt.useProgram(xe.program)&&(oe=!0,he=!0,be=!0),U.id!==N&&(N=U.id,he=!0),oe||ot!==M){lt.reverseDepthBuffer?(Lt.copy(M.projectionMatrix),ih(Lt),rh(Lt),le.setValue(A,"projectionMatrix",Lt)):le.setValue(A,"projectionMatrix",M.projectionMatrix),le.setValue(A,"viewMatrix",M.matrixWorldInverse);const Ce=le.map.cameraPosition;Ce!==void 0&&Ce.setValue(A,kt.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&le.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&le.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,he=!0,be=!0)}if(P.isSkinnedMesh){le.setOptional(A,P,"bindMatrix"),le.setOptional(A,P,"bindMatrixInverse");const Ce=P.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),le.setValue(A,"boneTexture",Ce.boneTexture,E))}P.isBatchedMesh&&(le.setOptional(A,P,"batchingTexture"),le.setValue(A,"batchingTexture",P._matricesTexture,E),le.setOptional(A,P,"batchingIdTexture"),le.setValue(A,"batchingIdTexture",P._indirectTexture,E),le.setOptional(A,P,"batchingColorTexture"),P._colorsTexture!==null&&le.setValue(A,"batchingColorTexture",P._colorsTexture,E));const Je=D.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&Gt.update(P,D,xe),(he||Nt.receiveShadow!==P.receiveShadow)&&(Nt.receiveShadow=P.receiveShadow,le.setValue(A,"receiveShadow",P.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ae.envMap.value=rt,Ae.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(Ae.envMapIntensity.value=R.environmentIntensity),he&&(le.setValue(A,"toneMappingExposure",S.toneMappingExposure),Nt.needsLights&&Ht(Ae,be),Z&&U.fog===!0&&vt.refreshFogUniforms(Ae,Z),vt.refreshMaterialUniforms(Ae,U,st,B,d.state.transmissionRenderTarget[M.id]),_s.upload(A,et(Nt),Ae,E)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(_s.upload(A,et(Nt),Ae,E),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&le.setValue(A,"center",P.center),le.setValue(A,"modelViewMatrix",P.modelViewMatrix),le.setValue(A,"normalMatrix",P.normalMatrix),le.setValue(A,"modelMatrix",P.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ce=U.uniformsGroups;for(let Sn=0,ei=Ce.length;Sn<ei;Sn++){const rn=Ce[Sn];I.update(rn,xe),I.bind(rn,xe)}}return xe}function Ht(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function Wt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,R,D){bt.get(M.texture).__webglTexture=R,bt.get(M.depthTexture).__webglTexture=D;const U=bt.get(M);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=D===void 0,U.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,R){const D=bt.get(M);D.__webglFramebuffer=R,D.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,D=0){w=M,z=R,C=D;let U=!0,P=null,Z=!1,ft=!1;if(M){const rt=bt.get(M);if(rt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(A.FRAMEBUFFER,null),U=!1;else if(rt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(rt.__hasExternalTextures)E.rebindTextures(M,bt.get(M.texture).__webglTexture,bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const at=M.depthTexture;if(rt.__boundDepthTexture!==at){if(at!==null&&bt.has(at)&&(M.width!==at.image.width||M.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const gt=M.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(ft=!0);const Pt=bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[R])?P=Pt[R][D]:P=Pt[R],Z=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?P=bt.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?P=Pt[D]:P=Pt,_.copy(M.viewport),y.copy(M.scissor),W=M.scissorTest}else _.copy(Tt).multiplyScalar(st).floor(),y.copy(Y).multiplyScalar(st).floor(),W=St;if(Mt.bindFramebuffer(A.FRAMEBUFFER,P)&&U&&Mt.drawBuffers(M,P),Mt.viewport(_),Mt.scissor(y),Mt.setScissorTest(W),Z){const rt=bt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+R,rt.__webglTexture,D)}else if(ft){const rt=bt.get(M.texture),gt=R||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,rt.__webglTexture,D||0,gt)}N=-1},this.readRenderTargetPixels=function(M,R,D,U,P,Z,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(ut=ut[ft]),ut){Mt.bindFramebuffer(A.FRAMEBUFFER,ut);try{const rt=M.texture,gt=rt.format,Pt=rt.type;if(!lt.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-U&&D>=0&&D<=M.height-P&&A.readPixels(R,D,U,P,qt.convert(gt),qt.convert(Pt),Z)}finally{const rt=w!==null?bt.get(w).__webglFramebuffer:null;Mt.bindFramebuffer(A.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(M,R,D,U,P,Z,ft){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(ut=ut[ft]),ut){const rt=M.texture,gt=rt.format,Pt=rt.type;if(!lt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=M.width-U&&D>=0&&D<=M.height-P){Mt.bindFramebuffer(A.FRAMEBUFFER,ut);const at=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,at),A.bufferData(A.PIXEL_PACK_BUFFER,Z.byteLength,A.STREAM_READ),A.readPixels(R,D,U,P,qt.convert(gt),qt.convert(Pt),0);const $t=w!==null?bt.get(w).__webglFramebuffer:null;Mt.bindFramebuffer(A.FRAMEBUFFER,$t);const Kt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await nh(A,Kt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,at),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Z),A.deleteBuffer(at),A.deleteSync(Kt),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,R=null,D=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,M=arguments[1]);const U=Math.pow(2,-D),P=Math.floor(M.image.width*U),Z=Math.floor(M.image.height*U),ft=R!==null?R.x:0,ut=R!==null?R.y:0;E.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,D,0,0,ft,ut,P,Z),Mt.unbindTexture()},this.copyTextureToTexture=function(M,R,D=null,U=null,P=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1],R=arguments[2],P=arguments[3]||0,D=null);let Z,ft,ut,rt,gt,Pt;D!==null?(Z=D.max.x-D.min.x,ft=D.max.y-D.min.y,ut=D.min.x,rt=D.min.y):(Z=M.image.width,ft=M.image.height,ut=0,rt=0),U!==null?(gt=U.x,Pt=U.y):(gt=0,Pt=0);const at=qt.convert(R.format),$t=qt.convert(R.type);E.setTexture2D(R,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,R.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,R.unpackAlignment);const Kt=A.getParameter(A.UNPACK_ROW_LENGTH),ne=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fe=A.getParameter(A.UNPACK_SKIP_PIXELS),jt=A.getParameter(A.UNPACK_SKIP_ROWS),Nt=A.getParameter(A.UNPACK_SKIP_IMAGES),ge=M.isCompressedTexture?M.mipmaps[P]:M.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,ge.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ge.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ut),A.pixelStorei(A.UNPACK_SKIP_ROWS,rt),M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,P,gt,Pt,Z,ft,at,$t,ge.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,P,gt,Pt,ge.width,ge.height,at,ge.data):A.texSubImage2D(A.TEXTURE_2D,P,gt,Pt,Z,ft,at,$t,ge),A.pixelStorei(A.UNPACK_ROW_LENGTH,Kt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ne),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Nt),P===0&&R.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(M,R,D=null,U=null,P=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,U=arguments[1]||null,M=arguments[2],R=arguments[3],P=arguments[4]||0);let Z,ft,ut,rt,gt,Pt,at,$t,Kt;const ne=M.isCompressedTexture?M.mipmaps[P]:M.image;D!==null?(Z=D.max.x-D.min.x,ft=D.max.y-D.min.y,ut=D.max.z-D.min.z,rt=D.min.x,gt=D.min.y,Pt=D.min.z):(Z=ne.width,ft=ne.height,ut=ne.depth,rt=0,gt=0,Pt=0),U!==null?(at=U.x,$t=U.y,Kt=U.z):(at=0,$t=0,Kt=0);const fe=qt.convert(R.format),jt=qt.convert(R.type);let Nt;if(R.isData3DTexture)E.setTexture3D(R,0),Nt=A.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)E.setTexture2DArray(R,0),Nt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,R.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,R.unpackAlignment);const ge=A.getParameter(A.UNPACK_ROW_LENGTH),ae=A.getParameter(A.UNPACK_IMAGE_HEIGHT),xe=A.getParameter(A.UNPACK_SKIP_PIXELS),oe=A.getParameter(A.UNPACK_SKIP_ROWS),he=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ne.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ne.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,rt),A.pixelStorei(A.UNPACK_SKIP_ROWS,gt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pt),M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Nt,P,at,$t,Kt,Z,ft,ut,fe,jt,ne.data):R.isCompressedArrayTexture?A.compressedTexSubImage3D(Nt,P,at,$t,Kt,Z,ft,ut,fe,ne.data):A.texSubImage3D(Nt,P,at,$t,Kt,Z,ft,ut,fe,jt,ne),A.pixelStorei(A.UNPACK_ROW_LENGTH,ge),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ae),A.pixelStorei(A.UNPACK_SKIP_PIXELS,xe),A.pixelStorei(A.UNPACK_SKIP_ROWS,oe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,he),P===0&&R.generateMipmaps&&A.generateMipmap(Nt),Mt.unbindTexture()},this.initRenderTarget=function(M){bt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){z=0,C=0,w=null,Mt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vo?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Rs?"display-p3":"srgb"}}class Dc extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _g extends rr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Al=new pe,io=new vc,es=new Cs,ns=new L;class Ic extends Ge{constructor(t=new mn,e=new _g){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),es.radius+=s,t.ray.intersectsSphere(es)===!1)return;Al.copy(r).invert(),io.copy(t.ray).applyMatrix4(Al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,v=m;g<v;g++){const d=c.getX(g);ns.fromBufferAttribute(f,d),wl(ns,d,l,r,t,e,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,v=m;g<v;g++)ns.fromBufferAttribute(f,g),wl(ns,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wl(i,t,e,n,r,s,a){const o=io.distanceSqToPoint(i);if(o<e){const l=new L;io.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Uc extends Ve{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,m=(a-u)/h;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Rt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,r=[],s=[],a=[],o=new L,l=new pe;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Le(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Le(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yo extends xn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vg extends yo{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,m*=u,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const is=new L,ua=new Eo,ha=new Eo,da=new Eo;class xg extends xn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(is.subVectors(r[0],r[1]).add(r[0]),c=is);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(is.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=is),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),d<1e-4&&(d=v),ua.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,d),ha.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,d),da.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,d)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ha.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),da.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(ua.calc(l),ha.calc(l),da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rl(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Mg(i,t){const e=1-i;return e*e*t}function Sg(i,t){return 2*(1-i)*i*t}function yg(i,t){return i*i*t}function Mr(i,t,e,n){return Mg(i,t)+Sg(i,e)+yg(i,n)}function Eg(i,t){const e=1-i;return e*e*e*t}function Tg(i,t){const e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function Ag(i,t){return i*i*i*t}function Sr(i,t,e,n,r){return Eg(i,t)+Tg(i,e)+bg(i,n)+Ag(i,r)}class Nc extends xn{constructor(t=new Rt,e=new Rt,n=new Rt,r=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Rt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,r.x,s.x,a.x,o.x),Sr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wg extends xn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,r.x,s.x,a.x,o.x),Sr(t,r.y,s.y,a.y,o.y),Sr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fc extends xn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rg extends xn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends xn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Mr(t,r.x,s.x,a.x),Mr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cg extends xn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Mr(t,r.x,s.x,a.x),Mr(t,r.y,s.y,a.y),Mr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bc extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Rl(o,l.x,c.x,u.x,f.x),Rl(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Rt().fromArray(r))}return this}}var ro=Object.freeze({__proto__:null,ArcCurve:vg,CatmullRomCurve3:xg,CubicBezierCurve:Nc,CubicBezierCurve3:wg,EllipseCurve:yo,LineCurve:Fc,LineCurve3:Rg,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Cg,SplineCurve:Bc});class Pg extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ro[r.type]().fromJSON(r))}return this}}class Cl extends Pg{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fc(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Oc(this.currentPoint.clone(),new Rt(t,e),new Rt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Nc(this.currentPoint.clone(),new Rt(t,e),new Rt(n,r),new Rt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new yo(t,e,n,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zc extends Cl{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Cl().fromJSON(r))}return this}}const Lg={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=kc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,f,h,m;if(n&&(s=Fg(i,t,s,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<r;g+=e)f=i[g],h=i[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ar(s,a,e,o,l,m,0),a}};function kc(i,t,e,n,r){let s,a;if(r===$g(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Pl(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Pl(s,i[s],i[s+1],a);return a&&Ls(a,a.next)&&(Rr(a),a=a.next),a}function Mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ls(e,e.next)||Se(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Hg(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Ig(i,n,r,s):Dg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ug(Mi(i),t,e),Ar(i,t,e,n,r,s,2)):a===2&&Ng(i,t,e,n,r,s):Ar(Mi(i),t,e,n,r,s,1);break}}}function Dg(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,f=o<l?o<c?o:c:l<c?l:c,h=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=m&&Wi(r,o,s,l,a,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ig(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Se(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,m=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=o>l?o>c?o:c:l>c?l:c,d=u>f?u>h?u:h:f>h?f:h,p=so(m,g,t,e,n),b=so(v,d,t,e,n);let S=i.prevZ,T=i.nextZ;for(;S&&S.z>=p&&T&&T.z<=b;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&Wi(o,u,l,f,c,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,T.x>=m&&T.x<=v&&T.y>=g&&T.y<=d&&T!==r&&T!==a&&Wi(o,u,l,f,c,h,T.x,T.y)&&Se(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;S&&S.z>=p;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&Wi(o,u,l,f,c,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;T&&T.z<=b;){if(T.x>=m&&T.x<=v&&T.y>=g&&T.y<=d&&T!==r&&T!==a&&Wi(o,u,l,f,c,h,T.x,T.y)&&Se(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Ug(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Ls(r,s)&&Hc(r,n,n.next,s)&&wr(r,s)&&wr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Rr(n),Rr(n.next),n=i=s),n=n.next}while(n!==i);return Mi(n)}function Ng(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wg(a,o)){let l=Vc(a,o);a=Mi(a,a.next),l=Mi(l,l.next),Ar(a,t,e,n,r,s,0),Ar(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Fg(i,t,e,n){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=kc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Gg(c));for(r.sort(Og),s=0;s<r.length;s++)e=Bg(r[s],e);return e}function Og(i,t){return i.x-t.x}function Bg(i,t){const e=zg(i,t);if(!e)return t;const n=Vc(e,i);return Mi(n,n.next),Mi(e,e.next)}function zg(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>n&&(n=h,r=e.x<e.next.x?e:e.next,h===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,f;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Wi(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),wr(e,i)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&kg(r,e)))&&(r=e,u=f)),e=e.next;while(e!==o);return r}function kg(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Hg(i,t,e,n){let r=i;do r.z===0&&(r.z=so(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Vg(r)}function Vg(i){let t,e,n,r,s,a,o,l,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function so(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Wg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xg(i,t)&&(wr(i,t)&&wr(t,i)&&qg(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Ls(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ls(i,t){return i.x===t.x&&i.y===t.y}function Hc(i,t,e,n){const r=ss(Se(i,t,e)),s=ss(Se(i,t,n)),a=ss(Se(e,n,i)),o=ss(Se(e,n,t));return!!(r!==s&&a!==o||r===0&&rs(i,e,t)||s===0&&rs(i,n,t)||a===0&&rs(e,i,n)||o===0&&rs(e,t,n))}function rs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ss(i){return i>0?1:i<0?-1:0}function Xg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function qg(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vc(i,t){const e=new ao(i.i,i.x,i.y),n=new ao(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Pl(i,t,e,n){const r=new ao(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $g(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class yr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ll(t),Dl(n,t);let a=t.length;e.forEach(Ll);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Dl(n,e[l]);const o=Lg.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ll(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class To extends mn{constructor(t=new zc([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Fn(r,3)),this.setAttribute("uv",new Fn(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Yg;let S,T=!1,z,C,w,N;p&&(S=p.getSpacedPoints(u),T=!0,h=!1,z=p.computeFrenetFrames(u,!1),C=new L,w=new L,N=new L),h||(d=0,m=0,g=0,v=0);const ot=o.extractPoints(c);let _=ot.shape;const y=ot.holes;if(!yr.isClockWise(_)){_=_.reverse();for(let K=0,A=y.length;K<A;K++){const mt=y[K];yr.isClockWise(mt)&&(y[K]=mt.reverse())}}const V=yr.triangulateShape(_,y),G=_;for(let K=0,A=y.length;K<A;K++){const mt=y[K];_=_.concat(mt)}function Q(K,A,mt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(A,mt)}const B=_.length,st=V.length;function k(K,A,mt){let it,lt,Mt;const Bt=K.x-A.x,bt=K.y-A.y,E=mt.x-K.x,x=mt.y-K.y,O=Bt*Bt+bt*bt,q=Bt*x-bt*E;if(Math.abs(q)>Number.EPSILON){const J=Math.sqrt(O),$=Math.sqrt(E*E+x*x),Ut=A.x-bt/J,vt=A.y+Bt/J,At=mt.x-x/$,Jt=mt.y+E/$,ct=((At-Ut)*x-(Jt-vt)*E)/(Bt*x-bt*E);it=Ut+Bt*ct-K.x,lt=vt+bt*ct-K.y;const It=it*it+lt*lt;if(It<=2)return new Rt(it,lt);Mt=Math.sqrt(It/2)}else{let J=!1;Bt>Number.EPSILON?E>Number.EPSILON&&(J=!0):Bt<-Number.EPSILON?E<-Number.EPSILON&&(J=!0):Math.sign(bt)===Math.sign(x)&&(J=!0),J?(it=-bt,lt=Bt,Mt=Math.sqrt(O)):(it=Bt,lt=bt,Mt=Math.sqrt(O/2))}return new Rt(it/Mt,lt/Mt)}const ht=[];for(let K=0,A=G.length,mt=A-1,it=K+1;K<A;K++,mt++,it++)mt===A&&(mt=0),it===A&&(it=0),ht[K]=k(G[K],G[mt],G[it]);const Tt=[];let Y,St=ht.concat();for(let K=0,A=y.length;K<A;K++){const mt=y[K];Y=[];for(let it=0,lt=mt.length,Mt=lt-1,Bt=it+1;it<lt;it++,Mt++,Bt++)Mt===lt&&(Mt=0),Bt===lt&&(Bt=0),Y[it]=k(mt[it],mt[Mt],mt[Bt]);Tt.push(Y),St=St.concat(Y)}for(let K=0;K<d;K++){const A=K/d,mt=m*Math.cos(A*Math.PI/2),it=g*Math.sin(A*Math.PI/2)+v;for(let lt=0,Mt=G.length;lt<Mt;lt++){const Bt=Q(G[lt],ht[lt],it);_t(Bt.x,Bt.y,-mt)}for(let lt=0,Mt=y.length;lt<Mt;lt++){const Bt=y[lt];Y=Tt[lt];for(let bt=0,E=Bt.length;bt<E;bt++){const x=Q(Bt[bt],Y[bt],it);_t(x.x,x.y,-mt)}}}const Zt=g+v;for(let K=0;K<B;K++){const A=h?Q(_[K],St[K],Zt):_[K];T?(w.copy(z.normals[0]).multiplyScalar(A.x),C.copy(z.binormals[0]).multiplyScalar(A.y),N.copy(S[0]).add(w).add(C),_t(N.x,N.y,N.z)):_t(A.x,A.y,0)}for(let K=1;K<=u;K++)for(let A=0;A<B;A++){const mt=h?Q(_[A],St[A],Zt):_[A];T?(w.copy(z.normals[K]).multiplyScalar(mt.x),C.copy(z.binormals[K]).multiplyScalar(mt.y),N.copy(S[K]).add(w).add(C),_t(N.x,N.y,N.z)):_t(mt.x,mt.y,f/u*K)}for(let K=d-1;K>=0;K--){const A=K/d,mt=m*Math.cos(A*Math.PI/2),it=g*Math.sin(A*Math.PI/2)+v;for(let lt=0,Mt=G.length;lt<Mt;lt++){const Bt=Q(G[lt],ht[lt],it);_t(Bt.x,Bt.y,f+mt)}for(let lt=0,Mt=y.length;lt<Mt;lt++){const Bt=y[lt];Y=Tt[lt];for(let bt=0,E=Bt.length;bt<E;bt++){const x=Q(Bt[bt],Y[bt],it);T?_t(x.x,x.y+S[u-1].y,S[u-1].x+mt):_t(x.x,x.y,f+mt)}}}H(),nt();function H(){const K=r.length/3;if(h){let A=0,mt=B*A;for(let it=0;it<st;it++){const lt=V[it];kt(lt[2]+mt,lt[1]+mt,lt[0]+mt)}A=u+d*2,mt=B*A;for(let it=0;it<st;it++){const lt=V[it];kt(lt[0]+mt,lt[1]+mt,lt[2]+mt)}}else{for(let A=0;A<st;A++){const mt=V[A];kt(mt[2],mt[1],mt[0])}for(let A=0;A<st;A++){const mt=V[A];kt(mt[0]+B*u,mt[1]+B*u,mt[2]+B*u)}}n.addGroup(K,r.length/3-K,0)}function nt(){const K=r.length/3;let A=0;Lt(G,A),A+=G.length;for(let mt=0,it=y.length;mt<it;mt++){const lt=y[mt];Lt(lt,A),A+=lt.length}n.addGroup(K,r.length/3-K,1)}function Lt(K,A){let mt=K.length;for(;--mt>=0;){const it=mt;let lt=mt-1;lt<0&&(lt=K.length-1);for(let Mt=0,Bt=u+d*2;Mt<Bt;Mt++){const bt=B*Mt,E=B*(Mt+1),x=A+it+bt,O=A+lt+bt,q=A+lt+E,J=A+it+E;dt(x,O,q,J)}}}function _t(K,A,mt){l.push(K),l.push(A),l.push(mt)}function kt(K,A,mt){tt(K),tt(A),tt(mt);const it=r.length/3,lt=b.generateTopUV(n,r,it-3,it-2,it-1);Yt(lt[0]),Yt(lt[1]),Yt(lt[2])}function dt(K,A,mt,it){tt(K),tt(A),tt(it),tt(A),tt(mt),tt(it);const lt=r.length/3,Mt=b.generateSideWallUV(n,r,lt-6,lt-3,lt-2,lt-1);Yt(Mt[0]),Yt(Mt[1]),Yt(Mt[3]),Yt(Mt[1]),Yt(Mt[2]),Yt(Mt[3])}function tt(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function Yt(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ro[r.type]().fromJSON(r)),new To(n,t.options)}}const Yg={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new Rt(s,a),new Rt(o,l),new Rt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[r*3],m=t[r*3+1],g=t[r*3+2],v=t[s*3],d=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Rt(a,1-l),new Rt(c,1-f),new Rt(h,1-g),new Rt(v,1-p)]:[new Rt(o,1-l),new Rt(u,1-f),new Rt(m,1-g),new Rt(d,1-p)]}};function Kg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oo extends rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zg extends oo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Jg extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fa=new pe,Il=new L,Ul=new L;class jg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nl=new pe,pr=new L,pa=new L;class Qg extends jg{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(pr),pa.copy(n.position),pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pa),n.updateMatrixWorld(),r.makeTranslation(-pr.x,-pr.y,-pr.z),Nl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl)}}class t_ extends Jg{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function e_(i){const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ds(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Is(i){const t=new Float32Array(i*3),e=new Float32Array(i*3);let n=0;return{get full(){return n>=i},add(r,s,a,o,l,c){if(n>=i)return;const u=Math.hypot(o,l,c)||1;t[n*3]=r,t[n*3+1]=s,t[n*3+2]=a,e[n*3]=o/u,e[n*3+1]=l/u,e[n*3+2]=c/u,n++},done(r=!0){if(r){const s=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let l=0;l<i*3;l++){const c=l%3;t[l]<s[c]&&(s[c]=t[l]),t[l]>a[c]&&(a[c]=t[l])}const o=2/Math.max(a[0]-s[0],a[1]-s[1],a[2]-s[2],1e-4);for(let l=0;l<i*3;l++){const c=l%3;t[l]=(t[l]-(s[c]+a[c])/2)*o}}return{positions:t,normals:e}}}}function bo(i,t,{tilt:e=0,pivot:n=.8,fuzz:r=.015,seed:s=7}={}){const a=Ds(s),o=Is(t),l=[];let c=0;for(let h=0;h<i.length-1;h++){const[m,g]=i[h],[v,d]=i[h+1],p=Math.hypot(v-m,d-g);p!==0&&(c+=Math.PI*(m+v)*p,l.push({r0:m,y0:g,r1:v,y1:d,nr:(d-g)/p,ny:-(v-m)/p,cum:c}))}const u=e*Math.PI/180,f=(h,m,g)=>{const v=Math.min(1,Math.max(0,(g-h)/(m-h)));return v*v*(3-2*v)};for(let h=0;h<t;h++){const m=a()*c;let g=0,v=l.length-1;for(;g<v;){const N=g+v>>1;l[N].cum<m?g=N+1:v=N}const d=l[g],p=a(),b=a()*Math.PI*2,S=(a()+a()-1)*r,T=d.r0+(d.r1-d.r0)*p+d.nr*S;let z=d.y0+(d.y1-d.y0)*p+d.ny*S,C=Math.cos(b)*T;const w=Math.sin(b)*T;if(u){const N=u*f(n-.25,n+.35,z),ot=z-n,_=Math.cos(N),y=Math.sin(N),W=C*_-ot*y;z=C*y+ot*_+n,C=W}o.add(C,z,w,d.nr*Math.cos(b),d.ny,d.nr*Math.sin(b))}return o.done()}function lo(i,t,e,n,r,s,a,o){for(let l=0;l<t;l++){const c=e()*Math.PI*2,u=e()*Math.PI*2,f=e_([r*Math.cos(c),n*Math.sin(c),0]),h=[Math.cos(u)*f[0],Math.cos(u)*f[1],Math.sin(u)],m=a([n*Math.cos(c)+s*h[0],r*Math.sin(c)+s*h[1],s*h[2]]),g=o(h);i.add(m[0],m[1],m[2],g[0],g[1],g[2])}}const as=(i,t)=>[i[0],i[1]*Math.cos(t)-i[2]*Math.sin(t),i[1]*Math.sin(t)+i[2]*Math.cos(t)],Fl=(i,t)=>[i[0]*Math.cos(t)-i[1]*Math.sin(t),i[0]*Math.sin(t)+i[1]*Math.cos(t),i[2]];function n_(i,t){const e=Ds(3),n=Is(i);for(let r=0;!n.full&&r<i*40;r++){const s=e()*2-1,a=e()*Math.PI*2,o=Math.sqrt(1-s*s),l=Math.cos(a)*o,c=Math.sin(a)*o;if(t&&!t(Math.atan2(l,c)*180/Math.PI,Math.asin(s)*180/Math.PI))continue;const u=1+(e()-.5)*.012;n.add(l*u,s*u,c*u,l,s,c)}return n.done(!1)}function i_(i){const t=Math.PI/180,e=[];for(let a=-90;a<=58;a+=2)e.push([Math.cos(a*t),Math.sin(a*t)]);const n=[Math.cos(58*t),Math.sin(58*t)],r=[.3,.99],s=[.3,1.25];for(let a=1;a<=12;a++){const o=a/12,l=1-o;e.push([l*l*n[0]+2*l*o*r[0]+o*o*s[0],l*l*n[1]+2*l*o*r[1]+o*o*s[1]])}return e.push([.29,2.25],[.33,2.35],[.4,2.42],[.41,2.5]),bo(e,i,{tilt:22,fuzz:.025})}function r_(i){const t=[[0,0],[.4,0],[.45,.06],[.45,1.3]];for(let e=1;e<=10;e++){const n=e/10,r=n*n*(3-2*n);t.push([.45-.28*r,1.3+.5*n])}return t.push([.17,2.2],[.21,2.22],[.21,2.36],[.15,2.36]),bo(t,i,{seed:17})}function s_(i){const t=Math.PI/180,e=[[0,-1.78],[.2,-1.72]];for(let n=0;n<5;n++)e.push([.4,-1.6+n*.11],[.34,-1.545+n*.11]);e.push([.42,-1.05]);for(let n=-52;n<=90;n+=3)e.push([Math.cos(n*t),Math.sin(n*t)]);return bo(e,i,{seed:29})}function a_(i){const t=Ds(41),e=Is(i),n=Math.ceil(i/3),r=.6;for(let s=0;s<3;s++){const a=s%2?Math.PI/2:0,o=(s-1)*.78;lo(e,n,t,.55,.3,.1,l=>Fl([as(l,a)[0]+o,as(l,a)[1],as(l,a)[2]],r),l=>Fl(as(l,a),r))}return e.done()}function o_(i){const t=Ds(53),e=Is(i),n=a=>a,r=Math.round(i*.52),s=Math.round(i*.33);for(lo(e,r,t,.95,.95,.075,n,n),lo(e,s,t,.56,.56,.075,n,n);!e.full;){const a=t()*2-1,o=t()*Math.PI*2,l=Math.sqrt(1-a*a);e.add(Math.cos(o)*l*.2,a*.2,Math.sin(o)*l*.2,Math.cos(o)*l,a,Math.sin(o)*l)}return e.done()}function l_(i,t,e){switch(i){case"globe":return n_(t,e);case"flask":return i_(t);case"bottle":return r_(t);case"bulb":return s_(t);case"chain":return a_(t);case"target":return o_(t)}}async function c_(i){try{const t=await(await fetch(i)).json(),[e,n]=t.transform?.scale??[1,1],[r,s]=t.transform?.translate??[0,0],a=t.arcs.map(g=>{let v=0,d=0;return g.map(([p,b])=>(v+=p,d+=b,[v*e+r,d*n+s]))}),o=1024,l=512,c=document.createElement("canvas");c.width=o,c.height=l;const u=c.getContext("2d",{willReadFrequently:!0});u.fillStyle="#fff";const f=g=>{const v=[];let d=0,p=null;for(const b of g)for(const[S,T]of b<0?a[~b].slice().reverse():a[b])p!==null&&Math.abs(S-p)>180&&(d+=S<p?360:-360),p=S,v.push([S+d,T]);return v},h=(g,v)=>{g.forEach(([d,p],b)=>{const S=(d+v+180)/360*o,T=(90-p)/180*l;b?u.lineTo(S,T):u.moveTo(S,T)}),u.closePath()};for(const g of t.objects.land.geometries){const v=g.type==="MultiPolygon"?g.arcs:[g.arcs];for(const d of v){const p=d.map(f);for(const b of[-360,0,360]){u.beginPath();for(const S of p)h(S,b);u.fill("evenodd")}}}const m=u.getImageData(0,0,o,l).data;return(g,v)=>{const d=Math.min(o-1,Math.max(0,Math.floor((g+180)/360*o))),p=Math.min(l-1,Math.max(0,Math.floor((90-v)/180*l)));return m[(p*o+d)*4+3]>127}}catch{return}}const u_=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float cloud(vec2 p) {
  float sum = 0.0, weight = 0.5;
  for (int i = 0; i < 4; i++) {
    vec2 c = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    sum += weight * mix(mix(hash(c), hash(c + vec2(1.0, 0.0)), f.x), mix(hash(c + vec2(0.0, 1.0)), hash(c + vec2(1.0, 1.0)), f.x), f.y);
    p = p * 2.03 + 17.0; weight *= 0.5;
  }
  return sum;
}`;function h_(i,t,e){const n=new _e(new xi(2,2),new pn({depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uAspect:{value:1},uSway:{value:0},uLight:{value:i},uDark:{value:t},uBeam:{value:e}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`
uniform float uTime, uAspect, uSway;
uniform vec3 uLight, uDark, uBeam;
varying vec2 vUv;
${u_}
void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  // slanted gradient: light in one corner, dark in the opposite one
  float a = -2.4586; vec2 q = vUv - 0.5; float along = clamp(q.x * sin(a) + q.y * cos(a) + 0.5, 0.0, 1.0);
  vec3 colour = mix(uLight, uDark, along);
  // slow cloud, lifting patches towards the light tone
  colour = mix(colour, uLight, smoothstep(0.3, 0.85, cloud(p * 1.6 + uTime * 0.03)) * 0.75);
  // a darker pool a little right of the middle, behind the shape
  float pool = smoothstep(0.239, 1.439, 1.0 - distance(p, vec2(0.5 * uAspect + 0.2, 0.49)));
  colour = mix(colour, uDark, (1.0 - pow(1.0 - pool, 5.0)) * 0.85);
  // two soft beams, falling from the upper right to the lower left; they swing a little as the journey goes round
  float tilt = radians(54.0); vec2 b = p - vec2(0.5 * uAspect, 0.5);
  float across = b.x * cos(tilt) + b.y * sin(tilt) + uSway * 0.12, down = -b.x * sin(tilt) + b.y * cos(tilt);
  float streak = cloud(vec2(across * 9.0, down * 0.6 + uTime * 0.01));
  float beams = exp(-pow((across + 0.08) / 0.16, 2.0)) + 0.7 * exp(-pow((across - 0.42) / 0.11, 2.0));
  colour += uBeam * beams * (0.55 + 0.45 * streak) * 0.34 * smoothstep(-0.9, 0.5, down);
  colour += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.018; // grain, so the gradient never bands
  gl_FragColor = vec4(colour, 1.0);
}`}));return n.frustumCulled=!1,n.renderOrder=-100,n}function d_(i,t,e,n){const r=Math.random,s=()=>(r()+r()+r()-1.5)/1.5,a=new L,o=Array.from({length:7},()=>{const l=r()*Math.PI*2,c=1.6+r()*2.6,u=new L(Math.cos(l+Math.PI/2)+(r()-.5)*.7,(r()-.35)*.7,Math.sin(l+Math.PI/2)+(r()-.5)*.7).normalize();return{at:new L(Math.cos(l)*c,(r()-.5)*2.4,Math.sin(l)*c),dir:u,across:new L(-u.y,u.x,0).normalize(),length:3+r()*4,width:.5+r()*.9,wave:r()*6}});for(let l=0;l<e;l++){const c=o[l%o.length],u=s()*.5,f=c.width*(.4+Math.abs(u)*2.4);a.copy(c.at).addScaledVector(c.dir,u*c.length).addScaledVector(c.across,Math.sin(u*5+c.wave)*.35),a.x+=s()*f,a.y+=s()*f,a.z+=s()*f,a.length()<1.7&&a.setLength(1.7+r()*1.2),i.push(t.x+a.x,t.y+a.y,t.z+a.z,...n())}}function f_(i,t,e,n){const r=Math.random,s=[],a=e?5e3:15e3,o=t*2.2;for(let g=0;g<a;g++)s.push((r()*2-1)*o,(r()*2-1)*3.4,(r()*2-1)*o,3,24,g%3===0?2:g%3===1?1:0);for(let g=0;g<(e?1500:4500);g++){const v=r()*Math.PI*2,d=t+(r()*2-1)*2.6;s.push(Math.cos(v)*d,(r()*2-1)*1.8,Math.sin(v)*d,3,26,g%4===0?2:g%4===1?1:0)}for(const g of i)d_(s,g,e?900:2400,()=>{const v=r();return[3.5,16,v<.6?0:v<.75?3:v<.85?2:1]});for(let g=0;g<1e3;g++){const v=r()*2-1,d=r()*Math.PI*2,p=Math.sqrt(1-v*v),b=t*.89;s.push(Math.cos(d)*p*b,v*b,Math.sin(d)*p*b,4.5,10,2)}const l=s.length/6,c=new Float32Array(l*3),u=new Float32Array(l*3),f=new Float32Array(l*4);for(let g=0;g<l;g++){c.set(s.slice(g*6,g*6+3),g*3),u.set(s.slice(g*6+3,g*6+6),g*3);for(let v=0;v<4;v++)f[g*4+v]=r()}const h=new mn;h.setAttribute("position",new Oe(c,3)),h.setAttribute("aKind",new Oe(u,3)),h.setAttribute("aSeed",new Oe(f,4));const m=new Ic(h,new pn({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uRatio:{value:1},uFocus:{value:4.46},uRange:{value:6.5},uCalm:{value:0},uShow:{value:1},uColours:{value:n}},vertexShader:`
uniform float uTime, uRatio, uFocus, uRange, uCalm;
attribute vec3 aKind; attribute vec4 aSeed;
varying float vBlur; varying float vTint; varying vec2 vSeed;
void main() {
  vec3 way = normalize(aSeed.xyz - 0.5);
  vec3 p = position + way * 0.2 * cos(uTime * (0.3 + aSeed.z) + 6.283 * aSeed.w) * aSeed.x; // each speck sways to and fro on its own line
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float away = length(mv.xyz) - uFocus, amount = smoothstep(0.0, uRange, abs(away));
  float front = away < 0.0 ? amount : 0.0, back = away > 0.0 ? amount : 0.0;
  if (back > 0.9) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);                                   // too far: not drawn
  gl_PointSize = (aKind.x * (1.0 - 0.45 * uCalm) + front * aKind.y * (0.75 + 0.25 * aSeed.z) * (1.0 - uCalm) + back * aSeed.x) * uRatio;
  vBlur = clamp(front + back, 0.0, 1.0); vTint = aKind.z; vSeed = aSeed.xy;
}`,fragmentShader:`
uniform vec3 uColours[4]; uniform float uCalm, uShow;
varying float vBlur; varying float vTint; varying vec2 vSeed;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float soft = 1.0 - smoothstep(0.28 + 0.6 * vBlur, 1.0, r);          // a speck with a soft edge; a blurred one is a flat disc
  vec3 tint = vTint < 0.5 ? uColours[0] : vTint < 1.5 ? uColours[1] : vTint < 2.5 ? uColours[2] : uColours[3];
  vec3 colour = mix(mix(tint, vec3(1.0), vTint > 1.5 && vTint < 2.5 ? 0.0 : 0.55), tint, smoothstep(0.0, 0.5, vBlur)); // sharp specks are nearly white, blurred discs take their tint
  float alpha = soft * 0.85 * (1.0 - vBlur * (0.55 + 0.25 * vSeed.x)) * (1.0 - uCalm * (0.35 + 0.65 * smoothstep(0.0, 0.25, vBlur))) * uShow;
  if (alpha < 0.03) discard;
  gl_FragColor = vec4(colour, alpha);
}`}));return m.frustumCulled=!1,m.renderOrder=-1,m}const p_=`
uniform float uDot;        // diameter of a sharp dot, in device pixels
uniform float uBlur;       // extra diameter of a fully blurred dot, in device pixels
uniform float uFocus;      // distance from the camera that is perfectly sharp
uniform float uRange;      // distance over which blur builds up
uniform float uReach;      // the shape's radius, for telling its near side from its far side
uniform vec3 uLight;       // direction towards the light, as the camera sees it

attribute vec4 aSeed;

varying float vBright;
varying float vBlur;
varying float vSeed;
varying float vHaze;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;

  // the lit ball
  float bright = 0.7;
  vec3 n = normalMatrix * normal;
  if (dot(n, n) > 0.01) {
    n = normalize(n);
    float wrap = dot(n, uLight) * 0.5 + 0.5;                                  // light wraps round to the shadow side
    float shine = pow(max(dot(reflect(-uLight, n), vec3(0.0, 0.0, 1.0)), 0.0), 10.0);
    float rim = pow(1.0 - abs(n.z), 3.0);
    bright = clamp(0.42 + 0.5 * pow(wrap, 1.4) + 0.4 * shine + 0.18 * rim, 0.0, 1.0);
  }
  if (aSeed.x > 0.88) bright = min(1.0, bright + 0.35);                       // a few grains always catch the light

  float centre = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).z;
  float near = clamp(((mv.z - centre) / uReach + 0.5) / 0.9, 0.0, 1.0);       // 1 on the side facing the camera, 0 at the back
  vHaze = 0.55 + 0.45 * near;

  float away = length(mv.xyz) - uFocus;
  float blur = smoothstep(0.0, uRange, abs(away)) * (away < 0.0 ? 1.0 : 0.04); // only dots nearer than the focus blur fully
  gl_PointSize = uDot * (0.8 + aSeed.w * 0.5) * (0.8 + 0.2 * near) + blur * uBlur * (0.75 + aSeed.y * 0.25);
  vBright = bright; vBlur = blur; vSeed = aSeed.z;
}
`,m_=`
uniform vec3 uLit;         // colour of a fully lit dot
uniform vec3 uShade;       // colour of a dot in shadow
uniform vec3 uAccent;      // colour of the occasional tinted grain
uniform float uFade;       // overall visibility (drops while the shape scatters)

varying float vBright;
varying float vBlur;
varying float vSeed;
varying float vHaze;

void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float sharp = smoothstep(1.0, 0.55, r);                                          // a crisp dot with a soft edge
  float disc = smoothstep(1.0, 0.86, r) * (0.7 + 0.3 * smoothstep(0.3, 1.0, r));   // a flat disc with a brighter rim
  vec3 colour = mix(uShade, uLit, vBright);
  if (vSeed > 0.9) colour = mix(colour, uAccent, 0.75);
  // close up, a dot stays a solid pale grain; only when the camera is almost touching it does it thin out into a faint disc
  float grain = smoothstep(1.0, mix(0.55, 0.8, smoothstep(0.0, 0.15, vBlur)), r);
  float alpha = grain * mix((0.6 + 0.4 * vBright) * vHaze, 1.0, smoothstep(0.0, 0.06, vBlur)) * (1.0 - vBlur * (0.7 + 0.2 * vSeed));
  colour = mix(colour, uLit, smoothstep(0.0, 0.06, vBlur) * 0.7);
  gl_FragColor = vec4(colour, alpha * uFade);
}
`;class g_ extends Dc{constructor(){super();const t=new sr;t.deleteAttribute("uv");const e=new oo({side:He}),n=new oo,r=new t_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new _e(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new _e(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new _e(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new _e(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new _e(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new _e(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const f=new _e(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new _e(t,Hi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const m=new _e(t,Hi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new _e(t,Hi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new _e(t,Hi(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const d=new _e(t,Hi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new _e(t,Hi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Hi(i){const t=new br;return t.color.setScalar(i),t}const os=(i,t,e)=>`M${i-e} ${t}a${e} ${e} 0 1 0 ${e*2} 0a${e} ${e} 0 1 0 ${-e*2} 0`,Gc={globe:[os(12,12,9),"M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"],flask:["M10 3h4M10.5 3v5.2a6 6 0 1 0 3 0V3","M7.2 15h9.6"],bottle:["M10 2.5h4M10.5 2.5v3.2L8.5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V9l-2-3.3V2.5","M8.5 13h7"],bulb:["M9 17.5h6M10 20.5h4","M9 17.5c0-2.2-3-3.4-3-7.2a6 6 0 0 1 12 0c0 3.8-3 5-3 7.2"],chain:["M10 14l4-4","M8.5 11.2 6 13.7a3.1 3.1 0 0 0 4.3 4.3l2.5-2.5M15.5 12.8 18 10.3A3.1 3.1 0 0 0 13.7 6l-2.5 2.5"],target:[os(12,12,9),os(12,12,5),os(12,12,1.2)]},hi=84,Ol=.13,ls=.035;function __(i){const t=new eo(i),e=t.fromScene(new g_,.04).texture;return t.dispose(),e}function v_(){const i=r=>(r-42)/84,t=r=>(42-r)/84,e=new zc;e.moveTo(i(16),t(0)),e.lineTo(i(48),t(0)),e.quadraticCurveTo(i(64),t(0),i(67.7),t(15.6)),e.lineTo(i(80.3),t(68.4)),e.quadraticCurveTo(i(84),t(84),i(68),t(84)),e.lineTo(i(16),t(84)),e.quadraticCurveTo(i(0),t(84),i(0),t(68)),e.lineTo(i(0),t(16)),e.quadraticCurveTo(i(0),t(0),i(16),t(0));const n=new To(e,{depth:Ol,bevelEnabled:!0,bevelThickness:ls,bevelSize:ls,bevelOffset:-ls,bevelSegments:6,curveSegments:16});return n.translate(0,0,-Ol-ls),n}function x_(i,t,e){const r=document.createElement("canvas");r.width=r.height=hi*4;const s=r.getContext("2d");s.lineCap="round",s.lineJoin="round",s.setTransform(4*1.1,0,0,4*1.1,60,80),s.strokeStyle=e,s.lineWidth=3.6,s.stroke(new Path2D("M35 22a15 15 0 0 1-9.5 12")),s.setTransform(176/24,0,0,176/24,68,80),s.strokeStyle=t,s.lineWidth=1.25;for(const o of Gc[i])s.stroke(new Path2D(o));const a=new Uc(r);return a.colorSpace=ln,a.anisotropy=4,a}let ma;function M_(){if(ma)return ma;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,64);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.55,"rgba(0,0,0,.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ma=new Uc(i)}function Bl(i,t,e){const n=new Zg({color:e,roughness:.12,metalness:.3,clearcoat:1,clearcoatRoughness:.08,envMap:t,envMapIntensity:1.5,transparent:!0}),r=new br({transparent:!0,depthWrite:!1,toneMapped:!1}),s=new br({map:M_(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),a=new Nn,o=new Nn,l=new _e(new xi(1.7,1.5),s),c=new _e(i,n),u=new _e(new xi(1,1),r);return l.position.set(.06,-.3,-.5),l.renderOrder=4,c.renderOrder=5,u.position.z=.004,u.renderOrder=6,o.add(c,u),a.add(l,o),a.visible=!1,a.userData.tile=o,{group:a,body:n,face:r,shadow:s,seen:0,turnX:0,turnY:0}}function zl(i,t,e,n){i.seen=t,i.group.visible=t>.004,i.body.opacity=t,i.face.opacity=t,i.shadow.opacity=t*.7,i.group.userData.tile.rotation.set(Ts.degToRad(-e),Ts.degToRad(n),0)}function kl(i){i.group.removeFromParent(),i.body.dispose(),i.face.dispose(),i.shadow.dispose()}const S_=["aria-label","tabindex"],As={globe:[.2,.14],flask:[.15,.1],bottle:[.15,.02],bulb:[-.12,.2],chain:[.14,.14],target:[.19,.12]},y_=Be({__name:"TopicToken",props:{icon:{},label:{},visible:{type:Boolean}},emits:["open","hover"],setup(i){return(t,e)=>(pt(),yt("button",{type:"button",class:nn(["handle",{visible:i.visible}]),style:Yn({"--sx":As[i.icon][0],"--sy":As[i.icon][1]}),"aria-label":i.label,tabindex:i.visible?0:-1,onClick:e[0]||(e[0]=n=>t.$emit("open")),onPointerenter:e[1]||(e[1]=n=>t.$emit("hover",!0)),onPointerleave:e[2]||(e[2]=n=>t.$emit("hover",!1)),onFocus:e[3]||(e[3]=n=>t.$emit("hover",!0)),onBlur:e[4]||(e[4]=n=>t.$emit("hover",!1))},null,46,S_))}}),E_=We(y_,[["__scopeId","data-v-7171cf85"]]),T_=["aria-label","onClick","onPointerenter","onFocus"],b_={class:"label"},A_={class:"photo"},w_=["src"],R_={key:1,class:"blank"},C_={class:"place"},mr=1.2,Hl=50,P_=3.2,L_=5.1,D_=18,I_=.022,U_=10.25,N_=.12,F_=1.05,Vl=2,O_=.03,B_=.96,cs=.0105,us=40,z_=15,k_=10,H_=.94,V_=.015,G_=.95,W_=.29,X_=.04,q_=.22,Gl=195,Wl=2.4,Xl=70,ql=4,$_=Be({__name:"ParticleStage",props:{shapes:{},travel:{},count:{default:1e4},active:{type:Boolean,default:!0},shift:{default:0},landUrl:{default:""},focused:{type:Boolean,default:!1},points:{default:()=>[]},card:{type:Boolean,default:!1},token:{type:Boolean,default:!1},tokenHover:{type:Boolean,default:!1},tiles:{default:0},tileHover:{default:-1}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,r=ye(),s=ye([]),a=ye(-1),o=ye(null);Qe(a,et=>{et>=0&&e.points[et]&&(o.value=e.points[et])}),Qe(()=>e.points,()=>{a.value=-1});const l=xs().app.baseURL,c=et=>et?/^(https?:)?\/\//.test(et)?et:l+et.replace(/^\//,""):"",u=9.31,f=Math.PI*.4,h={globe:1,flask:.3,bottle:.3,bulb:.26,chain:.3,target:.3},m={globe:[.12,.1],flask:[.3,.05],bottle:[.3,.08],bulb:[.55,.1],chain:[0,.15],target:[-.18,.2]},g=new L(.4,.75,.55).normalize();let v,d,p,b,S=[],T,z,C,w,N=1,ot=-1,_=0,y=new Float32Array(0),W=new Float32Array(0),V=new Float32Array(0),G=new Float32Array(0),Q=-1,B=0,st=!1,k=1,ht=1,Tt=0,Y,St=!1;const Zt=new Dc,H=new Ye(Hl,1,.1,100),nt=new Nn,Lt=new Nn;nt.add(Lt),Zt.add(nt);const _t=(et,Ot)=>Ot.set(Math.cos(et)*u,0,Math.sin(et)*u);let kt=1;const dt={px:0,py:0,x:0,y:0,tx:0,ty:0,on:0,target:0,inside:!1,click:!1},tt={x:0,y:0,tx:0,ty:0,vx:0,vy:0,dragging:!1,moved:0,lastX:0,lastY:0,lastT:0};let Yt=0,K=0,A=0,mt=0,it=0,lt=0;const Mt=new Nn;H.add(Mt),Zt.add(H);let Bt,bt=[],E=0,x,O=20;const q=new Map;let J=[];const $=new ie,Ut=new ie,vt=new ie,At=(et,Ot)=>new ie(getComputedStyle(r.value).getPropertyValue(et).trim()||Ot),Jt=et=>(et%e.shapes.length+e.shapes.length)%e.shapes.length;function ct(et){if(k<=800){const Ot=hi*.8;return[k-O-Ot/2,ht-O-128-Ot/2,.8]}return[k/2+As[et][0]*Math.min(k,ht*1.5)+hi/2,ht/2+As[et][1]*ht+hi/2,1]}function It(et,Ot){const zt=(Ot-1)/2,Ht=Math.max(40,Math.min(89.6,k*.075));return[k/2+(et-zt)*(hi+Ht),ht*.735+(1-Math.min(1,Math.abs(et-zt)))*9]}function Vt(et,Ot,zt,Ht){const Wt=2*ql*Math.tan(Ts.degToRad(Hl)/2)/ht;et.group.position.set((Ot-k/2)*Wt,-(zt-ht/2)*Wt,-ql),et.group.scale.setScalar(Ht*Wt)}const Gt=et=>1-Math.pow(1-Math.min(1,Math.max(0,et)),3);function Ft(et,Ot,zt,Ht){if(!Bt)return;const Wt=e.shapes[Jt(Math.round(e.travel.state.progress))]??"globe";if(Wt!==x){x=Wt,q.has(Wt)||q.set(Wt,x_(Wt,getComputedStyle(r.value).getPropertyValue("--accent-deep").trim()||"#2440c9","#"+vt.clone().lerp(Ut,.55).getHexString()));for(const rt of[Bt,...bt])rt.face.map=q.get(Wt),rt.face.needsUpdate=!0}const M=rt=>Ht?1:1-Math.exp(-et*rt),[R,D,U]=ct(Wt),P=Bt,Z=Ht?0:Math.sin(Ot*1.26)*6,ft=e.token?Math.max(0,1-zt*1.7)*Math.min(1,B*1.5-.5):0;P.seen+=(ft-P.seen)*(e.token?1:M(9)),P.turnX+=(-10+dt.y*11*dt.on-P.turnX)*M(8),P.turnY+=(-22+dt.x*15*dt.on-P.turnY)*M(8),Vt(P,R+zt*k*.22,D+zt*ht*.26+Z,hi*U*(1+zt*2.6)*(e.tokenHover?1.06:1)),zl(P,P.seen,P.turnX,P.turnY);const ut=e.tiles;E=ut?E+et:0;for(let rt=0;rt<bt.length;rt++){const gt=bt[rt],Pt=rt<ut,at=(Math.max(ut,1)-1)/2;gt.seen=Pt?Math.min(1,Math.max(0,(E-.15-rt*.11)/.8)):Math.max(0,gt.seen-et/.25),Ht&&Pt&&(gt.seen=1);const $t=Pt?Gt(gt.seen):1,[Kt,ne]=Pt?It(rt,ut):[gt.group.userData.x??0,gt.group.userData.y??0],fe=e.tileHover===rt,jt=R+(Kt-R)*$t,Nt=D+(ne-D)*$t;Pt&&(gt.group.userData.x=Kt,gt.group.userData.y=ne),gt.turnX+=((fe?0:-8)-gt.turnX)*M(8),gt.turnY+=((fe?0:-16-(rt-at)*7)-gt.turnY)*M(8),Vt(gt,jt,Nt-(fe?6:0)+Z*.4*Math.cos(rt*1.7),hi*(.55+.45*$t)),zl(gt,Pt?Math.min(1,gt.seen*3):gt.seen,gt.turnX+(1-$t)*30,gt.turnY-(1-$t)*50)}}function ee(et){et&&(et.removeFromParent(),et.geometry.dispose(),et.material.dispose())}function qt(){ee(d),ee(p),b&&(b.removeFromParent(),b.geometry.dispose(),b.material.dispose());const et=e.count;S=e.shapes.map(M=>{const R=Math.round(et*h[M]),D=l_(M,R,T),U=new Float32Array(et*3),P=new Float32Array(et*3);for(let Z=0;Z<R*3;Z++)U[Z]=D.positions[Z]*mr,P[Z]=D.normals[Z];return{positions:U,normals:P,count:R,lean:m[M][0],tip:m[M][1]}}),y=Float32Array.from({length:et*4},()=>Math.random()),V=new Float32Array(et*3),G=new Float32Array(et*3);const Ot=S[Jt(Math.floor(e.travel.state.progress))];z=Ot,C=Ot,w=Ot,W=Ot.positions.slice(),ot=-1,Q=-1,$.copy(At("--on-dark","#ffffff")),Ut.copy(At("--accent","#c8d2ff")),vt.copy(At("--stage-from","#2440c9"));const zt=new mn;zt.setAttribute("position",new Oe(W.slice(),3).setUsage(Oo)),zt.setAttribute("normal",new Oe(Ot.normals.slice(),3).setUsage(Oo)),zt.setDrawRange(0,Ot.count),zt.setAttribute("aSeed",new Oe(y,4)),d=new Ic(zt,new pn({vertexShader:p_,fragmentShader:m_,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uDot:{value:Wl},uBlur:{value:Xl},uFocus:{value:L_},uRange:{value:D_},uReach:{value:mr},uLight:{value:g.clone()},uFade:{value:1},uLit:{value:$.clone()},uShade:{value:vt.clone().lerp(Ut,.5)},uAccent:{value:Ut.clone()}}})),d.frustumCulled=!1,Lt.add(d);const Ht=At("--stage-to","#070c33"),Wt=At("--brand-deep","#101c66");b=h_(vt.clone().lerp(Ht,.1),vt.clone().lerp(Ht,.55),Ut.clone()),Zt.add(b),p=f_(Array.from({length:5},(M,R)=>_t((R+.5)*f,new L)),u,k<=800,[Ut.clone(),$.clone(),Wt.lerp(Ht,.3),vt.clone().lerp(Ut,.35)]),Zt.add(p),Ct()}function ce(et,Ot){const zt=S.indexOf(et)*10+Ot;if(zt===ot)return;if(et!==w&&d){const D=d.geometry.getAttribute("normal");D.array.set(et.normals),D.needsUpdate=!0,d.geometry.setDrawRange(0,et.count)}ot=zt,w=et,N=Ot;const Ht=et.positions,Wt=W,M=Wt.length/3;if(Ot<=0){Wt.set(Ht);return}const R=F_*Ot;for(let D=0;D<M;D++){const U=D*4,P=D*3;Wt[P]=Ht[P]+(y[U+1]*2-1)*R,Wt[P+1]=Ht[P+1]+(y[U+2]*2-1)*R,Wt[P+2]=Ht[P+2]+(y[U+3]*2-1)*R}}function I(){const et=S[Jt(Math.round(e.travel.state.progress))],Ot=e.points.length;if(J=[],!et||!Ot)return;const zt=et.positions,Ht=et.count,Wt=Math.max(1,Math.floor(Ht/600)),M=[];if(e.shapes[Jt(Math.round(e.travel.state.progress))]==="globe"&&e.points.every(U=>U.at)){let U=0,P=0;for(const ft of e.points){const ut=ft.at[0]*Math.PI/180,rt=ft.at[1]*Math.PI/180,gt=Math.sin(ut)*Math.cos(rt)*mr,Pt=Math.sin(rt)*mr,at=Math.cos(ut)*Math.cos(rt)*mr;let $t=0,Kt=1/0;for(let ne=0;ne<Ht;ne++){const fe=(zt[ne*3]-gt)**2+(zt[ne*3+1]-Pt)**2+(zt[ne*3+2]-at)**2;fe<Kt&&(Kt=fe,$t=ne)}M.push($t),U+=gt,P+=at}J=M;const Z=-Math.atan2(U,P)-_;tt.tx=Z+Math.round((tt.x-Z)/(Math.PI*2))*Math.PI*2,tt.ty=0,tt.vx=tt.vy=0;return}const R=U=>zt[U*3+2]>.3;let D=-1;for(let U=0;U<Ht;U+=Wt)R(U)&&(D<0||zt[U*3+1]-zt[U*3]>zt[D*3+1]-zt[D*3])&&(D=U);for(D<0&&(D=0),M.push(D);M.length<Ot;){let U=0,P=-1;for(let Z=0;Z<Ht;Z+=Wt){if(!R(Z))continue;let ft=1/0;for(const ut of M)ft=Math.min(ft,(zt[Z*3]-zt[ut*3])**2+(zt[Z*3+1]-zt[ut*3+1])**2+(zt[Z*3+2]-zt[ut*3+2])**2);ft>P&&(P=ft,U=Z)}M.push(U)}J=M,tt.tx=-_+Math.round((tt.x+_)/(Math.PI*2))*Math.PI*2,tt.ty=0,tt.vx=tt.vy=0}const wt=new L;function X(){const et=s.value;if(!et.length||!d)return;const Ot=H.position.distanceTo(nt.position);for(let zt=0;zt<et.length;zt++){const Ht=J[zt],Wt=et[zt];if(Ht===void 0||!Wt)continue;wt.set(W[Ht*3]+V[Ht*3],W[Ht*3+1]+V[Ht*3+1],W[Ht*3+2]+V[Ht*3+2]).applyMatrix4(d.matrixWorld);const M=H.position.distanceTo(wt)<Ot+.25;wt.project(H);const R=(wt.x*.5+.5)*k,D=(-wt.y*.5+.5)*ht;Wt.style.transform=`translate(${R.toFixed(1)}px, ${D.toFixed(1)}px)`,Wt.classList.toggle("behind",!M),zt===a.value&&(r.value.style.setProperty("--hx",`${R.toFixed(1)}px`),r.value.style.setProperty("--hy",`${D.toFixed(1)}px`),r.value.style.setProperty("--ty",`${Math.max(72,Math.min(ht-Gl-112,D-Gl/2)).toFixed(1)}px`))}}function j(et){Q=et,z=S[Jt(et)],C=S[Jt(et+1)]}function Ct(){!r.value||!v||(k=r.value.clientWidth||1,ht=r.value.clientHeight||1,v.setSize(k,ht,!1),O=parseFloat(getComputedStyle(r.value).getPropertyValue("--frame"))*parseFloat(getComputedStyle(document.documentElement).fontSize)||20,H.aspect=k/ht,nt.scale.setScalar(k<=800?.8:1))}const Dt=new pe,re=new pe,me=new L,Te=new L,se=new L,De=new L,Ze=new L,Qn=new L,ti=new L;function Mn(et,Ot,zt){const Ht=dt.inside&&!Ot,Wt=dt.click;dt.click=!1;const M=V.length/3,R=V,D=G,U=W,P=V_*Vl*et,Z=Math.pow(H_,et)*(1-P),ft=Math.pow(G_,et)*(1-P);let ut=[],rt=[],gt=[],Pt=0;(Ht||Wt)&&(d.updateWorldMatrix(!0,!1),Dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse).multiply(d.matrixWorld),ut=Dt.elements,rt=d.matrixWorld.elements,re.copy(d.matrixWorld).invert(),gt=re.elements,De.setFromMatrixColumn(H.matrixWorld,0).normalize(),Ze.setFromMatrixColumn(H.matrixWorld,1).normalize(),Qn.copy(De).transformDirection(re),ti.copy(Ze).transformDirection(re),se.setFromMatrixPosition(d.matrixWorld),me.copy(H.position).sub(se).normalize(),Pt=se.dot(me),Wt&&Te.set(dt.px/k*2-1,1-dt.py/ht*2,.5).unproject(H).sub(H.position).normalize().multiplyScalar(H.position.distanceTo(se)).add(H.position));const at=me.x,$t=me.y,Kt=me.z,ne=us*us,fe=z_*Vl*et*.01;for(let xe=0;xe<M;xe++){const oe=xe*3,he=oe+1,be=oe+2;if(Ht||Wt){const le=U[oe]+R[oe],Ae=U[he]+R[he],Je=U[be]+R[be],Ce=ut[3]*le+ut[7]*Ae+ut[11]*Je+ut[15],Sn=((ut[0]*le+ut[4]*Ae+ut[8]*Je+ut[12])/Ce*.5+.5)*k,ei=(-(ut[1]*le+ut[5]*Ae+ut[9]*Je+ut[13])/Ce*.5+.5)*ht,rn=dt.px-Sn,ni=dt.py-ei,gn=rn*rn+ni*ni;if(gn<ne&&gn>0){const Ai=Math.sqrt(gn),Ao=(us-Ai)/us,wo=rt[0]*le+rt[4]*Ae+rt[8]*Je+rt[12],Ro=rt[1]*le+rt[5]*Ae+rt[9]*Je+rt[13],Co=rt[2]*le+rt[6]*Ae+rt[10]*Je+rt[14];if(Ht&&wo*at+Ro*$t+Co*Kt>Pt){const Bn=Ao*fe/Ai,yn=-rn*Bn,En=ni*Bn;R[oe]+=Qn.x*yn+ti.x*En,R[he]+=Qn.y*yn+ti.y*En,R[be]+=Qn.z*yn+ti.z*En}if(Wt){let Bn=wo-Te.x,yn=Ro-Te.y,En=Co-Te.z;const Po=Math.hypot(Bn,yn,En);if(Po>.001){const Us=Ao*k_*.5/Po;Bn*=Us,yn*=Us,En*=Us,D[oe]+=gt[0]*Bn+gt[4]*yn+gt[8]*En,D[he]+=gt[1]*Bn+gt[5]*yn+gt[9]*En,D[be]+=gt[2]*Bn+gt[6]*yn+gt[10]*En}}}}R[oe]=R[oe]*Z+D[oe]*et*.1,R[he]=R[he]*Z+D[he]*et*.1,R[be]=R[be]*Z+D[be]*et*.1,D[oe]*=ft,D[he]*=ft,D[be]*=ft}const jt=d.geometry.getAttribute("position"),Nt=jt.array,ge=w.normals,ae=Ot?0:I_*(1-N);for(let xe=0;xe<M;xe++){const oe=xe*3,he=y[xe*4+2],be=ae*Math.cos(zt*U_*he+Math.PI*he)*y[xe*4];Nt[oe]=U[oe]+R[oe]+ge[oe]*be,Nt[oe+1]=U[oe+1]+R[oe+1]+ge[oe+1]*be,Nt[oe+2]=U[oe+2]+R[oe+2]+ge[oe+2]*be}jt.needsUpdate=!0}function yi(et){const Ot=v.domElement.getBoundingClientRect();dt.px=et.clientX-Ot.left,dt.py=et.clientY-Ot.top,dt.tx=dt.px/Ot.width*2-1,dt.ty=1-dt.py/Ot.height*2}function Dr(et){if(yi(et),dt.inside=!0,dt.target=1,tt.dragging){const Ot=performance.now(),zt=et.clientX-tt.lastX,Ht=et.clientY-tt.lastY,Wt=Ot-tt.lastT;if(tt.tx+=zt*cs,tt.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,tt.ty+Ht*cs)),Wt>0){const M=16.666666666666668/Wt*.3;tt.vx=zt*cs*M,tt.vy=Ht*cs*M}tt.moved+=Math.abs(zt)+Math.abs(Ht),tt.lastX=et.clientX,tt.lastY=et.clientY,tt.lastT=Ot}}function Ei(){dt.inside=!1,dt.target=0}function Ti(et){et.pointerType!=="mouse"||et.button!==0||(tt.dragging=!0,tt.moved=0,tt.vx=tt.vy=0,tt.lastX=et.clientX,tt.lastY=et.clientY,tt.lastT=performance.now(),v.domElement.setPointerCapture(et.pointerId))}function Ir(et){tt.dragging=!1,et.pointerType!=="mouse"&&Ei()}function bi(et,Ot,zt,Ht){if(!tt.dragging&&(Math.abs(tt.vx)>1e-4||Math.abs(tt.vy)>1e-4)){tt.tx+=tt.vx*et,tt.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,tt.ty+tt.vy*et));const U=Math.pow(B_,et);tt.vx*=U,tt.vy*=U}const Wt=zt?1:1-Math.pow(1-O_,et);tt.x+=(tt.tx-tt.x)*Wt,tt.y+=(tt.ty-tt.y)*Wt;const M=1-K;zt||(_-=N_*Ot*M);const R=zt?0:M,D=zt?1:1-Math.exp(-Ot*3);A+=(w.lean-A)*D,mt+=(w.tip-mt)*D,Lt.rotation.set(tt.y+mt+Math.sin(Ht*.7)*.045*R,tt.x+_,A+Math.cos(Ht*.55)*.03*R,"ZXY"),Lt.position.y=(zt?0:Math.sin(Ht)*.07*(1-K*.6))+lt}return Dn(()=>{const et=r.value;v=new gg({antialias:!0,alpha:!0,powerPreference:"high-performance"}),v.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),v.setClearColor(0,0),et.prepend(v.domElement);const Ot=v.domElement;Ot.addEventListener("pointermove",Dr,{passive:!0}),Ot.addEventListener("pointerleave",Ei,{passive:!0}),Ot.addEventListener("pointercancel",Ei,{passive:!0}),Ot.addEventListener("pointerdown",Ti),Ot.addEventListener("pointerup",Ir),Ot.addEventListener("click",Pt=>{tt.moved<5&&(yi(Pt),dt.click=!0)}),Y=new ResizeObserver(Ct),Y.observe(et),st=e.active,qt(),v.toneMapping=ec;const zt=__(v),Ht=v_(),Wt=At("--surface","#f2f4fb").multiplyScalar(.82);Bt=Bl(Ht,zt,Wt),Mt.add(Bt.group),bt=Array.from({length:6},()=>{const Pt=Bl(Ht,zt,Wt);return Mt.add(Pt.group),Pt}),e.landUrl&&c_(e.landUrl).then(Pt=>{Pt&&!St&&(T=Pt,qt())});const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,R=new L,D=new L,U=new L,P=new L,Z=new L(0,1,0),ft=Pt=>{let at=Pt;for(let $t=0;$t<6;$t++){const Kt=3*(1-at)*(1-at)*at*.45+3*(1-at)*at*at*.25+at*at*at,ne=3*(1-at)*(1-at)*.45+6*(1-at)*at*(.25-.45)+3*at*at*(1-.25);at-=(Kt-Pt)/Math.max(1e-4,ne)}return at=Math.min(1,Math.max(0,at)),3*(1-at)*at*at+at*at*at};let ut=performance.now(),rt=Math.random()*100;const gt=Pt=>{const at=Math.min((Pt-ut)/1e3,.03333333333333333),$t=at*60;ut=Pt,M||(rt+=at);const Kt=gn=>1-Math.exp(-at*gn),ne=e.travel;ne.update(at);const fe=gn=>{const Ai=Math.min(1,Math.max(0,gn));return Ai*Ai*(3-2*Ai)},jt=ne.state.progress,Nt=Math.floor(jt),ge=jt-Nt,ae=(ge+.5)%1,xe=ge>=.6;Nt!==Q&&j(Nt);const oe=xe?C:z;if(!st)kt=1,ce(oe,1);else if(B<1)B=M?1:Math.min(1,B+at/P_),kt=0,ce(oe,1-fe(B));else{const gn=ge>=.5&&ge<.75;kt=M?gn?1:0:Math.min(1,Math.max(0,kt+(gn?at:-at))),oe!==w&&(tt.x=tt.tx=tt.y=tt.ty=tt.vx=tt.vy=0,_=0),ce(oe,ft(kt))}dt.x+=(dt.tx-dt.x)*Kt(1),dt.y+=(dt.ty-dt.y)*Kt(1),dt.on+=(dt.target-dt.on)*Kt(2),K+=((e.focused?1:0)-K)*Kt(2.6);const he=e.shapes[Jt(Math.round(jt))]==="globe",be=e.focused?1:0;it+=((he?W_:X_)*be-it)*Kt(2.6),lt+=((he||H.aspect<1?0:q_)*be-lt)*Kt(2.6);const le=jt*f,Ae=((xe?Nt+1:Nt)+.5)*f;_t(Ae,nt.position),_t(le-(1-Math.min(1,B*1.3))*.35,R).lerp(nt.position,it*Math.min(1,H.aspect/1.3));const Je=1-(fe((ae-.1)/.6)-fe((ae-.4)/.5));_t(ae<.1?le+f/2:Ae+(le+f/2-Ae)*Je,D).lerp(nt.position,K),nt.lookAt(_t(le-.02*Math.PI,U));const Ce=R.distanceTo(D)*Math.tan(Ts.degToRad(2.25))*dt.on;P.subVectors(D,R).cross(Z).normalize(),H.position.copy(R).addScaledVector(P,-dt.x*Ce).addScaledVector(Z,dt.y*Ce),H.lookAt(D),Yt+=(e.shift-Yt)*Kt(4),Math.abs(Yt)>5e-4?H.setViewOffset(k,ht,Yt*k,0,k,ht):H.clearViewOffset(),H.updateProjectionMatrix(),H.updateMatrixWorld(),bi($t,at,M,rt);const Sn=d.material.uniforms,ei=v.getPixelRatio();Sn.uDot.value=Wl*ei,Sn.uBlur.value=Xl*ei,Sn.uFade.value=1-N,Mn($t,M,rt),X(),Ft(at,rt,fe(Math.min(1,Math.abs(jt-Math.round(jt))*2)),M);const rn=p.material.uniforms,ni=b.material.uniforms;rn.uTime.value=rt,rn.uRatio.value=ei,rn.uCalm.value=K,rn.uShow.value=Math.min(1,B*1.5),ni.uTime.value=rt,ni.uAspect.value=H.aspect,ni.uSway.value=Math.sin(le),v.render(Zt,H),Tt=requestAnimationFrame(gt)};Tt=requestAnimationFrame(gt)}),Qe(()=>e.active,et=>{et&&(st=!0)}),Qe(()=>e.points,I,{immediate:!0}),Qe(()=>[e.count,e.shapes.join()],()=>{v&&(st&&(B=1),qt())}),nr(()=>{St=!0,cancelAnimationFrame(Tt),Y?.disconnect(),ee(d),ee(p),Bt&&kl(Bt),bt.forEach(kl),q.forEach(et=>et.dispose()),v?.dispose(),v?.domElement.remove()}),(et,Ot)=>(pt(),yt("div",{ref_key:"host",ref:r,class:"stage"},[Me(Xc,{name:"marker"},{default:Ke(()=>[(pt(!0),yt(Ue,null,Xe(i.points,(zt,Ht)=>(pt(),yt("button",{key:zt.slug,ref_for:!0,ref_key:"markers",ref:s,type:"button",class:nn(["marker",{plain:!i.card}]),style:Yn({"--k":Ht}),"aria-label":zt.title,onClick:Wt=>n("pick",zt.slug),onPointerenter:Wt=>a.value=Ht,onPointerleave:Ot[0]||(Ot[0]=Wt=>a.value=-1),onFocus:Wt=>a.value=Ht,onBlur:Ot[1]||(Ot[1]=Wt=>a.value=-1)},[Ot[2]||(Ot[2]=xt("span",{class:"dot"},null,-1)),xt("span",b_,Xt(zt.title),1)],46,T_))),128))]),_:1}),i.card?(pt(),yt("div",{key:0,class:nn(["card",{on:F(a)>=0}]),"aria-hidden":"true"},[Ot[3]||(Ot[3]=xt("span",{class:"thread"},null,-1)),Ot[4]||(Ot[4]=xt("svg",{class:"outline",viewBox:"0 0 290 195",fill:"none"},[xt("path",{pathLength:"1",d:"M.5.5h289v178a16 16 0 0 1-16 16H.5Z"})],-1)),xt("span",A_,[F(o)?.image?(pt(),yt("img",{key:0,src:c(F(o).image),alt:""},null,8,w_)):(pt(),yt("span",R_))]),xt("span",C_,Xt(F(o)?.title),1)],2)):Ie("",!0)],512))}}),Y_=We($_,[["__scopeId","data-v-2bfc280e"]]),K_={class:"mark",viewBox:"0 0 84 84","aria-hidden":"true"},Z_=Be({__name:"BrandMark",setup(i){return(t,e)=>(pt(),yt("svg",K_,[...e[0]||(e[0]=[xt("path",{class:"tile",d:"M16 0H48Q64 0 67.7 15.6L80.3 68.4Q84 84 68 84H16Q0 84 0 68V16Q0 0 16 0Z"},null,-1),xt("path",{class:"inner",d:"M24 22H44Q51 22 52.6 28.8L57.4 49.2Q60 60 50 60H24Q18 60 18 54V28Q18 22 24 22Z"},null,-1)])]))}}),J_=We(Z_,[["__scopeId","data-v-1eb00a05"]]),j_=["aria-label","aria-expanded"],Q_=["aria-label"],t0=["aria-selected"],e0=["lang","onClick"],n0=Be({__name:"LanguageSwitch",props:{locales:{},current:{},label:{}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,r=ye(!1),s=ye(),a=l=>{s.value&&!s.value.contains(l.target)&&(r.value=!1)};Dn(()=>document.addEventListener("pointerdown",a)),nr(()=>document.removeEventListener("pointerdown",a));function o(l){r.value=!1,l!==e.current&&n("pick",l)}return(l,c)=>(pt(),yt("div",{ref_key:"root",ref:s,class:"lang",onKeydown:c[1]||(c[1]=qc($c(u=>r.value=!1,["stop"]),["esc"]))},[xt("button",{type:"button",class:"toggle","aria-label":i.label,"aria-haspopup":"listbox","aria-expanded":F(r),onClick:c[0]||(c[0]=u=>r.value=!F(r))},[Ki(Xt(i.current.toUpperCase()),1),xt("span",{class:nn(["arrow",{up:F(r)}]),"aria-hidden":"true"},null,2)],8,j_),Me(tn,{name:"drop"},{default:Ke(()=>[F(r)?(pt(),yt("ul",{key:0,role:"listbox","aria-label":i.label},[(pt(!0),yt(Ue,null,Xe(i.locales,u=>(pt(),yt("li",{key:u.code,role:"option","aria-selected":u.code===i.current},[xt("button",{type:"button",lang:u.code,onClick:f=>o(u.code)},Xt(u.label),9,e0)],8,t0))),128))],8,Q_)):Ie("",!0)]),_:1})],544))}}),i0=We(n0,[["__scopeId","data-v-92b1649b"]]),r0={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},s0=["d"],Wc=Be({__name:"TopicIcon",props:{name:{}},setup(i){return(t,e)=>(pt(),yt("svg",r0,[(pt(!0),yt(Ue,null,Xe(F(Gc)[i.name],n=>(pt(),yt("path",{key:n,d:n},null,8,s0))),128))]))}}),a0=["aria-current","onClick"],o0={class:"name"},l0=Be({__name:"ZoneRail",props:{zones:{},active:{},travel:{}},emits:["select"],setup(i){const t=i,e=ye(),n=s=>{const a=t.zones.length,o=Math.min(Math.abs(s-t.active),a-Math.abs(s-t.active));return o===0?1:o===1?.6:o===2?.4:.3};let r=0;return Dn(()=>{const s=()=>{const a=t.travel.state.progress,o=Math.abs(a-Math.round(a))*2;e.value?.style.setProperty("--fill",(.5+o*.5).toFixed(3)),r=requestAnimationFrame(s)};r=requestAnimationFrame(s)}),nr(()=>cancelAnimationFrame(r)),(s,a)=>{const o=Wc;return pt(),yt("nav",{ref_key:"rail",ref:e,class:"rail","aria-label":"Topics"},[a[1]||(a[1]=xt("span",{class:"glow","aria-hidden":"true"},null,-1)),xt("ul",null,[(pt(!0),yt(Ue,null,Xe(i.zones,(l,c)=>(pt(),yt("li",{key:l.id,class:nn(["stop",{active:c===i.active}]),style:Yn({"--fade":n(c)})},[a[0]||(a[0]=xt("span",{class:"line","aria-hidden":"true"},[xt("span",{class:"line-fill"})],-1)),xt("button",{type:"button","aria-current":c===i.active?"true":void 0,onClick:u=>s.$emit("select",c)},[Me(o,{name:l.shape,class:"glyph"},null,8,["name"]),xt("span",o0,Xt(l.title),1)],8,a0)],6))),128))])],512)}}}),c0=We(l0,[["__scopeId","data-v-df97a153"]]),u0={class:"row","aria-label":"Pages in this topic"},h0=["aria-label","onClick","onPointerenter","onFocus"],d0={class:"name","aria-hidden":"true"},f0=Be({__name:"PageTokens",props:{pages:{}},emits:["pick","hover"],setup(i,{emit:t}){const e=t;return nr(()=>e("hover",-1)),(n,r)=>(pt(),yt("ul",u0,[(pt(!0),yt(Ue,null,Xe(i.pages,(s,a)=>(pt(),yt("li",{key:s.slug,style:Yn({"--i":a,"--dip":1-Math.min(1,Math.abs(a-(i.pages.length-1)/2))})},[xt("button",{type:"button","aria-label":s.title,onClick:o=>e("pick",s.slug),onPointerenter:o=>e("hover",a),onPointerleave:r[0]||(r[0]=o=>e("hover",-1)),onFocus:o=>e("hover",a),onBlur:r[1]||(r[1]=o=>e("hover",-1))},null,40,h0),xt("span",d0,Xt(s.title),1)],4))),128))]))}}),p0=We(f0,[["__scopeId","data-v-59bd2179"]]),m0={class:"slider","aria-label":"Pages in this topic"},g0=["onClick"],_0=Be({__name:"LevelSlider",props:{pages:{}},emits:["pick"],setup(i){return(t,e)=>(pt(),yt("ul",m0,[(pt(!0),yt(Ue,null,Xe(i.pages,(n,r)=>(pt(),yt("li",{key:n.slug,style:Yn({"--i":r})},[xt("button",{type:"button",onClick:s=>t.$emit("pick",n.slug)},[e[0]||(e[0]=xt("span",{class:"dot","aria-hidden":"true"},null,-1)),Ki(Xt(n.title),1)],8,g0)],4))),128))]))}}),v0=We(_0,[["__scopeId","data-v-0c758621"]]),x0={key:0,class:"menu",role:"dialog","aria-modal":"true","aria-label":"All topics"},M0=["aria-label"],S0={key:0,class:"rows"},y0=["aria-expanded","onClick"],E0={class:"label"},T0={class:"fold"},b0=["tabindex","onClick"],A0=["tabindex","onClick"],w0={key:0,class:"legal"},R0=["onClick"],C0=["onMouseenter","onFocusin"],P0=["tabindex","onClick"],L0={class:"name"},D0=["aria-hidden"],I0=["tabindex","onClick"],U0=["tabindex","onClick"],N0=Be({__name:"TopicMenu",props:{zones:{},extras:{},open:{type:Boolean},active:{},closeLabel:{}},emits:["page","zone","close"],setup(i,{emit:t}){const e=i,n=t,r=ye(null),s=ye(!1);Dn(()=>{const l=window.matchMedia("(max-width: 800px)");s.value=l.matches,l.addEventListener("change",c=>{s.value=c.matches})}),Qe(()=>e.open,()=>{r.value=null});const a=()=>window.matchMedia("(hover: hover)").matches;function o(l){a()||r.value===l?n("zone",l):r.value=l}return(l,c)=>{const u=Wc;return pt(),yt(Ue,null,[Me(tn,{name:"veil"},{default:Ke(()=>[i.open?(pt(),yt("div",{key:0,class:"veil",onClick:c[0]||(c[0]=f=>n("close"))})):Ie("",!0)]),_:1}),Me(tn,{name:"menu"},{default:Ke(()=>[i.open?(pt(),yt("div",x0,[xt("button",{type:"button",class:"close","aria-label":i.closeLabel,onClick:c[1]||(c[1]=f=>n("close"))},[...c[3]||(c[3]=[xt("span",{"aria-hidden":"true"},"×",-1)])],8,M0),F(s)?(pt(),yt("ul",S0,[(pt(!0),yt(Ue,null,Xe(i.zones,(f,h)=>(pt(),yt("li",{key:f.id,class:nn(["row",{open:F(r)===h,current:h===i.active}]),style:Yn({"--i":h})},[xt("button",{type:"button",class:"head","aria-expanded":F(r)===h,onClick:m=>r.value=F(r)===h?null:h},[Me(u,{name:f.shape,class:"glyph"},null,8,["name"]),xt("span",E0,Xt(f.title),1),c[4]||(c[4]=xt("span",{class:"plus","aria-hidden":"true"},null,-1))],8,y0),xt("div",T0,[xt("ul",null,[xt("li",null,[xt("button",{type:"button",tabindex:F(r)===h?0:-1,onClick:m=>n("zone",h)},Xt(f.title)+" →",9,b0)]),(pt(!0),yt(Ue,null,Xe(f.pages,m=>(pt(),yt("li",{key:m.slug},[xt("button",{type:"button",tabindex:F(r)===h?0:-1,onClick:g=>n("page",m.slug)},Xt(m.title),9,A0)]))),128))])])],6))),128)),i.extras.length?(pt(),yt("li",w0,[(pt(!0),yt(Ue,null,Xe(i.extras,f=>(pt(),yt("button",{key:f.slug,type:"button",onClick:h=>n("page",f.slug)},Xt(f.title),9,R0))),128))])):Ie("",!0)])):(pt(),yt("ul",{key:1,class:"grid",style:Yn({"--rows":Math.ceil(i.zones.length/2)})},[(pt(!0),yt(Ue,null,Xe(i.zones,(f,h)=>(pt(),yt("li",{key:f.id,class:nn(["cell",{current:h===i.active,listing:F(r)===h}]),style:Yn({"--i":h}),onMouseenter:m=>r.value=h,onMouseleave:c[2]||(c[2]=m=>r.value=null),onFocusin:m=>r.value=h},[xt("button",{type:"button",class:"face",tabindex:F(r)===h?-1:0,onClick:m=>o(h)},[Me(u,{name:f.shape,class:"icon"},null,8,["name"]),xt("span",L0,Xt(f.title),1)],8,P0),xt("div",{class:"pages","aria-hidden":F(r)!==h},[xt("button",{type:"button",class:"title",tabindex:F(r)===h?0:-1,onClick:m=>n("zone",h)},Xt(f.title),9,I0),xt("ul",null,[(pt(!0),yt(Ue,null,Xe(f.pages,m=>(pt(),yt("li",{key:m.slug},[xt("button",{type:"button",tabindex:F(r)===h?0:-1,onClick:g=>n("page",m.slug)},Xt(m.title),9,U0)]))),128))])],8,D0)],46,C0))),128))],4))])):Ie("",!0)]),_:1})],64)}}}),F0=We(N0,[["__scopeId","data-v-48f1d23d"]]),O0={class:"carousel"},B0=["src","alt"],z0={key:1,class:"blank","aria-hidden":"true"},k0={class:"controls"},H0=["disabled"],V0={class:"count"},G0=["disabled"],W0=Be({__name:"BlockCarousel",props:{slides:{}},setup(i){const t=i,e=ye(),n=ye(0);function r(){const a=e.value;a&&(n.value=Math.round(a.scrollLeft/a.clientWidth))}function s(a){const o=e.value;o&&o.scrollTo({left:Math.max(0,Math.min(t.slides.length-1,a))*o.clientWidth,behavior:"smooth"})}return(a,o)=>(pt(),yt("div",O0,[xt("ul",{ref_key:"track",ref:e,class:"track",tabindex:"0","aria-label":"Image carousel",onScrollPassive:r},[(pt(!0),yt(Ue,null,Xe(i.slides,(l,c)=>(pt(),yt("li",{key:c},[xt("figure",null,[l.src?(pt(),yt("img",{key:0,src:l.src,alt:l.caption,loading:"lazy"},null,8,B0)):(pt(),yt("div",z0)),xt("figcaption",null,Xt(l.caption),1)])]))),128))],544),xt("div",k0,[xt("button",{type:"button","aria-label":"Previous slide",disabled:F(n)===0,onClick:o[0]||(o[0]=l=>s(F(n)-1))},"←",8,H0),xt("span",V0,Xt(F(n)+1)+" / "+Xt(i.slides.length),1),xt("button",{type:"button","aria-label":"Next slide",disabled:F(n)===i.slides.length-1,onClick:o[1]||(o[1]=l=>s(F(n)+1))},"→",8,G0)])]))}}),X0=We(W0,[["__scopeId","data-v-53c10e1b"]]),q0={class:"video"},$0=["src","poster"],Y0={key:1,class:"blank","aria-hidden":"true"},K0=Be({__name:"BlockVideo",props:{caption:{},src:{},poster:{}},setup(i){return(t,e)=>(pt(),yt("figure",q0,[i.src?(pt(),yt("video",{key:0,src:i.src,poster:i.poster,controls:"",playsinline:"",preload:"metadata"},null,8,$0)):(pt(),yt("div",Y0,[...e[0]||(e[0]=[xt("span",{class:"play"},null,-1)])])),xt("figcaption",null,Xt(i.caption),1)]))}}),Z0=We(K0,[["__scopeId","data-v-7f8c8b1b"]]),J0=["aria-label"],j0={class:"top"},Q0={class:"topic"},tv={key:0,class:"lead"},ev={key:0},nv={key:1},iv={key:2,class:"columns"},rv={key:3},sv=["src","alt"],av={key:1,class:"blank","aria-hidden":"true"},ov=["onClick"],lv=Be({__name:"ContentPanel",props:{page:{},topic:{},closeLabel:{}},emits:["close","go"],setup(i,{emit:t}){const e=i,n=t,r=ye();return Qe(()=>e.page?.slug,()=>Yc(()=>r.value?.scrollTo({top:0}))),(s,a)=>{const o=X0,l=Z0;return pt(),pi(tn,{name:"panel"},{default:Ke(()=>[i.page?(pt(),yt("aside",{key:0,class:"panel",role:"dialog","aria-modal":"false","aria-label":i.page.title},[xt("header",j0,[xt("p",Q0,Xt(i.topic),1),xt("button",{type:"button",class:"close",onClick:a[0]||(a[0]=c=>n("close"))},[Ki(Xt(i.closeLabel),1),a[1]||(a[1]=xt("span",{"aria-hidden":"true"},"×",-1))])]),xt("div",{ref_key:"body",ref:r,class:"body"},[Me(tn,{name:"swap",mode:"out-in"},{default:Ke(()=>[(pt(),yt("article",{key:i.page.slug},[xt("h2",null,Xt(i.page.title),1),i.page.lead?(pt(),yt("p",tv,Xt(i.page.lead),1)):Ie("",!0),(pt(!0),yt(Ue,null,Xe(i.page.blocks,(c,u)=>(pt(),yt(Ue,{key:u},[c.type==="heading"?(pt(),yt("h3",ev,Xt(c.text),1)):c.type==="text"?(pt(),yt("p",nv,Xt(c.text),1)):c.type==="columns"?(pt(),yt("div",iv,[xt("p",null,Xt(c.left),1),xt("p",null,Xt(c.right),1)])):c.type==="figure"?(pt(),yt("figure",rv,[c.src?(pt(),yt("img",{key:0,src:c.src,alt:c.caption,loading:"lazy"},null,8,sv)):(pt(),yt("div",av)),xt("figcaption",null,Xt(c.caption),1)])):c.type==="carousel"?(pt(),pi(o,{key:4,slides:c.slides},null,8,["slides"])):c.type==="video"?(pt(),pi(l,{key:5,caption:c.caption,src:c.src,poster:c.poster},null,8,["caption","src","poster"])):c.type==="button"?(pt(),yt("button",{key:6,type:"button",class:"cta",onClick:f=>n("go",c.to)},[Ki(Xt(c.label),1),a[2]||(a[2]=xt("span",{"aria-hidden":"true"},"→",-1))],8,ov)):Ie("",!0)],64))),128))]))]),_:1})],512)],8,J0)):Ie("",!0)]),_:1})}}}),cv=We(lv,[["__scopeId","data-v-3ede7e75"]]),uv={class:"tutorial","aria-live":"polite"},hv={class:"count"},dv={class:"text"},fv=Be({__name:"AppTutorial",props:{steps:{}},emits:["done"],setup(i,{emit:t}){const e=i,n=t,r=ye(0),s=cn(()=>e.steps[r.value]);function a(){r.value<e.steps.length-1?r.value++:n("done")}return(o,l)=>(pt(),yt("section",uv,[Me(tn,{name:"card",mode:"out-in"},{default:Ke(()=>[(pt(),yt("div",{key:F(r),class:"card"},[xt("p",hv,Xt(F(r)+1)+" / "+Xt(i.steps.length),1),xt("h1",null,Xt(F(s).title),1),xt("p",dv,Xt(F(s).text),1),xt("button",{type:"button",class:"action",onClick:a},Xt(F(s).button),1)]))]),_:1})]))}}),pv=We(fv,[["__scopeId","data-v-e50c94a2"]]),mv=Be({__name:"AppCursor",props:{hint:{},enabled:{type:Boolean}},setup(i){const t=i,e=ye(),n=ye(!1);let r=0,s=0,a=0,o=0,l=0,c=!1;function u(h){if(h.pointerType!=="mouse")return;a=h.clientX,o=h.clientY,c||(c=!0,r=a,s=o);const m=h.target;n.value=!!m&&m.tagName==="CANVAS"}const f=()=>{n.value=!1};return Dn(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;window.addEventListener("pointermove",u,{passive:!0}),document.documentElement.addEventListener("pointerleave",f);const h=()=>{r+=(a-r)*.16,s+=(o-s)*.16,e.value&&(e.value.style.transform=`translate(${r.toFixed(1)}px, ${s.toFixed(1)}px)`),l=requestAnimationFrame(h)};l=requestAnimationFrame(h)}),nr(()=>{cancelAnimationFrame(l),window.removeEventListener("pointermove",u),document.documentElement.removeEventListener("pointerleave",f)}),(h,m)=>(pt(),yt("div",{ref_key:"el",ref:e,class:nn(["cursor",{shown:F(n)&&t.enabled}]),"aria-hidden":"true"},[m[0]||(m[0]=xt("span",{class:"ring"},null,-1)),Me(tn,{name:"swap",mode:"out-in"},{default:Ke(()=>[(pt(),yt("span",{key:i.hint,class:"hint"},Xt(i.hint),1))]),_:1})],2))}}),gv=We(mv,[["__scopeId","data-v-67b5f5bd"]]),_v=["aria-hidden"],vv={class:"mark"},xv={viewBox:"0 0 100 100","aria-hidden":"true"},Mv=["stroke-dashoffset"],Sv={class:"count"},yv={class:"label"},Ev=Be({__name:"AppLoader",props:{progress:{},label:{},done:{type:Boolean}},setup(i){const t=i,e=46,n=2*Math.PI*e,r=cn(()=>n*(1-Math.min(1,t.progress)));return(s,a)=>(pt(),yt("div",{class:nn(["loader",{done:i.done}]),role:"status","aria-hidden":i.done},[xt("div",vv,[(pt(),yt("svg",xv,[xt("circle",{class:"track",cx:"50",cy:"50",r:e}),xt("circle",{class:"fill",cx:"50",cy:"50",r:e,"stroke-dasharray":n,"stroke-dashoffset":F(r)},null,8,Mv)])),xt("span",Sv,Xt(Math.round(Math.min(1,i.progress)*100)),1)]),xt("p",yv,Xt(i.label),1)],10,_v))}}),Tv=We(Ev,[["__scopeId","data-v-e7ddaa53"]]),bv=.1,$l=100,Av=25e-5,wv=.9,Yl=.1,Rv=.95,Kl=2,Cv=.3,Pv=100,Lv=10,vs=(i,t,e)=>Math.max(t,Math.min(e,i)),Zl=(i,t,e)=>vs((i-t)/(e-t),0,1);function Dv(i,t,e){const n={progress:0,velocity:0,direction:1};let r=0,s=0,a=null,o=0,l=0,c=1,u=!1,f=-1e3,h=0,m=!0,g=!1;const v=p=>(p%i+i)%i,d=(p,b=!1)=>{a=p,o=n.progress,l=0,u=b;const S=Math.abs(p-o);c=b?Math.max(.5,Lv*S):.9+1.3*Math.sqrt(Math.min(3,S)),n.velocity=0,s=0,r=0};return{state:n,get stops(){return i},set stops(p){i=Math.max(1,p)},setEnabled(p){g=p,p||(n.velocity=0,s=0,r=0)},impulse(p){g&&(a!==null&&(a=null),r+=p,f=performance.now())},goTo(p){const b=Math.round(n.progress),S=v(p)-v(b);d(b+(S>i/2?S-i:S<-i/2?S+i:S))},step(p){g&&d(Math.round(a??n.progress)+p)},nearest:()=>v(Math.round(n.progress)),update(p){const b=n.progress,S=p*60;if(a!==null){l+=p;const w=Math.min(1,l/c),N=u?1-(1-w)*(1-w):w<.5?2*w*w:1-Math.pow(-2*w+2,2)/2;n.progress=o+(a-o)*N,w>=1&&(n.progress=a,a=null)}else{const w=r*(1-Math.pow(1-bv,S));r-=w,s+=vs(w,-$l*S,$l*S)*Av,s=vs(s*Math.pow(wv,S),-Yl,Yl),n.velocity=vs((n.velocity+s*S)*Math.pow(Rv,S),-Kl,Kl);const N=n.progress-Math.floor(n.progress),ot=(N+.5)%1;n.velocity*=1-(Zl(ot,.3,.4)-Zl(ot,.4,.5))*.09*S,n.progress+=n.velocity*p*Cv,performance.now()-f>Pv&&Math.abs(r)<1&&Math.abs(n.velocity)<.25&&N>.48&&N<.82&&(n.progress+=n.direction*p*.22)}const T=n.progress-b;Math.abs(T)>1e-5&&(n.direction=Math.sign(T));const z=v(Math.round(n.progress));z!==h&&(h=z,t(z));const C=Math.abs(n.progress-Math.round(n.progress))<.06;C!==m&&(m=C,e(m))}}}let Pn,un,gr,Xi=!1,Jl=0;function Iv(){try{return localStorage.getItem("sound")==="off"}catch{return!1}}function Uv(i){try{localStorage.setItem("sound",i?"off":"on")}catch{}}function co(){if(!Pn){const i=window.AudioContext??window.webkitAudioContext;if(!i)return;Pn=new i,un=Pn.createGain(),un.gain.value=Xi?0:1,un.connect(Pn.destination)}return Pn.state==="suspended"&&Pn.resume(),Pn}function jl(i,t,e,n,r="sine"){const s=co();if(!s||!un||Xi)return;const a=s.createOscillator(),o=s.createGain(),l=s.currentTime;a.type=r,a.frequency.setValueAtTime(i,l),a.frequency.exponentialRampToValueAtTime(t,l+e),o.gain.setValueAtTime(n,l),o.gain.exponentialRampToValueAtTime(1e-4,l+e),a.connect(o).connect(un),a.start(l),a.stop(l+e+.02)}const Xn={get muted(){return Xi},init(){Xi=Iv()},setMuted(i){Xi=i,Uv(i),Pn&&un&&un.gain.setTargetAtTime(i?0:1,Pn.currentTime,.15)},startAmbient(){const i=co();if(!i||!un||gr)return;gr=i.createGain(),gr.gain.value=0,gr.gain.setTargetAtTime(.045,i.currentTime,2.5);const t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=520;const e=i.createOscillator(),n=i.createGain();e.frequency.value=.05,n.gain.value=180,e.connect(n).connect(t.frequency),e.start();for(const[r,s]of[[110,-6],[164.8,5],[220,3],[277.2,-4]]){const a=i.createOscillator();a.type="triangle",a.frequency.value=r,a.detune.value=s,a.connect(t),a.start()}t.connect(gr).connect(un)},click(){jl(720,420,.09,.07)},hover(){const i=performance.now();i-Jl<90||(Jl=i,jl(1250,1100,.04,.018,"triangle"))},travel(){const i=co();if(!i||!un||Xi)return;const t=Math.floor(i.sampleRate*.9),e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);for(let l=0;l<t;l++)n[l]=Math.random()*2-1;const r=i.createBufferSource(),s=i.createBiquadFilter(),a=i.createGain(),o=i.currentTime;r.buffer=e,s.type="bandpass",s.Q.value=.8,s.frequency.setValueAtTime(300,o),s.frequency.exponentialRampToValueAtTime(2400,o+.45),s.frequency.exponentialRampToValueAtTime(400,o+.9),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.05,o+.35),a.gain.exponentialRampToValueAtTime(1e-4,o+.9),r.connect(s).connect(a).connect(un),r.start(o)}},Nv="$s";function qn(...i){const t=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(t);const[e,n]=i;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const r=Nv+e,s=Kc(),a=Zc(s.payload.state,r);if(a.value===void 0&&n){const o=n();if(Jc(o))return s.payload.state[r]=o,o;a.value=o}return a}function Fv(){const i=qn("site",()=>null),t=qn("locales",()=>[]),e=qn("locale",()=>"en"),n=qn("phase",()=>"loading"),r=qn("zone",()=>0),s=qn("menu",()=>!1),a=qn("page",()=>null),o=qn("focused",()=>!1),l=cn(()=>i.value?.zones??[]),c=cn(()=>l.value[r.value]),u=cn(()=>{for(const d of l.value){const p=d.pages.find(b=>b.slug===a.value);if(p)return p}return i.value?.extras?.find(d=>d.slug===a.value)??null});async function f(){const d=xs().app.baseURL;t.value=await $fetch(`${d}content/locales.json`);let p=new URLSearchParams(location.search).get("lang");if(!p)try{p=localStorage.getItem("lang")}catch{}await h(t.value.some(S=>S.code===p)?p:t.value[0].code,!1);const b=()=>{const S=location.hash.replace(/^#\/?/,"");S?g(S,!1):a.value=null};b(),window.addEventListener("hashchange",b)}async function h(d,p=!0){const b=xs().app.baseURL;if(i.value=await $fetch(`${b}content/${d}.json`),e.value=d,document.documentElement.lang=d,p){try{localStorage.setItem("lang",d)}catch{}const S=new URL(location.href);d===t.value[0].code?S.searchParams.delete("lang"):S.searchParams.set("lang",d),history.replaceState(null,"",S)}}function m(d){r.value=Math.max(0,Math.min(l.value.length-1,d))}function g(d,p=!0){const b=l.value.findIndex(S=>S.pages.some(T=>T.slug===d));b<0&&!i.value?.extras?.some(S=>S.slug===d)||(b>=0&&(r.value=b),a.value=d,s.value=!1,p&&history.replaceState(null,"",`#/${d}`))}function v(){a.value=null,history.replaceState(null,"",location.pathname+location.search)}return{site:i,locales:t,locale:e,phase:n,zones:l,zone:c,zoneIndex:r,menuOpen:s,page:u,pageSlug:a,focused:o,load:f,setLocale:h,goToZone:m,openPage:g,closePage:v}}const Ov=globalThis.setInterval,Bv={class:"bar"},zv={class:"brand"},kv={class:"bar-end"},Hv=["aria-label","aria-pressed"],Vv={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Gv={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},Wv={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},Xv={key:0,class:"explore"},qv={key:0,class:"focus-title"},$v={class:"index"},Yv={class:"summary"},Kv={class:"foot"},Zv={class:"hint"},Jv={key:0,class:"extra"},jv={key:0,class:"legal","aria-label":"Legal"},Qv=["onClick"],tx=["aria-label"],ex={class:"text"},nx=Be({__name:"index",setup(i){const{site:t,locales:e,locale:n,phase:r,zones:s,zone:a,zoneIndex:o,menuOpen:l,page:c,focused:u,load:f,setLocale:h,goToZone:m,openPage:g,closePage:v}=Fv(),d=xs().app.baseURL,p=ye(0),b=ye(!1);Dn(async()=>{const Y=performance.now(),St=1400,Zt=Ov(()=>{p.value=Math.min(b.value?1:.9,(performance.now()-Y)/St)},60);await f(),b.value=!0,await new Promise(H=>setTimeout(H,Math.max(0,St-(performance.now()-Y))+250)),clearInterval(Zt),p.value=1,r.value=c.value?"explore":"tutorial"});const S=cn(()=>r.value==="explore"&&!l.value&&!c.value&&!u.value),T=cn(()=>u.value&&a.value?a.value.pages.map(Y=>({slug:Y.slug,title:Y.title,at:Y.at,image:Y.image})):[]);Qe(o,()=>{c.value||(u.value=!1)});const z=ye(!0),C=ye(!1);Dn(()=>{Xn.init(),C.value=Xn.muted;const Y=St=>St.target?.closest?.("button, a");document.addEventListener("click",St=>{Y(St)&&Xn.click()}),document.addEventListener("pointerover",St=>{St.pointerType==="mouse"&&Y(St)&&Xn.hover()})});function w(){C.value=!C.value,Xn.setMuted(C.value),C.value||Xn.startAmbient()}Qe(r,Y=>{Y==="explore"&&Xn.startAmbient()});const N=Dv(6,Y=>{o.value=Y,Xn.travel()},Y=>{z.value=Y});Qe(()=>s.value.length,Y=>{Y&&(N.stops=Y)}),Qe(S,Y=>N.setEnabled(Y),{immediate:!0}),Qe(o,Y=>{N.nearest()!==Y&&N.goTo(Y)});function ot(Y){N.impulse(Y.deltaY)}let _=null;function y(Y){_=Y.touches[0].clientY}function W(Y){if(_===null)return;const St=Y.touches[0].clientY;N.impulse((_-St)*4),_=St}function V(Y){Y.key==="Escape"?c.value?v():l.value?l.value=!1:u.value=!1:Y.key==="ArrowDown"||Y.key==="ArrowRight"?N.step(1):(Y.key==="ArrowUp"||Y.key==="ArrowLeft")&&N.step(-1)}Dn(()=>window.addEventListener("keydown",V)),nr(()=>window.removeEventListener("keydown",V));const G=ye(!0);Dn(()=>{const Y=window.matchMedia("(min-width: 801px)");G.value=Y.matches,Y.addEventListener("change",St=>{G.value=St.matches})});const Q=ye(!1),B=ye(-1),st=cn(()=>G.value&&a.value?.shape!=="globe"),k=cn(()=>G.value?c.value?.2:l.value?.25:0:0),ht=cn(()=>G.value?42e3:15e3),Tt=cn(()=>s.value.length?s.value.map(Y=>Y.shape):["globe"].slice());return jc(()=>{const Y=t.value?.ui.brand??"MCMC P2630",St=c.value?.lead??t.value?.ui.description??"";return{title:c.value?`${c.value.title} · ${Y}`:Y,meta:[{name:"description",content:St},{property:"og:description",content:St}]}}),(Y,St)=>{const Zt=Y_,H=J_,nt=i0,Lt=c0,_t=E_,kt=p0,dt=v0,tt=F0,Yt=cv,K=pv,A=gv,mt=Tv;return pt(),yt("main",{class:"page",onWheelPassive:ot,onTouchstartPassive:y,onTouchmovePassive:W},[Me(Zt,{shapes:F(Tt),travel:F(N),active:F(r)!=="loading",shift:F(k),count:F(ht),"land-url":`${F(d)}data/land.json`,focused:F(u),points:F(st)?[]:F(T),card:F(G),token:!F(c)&&!F(l)&&!F(u)&&F(r)==="explore","token-hover":F(Q),tiles:F(u)&&F(st)&&!F(c)&&!F(l)?F(T).length:0,"tile-hover":F(B),onPick:F(g)},null,8,["shapes","travel","active","shift","count","land-url","focused","points","card","token","token-hover","tiles","tile-hover","onPick"]),F(t)?(pt(),yt(Ue,{key:0},[xt("header",Bv,[xt("p",zv,[Me(H),Ki(Xt(F(t).ui.brand),1)]),xt("span",kv,[or(Me(nt,{locales:F(e),current:F(n),label:F(t).ui.language,onPick:F(h)},null,8,["locales","current","label","onPick"]),[[lr,F(r)==="explore"&&!F(l)&&!F(c)&&F(e).length>1]]),or(xt("button",{type:"button",class:"pill square","aria-label":F(C)?F(t).ui.soundOn:F(t).ui.soundOff,"aria-pressed":!F(C),onClick:w},[(pt(),yt("svg",Vv,[St[8]||(St[8]=xt("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),F(C)?(pt(),yt("path",Gv)):(pt(),yt("path",Wv))]))],8,Hv),[[lr,F(r)==="explore"&&!F(l)]]),or(xt("button",{type:"button",class:"pill","aria-haspopup":"dialog",onClick:St[0]||(St[0]=it=>l.value=!0)},Xt(F(G)?F(t).ui.menu:F(t).ui.menuShort),513),[[lr,F(r)==="explore"&&!F(c)&&!F(l)]])])]),Me(tn,{name:"fade"},{default:Ke(()=>[F(r)==="explore"?(pt(),yt("div",Xv,[Me(Lt,{zones:F(s),active:F(o),travel:F(N),class:nn(["fades",{gone:F(u)||F(l)}]),onSelect:F(m)},null,8,["zones","active","travel","class","onSelect"]),Me(_t,{icon:F(a).shape,label:`${F(t).ui.open}: ${F(a).title}`,visible:!F(c)&&!F(l)&&!F(u),onOpen:St[1]||(St[1]=it=>{u.value=!0,Q.value=!1}),onHover:St[2]||(St[2]=it=>{Q.value=it})},null,8,["icon","label","visible"]),Me(tn,{name:"fade"},{default:Ke(()=>[F(u)&&!F(l)?(pt(),yt("p",qv,Xt(F(a).title),1)):Ie("",!0)]),_:1}),Me(tn,{name:"fade"},{default:Ke(()=>[F(u)&&F(st)&&!F(c)&&!F(l)?(pt(),pi(kt,{key:0,pages:F(T),onPick:F(g),onHover:St[3]||(St[3]=it=>{B.value=it})},null,8,["pages","onPick"])):Ie("",!0)]),_:1}),F(u)&&!F(c)&&!F(l)&&!F(G)?(pt(),pi(dt,{key:0,pages:F(T),onPick:F(g)},null,8,["pages","onPick"])):Ie("",!0),Me(tn,{name:"title",mode:"out-in"},{default:Ke(()=>[(pt(),yt("div",{key:F(o),class:nn(["headline",{aside:!!F(c)||F(l)||F(u)}])},[xt("p",$v,Xt(String(F(o)+1).padStart(2,"0"))+" / "+Xt(String(F(s).length).padStart(2,"0")),1),xt("h1",null,Xt(F(a).title),1),xt("p",Yv,Xt(F(a).summary),1)],2))]),_:1}),xt("footer",Kv,[xt("p",Zv,[Ki(Xt(F(u)?F(t).ui.hintFocus:F(t).ui.hintScroll),1),F(u)?Ie("",!0):(pt(),yt("span",Jv," · "+Xt(F(t).ui.hintPointer),1))]),F(t).extras?.length?or((pt(),yt("nav",jv,[(pt(!0),yt(Ue,null,Xe(F(t).extras,it=>(pt(),yt("button",{key:it.slug,type:"button",onClick:lt=>F(g)(it.slug)},Xt(it.title),9,Qv))),128))],512)),[[lr,!F(c)&&!F(l)&&!F(u)]]):Ie("",!0),or(xt("button",{type:"button",class:nn(["enter",{small:F(u)}]),"aria-label":F(u)?F(t).ui.close:`${F(t).ui.open}: ${F(a).title}`,onClick:St[4]||(St[4]=it=>u.value=!F(u))},[St[9]||(St[9]=xt("span",{class:"knob","aria-hidden":"true"},null,-1)),xt("span",ex,Xt(F(u)?F(t).ui.close:F(a).title),1)],10,tx),[[lr,!F(c)&&!F(l)]])])])):Ie("",!0)]),_:1}),Me(tt,{zones:F(s),extras:F(t).extras??[],open:F(l),active:F(o),"close-label":F(t).ui.close,onPage:F(g),onZone:St[5]||(St[5]=it=>{F(m)(it),l.value=!1}),onClose:St[6]||(St[6]=it=>l.value=!1)},null,8,["zones","extras","open","active","close-label","onPage"]),Me(Yt,{page:F(c),topic:F(t).extras?.some(it=>it.slug===F(c)?.slug)?F(t).ui.brand:F(a)?.title,"close-label":F(t).ui.close,onClose:F(v),onGo:F(g)},null,8,["page","topic","close-label","onClose","onGo"]),Me(tn,{name:"fade"},{default:Ke(()=>[F(r)==="tutorial"?(pt(),pi(K,{key:0,steps:F(t).ui.tutorial,onDone:St[7]||(St[7]=it=>r.value="explore")},null,8,["steps"])):Ie("",!0)]),_:1})],64)):Ie("",!0),F(t)?(pt(),pi(A,{key:1,hint:F(u)?F(t).ui.cursorFocus:F(t).ui.cursorExplore,enabled:F(r)==="explore"&&!F(l)},null,8,["hint","enabled"])):Ie("",!0),Me(mt,{progress:F(p),label:F(t)?.ui.loading??"Loading",done:F(r)!=="loading"},null,8,["progress","label","done"])],32)}}}),sx=We(nx,[["__scopeId","data-v-27b9e410"]]);export{sx as default};
