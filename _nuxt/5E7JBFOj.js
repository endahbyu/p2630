import{d as Ye,I as on,x as mi,o as Xn,c as jn,B as Y,C as Q,F as Se,T as vu,G as $e,J as ge,K as Ie,L as bn,M as qe,D as H,E as bt,l as L,N as oe,i as fe,_ as en,O as an,P as xu,m as Te,H as Oi,Q as Mu,R as bc,S as un,U as Wr,V as yu,W as Ac,a as Su,X as Eu,Y as Si,Z as Ei,$ as Tu,a0 as bu}from"./DTfj6oGS.js";import{u as Au}from"./Dlt5mm1Z.js";const ko="169",wu=0,el=1,Ru=2,wc=1,Cu=2,Vn=3,gi=0,je=1,Wn=2,fi=0,ps=1,nl=2,il=3,sl=4,Pu=5,Di=100,Lu=101,Iu=102,Du=103,Uu=104,Nu=200,Fu=201,Ou=202,Bu=203,Wa=204,Xa=205,ku=206,zu=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,$u=213,qu=214,$a=0,qa=1,Ya=2,vs=3,Ka=4,Za=5,Ja=6,ja=7,Rc=0,Yu=1,Ku=2,pi=0,Zu=1,Ju=2,ju=3,Qu=4,th=5,eh=6,Cc=7,Pc=300,xs=301,Ms=302,Qa=303,to=304,Zr=306,eo=1e3,Ni=1001,no=1002,pn=1003,nh=1004,ar=1005,Sn=1006,ra=1007,Fi=1008,Jn=1009,Lc=1010,Ic=1011,$s=1012,zo=1013,Bi=1014,$n=1015,js=1016,Ho=1017,Vo=1018,ys=1020,Dc=35902,Uc=1021,Nc=1022,Tn=1023,Fc=1024,Oc=1025,ms=1026,Ss=1027,Bc=1028,Go=1029,kc=1030,Wo=1031,Xo=1033,Fr=33776,Or=33777,Br=33778,kr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37808,ho=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,xo=37816,Mo=37817,yo=37818,So=37819,Eo=37820,To=37821,zr=36492,bo=36494,Ao=36495,zc=36283,wo=36284,Ro=36285,Co=36286,ih=3200,sh=3201,Hc=0,rh=1,hi="",Mn="srgb",_i="srgb-linear",$o="display-p3",Jr="display-p3-linear",Xr="linear",ye="srgb",$r="rec709",qr="p3",qi=7680,rl=519,ah=512,oh=513,lh=514,Vc=515,ch=516,uh=517,hh=518,dh=519,al=35044,ol=35048,ll="300 es",qn=2e3,Yr=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Hs=Math.PI/180,qs=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function qo(i,t){return(i%t+t)%t}function fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ph(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function mh(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function gh(i,t=1){return t-Math.abs(qo(i,t*2)-t)}function _h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mh(i,t){return i+Math.random()*(t-i)}function yh(i){return i*(.5-Math.random())}function Sh(i){i!==void 0&&(cl=i);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eh(i){return i*Hs}function Th(i){return i*qs}function bh(i){return(i&i-1)===0&&i!==0}function Ah(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gs={DEG2RAD:Hs,RAD2DEG:qs,generateUUID:Vi,clamp:Be,euclideanModulo:qo,mapLinear:fh,inverseLerp:ph,lerp:Vs,damp:mh,pingpong:gh,smoothstep:_h,smootherstep:vh,randInt:xh,randFloat:Mh,randFloatSpread:yh,seededRandom:Sh,degToRad:Eh,radToDeg:Th,isPowerOfTwo:bh,ceilPowerOfTwo:Ah,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Rh,normalize:Ze,denormalize:cs};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,s,r,a,o,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],f=n[2],m=n[5],g=n[8],_=s[0],d=s[3],h=s[6],E=s[1],M=s[4],T=s[7],C=s[2],R=s[5],A=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*d+o*M+l*R,r[6]=a*h+o*T+l*A,r[1]=c*_+u*E+p*C,r[4]=c*d+u*M+p*R,r[7]=c*h+u*T+p*A,r[2]=f*_+m*E+g*C,r[5]=f*d+m*M+g*R,r[8]=f*h+m*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=e*p+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=p*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new ie;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){const i=Kr("canvas");return i.style.display="block",i}const ul={};function Hr(i){i in ul||(ul[i]=!0,console.warn(i))}function Ph(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ih(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hl=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dl=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[_i]:{transfer:Xr,primaries:$r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:ye,primaries:$r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jr]:{transfer:Xr,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(dl),fromReference:i=>i.applyMatrix3(hl)},[$o]:{transfer:ye,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(dl),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Dh=new Set([_i,Jr]),me={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ls[t].toReference,s=Ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===hi?Xr:Ls[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ls[t].luminanceCoefficients)}};function _s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Kr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nh=0;class Wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fh=0;class Qe extends Ts{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Ni,s=Ni,r=Sn,a=Fi,o=Tn,l=Jn,c=Qe.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Vi(),this.name="",this.source=new Wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Pc;Qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],p=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(p-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(m+1)/2,C=(h+1)/2,R=(u+f)/4,A=(p+_)/4,N=(g+d)/4;return M>T&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=A/n):T>C?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=R/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=N/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(p-_)*(p-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(p-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oh extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==f||c!==m||u!==g){let d=1-o;const h=l*f+c*m+u*g+p*_,E=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const C=Math.sqrt(M),R=Math.atan2(C,h*E);d=Math.sin(d*R)/C,o=Math.sin(o*R)/C}const T=o*E;if(l=l*d+f*T,c=c*d+m*T,u=u*d+g*T,p=p*d+_*T,d===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=C,c*=C,u*=C,p*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*m-c*f,t[e+1]=l*g+u*f+c*p-o*m,t[e+2]=c*g+u*m+o*f-l*p,t[e+3]=u*g-o*p-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*p+c*m*g,this._y=c*m*p-f*u*g,this._z=c*u*g+f*m*p,this._w=c*u*p-f*m*g;break;case"YXZ":this._x=f*u*p+c*m*g,this._y=c*m*p-f*u*g,this._z=c*u*g-f*m*p,this._w=c*u*p+f*m*g;break;case"ZXY":this._x=f*u*p-c*m*g,this._y=c*m*p+f*u*g,this._z=c*u*g+f*m*p,this._w=c*u*p-f*m*g;break;case"ZYX":this._x=f*u*p-c*m*g,this._y=c*m*p+f*u*g,this._z=c*u*g-f*m*p,this._w=c*u*p+f*m*g;break;case"YZX":this._x=f*u*p+c*m*g,this._y=c*m*p+f*u*g,this._z=c*u*g-f*m*p,this._w=c*u*p-f*m*g;break;case"XZY":this._x=f*u*p-c*m*g,this._y=c*m*p-f*u*g,this._z=c*u*g+f*m*p,this._w=c*u*p+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new P,fl=new Qs;class tr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),lr.subVectors(this.max,Is),Ki.subVectors(t.a,Is),Zi.subVectors(t.b,Is),Ji.subVectors(t.c,Is),ri.subVectors(Zi,Ki),ai.subVectors(Ji,Zi),Ti.subVectors(Ki,Ji);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!ua(e,Ki,Zi,Ji,lr)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,Ki,Zi,Ji,lr))?!1:(cr.crossVectors(ri,ai),e=[cr.x,cr.y,cr.z],ua(e,Ki,Zi,Ji,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,or=new tr,Ki=new P,Zi=new P,Ji=new P,ri=new P,ai=new P,Ti=new P,Is=new P,lr=new P,cr=new P,bi=new P;function ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);const o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kh=new tr,Ds=new P,ha=new P;class jr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(ha)),this.expandByPoint(Ds.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new P,da=new P,ur=new P,oi=new P,fa=new P,hr=new P,pa=new P;class $c{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){da.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(da);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=oi.dot(this.direction),l=-oi.dot(ur),c=oi.lengthSq(),u=Math.abs(1-a*a);let p,f,m,g;if(u>0)if(p=a*l-o,f=a*o-l,g=r*u,p>=0)if(f>=-g)if(f<=g){const _=1/u;p*=_,f*=_,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(da).addScaledVector(ur,f),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){fa.subVectors(e,t),hr.subVectors(n,t),pa.crossVectors(fa,hr);let a=this.direction.dot(pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(hr.crossVectors(oi,hr));if(l<0)return null;const c=o*this.direction.dot(fa.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(pa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,a,o,l,c,u,p,f,m,g,_,d){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,f,m,g,_,d)}set(t,e,n,s,r,a,o,l,c,u,p,f,m,g,_,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*p,g=o*u,_=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*p,g=c*u,_=c*p;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*p,g=c*u,_=c*p;e[0]=f-_*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*p,g=o*u,_=o*p;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*p,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*p,e[8]=g*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+g,e[10]=f-_*p}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=f*p+_,e[5]=a*u,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*u,e[10]=_*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Hh)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),li.crossVectors(n,ln),li.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),li.crossVectors(n,ln)),li.normalize(),dr.crossVectors(ln,li),s[0]=li.x,s[4]=dr.x,s[8]=ln.x,s[1]=li.y,s[5]=dr.y,s[9]=ln.y,s[2]=li.z,s[6]=dr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],h=n[14],E=n[3],M=n[7],T=n[11],C=n[15],R=s[0],A=s[4],N=s[8],j=s[12],v=s[1],y=s[5],K=s[9],X=s[13],D=s[2],tt=s[6],O=s[10],J=s[14],V=s[3],rt=s[7],_t=s[11],yt=s[15];return r[0]=a*R+o*v+l*D+c*V,r[4]=a*A+o*y+l*tt+c*rt,r[8]=a*N+o*K+l*O+c*_t,r[12]=a*j+o*X+l*J+c*yt,r[1]=u*R+p*v+f*D+m*V,r[5]=u*A+p*y+f*tt+m*rt,r[9]=u*N+p*K+f*O+m*_t,r[13]=u*j+p*X+f*J+m*yt,r[2]=g*R+_*v+d*D+h*V,r[6]=g*A+_*y+d*tt+h*rt,r[10]=g*N+_*K+d*O+h*_t,r[14]=g*j+_*X+d*J+h*yt,r[3]=E*R+M*v+T*D+C*V,r[7]=E*A+M*y+T*tt+C*rt,r[11]=E*N+M*K+T*O+C*_t,r[15]=E*j+M*X+T*J+C*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],h=t[15];return g*(+r*l*p-s*c*p-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+d*(+e*c*p-e*o*m-r*a*p+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*p+e*o*f+s*a*p-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],h=t[15],E=p*d*c-_*f*c+_*l*m-o*d*m-p*l*h+o*f*h,M=g*f*c-u*d*c-g*l*m+a*d*m+u*l*h-a*f*h,T=u*_*c-g*p*c+g*o*m-a*_*m-u*o*h+a*p*h,C=g*p*l-u*_*l-g*o*f+a*_*f+u*o*d-a*p*d,R=e*E+n*M+s*T+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*f*r-p*d*r-_*s*m+n*d*m+p*s*h-n*f*h)*A,t[2]=(o*d*r-_*l*r+_*s*c-n*d*c-o*s*h+n*l*h)*A,t[3]=(p*l*r-o*f*r-p*s*c+n*f*c+o*s*m-n*l*m)*A,t[4]=M*A,t[5]=(u*d*r-g*f*r+g*s*m-e*d*m-u*s*h+e*f*h)*A,t[6]=(g*l*r-a*d*r-g*s*c+e*d*c+a*s*h-e*l*h)*A,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*A,t[8]=T*A,t[9]=(g*p*r-u*_*r-g*n*m+e*_*m+u*n*h-e*p*h)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*h+e*o*h)*A,t[11]=(u*o*r-a*p*r-u*n*c+e*p*c+a*n*m-e*o*m)*A,t[12]=C*A,t[13]=(u*_*s-g*p*s+g*n*f-e*_*f-u*n*d+e*p*d)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*d-e*o*d)*A,t[15]=(a*p*s-u*o*s+u*n*l-e*p*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,f=r*c,m=r*u,g=r*p,_=a*u,d=a*p,h=o*p,E=l*c,M=l*u,T=l*p,C=n.x,R=n.y,A=n.z;return s[0]=(1-(_+h))*C,s[1]=(m+T)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(m-T)*R,s[5]=(1-(f+h))*R,s[6]=(d+E)*R,s[7]=0,s[8]=(g+M)*A,s[9]=(d-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,u=1/a,p=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=qn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===qn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Yr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn){const l=this.elements,c=1/(e-t),u=1/(n-s),p=1/(a-r),f=(e+t)*c,m=(n+s)*u;let g,_;if(o===qn)g=(a+r)*p,_=-2*p;else if(o===Yr)g=r*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new P,vn=new ve,zh=new P(0,0,0),Hh=new P(1,1,1),li=new P,dr=new P,ln=new P,pl=new ve,ml=new Qs;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const gl=new P,Qi=new Qs,On=new ve,fr=new P,Us=new P,Gh=new P,Wh=new Qs,_l=new P(1,0,0),vl=new P(0,1,0),xl=new P(0,0,1),Ml={type:"added"},Xh={type:"removed"},ts={type:"childadded",child:null},ma={type:"childremoved",child:null};class tn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new P,e=new Pn,n=new Qs,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new ie}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Us,fr,this.up):On.lookAt(fr,Us,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(On),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,Bn=new P,ga=new P,kn=new P,es=new P,ns=new P,yl=new P,_a=new P,va=new P,xa=new P,Ma=new _e,ya=new _e,Sa=new _e;class En{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),ga.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(ga),c=Bn.dot(Bn),u=Bn.dot(ga),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ma.setScalar(0),ya.setScalar(0),Sa.setScalar(0),Ma.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(ya,r.y),a.addScaledVector(Sa,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),_a.subVectors(t,n);const l=es.dot(_a),c=ns.dot(_a);if(l<=0&&c<=0)return e.copy(n);va.subVectors(t,s);const u=es.dot(va),p=ns.dot(va);if(u>=0&&p<=u)return e.copy(s);const f=l*p-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(es,a);xa.subVectors(t,r);const m=es.dot(xa),g=ns.dot(xa);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ns,o);const d=u*g-m*p;if(d<=0&&p-u>=0&&m-g>=0)return yl.subVectors(r,s),o=(p-u)/(p-u+(m-g)),e.copy(s).addScaledVector(yl,o);const h=1/(d+_+f);return a=_*h,o=f*h,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=qo(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ea(a,r,t+1/3),this.g=Ea(a,r,t),this.b=Ea(a,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return me.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Be(Xe.r*255,0,255))*65536+Math.round(Be(Xe.g*255,0,255))*256+Math.round(Be(Xe.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Mn){me.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(pr);const n=Vs(ci.h,pr.h,e),s=Vs(ci.s,pr.s,e),r=Vs(ci.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new re;re.NAMES=Yc;let $h=0;class bs extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ps,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ys extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new P,mr=new Pt;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class Kc extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zc extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kn extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qh=0;const fn=new ve,Ta=new tn,is=new P,cn=new tr,Ns=new tr,Oe=new P;class mn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Zc:Kc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(cn.min,Ns.min),cn.expandByPoint(Oe),Oe.addVectors(cn.max,Ns.max),cn.expandByPoint(Oe)):(cn.expandByPoint(Ns.min),cn.expandByPoint(Ns.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Oe.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Oe.add(is)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;const c=new P,u=new P,p=new P,f=new Pt,m=new Pt,g=new Pt,_=new P,d=new P;function h(N,j,v){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,j),p.fromBufferAttribute(n,v),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,v),u.sub(c),p.sub(c),m.sub(f),g.sub(f);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(y),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(y),o[N].add(_),o[j].add(_),o[v].add(_),l[N].add(d),l[j].add(d),l[v].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,j=E.length;N<j;++N){const v=E[N],y=v.start,K=v.count;for(let X=y,D=y+K;X<D;X+=3)h(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const M=new P,T=new P,C=new P,R=new P;function A(N){C.fromBufferAttribute(s,N),R.copy(C);const j=o[N];M.copy(j),M.sub(C.multiplyScalar(C.dot(j))).normalize(),T.crossVectors(R,j);const y=T.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,y)}for(let N=0,j=E.length;N<j;++N){const v=E[N],y=v.start,K=v.count;for(let X=y,D=y+K;X<D;X+=3)A(t.getX(X+0)),A(t.getX(X+1)),A(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,p=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new De(f,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],p=r[c];for(let f=0,m=p.length;f<m;f++)u.push(p[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ve,Ai=new $c,gr=new jr,El=new P,_r=new P,vr=new P,xr=new P,ba=new P,Mr=new P,Tl=new P,yr=new P;class Me extends tn{constructor(t=new mn,e=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],p=r[l];u!==0&&(ba.fromBufferAttribute(p,t),a?Mr.addScaledVector(ba,u):Mr.addScaledVector(ba.sub(e),u))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(gr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(gr,El)===null||Ai.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],h=a[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,C=M;T<C;T+=3){const R=o.getX(T),A=o.getX(T+1),N=o.getX(T+2);s=Sr(this,h,t,n,c,u,p,R,A,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const E=o.getX(d),M=o.getX(d+1),T=o.getX(d+2);s=Sr(this,a,t,n,c,u,p,E,M,T),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],h=a[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,C=M;T<C;T+=3){const R=T,A=T+1,N=T+2;s=Sr(this,h,t,n,c,u,p,R,A,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const E=d,M=d+1,T=d+2;s=Sr(this,a,t,n,c,u,p,E,M,T),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Yh(i,t,e,n,s,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===gi,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,xr);const u=Yh(i,t,e,n,_r,vr,xr,Tl);if(u){const p=new P;En.getBarycoord(Tl,_r,vr,xr,p),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,p,new Pt)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,p,new Pt)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,p,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};En.getNormal(_r,vr,xr,f.normal),u.face=f,u.barycoord=p}return u}class As extends mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],p=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(p,2));function g(_,d,h,E,M,T,C,R,A,N,j){const v=T/A,y=C/N,K=T/2,X=C/2,D=R/2,tt=A+1,O=N+1;let J=0,V=0;const rt=new P;for(let _t=0;_t<O;_t++){const yt=_t*y-X;for(let Yt=0;Yt<tt;Yt++){const Qt=Yt*v-K;rt[_]=Qt*E,rt[d]=yt*M,rt[h]=D,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[d]=0,rt[h]=R>0?1:-1,u.push(rt.x,rt.y,rt.z),p.push(Yt/A),p.push(1-_t/N),J+=1}}for(let _t=0;_t<N;_t++)for(let yt=0;yt<A;yt++){const Yt=f+yt+tt*_t,Qt=f+yt+tt*(_t+1),it=f+(yt+1)+tt*(_t+1),st=f+(yt+1)+tt*_t;l.push(Yt,Qt,st),l.push(Qt,it,st),V+=6}o.addGroup(m,V,j),m+=V,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function Kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Zh={clone:Es,merge:Je};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jc extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new P,bl=new Pt,Al=new Pt;class hn extends jc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Al),e.subVectors(Al,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class Qh extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new hn(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new hn(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new hn(ss,rs,t,e);o.layers=this.layers,this.add(o);const l=new hn(ss,rs,t,e);l.layers=this.layers,this.add(l);const c=new hn(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qc extends Qe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class td extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:fi});r.uniforms.tEquirect.value=e;const a=new Me(s,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Sn),new Qh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Aa=new P,ed=new P,nd=new ie;class Li{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new jr,Er=new P;class Yo{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],p=s[6],f=s[7],m=s[8],g=s[9],_=s[10],d=s[11],h=s[12],E=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,d-m,T-h).normalize(),n[1].setComponents(l+r,f+c,d+m,T+h).normalize(),n[2].setComponents(l+a,f+u,d+g,T+E).normalize(),n[3].setComponents(l-a,f-u,d-g,T-E).normalize(),n[4].setComponents(l-o,f-p,d-_,T-M).normalize(),e===qn)n[5].setComponents(l+o,f+p,d+_,T+M).normalize();else if(e===Yr)n[5].setComponents(o,p,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function id(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){const g=p[f],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,p[f]=_)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){const _=p[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class zi extends mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,f=e/l,m=[],g=[],_=[],d=[];for(let h=0;h<u;h++){const E=h*f-a;for(let M=0;M<c;M++){const T=M*p-r;g.push(T,-E,0),_.push(0,0,1),d.push(M/o),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const M=E+c*h,T=E+c*(h+1),C=E+1+c*(h+1),R=E+1+c*h;m.push(M,T,R),m.push(T,C,R)}this.setIndex(m),this.setAttribute("position",new Kn(g,3)),this.setAttribute("normal",new Kn(_,3)),this.setAttribute("uv",new Kn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.widthSegments,t.heightSegments)}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
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
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
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
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wd=`#define PI 3.141592653589793
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`
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
}`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
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
#endif`,nf=`struct PhysicalMaterial {
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
}`,sf=`
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pf=`#if defined( USE_POINTS_UV )
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
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
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
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
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
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gf=`float getShadowMask() {
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
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Qf=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,hp=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,fp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Ap=`#define PHONG
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
}`,wp=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Lp=`#define TOON
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
}`,Ip=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:ud,aomap_pars_fragment:hd,batching_pars_vertex:dd,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Sd,color_fragment:Ed,color_pars_fragment:Td,color_pars_vertex:bd,color_vertex:Ad,common:wd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Ld,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Zd,envmap_vertex:zd,fog_vertex:Hd,fog_pars_vertex:Vd,fog_fragment:Gd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:$d,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:tf,lights_physical_fragment:ef,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:af,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:uf,map_fragment:hf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:_f,morphcolor_vertex:vf,morphnormal_vertex:xf,morphtarget_pars_vertex:Mf,morphtarget_vertex:yf,normal_fragment_begin:Sf,normal_fragment_maps:Ef,normal_pars_fragment:Tf,normal_pars_vertex:bf,normal_vertex:Af,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:Lf,opaque_fragment:If,packing:Df,premultiplied_alpha_fragment:Uf,project_vertex:Nf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:zf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Gf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:$f,skinnormal_vertex:qf,specularmap_fragment:Yf,specularmap_pars_fragment:Kf,tonemapping_fragment:Zf,tonemapping_pars_fragment:Jf,transmission_fragment:jf,transmission_pars_fragment:Qf,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:up,depth_frag:hp,distanceRGBA_vert:dp,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:vp,meshbasic_frag:xp,meshlambert_vert:Mp,meshlambert_frag:yp,meshmatcap_vert:Sp,meshmatcap_frag:Ep,meshnormal_vert:Tp,meshnormal_frag:bp,meshphong_vert:Ap,meshphong_frag:wp,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Lp,points_vert:Ip,points_frag:Dp,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:Op},wt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Cn={basic:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Je([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Je([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Je([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Je([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Je([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Je([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Je([wt.common,wt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Je([wt.lights,wt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Cn.physical={uniforms:Je([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Tr={r:0,b:0,g:0},Ri=new Pn,Bp=new ve;function kp(i,t,e,n,s,r,a){const o=new re(0);let l=r===!0?0:1,c,u,p=null,f=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?h(o,l):T&&T.isColor&&(h(T,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===Zr)?(u===void 0&&(u=new Me(new As(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Es(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ri.copy(M.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(Ri)),u.material.toneMapped=me.getTransfer(T.colorSpace)!==ye,(p!==T||f!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,f=T.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Me(new zi(2,2),new An({name:"BackgroundMaterial",uniforms:Es(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=me.getTransfer(T.colorSpace)!==ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,M){E.getRGB(Tr,Jc(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:_,addToRenderList:d}}function zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,y,K,X,D){let tt=!1;const O=p(X,K,y);r!==O&&(r=O,c(r.object)),tt=m(v,X,K,D),tt&&g(v,X,K,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,T(v,y,K,X),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function p(v,y,K){const X=K.wireframe===!0;let D=n[v.id];D===void 0&&(D={},n[v.id]=D);let tt=D[y.id];tt===void 0&&(tt={},D[y.id]=tt);let O=tt[X];return O===void 0&&(O=f(l()),tt[X]=O),O}function f(v){const y=[],K=[],X=[];for(let D=0;D<e;D++)y[D]=0,K[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:K,attributeDivisors:X,object:v,attributes:{},index:null}}function m(v,y,K,X){const D=r.attributes,tt=y.attributes;let O=0;const J=K.getAttributes();for(const V in J)if(J[V].location>=0){const _t=D[V];let yt=tt[V];if(yt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),_t===void 0||_t.attribute!==yt||yt&&_t.data!==yt.data)return!0;O++}return r.attributesNum!==O||r.index!==X}function g(v,y,K,X){const D={},tt=y.attributes;let O=0;const J=K.getAttributes();for(const V in J)if(J[V].location>=0){let _t=tt[V];_t===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));const yt={};yt.attribute=_t,_t&&_t.data&&(yt.data=_t.data),D[V]=yt,O++}r.attributes=D,r.attributesNum=O,r.index=X}function _(){const v=r.newAttributes;for(let y=0,K=v.length;y<K;y++)v[y]=0}function d(v){h(v,0)}function h(v,y){const K=r.newAttributes,X=r.enabledAttributes,D=r.attributeDivisors;K[v]=1,X[v]===0&&(i.enableVertexAttribArray(v),X[v]=1),D[v]!==y&&(i.vertexAttribDivisor(v,y),D[v]=y)}function E(){const v=r.newAttributes,y=r.enabledAttributes;for(let K=0,X=y.length;K<X;K++)y[K]!==v[K]&&(i.disableVertexAttribArray(K),y[K]=0)}function M(v,y,K,X,D,tt,O){O===!0?i.vertexAttribIPointer(v,y,K,D,tt):i.vertexAttribPointer(v,y,K,X,D,tt)}function T(v,y,K,X){_();const D=X.attributes,tt=K.getAttributes(),O=y.defaultAttributeValues;for(const J in tt){const V=tt[J];if(V.location>=0){let rt=D[J];if(rt===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const _t=rt.normalized,yt=rt.itemSize,Yt=t.get(rt);if(Yt===void 0)continue;const Qt=Yt.buffer,it=Yt.type,st=Yt.bytesPerElement,ft=it===i.INT||it===i.UNSIGNED_INT||rt.gpuType===zo;if(rt.isInterleavedBufferAttribute){const Mt=rt.data,Wt=Mt.stride,zt=rt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)h(V.location+Ht,Mt.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)d(V.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ht=0;Ht<V.locationSize;Ht++)M(V.location+Ht,yt/V.locationSize,it,_t,Wt*st,(zt+yt/V.locationSize*Ht)*st,ft)}else{if(rt.isInstancedBufferAttribute){for(let Mt=0;Mt<V.locationSize;Mt++)h(V.location+Mt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)d(V.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<V.locationSize;Mt++)M(V.location+Mt,yt/V.locationSize,it,_t,yt*st,yt/V.locationSize*Mt*st,ft)}}else if(O!==void 0){const _t=O[J];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(V.location,_t);break;case 3:i.vertexAttrib3fv(V.location,_t);break;case 4:i.vertexAttrib4fv(V.location,_t);break;default:i.vertexAttrib1fv(V.location,_t)}}}}E()}function C(){N();for(const v in n){const y=n[v];for(const K in y){const X=y[K];for(const D in X)u(X[D].object),delete X[D];delete y[K]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const y=n[v.id];for(const K in y){const X=y[K];for(const D in X)u(X[D].object),delete X[D];delete y[K]}delete n[v.id]}function A(v){for(const y in n){const K=n[y];if(K[v.id]===void 0)continue;const X=K[v.id];for(const D in X)u(X[D].object),delete X[D];delete K[v.id]}}function N(){j(),a=!0,r!==s&&(r=s,c(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:j,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function Hp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function o(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];e.update(m,n,1)}function l(c,u,p,f){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!N)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:C,maxSamples:R}}function Gp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Li,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=u(p,f,0)},this.setState=function(p,f,m){const g=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,h=i.get(p);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const E=r?0:n,M=E*4;let T=h.clippingState||null;l.value=T,T=u(g,f,M,m);for(let C=0;C!==M;++C)T[C]=e[C];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,f,m,g){const _=p!==null?p.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const h=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<h)&&(d=new Float32Array(h));for(let M=0,T=m;M!==_;++M,T+=4)a.copy(p[M]).applyMatrix4(E,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Wp(i){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=xs:o===to&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new td(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xp extends jc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hs=4,wl=[.125,.215,.35,.446,.526,.582],Ui=20,wa=new Xp,Rl=new re;let Ra=null,Ca=0,Pa=0,La=!1;const Ii=(1+Math.sqrt(5))/2,as=1/Ii,Cl=[new P(-Ii,as,0),new P(Ii,as,0),new P(-as,0,Ii),new P(as,0,Ii),new P(0,Ii,-as),new P(0,Ii,as),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:js,format:Tn,colorSpace:_i,depthBuffer:!1},s=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=qp(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s){const o=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Rl),u.toneMapping=pi,u.autoClear=!1;const m=new Ys({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Me(new As,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Rl),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;br(s,E*M,h>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cl[(s-r-1)%Cl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Me(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),_=r/g,d=isFinite(r)?1+Math.floor(u*_):Ui;d>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ui}`);const h=[];let E=0;for(let A=0;A<Ui;++A){const N=A/_,j=Math.exp(-N*N/2);h.push(j),A===0?E+=j:A<d&&(E+=2*j)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const T=this._sizeLods[s],C=3*T*(s>M-hs?s-M+hs:0),R=4*(this._cubeSize-T);br(e,C,R,3*T,2*T),l.setRenderTarget(e),l.render(p,wa)}}function $p(i){const t=[],e=[],n=[];let s=i;const r=i-hs+1+wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-hs?l=wl[a-i+hs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,p=1+c,f=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,_=3,d=2,h=1,E=new Float32Array(_*g*m),M=new Float32Array(d*g*m),T=new Float32Array(h*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,N=R>2?0:-1,j=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];E.set(j,_*g*R),M.set(f,d*g*R);const v=[R,R,R,R,R,R];T.set(v,h*g*R)}const C=new mn;C.setAttribute("position",new De(E,_)),C.setAttribute("uv",new De(M,d)),C.setAttribute("faceIndex",new De(T,h)),t.push(C),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new ki(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){const n=new Float32Array(Ui),s=new P(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ll(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Il(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}function Yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===to,u=l===xs||l===Ms;if(c||u){let p=t.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Po(i)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Po(i)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){const s={},r=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,h=_.length;d<h;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const _=m[g];for(let d=0,h=_.length;d<h;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,g=p.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let M=0,T=E.length;M<T;M+=3){const C=E[M+0],R=E[M+1],A=E[M+2];f.push(C,R,R,A,A,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const C=M+0,R=M+1,A=M+2;f.push(C,R,R,A,A,C)}}else return;const d=new(Gc(f)?Zc:Kc)(f,1);d.version=_;const h=r.get(p);h&&t.remove(h),r.set(p,d)}function u(p){const f=r.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function Jp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let d=0;for(let h=0;h<g;h++)d+=m[h];e.update(d,n,1)}function p(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],_[h]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E];for(let E=0;E<_.length;E++)e.update(h,n,_[E])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function jp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let j=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",j)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let T=o.attributes.position.count*M,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*C*4*p),A=new Xc(R,T,C,p);A.type=$n,A.needsUpdate=!0;const N=M*4;for(let v=0;v<p;v++){const y=d[v],K=h[v],X=E[v],D=T*C*4*v;for(let tt=0;tt<y.count;tt++){const O=tt*N;m===!0&&(s.fromBufferAttribute(y,tt),R[D+O+0]=s.x,R[D+O+1]=s.y,R[D+O+2]=s.z,R[D+O+3]=0),g===!0&&(s.fromBufferAttribute(K,tt),R[D+O+4]=s.x,R[D+O+5]=s.y,R[D+O+6]=s.z,R[D+O+7]=0),_===!0&&(s.fromBufferAttribute(X,tt),R[D+O+8]=s.x,R[D+O+9]=s.y,R[D+O+10]=s.z,R[D+O+11]=X.itemSize===4?s.w:1)}}f={count:p,texture:A,size:new Pt(T,C)},n.set(o,f),o.addEventListener("dispose",j)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class eu extends Qe{constructor(t,e,n,s,r,a,o,l,c,u=ms){if(u!==ms&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Bi),n===void 0&&u===Ss&&(n=ys),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nu=new Qe,Dl=new eu(1,1),iu=new Xc,su=new Bh,ru=new Qc,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),Ne(e,n)}}function am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),Ne(e,n)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),Ne(e,n)}}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=Vc,r=Dl):r=nu,e.setTexture2D(t||r,s)}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function Mm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return um;case 35669:case 35673:return hm;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}function ym(i,t){i.uniform1fv(this.addr,t)}function Sm(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function bm(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Am(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wm(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Cm(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Im(i,t){i.uniform1uiv(this.addr,t)}function Dm(i,t){i.uniform2uiv(this.addr,t)}function Um(i,t){i.uniform3uiv(this.addr,t)}function Nm(i,t){i.uniform4uiv(this.addr,t)}function Fm(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nu,r[a])}function Om(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||su,r[a])}function Bm(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ru,r[a])}function km(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||iu,r[a])}function zm(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return Em;case 35666:return Tm;case 35674:return bm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Im;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}class Hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}}class Gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function Wm(i,t,e){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),a=Ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kl(e,c===void 0?new Hm(o,i,t):new Vm(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Gm(o),kl(e,p)),e=p}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Wm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xm=37297;let $m=0;function qm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ym(i){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i);let n;switch(t===e?n="":t===qr&&e===$r?n="LinearDisplayP3ToLinearSRGB":t===$r&&e===qr&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case Jr:return[n,"LinearTransferOETF"];case Mn:case $o:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qm(i.getShaderSource(t),a)}else return s}function Km(i,t){const e=Ym(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zm(i,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case ju:e="Cineon";break;case Qu:e="ACESFilmic";break;case eh:e="AgX";break;case Cc:e="Neutral";break;case th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new P;function Jm(){me.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Qm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zs(i){return i!==""}function Vl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(eg,ig)}const ng=new Map;function ig(i,t){let e=ne[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace(sg,rg)}function rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case Ms:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ag(e),c=og(e),u=lg(e),p=cg(e),f=ug(e),m=jm(e),g=Qm(r),_=s.createProgram();let d,h,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),h.length>0&&(h+=`
`)):(d=[Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),h=[Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?ne.tonemapping_pars_fragment:"",e.toneMapping!==pi?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=Lo(a),a=Vl(a,e),a=Gl(a,e),o=Lo(o),o=Vl(o,e),o=Gl(o,e),a=Wl(a),o=Wl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+d+a,T=E+h+o,C=zl(s,s.VERTEX_SHADER,M),R=zl(s,s.FRAGMENT_SHADER,T);s.attachShader(_,C),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(y){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(R).trim();let tt=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{const J=Hl(s,C,"vertex"),V=Hl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+K+`
`+J+`
`+V)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||D==="")&&(O=!1);O&&(y.diagnostics={runnable:tt,programLog:K,vertexShader:{log:X,prefix:d},fragmentShader:{log:D,prefix:h}})}s.deleteShader(C),s.deleteShader(R),N=new Vr(s,_),j=tg(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let j;this.getAttributes=function(){return j===void 0&&A(this),j};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Xm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function mg(i,t,e,n,s,r,a){const o=new qc,l=new fg,c=new Set,u=[],p=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function h(v,y,K,X,D){const tt=X.fog,O=D.geometry,J=v.isMeshStandardMaterial?X.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),rt=V&&V.mapping===Zr?V.image.height:null,_t=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const yt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Yt=yt!==void 0?yt.length:0;let Qt=0;O.morphAttributes.position!==void 0&&(Qt=1),O.morphAttributes.normal!==void 0&&(Qt=2),O.morphAttributes.color!==void 0&&(Qt=3);let it,st,ft,Mt;if(_t){const He=Cn[_t];it=He.vertexShader,st=He.fragmentShader}else it=v.vertexShader,st=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),Mt=l.getFragmentShaderID(v);const Wt=i.getRenderTarget(),zt=D.isInstancedMesh===!0,Ht=D.isBatchedMesh===!0,St=!!v.map,at=!!v.matcap,w=!!V,z=!!v.aoMap,G=!!v.lightMap,lt=!!v.bumpMap,ot=!!v.normalMap,q=!!v.displacementMap,xt=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,B=v.anisotropy>0,et=v.clearcoat>0,ct=v.dispersion>0,nt=v.iridescence>0,Ft=v.sheen>0,pt=v.transmission>0,Rt=B&&!!v.anisotropyMap,se=et&&!!v.clearcoatMap,mt=et&&!!v.clearcoatNormalMap,Lt=et&&!!v.clearcoatRoughnessMap,Kt=nt&&!!v.iridescenceMap,Zt=nt&&!!v.iridescenceThicknessMap,Nt=Ft&&!!v.sheenColorMap,te=Ft&&!!v.sheenRoughnessMap,Jt=!!v.specularMap,pe=!!v.specularColorMap,I=!!v.specularIntensityMap,Ct=pt&&!!v.transmissionMap,Z=pt&&!!v.thicknessMap,ut=!!v.gradientMap,It=!!v.alphaMap,Ut=v.alphaTest>0,ae=!!v.alphaHash,Ae=!!v.extensions;let ke=pi;v.toneMapped&&(Wt===null||Wt.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ce={shaderID:_t,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:st,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Wt===null?i.outputColorSpace:Wt.isXRRenderTarget===!0?Wt.texture.colorSpace:_i,alphaToCoverage:!!v.alphaToCoverage,map:St,matcap:at,envMap:w,envMapMode:w&&V.mapping,envMapCubeUVHeight:rt,aoMap:z,lightMap:G,bumpMap:lt,normalMap:ot,displacementMap:m&&q,emissiveMap:xt,normalMapObjectSpace:ot&&v.normalMapType===rh,normalMapTangentSpace:ot&&v.normalMapType===Hc,metalnessMap:b,roughnessMap:x,anisotropy:B,anisotropyMap:Rt,clearcoat:et,clearcoatMap:se,clearcoatNormalMap:mt,clearcoatRoughnessMap:Lt,dispersion:ct,iridescence:nt,iridescenceMap:Kt,iridescenceThicknessMap:Zt,sheen:Ft,sheenColorMap:Nt,sheenRoughnessMap:te,specularMap:Jt,specularColorMap:pe,specularIntensityMap:I,transmission:pt,transmissionMap:Ct,thicknessMap:Z,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ps&&v.alphaToCoverage===!1,alphaMap:It,alphaTest:Ut,alphaHash:ae,combine:v.combine,mapUv:St&&d(v.map.channel),aoMapUv:z&&d(v.aoMap.channel),lightMapUv:G&&d(v.lightMap.channel),bumpMapUv:lt&&d(v.bumpMap.channel),normalMapUv:ot&&d(v.normalMap.channel),displacementMapUv:q&&d(v.displacementMap.channel),emissiveMapUv:xt&&d(v.emissiveMap.channel),metalnessMapUv:b&&d(v.metalnessMap.channel),roughnessMapUv:x&&d(v.roughnessMap.channel),anisotropyMapUv:Rt&&d(v.anisotropyMap.channel),clearcoatMapUv:se&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:te&&d(v.sheenRoughnessMap.channel),specularMapUv:Jt&&d(v.specularMap.channel),specularColorMapUv:pe&&d(v.specularColorMap.channel),specularIntensityMapUv:I&&d(v.specularIntensityMap.channel),transmissionMapUv:Ct&&d(v.transmissionMap.channel),thicknessMapUv:Z&&d(v.thicknessMap.channel),alphaMapUv:It&&d(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ot||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(St||It),fog:!!tt,useFog:v.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:St&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function E(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const K in v.defines)y.push(K),y.push(v.defines[K]);return v.isRawShaderMaterial===!1&&(M(y,v),T(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function T(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const y=_[v.type];let K;if(y){const X=Cn[y];K=Zh.clone(X.uniforms)}else K=v.uniforms;return K}function R(v,y){let K;for(let X=0,D=u.length;X<D;X++){const tt=u[X];if(tt.cacheKey===y){K=tt,++K.usedTimes;break}}return K===void 0&&(K=new hg(i,y,v,r),u.push(K)),K}function A(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function N(v){l.remove(v)}function j(){l.dispose()}return{getParameters:h,getProgramCacheKey:E,getUniforms:C,acquireProgram:R,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:j}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ql(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,f,m,g,_,d){let h=i[t];return h===void 0?(h={id:p.id,object:p,geometry:f,material:m,groupOrder:g,renderOrder:p.renderOrder,z:_,group:d},i[t]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=_,h.group=d),t++,h}function o(p,f,m,g,_,d){const h=a(p,f,m,g,_,d);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(p,f,m,g,_,d){const h=a(p,f,m,g,_,d);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(p,f){e.length>1&&e.sort(p||_g),n.length>1&&n.sort(f||$l),s.length>1&&s.sort(f||$l)}function u(){for(let p=t,f=i.length;p<f;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function vg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ql,i.set(n,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new re};break;case"SpotLight":e={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){const t=new xg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ve,a=new ve;function o(c){let u=0,p=0,f=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let m=0,g=0,_=0,d=0,h=0,E=0,M=0,T=0,C=0,R=0,A=0;c.sort(Sg);for(let j=0,v=c.length;j<v;j++){const y=c[j],K=y.color,X=y.intensity,D=y.distance,tt=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=K.r*X,p+=K.g*X,f+=K.b*X;else if(y.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(y.sh.coefficients[O],X);A++}else if(y.isDirectionalLight){const O=t.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const J=y.shadow,V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=y.shadow.matrix,E++}n.directional[m]=O,m++}else if(y.isSpotLight){const O=t.get(y);O.position.setFromMatrixPosition(y.matrixWorld),O.color.copy(K).multiplyScalar(X),O.distance=D,O.coneCos=Math.cos(y.angle),O.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),O.decay=y.decay,n.spot[_]=O;const J=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,J.updateMatrices(y),y.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,y.castShadow){const V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=tt,T++}_++}else if(y.isRectAreaLight){const O=t.get(y);O.color.copy(K).multiplyScalar(X),O.halfWidth.set(y.width*.5,0,0),O.halfHeight.set(0,y.height*.5,0),n.rectArea[d]=O,d++}else if(y.isPointLight){const O=t.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),O.distance=y.distance,O.decay=y.decay,y.castShadow){const J=y.shadow,V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=y.shadow.matrix,M++}n.point[g]=O,g++}else if(y.isHemisphereLight){const O=t.get(y);O.skyColor.copy(y.color).multiplyScalar(X),O.groundColor.copy(y.groundColor).multiplyScalar(X),n.hemi[h]=O,h++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==d||N.hemiLength!==h||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==T||N.numSpotMaps!==C||N.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=d,N.hemiLength=h,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=T,N.numSpotMaps=C,N.numLightProbes=A,n.version=yg++)}function l(c,u){let p=0,f=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const M=c[h];if(M.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),p++}else if(M.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Yl(i){const t=new Eg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Tg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Yl(i),t.set(s,[o])):r>=a.length?(o=new Yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class bg extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ag extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(i,t,e){let n=new Yo;const s=new Pt,r=new Pt,a=new _e,o=new bg({depthPacking:sh}),l=new Ag,c={},u=e.maxTextureSize,p={[gi]:je,[je]:gi,[Wn]:Wn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:wg,fragmentShader:Rg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(R,A,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const j=i.getRenderTarget(),v=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),K=i.state;K.setBlending(fi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const X=h!==Vn&&this.type===Vn,D=h===Vn&&this.type!==Vn;for(let tt=0,O=R.length;tt<O;tt++){const J=R[tt],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||X===!0||D===!0){const yt=this.type!==Vn?{minFilter:pn,magFilter:pn}:{};V.map!==null&&V.map.dispose(),V.map=new ki(s.x,s.y,yt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const _t=V.getViewportCount();for(let yt=0;yt<_t;yt++){const Yt=V.getViewport(yt);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),K.viewport(a),V.updateMatrices(J,yt),n=V.getFrustum(),T(A,N,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&E(V,N),V.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(j,v,y)};function E(R,A){const N=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ki(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,N,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,N,m,_,null)}function M(R,A,N,j){let v=null;const y=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)v=y;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=v.uuid,X=A.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let tt=D[X];tt===void 0&&(tt=v.clone(),D[X]=tt,A.addEventListener("dispose",C)),v=tt}if(v.visible=A.visible,v.wireframe=A.wireframe,j===Vn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:p[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const K=i.properties.get(v);K.light=N}return v}function T(R,A,N,j,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const X=t.update(R),D=R.material;if(Array.isArray(D)){const tt=X.groups;for(let O=0,J=tt.length;O<J;O++){const V=tt[O],rt=D[V.materialIndex];if(rt&&rt.visible){const _t=M(R,rt,j,v);R.onBeforeShadow(i,R,A,N,X,_t,V),i.renderBufferDirect(N,null,X,_t,R,V),R.onAfterShadow(i,R,A,N,X,_t,V)}}}else if(D.visible){const tt=M(R,D,j,v);R.onBeforeShadow(i,R,A,N,X,tt,null),i.renderBufferDirect(N,null,X,tt,R,null),R.onAfterShadow(i,R,A,N,X,tt,null)}}const K=R.children;for(let X=0,D=K.length;X<D;X++)T(K[X],A,N,j,v)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const j=c[N],v=R.target.uuid;v in j&&(j[v].dispose(),delete j[v])}}}const Pg={[$a]:qa,[Ya]:Ja,[Ka]:ja,[vs]:Za,[qa]:$a,[Ja]:Ya,[ja]:Ka,[Za]:vs};function Lg(i){function t(){let I=!1;const Ct=new _e;let Z=null;const ut=new _e(0,0,0,0);return{setMask:function(It){Z!==It&&!I&&(i.colorMask(It,It,It,It),Z=It)},setLocked:function(It){I=It},setClear:function(It,Ut,ae,Ae,ke){ke===!0&&(It*=Ae,Ut*=Ae,ae*=Ae),Ct.set(It,Ut,ae,Ae),ut.equals(Ct)===!1&&(i.clearColor(It,Ut,ae,Ae),ut.copy(Ct))},reset:function(){I=!1,Z=null,ut.set(-1,0,0,0)}}}function e(){let I=!1,Ct=!1,Z=null,ut=null,It=null;return{setReversed:function(Ut){Ct=Ut},setTest:function(Ut){Ut?ft(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Ut){Z!==Ut&&!I&&(i.depthMask(Ut),Z=Ut)},setFunc:function(Ut){if(Ct&&(Ut=Pg[Ut]),ut!==Ut){switch(Ut){case $a:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Ut}},setLocked:function(Ut){I=Ut},setClear:function(Ut){It!==Ut&&(i.clearDepth(Ut),It=Ut)},reset:function(){I=!1,Z=null,ut=null,It=null}}}function n(){let I=!1,Ct=null,Z=null,ut=null,It=null,Ut=null,ae=null,Ae=null,ke=null;return{setTest:function(ce){I||(ce?ft(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ce){Ct!==ce&&!I&&(i.stencilMask(ce),Ct=ce)},setFunc:function(ce,He,nn){(Z!==ce||ut!==He||It!==nn)&&(i.stencilFunc(ce,He,nn),Z=ce,ut=He,It=nn)},setOp:function(ce,He,nn){(Ut!==ce||ae!==He||Ae!==nn)&&(i.stencilOp(ce,He,nn),Ut=ce,ae=He,Ae=nn)},setLocked:function(ce){I=ce},setClear:function(ce){ke!==ce&&(i.clearStencil(ce),ke=ce)},reset:function(){I=!1,Ct=null,Z=null,ut=null,It=null,Ut=null,ae=null,Ae=null,ke=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,f=[],m=null,g=!1,_=null,d=null,h=null,E=null,M=null,T=null,C=null,R=new re(0,0,0),A=0,N=!1,j=null,v=null,y=null,K=null,X=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,O=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),tt=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),tt=O>=2);let V=null,rt={};const _t=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Yt=new _e().fromArray(_t),Qt=new _e().fromArray(yt);function it(I,Ct,Z,ut){const It=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(I,Ut),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<Z;ae++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Ct+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Ut}const st={};st[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(vs),G(!1),lt(el),ft(i.CULL_FACE),w(fi);function ft(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function Mt(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Wt(I,Ct){return u[I]!==Ct?(i.bindFramebuffer(I,Ct),u[I]=Ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function zt(I,Ct){let Z=f,ut=!1;if(I){Z=p.get(Ct),Z===void 0&&(Z=[],p.set(Ct,Z));const It=I.textures;if(Z.length!==It.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,ae=It.length;Ut<ae;Ut++)Z[Ut]=i.COLOR_ATTACHMENT0+Ut;Z.length=It.length,ut=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Z)}function Ht(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const St={[Di]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};St[Du]=i.MIN,St[Uu]=i.MAX;const at={[Nu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,Ct,Z,ut,It,Ut,ae,Ae,ke,ce){if(I===fi){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),I!==Pu){if(I!==_||ce!==N){if((d!==Di||M!==Di)&&(i.blendEquation(i.FUNC_ADD),d=Di,M=Di),ce)switch(I){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,E=null,T=null,C=null,R.set(0,0,0),A=0,_=I,N=ce}return}It=It||Ct,Ut=Ut||Z,ae=ae||ut,(Ct!==d||It!==M)&&(i.blendEquationSeparate(St[Ct],St[It]),d=Ct,M=It),(Z!==h||ut!==E||Ut!==T||ae!==C)&&(i.blendFuncSeparate(at[Z],at[ut],at[Ut],at[ae]),h=Z,E=ut,T=Ut,C=ae),(Ae.equals(R)===!1||ke!==A)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ke),R.copy(Ae),A=ke),_=I,N=!1}function z(I,Ct){I.side===Wn?Mt(i.CULL_FACE):ft(i.CULL_FACE);let Z=I.side===je;Ct&&(Z=!Z),G(Z),I.blending===ps&&I.transparent===!1?w(fi):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const ut=I.stencilWrite;a.setTest(ut),ut&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),q(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(I){j!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),j=I)}function lt(I){I!==wu?(ft(i.CULL_FACE),I!==v&&(I===el?i.cullFace(i.BACK):I===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),v=I}function ot(I){I!==y&&(tt&&i.lineWidth(I),y=I)}function q(I,Ct,Z){I?(ft(i.POLYGON_OFFSET_FILL),(K!==Ct||X!==Z)&&(i.polygonOffset(Ct,Z),K=Ct,X=Z)):Mt(i.POLYGON_OFFSET_FILL)}function xt(I){I?ft(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+D-1),V!==I&&(i.activeTexture(I),V=I)}function x(I,Ct,Z){Z===void 0&&(V===null?Z=i.TEXTURE0+D-1:Z=V);let ut=rt[Z];ut===void 0&&(ut={type:void 0,texture:void 0},rt[Z]=ut),(ut.type!==I||ut.texture!==Ct)&&(V!==Z&&(i.activeTexture(Z),V=Z),i.bindTexture(I,Ct||st[I]),ut.type=I,ut.texture=Ct)}function B(){const I=rt[V];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(I){Yt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Yt.copy(I))}function Nt(I){Qt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Qt.copy(I))}function te(I,Ct){let Z=l.get(Ct);Z===void 0&&(Z=new WeakMap,l.set(Ct,Z));let ut=Z.get(I);ut===void 0&&(ut=i.getUniformBlockIndex(Ct,I.name),Z.set(I,ut))}function Jt(I,Ct){const ut=l.get(Ct).get(I);o.get(Ct)!==ut&&(i.uniformBlockBinding(Ct,ut,I.__bindingPointIndex),o.set(Ct,ut))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,rt={},u={},p=new WeakMap,f=[],m=null,g=!1,_=null,d=null,h=null,E=null,M=null,T=null,C=null,R=new re(0,0,0),A=0,N=!1,j=null,v=null,y=null,K=null,X=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:Mt,bindFramebuffer:Wt,drawBuffers:zt,useProgram:Ht,setBlending:w,setMaterial:z,setFlipSided:G,setCullFace:lt,setLineWidth:ot,setPolygonOffset:q,setScissorTest:xt,activeTexture:b,bindTexture:x,unbindTexture:B,compressedTexImage2D:et,compressedTexImage3D:ct,texImage2D:Lt,texImage3D:Kt,updateUBOMapping:te,uniformBlockBinding:Jt,texStorage2D:se,texStorage3D:mt,texSubImage2D:nt,texSubImage3D:Ft,compressedTexSubImage2D:pt,compressedTexSubImage3D:Rt,scissor:Zt,viewport:Nt,reset:pe}}function Kl(i,t,e,n){const s=Ig(n);switch(e){case Uc:return i*t;case Fc:return i*t;case Oc:return i*t*2;case Bc:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(t,8)/4;case io:case ro:return Math.max(i,8)*Math.max(t,8)/2;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zr:case bo:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zc:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case Jn:case Lc:return{byteLength:1,components:1};case $s:case Ic:case js:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Bi:case zo:case $n:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):Kr("canvas")}function _(b,x,B){let et=1;const ct=xt(b);if((ct.width>B||ct.height>B)&&(et=B/Math.max(ct.width,ct.height)),et<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const nt=Math.floor(et*ct.width),Ft=Math.floor(et*ct.height);p===void 0&&(p=g(nt,Ft));const pt=x?g(nt,Ft):p;return pt.width=nt,pt.height=Ft,pt.getContext("2d").drawImage(b,0,0,nt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Ft+")."),pt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),b;return b}function d(b){return b.generateMipmaps&&b.minFilter!==pn&&b.minFilter!==Sn}function h(b){i.generateMipmap(b)}function E(b,x,B,et,ct=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=x;if(x===i.RED&&(B===i.FLOAT&&(nt=i.R32F),B===i.HALF_FLOAT&&(nt=i.R16F),B===i.UNSIGNED_BYTE&&(nt=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.R8UI),B===i.UNSIGNED_SHORT&&(nt=i.R16UI),B===i.UNSIGNED_INT&&(nt=i.R32UI),B===i.BYTE&&(nt=i.R8I),B===i.SHORT&&(nt=i.R16I),B===i.INT&&(nt=i.R32I)),x===i.RG&&(B===i.FLOAT&&(nt=i.RG32F),B===i.HALF_FLOAT&&(nt=i.RG16F),B===i.UNSIGNED_BYTE&&(nt=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RG8UI),B===i.UNSIGNED_SHORT&&(nt=i.RG16UI),B===i.UNSIGNED_INT&&(nt=i.RG32UI),B===i.BYTE&&(nt=i.RG8I),B===i.SHORT&&(nt=i.RG16I),B===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),B===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),B===i.UNSIGNED_INT&&(nt=i.RGB32UI),B===i.BYTE&&(nt=i.RGB8I),B===i.SHORT&&(nt=i.RGB16I),B===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),B===i.UNSIGNED_INT&&(nt=i.RGBA32UI),B===i.BYTE&&(nt=i.RGBA8I),B===i.SHORT&&(nt=i.RGBA16I),B===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),x===i.RGBA){const Ft=ct?Xr:me.getTransfer(et);B===i.FLOAT&&(nt=i.RGBA32F),B===i.HALF_FLOAT&&(nt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(nt=Ft===ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(b,x){let B;return b?x===null||x===Bi||x===ys?B=i.DEPTH24_STENCIL8:x===$n?B=i.DEPTH32F_STENCIL8:x===$s&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bi||x===ys?B=i.DEPTH_COMPONENT24:x===$n?B=i.DEPTH_COMPONENT32F:x===$s&&(B=i.DEPTH_COMPONENT16),B}function T(b,x){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&u.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),j(x)}function A(b){const x=n.get(b);if(x.__webglInit===void 0)return;const B=b.source,et=f.get(B);if(et){const ct=et[x.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&N(b),Object.keys(et).length===0&&f.delete(B)}n.remove(b)}function N(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const B=b.source,et=f.get(B);delete et[x.__cacheKey],a.memory.textures--}function j(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let ct=0;ct<x.__webglFramebuffer[et].length;ct++)i.deleteFramebuffer(x.__webglFramebuffer[et][ct]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=b.textures;for(let et=0,ct=B.length;et<ct;et++){const nt=n.get(B[et]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(B[et])}n.remove(b)}let v=0;function y(){v=0}function K(){const b=v;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),v+=1,b}function X(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function D(b,x){const B=n.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const et=b.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(B,b,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function tt(b,x){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Qt(B,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function O(b,x){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Qt(B,b,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function J(b,x){const B=n.get(b);if(b.version>0&&B.__version!==b.version){it(B,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const V={[eo]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},rt={[pn]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},_t={[ah]:i.NEVER,[dh]:i.ALWAYS,[oh]:i.LESS,[Vc]:i.LEQUAL,[lh]:i.EQUAL,[hh]:i.GEQUAL,[ch]:i.GREATER,[uh]:i.NOTEQUAL};function yt(b,x){if(x.type===$n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===ra||x.magFilter===ar||x.magFilter===Fi||x.minFilter===Sn||x.minFilter===ra||x.minFilter===ar||x.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,rt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==ar&&x.minFilter!==Fi||x.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const et=x.source;let ct=f.get(et);ct===void 0&&(ct={},f.set(et,ct));const nt=X(x);if(nt!==b.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ct[nt].usedTimes++;const Ft=ct[b.__cacheKey];Ft!==void 0&&(ct[b.__cacheKey].usedTimes--,Ft.usedTimes===0&&N(x)),b.__cacheKey=nt,b.__webglTexture=ct[nt].texture}return B}function Qt(b,x,B){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);const ct=Yt(b,x),nt=x.source;e.bindTexture(et,b.__webglTexture,i.TEXTURE0+B);const Ft=n.get(nt);if(nt.version!==Ft.__version||ct===!0){e.activeTexture(i.TEXTURE0+B);const pt=me.getPrimaries(me.workingColorSpace),Rt=x.colorSpace===hi?null:me.getPrimaries(x.colorSpace),se=x.colorSpace===hi||pt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let mt=_(x.image,!1,s.maxTextureSize);mt=q(x,mt);const Lt=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type);let Zt=E(x.internalFormat,Lt,Kt,x.colorSpace,x.isVideoTexture);yt(et,x);let Nt;const te=x.mipmaps,Jt=x.isVideoTexture!==!0,pe=Ft.__version===void 0||ct===!0,I=nt.dataReady,Ct=T(x,mt);if(x.isDepthTexture)Zt=M(x.format===Ss,x.type),pe&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Zt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Lt,Kt,null));else if(x.isDataTexture)if(te.length>0){Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,Ct,Zt,te[0].width,te[0].height);for(let Z=0,ut=te.length;Z<ut;Z++)Nt=te[Z],Jt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Lt,Kt,Nt.data):e.texImage2D(i.TEXTURE_2D,Z,Zt,Nt.width,Nt.height,0,Lt,Kt,Nt.data);x.generateMipmaps=!1}else Jt?(pe&&e.texStorage2D(i.TEXTURE_2D,Ct,Zt,mt.width,mt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Lt,Kt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Lt,Kt,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Jt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Zt,te[0].width,te[0].height,mt.depth);for(let Z=0,ut=te.length;Z<ut;Z++)if(Nt=te[Z],x.format!==Tn)if(Lt!==null)if(Jt){if(I)if(x.layerUpdates.size>0){const It=Kl(Nt.width,Nt.height,x.format,x.type);for(const Ut of x.layerUpdates){const ae=Nt.data.subarray(Ut*It/Nt.data.BYTES_PER_ELEMENT,(Ut+1)*It/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ut,Nt.width,Nt.height,1,Lt,ae,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Nt.width,Nt.height,mt.depth,Lt,Nt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Zt,Nt.width,Nt.height,mt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Nt.width,Nt.height,mt.depth,Lt,Kt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Zt,Nt.width,Nt.height,mt.depth,0,Lt,Kt,Nt.data)}else{Jt&&pe&&e.texStorage2D(i.TEXTURE_2D,Ct,Zt,te[0].width,te[0].height);for(let Z=0,ut=te.length;Z<ut;Z++)Nt=te[Z],x.format!==Tn?Lt!==null?Jt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Lt,Kt,Nt.data):e.texImage2D(i.TEXTURE_2D,Z,Zt,Nt.width,Nt.height,0,Lt,Kt,Nt.data)}else if(x.isDataArrayTexture)if(Jt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Zt,mt.width,mt.height,mt.depth),I)if(x.layerUpdates.size>0){const Z=Kl(mt.width,mt.height,x.format,x.type);for(const ut of x.layerUpdates){const It=mt.data.subarray(ut*Z/mt.data.BYTES_PER_ELEMENT,(ut+1)*Z/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,mt.width,mt.height,1,Lt,Kt,It)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Kt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,mt.width,mt.height,mt.depth,0,Lt,Kt,mt.data);else if(x.isData3DTexture)Jt?(pe&&e.texStorage3D(i.TEXTURE_3D,Ct,Zt,mt.width,mt.height,mt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Kt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,mt.width,mt.height,mt.depth,0,Lt,Kt,mt.data);else if(x.isFramebufferTexture){if(pe)if(Jt)e.texStorage2D(i.TEXTURE_2D,Ct,Zt,mt.width,mt.height);else{let Z=mt.width,ut=mt.height;for(let It=0;It<Ct;It++)e.texImage2D(i.TEXTURE_2D,It,Zt,Z,ut,0,Lt,Kt,null),Z>>=1,ut>>=1}}else if(te.length>0){if(Jt&&pe){const Z=xt(te[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Zt,Z.width,Z.height)}for(let Z=0,ut=te.length;Z<ut;Z++)Nt=te[Z],Jt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Lt,Kt,Nt):e.texImage2D(i.TEXTURE_2D,Z,Zt,Lt,Kt,Nt);x.generateMipmaps=!1}else if(Jt){if(pe){const Z=xt(mt);e.texStorage2D(i.TEXTURE_2D,Ct,Zt,Z.width,Z.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Kt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Lt,Kt,mt);d(x)&&h(et),Ft.__version=nt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function it(b,x,B){if(x.image.length!==6)return;const et=Yt(b,x),ct=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const nt=n.get(ct);if(ct.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const Ft=me.getPrimaries(me.workingColorSpace),pt=x.colorSpace===hi?null:me.getPrimaries(x.colorSpace),Rt=x.colorSpace===hi||Ft===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const se=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,Lt=[];for(let ut=0;ut<6;ut++)!se&&!mt?Lt[ut]=_(x.image[ut],!0,s.maxCubemapSize):Lt[ut]=mt?x.image[ut].image:x.image[ut],Lt[ut]=q(x,Lt[ut]);const Kt=Lt[0],Zt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),te=E(x.internalFormat,Zt,Nt,x.colorSpace),Jt=x.isVideoTexture!==!0,pe=nt.__version===void 0||et===!0,I=ct.dataReady;let Ct=T(x,Kt);yt(i.TEXTURE_CUBE_MAP,x);let Z;if(se){Jt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,te,Kt.width,Kt.height);for(let ut=0;ut<6;ut++){Z=Lt[ut].mipmaps;for(let It=0;It<Z.length;It++){const Ut=Z[It];x.format!==Tn?Zt!==null?Jt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,Ut.width,Ut.height,Zt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,te,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,Ut.width,Ut.height,Zt,Nt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,te,Ut.width,Ut.height,0,Zt,Nt,Ut.data)}}}else{if(Z=x.mipmaps,Jt&&pe){Z.length>0&&Ct++;const ut=xt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,te,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(mt){Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt[ut].width,Lt[ut].height,Zt,Nt,Lt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,Lt[ut].width,Lt[ut].height,0,Zt,Nt,Lt[ut].data);for(let It=0;It<Z.length;It++){const ae=Z[It].image[ut].image;Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,ae.width,ae.height,Zt,Nt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,te,ae.width,ae.height,0,Zt,Nt,ae.data)}}else{Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Zt,Nt,Lt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,Zt,Nt,Lt[ut]);for(let It=0;It<Z.length;It++){const Ut=Z[It];Jt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Zt,Nt,Ut.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,te,Zt,Nt,Ut.image[ut])}}}d(x)&&h(i.TEXTURE_CUBE_MAP),nt.__version=ct.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function st(b,x,B,et,ct,nt){const Ft=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),Rt=E(B.internalFormat,Ft,pt,B.colorSpace);if(!n.get(x).__hasExternalTextures){const mt=Math.max(1,x.width>>nt),Lt=Math.max(1,x.height>>nt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,Rt,mt,Lt,x.depth,0,Ft,pt,null):e.texImage2D(ct,nt,Rt,mt,Lt,0,Ft,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ct,n.get(B).__webglTexture,0,G(x)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ct,n.get(B).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(b,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const et=x.depthTexture,ct=et&&et.isDepthTexture?et.type:null,nt=M(x.stencilBuffer,ct),Ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=G(x);lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,nt,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,b)}else{const et=x.textures;for(let ct=0;ct<et.length;ct++){const nt=et[ct],Ft=r.convert(nt.format,nt.colorSpace),pt=r.convert(nt.type),Rt=E(nt.internalFormat,Ft,pt,nt.colorSpace),se=G(x);B&&lt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Rt,x.width,x.height):lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,ct=G(x);if(x.depthTexture.format===ms)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===Ss)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(b){const x=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const et=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){const ct=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",ct)};et.addEventListener("dispose",ct),x.__depthDisposeCallback=ct}x.__boundDepthTexture=et}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Mt(x.__webglFramebuffer,b)}else if(B){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=i.createRenderbuffer(),ft(x.__webglDepthbuffer[et],b,!1);else{const ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ft(x.__webglDepthbuffer,b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(b,x,B){const et=n.get(b);x!==void 0&&st(et.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(b)}function Ht(b){const x=b.texture,B=n.get(b),et=n.get(x);b.addEventListener("dispose",R);const ct=b.textures,nt=b.isWebGLCubeRenderTarget===!0,Ft=ct.length>1;if(Ft||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,a.memory.textures++),nt){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Rt=0;Rt<x.mipmaps.length;Rt++)B.__webglFramebuffer[pt][Rt]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let pt=0,Rt=ct.length;pt<Rt;pt++){const se=n.get(ct[pt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&lt(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<ct.length;pt++){const Rt=ct[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const se=r.convert(Rt.format,Rt.colorSpace),mt=r.convert(Rt.type),Lt=E(Rt.internalFormat,se,mt,Rt.colorSpace,b.isXRRenderTarget===!0),Kt=G(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),yt(i.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)st(B.__webglFramebuffer[pt][Rt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt);else st(B.__webglFramebuffer[pt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);d(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let pt=0,Rt=ct.length;pt<Rt;pt++){const se=ct[pt],mt=n.get(se);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),yt(i.TEXTURE_2D,se),st(B.__webglFramebuffer,b,se,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),d(se)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,et.__webglTexture),yt(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)st(B.__webglFramebuffer[Rt],b,x,i.COLOR_ATTACHMENT0,pt,Rt);else st(B.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,pt,0);d(x)&&h(pt),e.unbindTexture()}b.depthBuffer&&Wt(b)}function St(b){const x=b.textures;for(let B=0,et=x.length;B<et;B++){const ct=x[B];if(d(ct)){const nt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ft=n.get(ct).__webglTexture;e.bindTexture(nt,Ft),h(nt),e.unbindTexture()}}}const at=[],w=[];function z(b){if(b.samples>0){if(lt(b)===!1){const x=b.textures,B=b.width,et=b.height;let ct=i.COLOR_BUFFER_BIT;const nt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(b),pt=x.length>1;if(pt)for(let Rt=0;Rt<x.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const se=n.get(x[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,et,0,0,B,et,ct,i.NEAREST),l===!0&&(at.length=0,w.length=0,at.push(i.COLOR_ATTACHMENT0+Rt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(at.push(nt),w.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Rt=0;Rt<x.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const se=n.get(x[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function G(b){return Math.min(s.maxSamples,b.samples)}function lt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ot(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function q(b,x){const B=b.colorSpace,et=b.format,ct=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==_i&&B!==hi&&(me.getTransfer(B)===ye?(et!==Tn||ct!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=tt,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=zt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=lt}function Ug(i,t){function e(n,s=hi){let r;const a=me.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===kr)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo||n===So||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zr||n===bo||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zr)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===wo||n===Ro||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ng extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yn extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fg={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),h=this._getHandJoint(c,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=u.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,f=null,m=null,g=null;const _=new kg,d=e.getContextAttributes();let h=null,E=null;const M=[],T=[],C=new Pt;let R=null;const A=new hn;A.layers.enable(1),A.viewport=new _e;const N=new hn;N.layers.enable(2),N.viewport=new _e;const j=[A,N],v=new Ng;v.layers.enable(1),v.layers.enable(2);let y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let st=M[it];return st===void 0&&(st=new Da,M[it]=st),st.getTargetRaySpace()},this.getControllerGrip=function(it){let st=M[it];return st===void 0&&(st=new Da,M[it]=st),st.getGripSpace()},this.getHand=function(it){let st=M[it];return st===void 0&&(st=new Da,M[it]=st),st.getHandSpace()};function X(it){const st=T.indexOf(it.inputSource);if(st===-1)return;const ft=M[st];ft!==void 0&&(ft.update(it.inputSource,it.frame,c||a),ft.dispatchEvent({type:it.type,data:it.inputSource}))}function D(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",tt);for(let it=0;it<M.length;it++){const st=T[it];st!==null&&(T[it]=null,M[it].disconnect(st))}y=null,K=null,_.reset(),t.setRenderTarget(h),m=null,f=null,p=null,s=null,E=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",D),s.addEventListener("inputsourceschange",tt),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const st={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new ki(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let st=null,ft=null,Mt=null;d.depth&&(Mt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=d.stencil?Ss:ms,ft=d.stencil?ys:Bi);const Wt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new ki(f.textureWidth,f.textureHeight,{format:Tn,type:Jn,depthTexture:new eu(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(it){for(let st=0;st<it.removed.length;st++){const ft=it.removed[st],Mt=T.indexOf(ft);Mt>=0&&(T[Mt]=null,M[Mt].disconnect(ft))}for(let st=0;st<it.added.length;st++){const ft=it.added[st];let Mt=T.indexOf(ft);if(Mt===-1){for(let zt=0;zt<M.length;zt++)if(zt>=T.length){T.push(ft),Mt=zt;break}else if(T[zt]===null){T[zt]=ft,Mt=zt;break}if(Mt===-1)break}const Wt=M[Mt];Wt&&Wt.connect(ft)}}const O=new P,J=new P;function V(it,st,ft){O.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(ft.matrixWorld);const Mt=O.distanceTo(J),Wt=st.projectionMatrix.elements,zt=ft.projectionMatrix.elements,Ht=Wt[14]/(Wt[10]-1),St=Wt[14]/(Wt[10]+1),at=(Wt[9]+1)/Wt[5],w=(Wt[9]-1)/Wt[5],z=(Wt[8]-1)/Wt[0],G=(zt[8]+1)/zt[0],lt=Ht*z,ot=Ht*G,q=Mt/(-z+G),xt=q*-z;if(st.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(xt),it.translateZ(q),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Wt[10]===-1)it.projectionMatrix.copy(st.projectionMatrix),it.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const b=Ht+q,x=St+q,B=lt-xt,et=ot+(Mt-xt),ct=at*St/x*b,nt=w*St/x*b;it.projectionMatrix.makePerspective(B,et,ct,nt,b,x),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function rt(it,st){st===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(st.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let st=it.near,ft=it.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),v.near=N.near=A.near=st,v.far=N.far=A.far=ft,(y!==v.near||K!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,K=v.far);const Mt=it.parent,Wt=v.cameras;rt(v,Mt);for(let zt=0;zt<Wt.length;zt++)rt(Wt[zt],Mt);Wt.length===2?V(v,A,N):v.projectionMatrix.copy(A.projectionMatrix),_t(it,v,Mt)};function _t(it,st,ft){ft===null?it.matrix.copy(st.matrixWorld):(it.matrix.copy(ft.matrixWorld),it.matrix.invert(),it.matrix.multiply(st.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(st.projectionMatrix),it.projectionMatrixInverse.copy(st.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=qs*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function Yt(it,st){if(u=st.getViewerPose(c||a),g=st,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Mt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,Mt=!0);for(let zt=0;zt<ft.length;zt++){const Ht=ft[zt];let St=null;if(m!==null)St=m.getViewport(Ht);else{const w=p.getViewSubImage(f,Ht);St=w.viewport,zt===0&&(t.setRenderTargetTextures(E,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(E))}let at=j[zt];at===void 0&&(at=new hn,at.layers.enable(zt),at.viewport=new _e,j[zt]=at),at.matrix.fromArray(Ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(St.x,St.y,St.width,St.height),zt===0&&(v.matrix.copy(at.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Mt===!0&&v.cameras.push(at)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){const zt=p.getDepthInformation(ft[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let ft=0;ft<M.length;ft++){const Mt=T[ft],Wt=M[ft];Mt!==null&&Wt!==void 0&&Wt.update(Mt,st,c||a)}yt&&yt(it,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Qt=new tu;Qt.setAnimationLoop(Yt),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const Ci=new Pn,Hg=new ve;function Vg(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,Jc(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,E,M,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),p(d,h)):h.isMeshPhongMaterial?(r(d,h),u(d,h)):h.isMeshStandardMaterial?(r(d,h),f(d,h),h.isMeshPhysicalMaterial&&m(d,h,T)):h.isMeshMatcapMaterial?(r(d,h),g(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),_(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?l(d,h,E,M):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===je&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===je&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const E=t.get(h),M=E.envMap,T=E.envMapRotation;M&&(d.envMap.value=M,Ci.copy(T),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),d.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(Ci)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,E,M){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*E,d.scale.value=M*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function p(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,E){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===je&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){const E=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=s[E.id];T===void 0&&(g(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",d));const C=M.program;n.updateUBOMapping(E,C);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function u(E){const M=p();E.__bindingPointIndex=M;const T=i.createBuffer(),C=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],T=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,A=T.length;R<A;R++){const N=Array.isArray(T[R])?T[R]:[T[R]];for(let j=0,v=N.length;j<v;j++){const y=N[j];if(m(y,R,j,C)===!0){const K=y.__offset,X=Array.isArray(y.value)?y.value:[y.value];let D=0;for(let tt=0;tt<X.length;tt++){const O=X[tt],J=_(O);typeof O=="number"||typeof O=="boolean"?(y.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,K+D,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=0,y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=0,y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=0):(O.toArray(y.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,T,C){const R=E.value,A=M+"_"+T;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const N=C[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(E){const M=E.uniforms;let T=0;const C=16;for(let A=0,N=M.length;A<N;A++){const j=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,y=j.length;v<y;v++){const K=j[v],X=Array.isArray(K.value)?K.value:[K.value];for(let D=0,tt=X.length;D<tt;D++){const O=X[D],J=_(O),V=T%C,rt=V%J.boundary,_t=V+rt;T+=rt,_t!==0&&C-_t<J.storage&&(T+=C-_t),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=J.storage}}}const R=T%C;return R>0&&(T+=C-R),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function d(E){const M=E.target;M.removeEventListener("dispose",d);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Wg{constructor(t={}){const{canvas:e=Ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const h=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=pi,this.toneMappingExposure=1;const M=this;let T=!1,C=0,R=0,A=null,N=-1,j=null;const v=new _e,y=new _e;let K=null;const X=new re(0);let D=0,tt=e.width,O=e.height,J=1,V=null,rt=null;const _t=new _e(0,0,tt,O),yt=new _e(0,0,tt,O);let Yt=!1;const Qt=new Yo;let it=!1,st=!1;const ft=new ve,Mt=new ve,Wt=new P,zt=new _e,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function at(){return A===null?J:1}let w=n;function z(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),w===null){const U="webgl2";if(w=z(U,S),w===null)throw z(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let G,lt,ot,q,xt,b,x,B,et,ct,nt,Ft,pt,Rt,se,mt,Lt,Kt,Zt,Nt,te,Jt,pe,I;function Ct(){G=new Kp(w),G.init(),Jt=new Ug(w,G),lt=new Vp(w,G,t,Jt),ot=new Lg(w),lt.reverseDepthBuffer&&ot.buffers.depth.setReversed(!0),q=new jp(w),xt=new gg,b=new Dg(w,G,ot,xt,lt,Jt,q),x=new Wp(M),B=new Yp(M),et=new id(w),pe=new zp(w,et),ct=new Zp(w,et,q,pe),nt=new tm(w,ct,et,q),Zt=new Qp(w,lt,b),mt=new Gp(xt),Ft=new mg(M,x,B,G,lt,pe,mt),pt=new Vg(M,xt),Rt=new vg,se=new Tg(G),Kt=new kp(M,x,B,ot,nt,f,l),Lt=new Cg(M,nt,lt),I=new Gg(w,q,lt,ot),Nt=new Hp(w,G,q),te=new Jp(w,G,q),q.programs=Ft.programs,M.capabilities=lt,M.extensions=G,M.properties=xt,M.renderLists=Rt,M.shadowMap=Lt,M.state=ot,M.info=q}Ct();const Z=new zg(M,w);this.xr=Z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=G.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=G.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(tt,O,!1))},this.getSize=function(S){return S.set(tt,O)},this.setSize=function(S,U,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=S,O=U,e.width=Math.floor(S*J),e.height=Math.floor(U*J),W===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(tt*J,O*J).floor()},this.setDrawingBufferSize=function(S,U,W){tt=S,O=U,J=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,U,W,$){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,U,W,$),ot.viewport(v.copy(_t).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(yt)},this.setScissor=function(S,U,W,$){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,U,W,$),ot.scissor(y.copy(yt).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(S){ot.setScissorTest(Yt=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(S=!0,U=!0,W=!0){let $=0;if(S){let F=!1;if(A!==null){const vt=A.texture.format;F=vt===Xo||vt===Wo||vt===Go}if(F){const vt=A.texture.type,Dt=vt===Jn||vt===Bi||vt===$s||vt===ys||vt===Ho||vt===Vo,Ot=Kt.getClearColor(),Bt=Kt.getClearAlpha(),k=Ot.r,dt=Ot.g,ht=Ot.b;Dt?(m[0]=k,m[1]=dt,m[2]=ht,m[3]=Bt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=k,g[1]=dt,g[2]=ht,g[3]=Bt,w.clearBufferiv(w.COLOR,0,g))}else $|=w.COLOR_BUFFER_BIT}U&&($|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&($|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Rt.dispose(),se.dispose(),xt.dispose(),x.dispose(),B.dispose(),nt.dispose(),pe.dispose(),I.dispose(),Ft.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",vi),Z.removeEventListener("sessionend",Gi),In.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=q.autoReset,U=Lt.enabled,W=Lt.autoUpdate,$=Lt.needsUpdate,F=Lt.type;Ct(),q.autoReset=S,Lt.enabled=U,Lt.autoUpdate=W,Lt.needsUpdate=$,Lt.type=F}function Ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){const U=S.target;U.removeEventListener("dispose",ae),Ae(U)}function Ae(S){ke(S),xt.remove(S)}function ke(S){const U=xt.get(S).programs;U!==void 0&&(U.forEach(function(W){Ft.releaseProgram(W)}),S.isShaderMaterial&&Ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,$,F,vt){U===null&&(U=Ht);const Dt=F.isMesh&&F.matrixWorld.determinant()<0,Ot=Wi(S,U,W,$,F);ot.setMaterial($,Dt);let Bt=W.index,k=1;if($.wireframe===!0){if(Bt=ct.getWireframeAttribute(W),Bt===void 0)return;k=2}const dt=W.drawRange,ht=W.attributes.position;let Et=dt.start*k,At=(dt.start+dt.count)*k;vt!==null&&(Et=Math.max(Et,vt.start*k),At=Math.min(At,(vt.start+vt.count)*k)),Bt!==null?(Et=Math.max(Et,0),At=Math.min(At,Bt.count)):ht!=null&&(Et=Math.max(Et,0),At=Math.min(At,ht.count));const kt=At-Et;if(kt<0||kt===1/0)return;pe.setup(F,$,Ot,W,Bt);let Vt,Tt=Nt;if(Bt!==null&&(Vt=et.get(Bt),Tt=te,Tt.setIndex(Vt)),F.isMesh)$.wireframe===!0?(ot.setLineWidth($.wireframeLinewidth*at()),Tt.setMode(w.LINES)):Tt.setMode(w.TRIANGLES);else if(F.isLine){let gt=$.linewidth;gt===void 0&&(gt=1),ot.setLineWidth(gt*at()),F.isLineSegments?Tt.setMode(w.LINES):F.isLineLoop?Tt.setMode(w.LINE_LOOP):Tt.setMode(w.LINE_STRIP)}else F.isPoints?Tt.setMode(w.POINTS):F.isSprite&&Tt.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const gt=F._multiDrawStarts,Xt=F._multiDrawCounts,$t=F._multiDrawCount,le=Bt?et.get(Bt).bytesPerElement:1,ue=xt.get($).currentProgram.getUniforms();for(let ee=0;ee<$t;ee++)ue.setValue(w,"_gl_DrawID",ee),Tt.render(gt[ee]/le,Xt[ee])}else if(F.isInstancedMesh)Tt.renderInstances(Et,kt,F.count);else if(W.isInstancedBufferGeometry){const gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xt=Math.min(W.instanceCount,gt);Tt.renderInstances(Et,kt,Xt)}else Tt.render(Et,kt)};function ce(S,U,W){S.transparent===!0&&S.side===Wn&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,Un(S,U,W),S.side=gi,S.needsUpdate=!0,Un(S,U,W),S.side=Wn):Un(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),d=se.get(W),d.init(U),E.push(d),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),S!==W&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const $=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const vt=F.material;if(vt)if(Array.isArray(vt))for(let Dt=0;Dt<vt.length;Dt++){const Ot=vt[Dt];ce(Ot,W,F),$.add(Ot)}else ce(vt,W,F),$.add(vt)}),E.pop(),d=null,$},this.compileAsync=function(S,U,W=null){const $=this.compile(S,U,W);return new Promise(F=>{function vt(){if($.forEach(function(Dt){xt.get(Dt).currentProgram.isReady()&&$.delete(Dt)}),$.size===0){F(S);return}setTimeout(vt,10)}G.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let He=null;function nn(S){He&&He(S)}function vi(){In.stop()}function Gi(){In.start()}const In=new tu;In.setAnimationLoop(nn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(S){He=S,Z.setAnimationLoop(S),S===null?In.stop():In.start()},Z.addEventListener("sessionstart",vi),Z.addEventListener("sessionend",Gi),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,A),d=se.get(S,E.length),d.init(U),E.push(d),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(Mt),st=this.localClippingEnabled,it=mt.init(this.clippingPlanes,st),_=Rt.get(S,h.length),_.init(),h.push(_),Z.enabled===!0&&Z.isPresenting===!0){const vt=M.xr.getDepthSensingMesh();vt!==null&&Dn(vt,U,-1/0,M.sortObjects)}Dn(S,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(V,rt),St=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,St&&Kt.addToRenderList(_,S),this.info.render.frame++,it===!0&&mt.beginShadows();const W=d.state.shadowsArray;Lt.render(W,S,U),it===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,F=_.transmissive;if(d.setupLights(),U.isArrayCamera){const vt=U.cameras;if(F.length>0)for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++){const Bt=vt[Dt];nr($,F,S,Bt)}St&&Kt.render(S);for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++){const Bt=vt[Dt];er(_,S,Bt,Bt.viewport)}}else F.length>0&&nr($,F,S,U),St&&Kt.render(S),er(_,S,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,U),pe.resetDefaultState(),N=-1,j=null,E.pop(),E.length>0?(d=E[E.length-1],it===!0&&mt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Dn(S,U,W,$){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Qt.intersectsSprite(S)){$&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);const Dt=nt.update(S),Ot=S.material;Ot.visible&&_.push(S,Dt,Ot,W,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Qt.intersectsObject(S))){const Dt=nt.update(S),Ot=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),zt.copy(Dt.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ot)){const Bt=Dt.groups;for(let k=0,dt=Bt.length;k<dt;k++){const ht=Bt[k],Et=Ot[ht.materialIndex];Et&&Et.visible&&_.push(S,Dt,Et,W,zt.z,ht)}}else Ot.visible&&_.push(S,Dt,Ot,W,zt.z,null)}}const vt=S.children;for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++)Dn(vt[Dt],U,W,$)}function er(S,U,W,$){const F=S.opaque,vt=S.transmissive,Dt=S.transparent;d.setupLightsView(W),it===!0&&mt.setGlobalState(M.clippingPlanes,W),$&&ot.viewport(v.copy($)),F.length>0&&Qn(F,U,W),vt.length>0&&Qn(vt,U,W),Dt.length>0&&Qn(Dt,U,W),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function nr(S,U,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new ki(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?js:Jn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const vt=d.state.transmissionRenderTarget[$.id],Dt=$.viewport||v;vt.setSize(Dt.z,Dt.w);const Ot=M.getRenderTarget();M.setRenderTarget(vt),M.getClearColor(X),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear(),St&&Kt.render(W);const Bt=M.toneMapping;M.toneMapping=pi;const k=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),it===!0&&mt.setGlobalState(M.clippingPlanes,$),Qn(S,W,$),b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt),G.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let ht=0,Et=U.length;ht<Et;ht++){const At=U[ht],kt=At.object,Vt=At.geometry,Tt=At.material,gt=At.group;if(Tt.side===Wn&&kt.layers.test($.layers)){const Xt=Tt.side;Tt.side=je,Tt.needsUpdate=!0,Rs(kt,W,$,Vt,Tt,gt),Tt.side=Xt,Tt.needsUpdate=!0,dt=!0}}dt===!0&&(b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt))}M.setRenderTarget(Ot),M.setClearColor(X,D),k!==void 0&&($.viewport=k),M.toneMapping=Bt}function Qn(S,U,W){const $=U.isScene===!0?U.overrideMaterial:null;for(let F=0,vt=S.length;F<vt;F++){const Dt=S[F],Ot=Dt.object,Bt=Dt.geometry,k=$===null?Dt.material:$,dt=Dt.group;Ot.layers.test(W.layers)&&Rs(Ot,U,W,Bt,k,dt)}}function Rs(S,U,W,$,F,vt){S.onBeforeRender(M,U,W,$,F,vt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,U,W,$,S,vt),F.transparent===!0&&F.side===Wn&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,M.renderBufferDirect(W,U,$,F,S,vt),F.side=gi,F.needsUpdate=!0,M.renderBufferDirect(W,U,$,F,S,vt),F.side=Wn):M.renderBufferDirect(W,U,$,F,S,vt),S.onAfterRender(M,U,W,$,F,vt)}function Un(S,U,W){U.isScene!==!0&&(U=Ht);const $=xt.get(S),F=d.state.lights,vt=d.state.shadowsArray,Dt=F.state.version,Ot=Ft.getParameters(S,F.state,vt,U,W),Bt=Ft.getProgramCacheKey(Ot);let k=$.programs;$.environment=S.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,k===void 0&&(S.addEventListener("dispose",ae),k=new Map,$.programs=k);let dt=k.get(Bt);if(dt!==void 0){if($.currentProgram===dt&&$.lightsStateVersion===Dt)return xi(S,Ot),dt}else Ot.uniforms=Ft.getUniforms(S),S.onBeforeCompile(Ot,M),dt=Ft.acquireProgram(Ot,Bt),k.set(Bt,dt),$.uniforms=Ot.uniforms;const ht=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ht.clippingPlanes=mt.uniform),xi(S,Ot),$.needsLights=sr(S),$.lightsStateVersion=Dt,$.needsLights&&(ht.ambientLightColor.value=F.state.ambient,ht.lightProbe.value=F.state.probe,ht.directionalLights.value=F.state.directional,ht.directionalLightShadows.value=F.state.directionalShadow,ht.spotLights.value=F.state.spot,ht.spotLightShadows.value=F.state.spotShadow,ht.rectAreaLights.value=F.state.rectArea,ht.ltc_1.value=F.state.rectAreaLTC1,ht.ltc_2.value=F.state.rectAreaLTC2,ht.pointLights.value=F.state.point,ht.pointLightShadows.value=F.state.pointShadow,ht.hemisphereLights.value=F.state.hemi,ht.directionalShadowMap.value=F.state.directionalShadowMap,ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ht.spotShadowMap.value=F.state.spotShadowMap,ht.spotLightMatrix.value=F.state.spotLightMatrix,ht.spotLightMap.value=F.state.spotLightMap,ht.pointShadowMap.value=F.state.pointShadowMap,ht.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=dt,$.uniformsList=null,dt}function ti(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Vr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function xi(S,U){const W=xt.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Wi(S,U,W,$,F){U.isScene!==!0&&(U=Ht),b.resetTextureUnits();const vt=U.fog,Dt=$.isMeshStandardMaterial?U.environment:null,Ot=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_i,Bt=($.isMeshStandardMaterial?B:x).get($.envMap||Dt),k=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,dt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ht=!!W.morphAttributes.position,Et=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let kt=pi;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=M.toneMapping);const Vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=Vt!==void 0?Vt.length:0,gt=xt.get($),Xt=d.state.lights;if(it===!0&&(st===!0||S!==j)){const qt=S===j&&$.id===N;mt.setState($,S,qt)}let $t=!1;$.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Xt.state.version||gt.outputColorSpace!==Ot||F.isBatchedMesh&&gt.batching===!1||!F.isBatchedMesh&&gt.batching===!0||F.isBatchedMesh&&gt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&gt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&gt.instancing===!1||!F.isInstancedMesh&&gt.instancing===!0||F.isSkinnedMesh&&gt.skinning===!1||!F.isSkinnedMesh&&gt.skinning===!0||F.isInstancedMesh&&gt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&gt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&gt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&gt.instancingMorph===!1&&F.morphTexture!==null||gt.envMap!==Bt||$.fog===!0&&gt.fog!==vt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==mt.numPlanes||gt.numIntersection!==mt.numIntersection)||gt.vertexAlphas!==k||gt.vertexTangents!==dt||gt.morphTargets!==ht||gt.morphNormals!==Et||gt.morphColors!==At||gt.toneMapping!==kt||gt.morphTargetsCount!==Tt)&&($t=!0):($t=!0,gt.__version=$.version);let le=gt.currentProgram;$t===!0&&(le=Un($,U,F));let ue=!1,ee=!1,we=!1;const jt=le.getUniforms(),Gt=gt.uniforms;if(ot.useProgram(le.program)&&(ue=!0,ee=!0,we=!0),$.id!==N&&(N=$.id,ee=!0),ue||j!==S){lt.reverseDepthBuffer?(ft.copy(S.projectionMatrix),Lh(ft),Ih(ft),jt.setValue(w,"projectionMatrix",ft)):jt.setValue(w,"projectionMatrix",S.projectionMatrix),jt.setValue(w,"viewMatrix",S.matrixWorldInverse);const qt=jt.map.cameraPosition;qt!==void 0&&qt.setValue(w,Wt.setFromMatrixPosition(S.matrixWorld)),lt.logarithmicDepthBuffer&&jt.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,ee=!0,we=!0)}if(F.isSkinnedMesh){jt.setOptional(w,F,"bindMatrix"),jt.setOptional(w,F,"bindMatrixInverse");const qt=F.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),jt.setValue(w,"boneTexture",qt.boneTexture,b))}F.isBatchedMesh&&(jt.setOptional(w,F,"batchingTexture"),jt.setValue(w,"batchingTexture",F._matricesTexture,b),jt.setOptional(w,F,"batchingIdTexture"),jt.setValue(w,"batchingIdTexture",F._indirectTexture,b),jt.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&jt.setValue(w,"batchingColorTexture",F._colorsTexture,b));const he=W.morphAttributes;if((he.position!==void 0||he.normal!==void 0||he.color!==void 0)&&Zt.update(F,W,le),(ee||gt.receiveShadow!==F.receiveShadow)&&(gt.receiveShadow=F.receiveShadow,jt.setValue(w,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Gt.envMap.value=Bt,Gt.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),ee&&(jt.setValue(w,"toneMappingExposure",M.toneMappingExposure),gt.needsLights&&ir(Gt,we),vt&&$.fog===!0&&pt.refreshFogUniforms(Gt,vt),pt.refreshMaterialUniforms(Gt,$,J,O,d.state.transmissionRenderTarget[S.id]),Vr.upload(w,ti(gt),Gt,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vr.upload(w,ti(gt),Gt,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(w,"center",F.center),jt.setValue(w,"modelViewMatrix",F.modelViewMatrix),jt.setValue(w,"normalMatrix",F.normalMatrix),jt.setValue(w,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let xe=0,Ve=qt.length;xe<Ve;xe++){const Re=qt[xe];I.update(Re,le),I.bind(Re,le)}}return le}function ir(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function sr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,W){xt.get(S.texture).__webglTexture=U,xt.get(S.depthTexture).__webglTexture=W;const $=xt.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const W=xt.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){A=S,C=U,R=W;let $=!0,F=null,vt=!1,Dt=!1;if(S){const Bt=xt.get(S);if(Bt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(w.FRAMEBUFFER,null),$=!1;else if(Bt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(Bt.__hasExternalTextures)b.rebindTextures(S,xt.get(S.texture).__webglTexture,xt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ht=S.depthTexture;if(Bt.__boundDepthTexture!==ht){if(ht!==null&&xt.has(ht)&&(S.width!==ht.image.width||S.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const k=S.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(Dt=!0);const dt=xt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(dt[U])?F=dt[U][W]:F=dt[U],vt=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?F=xt.get(S).__webglMultisampledFramebuffer:Array.isArray(dt)?F=dt[W]:F=dt,v.copy(S.viewport),y.copy(S.scissor),K=S.scissorTest}else v.copy(_t).multiplyScalar(J).floor(),y.copy(yt).multiplyScalar(J).floor(),K=Yt;if(ot.bindFramebuffer(w.FRAMEBUFFER,F)&&$&&ot.drawBuffers(S,F),ot.viewport(v),ot.scissor(y),ot.setScissorTest(K),vt){const Bt=xt.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Bt.__webglTexture,W)}else if(Dt){const Bt=xt.get(S.texture),k=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Bt.__webglTexture,W||0,k)}N=-1},this.readRenderTargetPixels=function(S,U,W,$,F,vt,Dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){ot.bindFramebuffer(w.FRAMEBUFFER,Ot);try{const Bt=S.texture,k=Bt.format,dt=Bt.type;if(!lt.textureFormatReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-$&&W>=0&&W<=S.height-F&&w.readPixels(U,W,$,F,Jt.convert(k),Jt.convert(dt),vt)}finally{const Bt=A!==null?xt.get(A).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,$,F,vt,Dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){const Bt=S.texture,k=Bt.format,dt=Bt.type;if(!lt.textureFormatReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-$&&W>=0&&W<=S.height-F){ot.bindFramebuffer(w.FRAMEBUFFER,Ot);const ht=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ht),w.bufferData(w.PIXEL_PACK_BUFFER,vt.byteLength,w.STREAM_READ),w.readPixels(U,W,$,F,Jt.convert(k),Jt.convert(dt),0);const Et=A!==null?xt.get(A).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,Et);const At=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ph(w,At,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ht),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,vt),w.deleteBuffer(ht),w.deleteSync(At),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,W=0){S.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const $=Math.pow(2,-W),F=Math.floor(S.image.width*$),vt=Math.floor(S.image.height*$),Dt=U!==null?U.x:0,Ot=U!==null?U.y:0;b.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,Dt,Ot,F,vt),ot.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,$=null,F=0){S.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let vt,Dt,Ot,Bt,k,dt;W!==null?(vt=W.max.x-W.min.x,Dt=W.max.y-W.min.y,Ot=W.min.x,Bt=W.min.y):(vt=S.image.width,Dt=S.image.height,Ot=0,Bt=0),$!==null?(k=$.x,dt=$.y):(k=0,dt=0);const ht=Jt.convert(U.format),Et=Jt.convert(U.type);b.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const At=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vt=w.getParameter(w.UNPACK_SKIP_PIXELS),Tt=w.getParameter(w.UNPACK_SKIP_ROWS),gt=w.getParameter(w.UNPACK_SKIP_IMAGES),Xt=S.isCompressedTexture?S.mipmaps[F]:S.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Xt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ot),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,k,dt,vt,Dt,ht,Et,Xt.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,k,dt,Xt.width,Xt.height,ht,Xt.data):w.texSubImage2D(w.TEXTURE_2D,F,k,dt,vt,Dt,ht,Et,Xt),w.pixelStorei(w.UNPACK_ROW_LENGTH,At),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,gt),F===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W=null,$=null,F=0){S.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0);let vt,Dt,Ot,Bt,k,dt,ht,Et,At;const kt=S.isCompressedTexture?S.mipmaps[F]:S.image;W!==null?(vt=W.max.x-W.min.x,Dt=W.max.y-W.min.y,Ot=W.max.z-W.min.z,Bt=W.min.x,k=W.min.y,dt=W.min.z):(vt=kt.width,Dt=kt.height,Ot=kt.depth,Bt=0,k=0,dt=0),$!==null?(ht=$.x,Et=$.y,At=$.z):(ht=0,Et=0,At=0);const Vt=Jt.convert(U.format),Tt=Jt.convert(U.type);let gt;if(U.isData3DTexture)b.setTexture3D(U,0),gt=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),gt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=w.getParameter(w.UNPACK_ROW_LENGTH),$t=w.getParameter(w.UNPACK_IMAGE_HEIGHT),le=w.getParameter(w.UNPACK_SKIP_PIXELS),ue=w.getParameter(w.UNPACK_SKIP_ROWS),ee=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,kt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bt),w.pixelStorei(w.UNPACK_SKIP_ROWS,k),w.pixelStorei(w.UNPACK_SKIP_IMAGES,dt),S.isDataTexture||S.isData3DTexture?w.texSubImage3D(gt,F,ht,Et,At,vt,Dt,Ot,Vt,Tt,kt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(gt,F,ht,Et,At,vt,Dt,Ot,Vt,kt.data):w.texSubImage3D(gt,F,ht,Et,At,vt,Dt,Ot,Vt,Tt,kt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Xt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$t),w.pixelStorei(w.UNPACK_SKIP_PIXELS,le),w.pixelStorei(w.UNPACK_SKIP_ROWS,ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ee),F===0&&U.generateMipmaps&&w.generateMipmap(gt),ot.unbindTexture()},this.initRenderTarget=function(S){xt.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ot.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,ot.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$o?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Jr?"display-p3":"srgb"}}class au extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xg extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zl=new ve,Io=new $c,wr=new jr,Rr=new P;class Do extends tn{constructor(t=new mn,e=new Xg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;Zl.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const d=c.getX(g);Rr.fromBufferAttribute(p,d),Jl(Rr,d,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=f,_=m;g<_;g++)Rr.fromBufferAttribute(p,g),Jl(Rr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jl(i,t,e,n,s,r,a){const o=Io.distanceSqToPoint(i);if(o<e){const l=new P;Io.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ou extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,l=new ve;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Be(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zo extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*p+this.aX,c=f*p+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $g extends Zo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Jo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+p)+(l-o)/p;f*=u,m*=u,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Cr=new P,Ua=new Jo,Na=new Jo,Fa=new Jo;class qg extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);const p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Ua.initNonuniformCatmullRom(c.x,p.x,f.x,u.x,g,_,d),Na.initNonuniformCatmullRom(c.y,p.y,f.y,u.y,g,_,d),Fa.initNonuniformCatmullRom(c.z,p.z,f.z,u.z,g,_,d)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,p.x,f.x,u.x,this.tension),Na.initCatmullRom(c.y,p.y,f.y,u.y,this.tension),Fa.initCatmullRom(c.z,p.z,f.z,u.z,this.tension));return n.set(Ua.calc(l),Na.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yg(i,t){const e=1-i;return e*e*t}function Kg(i,t){return 2*(1-i)*i*t}function Zg(i,t){return i*i*t}function Gs(i,t,e,n){return Yg(i,t)+Kg(i,e)+Zg(i,n)}function Jg(i,t){const e=1-i;return e*e*e*t}function jg(i,t){const e=1-i;return 3*e*e*i*t}function Qg(i,t){return 3*(1-i)*i*i*t}function t0(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Jg(i,t)+jg(i,e)+Qg(i,n)+t0(i,s)}class lu extends Ln{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e0 extends Ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y),Ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cu extends Ln{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n0 extends Ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends Ln{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i0 extends Ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(jl(o,l.x,c.x,u.x,p.x),jl(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:$g,CatmullRomCurve3:qg,CubicBezierCurve:lu,CubicBezierCurve3:e0,EllipseCurve:Zo,LineCurve:cu,LineCurve3:n0,QuadraticBezierCurve:uu,QuadraticBezierCurve3:i0,SplineCurve:hu});class s0 extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}}class Ql extends s0{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cu(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uu(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new lu(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Zo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class du extends Ql{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ql().fromJSON(s))}return this}}const r0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=fu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,p,f,m;if(n&&(r=u0(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)p=i[g],f=i[g+1],p<o&&(o=p),f<l&&(l=f),p>c&&(c=p),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ks(r,a,e,o,l,m,0),a}};function fu(i,t,e,n,s){let r,a;if(s===y0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=tc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=tc(r,i[r],i[r+1],a);return a&&ta(a,a.next)&&(Js(a),a=a.next),a}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ta(e,e.next)||be(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&m0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?o0(i,n,s,r):a0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=l0(Hi(i),t,e),Ks(i,t,e,n,s,r,2)):a===2&&c0(i,t,e,n,s,r):Ks(Hi(i),t,e,n,s,r,1);break}}}function a0(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,p=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=p&&g.y<=m&&ds(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,g=u<p?u<f?u:f:p<f?p:f,_=o>l?o>c?o:c:l>c?l:c,d=u>p?u>f?u:f:p>f?p:f,h=No(m,g,t,e,n),E=No(_,d,t,e,n);let M=i.prevZ,T=i.nextZ;for(;M&&M.z>=h&&T&&T.z<=E;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==a&&ds(o,u,l,p,c,f,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,T.x>=m&&T.x<=_&&T.y>=g&&T.y<=d&&T!==s&&T!==a&&ds(o,u,l,p,c,f,T.x,T.y)&&be(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;M&&M.z>=h;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==a&&ds(o,u,l,p,c,f,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;T&&T.z<=E;){if(T.x>=m&&T.x<=_&&T.y>=g&&T.y<=d&&T!==s&&T!==a&&ds(o,u,l,p,c,f,T.x,T.y)&&be(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function l0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ta(s,r)&&pu(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function c0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v0(a,o)){let l=mu(a,o);a=Hi(a,a.next),l=Hi(l,l.next),Ks(a,t,e,n,s,r,0),Ks(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function u0(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=fu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_0(c));for(s.sort(h0),r=0;r<s.length;r++)e=d0(s[r],e);return e}function h0(i,t){return i.x-t.x}function d0(i,t){const e=f0(i,t);if(!e)return t;const n=mu(e,i);return Hi(n,n.next),Hi(e,e.next)}function f0(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ds(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(p=Math.abs(a-e.y)/(r-e.x),Zs(e,i)&&(p<u||p===u&&(e.x>s.x||e.x===s.x&&p0(s,e)))&&(s=e,u=p)),e=e.next;while(e!==o);return s}function p0(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function m0(i,t,e,n){let s=i;do s.z===0&&(s.z=No(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,g0(s)}function g0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function No(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function v0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!x0(i,t)&&(Zs(i,t)&&Zs(t,i)&&M0(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||ta(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ta(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){const s=Lr(be(i,t,e)),r=Lr(be(i,t,n)),a=Lr(be(e,n,i)),o=Lr(be(e,n,t));return!!(s!==r&&a!==o||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||a===0&&Pr(e,i,n)||o===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lr(i){return i>0?1:i<0?-1:0}function x0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function M0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){const e=new Fo(i.i,i.x,i.y),n=new Fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tc(i,t,e,n){const s=new Fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Xs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Xs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ec(t),nc(n,t);let a=t.length;e.forEach(ec);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,nc(n,e[l]);const o=r0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class jo extends mn{constructor(t=new du([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Kn(s,3)),this.setAttribute("uv",new Kn(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:S0;let M,T=!1,C,R,A,N;h&&(M=h.getSpacedPoints(u),T=!0,f=!1,C=h.computeFrenetFrames(u,!1),R=new P,A=new P,N=new P),f||(d=0,m=0,g=0,_=0);const j=o.extractPoints(c);let v=j.shape;const y=j.holes;if(!Xs.isClockWise(v)){v=v.reverse();for(let at=0,w=y.length;at<w;at++){const z=y[at];Xs.isClockWise(z)&&(y[at]=z.reverse())}}const X=Xs.triangulateShape(v,y),D=v;for(let at=0,w=y.length;at<w;at++){const z=y[at];v=v.concat(z)}function tt(at,w,z){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(w,z)}const O=v.length,J=X.length;function V(at,w,z){let G,lt,ot;const q=at.x-w.x,xt=at.y-w.y,b=z.x-at.x,x=z.y-at.y,B=q*q+xt*xt,et=q*x-xt*b;if(Math.abs(et)>Number.EPSILON){const ct=Math.sqrt(B),nt=Math.sqrt(b*b+x*x),Ft=w.x-xt/ct,pt=w.y+q/ct,Rt=z.x-x/nt,se=z.y+b/nt,mt=((Rt-Ft)*x-(se-pt)*b)/(q*x-xt*b);G=Ft+q*mt-at.x,lt=pt+xt*mt-at.y;const Lt=G*G+lt*lt;if(Lt<=2)return new Pt(G,lt);ot=Math.sqrt(Lt/2)}else{let ct=!1;q>Number.EPSILON?b>Number.EPSILON&&(ct=!0):q<-Number.EPSILON?b<-Number.EPSILON&&(ct=!0):Math.sign(xt)===Math.sign(x)&&(ct=!0),ct?(G=-xt,lt=q,ot=Math.sqrt(B)):(G=q,lt=xt,ot=Math.sqrt(B/2))}return new Pt(G/ot,lt/ot)}const rt=[];for(let at=0,w=D.length,z=w-1,G=at+1;at<w;at++,z++,G++)z===w&&(z=0),G===w&&(G=0),rt[at]=V(D[at],D[z],D[G]);const _t=[];let yt,Yt=rt.concat();for(let at=0,w=y.length;at<w;at++){const z=y[at];yt=[];for(let G=0,lt=z.length,ot=lt-1,q=G+1;G<lt;G++,ot++,q++)ot===lt&&(ot=0),q===lt&&(q=0),yt[G]=V(z[G],z[ot],z[q]);_t.push(yt),Yt=Yt.concat(yt)}for(let at=0;at<d;at++){const w=at/d,z=m*Math.cos(w*Math.PI/2),G=g*Math.sin(w*Math.PI/2)+_;for(let lt=0,ot=D.length;lt<ot;lt++){const q=tt(D[lt],rt[lt],G);Mt(q.x,q.y,-z)}for(let lt=0,ot=y.length;lt<ot;lt++){const q=y[lt];yt=_t[lt];for(let xt=0,b=q.length;xt<b;xt++){const x=tt(q[xt],yt[xt],G);Mt(x.x,x.y,-z)}}}const Qt=g+_;for(let at=0;at<O;at++){const w=f?tt(v[at],Yt[at],Qt):v[at];T?(A.copy(C.normals[0]).multiplyScalar(w.x),R.copy(C.binormals[0]).multiplyScalar(w.y),N.copy(M[0]).add(A).add(R),Mt(N.x,N.y,N.z)):Mt(w.x,w.y,0)}for(let at=1;at<=u;at++)for(let w=0;w<O;w++){const z=f?tt(v[w],Yt[w],Qt):v[w];T?(A.copy(C.normals[at]).multiplyScalar(z.x),R.copy(C.binormals[at]).multiplyScalar(z.y),N.copy(M[at]).add(A).add(R),Mt(N.x,N.y,N.z)):Mt(z.x,z.y,p/u*at)}for(let at=d-1;at>=0;at--){const w=at/d,z=m*Math.cos(w*Math.PI/2),G=g*Math.sin(w*Math.PI/2)+_;for(let lt=0,ot=D.length;lt<ot;lt++){const q=tt(D[lt],rt[lt],G);Mt(q.x,q.y,p+z)}for(let lt=0,ot=y.length;lt<ot;lt++){const q=y[lt];yt=_t[lt];for(let xt=0,b=q.length;xt<b;xt++){const x=tt(q[xt],yt[xt],G);T?Mt(x.x,x.y+M[u-1].y,M[u-1].x+z):Mt(x.x,x.y,p+z)}}}it(),st();function it(){const at=s.length/3;if(f){let w=0,z=O*w;for(let G=0;G<J;G++){const lt=X[G];Wt(lt[2]+z,lt[1]+z,lt[0]+z)}w=u+d*2,z=O*w;for(let G=0;G<J;G++){const lt=X[G];Wt(lt[0]+z,lt[1]+z,lt[2]+z)}}else{for(let w=0;w<J;w++){const z=X[w];Wt(z[2],z[1],z[0])}for(let w=0;w<J;w++){const z=X[w];Wt(z[0]+O*u,z[1]+O*u,z[2]+O*u)}}n.addGroup(at,s.length/3-at,0)}function st(){const at=s.length/3;let w=0;ft(D,w),w+=D.length;for(let z=0,G=y.length;z<G;z++){const lt=y[z];ft(lt,w),w+=lt.length}n.addGroup(at,s.length/3-at,1)}function ft(at,w){let z=at.length;for(;--z>=0;){const G=z;let lt=z-1;lt<0&&(lt=at.length-1);for(let ot=0,q=u+d*2;ot<q;ot++){const xt=O*ot,b=O*(ot+1),x=w+G+xt,B=w+lt+xt,et=w+lt+b,ct=w+G+b;zt(x,B,et,ct)}}}function Mt(at,w,z){l.push(at),l.push(w),l.push(z)}function Wt(at,w,z){Ht(at),Ht(w),Ht(z);const G=s.length/3,lt=E.generateTopUV(n,s,G-3,G-2,G-1);St(lt[0]),St(lt[1]),St(lt[2])}function zt(at,w,z,G){Ht(at),Ht(w),Ht(G),Ht(w),Ht(z),Ht(G);const lt=s.length/3,ot=E.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);St(ot[0]),St(ot[1]),St(ot[3]),St(ot[1]),St(ot[2]),St(ot[3])}function Ht(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function St(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return E0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uo[s.type]().fromJSON(s)),new jo(n,t.options)}}const S0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Pt(r,a),new Pt(o,l),new Pt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],h=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Pt(a,1-l),new Pt(c,1-p),new Pt(f,1-g),new Pt(_,1-h)]:[new Pt(o,1-l),new Pt(u,1-p),new Pt(m,1-g),new Pt(d,1-h)]}};function E0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oo extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class T0 extends Oo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class b0 extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Oa=new ve,ic=new P,sc=new P;class A0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rc=new ve,Fs=new P,Ba=new P;class w0 extends A0{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class R0 extends b0{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const Zn={flask:"2",bottle:"6",bulb:"30"};function C0(i){const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function ea(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function na(i){const t=new Float32Array(i*3),e=new Float32Array(i*3);let n=0;return{get full(){return n>=i},add(s,r,a,o,l,c){if(n>=i)return;const u=Math.hypot(o,l,c)||1;t[n*3]=s,t[n*3+1]=r,t[n*3+2]=a,e[n*3]=o/u,e[n*3+1]=l/u,e[n*3+2]=c/u,n++},done(s=!0){if(s){const r=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let l=0;l<i*3;l++){const c=l%3;t[l]<r[c]&&(r[c]=t[l]),t[l]>a[c]&&(a[c]=t[l])}const o=2/Math.max(a[0]-r[0],a[1]-r[1],a[2]-r[2],1e-4);for(let l=0;l<i*3;l++){const c=l%3;t[l]=(t[l]-(r[c]+a[c])/2)*o}}return{positions:t,normals:e}}}}function P0(i,t,e,n,s,r,a,o){for(let l=0;l<t;l++){const c=e()*Math.PI*2,u=e()*Math.PI*2,p=C0([s*Math.cos(c),n*Math.sin(c),0]),f=[Math.cos(u)*p[0],Math.cos(u)*p[1],Math.sin(u)],m=a([n*Math.cos(c)+r*f[0],s*Math.sin(c)+r*f[1],r*f[2]]),g=o(f);i.add(m[0],m[1],m[2],g[0],g[1],g[2])}}function L0(i,t){const e=ea(3),n=na(i);for(let s=0;!n.full&&s<i*40;s++){const r=e()*2-1,a=e()*Math.PI*2,o=Math.sqrt(1-r*r),l=Math.cos(a)*o,c=Math.sin(a)*o;if(t&&!t(Math.atan2(l,c)*180/Math.PI,Math.asin(r)*180/Math.PI))continue;const u=1+(e()-.5)*.012;n.add(l*u,r*u,c*u,l,r,c)}return n.done(!1)}function ka(i,t="2",e=.36){const n=ea(61),s=na(i),r=240,a=document.createElement("canvas");a.width=a.height=r;const o=a.getContext("2d",{willReadFrequently:!0});o.fillStyle="#000",o.textAlign="center",o.textBaseline="middle",o.font=`500 ${r*.86}px "Host Grotesk", sans-serif`;const l=o.measureText(t).width;l>r*.9&&(o.font=`500 ${r*.86*r*.9/l}px "Host Grotesk", sans-serif`),o.fillText(t,r/2,r/2+r*.04);const c=o.getImageData(0,0,r,r).data,u=(h,E)=>h>=0&&E>=0&&h<r&&E<r&&c[(E*r+h)*4+3]>127,p=[],f=[];for(let h=0;h<r;h++)for(let E=0;E<r;E++)u(E,h)&&(p.push(E,h),(!u(E-1,h)||!u(E+1,h)||!u(E,h-1)||!u(E,h+1))&&f.push(E,h));if(!p.length)return s.done();const m=h=>(h-r/2)/(r/2),g=h=>(r/2-h)/(r/2),_=e/2,d=p.length/(p.length+f.length*e*r*.5);for(;!s.full;)if(n()<d){const h=Math.floor(n()*(p.length/2))*2,E=n()<.5;s.add(m(p[h]+n()),g(p[h+1]+n()),E?_:-_,0,0,E?1:-1)}else{const h=Math.floor(n()*(f.length/2))*2,E=f[h],M=f[h+1];let T=0,C=0;for(let R=-2;R<=2;R++)for(let A=-2;A<=2;A++)u(E+A,M+R)||(T+=A,C-=R);s.add(m(E+n()),g(M+n()),(n()*2-1)*_,T||.01,C,0)}return s.done()}function I0(i){const t=ea(43),e=na(i),n=2,s=n/1.414,r=.24,a=r/2,o=.035,l=.42,c=-n/2+a,u=n/2,p=s/2,f=-s/2,m=(R,A,N)=>[R*Math.cos(l)+N*Math.sin(l),A,-R*Math.sin(l)+N*Math.cos(l)],g=(R,A,N,j,v,y)=>{const K=m(R,A,N),X=m(j,v,y);e.add(K[0],K[1],K[2],X[0],X[1],X[2])},_=u-c,d=r-2*o-.03,h=R=>(R>.02&&R<.08?.014*Math.sin(Math.PI*(R-.02)/.06):0)+(R>.08&&R<.17?-.04*Math.sin(Math.PI*(R-.08)/.09):0),E=R=>R>.08&&R<.17?-Math.cos(Math.PI*(R-.08)/.09)*.9:0,M=[["front",_*s],["back",_*s],["spine",Math.PI*a*s],["top",2.2*d*(u-o-c)],["bottom",2.2*d*(u-o-c)],["fore",2.2*d*(s-2*o)]],T=M.reduce((R,[,A])=>R+A,0),C=U0("P2630");if(C.length){const R=_*.68,A=R*D0,N=c+_*.55,j=0;for(let v=0;v<Math.round(i*.2)&&!e.full;v++){const y=Math.floor(t()*(C.length/2))*2;g(N+(C[y]+t()-Rn/2)/Rn*R,j+(di/2-C[y+1]-t())/di*A,r/2+.018,0,0,1)}}for(let R=0;R<Math.round(i*.26)&&!e.full;R++){const A=t()<.7?1:-1,N=A*r/2,j=t(),v=()=>(t()-.5)*.015;switch(Math.floor(t()*6)){case 0:g(c+j*_,p+v(),N,0,1,A);break;case 1:g(c+j*_,f+v(),N,0,-1,A);break;case 2:g(u+v(),f+j*s,N,1,0,A);break;case 3:{const y=Math.PI/2+j*Math.PI,K=t()<.5?p:f;g(c+Math.cos(y)*a,K+v(),Math.sin(y)*a,Math.cos(y),Math.sign(K),Math.sin(y));break}default:{const y=t()<.5?.085:.165;g(c+y,f+j*s,A*(r/2-.012),A*E(y),0,A)}}}for(;!e.full;){let R=t()*T,A=M[0][0];for(const[j,v]of M){if(R<v){A=j;break}R-=v}const N=f+t()*s;if(A==="front"||A==="back"){const j=t()*_,v=A==="front"?1:-1;g(c+j,N,v*(r/2+h(j)),E(j),0,v)}else if(A==="spine"){const j=Math.PI/2+t()*Math.PI;g(c+Math.cos(j)*a,N,Math.sin(j)*a,Math.cos(j),0,Math.sin(j))}else{const j=(t()*2-1)*(d/2);A==="fore"?g(u-o,f+o+t()*(s-2*o),j,1,0,0):g(c+t()*(u-o-c),A==="top"?p-o:f+o,j,0,A==="top"?1:-1,0)}}return e.done()}const Rn=400,di=100,D0=di/Rn;function U0(i){const t=document.createElement("canvas");t.width=Rn,t.height=di;const e=t.getContext("2d",{willReadFrequently:!0});e.fillStyle="#000",e.textAlign="center",e.textBaseline="middle";let n=di*.9;e.font=`500 ${n}px "Host Grotesk", sans-serif`;const s=e.measureText(i).width;s>Rn*.96&&(n*=Rn*.96/s,e.font=`500 ${n}px "Host Grotesk", sans-serif`),e.fillText(i,Rn/2,di/2+n*.04);const r=e.getImageData(0,0,Rn,di).data,a=[];for(let o=0;o<di;o++)for(let l=0;l<Rn;l++)r[(o*Rn+l)*4+3]>127&&a.push(l,o);return a}function N0(i){const t=ea(53),e=na(i),n=s=>s;return P0(e,i,t,1,1,.22,n,n),e.done()}function ac(i,t,e){switch(i){case"globe":return L0(t,e);case"flask":return ka(t,Zn.flask);case"bottle":return ka(t,Zn.bottle);case"bulb":return ka(t,Zn.bulb);case"chain":return I0(t);case"target":return N0(t)}}async function F0(i){try{const t=await(await fetch(i)).json(),[e,n]=t.transform?.scale??[1,1],[s,r]=t.transform?.translate??[0,0],a=t.arcs.map(g=>{let _=0,d=0;return g.map(([h,E])=>(_+=h,d+=E,[_*e+s,d*n+r]))}),o=1024,l=512,c=document.createElement("canvas");c.width=o,c.height=l;const u=c.getContext("2d",{willReadFrequently:!0});u.fillStyle="#fff";const p=g=>{const _=[];let d=0,h=null;for(const E of g)for(const[M,T]of E<0?a[~E].slice().reverse():a[E])h!==null&&Math.abs(M-h)>180&&(d+=M<h?360:-360),h=M,_.push([M+d,T]);return _},f=(g,_)=>{g.forEach(([d,h],E)=>{const M=(d+_+180)/360*o,T=(90-h)/180*l;E?u.lineTo(M,T):u.moveTo(M,T)}),u.closePath()};for(const g of t.objects.land.geometries){const _=g.type==="MultiPolygon"?g.arcs:[g.arcs];for(const d of _){const h=d.map(p);for(const E of[-360,0,360]){u.beginPath();for(const M of h)f(M,E);u.fill("evenodd")}}}const m=u.getImageData(0,0,o,l).data;return(g,_)=>{const d=Math.min(o-1,Math.max(0,Math.floor((g+180)/360*o))),h=Math.min(l-1,Math.max(0,Math.floor((90-_)/180*l)));return m[(h*o+d)*4+3]>127}}catch{return}}const O0=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float cloud(vec2 p) {
  float sum = 0.0, weight = 0.5;
  for (int i = 0; i < 4; i++) {
    vec2 c = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    sum += weight * mix(mix(hash(c), hash(c + vec2(1.0, 0.0)), f.x), mix(hash(c + vec2(0.0, 1.0)), hash(c + vec2(1.0, 1.0)), f.x), f.y);
    p = p * 2.03 + 17.0; weight *= 0.5;
  }
  return sum;
}`;function B0(i,t,e){const n=new Me(new zi(2,2),new An({depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uAspect:{value:1},uSway:{value:0},uLight:{value:i},uDark:{value:t},uBeam:{value:e}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`
uniform float uTime, uAspect, uSway;
uniform vec3 uLight, uDark, uBeam;
varying vec2 vUv;
${O0}
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
  colour += (hash(gl_FragCoord.xy) - 0.5) * 0.018; // a fixed grain, so the gradient never bands (it no longer flickers)
  gl_FragColor = vec4(colour, 1.0);
}`}));return n.frustumCulled=!1,n.renderOrder=-100,n}function k0(i,t,e,n){const s=Math.random,r=()=>(s()+s()+s()-1.5)/1.5,a=new P,o=Array.from({length:7},()=>{const l=s()*Math.PI*2,c=1.6+s()*2.6,u=new P(Math.cos(l+Math.PI/2)+(s()-.5)*.7,(s()-.35)*.7,Math.sin(l+Math.PI/2)+(s()-.5)*.7).normalize();return{at:new P(Math.cos(l)*c,(s()-.5)*2.4,Math.sin(l)*c),dir:u,across:new P(-u.y,u.x,0).normalize(),length:3+s()*4,width:.5+s()*.9,wave:s()*6}});for(let l=0;l<e;l++){const c=o[l%o.length],u=r()*.5,p=c.width*(.4+Math.abs(u)*2.4);a.copy(c.at).addScaledVector(c.dir,u*c.length).addScaledVector(c.across,Math.sin(u*5+c.wave)*.35),a.x+=r()*p,a.y+=r()*p,a.z+=r()*p,a.length()<1.7&&a.setLength(1.7+s()*1.2),i.push(t.x+a.x,t.y+a.y,t.z+a.z,...n())}}const z0=["#ffc21a","#ffc21a","#ffb21c","#ff9a1f","#ff7a2a","#ff4d6a","#7a5cff","#1e8bff"];function H0(i,t,e,n){const s=Math.random,r=[],a=e?5e3:15e3,o=t*2.2;for(let g=0;g<a;g++)r.push((s()*2-1)*o,(s()*2-1)*3.4,(s()*2-1)*o,3,24,g%3===0?2:g%3===1?1:0);for(let g=0;g<(e?1500:4500);g++){const _=s()*Math.PI*2,d=t+(s()*2-1)*2.6;r.push(Math.cos(_)*d,(s()*2-1)*1.8,Math.sin(_)*d,3,26,g%4===0?2:g%4===1?1:0)}for(let g=0;g<(e?260:700);g++){const _=s()*Math.PI*2,d=t+(s()*2-1)*1.3;r.push(Math.cos(_)*d,(s()*2-1)*1.1,Math.sin(_)*d,4,56,g%3===0?3:0)}for(const g of i)k0(r,g,e?900:2400,()=>{const _=s();return[3.5,16,_<.6?0:_<.75?3:_<.85?2:1]});for(let g=0;g<1e3;g++){const _=s()*2-1,d=s()*Math.PI*2,h=Math.sqrt(1-_*_),E=t*.89;r.push(Math.cos(d)*h*E,_*E,Math.sin(d)*h*E,4.5,10,2)}const l=r.length/6,c=new Float32Array(l*3),u=new Float32Array(l*3),p=new Float32Array(l*4);for(let g=0;g<l;g++){c.set(r.slice(g*6,g*6+3),g*3),u.set(r.slice(g*6+3,g*6+6),g*3);for(let _=0;_<4;_++)p[g*4+_]=s()}const f=new mn;f.setAttribute("position",new De(c,3)),f.setAttribute("aKind",new De(u,3)),f.setAttribute("aSeed",new De(p,4));const m=new Do(f,new An({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uRatio:{value:1},uFocus:{value:4.46},uRange:{value:6.5},uCalm:{value:0},uShow:{value:1},uColours:{value:n},uSpectrum:{value:z0.map(g=>new P(parseInt(g.slice(1,3),16)/255,parseInt(g.slice(3,5),16)/255,parseInt(g.slice(5,7),16)/255))},uSpectrumShare:{value:.45}},vertexShader:`
uniform float uTime, uRatio, uFocus, uRange, uCalm;
attribute vec3 aKind; attribute vec4 aSeed;
varying float vBlur; varying float vTint; varying vec2 vSeed; varying float vBand;
void main() {
  vec3 p = position; // the dust holds still, so the shape in front stands out (it only seems to move as the camera travels)
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float away = length(mv.xyz) - uFocus, amount = smoothstep(0.0, uRange, abs(away));
  float front = away < 0.0 ? amount : 0.0, back = away > 0.0 ? amount : 0.0;
  if (back > 0.9) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);                                   // too far: not drawn
  gl_PointSize = (aKind.x * (1.0 - 0.45 * uCalm) + front * aKind.y * (0.75 + 0.25 * aSeed.z) * (1.0 - uCalm) + back * aSeed.x) * uRatio;
  vBlur = clamp(front + back, 0.0, 1.0); vTint = aKind.z; vSeed = aSeed.xy;
  vBand = clamp(0.5 - 0.5 * gl_Position.y / gl_Position.w, 0.0, 1.0); // 0 at the top of the screen, 1 at the bottom
}`,fragmentShader:`
uniform vec3 uColours[4]; uniform vec3 uSpectrum[8]; uniform float uCalm, uShow, uSpectrumShare;
varying float vBand;
varying float vBlur; varying float vTint; varying vec2 vSeed;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float soft = 1.0 - smoothstep(0.28 + 0.6 * vBlur, 1.0, r);          // a speck with a soft edge; a blurred one is a flat disc
  vec3 tint = vTint < 0.5 ? uColours[0] : vTint < 1.5 ? uColours[1] : vTint < 2.5 ? uColours[2] : uColours[3];
  // the client's spectrum (yellow at the top of the screen through orange, red, pink, magenta, violet to blue at the bottom),
  // laid out in order like the lines in its artwork; it colours some of the specks and most of the soft discs, never the shapes
  bool spectral = vSeed.y < uSpectrumShare + 0.35 * vBlur;
  if (spectral) {
    float k = vBand * 7.0; int a = int(floor(k)); float f = fract(k);
    vec3 band = uSpectrum[0];
    for (int n = 0; n < 7; n++) if (n == a) band = mix(uSpectrum[n], uSpectrum[n + 1], f);
    if (a >= 7) band = uSpectrum[7];
    tint = band;
  }
  vec3 colour = mix(mix(tint, vec3(1.0), spectral ? 0.18 : vTint > 1.5 && vTint < 2.5 ? 0.0 : 0.55), tint, smoothstep(0.0, 0.5, vBlur)); // sharp specks are nearly white, blurred discs take their tint
  float alpha = soft * 0.85 * (1.0 - vBlur * (0.55 + 0.25 * vSeed.x)) * (1.0 - uCalm * (0.35 + 0.65 * smoothstep(0.0, 0.25, vBlur))) * uShow;
  if (spectral) alpha *= 0.95; // coloured dust shows clearly as many colours, yet its specks stay smaller and dimmer than the white shape in front
  if (alpha < 0.03) discard;
  gl_FragColor = vec4(colour, alpha);
}`}));return m.frustumCulled=!1,m.renderOrder=-1,m}const V0=`
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
`,G0=`
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
`;class W0 extends au{constructor(){super();const t=new As;t.deleteAttribute("uv");const e=new Oo({side:je}),n=new Oo,s=new R0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Me(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Me(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Me(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Me(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Me(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const p=new Me(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const f=new Me(t,os(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const m=new Me(t,os(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new Me(t,os(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Me(t,os(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const d=new Me(t,os(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new Me(t,os(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function os(i){const t=new Ys;return t.color.setScalar(i),t}const Ir=(i,t,e)=>`M${i-e} ${t}a${e} ${e} 0 1 0 ${e*2} 0a${e} ${e} 0 1 0 ${-e*2} 0`,gu={globe:[Ir(12,12,9),"M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"],flask:["M10 3h4M10.5 3v5.2a6 6 0 1 0 3 0V3","M7.2 15h9.6"],bottle:["M10 2.5h4M10.5 2.5v3.2L8.5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V9l-2-3.3V2.5","M8.5 13h7"],bulb:["M9 17.5h6M10 20.5h4","M9 17.5c0-2.2-3-3.4-3-7.2a6 6 0 0 1 12 0c0 3.8-3 5-3 7.2"],chain:["M5.5 4.5A2.5 2.5 0 0 1 8 2h10.5v15H8a2.5 2.5 0 0 0-2.5 2.5z","M5.5 19.5A2.5 2.5 0 0 0 8 22h10.5","M8.5 2v15"],target:[Ir(12,12,9),Ir(12,12,5),Ir(12,12,1.2)]},oc={flipbook:"M479.23-185.39q-48.38-35.69-104-55.15Q319.62-260 260-260q-36.61 0-71.92 8.11Q152.77-243.77 120-228q-21.38 9.84-40.69-2.93Q60-243.69 60-267.08v-433.53q0-12.93 6.85-23.89 6.84-10.96 19-15.96 40.61-19.77 84.65-29.65Q214.54-780 260-780q58.38 0 113.69 16.54Q429-746.92 480-716.92v459.38q50.62-32 106.81-47.23Q643-320 700-320q34.46 0 65.11 4.85 30.66 4.84 63.35 15.3 4.23 1.16 7.89.2 3.65-.97 3.65-6.35v-449.23q10.38 3.08 20.27 6.85 9.88 3.77 19.27 9.46 10.23 5 15.34 14.61 5.12 9.62 5.12 20.62v435.84q0 23.39-19.89 35.96-19.88 12.58-42.42 3.12-32.38-15.39-67.11-23.31Q735.85-260 700-260q-60 0-116.38 18.88-56.39 18.89-104.39 55.73ZM560-360v-360l200-200v380L560-360Zm-140 73.46v-394.07q-37.61-18.62-77.92-29.01Q301.77-720 260-720q-37 0-70.27 6.81-33.27 6.81-62.42 18.88-3.08 1.16-5.19 3.27-2.12 2.12-2.12 5.19v381.23q0 5.39 3.65 6.35 3.66.96 7.89-.58 29.61-10.69 61.04-15.92Q224-320 260-320q44.85 0 85.69 9.27 40.85 9.27 74.31 24.19Zm0 0v-394.07 394.07Z",pdf:"M330-250h300v-60H330v60Zm0-160h300v-60H330v60Zm-77.69 310Q222-100 201-121q-21-21-21-51.31v-615.38Q180-818 201-839q21-21 51.31-21H570l210 210v477.69Q780-142 759-121q-21 21-51.31 21H252.31ZM540-620v-180H252.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v615.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-620H540ZM240-800v180-180V-160v-640Z"},us=84,lc=.13,Dr=.035;function X0(i){const t=new Po(i),e=t.fromScene(new W0,.04).texture;return t.dispose(),e}function $0(){const i=a=>(a-42)/84,t=a=>(42-a)/84,e=new du,n=7,s=34;e.moveTo(i(n),t(0)),e.lineTo(i(84-s),t(0)),e.quadraticCurveTo(i(84),t(0),i(84),t(s)),e.lineTo(i(84),t(84-n)),e.quadraticCurveTo(i(84),t(84),i(84-n),t(84)),e.lineTo(i(s),t(84)),e.quadraticCurveTo(i(0),t(84),i(0),t(84-s)),e.lineTo(i(0),t(n)),e.quadraticCurveTo(i(0),t(0),i(n),t(0));const r=new jo(e,{depth:lc,bevelEnabled:!0,bevelThickness:Dr,bevelSize:Dr,bevelOffset:-Dr,bevelSegments:6,curveSegments:16});return r.translate(0,0,-lc-Dr),r}function cc(i,t,e){const s=document.createElement("canvas");s.width=s.height=us*4;const r=s.getContext("2d");r.lineCap="round",r.lineJoin="round";const a=Zn[i];if(e&&oc[e]){const l=.18333333333333332;r.setTransform(l,0,0,l,80,80+960*l),r.fillStyle=t,r.fill(new Path2D(oc[e]))}else if(a)r.setTransform(4,0,0,4,0,0),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.font=`500 ${a.length>1?34:46}px "Host Grotesk", sans-serif`,r.fillText(a,42,44);else{r.setTransform(176/24,0,0,176/24,80,80),r.strokeStyle=t,r.lineWidth=1.25;for(const l of gu[i])r.stroke(new Path2D(l))}const o=new ou(s);return o.colorSpace=Mn,o.anisotropy=4,o}let za;function q0(){if(za)return za;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,64);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.55,"rgba(0,0,0,.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),za=new ou(i)}function uc(i,t,e){const n=new T0({color:e,roughness:.12,metalness:.3,clearcoat:1,clearcoatRoughness:.08,envMap:t,envMapIntensity:1.5,transparent:!0}),s=new Ys({transparent:!0,depthWrite:!1,toneMapped:!1}),r=new Ys({map:q0(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),a=new Yn,o=new Yn,l=new Me(new zi(1.7,1.5),r),c=new Me(i,n),u=new Me(new zi(1,1),s);return l.position.set(.06,-.3,-.5),l.renderOrder=4,c.renderOrder=5,u.position.z=.004,u.renderOrder=6,o.add(c,u),a.add(l,o),a.visible=!1,a.userData.tile=o,{group:a,body:n,face:s,shadow:r,seen:0,turnX:0,turnY:0}}function hc(i,t,e,n,s=0){i.seen=t,i.group.visible=t>.004,i.body.opacity=t,i.face.opacity=t,i.shadow.opacity=t*.7,i.group.userData.tile.rotation.set(gs.degToRad(-e),gs.degToRad(n),gs.degToRad(s))}function dc(i){i.group.removeFromParent(),i.body.dispose(),i.face.dispose(),i.shadow.dispose()}const fc={globe:[.227,.095],flask:[-.2,.12],bottle:[-.2,.12],bulb:[-.27,.14],chain:[-.166,.095],target:[-.282,.12]},Y0=["aria-label","onClick","onPointerenter","onFocus"],K0={class:"label"},Z0={class:"photo"},J0=["src"],j0={key:1,class:"blank"},Q0={class:"place"},ls=1.2,Ha=50,t_=3.2,e_=1.2,n_=.05,i_=5.1,s_=18,r_=.022,a_=10.25,o_=.12,l_=1.05,pc=2,c_=.03,u_=.96,Ur=.0105,Nr=40,h_=15,d_=10,f_=.94,p_=.015,m_=.95,g_=.29,__=.04,v_=.22,mc=195,Va=2.4,gc=70,Os=4,x_=8,_c=60,M_=60,y_=Ye({__name:"ParticleStage",props:{shapes:{},travel:{},count:{default:1e4},active:{type:Boolean,default:!0},shift:{default:0},landUrl:{default:""},focused:{type:Boolean,default:!1},points:{default:()=>[]},card:{type:Boolean,default:!1},token:{type:Boolean,default:!1},tokenHover:{type:Boolean,default:!1},tiles:{default:0},tileIcons:{},tileHover:{default:-1},gallery:{type:Boolean,default:!1}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,s=fe(),r=fe([]),a=fe(-1),o=fe(null);on(a,k=>{k>=0&&e.points[k]&&(o.value=e.points[k])}),on(()=>e.points,()=>{a.value=-1});const l=mi().app.baseURL,c=k=>k?/^(https?:)?\/\//.test(k)?k:l+k.replace(/^\//,""):"";let u=0,p=0,f=0,m=0;const g=new P,_=9.31,d=Math.PI*.4,h={globe:.15,flask:.26,bottle:.26,bulb:.26,chain:.34,target:.28},E={globe:[.12,.1],flask:[.06,.1],bottle:[.06,.1],bulb:[.04,.1],chain:[.03,.08],target:[-.1,.25]},M={globe:1,flask:1.28,bottle:1.28,bulb:1.45,chain:1.5,target:1.5},T={globe:1,flask:1,bottle:1,bulb:.8,chain:1,target:.68},C=new P(.4,.75,.55).normalize();let R,A,N,j,v=[],y,K,X,D,tt=1,O=-1,J=0,V=new Float32Array(0),rt=new Float32Array(0),_t=new Float32Array(0),yt=new Float32Array(0),Yt=-1,Qt=0,it=!1,st=1,ft=1,Mt=0,Wt,zt=!1;const Ht=new au,St=new hn(Ha,1,.1,100),at=new Yn,w=new Yn;at.add(w),Ht.add(at);const z=(k,dt)=>dt.set(Math.cos(k)*_,0,Math.sin(k)*_);let G=1,lt=1;const ot={px:0,py:0,x:0,y:0,tx:0,ty:0,on:0,target:0,inside:!1,click:!1},q={x:0,y:0,tx:0,ty:0,vx:0,vy:0,dragging:!1,moved:0,lastX:0,lastY:0,lastT:0,startX:0,startY:0,lock:""};let xt=0,b=0,x=0,B=0,et=0,ct=0;const nt=new Yn;St.add(nt),Ht.add(St);const Ft=[["flask",.2,.31,.9],["globe",.5,.13,-.2],["target",.86,.26,.5],["bottle",.12,.66,1],["chain",.44,.83,1.3],["bulb",.86,.72,-.3]];let pt=[],Rt=0,se=0,mt,Lt=[],Kt=0,Zt,Nt=20;const te=new Map;let Jt=[];const pe=new re,I=new re,Ct=new re,Z=(k,dt)=>new re(getComputedStyle(s.value).getPropertyValue(k).trim()||dt),ut=k=>(k%e.shapes.length+e.shapes.length)%e.shapes.length;function It(k){if(st<=800){const dt=us*.75;return[Math.max(Nt+56+dt/2,st*.27),ft*.67,.75]}return[st/2+fc[k][0]*Math.min(st,ft*1.5)+us/2,ft/2+fc[k][1]*ft+us/2,1]}const Ut=239-_c/2,ae=()=>st<=800?_c:us;function Ae(k,dt){const ht=(dt-1)/2,Et=st<=800?M_:Math.max(40,Math.min(89.6,st*.075));return[st/2+(k-ht)*(ae()+Et),(st<=800?Math.min(ft*.74,ft-Ut):ft*.69)+(1-Math.min(1,Math.abs(k-ht)))*9]}function ke(k,dt,ht,Et){const At=2*Os*Math.tan(gs.degToRad(Ha)/2)/ft;k.group.position.set((dt+f-st/2)*At,-(ht+m-ft/2)*At,-Os),k.group.scale.setScalar(Et*At)}const ce=k=>1-Math.pow(1-Math.min(1,Math.max(0,k)),3);function He(k,dt,ht,Et){if(!mt)return;const At=e.shapes[ut(Math.round(e.travel.state.progress))]??"globe";if(At!==Zt){Zt=At,te.has(At)||te.set(At,cc(At,getComputedStyle(s.value).getPropertyValue("--accent-deep").trim()||"#2440c9"));for(const he of[mt,...Lt])he.face.map=te.get(At),he.face.needsUpdate=!0,he.group.userData.icon=At}const kt=he=>1-Math.exp(-k*he),[Vt,Tt,gt]=It(At),Xt=mt,$t=Math.sin(dt*1.26)*6,le=e.token&&Qt>=1&&!(ht>.4&&ht<.8);se=Math.min(1,Math.max(0,se+(le?k/1.5:-k/1)));const ue=1-Math.pow(2,-10*se),ee=Math.min(1,se*1.5);Xt.seen=e.token?ee:Math.max(0,Xt.seen-k*6);const we=Math.sin(dt*.9)*4,jt=Math.sin(dt*.7+1)*6;Xt.turnX+=(-5+we+ot.y*5*ot.on-Xt.turnX)*kt(6),Xt.turnY+=(-9+jt+ot.x*7*ot.on-Xt.turnY)*kt(6),ke(Xt,Vt,Tt+(1-ue)*ft*.12+$t,us*gt*(.7+.3*ee)*(e.tokenHover?1.06:1)),hc(Xt,Xt.seen,Xt.turnX,Xt.turnY+(1-ue)*180,Math.sin(dt*.6)*3);const Gt=e.tiles;Kt=Gt?Kt+k:0;for(let he=0;he<Lt.length;he++){const qt=Lt[he],xe=he<Gt,Ve=(Math.max(Gt,1)-1)/2,Re=e.tileIcons?.[he],Ce=Re?`page:${Re}`:At;qt.group.userData.icon!==Ce&&(Re&&!te.has(Ce)&&te.set(Ce,cc(At,getComputedStyle(s.value).getPropertyValue("--accent-deep").trim()||"#2440c9",Re)),qt.face.map=te.get(Ce)??te.get(At),qt.face.needsUpdate=!0,qt.group.userData.icon=Ce),qt.seen=xe?Math.min(1,Math.max(0,(Kt-.15-he*.11)/.8)):Math.max(0,qt.seen-k/.25);const Pe=xe?ce(qt.seen):1,[ei,Ke]=xe?Ae(he,Gt):[qt.group.userData.x??0,qt.group.userData.y??0],de=e.tileHover===he,Ge=Vt+(ei-Vt)*Pe,ze=Tt+(Ke-Tt)*Pe;xe&&(qt.group.userData.x=ei,qt.group.userData.y=Ke),qt.turnX+=((de?0:-8)-qt.turnX)*kt(8),qt.turnY+=((de?0:-16-(he-Ve)*7)-qt.turnY)*kt(8),ke(qt,Ge,ze-(de?6:0)+$t*.4*Math.cos(he*1.7),ae()*(.55+.45*Pe)),hc(qt,xe?Math.min(1,qt.seen*3):qt.seen,qt.turnX+(1-Pe)*30,qt.turnY-(1-Pe)*50)}}function nn(k){k&&(k.removeFromParent(),k.geometry.dispose(),k.material.dispose())}function vi(){nn(A),nn(N),j&&(j.removeFromParent(),j.geometry.dispose(),j.material.dispose()),Qn();const k=e.count;v=e.shapes.map(kt=>{const Vt=M[kt]*(st<=800?T[kt]:1),Tt=Math.round(k*h[kt]),gt=ac(kt,Tt,y),Xt=new Float32Array(k*3),$t=new Float32Array(k*3);for(let le=0;le<Tt*3;le++)Xt[le]=gt.positions[le]*ls*Vt,$t[le]=gt.normals[le];return{positions:Xt,normals:$t,count:Tt,lean:E[kt][0],tip:E[kt][1],reach:ls*Vt,spins:kt==="globe"}}),V=Float32Array.from({length:k*4},()=>Math.random()),_t=new Float32Array(k*3),yt=new Float32Array(k*3);const dt=v[ut(Math.floor(e.travel.state.progress))];K=dt,X=dt,D=dt,rt=dt.positions.slice(),O=-1,Yt=-1,pe.copy(Z("--on-dark","#ffffff")),I.copy(Z("--accent","#c8d2ff")),Ct.copy(Z("--stage-from","#2440c9"));const ht=new mn;ht.setAttribute("position",new De(rt.slice(),3).setUsage(ol)),ht.setAttribute("normal",new De(dt.normals.slice(),3).setUsage(ol)),ht.setDrawRange(0,dt.count),ht.setAttribute("aSeed",new De(V,4)),A=new Do(ht,new An({vertexShader:V0,fragmentShader:G0,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uDot:{value:Va},uBlur:{value:gc},uFocus:{value:i_},uRange:{value:s_},uReach:{value:ls},uLight:{value:C.clone()},uFade:{value:1},uLit:{value:pe.clone()},uShade:{value:Ct.clone().lerp(I,.5)},uAccent:{value:I.clone()}}})),A.frustumCulled=!1,w.add(A);const Et=Z("--stage-to","#070c33"),At=Z("--brand-deep","#101c66");j=B0(Ct.clone().lerp(Et,.1),Ct.clone().lerp(Et,.55),I.clone()),Ht.add(j),N=H0(Array.from({length:5},(kt,Vt)=>z((Vt+.5)*d,new P)),_,st<=800,[I.clone(),pe.clone(),At.lerp(Et,.3),Ct.clone().lerp(I,.35)]),Ht.add(N),Qn()}function Gi(k,dt){const ht=v.indexOf(k)*10+dt;if(ht===O)return;if(k!==D&&A){const Tt=A.geometry.getAttribute("normal");Tt.array.set(k.normals),Tt.needsUpdate=!0,A.geometry.setDrawRange(0,k.count)}O=ht,D=k,tt=dt;const Et=k.positions,At=rt,kt=At.length/3;if(dt<=0){At.set(Et);return}const Vt=l_*dt;for(let Tt=0;Tt<kt;Tt++){const gt=Tt*4,Xt=Tt*3;At[Xt]=Et[Xt]+(V[gt+1]*2-1)*Vt,At[Xt+1]=Et[Xt+1]+(V[gt+2]*2-1)*Vt,At[Xt+2]=Et[Xt+2]+(V[gt+3]*2-1)*Vt}}function In(){const k=v[ut(Math.round(e.travel.state.progress))],dt=e.points.length;if(Jt=[],!k||!dt)return;const ht=k.positions,Et=k.count,At=Math.max(1,Math.floor(Et/600)),kt=[];if(e.shapes[ut(Math.round(e.travel.state.progress))]==="globe"&&e.points.every(gt=>gt.at)){let gt=0,Xt=0;for(const le of e.points){const ue=le.at[0]*Math.PI/180,ee=le.at[1]*Math.PI/180,we=Math.sin(ue)*Math.cos(ee)*ls,jt=Math.sin(ee)*ls,Gt=Math.cos(ue)*Math.cos(ee)*ls;let he=0,qt=1/0;for(let xe=0;xe<Et;xe++){const Ve=(ht[xe*3]-we)**2+(ht[xe*3+1]-jt)**2+(ht[xe*3+2]-Gt)**2;Ve<qt&&(qt=Ve,he=xe)}kt.push(he),gt+=we,Xt+=Gt}Jt=kt;const $t=-Math.atan2(gt,Xt)-J;q.tx=$t+Math.round((q.x-$t)/(Math.PI*2))*Math.PI*2,q.ty=0,q.vx=q.vy=0;return}const Vt=gt=>ht[gt*3+2]>.3;let Tt=-1;for(let gt=0;gt<Et;gt+=At)Vt(gt)&&(Tt<0||ht[gt*3+1]-ht[gt*3]>ht[Tt*3+1]-ht[Tt*3])&&(Tt=gt);for(Tt<0&&(Tt=0),kt.push(Tt);kt.length<dt;){let gt=0,Xt=-1;for(let $t=0;$t<Et;$t+=At){if(!Vt($t))continue;let le=1/0;for(const ue of kt)le=Math.min(le,(ht[$t*3]-ht[ue*3])**2+(ht[$t*3+1]-ht[ue*3+1])**2+(ht[$t*3+2]-ht[ue*3+2])**2);le>Xt&&(Xt=le,gt=$t)}kt.push(gt)}Jt=kt,q.tx=-J+Math.round((q.x+J)/(Math.PI*2))*Math.PI*2,q.ty=0,q.vx=q.vy=0}const Dn=new P;function er(){const k=r.value;if(!k.length||!A)return;const dt=St.position.distanceTo(at.position);for(let ht=0;ht<k.length;ht++){const Et=Jt[ht],At=k[ht];if(Et===void 0||!At)continue;Dn.set(rt[Et*3]+_t[Et*3],rt[Et*3+1]+_t[Et*3+1],rt[Et*3+2]+_t[Et*3+2]).applyMatrix4(A.matrixWorld);const kt=St.position.distanceTo(Dn)<dt+.25;Dn.project(St);const Vt=(Dn.x*.5+.5)*st,Tt=(-Dn.y*.5+.5)*ft;At.style.transform=`translate(${Vt.toFixed(1)}px, ${Tt.toFixed(1)}px)`,At.classList.toggle("behind",!kt),ht===a.value&&(s.value.style.setProperty("--hx",`${Vt.toFixed(1)}px`),s.value.style.setProperty("--hy",`${Tt.toFixed(1)}px`),s.value.style.setProperty("--ty",`${Math.max(72,Math.min(ft-mc-112,Tt-mc/2)).toFixed(1)}px`))}}function nr(k){Yt=k,K=v[ut(k)],X=v[ut(k+1)]}function Qn(){!s.value||!R||(st=s.value.clientWidth||1,ft=s.value.clientHeight||1,R.setSize(st,ft,!1),Nt=parseFloat(getComputedStyle(s.value).getPropertyValue("--frame"))*parseFloat(getComputedStyle(document.documentElement).fontSize)||20,St.aspect=st/ft,at.scale.setScalar(Math.min(1,e_*St.aspect)),u=St.aspect<1?n_*ft:0)}const Rs=new ve,Un=new ve,ti=new P,xi=new P,Wi=new P,ir=new P,sr=new P,S=new P,U=new P;function W(k,dt,ht){const Et=ot.inside&&!0,At=ot.click;ot.click=!1;const kt=_t.length/3,Vt=_t,Tt=yt,gt=rt,Xt=p_*pc*k,$t=Math.pow(f_,k)*(1-Xt),le=Math.pow(m_,k)*(1-Xt);let ue=[],ee=[],we=[],jt=0;(Et||At)&&(A.updateWorldMatrix(!0,!1),Rs.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse).multiply(A.matrixWorld),ue=Rs.elements,ee=A.matrixWorld.elements,Un.copy(A.matrixWorld).invert(),we=Un.elements,ir.setFromMatrixColumn(St.matrixWorld,0).normalize(),sr.setFromMatrixColumn(St.matrixWorld,1).normalize(),S.copy(ir).transformDirection(Un),U.copy(sr).transformDirection(Un),Wi.setFromMatrixPosition(A.matrixWorld),ti.copy(St.position).sub(Wi).normalize(),jt=Wi.dot(ti),At&&xi.set(ot.px/st*2-1,1-ot.py/ft*2,.5).unproject(St).sub(St.position).normalize().multiplyScalar(St.position.distanceTo(Wi)).add(St.position));const Gt=ti.x,he=ti.y,qt=ti.z,xe=Nr*Nr,Ve=h_*pc*k*.01;for(let Ke=0;Ke<kt;Ke++){const de=Ke*3,Ge=de+1,ze=de+2;if(Et||At){const dn=gt[de]+Vt[de],wn=gt[Ge]+Vt[Ge],ni=gt[ze]+Vt[ze],Cs=ue[3]*dn+ue[7]*wn+ue[11]*ni+ue[15],rr=((ue[0]*dn+ue[4]*wn+ue[8]*ni+ue[12])/Cs*.5+.5)*st,Ps=(-(ue[1]*dn+ue[5]*wn+ue[9]*ni+ue[13])/Cs*.5+.5)*ft,ii=ot.px-rr,si=ot.py-Ps,Mi=ii*ii+si*si;if(Mi<xe&&Mi>0){const Xi=Math.sqrt(Mi),yi=(Nr-Xi)/Nr,$i=ee[0]*dn+ee[4]*wn+ee[8]*ni+ee[12],Ee=ee[1]*dn+ee[5]*wn+ee[9]*ni+ee[13],sn=ee[2]*dn+ee[6]*wn+ee[10]*ni+ee[14];if(Et&&$i*Gt+Ee*he+sn*qt>jt){const Fe=yi*Ve/Xi,gn=-ii*Fe,rn=si*Fe;Vt[de]+=S.x*gn+U.x*rn,Vt[Ge]+=S.y*gn+U.y*rn,Vt[ze]+=S.z*gn+U.z*rn}if(At){let Fe=$i-xi.x,gn=Ee-xi.y,rn=sn-xi.z;const tl=Math.hypot(Fe,gn,rn);if(tl>.001){const sa=yi*d_*.5/tl;Fe*=sa,gn*=sa,rn*=sa,Tt[de]+=we[0]*Fe+we[4]*gn+we[8]*rn,Tt[Ge]+=we[1]*Fe+we[5]*gn+we[9]*rn,Tt[ze]+=we[2]*Fe+we[6]*gn+we[10]*rn}}}}Vt[de]=Vt[de]*$t+Tt[de]*k*.1,Vt[Ge]=Vt[Ge]*$t+Tt[Ge]*k*.1,Vt[ze]=Vt[ze]*$t+Tt[ze]*k*.1,Tt[de]*=le,Tt[Ge]*=le,Tt[ze]*=le}const Re=A.geometry.getAttribute("position"),Ce=Re.array,Pe=D.normals,ei=r_*(1-tt);for(let Ke=0;Ke<kt;Ke++){const de=Ke*3,Ge=V[Ke*4+2],ze=ei*Math.cos(ht*a_*Ge+Math.PI*Ge)*V[Ke*4];Ce[de]=gt[de]+Vt[de]+Pe[de]*ze,Ce[de+1]=gt[de+1]+Vt[de+1]+Pe[de+1]*ze,Ce[de+2]=gt[de+2]+Vt[de+2]+Pe[de+2]*ze}Re.needsUpdate=!0}function $(k){const dt=R.domElement.getBoundingClientRect();ot.px=k.clientX-dt.left,ot.py=k.clientY-dt.top,ot.tx=ot.px/dt.width*2-1,ot.ty=1-ot.py/dt.height*2}function F(k){if($(k),ot.inside=!0,ot.target=1,q.dragging){const dt=performance.now(),ht=k.clientX-q.lastX,Et=k.clientY-q.lastY,At=dt-q.lastT;if(k.pointerType!=="mouse"&&!q.lock&&Math.hypot(k.clientX-q.startX,k.clientY-q.startY)>x_&&(q.lock=e.focused||Math.abs(k.clientX-q.startX)>=Math.abs(k.clientY-q.startY)?"spin":"travel"),(k.pointerType==="mouse"||q.lock==="spin")&&(q.tx+=ht*Ur,q.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,q.ty+Et*Ur)),At>0)){const Vt=16.666666666666668/At*.3;q.vx=ht*Ur*Vt,q.vy=Et*Ur*Vt}q.moved+=Math.abs(ht)+Math.abs(Et),q.lastX=k.clientX,q.lastY=k.clientY,q.lastT=dt}}function vt(){ot.inside=!1,ot.target=0}function Dt(k){k.pointerType==="mouse"&&k.button!==0||(q.dragging=!0,q.moved=0,q.vx=q.vy=0,q.lastX=q.startX=k.clientX,q.lastY=q.startY=k.clientY,q.lastT=performance.now(),q.lock="",R.domElement.setPointerCapture(k.pointerId))}function Ot(k){q.dragging=!1,k.pointerType!=="mouse"&&vt()}function Bt(k,dt,ht,Et){if(!q.dragging&&(Math.abs(q.vx)>1e-4||Math.abs(q.vy)>1e-4)){q.tx+=q.vx*k,q.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,q.ty+q.vy*k));const Xt=Math.pow(u_,k);q.vx*=Xt,q.vy*=Xt}const At=1-Math.pow(1-c_,k);q.x+=(q.tx-q.x)*At,q.y+=(q.ty-q.y)*At;const kt=1-b;D.spins&&(J-=o_*dt*kt);const Vt=D.spins?0:Math.cos(Et)*.1*kt,Tt=kt,gt=1-Math.exp(-dt*3);x+=(D.lean-x)*gt,B+=(D.tip-B)*gt,w.rotation.set(q.y+B+Math.sin(Et*.7)*.045*Tt,q.x+J+Vt,x+Math.cos(Et*.55)*.03*Tt,"ZXY"),w.position.y=Math.sin(Et)*.07*(1-b*.6)+ct}return Xn(()=>{const k=s.value;R=new Wg({antialias:!0,alpha:!0,powerPreference:"high-performance"}),R.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),R.setClearColor(0,0),k.prepend(R.domElement);const dt=R.domElement;dt.addEventListener("pointermove",F,{passive:!0}),dt.addEventListener("pointerleave",vt,{passive:!0}),dt.addEventListener("pointercancel",vt,{passive:!0}),dt.addEventListener("pointerdown",Dt),dt.addEventListener("pointerup",Ot),dt.addEventListener("click",jt=>{q.moved<5&&($(jt),ot.click=!0)}),Wt=new ResizeObserver(Qn),Wt.observe(k),it=e.active,vi(),R.toneMapping=Cc;const ht=X0(R),Et=$0(),At=Z("--surface","#f2f4fb").multiplyScalar(.82);mt=uc(Et,ht,At),nt.add(mt.group),Lt=Array.from({length:6},()=>{const jt=uc(Et,ht,At);return nt.add(jt.group),jt}),pt=Ft.map(([jt,Gt,he,qt])=>{const xe=jt==="globe"?4e3:2600,Ve=ac(jt,xe,y),Re=new mn;Re.setAttribute("position",new De(Ve.positions,3)),Re.setAttribute("normal",new De(Ve.normals,3)),Re.setAttribute("aSeed",new De(Float32Array.from({length:xe*4},()=>Math.random()),4));const Ce=A.material.clone();Ce.uniforms.uBlur.value=0,Ce.uniforms.uFocus.value=Os,Ce.uniforms.uRange.value=100,Ce.uniforms.uReach.value=1,Ce.uniforms.uFade.value=0;const Pe=new Do(Re,Ce);return Pe.frustumCulled=!1,Pe.rotation.z=qt,Pe.visible=!1,nt.add(Pe),{points:Pe,fx:Gt,fy:he}}),e.landUrl&&F0(e.landUrl).then(jt=>{jt&&!zt&&(y=jt,vi())}),document.fonts?.load('500 200px "Host Grotesk"',"P2630").then(()=>{if(!zt){for(const jt of Object.keys(Zn))te.delete(jt);Zt=void 0,vi()}}).catch(()=>{});const kt=!1,Vt=new P,Tt=new P,gt=new P,Xt=new P,$t=new P(0,1,0),le=jt=>{let Gt=jt;for(let he=0;he<6;he++){const qt=3*(1-Gt)*(1-Gt)*Gt*.45+3*(1-Gt)*Gt*Gt*.25+Gt*Gt*Gt,xe=3*(1-Gt)*(1-Gt)*.45+6*(1-Gt)*Gt*(.25-.45)+3*Gt*Gt*(1-.25);Gt-=(qt-jt)/Math.max(1e-4,xe)}return Gt=Math.min(1,Math.max(0,Gt)),3*(1-Gt)*Gt*Gt+Gt*Gt*Gt};let ue=performance.now(),ee=Math.random()*100;const we=jt=>{const Gt=Math.min((jt-ue)/1e3,.03333333333333333),he=Gt*60;ue=jt,ee+=Gt;const qt=Ee=>1-Math.exp(-Gt*Ee),xe=e.travel;xe.update(Gt);const Ve=Ee=>{const sn=Math.min(1,Math.max(0,Ee));return sn*sn*(3-2*sn)},Re=xe.state.progress,Ce=Math.floor(Re),Pe=Re-Ce,ei=(Pe+.5)%1,Ke=Pe>=.6;Ce!==Yt&&nr(Ce);const de=Ke?X:K;if(!it)lt=1,Gi(de,1);else if(Qt<1)Qt=Math.min(1,Qt+Gt/t_),lt=0,Gi(de,1-Ve(Qt));else{const Ee=Pe>=.5&&Pe<.6;lt=Math.min(1,Math.max(0,lt+(Ee?Gt:-Gt))),de!==D&&(q.x=q.tx=q.y=q.ty=q.vx=q.vy=0,J=0,lt=0,G=0),Gi(de,le(lt))}ot.x+=(ot.tx-ot.x)*qt(1),ot.y+=(ot.ty-ot.y)*qt(1),ot.on+=(ot.target-ot.on)*qt(2),b+=((e.focused?1:0)-b)*qt(2.6);const Ge=e.shapes[ut(Math.round(Re))]==="globe",ze=e.focused?1:0;et+=((Ge?g_:__)*ze-et)*qt(2.6),ct+=((Ge||St.aspect<1?0:v_)*ze-ct)*qt(2.6);const dn=Re*d,wn=((Ke?Ce+1:Ce)+.5)*d;z(wn,at.position),z(dn-(1-Math.min(1,Qt*1.3))*.35,Vt).lerp(at.position,et*Math.min(1,St.aspect/1.3));const ni=1-(Ve((ei-.1)/.6)-Ve((ei-.4)/.5));z(ei<.1?dn+d/2:wn+(dn+d/2-wn)*ni,Tt).lerp(at.position,b),at.lookAt(z(dn-.02*Math.PI,gt));const Cs=Vt.distanceTo(Tt)*Math.tan(gs.degToRad(2.25))*ot.on;Xt.subVectors(Tt,Vt).cross($t).normalize(),St.position.copy(Vt).addScaledVector(Xt,-ot.x*Cs).addScaledVector($t,ot.y*Cs),St.lookAt(Tt),xt+=(e.shift-xt)*qt(4);let rr=0;if(St.aspect<1&&e.focused&&(St.clearViewOffset(),St.updateProjectionMatrix(),St.updateMatrixWorld(),A&&D)){A.updateWorldMatrix(!0,!1);let Ee=1/0,sn=-1/0;for(let Fe=0,gn=Math.max(1,Math.ceil(D.count/300));Fe<D.count;Fe+=gn){const rn=g.set(rt[Fe*3],rt[Fe*3+1],rt[Fe*3+2]).applyMatrix4(A.matrixWorld).project(St).x;rn<Ee&&(Ee=rn),rn>sn&&(sn=rn)}sn>Ee&&(rr=(Ee+sn)/2)}p+=(rr-p)*qt(4);const Ps=xt*st+p*st/2;Math.abs(Ps)>.5||u?(St.setViewOffset(st,ft,Ps,u,st,ft),f=Ps,m=u):(St.clearViewOffset(),f=m=0),St.updateProjectionMatrix(),St.updateMatrixWorld(),Bt(he,Gt,kt,ee);const ii=A.material.uniforms,si=R.getPixelRatio();ii.uDot.value=Va*si,ii.uBlur.value=gc*si,ii.uReach.value=D.reach,G=Math.min(1,G+Gt/.6),ii.uFade.value=(1-tt)*(.15+.85*G),W(he,kt,ee),er(),He(Gt,ee,Re-Math.floor(Re)),Rt=Math.min(1,Math.max(0,Rt+(e.gallery?Gt/1.2:-Gt/1.1)));const Mi=2*Os*Math.tan(gs.degToRad(Ha)/2)/ft,Xi=e.gallery?0:1-Rt;for(const Ee of pt){if(Ee.points.visible=Rt>.003,!Ee.points.visible)continue;const sn=.115*Math.min(ft,st*.9)*Mi*(1+Xi*.25);Ee.points.position.set((Ee.fx-.5)*st*Mi*(1+Xi*.35),-(Ee.fy-.5)*ft*Mi*(1+Xi*.35),-Os),Ee.points.scale.setScalar(sn),Ee.points.rotation.y=ee*.15+Ee.fx*4;const Fe=Ee.points.material.uniforms;Fe.uFade.value=Ve(Rt)*.9,Fe.uDot.value=Va*si*.85,Fe.uReach.value=sn}const yi=N.material.uniforms,$i=j.material.uniforms;yi.uTime.value=ee,yi.uRatio.value=si,yi.uCalm.value=b,yi.uShow.value=1,$i.uTime.value=ee,$i.uAspect.value=St.aspect,$i.uSway.value=Math.sin(dn),R.render(Ht,St),Mt=requestAnimationFrame(we)};Mt=requestAnimationFrame(we)}),on(()=>e.active,k=>{k&&(it=!0)}),on(()=>e.points,In,{immediate:!0}),on(()=>[e.count,e.shapes.join()],()=>{R&&(it&&(Qt=1),vi())}),jn(()=>{zt=!0,cancelAnimationFrame(Mt),Wt?.disconnect(),nn(A),nn(N);for(const k of pt)k.points.geometry.dispose(),k.points.material.dispose();mt&&dc(mt),Lt.forEach(dc),te.forEach(k=>k.dispose()),R?.dispose(),R?.domElement.remove()}),(k,dt)=>(Y(),Q("div",{ref_key:"host",ref:s,class:"stage"},[Se(vu,{name:"marker"},{default:$e(()=>[(Y(!0),Q(ge,null,Ie(i.points,(ht,Et)=>(Y(),Q("button",{key:ht.slug,ref_for:!0,ref_key:"markers",ref:r,type:"button",class:qe(["marker",{plain:!i.card}]),style:bn({"--k":Et}),"aria-label":ht.title,onClick:At=>n("pick",ht.slug),onPointerenter:At=>a.value=Et,onPointerleave:dt[0]||(dt[0]=At=>a.value=-1),onFocus:At=>a.value=Et,onBlur:dt[1]||(dt[1]=At=>a.value=-1)},[dt[2]||(dt[2]=H("span",{class:"dot"},null,-1)),H("span",K0,bt(ht.title),1)],46,Y0))),128))]),_:1}),i.card?(Y(),Q("div",{key:0,class:qe(["card",{on:L(a)>=0}]),"aria-hidden":"true"},[dt[3]||(dt[3]=H("span",{class:"thread"},null,-1)),dt[4]||(dt[4]=H("svg",{class:"outline",viewBox:"0 0 290 195",fill:"none"},[H("path",{pathLength:"1",d:"M.5.5h289v178a16 16 0 0 1-16 16H.5Z"})],-1)),H("span",Z0,[L(o)?.image?(Y(),Q("img",{key:0,src:c(L(o).image),alt:""},null,8,J0)):(Y(),Q("span",j0))]),H("span",Q0,bt(L(o)?.title),1)],2)):oe("",!0)],512))}}),S_=en(y_,[["__scopeId","data-v-fb125b13"]]),E_={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},T_={key:0,x:"12",y:"12.6","text-anchor":"middle","dominant-baseline":"central","font-family":"'Host Grotesk', sans-serif","font-weight":"400","font-size":"16",fill:"currentColor",stroke:"none"},b_=["d"],Qo=Ye({__name:"TopicIcon",props:{name:{}},setup(i){return(t,e)=>(Y(),Q("svg",E_,[L(Zn)[i.name]?(Y(),Q("text",T_,bt(L(Zn)[i.name]),1)):(Y(!0),Q(ge,{key:1},Ie(L(gu)[i.name],n=>(Y(),Q("path",{key:n,d:n},null,8,b_))),128))]))}}),A_=["aria-current","onClick"],w_={class:"name"},R_=Ye({__name:"ZoneRail",props:{zones:{},active:{},travel:{}},emits:["select"],setup(i){const t=i,e=fe(),n=r=>{const a=t.zones.length,o=Math.min(Math.abs(r-t.active),a-Math.abs(r-t.active));return o===0?1:o===1?.6:o===2?.4:.3};let s=0;return Xn(()=>{const r=()=>{const a=t.travel.state.progress,o=Math.abs(a-Math.round(a))*2;e.value?.style.setProperty("--fill",(.5+o*.5).toFixed(3)),s=requestAnimationFrame(r)};s=requestAnimationFrame(r)}),jn(()=>cancelAnimationFrame(s)),(r,a)=>{const o=Qo;return Y(),Q("nav",{ref_key:"rail",ref:e,class:"rail","aria-label":"Topics"},[a[1]||(a[1]=H("span",{class:"glow","aria-hidden":"true"},null,-1)),H("ul",null,[(Y(!0),Q(ge,null,Ie(i.zones,(l,c)=>(Y(),Q("li",{key:l.id,class:qe(["stop",{active:c===i.active}]),style:bn({"--fade":n(c)})},[a[0]||(a[0]=H("span",{class:"line","aria-hidden":"true"},[H("span",{class:"line-fill"})],-1)),H("button",{type:"button","aria-current":c===i.active?"true":void 0,onClick:u=>r.$emit("select",c)},[Se(o,{name:l.shape,class:"glyph"},null,8,["name"]),H("span",w_,bt(l.title),1)],8,A_)],6))),128))])],512)}}}),C_=en(R_,[["__scopeId","data-v-1326966a"]]),P_={key:0,"aria-hidden":"true"},L_={key:1,class:"mask","aria-hidden":"true"},I_=Ye({__name:"RiseText",props:{text:{},tag:{default:"span"},delay:{default:0},step:{default:45}},setup(i){const t=i,e=Te(()=>t.text.split(/(\s+)/).filter(n=>n.length));return(n,s)=>(Y(),an(xu(i.tag),{class:"rise","aria-label":i.text},{default:$e(()=>[(Y(!0),Q(ge,null,Ie(L(e),(r,a)=>(Y(),Q(ge,{key:a+r},[/^\s+$/.test(r)?(Y(),Q("span",P_,bt(" "))):(Y(),Q("span",L_,[H("span",{class:"word",style:bn({animationDelay:`${i.delay+a*i.step/2}ms`})},bt(r),5)]))],64))),128))]),_:1},8,["aria-label"]))}}),ia=en(I_,[["__scopeId","data-v-1885a4ad"]]),D_={class:"row","aria-label":"Pages in this topic"},U_=["aria-label","aria-disabled","onClick","onPointerenter","onFocus"],N_={class:"name","aria-hidden":"true"},F_=Ye({__name:"PageTokens",props:{pages:{},soonLabel:{}},emits:["pick","hover"],setup(i,{emit:t}){const e=t;return jn(()=>e("hover",-1)),(n,s)=>(Y(),Q("ul",D_,[(Y(!0),Q(ge,null,Ie(i.pages,(r,a)=>(Y(),Q("li",{key:r.slug,style:bn({"--i":a,"--dip":1-Math.min(1,Math.abs(a-(i.pages.length-1)/2))})},[H("button",{type:"button","aria-label":r.soon?`${r.title} (${i.soonLabel??"coming soon"})`:r.title,"aria-disabled":r.soon||void 0,class:qe({soon:r.soon}),onClick:o=>e("pick",r.slug),onPointerenter:o=>e("hover",a),onPointerleave:s[0]||(s[0]=o=>e("hover",-1)),onFocus:o=>e("hover",a),onBlur:s[1]||(s[1]=o=>e("hover",-1))},null,42,U_),H("span",N_,bt(r.title),1)],4))),128))]))}}),O_=en(F_,[["__scopeId","data-v-25e83859"]]),B_={class:"slider","aria-label":"Pages in this topic"},k_=["onClick"],z_=Ye({__name:"LevelSlider",props:{pages:{}},emits:["pick"],setup(i){return(t,e)=>(Y(),Q("ul",B_,[(Y(!0),Q(ge,null,Ie(i.pages,(n,s)=>(Y(),Q("li",{key:n.slug,style:bn({"--i":s})},[H("button",{type:"button",onClick:r=>t.$emit("pick",n.slug)},[e[0]||(e[0]=H("span",{class:"dot","aria-hidden":"true"},null,-1)),Oi(bt(n.title),1)],8,k_)],4))),128))]))}}),H_=en(z_,[["__scopeId","data-v-950345ec"]]),V_=["aria-expanded"],G_={class:"sr-only"},W_=["aria-label"],X_=["aria-selected"],$_=["lang","onClick"],q_=Ye({__name:"LanguageSwitch",props:{locales:{},current:{},label:{},plain:{type:Boolean}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,s=fe(!1),r=Te(()=>e.locales.find(u=>u.code===e.current)),a=Te(()=>r.value?.short??e.current.toUpperCase()),o=fe(),l=u=>{o.value&&!o.value.contains(u.target)&&(s.value=!1)};Xn(()=>document.addEventListener("pointerdown",l)),jn(()=>document.removeEventListener("pointerdown",l));function c(u){s.value=!1,u!==e.current&&n("pick",u)}return(u,p)=>(Y(),Q("div",{ref_key:"root",ref:o,class:qe(["lang",{plain:i.plain}]),onKeydown:p[1]||(p[1]=Mu(bc(f=>s.value=!1,["stop"]),["esc"]))},[H("button",{type:"button",class:"toggle","aria-haspopup":"listbox","aria-expanded":L(s),onClick:p[0]||(p[0]=f=>s.value=!L(s))},[Oi(bt(L(a)),1),H("span",G_," — "+bt(i.label)+": "+bt(L(r)?.label),1),H("span",{class:qe(["arrow",{up:L(s)}]),"aria-hidden":"true"},null,2)],8,V_),Se(un,{name:"drop"},{default:$e(()=>[L(s)?(Y(),Q("ul",{key:0,role:"listbox","aria-label":i.label},[(Y(!0),Q(ge,null,Ie(i.locales,f=>(Y(),Q("li",{key:f.code,role:"option","aria-selected":f.code===i.current},[H("button",{type:"button",lang:f.code,onClick:m=>c(f.code)},bt(f.label),9,$_)],8,X_))),128))],8,W_)):oe("",!0)]),_:1})],34))}}),Y_=en(q_,[["__scopeId","data-v-af1e5b4e"]]),K_='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function _u(i,t,e){let n=null;function s(){const a=i.value;return a?[...a.querySelectorAll(K_)].filter(o=>o.offsetParent!==null||o===document.activeElement):[]}function r(a){if(a.key!=="Tab"||!t.value)return;const o=s();if(!o.length){a.preventDefault(),i.value?.focus();return}const l=o[0],c=o[o.length-1],u=document.activeElement,p=!!u&&!!i.value?.contains(u);a.shiftKey&&(u===l||!p)?(a.preventDefault(),c.focus()):!a.shiftKey&&(u===c||!p)&&(a.preventDefault(),l.focus())}on(t,(a,o)=>{if(a&&!o)n=document.activeElement,document.addEventListener("keydown",r),Wr(()=>requestAnimationFrame(()=>{(e?.()??i.value)?.focus({preventScroll:!0})}));else if(!a&&o){document.removeEventListener("keydown",r);const l=n;n=null,Wr(()=>{l&&document.contains(l)&&l.offsetParent!==null&&l.focus({preventScroll:!0})})}},{immediate:!0}),jn(()=>document.removeEventListener("keydown",r))}const Z_=["aria-label"],J_=["aria-label"],j_=["aria-current","onClick"],Q_={key:0,class:"numeral"},tv=["src"],ev={class:"name"},nv={key:0,class:"foot"},iv=Ye({__name:"TopicMenu",props:{zones:{},extras:{},open:{type:Boolean},active:{},closeLabel:{},menuLabel:{}},emits:["page","zone","close"],setup(i,{emit:t}){const e={globe:9.8,target:9.8,chain:5.3,flask:18,bottle:16,bulb:16},n=mi().app.baseURL,s=i,r=t,a=fe();return _u(a,Ac(s,"open"),()=>a.value?.querySelector(".cell.current .face")??a.value?.querySelector(".face")),(o,l)=>{const c=Qo;return Y(),Q(ge,null,[Se(un,{name:"veil"},{default:$e(()=>[i.open?(Y(),Q("div",{key:0,class:"veil",onClick:l[0]||(l[0]=u=>r("close"))})):oe("",!0)]),_:1}),Se(un,{name:"menu"},{default:$e(()=>[i.open?(Y(),Q("div",{key:0,ref_key:"menu",ref:a,class:"menu",role:"dialog","aria-modal":"true","aria-label":i.menuLabel,tabindex:"-1"},[H("button",{type:"button",class:"close","aria-label":i.closeLabel,onClick:l[1]||(l[1]=u=>r("close"))},[...l[2]||(l[2]=[H("svg",{class:"icon-12",viewBox:"0 0 12 12","aria-hidden":"true"},[H("path",{d:"M3 3l6 6M9 3l-6 6"})],-1)])],8,J_),H("ul",{class:"grid",style:bn({"--rows":Math.ceil(i.zones.length/2)})},[(Y(!0),Q(ge,null,Ie(i.zones,(u,p)=>(Y(),Q("li",{key:u.id,class:qe(["cell",{current:p===i.active}]),style:bn({"--i":p})},[H("button",{type:"button",class:"face","aria-current":p===i.active?"true":void 0,onClick:f=>r("zone",p)},[H("span",{class:"icon","aria-hidden":"true",style:bn({"--sink":`${e[u.shape]}px`})},[L(Zn)[u.shape]?(Y(),Q("span",Q_,bt(L(Zn)[u.shape]),1)):(Y(),an(c,{key:1,name:u.shape,class:"line"},null,8,["name"]))],4),H("img",{class:"bar",src:`${L(n)}images/topics/underline.svg`,alt:"",width:"91",height:"12"},null,8,tv),H("span",ev,bt(u.title),1)],8,j_)],6))),128))],4),o.$slots.foot?(Y(),Q("div",nv,[yu(o.$slots,"foot",{},void 0,!0)])):oe("",!0)],8,Z_)):oe("",!0)]),_:3})],64)}}}),sv=en(iv,[["__scopeId","data-v-37c27fe4"]]),rv={class:"feature"},av={class:"head"},ov={class:"eyebrow-top"},lv={key:0,class:"hero box"},cv=["src","alt"],uv={key:1,class:"hero-title"},hv={key:0,class:"intro inset"},dv={class:"eyebrow"},fv={class:"heading"},pv={key:0},mv={class:"copy"},gv={key:1,class:"quote"},_v={class:"portrait"},vv=["src"],xv=["src","alt"],Mv={class:"quote-body"},yv={class:"eyebrow"},Sv={class:"heading"},Ev={class:"name"},Tv={key:0},bv={class:"copy"},Av=["onClick"],wv={key:2,class:"pillars box inset"},Rv={class:"eyebrow"},Cv={class:"heading"},Pv={class:"cards"},Lv={class:"card-icon","aria-hidden":"true"},Iv=["src","width","height"],Dv={class:"card-title"},Uv={class:"copy"},Nv={key:3,class:"framework inset"},Fv={class:"eyebrow"},Ov={class:"framework-row"},Bv={class:"heading"},kv={class:"copy framework-text"},zv={class:"figures"},Hv={class:"figure-value"},Vv={class:"copy"},Gv={key:4,class:"mission inset"},Wv={class:"mission-text"},Xv={class:"mission-label"},$v={class:"heading"},qv={class:"copy mission-copy"},Yv={class:"eyebrow list-label"},Kv={class:"focus"},Zv={class:"mission-picture"},Jv=["src","alt"],jv={class:"eyebrow"},Qv={class:"heading"},tx={key:0,class:"grid-rule"},ex={class:"points"},nx={class:"point-title"},ix={class:"copy"},sx="images/what-is-p2630/",rx=Ye({__name:"FeaturePage",props:{page:{}},emits:["go"],setup(i,{emit:t}){const e=i,n=t,s=mi().app.baseURL,r=u=>u?/^(https?:)?\/\//.test(u)?u:s+u.replace(/^\//,""):"",a=Te(()=>{const u=e.page.blocks[0];return u?.type==="figure"?u:null}),o=Te(()=>a.value?e.page.blocks.slice(1):e.page.blocks),l=Te(()=>{const[u,p,f,m]=a.value?.frame??[.297,-1.029,101.386,125.926];return{left:`${u}%`,top:`${p}%`,width:`${f}%`,height:`${m}%`}}),c={connected:{w:50,h:60.4927,layers:[{src:"connected-1.svg",w:43.5699,h:40.3322,x:0,y:20.16},{src:"connected-2.svg",w:43.3438,h:39.8334,x:6.66,y:0},{src:"connected-3.svg",w:12.8509,h:16.4563,x:18.07,y:29.89},{src:"connected-4.svg",w:10.3237,h:16.3981,x:10.79,y:24.92},{src:"connected-5.svg",w:10.3972,h:16.3184,x:27.78,y:24.92},{src:"connected-6.svg",w:10.414,h:16.5042,x:31.58,y:15.82},{src:"connected-7.svg",w:10.3918,h:16.3556,x:7.31,y:16.23},{src:"connected-8.svg",w:7.94893,h:13.5989,x:20.71,y:15.82}]},inclusive:{w:50,h:52.5433,layers:[{src:"inclusive.svg",w:50,h:52.5433,x:0,y:0}]},competitive:{w:50,h:59.4147,layers:[{src:"competitive.svg",w:50,h:59.4147,x:0,y:0}]},"future-ready":{w:50,h:64.5321,layers:[{src:"future-ready.svg",w:50,h:64.5321,x:0,y:0}]}};return(u,p)=>{const f=ia;return Y(),Q("article",rv,[H("header",av,[H("p",ov,bt(i.page.lead),1),Se(f,{tag:"h2",class:"title",text:i.page.title,delay:450},null,8,["text"]),p[0]||(p[0]=H("span",{class:"underline","aria-hidden":"true"},null,-1))]),p[1]||(p[1]=H("hr",{class:"sheet-rule"},null,-1)),L(a)?(Y(),Q("figure",lv,[L(a).src?(Y(),Q("img",{key:0,src:r(L(a).src),alt:L(a).caption,style:bn(L(l))},null,12,cv)):oe("",!0),L(a).title?(Y(),Q("p",uv,bt(L(a).title),1)):oe("",!0)])):oe("",!0),(Y(!0),Q(ge,null,Ie(L(o),(m,g)=>(Y(),Q(ge,{key:g},[m.type==="intro"?(Y(),Q("section",hv,[H("div",null,[H("p",dv,bt(m.eyebrow),1),H("h3",fv,[(Y(!0),Q(ge,null,Ie(m.heading,(_,d)=>(Y(),Q(ge,{key:d},[d?(Y(),Q("br",pv)):oe("",!0),Oi(bt(_),1)],64))),128))])]),H("div",mv,[(Y(!0),Q(ge,null,Ie(m.text,(_,d)=>(Y(),Q("p",{key:d},bt(_),1))),128))])])):m.type==="quote"?(Y(),Q("section",gv,[H("div",_v,[H("img",{class:"backdrop",src:r(m.src),alt:"",loading:"lazy"},null,8,vv),H("img",{class:"cutout",src:r(m.cutout),alt:m.name[0],loading:"lazy"},null,8,xv)]),H("div",Mv,[H("p",yv,bt(m.eyebrow),1),H("blockquote",Sv,bt(m.quote),1),H("p",Ev,[(Y(!0),Q(ge,null,Ie(m.name,(_,d)=>(Y(),Q(ge,{key:d},[d?(Y(),Q("br",Tv)):oe("",!0),Oi(bt(_),1)],64))),128))]),H("p",bv,bt(m.text),1),m.button?(Y(),Q("button",{key:0,type:"button",class:"pill",onClick:_=>n("go",m.button.to)},bt(m.button.label),9,Av)):oe("",!0)])])):m.type==="pillars"?(Y(),Q("section",wv,[H("p",Rv,bt(m.eyebrow),1),H("h3",Cv,bt(m.heading),1),H("ul",Pv,[(Y(!0),Q(ge,null,Ie(m.items,_=>(Y(),Q("li",{key:_.title},[H("span",Lv,[c[_.icon]?(Y(),Q("span",{key:0,class:"glyph",style:bn({width:`${c[_.icon].w}px`,height:`${c[_.icon].h}px`})},[(Y(!0),Q(ge,null,Ie(c[_.icon].layers,d=>(Y(),Q("img",{key:d.src,src:r(sx+d.src),alt:"",width:d.w,height:d.h,style:bn({left:`${d.x}px`,top:`${d.y}px`})},null,12,Iv))),128))],4)):oe("",!0)]),H("p",Dv,bt(_.title),1),H("p",Uv,bt(_.text),1)]))),128))])])):m.type==="framework"?(Y(),Q("section",Nv,[H("p",Fv,bt(m.eyebrow),1),H("div",Ov,[H("div",null,[H("h3",Bv,bt(m.heading),1),H("p",kv,bt(m.text),1)]),H("ul",zv,[(Y(!0),Q(ge,null,Ie(m.items,_=>(Y(),Q("li",{key:_.value},[H("p",Hv,bt(_.value),1),H("p",Vv,bt(_.text),1)]))),128))])])])):m.type==="mission"?(Y(),Q("section",Gv,[H("div",Wv,[H("p",Xv,bt(m.label),1),H("h3",$v,bt(m.heading),1),H("p",qv,bt(m.text),1),H("p",Yv,bt(m.listLabel),1),H("ul",Kv,[(Y(!0),Q(ge,null,Ie(m.items,_=>(Y(),Q("li",{key:_},bt(_),1))),128))])]),H("div",Zv,[m.src?(Y(),Q("img",{key:0,src:r(m.src),alt:m.caption??"",loading:"lazy"},null,8,Jv)):oe("",!0)])])):m.type==="grid"?(Y(),Q("section",{key:5,class:qe(["grid inset",{box:m.boxed,boxed:m.boxed}])},[H("p",jv,bt(m.eyebrow),1),H("h3",Qv,bt(m.heading),1),m.boxed?(Y(),Q("hr",tx)):oe("",!0),H("ul",ex,[(Y(!0),Q(ge,null,Ie(m.items,_=>(Y(),Q("li",{key:_.title},[H("p",nx,bt(_.title),1),H("p",ix,bt(_.text),1)]))),128))])],2)):oe("",!0)],64))),128))])}}}),ax=en(rx,[["__scopeId","data-v-8cc3ecd3"]]),ox=["src","alt"],lx={key:1,class:"blank","aria-hidden":"true"},cx={key:2},ux={key:0,class:"captions"},hx=["aria-current","onClick"],dx={class:"num"},fx={key:1,class:"controls"},px=["disabled"],mx={class:"count"},gx=["disabled"],_x=Ye({__name:"BlockCarousel",props:{slides:{},vertical:{type:Boolean}},setup(i){const t=i,e=fe(),n=fe(0);function s(){const a=e.value;a&&(n.value=t.vertical?Math.round(a.scrollTop/a.clientHeight):Math.round(a.scrollLeft/a.clientWidth))}function r(a){const o=e.value;if(!o)return;const l=Math.max(0,Math.min(t.slides.length-1,a));o.scrollTo(t.vertical?{top:l*o.clientHeight,behavior:"smooth"}:{left:l*o.clientWidth,behavior:"smooth"})}return(a,o)=>(Y(),Q("div",{class:qe(["carousel",{vertical:i.vertical}])},[H("ul",{ref_key:"track",ref:e,class:"track",tabindex:"0","aria-label":"Image carousel",onScrollPassive:s},[(Y(!0),Q(ge,null,Ie(i.slides,(l,c)=>(Y(),Q("li",{key:c},[H("figure",null,[l.src?(Y(),Q("img",{key:0,src:l.src,alt:l.caption,loading:"lazy"},null,8,ox)):(Y(),Q("div",lx)),i.vertical?oe("",!0):(Y(),Q("figcaption",cx,bt(l.caption),1))])]))),128))],544),i.vertical?(Y(),Q("ol",ux,[(Y(!0),Q(ge,null,Ie(i.slides,(l,c)=>(Y(),Q("li",{key:c},[H("button",{type:"button","aria-current":c===L(n),onClick:u=>r(c)},[H("span",dx,bt(String(c+1).padStart(2,"0")),1),Oi(bt(l.caption),1)],8,hx)]))),128))])):(Y(),Q("div",fx,[H("button",{type:"button","aria-label":"Previous slide",disabled:L(n)===0,onClick:o[0]||(o[0]=l=>r(L(n)-1))},"←",8,px),H("span",mx,bt(L(n)+1)+" / "+bt(i.slides.length),1),H("button",{type:"button","aria-label":"Next slide",disabled:L(n)===i.slides.length-1,onClick:o[1]||(o[1]=l=>r(L(n)+1))},"→",8,gx)]))],2))}}),vx=en(_x,[["__scopeId","data-v-7a73ef18"]]),xx={class:"video"},Mx=["src","poster"],yx={key:1,class:"blank","aria-hidden":"true"},Sx=Ye({__name:"BlockVideo",props:{caption:{},src:{},poster:{}},setup(i){return(t,e)=>(Y(),Q("figure",xx,[i.src?(Y(),Q("video",{key:0,src:i.src,poster:i.poster,controls:"",playsinline:"",preload:"metadata"},null,8,Mx)):(Y(),Q("div",yx,[...e[0]||(e[0]=[H("span",{class:"play"},null,-1)])])),H("figcaption",null,bt(i.caption),1)]))}}),Ex=en(Sx,[["__scopeId","data-v-8f9c3c35"]]),Tx=["aria-label"],bx=["aria-label"],Ax={key:0,class:"subtitle"},wx={class:"hero"},Rx=["src","alt"],Cx={key:1,class:"blank","aria-hidden":"true"},Px={class:"chip"},Lx=["src"],Ix={key:0,class:"lead"},Dx={key:2,class:"gap"},Ux={class:"blocks"},Nx={key:0,class:"pair"},Fx={class:"figure"},Ox=["src","alt"],Bx={key:1,class:"blank","aria-hidden":"true"},kx={class:"text"},zx={key:1},Hx={key:2,class:"text"},Vx={key:3,class:"columns"},Gx={key:4,class:"figure"},Wx=["src","alt"],Xx={key:1,class:"blank","aria-hidden":"true"},$x={key:7,class:"rule"},qx={key:8,class:"stat"},Yx={class:"value"},Kx={class:"stat-text"},Zx={key:10,class:"callout"},Jx={class:"callout-title"},jx=["onClick"],Qx={class:"label"},tM=Ye({__name:"ContentPanel",props:{page:{},topic:{},closeLabel:{}},emits:["close","go"],setup(i,{emit:t}){const e=i,n=t,s=fe(),r=fe(),a=fe();_u(r,Te(()=>!!e.page),()=>a.value),on(()=>e.page?.slug,()=>Wr(()=>s.value?.scrollTo({top:0})));const o=mi().app.baseURL,l=Te(()=>!!e.page?.at),c=Te(()=>{const _=e.page?.blocks[0];return _?.type==="figure"?_:null}),u=Te(()=>{const _=e.page?c.value?e.page.blocks.slice(1):e.page.blocks:[],d=[];for(let h=0;h<_.length;h++){const E=_[h],M=_[h+1];E.type==="figure"&&M?.type==="text"?(d.push({type:"pair",figure:E,text:M.text}),h++):d.push(E)}return d});let p=-1,f=0;function m(){const _=s.value;if(!_)return;const d=p-_.scrollTop;if(Math.abs(d)<.5){_.scrollTop=p,p=-1;return}_.scrollTop+=d*.1,f=requestAnimationFrame(m)}function g(_){const d=s.value;!d||_.ctrlKey||matchMedia("(prefers-reduced-motion: reduce)").matches||(_.preventDefault(),p<0&&(p=d.scrollTop),p=Math.max(0,Math.min(d.scrollHeight-d.clientHeight,p+_.deltaY*(_.deltaMode===1?100/6:1))),cancelAnimationFrame(f),f=requestAnimationFrame(m))}return on(()=>e.page?.slug,()=>{p=-1,cancelAnimationFrame(f)}),jn(()=>cancelAnimationFrame(f)),(_,d)=>{const h=ax,E=ia,M=vx,T=Ex;return Y(),an(un,{name:"sheet",duration:900},{default:$e(()=>[i.page?(Y(),Q("div",{key:0,ref_key:"sheet",ref:r,class:"sheet"},[H("div",{class:"veil","aria-hidden":"true",onClick:d[0]||(d[0]=C=>n("close"))}),H("button",{type:"button",class:"close","aria-label":i.closeLabel,onClick:d[1]||(d[1]=C=>n("close"))},[...d[3]||(d[3]=[H("svg",{class:"icon-12",viewBox:"0 0 12 12","aria-hidden":"true"},[H("path",{d:"M3 3l6 6M9 3l-6 6"})],-1)])],8,Tx),H("aside",{ref_key:"panel",ref:a,class:qe(["panel",{"is-feature":i.page.layout==="feature"}]),role:"dialog","aria-modal":"true","aria-label":i.page.title,tabindex:"-1"},[H("div",{ref_key:"body",ref:s,class:"body",onWheel:g},[Se(un,{name:"swap",mode:"out-in"},{default:$e(()=>[i.page.layout==="feature"?(Y(),an(h,{key:i.page.slug,page:i.page,onGo:d[2]||(d[2]=C=>n("go",C))},null,8,["page"])):(Y(),Q("article",{key:i.page.slug},[L(l)?(Y(),Q(ge,{key:0},[Se(E,{tag:"h2",class:"place-title",text:i.page.title,delay:450},null,8,["text"]),i.page.lead?(Y(),Q("p",Ax,bt(i.page.lead),1)):oe("",!0),d[4]||(d[4]=H("hr",{class:"first"},null,-1))],64)):oe("",!0),H("figure",wx,[L(c)?.src?(Y(),Q("img",{key:0,src:L(c).src,alt:L(c).caption},null,8,Rx)):(Y(),Q("div",Cx)),H("p",Px,[H("img",{class:"chip-mark",src:`${L(o)}logo-color.png`,alt:"",width:"320",height:"280"},null,8,Lx),Oi(bt(i.topic),1)])]),L(l)?(Y(),Q("div",Dx)):(Y(),Q(ge,{key:1},[d[5]||(d[5]=H("hr",null,null,-1)),Se(E,{tag:"h2",text:i.page.title,delay:450},null,8,["text"]),i.page.lead?(Y(),Q("p",Ix,bt(i.page.lead),1)):oe("",!0)],64)),H("div",Ux,[(Y(!0),Q(ge,null,Ie(L(u),(C,R)=>(Y(),Q(ge,{key:R},[C.type==="pair"?(Y(),Q("div",Nx,[H("figure",Fx,[C.figure.src?(Y(),Q("img",{key:0,src:C.figure.src,alt:C.figure.caption,loading:"lazy"},null,8,Ox)):(Y(),Q("div",Bx)),H("figcaption",null,bt(C.figure.caption),1)]),H("p",kx,bt(C.text),1)])):C.type==="heading"?(Y(),Q("h3",zx,bt(C.text),1)):C.type==="text"?(Y(),Q("p",Hx,bt(C.text),1)):C.type==="columns"?(Y(),Q("div",Vx,[H("p",null,bt(C.left),1),H("p",null,bt(C.right),1)])):C.type==="figure"?(Y(),Q("figure",Gx,[C.src?(Y(),Q("img",{key:0,src:C.src,alt:C.caption,loading:"lazy"},null,8,Wx)):(Y(),Q("div",Xx)),H("figcaption",null,bt(C.caption),1)])):C.type==="carousel"?(Y(),an(M,{key:5,slides:C.slides,vertical:C.vertical},null,8,["slides","vertical"])):C.type==="spacer"?(Y(),Q("div",{key:6,class:qe(["spacer",C.size??"m"]),"aria-hidden":"true"},null,2)):C.type==="rule"?(Y(),Q("hr",$x)):C.type==="stat"?(Y(),Q("div",qx,[H("p",Yx,bt(C.value),1),H("p",Kx,bt(C.text),1)])):C.type==="video"?(Y(),an(T,{key:9,caption:C.caption,src:C.src,poster:C.poster},null,8,["caption","src","poster"])):C.type==="button"?(Y(),Q("div",Zx,[H("p",Jx,bt(C.label),1),H("button",{type:"button",class:"cta fill-btn btn-md",onClick:A=>n("go",C.to)},[d[6]||(d[6]=H("span",{class:"fill","aria-hidden":"true"},null,-1)),d[7]||(d[7]=H("span",{class:"knob","aria-hidden":"true"},[H("svg",{class:"icon-12 arrow in",viewBox:"0 0 12 12"},[H("path",{d:"M2 6h8M7 3l3 3-3 3"})]),H("svg",{class:"icon-12 arrow out",viewBox:"0 0 12 12"},[H("path",{d:"M2 6h8M7 3l3 3-3 3"})])],-1)),H("span",Qx,bt(C.label),1)],8,jx)])):oe("",!0)],64))),128))])]))]),_:1})],544)],10,bx)],512)):oe("",!0)]),_:1})}}}),eM=en(tM,[["__scopeId","data-v-54d04c20"]]),nM={class:"tutorial","aria-live":"polite"},iM={class:"pictures","aria-hidden":"true"},sM={class:"cell"},rM={class:"cell"},aM={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"},oM={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"},lM={class:"text"},cM={class:"label"},uM=Ye({__name:"AppTutorial",props:{steps:{}},emits:["done"],setup(i,{emit:t}){const e=i,n=t,s=fe(0),r=Te(()=>e.steps[s.value]);function a(){s.value<e.steps.length-1?s.value++:n("done")}return(o,l)=>{const c=Qo,u=ia;return Y(),Q("section",nM,[Se(un,{name:"card",mode:"out-in"},{default:$e(()=>[(Y(),Q("div",{key:L(s),class:"card"},[H("div",iM,[H("span",sM,[Se(c,{name:L(s)===0?"globe":"target"},null,8,["name"])]),H("span",rM,[L(s)===0?(Y(),Q("svg",aM,[...l[0]||(l[0]=[H("rect",{x:"7",y:"3",width:"10",height:"17",rx:"5"},null,-1),H("path",{d:"M12 6.5v3",class:"wheel"},null,-1)])])):(Y(),Q("svg",oM,[...l[1]||(l[1]=[H("path",{d:"M9.5 12V5a1.5 1.5 0 0 1 3 0v6M12.5 10.5V9a1.5 1.5 0 0 1 3 0v2M15.5 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4 15a1.5 1.5 0 0 1 2.5-1.6L9.5 16"},null,-1)])]))])]),Se(u,{tag:"h1",text:L(r).title,delay:250},null,8,["text"]),H("p",lM,bt(L(r).text),1),H("button",{type:"button",class:"action fill-btn btn-lg",onClick:a},[l[2]||(l[2]=H("span",{class:"fill","aria-hidden":"true"},null,-1)),l[3]||(l[3]=H("span",{class:"knob","aria-hidden":"true"},[H("svg",{class:"icon-12 arrow in",viewBox:"0 0 12 12"},[H("path",{d:"M2 6h8M7 3l3 3-3 3"})]),H("svg",{class:"icon-12 arrow out",viewBox:"0 0 12 12"},[H("path",{d:"M2 6h8M7 3l3 3-3 3"})])],-1)),H("span",cM,bt(L(r).button),1)])]))]),_:1})])}}}),hM=en(uM,[["__scopeId","data-v-54a76f8f"]]),dM=Ye({__name:"AppCursor",props:{hint:{},enabled:{type:Boolean}},setup(i){const t=i,e=fe(),n=fe(!1);let s=0,r=0,a=0,o=0,l=0,c=!1;function u(f){if(f.pointerType!=="mouse")return;a=f.clientX,o=f.clientY,c||(c=!0,s=a,r=o);const m=f.target;n.value=!!m&&m.tagName==="CANVAS"}const p=()=>{n.value=!1};return Xn(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;window.addEventListener("pointermove",u,{passive:!0}),document.documentElement.addEventListener("pointerleave",p);const f=()=>{s+=(a-s)*.16,r+=(o-r)*.16,e.value&&(e.value.style.transform=`translate(${s.toFixed(1)}px, ${r.toFixed(1)}px)`),l=requestAnimationFrame(f)};l=requestAnimationFrame(f)}),jn(()=>{cancelAnimationFrame(l),window.removeEventListener("pointermove",u),document.documentElement.removeEventListener("pointerleave",p)}),(f,m)=>(Y(),Q("div",{ref_key:"el",ref:e,class:qe(["cursor",{shown:L(n)&&t.enabled}]),"aria-hidden":"true"},[m[0]||(m[0]=H("span",{class:"halo"},null,-1)),m[1]||(m[1]=H("span",{class:"ring"},null,-1)),Se(un,{name:"swap",mode:"out-in"},{default:$e(()=>[(Y(),Q("span",{key:i.hint,class:"hint"},bt(i.hint),1))]),_:1})],2))}}),fM=en(dM,[["__scopeId","data-v-3807efc6"]]),pM={class:"sr-only"},mM={class:"title"},gM={class:"line"},_M={class:"line"},Bs=84,vc=280/320,xc=1.9,vM=Ye({__name:"AppLoader",props:{progress:{},label:{},brand:{},done:{type:Boolean}},emits:["ready","reveal","gone"],setup(i,{emit:t}){const e=i,n=t,s=fe(),r=fe(),a=fe(),o=fe(),l=fe(),c=`${mi().app.baseURL}logo-color.png`,u=Te(()=>e.brand.split(" ")[0]??e.brand),p=Te(()=>e.brand.split(" ").slice(1).join(" ")),f=fe(!1),m=3.1,g=m,_=2.3;function d(){const D=Bs,tt=Bs*vc,O=D*.17,J=new Path2D,V=[D*.52,0],rt=[D,tt],_t=[0,tt];return J.moveTo((V[0]+rt[0])/2,(V[1]+rt[1])/2),J.arcTo(rt[0],rt[1],_t[0],_t[1],O),J.arcTo(_t[0],_t[1],V[0],V[1],O),J.arcTo(V[0],V[1],rt[0],rt[1],O),J.closePath(),{p:J,w:D,h:tt,length:3.05*D}}function h(D,tt,O,J){return V=>{let rt=V;for(let _t=0;_t<6;_t++){const yt=3*(1-rt)**2*rt*D+3*(1-rt)*rt*rt*O+rt**3,Yt=3*(1-rt)**2*D+6*(1-rt)*rt*(O-D)+3*rt*rt*(1-O);rt-=(yt-V)/(Yt||1e-4),rt=Math.min(1,Math.max(0,rt))}return 3*(1-rt)**2*rt*tt+3*(1-rt)*rt*rt*J+rt**3}}const E=h(.45,0,.25,1),M=D=>D<=0?0:D>=1?1:D<.5?2**(20*D-10)/2:(2-2**(-20*D+10))/2,T=(D,tt,O)=>Math.min(1,Math.max(0,(D-tt)/O)),C=D=>{const tt=D.replace("#",""),O=tt.length===3?tt.split("").map(J=>J+J).join(""):tt;return[0,2,4].map(J=>parseInt(O.slice(J,J+2),16)||0)},R=[1,1.76,2.43,3.31,4.05,5];let A=0,N=0,j=-1,v=!1,y=!1,K=!1;function X(D){const tt=r.value,O=s.value;if(!tt||!O)return;const J=tt.getContext("2d"),V=Math.min(devicePixelRatio||1,2),rt=O.clientWidth,_t=O.clientHeight;tt.width!==Math.round(rt*V)&&(tt.width=Math.round(rt*V),tt.height=Math.round(_t*V));const yt=rt<=800,Yt=Math.min((yt?.66:.36)*rt,.58*_t/vc)/Bs,Qt=a.value?.offsetWidth||(yt?60:Bs),it=Qt/Bs,{p:st,w:ft,h:Mt,length:Wt}=d(),zt=getComputedStyle(O),Ht=C(zt.getPropertyValue("--surface").trim()||"#f2f4fb"),St=C(zt.getPropertyValue("--brand").trim()||"#2440c9"),at=(q,xt,b)=>`rgb(${q.map((x,B)=>Math.round(x*b+xt[B]*(1-b))).join(",")})`,w=St.map((q,xt)=>q*.12+Ht[xt]*.88),z=K?99:(D-N)/1e3*xc,G=j<0?-1:K?99:(D-j)/1e3*xc;J.setTransform(1,0,0,1,0,0),J.clearRect(0,0,tt.width,tt.height),J.fillStyle=at(Ht,Ht,1),J.fillRect(0,0,tt.width,tt.height);const lt=q=>{J.setTransform(V*q,0,0,V*q,(rt/2-ft*q/2)*V,(_t/2-Mt*2/3*q+2)*V),J.lineWidth=1/q};if(R.forEach((q,xt)=>{const b=q*Yt;let x=b/1.5+(b-b/1.5)*E(T(z,(R.length-1-xt)*.1,1.2));G>=0&&(x*=1+9*E(T(G,1.2+xt*.1,2.5))),lt(x);const B=Math.max(.6,1-xt*.08),et=E(T(z,g+_+.2+xt*.2,1));if(J.strokeStyle=at(St,w,et*B),J.setLineDash([]),J.stroke(st),xt===0){const ct=Math.min(e.progress,E(T(z,g,_)));J.strokeStyle=at(St,St,1),J.setLineDash([Wt*Math.min(1,ct),Wt*2]),J.stroke(st),J.setLineDash([])}}),G>=1.2){const q=.98*it*(1+99*E(T(G,1.45,3.5)));lt(q),J.globalCompositeOperation="destination-out",J.fill(st),J.globalCompositeOperation="source-over"}const ot=a.value;if(ot){const q=E(T(z,.4,1)),xt=M(T(z,1.2,1)),b=G>=0?M(T(G,0,1.2)):0,x=o.value?.closest(".title"),et=-(x?x.offsetWidth+Qt*.2:Qt*2)/2*xt*(1-b),ct=G>=1.45?E(T(G,1.45,1.2)):0;ot.style.transform=`translateX(${et}px) scale(${(.6+.4*q)*(1+ct*5)})`,ot.style.opacity=String(q*(1-ct)),[o.value,l.value].forEach((nt,Ft)=>{if(!nt)return;const pt=E(T(z,1.5+Ft*.3,1.2)),Rt=G>=0?M(T(G,0,1.2)):0;nt.style.transform=`translateX(${(-101*(1-pt)-101*Rt).toFixed(2)}%)`})}if(!v&&z>=g+_+2.4&&e.progress>=1&&(v=!0,n("ready")),!y&&G>=2.1&&(y=!0,n("reveal")),G>=4.95){f.value=!0,n("gone");return}A=requestAnimationFrame(X)}return Xn(()=>{K=matchMedia("(prefers-reduced-motion: reduce)").matches,N=performance.now(),A=requestAnimationFrame(X)}),on(()=>e.done,D=>{D&&j<0&&(j=performance.now(),K&&(f.value=!0,n("gone")))}),jn(()=>cancelAnimationFrame(A)),(D,tt)=>L(f)?oe("",!0):(Y(),Q("div",{key:0,ref_key:"root",ref:s,class:qe(["loader",{leaving:i.done}]),role:"status","aria-live":"polite"},[H("span",pM,bt(i.done?"":`${i.brand} — ${i.label}`),1),H("canvas",{ref_key:"canvas",ref:r,"aria-hidden":"true"},null,512),H("div",{ref_key:"mark",ref:a,class:"mark","aria-hidden":"true"},[H("img",{src:c,alt:"",width:"320",height:"280",decoding:"async"}),H("p",mM,[H("span",gM,[H("span",{ref_key:"top",ref:o,class:"text"},bt(L(u)),513)]),H("span",_M,[H("span",{ref_key:"bottom",ref:l,class:"text"},bt(L(p)),513)])])],512)],2))}}),xM=en(vM,[["__scopeId","data-v-1d203cac"]]),MM=.1,Mc=100,yM=25e-5,SM=.9,yc=.1,EM=.95,Sc=2,TM=.3,bM=100,AM=10,Gr=(i,t,e)=>Math.max(t,Math.min(e,i)),wM=(i,t,e)=>Gr((i-t)/(e-t),0,1);function RM(i,t,e){const n={progress:0,velocity:0,direction:1};let s=0,r=0,a=null,o=0,l=0,c=1,u=!1,p=-1e3,f=0,m=!0,g=!1;const _=h=>(h%i+i)%i,d=(h,E=!1)=>{a=h,o=n.progress,l=0,u=E;const M=Math.abs(h-o);c=E?Math.max(.5,AM*M):.9+1.3*Math.sqrt(Math.min(3,M)),n.velocity=0,r=0,s=0};return{state:n,get stops(){return i},set stops(h){i=Math.max(1,h)},setEnabled(h){g=h,h||(n.velocity=0,r=0,s=0)},impulse(h){g&&(a!==null&&(a=null),s+=h,p=performance.now())},goTo(h){const E=Math.round(n.progress),M=_(h)-_(E);d(E+(M>i/2?M-i:M<-i/2?M+i:M))},step(h){g&&d(Math.round(a??n.progress)+h)},jump(h){a=null,n.progress=_(h),n.velocity=0,r=0,s=0},nearest:()=>_(Math.round(n.progress)),update(h){const E=n.progress,M=h*60;if(a!==null){l+=h;const A=Math.min(1,l/c),N=u?1-(1-A)*(1-A):A<.5?2*A*A:1-Math.pow(-2*A+2,2)/2;n.progress=o+(a-o)*N,A>=1&&(n.progress=a,a=null)}else{const A=s*(1-Math.pow(1-MM,M));s-=A,r+=Gr(A,-Mc*M,Mc*M)*yM,r=Gr(r*Math.pow(SM,M),-yc,yc),n.velocity=Gr((n.velocity+r*M)*Math.pow(EM,M),-Sc,Sc);const N=n.progress-Math.floor(n.progress),j=(N+.5)%1,v=Math.sin(Math.PI*wM(j,.1,.5));n.velocity*=Math.pow(1-.015*v,M),n.progress+=n.velocity*h*TM,performance.now()-p>bM&&Math.abs(s)<1&&Math.abs(n.velocity)<.25&&N>.48&&N<.82&&(n.progress+=n.direction*h*.22)}const T=n.progress-E;Math.abs(T)>1e-5&&(n.direction=Math.sign(T));const C=_(Math.round(n.progress));C!==f&&(f=C,t(C));const R=Math.abs(n.progress-Math.round(n.progress))<.06;R!==m&&(m=R,e(m))}}}let Gn,yn,Pi,Ga="",fs=!1,Ec=0;function Bo(){if(!Gn){const i=window.AudioContext??window.webkitAudioContext;if(!i)return;Gn=new i,yn=Gn.createGain(),yn.gain.value=fs?0:1,yn.connect(Gn.destination)}return Gn.state==="suspended"&&Gn.resume(),Gn}function Tc(i,t,e,n,s="sine"){const r=Bo();if(!r||!yn||fs)return;const a=r.createOscillator(),o=r.createGain(),l=r.currentTime;a.type=s,a.frequency.setValueAtTime(i,l),a.frequency.exponentialRampToValueAtTime(t,l+e),o.gain.setValueAtTime(n,l),o.gain.exponentialRampToValueAtTime(1e-4,l+e),a.connect(o).connect(yn),a.start(l),a.stop(l+e+.02)}const zn={get muted(){return fs},init(i=""){fs=!1;try{localStorage.removeItem("sound")}catch{}Ga=i&&(new Audio().canPlayType('audio/webm; codecs="opus"')?`${i}.webm`:`${i}.m4a`)},setMuted(i){fs=i,Gn&&yn&&yn.gain.setTargetAtTime(i?0:1,Gn.currentTime,.15)},startAmbient(){const i=Bo();if(!i||!yn||Pi||!Ga)return;Pi=new Audio(Ga),Pi.loop=!0,Pi.preload="auto";const t=i.createGain();t.gain.value=0,t.gain.setTargetAtTime(.5,i.currentTime,1.5),i.createMediaElementSource(Pi).connect(t).connect(yn),Pi.play().catch(()=>{Pi=void 0})},click(){Tc(720,420,.09,.07)},hover(){const i=performance.now();i-Ec<90||(Ec=i,Tc(1250,1100,.04,.018,"triangle"))},travel(){const i=Bo();if(!i||!yn||fs)return;const t=Math.floor(i.sampleRate*.9),e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);for(let l=0;l<t;l++)n[l]=Math.random()*2-1;const s=i.createBufferSource(),r=i.createBiquadFilter(),a=i.createGain(),o=i.currentTime;s.buffer=e,r.type="bandpass",r.Q.value=.8,r.frequency.setValueAtTime(300,o),r.frequency.exponentialRampToValueAtTime(2400,o+.45),r.frequency.exponentialRampToValueAtTime(400,o+.9),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.05,o+.35),a.gain.exponentialRampToValueAtTime(1e-4,o+.9),s.connect(r).connect(a).connect(yn),s.start(o)}},CM="$s";function Hn(...i){const t=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(t);const[e,n]=i;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const s=CM+e,r=Su(),a=Ac(r.payload.state,s);if(a.value===void 0&&n){const o=n();if(Eu(o))return r.payload.state[s]=o,o;a.value=o}return a}function PM(){const i=Hn("site",()=>null),t=Hn("locales",()=>[]),e=Hn("locale",()=>"en"),n=Hn("phase",()=>"loading"),s=Hn("zone",()=>0),r=Hn("menu",()=>!1),a=Hn("page",()=>null),o=Hn("fromMenu",()=>!1),l=Hn("focused",()=>!1),c=Te(()=>i.value?.zones??[]),u=Te(()=>c.value[s.value]),p=Te(()=>{for(const h of c.value){const E=h.pages.find(M=>M.slug===a.value);if(E)return E}return i.value?.extras?.find(h=>h.slug===a.value)??null});async function f(){const h=mi().app.baseURL;t.value=await $fetch(`${h}content/locales.json`,{cache:"no-cache"});let E=new URLSearchParams(location.search).get("lang");if(!E)try{E=localStorage.getItem("lang")}catch{}const M=t.value.find(C=>C.code===E||C.param===E);await m(M?M.code:t.value[0].code,!1);const T=()=>{const C=location.hash.replace(/^#\/?/,"");C?_(C,!1):a.value=null};T(),window.addEventListener("hashchange",T)}async function m(h,E=!0){const M=mi().app.baseURL;if(i.value=await $fetch(`${M}content/${h}.json`,{cache:"no-cache"}),e.value=h,document.documentElement.lang=h,E){try{localStorage.setItem("lang",h)}catch{}const T=new URL(location.href);h===t.value[0].code?T.searchParams.delete("lang"):T.searchParams.set("lang",t.value.find(C=>C.code===h)?.param??h),history.replaceState(null,"",T)}}function g(h){s.value=Math.max(0,Math.min(c.value.length-1,h))}function _(h,E=!0,M=!1){o.value=M;const T=c.value.findIndex(C=>C.pages.some(R=>R.slug===h));T<0&&!i.value?.extras?.some(C=>C.slug===h)||(T>=0&&(s.value=T),a.value=h,r.value=!1,E&&history.replaceState(null,"",`#/${h}`))}function d(){a.value=null,o.value&&(r.value=!0,o.value=!1),history.replaceState(null,"",location.pathname+location.search)}return{site:i,locales:t,locale:e,phase:n,zones:c,zone:u,zoneIndex:s,menuOpen:r,page:p,pageSlug:a,focused:l,fromMenu:o,load:f,setLocale:m,goToZone:g,openPage:_,closePage:d}}const LM=globalThis.setInterval,IM={class:"bar"},DM=["href"],UM=["src","alt"],NM={class:"bar-end"},FM=["aria-label","aria-pressed"],OM={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},BM={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},kM={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},zM={key:0,class:"explore"},HM={class:"index"},VM={class:"summary"},GM={class:"foot"},WM={class:"hint"},XM={key:0,class:"extra"},$M={key:0,class:"foot-end"},qM=["aria-label","aria-pressed"],YM={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},KM={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},ZM={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},JM=["aria-label"],jM={class:"text label"},QM={key:0,class:"foot tutorial-foot"},ty={class:"foot-end"},ey=["aria-label","aria-pressed"],ny={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},iy={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},sy={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},ks="p2630-return",ry=8,ay=Ye({__name:"index",setup(i){const{site:t,locales:e,locale:n,phase:s,zones:r,zone:a,zoneIndex:o,menuOpen:l,page:c,focused:u,fromMenu:p,load:f,setLocale:m,goToZone:g,openPage:_,closePage:d}=PM();function h(){if(zt.value){u.value=!0;return}const z=a.value?.pages[0];z&&_(z.slug)}function E(){c.value&&(p.value=!1,d()),l.value=!1,u.value=!1,s.value==="explore"&&g(0)}const M=mi().app.baseURL,T=fe(0),C=fe(!1);Xn(async()=>{let z=!1;try{z=sessionStorage.getItem(ks)!==null}catch{}if(z){await f(),C.value=!0,T.value=1,N.value=!0,j.value=!0,A();return}const G=performance.now(),lt=1400,ot=LM(()=>{T.value=Math.min(C.value?1:.9,(performance.now()-G)/lt)},60);await f(),C.value=!0,await new Promise(q=>setTimeout(q,Math.max(0,lt-(performance.now()-G))+250)),clearInterval(ot),T.value=1});let R=-1;addEventListener("pageshow",z=>{if(z.persisted)try{sessionStorage.removeItem(ks)}catch{}});function A(){let z=null;try{z=sessionStorage.getItem(ks),sessionStorage.removeItem(ks)}catch{}if(z!==null&&!c.value){s.value="explore",R=Number(z),O.jump(R),g(R);return}s.value=c.value?"explore":"tutorial"}const N=fe(!1),j=fe(!1),v=Te(()=>s.value==="explore"&&!l.value&&!c.value&&!u.value),y=Te(()=>u.value&&a.value?a.value.pages.map(z=>({slug:z.slug,title:z.title,at:z.at,image:z.image,icon:z.icon,href:z.href,soon:z.soon})):[]);function K(z){const G=a.value?.pages.find(lt=>lt.slug===z);if(G?.href){const lt=/^(https?:)?\/\//.test(G.href)?G.href:M+G.href.replace(/^\//,"");if(/\.pdf$/i.test(lt)){window.open(lt,"_blank","noopener");return}try{sessionStorage.setItem(ks,String(o.value))}catch{}location.href=lt;return}G?.soon||_(z)}on(o,z=>{if(z===R){R=-1,Wr(()=>{u.value=!0});return}c.value||(u.value=!1)});const X=fe(!0),D=fe(!1);Xn(()=>{zn.init(`${M}audio/ambient`),D.value=zn.muted;const z=G=>G.target?.closest?.("button, a");document.addEventListener("click",G=>{z(G)&&zn.click(),s.value==="explore"&&!D.value&&zn.startAmbient()}),document.addEventListener("pointerover",G=>{G.pointerType==="mouse"&&z(G)&&zn.hover()})});function tt(){D.value=!D.value,zn.setMuted(D.value),D.value||zn.startAmbient()}on(s,z=>{z==="explore"&&zn.startAmbient()});const O=RM(6,z=>{o.value=z,zn.travel()},z=>{X.value=z});on(()=>r.value.length,z=>{z&&(O.stops=z)}),on(v,z=>O.setEnabled(z),{immediate:!0}),on(o,z=>{O.nearest()!==z&&O.goTo(z)});const J=fe(!1);function V(z){O.impulse(z.deltaY),v.value&&Math.abs(z.deltaY)>2&&(J.value=!0)}let rt=null,_t=0,yt=0,Yt="";function Qt(z){rt=yt=z.touches[0].clientY,_t=z.touches[0].clientX,Yt=""}function it(z){if(rt===null)return;const G=z.touches[0].clientX,lt=z.touches[0].clientY;if(!Yt){if(Math.hypot(G-_t,lt-yt)<=ry)return;Yt=u.value||Math.abs(G-_t)>=Math.abs(lt-yt)?"spin":"travel"}Yt==="travel"&&(O.impulse((rt-lt)*4),v.value&&(J.value=!0)),rt=lt}function st(z){z.key==="Escape"?c.value?d():l.value?l.value=!1:u.value=!1:z.key==="ArrowDown"||z.key==="ArrowRight"?O.step(1):(z.key==="ArrowUp"||z.key==="ArrowLeft")&&O.step(-1)}Xn(()=>window.addEventListener("keydown",st)),jn(()=>window.removeEventListener("keydown",st));const ft=fe(!0);Xn(()=>{const z=window.matchMedia("(min-width: 801px)");ft.value=z.matches,z.addEventListener("change",G=>{ft.value=G.matches})});const Mt=fe(!1),Wt=fe(-1),zt=Te(()=>a.value?.shape==="chain"),Ht=Te(()=>zt.value),St=Te(()=>ft.value&&(c.value||l.value)?.37:0),at=Te(()=>ft.value?42e3:15e3),w=Te(()=>r.value.length?r.value.map(z=>z.shape):["globe"].slice());return Au(()=>{const z=t.value?.ui.brand??"MCMC P2630",G=c.value?.lead??t.value?.ui.description??"";return{title:c.value?`${c.value.title} · ${z}`:z,meta:[{name:"description",content:G},{property:"og:description",content:G}]}}),(z,G)=>{const lt=S_,ot=C_,q=ia,xt=O_,b=H_,x=Y_,B=sv,et=eM,ct=hM,nt=fM,Ft=xM;return Y(),Q("main",{class:"page",onWheelPassive:V,onTouchstartPassive:Qt,onTouchmovePassive:it},[Se(lt,{shapes:L(w),travel:L(O),active:L(s)==="explore",gallery:L(s)==="tutorial",shift:L(St),count:L(at),"land-url":`${L(M)}data/land.json`,focused:L(u),points:L(Ht)?[]:L(y),card:L(ft),token:!1,"token-hover":L(Mt),tiles:L(u)&&L(Ht)&&!L(c)&&!L(l)?L(y).length:0,"tile-icons":L(y).map(pt=>pt.icon),"tile-hover":L(Wt),onPick:K},null,8,["shapes","travel","active","gallery","shift","count","land-url","focused","points","card","token-hover","tiles","tile-icons","tile-hover"]),L(t)?(Y(),Q(ge,{key:0},[H("header",IM,[Si(H("a",{class:"brand",href:L(M),onClick:bc(E,["prevent"])},[H("img",{src:`${L(M)}logo-badge.png`,alt:L(t).ui.brand,width:"566",height:"206",decoding:"async"},null,8,UM)],8,DM),[[Ei,L(s)==="explore"]]),H("span",NM,[L(ft)?oe("",!0):Si((Y(),Q("button",{key:0,type:"button",class:"glass square","aria-label":L(D)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(D),onClick:tt},[(Y(),Q("svg",OM,[G[10]||(G[10]=H("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(D)?(Y(),Q("path",BM)):(Y(),Q("path",kM))]))],8,FM)),[[Ei,L(s)==="explore"&&!L(l)]]),Si(H("button",{type:"button",class:"glass topics","aria-haspopup":"dialog",onClick:G[0]||(G[0]=pt=>l.value=!0)},[G[11]||(G[11]=Tu('<svg viewBox="0 0 12 12" aria-hidden="true" data-v-03d4087e><circle cx="6" cy="1.5" r="1" data-v-03d4087e></circle><circle cx="6" cy="10.5" r="1" data-v-03d4087e></circle><circle cx="1.5" cy="6" r="1" data-v-03d4087e></circle><circle cx="10.5" cy="6" r="1" data-v-03d4087e></circle><circle cx="2.8" cy="2.8" r=".7" data-v-03d4087e></circle><circle cx="9.2" cy="9.2" r=".7" data-v-03d4087e></circle></svg>',1)),H("span",null,bt(L(ft)?L(t).ui.menu:L(t).ui.menuShort),1)],512),[[Ei,L(s)==="explore"&&!L(c)&&!L(l)]])])]),Se(un,{name:"fade"},{default:$e(()=>[L(s)==="explore"?(Y(),Q("div",zM,[Se(ot,{zones:L(r),active:L(o),travel:L(O),class:qe(["fades",{gone:L(u)||L(l)}]),onSelect:L(g)},null,8,["zones","active","travel","class","onSelect"]),Se(un,{name:"fade"},{default:$e(()=>[L(u)&&!L(l)?(Y(),an(q,{key:L(a).title,tag:"p",class:"focus-title",text:L(a).title,delay:300},null,8,["text"])):oe("",!0)]),_:1}),Se(un,{name:"fade"},{default:$e(()=>[L(u)&&L(Ht)&&!L(c)&&!L(l)?(Y(),an(xt,{key:0,pages:L(y),"soon-label":L(t).ui.soon,onPick:K,onHover:G[1]||(G[1]=pt=>{Wt.value=pt})},null,8,["pages","soon-label"])):oe("",!0)]),_:1}),L(u)&&!L(c)&&!L(l)&&!L(ft)&&!L(Ht)?(Y(),an(b,{key:0,pages:L(y),onPick:K},null,8,["pages"])):oe("",!0),Se(un,{name:"title",mode:"out-in"},{default:$e(()=>[(Y(),Q("div",{key:L(o),class:qe(["headline",{aside:!!L(c)||L(l)||L(u)}])},[H("p",HM,bt(String(L(o)+1).padStart(2,"0"))+" / "+bt(String(L(r).length).padStart(2,"0")),1),H("h1",null,bt(L(a).title),1),H("p",VM,bt(L(a).summary),1)],2))]),_:1}),H("footer",GM,[H("p",WM,[Oi(bt(L(u)?L(t).ui.hintFocus:L(t).ui.hintScroll),1),L(u)?oe("",!0):(Y(),Q("span",XM," · "+bt(L(t).ui.hintPointer),1))]),L(ft)?Si((Y(),Q("div",$M,[L(e).length>1?(Y(),an(x,{key:0,class:"lang-foot",locales:L(e),current:L(n),label:L(t).ui.language,plain:"",onPick:L(m)},null,8,["locales","current","label","onPick"])):oe("",!0),Si(H("button",{type:"button",class:"glass square","aria-label":L(D)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(D),onClick:tt},[(Y(),Q("svg",YM,[G[12]||(G[12]=H("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(D)?(Y(),Q("path",KM)):(Y(),Q("path",ZM))]))],8,qM),[[Ei,!0]])],512)),[[Ei,!L(c)&&!L(l)]]):oe("",!0),Si(H("button",{type:"button",class:qe(["enter fill-btn btn-lg",{small:L(u),end:L(u)}]),"aria-label":L(u)?L(t).ui.close:`${L(t).ui.open}: ${L(a).title}`,onClick:G[2]||(G[2]=pt=>L(u)?u.value=!1:h())},[G[13]||(G[13]=H("span",{class:"fill","aria-hidden":"true"},null,-1)),G[14]||(G[14]=H("span",{class:"knob","aria-hidden":"true"},null,-1)),H("span",jM,bt(L(u)?L(t).ui.close:L(a).title),1)],10,JM),[[Ei,!L(c)&&!L(l)]])])])):oe("",!0)]),_:1}),Se(B,{zones:L(r),extras:[],"menu-label":L(t).ui.menu,open:L(l),active:L(o),"close-label":L(t).ui.close,onPage:G[3]||(G[3]=pt=>L(_)(pt,!0,!0)),onZone:G[4]||(G[4]=pt=>{L(g)(pt),l.value=!1}),onClose:G[5]||(G[5]=pt=>l.value=!1)},bu({_:2},[!L(ft)&&L(e).length>1?{name:"foot",fn:$e(()=>[Se(x,{locales:L(e),current:L(n),label:L(t).ui.language,plain:"",onPick:L(m)},null,8,["locales","current","label","onPick"])]),key:"0"}:void 0]),1032,["zones","menu-label","open","active","close-label"]),Se(et,{page:L(c),topic:L(t).extras?.some(pt=>pt.slug===L(c)?.slug)?L(t).ui.brand:L(a)?.title,"close-label":L(t).ui.close,onClose:L(d),onGo:G[6]||(G[6]=pt=>L(_)(pt,!0,L(p)))},null,8,["page","topic","close-label","onClose"]),Se(un,{name:"fade"},{default:$e(()=>[L(s)==="tutorial"&&L(j)&&L(ft)?(Y(),Q("footer",QM,[H("div",ty,[L(e).length>1?(Y(),an(x,{key:0,class:"lang-foot",locales:L(e),current:L(n),label:L(t).ui.language,plain:"",onPick:L(m)},null,8,["locales","current","label","onPick"])):oe("",!0),Si(H("button",{type:"button",class:"glass square","aria-label":L(D)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(D),onClick:tt},[(Y(),Q("svg",ny,[G[15]||(G[15]=H("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(D)?(Y(),Q("path",iy)):(Y(),Q("path",sy))]))],8,ey),[[Ei,!0]])])])):oe("",!0)]),_:1}),Se(un,{name:"fade"},{default:$e(()=>[L(s)==="tutorial"&&L(j)?(Y(),an(ct,{key:0,steps:L(t).ui.tutorial,onDone:G[7]||(G[7]=pt=>s.value="explore")},null,8,["steps"])):oe("",!0)]),_:1})],64)):oe("",!0),L(t)?(Y(),an(nt,{key:1,hint:L(u)?L(t).ui.cursorFocus:L(t).ui.cursorExplore,enabled:L(s)==="explore"&&!L(l)&&(L(u)||!L(J)&&L(o)===0)},null,8,["hint","enabled"])):oe("",!0),L(N)?oe("",!0):(Y(),an(Ft,{key:2,progress:L(T),label:L(t)?.ui.loading??"Loading",brand:L(t)?.ui.brand??"MCMC P2630",done:L(s)!=="loading",onReady:A,onReveal:G[8]||(G[8]=pt=>j.value=!0),onGone:G[9]||(G[9]=pt=>{N.value=!0,j.value=!0})},null,8,["progress","label","brand","done"]))],32)}}}),cy=en(ay,[["__scopeId","data-v-03d4087e"]]);export{cy as default};
