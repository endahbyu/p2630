import{d as $e,I as qe,x as as,o as xn,c as si,B as j,C as it,F as xe,T as au,G as Ve,J as Me,K as Ne,L as ti,M as ke,D as Q,E as zt,l as L,N as he,i as oe,_ as Ye,O as ou,P as pc,H as Hs,Q as Qe,m as Re,R as rn,S as lu,U as mc,a as cu,V as uu,W as hu,X as Xn,Y as $n,Z as du}from"./DVDdzW69.js";import{u as fu}from"./XG4HCG2_.js";const wo="169",pu=0,Xo=1,mu=2,gc=1,gu=2,In=3,ii=0,Ge=1,Nn=2,ei=0,ns=1,$o=2,qo=3,Yo=4,_u=5,Si=100,vu=101,xu=102,Mu=103,yu=104,Su=200,Eu=201,Tu=202,bu=203,Da=204,Ia=205,Au=206,wu=207,Ru=208,Cu=209,Pu=210,Lu=211,Du=212,Iu=213,Uu=214,Ua=0,Na=1,Fa=2,os=3,Oa=4,Ba=5,ka=6,za=7,_c=0,Nu=1,Fu=2,ni=0,Ou=1,Bu=2,ku=3,zu=4,Hu=5,Vu=6,vc=7,xc=300,ls=301,cs=302,Ha=303,Va=304,Fr=306,Ga=1e3,Ti=1001,Wa=1002,an=1003,Gu=1004,$s=1005,fn=1006,$r=1007,bi=1008,zn=1009,Mc=1010,yc=1011,Ns=1012,Ro=1013,wi=1014,Fn=1015,Vs=1016,Co=1017,Po=1018,us=1020,Sc=35902,Ec=1021,Tc=1022,mn=1023,bc=1024,Ac=1025,is=1026,hs=1027,wc=1028,Lo=1029,Rc=1030,Do=1031,Io=1033,Er=33776,Tr=33777,br=33778,Ar=33779,Xa=35840,$a=35841,qa=35842,Ya=35843,Ka=36196,Za=37492,Ja=37496,ja=37808,Qa=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,uo=37820,ho=37821,wr=36492,fo=36494,po=36495,Cc=36283,mo=36284,go=36285,_o=36286,Wu=3200,Xu=3201,Pc=0,$u=1,Qn="",hn="srgb",ri="srgb-linear",Uo="display-p3",Or="display-p3-linear",Lr="linear",ve="srgb",Dr="rec709",Ir="p3",Fi=7680,Ko=519,qu=512,Yu=513,Ku=514,Lc=515,Zu=516,Ju=517,ju=518,Qu=519,Zo=35044,Jo=35048,jo="300 es",On=2e3,Ur=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const Ps=Math.PI/180,Fs=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function No(i,t){return(i%t+t)%t}function th(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function eh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function nh(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function ih(i,t=1){return t-Math.abs(No(i,t*2)-t)}function sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ah(i,t){return i+Math.floor(Math.random()*(t-i+1))}function oh(i,t){return i+Math.random()*(t-i)}function lh(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(Qo=i);let t=Qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uh(i){return i*Ps}function hh(i){return i*Fs}function dh(i){return(i&i-1)===0&&i!==0}function fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ph(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Ps,RAD2DEG:Fs,generateUUID:Li,clamp:Ue,euclideanModulo:No,mapLinear:th,inverseLerp:eh,lerp:Ls,damp:nh,pingpong:ih,smoothstep:sh,smootherstep:rh,randInt:ah,randFloat:oh,randFloatSpread:lh,seededRandom:ch,degToRad:uh,radToDeg:hh,isPowerOfTwo:dh,ceilPowerOfTwo:fh,floorPowerOfTwo:ph,setQuaternionFromProperEuler:mh,normalize:ze,denormalize:ji};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,a,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],h=s[6],S=s[1],M=s[4],b=s[7],N=s[2],C=s[5],R=s[8];return r[0]=a*v+o*S+l*N,r[3]=a*m+o*M+l*C,r[6]=a*h+o*b+l*R,r[1]=c*v+u*S+f*N,r[4]=c*m+u*M+f*C,r[7]=c*h+u*b+f*R,r[2]=d*v+p*S+g*N,r[5]=d*m+p*M+g*C,r[8]=d*h+p*b+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new ee;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){const i=Nr("canvas");return i.style.display="block",i}const tl={};function Rr(i){i in tl||(tl[i]=!0,console.warn(i))}function _h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const el=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[ri]:{transfer:Lr,primaries:Dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:ve,primaries:Dr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:Lr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el)},[Uo]:{transfer:ve,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el).convertLinearToSRGB()}},Mh=new Set([ri,Or]),ce={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ss[t].toReference,s=Ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ss[i].primaries},getTransfer:function(i){return i===Qn?Lr:Ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ss[t].luminanceCoefficients)}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Nr("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class Ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kr(s[a].image)):r.push(Kr(s[a]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class We extends fs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ti,s=Ti,r=fn,a=bi,o=mn,l=zn,c=We.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Li(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=xc;We.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(p+1)/2,N=(h+1)/2,C=(u+d)/4,R=(f+v)/4,B=(g+m)/4;return M>b&&M>N?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=R/n):b>N?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=B/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=R/r,s=B/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ic(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-o;const h=l*d+c*p+u*g+f*v,S=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const N=Math.sqrt(M),C=Math.atan2(N,h*S);m=Math.sin(m*C)/N,o=Math.sin(o*C)/N}const b=o*S;if(l=l*m+d*b,c=c*m+p*b,u=u*m+g*b,f=f*m+v*b,m===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-o*p,t[e+2]=c*g+u*p+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new I,il=new Gs;class Ws{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),Ys.subVectors(this.max,Es),Bi.subVectors(t.a,Es),ki.subVectors(t.b,Es),zi.subVectors(t.c,Es),qn.subVectors(ki,Bi),Yn.subVectors(zi,ki),di.subVectors(Bi,zi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!Jr(e,Bi,ki,zi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Bi,ki,zi,Ys))?!1:(Ks.crossVectors(qn,Yn),e=[Ks.x,Ks.y,Ks.z],Jr(e,Bi,ki,zi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,qs=new Ws,Bi=new I,ki=new I,zi=new I,qn=new I,Yn=new I,di=new I,Es=new I,Ys=new I,Ks=new I,fi=new I;function Jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ah=new Ws,Ts=new I,jr=new I;class Br{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(jr)),this.expandByPoint(Ts.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new I,Qr=new I,Zs=new I,Kn=new I,ta=new I,Js=new I,ea=new I;class Nc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=Kn.dot(this.direction),l=-Kn.dot(Zs),c=Kn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qr).addScaledVector(Zs,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Js.subVectors(n,t),ea.crossVectors(ta,Js);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot(Js.crossVectors(Kn,Js));if(l<0)return null;const c=o*this.direction.dot(ta.cross(Kn));if(c<0||l+c>a)return null;const u=-o*Kn.dot(ea);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,a,o,l,c,u,f,d,p,g,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,d,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+v,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wh,t,Rh)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Zn.crossVectors(n,Je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Zn.crossVectors(n,Je)),Zn.normalize(),js.crossVectors(Je,Zn),s[0]=Zn.x,s[4]=js.x,s[8]=Je.x,s[1]=Zn.y,s[5]=js.y,s[9]=Je.y,s[2]=Zn.z,s[6]=js.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],h=n[14],S=n[3],M=n[7],b=n[11],N=n[15],C=s[0],R=s[4],B=s[8],et=s[12],_=s[1],y=s[5],G=s[9],V=s[13],k=s[2],Y=s[6],F=s[10],st=s[14],W=s[3],yt=s[7],pt=s[11],mt=s[15];return r[0]=a*C+o*_+l*k+c*W,r[4]=a*R+o*y+l*Y+c*yt,r[8]=a*B+o*G+l*F+c*pt,r[12]=a*et+o*V+l*st+c*mt,r[1]=u*C+f*_+d*k+p*W,r[5]=u*R+f*y+d*Y+p*yt,r[9]=u*B+f*G+d*F+p*pt,r[13]=u*et+f*V+d*st+p*mt,r[2]=g*C+v*_+m*k+h*W,r[6]=g*R+v*y+m*Y+h*yt,r[10]=g*B+v*G+m*F+h*pt,r[14]=g*et+v*V+m*st+h*mt,r[3]=S*C+M*_+b*k+N*W,r[7]=S*R+M*y+b*Y+N*yt,r[11]=S*B+M*G+b*F+N*pt,r[15]=S*et+M*V+b*st+N*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],h=t[15];return g*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*f+e*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],h=t[15],S=f*m*c-v*d*c+v*l*p-o*m*p-f*l*h+o*d*h,M=g*d*c-u*m*c-g*l*p+a*m*p+u*l*h-a*d*h,b=u*v*c-g*f*c+g*o*p-a*v*p-u*o*h+a*f*h,N=g*f*l-u*v*l-g*o*d+a*v*d+u*o*m-a*f*m,C=e*S+n*M+s*b+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=S*R,t[1]=(v*d*r-f*m*r-v*s*p+n*m*p+f*s*h-n*d*h)*R,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*h+n*l*h)*R,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*R,t[4]=M*R,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*h+e*d*h)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*h-e*l*h)*R,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=b*R,t[9]=(g*f*r-u*v*r-g*n*p+e*v*p+u*n*h-e*f*h)*R,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*h+e*o*h)*R,t[11]=(u*o*r-a*f*r-u*n*c+e*f*c+a*n*p-e*o*p)*R,t[12]=N*R,t[13]=(u*v*s-g*f*s+g*n*d-e*v*d-u*n*m+e*f*m)*R,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*R,t[15]=(a*f*s-u*o*s+u*n*l-e*f*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,g=r*f,v=a*u,m=a*f,h=o*f,S=l*c,M=l*u,b=l*f,N=n.x,C=n.y,R=n.z;return s[0]=(1-(v+h))*N,s[1]=(p+b)*N,s[2]=(g-M)*N,s[3]=0,s[4]=(p-b)*C,s[5]=(1-(d+h))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+M)*R,s[9]=(m-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const c=1/r,u=1/a,f=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===On)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ur)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(a-r),d=(e+t)*c,p=(n+s)*u;let g,v;if(o===On)g=(a+r)*f,v=-2*f;else if(o===Ur)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new I,cn=new ge,wh=new I(0,0,0),Rh=new I(1,1,1),Zn=new I,js=new I,Je=new I,sl=new ge,rl=new Gs;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ch=0;const al=new I,Vi=new Gs,Rn=new ge,Qs=new I,bs=new I,Ph=new I,Lh=new Gs,ol=new I(1,0,0),ll=new I(0,1,0),cl=new I(0,0,1),ul={type:"added"},Dh={type:"removed"},Gi={type:"childadded",child:null},na={type:"childremoved",child:null};class Xe extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new I,e=new Mn,n=new Gs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ee}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(bs,Qs,this.up):Rn.lookAt(Qs,bs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new I(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,Cn=new I,ia=new I,Pn=new I,Wi=new I,Xi=new I,hl=new I,sa=new I,ra=new I,aa=new I,oa=new me,la=new me,ca=new me;class pn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Cn.subVectors(n,e),ia.subVectors(t,e);const a=un.dot(un),o=un.dot(Cn),l=un.dot(ia),c=Cn.dot(Cn),u=Cn.dot(ia),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Cn.subVectors(t,e),un.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),sa.subVectors(t,n);const l=Wi.dot(sa),c=Xi.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);const u=Wi.dot(ra),f=Xi.dot(ra);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);aa.subVectors(t,r);const p=Wi.dot(aa),g=Xi.dot(aa);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Xi,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return hl.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(hl,o);const h=1/(m+v+d);return a=v*h,o=d*h,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=No(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ce.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=hn){ce.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(tr);const n=Ls(Jn.h,tr.h,e),s=Ls(Jn.s,tr.s,e),r=Ls(Jn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ne;ne.NAMES=Oc;let Ih=0;class ps extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ns,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Os extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new I,er=new wt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class Bc extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kc extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class kn extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uh=0;const sn=new ge,ha=new Xe,$i=new I,je=new Ws,As=new Ws,Ie=new I;class on extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?kc:Bc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(je.min,As.min),je.expandByPoint(Ie),Ie.addVectors(je.max,As.max),je.expandByPoint(Ie)):(je.expandByPoint(As.min),je.expandByPoint(As.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ie.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),Ie.add($i)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new I,l[B]=new I;const c=new I,u=new I,f=new I,d=new wt,p=new wt,g=new wt,v=new I,m=new I;function h(B,et,_){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,et),f.fromBufferAttribute(n,_),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,et),g.fromBufferAttribute(r,_),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(y),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(y),o[B].add(v),o[et].add(v),o[_].add(v),l[B].add(m),l[et].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let B=0,et=S.length;B<et;++B){const _=S[B],y=_.start,G=_.count;for(let V=y,k=y+G;V<k;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const M=new I,b=new I,N=new I,C=new I;function R(B){N.fromBufferAttribute(s,B),C.copy(N);const et=o[B];M.copy(et),M.sub(N.multiplyScalar(N.dot(et))).normalize(),b.crossVectors(C,et);const y=b.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,y)}for(let B=0,et=S.length;B<et;++B){const _=S[B],y=_.start,G=_.count;for(let V=y,k=y+G;V<k;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Ce(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new ge,pi=new Nc,nr=new Br,fl=new I,ir=new I,sr=new I,rr=new I,da=new I,ar=new I,pl=new I,or=new I;class _e extends Xe{constructor(t=new on,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(da.fromBufferAttribute(f,t),a?ar.addScaledVector(da,u):ar.addScaledVector(da.sub(e),u))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(nr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(nr,fl)===null||pi.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,N=M;b<N;b+=3){const C=o.getX(b),R=o.getX(b+1),B=o.getX(b+2);s=lr(this,h,t,n,c,u,f,C,R,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=lr(this,a,t,n,c,u,f,S,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,N=M;b<N;b+=3){const C=b,R=b+1,B=b+2;s=lr(this,h,t,n,c,u,f,C,R,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=m,M=m+1,b=m+2;s=lr(this,a,t,n,c,u,f,S,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nh(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ii,o),l===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);const u=Nh(i,t,e,n,ir,sr,rr,pl);if(u){const f=new I;pn.getBarycoord(pl,ir,sr,rr,f),s&&(u.uv=pn.getInterpolatedAttribute(s,o,l,c,f,new wt)),r&&(u.uv1=pn.getInterpolatedAttribute(r,o,l,c,f,new wt)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};pn.getNormal(ir,sr,rr,d.normal),u.face=d,u.barycoord=f}return u}class ms extends on{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(f,2));function g(v,m,h,S,M,b,N,C,R,B,et){const _=b/R,y=N/B,G=b/2,V=N/2,k=C/2,Y=R+1,F=B+1;let st=0,W=0;const yt=new I;for(let pt=0;pt<F;pt++){const mt=pt*y-V;for(let Zt=0;Zt<Y;Zt++){const Vt=Zt*_-G;yt[v]=Vt*S,yt[m]=mt*M,yt[h]=k,c.push(yt.x,yt.y,yt.z),yt[v]=0,yt[m]=0,yt[h]=C>0?1:-1,u.push(yt.x,yt.y,yt.z),f.push(Zt/R),f.push(1-pt/B),st+=1}}for(let pt=0;pt<B;pt++)for(let mt=0;mt<R;mt++){const Zt=d+mt+Y*pt,Vt=d+mt+Y*(pt+1),J=d+(mt+1)+Y*(pt+1),ct=d+(mt+1)+Y*pt;l.push(Zt,Vt,ct),l.push(Vt,J,ct),W+=6}o.addGroup(p,W,et),p+=W,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function Fh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Oh={clone:ds,merge:He};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hc extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new I,ml=new wt,gl=new wt;class tn extends Hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class zh extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new tn(qi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new tn(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new tn(qi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new tn(qi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new tn(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vc extends We{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hh extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ei});r.uniforms.tEquirect.value=e;const a=new _e(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=fn),new zh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new I,Vh=new I,Gh=new ee;class xi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Br,cr=new I;class Fo{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],S=s[13],M=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-h).normalize(),n[1].setComponents(l+r,d+c,m+p,b+h).normalize(),n[2].setComponents(l+a,d+u,m+g,b+S).normalize(),n[3].setComponents(l-a,d-u,m-g,b-S).normalize(),n[4].setComponents(l-o,d-f,m-v,b-M).normalize(),e===On)n[5].setComponents(l+o,d+f,m+v,b+M).normalize();else if(e===Ur)n[5].setComponents(o,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wh(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ci extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-a;for(let M=0;M<c;M++){const b=M*f-r;g.push(b,-S,0),v.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const M=S+c*h,b=S+c*(h+1),N=S+1+c*(h+1),C=S+1+c*h;p.push(M,b,C),p.push(b,N,C)}this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`
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
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,Gd=`struct PhysicalMaterial {
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
}`,Wd=`
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
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
}`,jf=`#if DEPTH_PACKING == 3200
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
}`,Qf=`#define DISTANCE
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
}`,tp=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,vp=`#define TOON
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
}`,xp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,Ep=`uniform float rotation;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Xh,alphahash_pars_fragment:$h,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:Zh,aomap_fragment:Jh,aomap_pars_fragment:jh,batching_pars_vertex:Qh,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:ad,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:ud,color_pars_fragment:hd,color_pars_vertex:dd,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:yd,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:Td,envmap_pars_fragment:bd,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Od,envmap_vertex:wd,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Nd,lights_pars_begin:Fd,lights_toon_fragment:Bd,lights_toon_pars_fragment:kd,lights_phong_fragment:zd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:$d,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Zd,map_fragment:Jd,map_pars_fragment:jd,map_particle_fragment:Qd,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:uf,normal_pars_fragment:hf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:vf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:yf,project_vertex:Sf,dithering_fragment:Ef,dithering_pars_fragment:Tf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:If,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:Bf,transmission_fragment:kf,transmission_pars_fragment:zf,uv_pars_fragment:Hf,uv_pars_vertex:Vf,uv_vertex:Gf,worldpos_vertex:Wf,background_vert:Xf,background_frag:$f,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Kf,cube_frag:Zf,depth_vert:Jf,depth_frag:jf,distanceRGBA_vert:Qf,distanceRGBA_frag:tp,equirect_vert:ep,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:vp,points_vert:xp,points_frag:Mp,shadow_vert:yp,shadow_frag:Sp,sprite_vert:Ep,sprite_frag:Tp},bt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},vn={basic:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:He([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:He([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:He([bt.points,bt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:He([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:He([bt.common,bt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:He([bt.sprite,bt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:He([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:He([bt.lights,bt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};vn.physical={uniforms:He([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const ur={r:0,b:0,g:0},gi=new Mn,bp=new ge;function Ap(i,t,e,n,s,r,a){const o=new ne(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const b=g(S);b===null?h(o,l):b&&b.isColor&&(h(b,1),M=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===Fr)?(u===void 0&&(u=new _e(new ms(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ds(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(M.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(gi)),u.material.toneMapped=ce.getTransfer(b.colorSpace)!==ve,(f!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new _e(new Ci(2,2),new gn({name:"BackgroundMaterial",uniforms:ds(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ce.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,M){S.getRGB(ur,zc(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:v,addToRenderList:m}}function wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,y,G,V,k){let Y=!1;const F=f(V,G,y);r!==F&&(r=F,c(r.object)),Y=p(_,V,G,k),Y&&g(_,V,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(_,y,G,V),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function f(_,y,G){const V=G.wireframe===!0;let k=n[_.id];k===void 0&&(k={},n[_.id]=k);let Y=k[y.id];Y===void 0&&(Y={},k[y.id]=Y);let F=Y[V];return F===void 0&&(F=d(l()),Y[V]=F),F}function d(_){const y=[],G=[],V=[];for(let k=0;k<e;k++)y[k]=0,G[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:G,attributeDivisors:V,object:_,attributes:{},index:null}}function p(_,y,G,V){const k=r.attributes,Y=y.attributes;let F=0;const st=G.getAttributes();for(const W in st)if(st[W].location>=0){const pt=k[W];let mt=Y[W];if(mt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),pt===void 0||pt.attribute!==mt||mt&&pt.data!==mt.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function g(_,y,G,V){const k={},Y=y.attributes;let F=0;const st=G.getAttributes();for(const W in st)if(st[W].location>=0){let pt=Y[W];pt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const mt={};mt.attribute=pt,pt&&pt.data&&(mt.data=pt.data),k[W]=mt,F++}r.attributes=k,r.attributesNum=F,r.index=V}function v(){const _=r.newAttributes;for(let y=0,G=_.length;y<G;y++)_[y]=0}function m(_){h(_,0)}function h(_,y){const G=r.newAttributes,V=r.enabledAttributes,k=r.attributeDivisors;G[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),k[_]!==y&&(i.vertexAttribDivisor(_,y),k[_]=y)}function S(){const _=r.newAttributes,y=r.enabledAttributes;for(let G=0,V=y.length;G<V;G++)y[G]!==_[G]&&(i.disableVertexAttribArray(G),y[G]=0)}function M(_,y,G,V,k,Y,F){F===!0?i.vertexAttribIPointer(_,y,G,k,Y):i.vertexAttribPointer(_,y,G,V,k,Y)}function b(_,y,G,V){v();const k=V.attributes,Y=G.getAttributes(),F=y.defaultAttributeValues;for(const st in Y){const W=Y[st];if(W.location>=0){let yt=k[st];if(yt===void 0&&(st==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),st==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),yt!==void 0){const pt=yt.normalized,mt=yt.itemSize,Zt=t.get(yt);if(Zt===void 0)continue;const Vt=Zt.buffer,J=Zt.type,ct=Zt.bytesPerElement,ft=J===i.INT||J===i.UNSIGNED_INT||yt.gpuType===Ro;if(yt.isInterleavedBufferAttribute){const vt=yt.data,Ot=vt.stride,Bt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)h(W.location+kt,vt.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let kt=0;kt<W.locationSize;kt++)M(W.location+kt,mt/W.locationSize,J,pt,Ot*ct,(Bt+mt/W.locationSize*kt)*ct,ft)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<W.locationSize;vt++)h(W.location+vt,yt.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<W.locationSize;vt++)m(W.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let vt=0;vt<W.locationSize;vt++)M(W.location+vt,mt/W.locationSize,J,pt,mt*ct,mt/W.locationSize*vt*ct,ft)}}else if(F!==void 0){const pt=F[st];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}S()}function N(){B();for(const _ in n){const y=n[_];for(const G in y){const V=y[G];for(const k in V)u(V[k].object),delete V[k];delete y[G]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const G in y){const V=y[G];for(const k in V)u(V[k].object),delete V[k];delete y[G]}delete n[_.id]}function R(_){for(const y in n){const G=n[y];if(G[_.id]===void 0)continue;const V=G[_.id];for(const k in V)u(V[k].object),delete V[k];delete G[_.id]}}function B(){et(),a=!0,r!==s&&(r=s,c(r.object))}function et(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:et,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Rp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const B=R===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!B)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:N,maxSamples:C}}function Pp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new xi,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,M=S*4;let b=h.clippingState||null;l.value=b,b=u(g,d,M,p);for(let N=0;N!==M;++N)b[N]=e[N];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,b=p;M!==v;++M,b+=4)a.copy(f[M]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Lp(i){let t=new WeakMap;function e(a,o){return o===Ha?a.mapping=ls:o===Va&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ha||o===Va)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Dp extends Hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,_l=[.125,.215,.35,.446,.526,.582],Ei=20,pa=new Dp,vl=new ne;let ma=null,ga=0,_a=0,va=!1;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,xl=[new I(-Mi,Ki,0),new I(Mi,Ki,0),new I(-Ki,0,Mi),new I(Ki,0,Mi),new I(0,Mi,-Ki),new I(0,Mi,Ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Vs,format:mn,colorSpace:ri,depthBuffer:!1},s=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(r)),this._blurMaterial=Up(r,t,e)}return s}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){const o=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vl),u.toneMapping=ni,u.autoClear=!1;const p=new Os({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new _e(new ms,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(vl),v=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;hr(s,S*M,h>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _e(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const h=[];let S=0;for(let R=0;R<Ei;++R){const B=R/v,et=Math.exp(-B*B/2);h.push(et),R===0?S+=et:R<m&&(S+=2*et)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const b=this._sizeLods[s],N=3*b*(s>M-Qi?s-M+Qi:0),C=4*(this._cubeSize-b);hr(e,N,C,3*b,2*b),l.setRenderTarget(e),l.render(f,pa)}}function Ip(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Qi?l=_l[a-i+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,S=new Float32Array(v*g*p),M=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,B=C>2?0:-1,et=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];S.set(et,v*g*C),M.set(d,m*g*C);const _=[C,C,C,C,C,C];b.set(_,h*g*C)}const N=new on;N.setAttribute("position",new Ce(S,v)),N.setAttribute("uv",new Ce(M,m)),N.setAttribute("faceIndex",new Ce(b,h)),t.push(N),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Up(i,t,e){const n=new Float32Array(Ei),s=new I(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yl(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Sl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function Np(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ha||l===Va,u=l===ls||l===cs;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new vo(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new vo(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Op(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let M=0,b=S.length;M<b;M+=3){const N=S[M+0],C=S[M+1],R=S[M+2];d.push(N,C,C,R,R,N)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){const N=M+0,C=M+1,R=M+2;d.push(N,C,C,R,R,N)}}else return;const m=new(Dc(d)?kc:Bc)(d,1);m.version=v;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Bp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function f(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S];for(let S=0;S<v.length;S++)e.update(h,n,v[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zp(i,t,e){const n=new WeakMap,s=new me;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let et=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",et)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*N*4*f),R=new Uc(C,b,N,f);R.type=Fn,R.needsUpdate=!0;const B=M*4;for(let _=0;_<f;_++){const y=m[_],G=h[_],V=S[_],k=b*N*4*_;for(let Y=0;Y<y.count;Y++){const F=Y*B;p===!0&&(s.fromBufferAttribute(y,Y),C[k+F+0]=s.x,C[k+F+1]=s.y,C[k+F+2]=s.z,C[k+F+3]=0),g===!0&&(s.fromBufferAttribute(G,Y),C[k+F+4]=s.x,C[k+F+5]=s.y,C[k+F+6]=s.z,C[k+F+7]=0),v===!0&&(s.fromBufferAttribute(V,Y),C[k+F+8]=s.x,C[k+F+9]=s.y,C[k+F+10]=s.z,C[k+F+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new wt(b,N)},n.set(o,d),o.addEventListener("dispose",et)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Wc extends We{constructor(t,e,n,s,r,a,o,l,c,u=is){if(u!==is&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===is&&(n=wi),n===void 0&&u===hs&&(n=us),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xc=new We,El=new Wc(1,1),$c=new Uc,qc=new bh,Yc=new Vc,Tl=[],bl=[],Al=new Float32Array(16),wl=new Float32Array(9),Rl=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Le(e,n)}}function qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),Le(e,n)}}function Yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),Le(e,n)}}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(El.compareFunction=Lc,r=El):r=Xc,e.setTexture2D(t||r,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qc,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yc,s)}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$c,s)}function om(i){switch(i){case 5126:return Vp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return $p;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}function lm(i,t){i.uniform1fv(this.addr,t)}function cm(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function um(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function hm(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function dm(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fm(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pm(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mm(i,t){i.uniform1iv(this.addr,t)}function gm(i,t){i.uniform2iv(this.addr,t)}function _m(i,t){i.uniform3iv(this.addr,t)}function vm(i,t){i.uniform4iv(this.addr,t)}function xm(i,t){i.uniform1uiv(this.addr,t)}function Mm(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function Sm(i,t){i.uniform4uiv(this.addr,t)}function Em(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Xc,r[a])}function Tm(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qc,r[a])}function bm(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yc,r[a])}function Am(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$c,r[a])}function wm(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return hm;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Am}}class Rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=om(e.type)}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wm(e.type)}}class Pm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function Lm(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cl(e,c===void 0?new Rm(o,i,t):new Cm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Pm(o),Cl(e,f)),e=f}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Pl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dm=37297;let Im=0;function Um(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Nm(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===Ir&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case Or:return[n,"LinearTransferOETF"];case hn:case Uo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Um(i.getShaderSource(t),a)}else return s}function Fm(i,t){const e=Nm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Om(i,t){let e;switch(t){case Ou:e="Linear";break;case Bu:e="Reinhard";break;case ku:e="Cineon";break;case zu:e="ACESFilmic";break;case Vu:e="AgX";break;case vc:e="Neutral";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new I;function Bm(){ce.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function zm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Cs(i){return i!==""}function Dl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(Vm,Wm)}const Gm=new Map;function Wm(i,t){let e=te[t];if(e===void 0){const n=Gm.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const Xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(Xm,$m)}function $m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Km(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(t="ENVMAP_MODE_REFRACTION"),t}function Zm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qm(e),c=Ym(e),u=Km(e),f=Zm(e),d=Jm(e),p=km(e),g=zm(r),v=s.createProgram();let m,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),h.length>0&&(h+=`
`)):(m=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),h=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?te.tonemapping_pars_fragment:"",e.toneMapping!==ni?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Fm("linearToOutputTexel",e.outputColorSpace),Bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=xo(a),a=Dl(a,e),a=Il(a,e),o=xo(o),o=Dl(o,e),o=Il(o,e),a=Ul(a),o=Ul(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=S+m+a,b=S+h+o,N=Pl(s,s.VERTEX_SHADER,M),C=Pl(s,s.FRAGMENT_SHADER,b);s.attachShader(v,N),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(y){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(N).trim(),k=s.getShaderInfoLog(C).trim();let Y=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,N,C);else{const st=Ll(s,N,"vertex"),W=Ll(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+G+`
`+st+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||k==="")&&(F=!1);F&&(y.diagnostics={runnable:Y,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:h}})}s.deleteShader(N),s.deleteShader(C),B=new Cr(s,v),et=Hm(s,v)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let et;this.getAttributes=function(){return et===void 0&&R(this),et};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Dm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=C,this}let Qm=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new eg(t),e.set(t,n)),n}}class eg{constructor(t){this.id=Qm++,this.code=t,this.usedTimes=0}}function ng(i,t,e,n,s,r,a){const o=new Fc,l=new tg,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,y,G,V,k){const Y=V.fog,F=k.geometry,st=_.isMeshStandardMaterial?V.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||st),yt=W&&W.mapping===Fr?W.image.height:null,pt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=mt!==void 0?mt.length:0;let Vt=0;F.morphAttributes.position!==void 0&&(Vt=1),F.morphAttributes.normal!==void 0&&(Vt=2),F.morphAttributes.color!==void 0&&(Vt=3);let J,ct,ft,vt;if(pt){const Fe=vn[pt];J=Fe.vertexShader,ct=Fe.fragmentShader}else J=_.vertexShader,ct=_.fragmentShader,l.update(_),ft=l.getVertexShaderID(_),vt=l.getFragmentShaderID(_);const Ot=i.getRenderTarget(),Bt=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,tt=!!_.map,U=!!_.matcap,E=!!W,ot=!!_.aoMap,ht=!!_.lightMap,lt=!!_.bumpMap,xt=!!_.normalMap,Ut=!!_.displacementMap,Tt=!!_.emissiveMap,A=!!_.metalnessMap,x=!!_.roughnessMap,H=_.anisotropy>0,K=_.clearcoat>0,$=_.dispersion>0,Z=_.iridescence>0,Nt=_.sheen>0,Et=_.transmission>0,Pt=H&&!!_.anisotropyMap,ie=K&&!!_.clearcoatMap,dt=K&&!!_.clearcoatNormalMap,Ct=K&&!!_.clearcoatRoughnessMap,$t=Z&&!!_.iridescenceMap,Gt=Z&&!!_.iridescenceThicknessMap,Dt=Nt&&!!_.sheenColorMap,Qt=Nt&&!!_.sheenRoughnessMap,Xt=!!_.specularMap,de=!!_.specularColorMap,O=!!_.specularIntensityMap,Lt=Et&&!!_.transmissionMap,q=Et&&!!_.thicknessMap,rt=!!_.gradientMap,At=!!_.alphaMap,Rt=_.alphaTest>0,se=!!_.alphaHash,Ee=!!_.extensions;let Te=ni;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Te=i.toneMapping);const ae={shaderID:pt,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:ct,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&k.instanceColor!==null,instancingMorph:Bt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ri,alphaToCoverage:!!_.alphaToCoverage,map:tt,matcap:U,envMap:E,envMapMode:E&&W.mapping,envMapCubeUVHeight:yt,aoMap:ot,lightMap:ht,bumpMap:lt,normalMap:xt,displacementMap:p&&Ut,emissiveMap:Tt,normalMapObjectSpace:xt&&_.normalMapType===$u,normalMapTangentSpace:xt&&_.normalMapType===Pc,metalnessMap:A,roughnessMap:x,anisotropy:H,anisotropyMap:Pt,clearcoat:K,clearcoatMap:ie,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ct,dispersion:$,iridescence:Z,iridescenceMap:$t,iridescenceThicknessMap:Gt,sheen:Nt,sheenColorMap:Dt,sheenRoughnessMap:Qt,specularMap:Xt,specularColorMap:de,specularIntensityMap:O,transmission:Et,transmissionMap:Lt,thicknessMap:q,gradientMap:rt,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:At,alphaTest:Rt,alphaHash:se,combine:_.combine,mapUv:tt&&m(_.map.channel),aoMapUv:ot&&m(_.aoMap.channel),lightMapUv:ht&&m(_.lightMap.channel),bumpMapUv:lt&&m(_.bumpMap.channel),normalMapUv:xt&&m(_.normalMap.channel),displacementMapUv:Ut&&m(_.displacementMap.channel),emissiveMapUv:Tt&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:x&&m(_.roughnessMap.channel),anisotropyMapUv:Pt&&m(_.anisotropyMap.channel),clearcoatMapUv:ie&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&m(_.sheenRoughnessMap.channel),specularMapUv:Xt&&m(_.specularMap.channel),specularColorMapUv:de&&m(_.specularColorMap.channel),specularIntensityMapUv:O&&m(_.specularIntensityMap.channel),transmissionMapUv:Lt&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:At&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xt||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(tt||At),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:tt&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nn,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function S(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)y.push(G),y.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(M(y,_),b(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function N(_){const y=v[_.type];let G;if(y){const V=vn[y];G=Oh.clone(V.uniforms)}else G=_.uniforms;return G}function C(_,y){let G;for(let V=0,k=u.length;V<k;V++){const Y=u[V];if(Y.cacheKey===y){G=Y,++G.usedTimes;break}}return G===void 0&&(G=new jm(i,y,_,r),u.push(G)),G}function R(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function B(_){l.remove(_)}function et(){l.dispose()}return{getParameters:h,getProgramCacheKey:S,getUniforms:N,acquireProgram:C,releaseProgram:R,releaseShaderCache:B,programs:u,dispose:et}}function ig(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,p,g,v,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),t++,h}function o(f,d,p,g,v,m){const h=a(f,d,p,g,v,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,g,v,m){const h=a(f,d,p,g,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||sg),n.length>1&&n.sort(d||Fl),s.length>1&&s.sort(d||Fl)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function rg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ol,i.set(n,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ne};break;case"SpotLight":e={position:new I,direction:new I,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lg=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ug(i){const t=new ag,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ge,a=new ge;function o(c){let u=0,f=0,d=0;for(let et=0;et<9;et++)n.probe[et].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,S=0,M=0,b=0,N=0,C=0,R=0;c.sort(cg);for(let et=0,_=c.length;et<_;et++){const y=c[et],G=y.color,V=y.intensity,k=y.distance,Y=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=G.r*V,f+=G.g*V,d+=G.b*V;else if(y.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(y.sh.coefficients[F],V);R++}else if(y.isDirectionalLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const st=y.shadow,W=e.get(y);W.shadowIntensity=st.intensity,W.shadowBias=st.bias,W.shadowNormalBias=st.normalBias,W.shadowRadius=st.radius,W.shadowMapSize=st.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=y.shadow.matrix,S++}n.directional[p]=F,p++}else if(y.isSpotLight){const F=t.get(y);F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(G).multiplyScalar(V),F.distance=k,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,n.spot[v]=F;const st=y.shadow;if(y.map&&(n.spotLightMap[N]=y.map,N++,st.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[v]=st.matrix,y.castShadow){const W=e.get(y);W.shadowIntensity=st.intensity,W.shadowBias=st.bias,W.shadowNormalBias=st.normalBias,W.shadowRadius=st.radius,W.shadowMapSize=st.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Y,b++}v++}else if(y.isRectAreaLight){const F=t.get(y);F.color.copy(G).multiplyScalar(V),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),n.rectArea[m]=F,m++}else if(y.isPointLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),F.distance=y.distance,F.decay=y.decay,y.castShadow){const st=y.shadow,W=e.get(y);W.shadowIntensity=st.intensity,W.shadowBias=st.bias,W.shadowNormalBias=st.normalBias,W.shadowRadius=st.radius,W.shadowMapSize=st.mapSize,W.shadowCameraNear=st.camera.near,W.shadowCameraFar=st.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=y.shadow.matrix,M++}n.point[g]=F,g++}else if(y.isHemisphereLight){const F=t.get(y);F.skyColor.copy(y.color).multiplyScalar(V),F.groundColor.copy(y.groundColor).multiplyScalar(V),n.hemi[h]=F,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==h||B.numDirectionalShadows!==S||B.numPointShadows!==M||B.numSpotShadows!==b||B.numSpotMaps!==N||B.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,B.directionalLength=p,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=h,B.numDirectionalShadows=S,B.numPointShadows=M,B.numSpotShadows=b,B.numSpotMaps=N,B.numLightProbes=R,n.version=lg++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const M=c[h];if(M.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Bl(i){const t=new ug(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bl(i),t.set(s,[o])):r>=a.length?(o=new Bl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class dg extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fg extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(i,t,e){let n=new Fo;const s=new wt,r=new wt,a=new me,o=new dg({depthPacking:Xu}),l=new fg,c={},u=e.maxTextureSize,f={[ii]:Ge,[Ge]:ii,[Nn]:Nn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let h=this.type;this.render=function(C,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const et=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=h!==In&&this.type===In,k=h===In&&this.type!==In;for(let Y=0,F=C.length;Y<F;Y++){const st=C[Y],W=st.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const yt=W.getFrameExtents();if(s.multiply(yt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,W.mapSize.y=r.y)),W.map===null||V===!0||k===!0){const mt=this.type!==In?{minFilter:an,magFilter:an}:{};W.map!==null&&W.map.dispose(),W.map=new Ri(s.x,s.y,mt),W.map.texture.name=st.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let mt=0;mt<pt;mt++){const Zt=W.getViewport(mt);a.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),G.viewport(a),W.updateMatrices(st,mt),n=W.getFrustum(),b(R,B,W.camera,st,this.type)}W.isPointLightShadow!==!0&&this.type===In&&S(W,B),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(et,_,y)};function S(C,R){const B=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,B,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,B,p,v,null)}function M(C,R,B,et){let _=null;const y=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)_=y;else if(_=B.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=_.uuid,V=R.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let Y=k[V];Y===void 0&&(Y=_.clone(),k[V]=Y,R.addEventListener("dispose",N)),_=Y}if(_.visible=R.visible,_.wireframe=R.wireframe,et===In?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:f[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=B}return _}function b(C,R,B,et,_){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===In)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const V=t.update(C),k=C.material;if(Array.isArray(k)){const Y=V.groups;for(let F=0,st=Y.length;F<st;F++){const W=Y[F],yt=k[W.materialIndex];if(yt&&yt.visible){const pt=M(C,yt,et,_);C.onBeforeShadow(i,C,R,B,V,pt,W),i.renderBufferDirect(B,null,V,pt,C,W),C.onAfterShadow(i,C,R,B,V,pt,W)}}}else if(k.visible){const Y=M(C,k,et,_);C.onBeforeShadow(i,C,R,B,V,Y,null),i.renderBufferDirect(B,null,V,Y,C,null),C.onAfterShadow(i,C,R,B,V,Y,null)}}const G=C.children;for(let V=0,k=G.length;V<k;V++)b(G[V],R,B,et,_)}function N(C){C.target.removeEventListener("dispose",N);for(const B in c){const et=c[B],_=C.target.uuid;_ in et&&(et[_].dispose(),delete et[_])}}}const _g={[Ua]:Na,[Fa]:ka,[Oa]:za,[os]:Ba,[Na]:Ua,[ka]:Fa,[za]:Oa,[Ba]:os};function vg(i){function t(){let O=!1;const Lt=new me;let q=null;const rt=new me(0,0,0,0);return{setMask:function(At){q!==At&&!O&&(i.colorMask(At,At,At,At),q=At)},setLocked:function(At){O=At},setClear:function(At,Rt,se,Ee,Te){Te===!0&&(At*=Ee,Rt*=Ee,se*=Ee),Lt.set(At,Rt,se,Ee),rt.equals(Lt)===!1&&(i.clearColor(At,Rt,se,Ee),rt.copy(Lt))},reset:function(){O=!1,q=null,rt.set(-1,0,0,0)}}}function e(){let O=!1,Lt=!1,q=null,rt=null,At=null;return{setReversed:function(Rt){Lt=Rt},setTest:function(Rt){Rt?ft(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Rt){q!==Rt&&!O&&(i.depthMask(Rt),q=Rt)},setFunc:function(Rt){if(Lt&&(Rt=_g[Rt]),rt!==Rt){switch(Rt){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Rt}},setLocked:function(Rt){O=Rt},setClear:function(Rt){At!==Rt&&(i.clearDepth(Rt),At=Rt)},reset:function(){O=!1,q=null,rt=null,At=null}}}function n(){let O=!1,Lt=null,q=null,rt=null,At=null,Rt=null,se=null,Ee=null,Te=null;return{setTest:function(ae){O||(ae?ft(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!O&&(i.stencilMask(ae),Lt=ae)},setFunc:function(ae,Fe,Ke){(q!==ae||rt!==Fe||At!==Ke)&&(i.stencilFunc(ae,Fe,Ke),q=ae,rt=Fe,At=Ke)},setOp:function(ae,Fe,Ke){(Rt!==ae||se!==Fe||Ee!==Ke)&&(i.stencilOp(ae,Fe,Ke),Rt=ae,se=Fe,Ee=Ke)},setLocked:function(ae){O=ae},setClear:function(ae){Te!==ae&&(i.clearStencil(ae),Te=ae)},reset:function(){O=!1,Lt=null,q=null,rt=null,At=null,Rt=null,se=null,Ee=null,Te=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,S=null,M=null,b=null,N=null,C=new ne(0,0,0),R=0,B=!1,et=null,_=null,y=null,G=null,V=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,F=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(st)[1]),Y=F>=1):st.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),Y=F>=2);let W=null,yt={};const pt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Zt=new me().fromArray(pt),Vt=new me().fromArray(mt);function J(O,Lt,q,rt){const At=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(O,Rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<q;se++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Lt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Rt}const ct={};ct[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(os),ht(!1),lt(Xo),ft(i.CULL_FACE),E(ei);function ft(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function vt(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Ot(O,Lt){return u[O]!==Lt?(i.bindFramebuffer(O,Lt),u[O]=Lt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Lt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Bt(O,Lt){let q=d,rt=!1;if(O){q=f.get(Lt),q===void 0&&(q=[],f.set(Lt,q));const At=O.textures;if(q.length!==At.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,se=At.length;Rt<se;Rt++)q[Rt]=i.COLOR_ATTACHMENT0+Rt;q.length=At.length,rt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,rt=!0);rt&&i.drawBuffers(q)}function kt(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const tt={[Si]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};tt[Mu]=i.MIN,tt[yu]=i.MAX;const U={[Su]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Au]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function E(O,Lt,q,rt,At,Rt,se,Ee,Te,ae){if(O===ei){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),O!==_u){if(O!==v||ae!==B){if((m!==Si||M!==Si)&&(i.blendEquation(i.FUNC_ADD),m=Si,M=Si),ae)switch(O){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}h=null,S=null,b=null,N=null,C.set(0,0,0),R=0,v=O,B=ae}return}At=At||Lt,Rt=Rt||q,se=se||rt,(Lt!==m||At!==M)&&(i.blendEquationSeparate(tt[Lt],tt[At]),m=Lt,M=At),(q!==h||rt!==S||Rt!==b||se!==N)&&(i.blendFuncSeparate(U[q],U[rt],U[Rt],U[se]),h=q,S=rt,b=Rt,N=se),(Ee.equals(C)===!1||Te!==R)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Te),C.copy(Ee),R=Te),v=O,B=!1}function ot(O,Lt){O.side===Nn?vt(i.CULL_FACE):ft(i.CULL_FACE);let q=O.side===Ge;Lt&&(q=!q),ht(q),O.blending===ns&&O.transparent===!1?E(ei):E(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){et!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),et=O)}function lt(O){O!==pu?(ft(i.CULL_FACE),O!==_&&(O===Xo?i.cullFace(i.BACK):O===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),_=O}function xt(O){O!==y&&(Y&&i.lineWidth(O),y=O)}function Ut(O,Lt,q){O?(ft(i.POLYGON_OFFSET_FILL),(G!==Lt||V!==q)&&(i.polygonOffset(Lt,q),G=Lt,V=q)):vt(i.POLYGON_OFFSET_FILL)}function Tt(O){O?ft(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+k-1),W!==O&&(i.activeTexture(O),W=O)}function x(O,Lt,q){q===void 0&&(W===null?q=i.TEXTURE0+k-1:q=W);let rt=yt[q];rt===void 0&&(rt={type:void 0,texture:void 0},yt[q]=rt),(rt.type!==O||rt.texture!==Lt)&&(W!==q&&(i.activeTexture(q),W=q),i.bindTexture(O,Lt||ct[O]),rt.type=O,rt.texture=Lt)}function H(){const O=yt[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(O){Zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function Dt(O){Vt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Vt.copy(O))}function Qt(O,Lt){let q=l.get(Lt);q===void 0&&(q=new WeakMap,l.set(Lt,q));let rt=q.get(O);rt===void 0&&(rt=i.getUniformBlockIndex(Lt,O.name),q.set(O,rt))}function Xt(O,Lt){const rt=l.get(Lt).get(O);o.get(Lt)!==rt&&(i.uniformBlockBinding(Lt,rt,O.__bindingPointIndex),o.set(Lt,rt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,yt={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,S=null,M=null,b=null,N=null,C=new ne(0,0,0),R=0,B=!1,et=null,_=null,y=null,G=null,V=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:vt,bindFramebuffer:Ot,drawBuffers:Bt,useProgram:kt,setBlending:E,setMaterial:ot,setFlipSided:ht,setCullFace:lt,setLineWidth:xt,setPolygonOffset:Ut,setScissorTest:Tt,activeTexture:A,bindTexture:x,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Ct,texImage3D:$t,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ie,texStorage3D:dt,texSubImage2D:Z,texSubImage3D:Nt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Pt,scissor:Gt,viewport:Dt,reset:de}}function kl(i,t,e,n){const s=xg(n);switch(e){case Ec:return i*t;case bc:return i*t;case Ac:return i*t*2;case wc:return i*t/s.components*s.byteLength;case Lo:return i*t/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case Tc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wr:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cc:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(i){switch(i){case zn:case Mc:return{byteLength:1,components:1};case Ns:case yc:case Vs:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case wi:case Ro:case Fn:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):Nr("canvas")}function v(A,x,H){let K=1;const $=Tt(A);if(($.width>H||$.height>H)&&(K=H/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(K*$.width),Nt=Math.floor(K*$.height);f===void 0&&(f=g(Z,Nt));const Et=x?g(Z,Nt):f;return Et.width=Z,Et.height=Nt,Et.getContext("2d").drawImage(A,0,0,Z,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Nt+")."),Et}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==an&&A.minFilter!==fn}function h(A){i.generateMipmap(A)}function S(A,x,H,K,$=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=x;if(x===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){const Nt=$?Lr:ce.getTransfer(K);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=Nt===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(A,x){let H;return A?x===null||x===wi||x===us?H=i.DEPTH24_STENCIL8:x===Fn?H=i.DEPTH32F_STENCIL8:x===Ns&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===us?H=i.DEPTH_COMPONENT24:x===Fn?H=i.DEPTH_COMPONENT32F:x===Ns&&(H=i.DEPTH_COMPONENT16),H}function b(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function N(A){const x=A.target;x.removeEventListener("dispose",N),R(x),x.isVideoTexture&&u.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),et(x)}function R(A){const x=n.get(A);if(x.__webglInit===void 0)return;const H=A.source,K=d.get(H);if(K){const $=K[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&B(A),Object.keys(K).length===0&&d.delete(H)}n.remove(A)}function B(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const H=A.source,K=d.get(H);delete K[x.__cacheKey],a.memory.textures--}function et(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let $=0;$<x.__webglFramebuffer[K].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[K][$]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let K=0,$=H.length;K<$;K++){const Z=n.get(H[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(A)}let _=0;function y(){_=0}function G(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function k(A,x){const H=n.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(H,A,x);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function Y(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Vt(H,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function F(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Vt(H,A,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function st(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const W={[Ga]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},yt={[an]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},pt={[qu]:i.NEVER,[Qu]:i.ALWAYS,[Yu]:i.LESS,[Lc]:i.LEQUAL,[Ku]:i.EQUAL,[ju]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function mt(A,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===$r||x.magFilter===$s||x.magFilter===bi||x.minFilter===fn||x.minFilter===$r||x.minFilter===$s||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==$s&&x.minFilter!==bi||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",N));const K=x.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const Z=V(x);if(Z!==A.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[Z].usedTimes++;const Nt=$[A.__cacheKey];Nt!==void 0&&($[A.__cacheKey].usedTimes--,Nt.usedTimes===0&&B(x)),A.__cacheKey=Z,A.__webglTexture=$[Z].texture}return H}function Vt(A,x,H){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const $=Zt(A,x),Z=x.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+H);const Nt=n.get(Z);if(Z.version!==Nt.__version||$===!0){e.activeTexture(i.TEXTURE0+H);const Et=ce.getPrimaries(ce.workingColorSpace),Pt=x.colorSpace===Qn?null:ce.getPrimaries(x.colorSpace),ie=x.colorSpace===Qn||Et===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let dt=v(x.image,!1,s.maxTextureSize);dt=Ut(x,dt);const Ct=r.convert(x.format,x.colorSpace),$t=r.convert(x.type);let Gt=S(x.internalFormat,Ct,$t,x.colorSpace,x.isVideoTexture);mt(K,x);let Dt;const Qt=x.mipmaps,Xt=x.isVideoTexture!==!0,de=Nt.__version===void 0||$===!0,O=Z.dataReady,Lt=b(x,dt);if(x.isDepthTexture)Gt=M(x.format===hs,x.type),de&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Ct,$t,null));else if(x.isDataTexture)if(Qt.length>0){Xt&&de&&e.texStorage2D(i.TEXTURE_2D,Lt,Gt,Qt[0].width,Qt[0].height);for(let q=0,rt=Qt.length;q<rt;q++)Dt=Qt[q],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Dt.width,Dt.height,Ct,$t,Dt.data):e.texImage2D(i.TEXTURE_2D,q,Gt,Dt.width,Dt.height,0,Ct,$t,Dt.data);x.generateMipmaps=!1}else Xt?(de&&e.texStorage2D(i.TEXTURE_2D,Lt,Gt,dt.width,dt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,$t,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Ct,$t,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Gt,Qt[0].width,Qt[0].height,dt.depth);for(let q=0,rt=Qt.length;q<rt;q++)if(Dt=Qt[q],x.format!==mn)if(Ct!==null)if(Xt){if(O)if(x.layerUpdates.size>0){const At=kl(Dt.width,Dt.height,x.format,x.type);for(const Rt of x.layerUpdates){const se=Dt.data.subarray(Rt*At/Dt.data.BYTES_PER_ELEMENT,(Rt+1)*At/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Rt,Dt.width,Dt.height,1,Ct,se,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Dt.width,Dt.height,dt.depth,Ct,Dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Gt,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Dt.width,Dt.height,dt.depth,Ct,$t,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Gt,Dt.width,Dt.height,dt.depth,0,Ct,$t,Dt.data)}else{Xt&&de&&e.texStorage2D(i.TEXTURE_2D,Lt,Gt,Qt[0].width,Qt[0].height);for(let q=0,rt=Qt.length;q<rt;q++)Dt=Qt[q],x.format!==mn?Ct!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Dt.width,Dt.height,Ct,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Gt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Dt.width,Dt.height,Ct,$t,Dt.data):e.texImage2D(i.TEXTURE_2D,q,Gt,Dt.width,Dt.height,0,Ct,$t,Dt.data)}else if(x.isDataArrayTexture)if(Xt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Gt,dt.width,dt.height,dt.depth),O)if(x.layerUpdates.size>0){const q=kl(dt.width,dt.height,x.format,x.type);for(const rt of x.layerUpdates){const At=dt.data.subarray(rt*q/dt.data.BYTES_PER_ELEMENT,(rt+1)*q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,Ct,$t,At)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,$t,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Ct,$t,dt.data);else if(x.isData3DTexture)Xt?(de&&e.texStorage3D(i.TEXTURE_3D,Lt,Gt,dt.width,dt.height,dt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,$t,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Ct,$t,dt.data);else if(x.isFramebufferTexture){if(de)if(Xt)e.texStorage2D(i.TEXTURE_2D,Lt,Gt,dt.width,dt.height);else{let q=dt.width,rt=dt.height;for(let At=0;At<Lt;At++)e.texImage2D(i.TEXTURE_2D,At,Gt,q,rt,0,Ct,$t,null),q>>=1,rt>>=1}}else if(Qt.length>0){if(Xt&&de){const q=Tt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Gt,q.width,q.height)}for(let q=0,rt=Qt.length;q<rt;q++)Dt=Qt[q],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct,$t,Dt):e.texImage2D(i.TEXTURE_2D,q,Gt,Ct,$t,Dt);x.generateMipmaps=!1}else if(Xt){if(de){const q=Tt(dt);e.texStorage2D(i.TEXTURE_2D,Lt,Gt,q.width,q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,$t,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Ct,$t,dt);m(x)&&h(K),Nt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function J(A,x,H){if(x.image.length!==6)return;const K=Zt(A,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const Z=n.get($);if($.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Nt=ce.getPrimaries(ce.workingColorSpace),Et=x.colorSpace===Qn?null:ce.getPrimaries(x.colorSpace),Pt=x.colorSpace===Qn||Nt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ie=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,Ct=[];for(let rt=0;rt<6;rt++)!ie&&!dt?Ct[rt]=v(x.image[rt],!0,s.maxCubemapSize):Ct[rt]=dt?x.image[rt].image:x.image[rt],Ct[rt]=Ut(x,Ct[rt]);const $t=Ct[0],Gt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),Qt=S(x.internalFormat,Gt,Dt,x.colorSpace),Xt=x.isVideoTexture!==!0,de=Z.__version===void 0||K===!0,O=$.dataReady;let Lt=b(x,$t);mt(i.TEXTURE_CUBE_MAP,x);let q;if(ie){Xt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Qt,$t.width,$t.height);for(let rt=0;rt<6;rt++){q=Ct[rt].mipmaps;for(let At=0;At<q.length;At++){const Rt=q[At];x.format!==mn?Gt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,0,0,Rt.width,Rt.height,Gt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,Qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,0,0,Rt.width,Rt.height,Gt,Dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At,Qt,Rt.width,Rt.height,0,Gt,Dt,Rt.data)}}}else{if(q=x.mipmaps,Xt&&de){q.length>0&&Lt++;const rt=Tt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct[rt].width,Ct[rt].height,Gt,Dt,Ct[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Ct[rt].width,Ct[rt].height,0,Gt,Dt,Ct[rt].data);for(let At=0;At<q.length;At++){const se=q[At].image[rt].image;Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,0,0,se.width,se.height,Gt,Dt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,Qt,se.width,se.height,0,Gt,Dt,se.data)}}else{Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Gt,Dt,Ct[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Gt,Dt,Ct[rt]);for(let At=0;At<q.length;At++){const Rt=q[At];Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,0,0,Gt,Dt,Rt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,At+1,Qt,Gt,Dt,Rt.image[rt])}}}m(x)&&h(i.TEXTURE_CUBE_MAP),Z.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ct(A,x,H,K,$,Z){const Nt=r.convert(H.format,H.colorSpace),Et=r.convert(H.type),Pt=S(H.internalFormat,Nt,Et,H.colorSpace);if(!n.get(x).__hasExternalTextures){const dt=Math.max(1,x.width>>Z),Ct=Math.max(1,x.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Z,Pt,dt,Ct,x.depth,0,Nt,Et,null):e.texImage2D($,Z,Pt,dt,Ct,0,Nt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,n.get(H).__webglTexture,0,ht(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,$,n.get(H).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=M(x.stencilBuffer,$),Nt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=ht(x);lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Z,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,A)}else{const K=x.textures;for(let $=0;$<K.length;$++){const Z=K[$],Nt=r.convert(Z.format,Z.colorSpace),Et=r.convert(Z.type),Pt=S(Z.internalFormat,Nt,Et,Z.colorSpace),ie=ht(x);H&&lt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Pt,x.width,x.height):lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,$=ht(x);if(x.depthTexture.format===is)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===hs)lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");vt(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),ft(x.__webglDepthbuffer[K],A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ft(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,x,H){const K=n.get(A);x!==void 0&&ct(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ot(A)}function kt(A){const x=A.texture,H=n.get(A),K=n.get(x);A.addEventListener("dispose",C);const $=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Nt=$.length>1;if(Nt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Et]=[];for(let Pt=0;Pt<x.mipmaps.length;Pt++)H.__webglFramebuffer[Et][Pt]=i.createFramebuffer()}else H.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Et=0;Et<x.mipmaps.length;Et++)H.__webglFramebuffer[Et]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let Et=0,Pt=$.length;Et<Pt;Et++){const ie=n.get($[Et]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&lt(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Et=0;Et<$.length;Et++){const Pt=$[Et];H.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Et]);const ie=r.convert(Pt.format,Pt.colorSpace),dt=r.convert(Pt.type),Ct=S(Pt.internalFormat,ie,dt,Pt.colorSpace,A.isXRRenderTarget===!0),$t=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,H.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),mt(i.TEXTURE_CUBE_MAP,x);for(let Et=0;Et<6;Et++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)ct(H.__webglFramebuffer[Et][Pt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Pt);else ct(H.__webglFramebuffer[Et],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let Et=0,Pt=$.length;Et<Pt;Et++){const ie=$[Et],dt=n.get(ie);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),mt(i.TEXTURE_2D,ie),ct(H.__webglFramebuffer,A,ie,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(ie)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,K.__webglTexture),mt(Et,x),x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)ct(H.__webglFramebuffer[Pt],A,x,i.COLOR_ATTACHMENT0,Et,Pt);else ct(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Et,0);m(x)&&h(Et),e.unbindTexture()}A.depthBuffer&&Ot(A)}function tt(A){const x=A.textures;for(let H=0,K=x.length;H<K;H++){const $=x[H];if(m($)){const Z=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get($).__webglTexture;e.bindTexture(Z,Nt),h(Z),e.unbindTexture()}}}const U=[],E=[];function ot(A){if(A.samples>0){if(lt(A)===!1){const x=A.textures,H=A.width,K=A.height;let $=i.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(A),Et=x.length>1;if(Et)for(let Pt=0;Pt<x.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Pt=0;Pt<x.length;Pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const ie=n.get(x[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,$,i.NEAREST),l===!0&&(U.length=0,E.length=0,U.push(i.COLOR_ATTACHMENT0+Pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(U.push(Z),E.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Pt=0;Pt<x.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const ie=n.get(x[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function lt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ut(A,x){const H=A.colorSpace,K=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ri&&H!==Qn&&(ce.getTransfer(H)===ve?(K!==mn||$!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=F,this.setTextureCube=st,this.rebindTextures=Bt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=lt}function yg(i,t){function e(n,s=Qn){let r;const a=ce.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===yc)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===Tc)return i.RGB;if(n===mn)return i.RGBA;if(n===bc)return i.LUMINANCE;if(n===Ac)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Rc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===Er||n===Tr||n===br||n===Ar)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===$a||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===Za)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===mo||n===go||n===_o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Sg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bn extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eg={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:Tg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wg extends fs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new Ag,m=e.getContextAttributes();let h=null,S=null;const M=[],b=[],N=new wt;let C=null;const R=new tn;R.layers.enable(1),R.viewport=new me;const B=new tn;B.layers.enable(2),B.viewport=new me;const et=[R,B],_=new Sg;_.layers.enable(1),_.layers.enable(2);let y=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=M[J];return ct===void 0&&(ct=new Ma,M[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=M[J];return ct===void 0&&(ct=new Ma,M[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=M[J];return ct===void 0&&(ct=new Ma,M[J]=ct),ct.getHandSpace()};function V(J){const ct=b.indexOf(J.inputSource);if(ct===-1)return;const ft=M[ct];ft!==void 0&&(ft.update(J.inputSource,J.frame,c||a),ft.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<M.length;J++){const ct=b[J];ct!==null&&(b[J]=null,M[J].disconnect(ct))}y=null,G=null,v.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,S=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ri(p.framebufferWidth,p.framebufferHeight,{format:mn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,ft=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?hs:is,ft=m.stencil?us:wi);const Ot={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ri(d.textureWidth,d.textureHeight,{format:mn,type:zn,depthTexture:new Wc(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(J){for(let ct=0;ct<J.removed.length;ct++){const ft=J.removed[ct],vt=b.indexOf(ft);vt>=0&&(b[vt]=null,M[vt].disconnect(ft))}for(let ct=0;ct<J.added.length;ct++){const ft=J.added[ct];let vt=b.indexOf(ft);if(vt===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=b.length){b.push(ft),vt=Bt;break}else if(b[Bt]===null){b[Bt]=ft,vt=Bt;break}if(vt===-1)break}const Ot=M[vt];Ot&&Ot.connect(ft)}}const F=new I,st=new I;function W(J,ct,ft){F.setFromMatrixPosition(ct.matrixWorld),st.setFromMatrixPosition(ft.matrixWorld);const vt=F.distanceTo(st),Ot=ct.projectionMatrix.elements,Bt=ft.projectionMatrix.elements,kt=Ot[14]/(Ot[10]-1),tt=Ot[14]/(Ot[10]+1),U=(Ot[9]+1)/Ot[5],E=(Ot[9]-1)/Ot[5],ot=(Ot[8]-1)/Ot[0],ht=(Bt[8]+1)/Bt[0],lt=kt*ot,xt=kt*ht,Ut=vt/(-ot+ht),Tt=Ut*-ot;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const A=kt+Ut,x=tt+Ut,H=lt-Tt,K=xt+(vt-Tt),$=U*tt/x*A,Z=E*tt/x*A;J.projectionMatrix.makePerspective(H,K,$,Z,A,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function yt(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ct=J.near,ft=J.far;v.texture!==null&&(v.depthNear>0&&(ct=v.depthNear),v.depthFar>0&&(ft=v.depthFar)),_.near=B.near=R.near=ct,_.far=B.far=R.far=ft,(y!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,G=_.far);const vt=J.parent,Ot=_.cameras;yt(_,vt);for(let Bt=0;Bt<Ot.length;Bt++)yt(Ot[Bt],vt);Ot.length===2?W(_,R,B):_.projectionMatrix.copy(R.projectionMatrix),pt(J,_,vt)};function pt(J,ct,ft){ft===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(ft.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let mt=null;function Zt(J,ct){if(u=ct.getViewerPose(c||a),g=ct,u!==null){const ft=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let vt=!1;ft.length!==_.cameras.length&&(_.cameras.length=0,vt=!0);for(let Bt=0;Bt<ft.length;Bt++){const kt=ft[Bt];let tt=null;if(p!==null)tt=p.getViewport(kt);else{const E=f.getViewSubImage(d,kt);tt=E.viewport,Bt===0&&(t.setRenderTargetTextures(S,E.colorTexture,d.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(S))}let U=et[Bt];U===void 0&&(U=new tn,U.layers.enable(Bt),U.viewport=new me,et[Bt]=U),U.matrix.fromArray(kt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(kt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(tt.x,tt.y,tt.width,tt.height),Bt===0&&(_.matrix.copy(U.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),vt===!0&&_.cameras.push(U)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Bt=f.getDepthInformation(ft[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,s.renderState)}}for(let ft=0;ft<M.length;ft++){const vt=b[ft],Ot=M[ft];vt!==null&&Ot!==void 0&&Ot.update(vt,ct,c||a)}mt&&mt(J,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Vt=new Gc;Vt.setAnimationLoop(Zt),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const _i=new Mn,Rg=new ge;function Cg(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,zc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,M,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,S,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ge&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ge&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=t.get(h),M=S.envMap,b=S.envMapRotation;M&&(m.envMap.value=M,_i.copy(b),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(_i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=M*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ge&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const b=M.program;n.uniformBlockBinding(S,b)}function c(S,M){let b=s[S.id];b===void 0&&(g(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",m));const N=M.program;n.updateUBOMapping(S,N);const C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function u(S){const M=f();S.__bindingPointIndex=M;const b=i.createBuffer(),N=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],b=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,R=b.length;C<R;C++){const B=Array.isArray(b[C])?b[C]:[b[C]];for(let et=0,_=B.length;et<_;et++){const y=B[et];if(p(y,C,et,N)===!0){const G=y.__offset,V=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let Y=0;Y<V.length;Y++){const F=V[Y],st=v(F);typeof F=="number"||typeof F=="boolean"?(y.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+k,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=0,y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=0,y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=0):(F.toArray(y.__data,k),k+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,b,N){const C=S.value,R=M+"_"+b;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const B=N[R];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return N[R]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(S){const M=S.uniforms;let b=0;const N=16;for(let R=0,B=M.length;R<B;R++){const et=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,y=et.length;_<y;_++){const G=et[_],V=Array.isArray(G.value)?G.value:[G.value];for(let k=0,Y=V.length;k<Y;k++){const F=V[k],st=v(F),W=b%N,yt=W%st.boundary,pt=W+yt;b+=yt,pt!==0&&N-pt<st.storage&&(b+=N-pt),G.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=st.storage}}}const C=b%N;return C>0&&(b+=N-C),S.__size=b,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Lg{constructor(t={}){const{canvas:e=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ni,this.toneMappingExposure=1;const M=this;let b=!1,N=0,C=0,R=null,B=-1,et=null;const _=new me,y=new me;let G=null;const V=new ne(0);let k=0,Y=e.width,F=e.height,st=1,W=null,yt=null;const pt=new me(0,0,Y,F),mt=new me(0,0,Y,F);let Zt=!1;const Vt=new Fo;let J=!1,ct=!1;const ft=new ge,vt=new ge,Ot=new I,Bt=new me,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function U(){return R===null?st:1}let E=n;function ot(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),E===null){const z="webgl2";if(E=ot(z,T),E===null)throw ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,lt,xt,Ut,Tt,A,x,H,K,$,Z,Nt,Et,Pt,ie,dt,Ct,$t,Gt,Dt,Qt,Xt,de,O;function Lt(){ht=new Fp(E),ht.init(),Xt=new yg(E,ht),lt=new Cp(E,ht,t,Xt),xt=new vg(E),lt.reverseDepthBuffer&&xt.buffers.depth.setReversed(!0),Ut=new kp(E),Tt=new ig,A=new Mg(E,ht,xt,Tt,lt,Xt,Ut),x=new Lp(M),H=new Np(M),K=new Wh(E),de=new wp(E,K),$=new Op(E,K,Ut,de),Z=new Hp(E,$,K,Ut),Gt=new zp(E,lt,A),dt=new Pp(Tt),Nt=new ng(M,x,H,ht,lt,de,dt),Et=new Cg(M,Tt),Pt=new rg,ie=new hg(ht),$t=new Ap(M,x,H,xt,Z,d,l),Ct=new gg(M,Z,lt),O=new Pg(E,Ut,lt,xt),Dt=new Rp(E,ht,Ut),Qt=new Bp(E,ht,Ut),Ut.programs=Nt.programs,M.capabilities=lt,M.extensions=ht,M.properties=Tt,M.renderLists=Pt,M.shadowMap=Ct,M.state=xt,M.info=Ut}Lt();const q=new wg(M,E);this.xr=q,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(T){T!==void 0&&(st=T,this.setSize(Y,F,!1))},this.getSize=function(T){return T.set(Y,F)},this.setSize=function(T,z,w=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,F=z,e.width=Math.floor(T*st),e.height=Math.floor(z*st),w===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*st,F*st).floor()},this.setDrawingBufferSize=function(T,z,w){Y=T,F=z,st=w,e.width=Math.floor(T*w),e.height=Math.floor(z*w),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,z,w,D){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,z,w,D),xt.viewport(_.copy(pt).multiplyScalar(st).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,z,w,D){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,z,w,D),xt.scissor(y.copy(mt).multiplyScalar(st).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){xt.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(T=!0,z=!0,w=!0){let D=0;if(T){let P=!1;if(R!==null){const X=R.texture.format;P=X===Io||X===Do||X===Lo}if(P){const X=R.texture.type,nt=X===zn||X===wi||X===Ns||X===us||X===Co||X===Po,at=$t.getClearColor(),ut=$t.getClearAlpha(),gt=at.r,Mt=at.g,_t=at.b;nt?(p[0]=gt,p[1]=Mt,p[2]=_t,p[3]=ut,E.clearBufferuiv(E.COLOR,0,p)):(g[0]=gt,g[1]=Mt,g[2]=_t,g[3]=ut,E.clearBufferiv(E.COLOR,0,g))}else D|=E.COLOR_BUFFER_BIT}z&&(D|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),w&&(D|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Pt.dispose(),ie.dispose(),Tt.dispose(),x.dispose(),H.dispose(),Z.dispose(),de.dispose(),O.dispose(),Nt.dispose(),q.dispose(),q.removeEventListener("sessionstart",_s),q.removeEventListener("sessionend",ai),Ze.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Ut.autoReset,z=Ct.enabled,w=Ct.autoUpdate,D=Ct.needsUpdate,P=Ct.type;Lt(),Ut.autoReset=T,Ct.enabled=z,Ct.autoUpdate=w,Ct.needsUpdate=D,Ct.type=P}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const z=T.target;z.removeEventListener("dispose",se),Ee(z)}function Ee(T){Te(T),Tt.remove(T)}function Te(T){const z=Tt.get(T).programs;z!==void 0&&(z.forEach(function(w){Nt.releaseProgram(w)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,w,D,P,X){z===null&&(z=kt);const nt=P.isMesh&&P.matrixWorld.determinant()<0,at=Gr(T,z,w,D,P);xt.setMaterial(D,nt);let ut=w.index,gt=1;if(D.wireframe===!0){if(ut=$.getWireframeAttribute(w),ut===void 0)return;gt=2}const Mt=w.drawRange,_t=w.attributes.position;let Ht=Mt.start*gt,qt=(Mt.start+Mt.count)*gt;X!==null&&(Ht=Math.max(Ht,X.start*gt),qt=Math.min(qt,(X.start+X.count)*gt)),ut!==null?(Ht=Math.max(Ht,0),qt=Math.min(qt,ut.count)):_t!=null&&(Ht=Math.max(Ht,0),qt=Math.min(qt,_t.count));const Yt=qt-Ht;if(Yt<0||Yt===1/0)return;de.setup(P,D,at,w,ut);let jt,Kt=Dt;if(ut!==null&&(jt=K.get(ut),Kt=Qt,Kt.setIndex(jt)),P.isMesh)D.wireframe===!0?(xt.setLineWidth(D.wireframeLinewidth*U()),Kt.setMode(E.LINES)):Kt.setMode(E.TRIANGLES);else if(P.isLine){let St=D.linewidth;St===void 0&&(St=1),xt.setLineWidth(St*U()),P.isLineSegments?Kt.setMode(E.LINES):P.isLineLoop?Kt.setMode(E.LINE_LOOP):Kt.setMode(E.LINE_STRIP)}else P.isPoints?Kt.setMode(E.POINTS):P.isSprite&&Kt.setMode(E.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Kt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Kt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const St=P._multiDrawStarts,It=P._multiDrawCounts,Ft=P._multiDrawCount,Wt=ut?K.get(ut).bytesPerElement:1,le=Tt.get(D).currentProgram.getUniforms();for(let fe=0;fe<Ft;fe++)le.setValue(E,"_gl_DrawID",fe),Kt.render(St[fe]/Wt,It[fe])}else if(P.isInstancedMesh)Kt.renderInstances(Ht,Yt,P.count);else if(w.isInstancedBufferGeometry){const St=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,It=Math.min(w.instanceCount,St);Kt.renderInstances(Ht,Yt,It)}else Kt.render(Ht,Yt)};function ae(T,z,w){T.transparent===!0&&T.side===Nn&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,Sn(T,z,w),T.side=ii,T.needsUpdate=!0,Sn(T,z,w),T.side=Nn):Sn(T,z,w)}this.compile=function(T,z,w=null){w===null&&(w=T),m=ie.get(w),m.init(z),S.push(m),w.traverseVisible(function(P){P.isLight&&P.layers.test(z.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),T!==w&&T.traverseVisible(function(P){P.isLight&&P.layers.test(z.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const D=new Set;return T.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const X=P.material;if(X)if(Array.isArray(X))for(let nt=0;nt<X.length;nt++){const at=X[nt];ae(at,w,P),D.add(at)}else ae(X,w,P),D.add(X)}),S.pop(),m=null,D},this.compileAsync=function(T,z,w=null){const D=this.compile(T,z,w);return new Promise(P=>{function X(){if(D.forEach(function(nt){Tt.get(nt).currentProgram.isReady()&&D.delete(nt)}),D.size===0){P(T);return}setTimeout(X,10)}ht.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Fe=null;function Ke(T){Fe&&Fe(T)}function _s(){Ze.stop()}function ai(){Ze.start()}const Ze=new Gc;Ze.setAnimationLoop(Ke),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){Fe=T,q.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},q.addEventListener("sessionstart",_s),q.addEventListener("sessionend",ai),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,R),m=ie.get(T,S.length),m.init(z),S.push(m),vt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Vt.setFromProjectionMatrix(vt),ct=this.localClippingEnabled,J=dt.init(this.clippingPlanes,ct),v=Pt.get(T,h.length),v.init(),h.push(v),q.enabled===!0&&q.isPresenting===!0){const X=M.xr.getDepthSensingMesh();X!==null&&Hn(X,z,-1/0,M.sortObjects)}Hn(T,z,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(W,yt),tt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,tt&&$t.addToRenderList(v,T),this.info.render.frame++,J===!0&&dt.beginShadows();const w=m.state.shadowsArray;Ct.render(w,T,z),J===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=v.opaque,P=v.transmissive;if(m.setupLights(),z.isArrayCamera){const X=z.cameras;if(P.length>0)for(let nt=0,at=X.length;nt<at;nt++){const ut=X[nt];vs(D,P,T,ut)}tt&&$t.render(T);for(let nt=0,at=X.length;nt<at;nt++){const ut=X[nt];oi(v,T,ut,ut.viewport)}}else P.length>0&&vs(D,P,T,z),tt&&$t.render(T),oi(v,T,z);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(M,T,z),de.resetDefaultState(),B=-1,et=null,S.pop(),S.length>0?(m=S[S.length-1],J===!0&&dt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Hn(T,z,w,D){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)w=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Vt.intersectsSprite(T)){D&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(vt);const nt=Z.update(T),at=T.material;at.visible&&v.push(T,nt,at,w,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Vt.intersectsObject(T))){const nt=Z.update(T),at=T.material;if(D&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Bt.copy(nt.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(vt)),Array.isArray(at)){const ut=nt.groups;for(let gt=0,Mt=ut.length;gt<Mt;gt++){const _t=ut[gt],Ht=at[_t.materialIndex];Ht&&Ht.visible&&v.push(T,nt,Ht,w,Bt.z,_t)}}else at.visible&&v.push(T,nt,at,w,Bt.z,null)}}const X=T.children;for(let nt=0,at=X.length;nt<at;nt++)Hn(X[nt],z,w,D)}function oi(T,z,w,D){const P=T.opaque,X=T.transmissive,nt=T.transparent;m.setupLightsView(w),J===!0&&dt.setGlobalState(M.clippingPlanes,w),D&&xt.viewport(_.copy(D)),P.length>0&&li(P,z,w),X.length>0&&li(X,z,w),nt.length>0&&li(nt,z,w),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function vs(T,z,w,D){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[D.id]===void 0&&(m.state.transmissionRenderTarget[D.id]=new Ri(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Vs:zn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const X=m.state.transmissionRenderTarget[D.id],nt=D.viewport||_;X.setSize(nt.z,nt.w);const at=M.getRenderTarget();M.setRenderTarget(X),M.getClearColor(V),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),tt&&$t.render(w);const ut=M.toneMapping;M.toneMapping=ni;const gt=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),m.setupLightsView(D),J===!0&&dt.setGlobalState(M.clippingPlanes,D),li(T,w,D),A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let _t=0,Ht=z.length;_t<Ht;_t++){const qt=z[_t],Yt=qt.object,jt=qt.geometry,Kt=qt.material,St=qt.group;if(Kt.side===Nn&&Yt.layers.test(D.layers)){const It=Kt.side;Kt.side=Ge,Kt.needsUpdate=!0,ci(Yt,w,D,jt,Kt,St),Kt.side=It,Kt.needsUpdate=!0,Mt=!0}}Mt===!0&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X))}M.setRenderTarget(at),M.setClearColor(V,k),gt!==void 0&&(D.viewport=gt),M.toneMapping=ut}function li(T,z,w){const D=z.isScene===!0?z.overrideMaterial:null;for(let P=0,X=T.length;P<X;P++){const nt=T[P],at=nt.object,ut=nt.geometry,gt=D===null?nt.material:D,Mt=nt.group;at.layers.test(w.layers)&&ci(at,z,w,ut,gt,Mt)}}function ci(T,z,w,D,P,X){T.onBeforeRender(M,z,w,D,P,X),T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),P.onBeforeRender(M,z,w,D,T,X),P.transparent===!0&&P.side===Nn&&P.forceSinglePass===!1?(P.side=Ge,P.needsUpdate=!0,M.renderBufferDirect(w,z,D,P,T,X),P.side=ii,P.needsUpdate=!0,M.renderBufferDirect(w,z,D,P,T,X),P.side=Nn):M.renderBufferDirect(w,z,D,P,T,X),T.onAfterRender(M,z,w,D,P,X)}function Sn(T,z,w){z.isScene!==!0&&(z=kt);const D=Tt.get(T),P=m.state.lights,X=m.state.shadowsArray,nt=P.state.version,at=Nt.getParameters(T,P.state,X,z,w),ut=Nt.getProgramCacheKey(at);let gt=D.programs;D.environment=T.isMeshStandardMaterial?z.environment:null,D.fog=z.fog,D.envMap=(T.isMeshStandardMaterial?H:x).get(T.envMap||D.environment),D.envMapRotation=D.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,gt===void 0&&(T.addEventListener("dispose",se),gt=new Map,D.programs=gt);let Mt=gt.get(ut);if(Mt!==void 0){if(D.currentProgram===Mt&&D.lightsStateVersion===nt)return xs(T,at),Mt}else at.uniforms=Nt.getUniforms(T),T.onBeforeCompile(at,M),Mt=Nt.acquireProgram(at,ut),gt.set(ut,Mt),D.uniforms=at.uniforms;const _t=D.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(_t.clippingPlanes=dt.uniform),xs(T,at),D.needsLights=Wr(T),D.lightsStateVersion=nt,D.needsLights&&(_t.ambientLightColor.value=P.state.ambient,_t.lightProbe.value=P.state.probe,_t.directionalLights.value=P.state.directional,_t.directionalLightShadows.value=P.state.directionalShadow,_t.spotLights.value=P.state.spot,_t.spotLightShadows.value=P.state.spotShadow,_t.rectAreaLights.value=P.state.rectArea,_t.ltc_1.value=P.state.rectAreaLTC1,_t.ltc_2.value=P.state.rectAreaLTC2,_t.pointLights.value=P.state.point,_t.pointLightShadows.value=P.state.pointShadow,_t.hemisphereLights.value=P.state.hemi,_t.directionalShadowMap.value=P.state.directionalShadowMap,_t.directionalShadowMatrix.value=P.state.directionalShadowMatrix,_t.spotShadowMap.value=P.state.spotShadowMap,_t.spotLightMatrix.value=P.state.spotLightMatrix,_t.spotLightMap.value=P.state.spotLightMap,_t.pointShadowMap.value=P.state.pointShadowMap,_t.pointShadowMatrix.value=P.state.pointShadowMatrix),D.currentProgram=Mt,D.uniformsList=null,Mt}function Xs(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function xs(T,z){const w=Tt.get(T);w.outputColorSpace=z.outputColorSpace,w.batching=z.batching,w.batchingColor=z.batchingColor,w.instancing=z.instancing,w.instancingColor=z.instancingColor,w.instancingMorph=z.instancingMorph,w.skinning=z.skinning,w.morphTargets=z.morphTargets,w.morphNormals=z.morphNormals,w.morphColors=z.morphColors,w.morphTargetsCount=z.morphTargetsCount,w.numClippingPlanes=z.numClippingPlanes,w.numIntersection=z.numClipIntersection,w.vertexAlphas=z.vertexAlphas,w.vertexTangents=z.vertexTangents,w.toneMapping=z.toneMapping}function Gr(T,z,w,D,P){z.isScene!==!0&&(z=kt),A.resetTextureUnits();const X=z.fog,nt=D.isMeshStandardMaterial?z.environment:null,at=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ri,ut=(D.isMeshStandardMaterial?H:x).get(D.envMap||nt),gt=D.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Mt=!!w.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),_t=!!w.morphAttributes.position,Ht=!!w.morphAttributes.normal,qt=!!w.morphAttributes.color;let Yt=ni;D.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Yt=M.toneMapping);const jt=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,Kt=jt!==void 0?jt.length:0,St=Tt.get(D),It=m.state.lights;if(J===!0&&(ct===!0||T!==et)){const pe=T===et&&D.id===B;dt.setState(D,T,pe)}let Ft=!1;D.version===St.__version?(St.needsLights&&St.lightsStateVersion!==It.state.version||St.outputColorSpace!==at||P.isBatchedMesh&&St.batching===!1||!P.isBatchedMesh&&St.batching===!0||P.isBatchedMesh&&St.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&St.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&St.instancing===!1||!P.isInstancedMesh&&St.instancing===!0||P.isSkinnedMesh&&St.skinning===!1||!P.isSkinnedMesh&&St.skinning===!0||P.isInstancedMesh&&St.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&St.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&St.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&St.instancingMorph===!1&&P.morphTexture!==null||St.envMap!==ut||D.fog===!0&&St.fog!==X||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==dt.numPlanes||St.numIntersection!==dt.numIntersection)||St.vertexAlphas!==gt||St.vertexTangents!==Mt||St.morphTargets!==_t||St.morphNormals!==Ht||St.morphColors!==qt||St.toneMapping!==Yt||St.morphTargetsCount!==Kt)&&(Ft=!0):(Ft=!0,St.__version=D.version);let Wt=St.currentProgram;Ft===!0&&(Wt=Sn(D,z,P));let le=!1,fe=!1,ye=!1;const Jt=Wt.getUniforms(),ue=St.uniforms;if(xt.useProgram(Wt.program)&&(le=!0,fe=!0,ye=!0),D.id!==B&&(B=D.id,fe=!0),le||et!==T){lt.reverseDepthBuffer?(ft.copy(T.projectionMatrix),vh(ft),xh(ft),Jt.setValue(E,"projectionMatrix",ft)):Jt.setValue(E,"projectionMatrix",T.projectionMatrix),Jt.setValue(E,"viewMatrix",T.matrixWorldInverse);const pe=Jt.map.cameraPosition;pe!==void 0&&pe.setValue(E,Ot.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Jt.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Jt.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,fe=!0,ye=!0)}if(P.isSkinnedMesh){Jt.setOptional(E,P,"bindMatrix"),Jt.setOptional(E,P,"bindMatrixInverse");const pe=P.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),Jt.setValue(E,"boneTexture",pe.boneTexture,A))}P.isBatchedMesh&&(Jt.setOptional(E,P,"batchingTexture"),Jt.setValue(E,"batchingTexture",P._matricesTexture,A),Jt.setOptional(E,P,"batchingIdTexture"),Jt.setValue(E,"batchingIdTexture",P._indirectTexture,A),Jt.setOptional(E,P,"batchingColorTexture"),P._colorsTexture!==null&&Jt.setValue(E,"batchingColorTexture",P._colorsTexture,A));const en=w.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Gt.update(P,w,Wt),(fe||St.receiveShadow!==P.receiveShadow)&&(St.receiveShadow=P.receiveShadow,Jt.setValue(E,"receiveShadow",P.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(ue.envMap.value=ut,ue.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&z.environment!==null&&(ue.envMapIntensity.value=z.environmentIntensity),fe&&(Jt.setValue(E,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&Ms(ue,ye),X&&D.fog===!0&&Et.refreshFogUniforms(ue,X),Et.refreshMaterialUniforms(ue,D,st,F,m.state.transmissionRenderTarget[T.id]),Cr.upload(E,Xs(St),ue,A)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Cr.upload(E,Xs(St),ue,A),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Jt.setValue(E,"center",P.center),Jt.setValue(E,"modelViewMatrix",P.modelViewMatrix),Jt.setValue(E,"normalMatrix",P.normalMatrix),Jt.setValue(E,"modelMatrix",P.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const pe=D.uniformsGroups;for(let re=0,De=pe.length;re<De;re++){const be=pe[re];O.update(be,Wt),O.bind(be,Wt)}}return Wt}function Ms(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Wr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,w){Tt.get(T.texture).__webglTexture=z,Tt.get(T.depthTexture).__webglTexture=w;const D=Tt.get(T);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=w===void 0,D.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const w=Tt.get(T);w.__webglFramebuffer=z,w.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,w=0){R=T,N=z,C=w;let D=!0,P=null,X=!1,nt=!1;if(T){const ut=Tt.get(T);if(ut.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(E.FRAMEBUFFER,null),D=!1;else if(ut.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(ut.__hasExternalTextures)A.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const _t=T.depthTexture;if(ut.__boundDepthTexture!==_t){if(_t!==null&&Tt.has(_t)&&(T.width!==_t.image.width||T.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const gt=T.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(nt=!0);const Mt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Mt[z])?P=Mt[z][w]:P=Mt[z],X=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?P=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Mt)?P=Mt[w]:P=Mt,_.copy(T.viewport),y.copy(T.scissor),G=T.scissorTest}else _.copy(pt).multiplyScalar(st).floor(),y.copy(mt).multiplyScalar(st).floor(),G=Zt;if(xt.bindFramebuffer(E.FRAMEBUFFER,P)&&D&&xt.drawBuffers(T,P),xt.viewport(_),xt.scissor(y),xt.setScissorTest(G),X){const ut=Tt.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+z,ut.__webglTexture,w)}else if(nt){const ut=Tt.get(T.texture),gt=z||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ut.__webglTexture,w||0,gt)}B=-1},this.readRenderTargetPixels=function(T,z,w,D,P,X,nt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){xt.bindFramebuffer(E.FRAMEBUFFER,at);try{const ut=T.texture,gt=ut.format,Mt=ut.type;if(!lt.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-D&&w>=0&&w<=T.height-P&&E.readPixels(z,w,D,P,Xt.convert(gt),Xt.convert(Mt),X)}finally{const ut=R!==null?Tt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(E.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(T,z,w,D,P,X,nt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){const ut=T.texture,gt=ut.format,Mt=ut.type;if(!lt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-D&&w>=0&&w<=T.height-P){xt.bindFramebuffer(E.FRAMEBUFFER,at);const _t=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,_t),E.bufferData(E.PIXEL_PACK_BUFFER,X.byteLength,E.STREAM_READ),E.readPixels(z,w,D,P,Xt.convert(gt),Xt.convert(Mt),0);const Ht=R!==null?Tt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(E.FRAMEBUFFER,Ht);const qt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await _h(E,qt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,_t),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,X),E.deleteBuffer(_t),E.deleteSync(qt),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,w=0){T.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const D=Math.pow(2,-w),P=Math.floor(T.image.width*D),X=Math.floor(T.image.height*D),nt=z!==null?z.x:0,at=z!==null?z.y:0;A.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,w,0,0,nt,at,P,X),xt.unbindTexture()},this.copyTextureToTexture=function(T,z,w=null,D=null,P=0){T.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1],z=arguments[2],P=arguments[3]||0,w=null);let X,nt,at,ut,gt,Mt;w!==null?(X=w.max.x-w.min.x,nt=w.max.y-w.min.y,at=w.min.x,ut=w.min.y):(X=T.image.width,nt=T.image.height,at=0,ut=0),D!==null?(gt=D.x,Mt=D.y):(gt=0,Mt=0);const _t=Xt.convert(z.format),Ht=Xt.convert(z.type);A.setTexture2D(z,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment);const qt=E.getParameter(E.UNPACK_ROW_LENGTH),Yt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),jt=E.getParameter(E.UNPACK_SKIP_PIXELS),Kt=E.getParameter(E.UNPACK_SKIP_ROWS),St=E.getParameter(E.UNPACK_SKIP_IMAGES),It=T.isCompressedTexture?T.mipmaps[P]:T.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,It.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,It.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,at),E.pixelStorei(E.UNPACK_SKIP_ROWS,ut),T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,P,gt,Mt,X,nt,_t,Ht,It.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,P,gt,Mt,It.width,It.height,_t,It.data):E.texSubImage2D(E.TEXTURE_2D,P,gt,Mt,X,nt,_t,Ht,It),E.pixelStorei(E.UNPACK_ROW_LENGTH,qt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Yt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,jt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Kt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,St),P===0&&z.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,w=null,D=null,P=0){T.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),w=arguments[0]||null,D=arguments[1]||null,T=arguments[2],z=arguments[3],P=arguments[4]||0);let X,nt,at,ut,gt,Mt,_t,Ht,qt;const Yt=T.isCompressedTexture?T.mipmaps[P]:T.image;w!==null?(X=w.max.x-w.min.x,nt=w.max.y-w.min.y,at=w.max.z-w.min.z,ut=w.min.x,gt=w.min.y,Mt=w.min.z):(X=Yt.width,nt=Yt.height,at=Yt.depth,ut=0,gt=0,Mt=0),D!==null?(_t=D.x,Ht=D.y,qt=D.z):(_t=0,Ht=0,qt=0);const jt=Xt.convert(z.format),Kt=Xt.convert(z.type);let St;if(z.isData3DTexture)A.setTexture3D(z,0),St=E.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),St=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment);const It=E.getParameter(E.UNPACK_ROW_LENGTH),Ft=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Wt=E.getParameter(E.UNPACK_SKIP_PIXELS),le=E.getParameter(E.UNPACK_SKIP_ROWS),fe=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ut),E.pixelStorei(E.UNPACK_SKIP_ROWS,gt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Mt),T.isDataTexture||T.isData3DTexture?E.texSubImage3D(St,P,_t,Ht,qt,X,nt,at,jt,Kt,Yt.data):z.isCompressedArrayTexture?E.compressedTexSubImage3D(St,P,_t,Ht,qt,X,nt,at,jt,Yt.data):E.texSubImage3D(St,P,_t,Ht,qt,X,nt,at,jt,Kt,Yt),E.pixelStorei(E.UNPACK_ROW_LENGTH,It),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ft),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(E.UNPACK_SKIP_ROWS,le),E.pixelStorei(E.UNPACK_SKIP_IMAGES,fe),P===0&&z.generateMipmaps&&E.generateMipmap(St),xt.unbindTexture()},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,xt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Uo?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Or?"display-p3":"srgb"}}class Kc extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dg extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zl=new ge,Mo=new Nc,fr=new Br,pr=new I;class yo extends Xe{constructor(t=new on,e=new Dg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;zl.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);pr.fromBufferAttribute(f,m),Hl(pr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,v=p;g<v;g++)pr.fromBufferAttribute(f,g),Hl(pr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(i,t,e,n,s,r,a){const o=Mo.distanceSqToPoint(i);if(o<e){const l=new I;Mo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zc extends We{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new wt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,l=new ge;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bo extends yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new wt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ig extends Bo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ko(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const mr=new I,ya=new ko,Sa=new ko,Ea=new ko;class Ug extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),c=mr);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ya.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),Sa.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),Ea.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Sa.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Ea.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(ya.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ng(i,t){const e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function Ds(i,t,e,n){return Ng(i,t)+Fg(i,e)+Og(i,n)}function Bg(i,t){const e=1-i;return e*e*e*t}function kg(i,t){const e=1-i;return 3*e*e*i*t}function zg(i,t){return 3*(1-i)*i*i*t}function Hg(i,t){return i*i*i*t}function Is(i,t,e,n,s){return Bg(i,t)+kg(i,e)+zg(i,n)+Hg(i,s)}class Jc extends yn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,s.x,r.x,a.x,o.x),Is(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vg extends yn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,s.x,r.x,a.x,o.x),Is(t,s.y,r.y,a.y,o.y),Is(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jc extends yn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gg extends yn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qc extends yn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends yn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Vl(o,l.x,c.x,u.x,f.x),Vl(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new wt().fromArray(s))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:Ig,CatmullRomCurve3:Ug,CubicBezierCurve:Jc,CubicBezierCurve3:Vg,EllipseCurve:Bo,LineCurve:jc,LineCurve3:Gg,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:Wg,SplineCurve:tu});class Xg extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}}class Gl extends Xg{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jc(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Qc(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Jc(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Bo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eu extends Gl{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Gl().fromJSON(s))}return this}}const $g={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,d,p;if(n&&(r=Jg(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)f=i[g],d=i[g+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Bs(r,a,e,o,l,p,0),a}};function nu(i,t,e,n,s){let r,a;if(s===l0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Wl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Wl(r,i[r],i[r+1],a);return a&&zr(a,a.next)&&(zs(a),a=a.next),a}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zr(e,e.next)||Se(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&n0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Yg(i,n,s,r):qg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),zs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Kg(Pi(i),t,e),Bs(i,t,e,n,s,r,2)):a===2&&Zg(i,t,e,n,s,r):Bs(Pi(i),t,e,n,s,r,1);break}}}function qg(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&ts(s,o,r,l,a,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=Eo(p,g,t,e,n),S=Eo(v,m,t,e,n);let M=i.prevZ,b=i.nextZ;for(;M&&M.z>=h&&b&&b.z<=S;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ts(o,u,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ts(o,u,l,f,c,d,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=h;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ts(o,u,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=S;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ts(o,u,l,f,c,d,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Kg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!zr(s,r)&&iu(s,n,n.next,r)&&ks(s,r)&&ks(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zs(n),zs(n.next),n=i=r),n=n.next}while(n!==i);return Pi(n)}function Zg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r0(a,o)){let l=su(a,o);a=Pi(a,a.next),l=Pi(l,l.next),Bs(a,t,e,n,s,r,0),Bs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Jg(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=nu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(s0(c));for(s.sort(jg),r=0;r<s.length;r++)e=Qg(s[r],e);return e}function jg(i,t){return i.x-t.x}function Qg(i,t){const e=t0(i,t);if(!e)return t;const n=su(e,i);return Pi(n,n.next),Pi(e,e.next)}function t0(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),ks(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&e0(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function e0(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function n0(i,t,e,n){let s=i;do s.z===0&&(s.z=Eo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i0(s)}function i0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Eo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function r0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a0(i,t)&&(ks(i,t)&&ks(t,i)&&o0(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||zr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zr(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=_r(Se(i,t,e)),r=_r(Se(i,t,n)),a=_r(Se(e,n,i)),o=_r(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||a===0&&gr(e,i,n)||o===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function a0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ks(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function o0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=new To(i.i,i.x,i.y),n=new To(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wl(i,t,e,n){const s=new To(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function To(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Us{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Us.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Xl(t),$l(n,t);let a=t.length;e.forEach(Xl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,$l(n,e[l]);const o=$g.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Xl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $l(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class zo extends on{constructor(t=new eu([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new kn(s,3)),this.setAttribute("uv",new kn(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:c0;let M,b=!1,N,C,R,B;h&&(M=h.getSpacedPoints(u),b=!0,d=!1,N=h.computeFrenetFrames(u,!1),C=new I,R=new I,B=new I),d||(m=0,p=0,g=0,v=0);const et=o.extractPoints(c);let _=et.shape;const y=et.holes;if(!Us.isClockWise(_)){_=_.reverse();for(let U=0,E=y.length;U<E;U++){const ot=y[U];Us.isClockWise(ot)&&(y[U]=ot.reverse())}}const V=Us.triangulateShape(_,y),k=_;for(let U=0,E=y.length;U<E;U++){const ot=y[U];_=_.concat(ot)}function Y(U,E,ot){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(E,ot)}const F=_.length,st=V.length;function W(U,E,ot){let ht,lt,xt;const Ut=U.x-E.x,Tt=U.y-E.y,A=ot.x-U.x,x=ot.y-U.y,H=Ut*Ut+Tt*Tt,K=Ut*x-Tt*A;if(Math.abs(K)>Number.EPSILON){const $=Math.sqrt(H),Z=Math.sqrt(A*A+x*x),Nt=E.x-Tt/$,Et=E.y+Ut/$,Pt=ot.x-x/Z,ie=ot.y+A/Z,dt=((Pt-Nt)*x-(ie-Et)*A)/(Ut*x-Tt*A);ht=Nt+Ut*dt-U.x,lt=Et+Tt*dt-U.y;const Ct=ht*ht+lt*lt;if(Ct<=2)return new wt(ht,lt);xt=Math.sqrt(Ct/2)}else{let $=!1;Ut>Number.EPSILON?A>Number.EPSILON&&($=!0):Ut<-Number.EPSILON?A<-Number.EPSILON&&($=!0):Math.sign(Tt)===Math.sign(x)&&($=!0),$?(ht=-Tt,lt=Ut,xt=Math.sqrt(H)):(ht=Ut,lt=Tt,xt=Math.sqrt(H/2))}return new wt(ht/xt,lt/xt)}const yt=[];for(let U=0,E=k.length,ot=E-1,ht=U+1;U<E;U++,ot++,ht++)ot===E&&(ot=0),ht===E&&(ht=0),yt[U]=W(k[U],k[ot],k[ht]);const pt=[];let mt,Zt=yt.concat();for(let U=0,E=y.length;U<E;U++){const ot=y[U];mt=[];for(let ht=0,lt=ot.length,xt=lt-1,Ut=ht+1;ht<lt;ht++,xt++,Ut++)xt===lt&&(xt=0),Ut===lt&&(Ut=0),mt[ht]=W(ot[ht],ot[xt],ot[Ut]);pt.push(mt),Zt=Zt.concat(mt)}for(let U=0;U<m;U++){const E=U/m,ot=p*Math.cos(E*Math.PI/2),ht=g*Math.sin(E*Math.PI/2)+v;for(let lt=0,xt=k.length;lt<xt;lt++){const Ut=Y(k[lt],yt[lt],ht);vt(Ut.x,Ut.y,-ot)}for(let lt=0,xt=y.length;lt<xt;lt++){const Ut=y[lt];mt=pt[lt];for(let Tt=0,A=Ut.length;Tt<A;Tt++){const x=Y(Ut[Tt],mt[Tt],ht);vt(x.x,x.y,-ot)}}}const Vt=g+v;for(let U=0;U<F;U++){const E=d?Y(_[U],Zt[U],Vt):_[U];b?(R.copy(N.normals[0]).multiplyScalar(E.x),C.copy(N.binormals[0]).multiplyScalar(E.y),B.copy(M[0]).add(R).add(C),vt(B.x,B.y,B.z)):vt(E.x,E.y,0)}for(let U=1;U<=u;U++)for(let E=0;E<F;E++){const ot=d?Y(_[E],Zt[E],Vt):_[E];b?(R.copy(N.normals[U]).multiplyScalar(ot.x),C.copy(N.binormals[U]).multiplyScalar(ot.y),B.copy(M[U]).add(R).add(C),vt(B.x,B.y,B.z)):vt(ot.x,ot.y,f/u*U)}for(let U=m-1;U>=0;U--){const E=U/m,ot=p*Math.cos(E*Math.PI/2),ht=g*Math.sin(E*Math.PI/2)+v;for(let lt=0,xt=k.length;lt<xt;lt++){const Ut=Y(k[lt],yt[lt],ht);vt(Ut.x,Ut.y,f+ot)}for(let lt=0,xt=y.length;lt<xt;lt++){const Ut=y[lt];mt=pt[lt];for(let Tt=0,A=Ut.length;Tt<A;Tt++){const x=Y(Ut[Tt],mt[Tt],ht);b?vt(x.x,x.y+M[u-1].y,M[u-1].x+ot):vt(x.x,x.y,f+ot)}}}J(),ct();function J(){const U=s.length/3;if(d){let E=0,ot=F*E;for(let ht=0;ht<st;ht++){const lt=V[ht];Ot(lt[2]+ot,lt[1]+ot,lt[0]+ot)}E=u+m*2,ot=F*E;for(let ht=0;ht<st;ht++){const lt=V[ht];Ot(lt[0]+ot,lt[1]+ot,lt[2]+ot)}}else{for(let E=0;E<st;E++){const ot=V[E];Ot(ot[2],ot[1],ot[0])}for(let E=0;E<st;E++){const ot=V[E];Ot(ot[0]+F*u,ot[1]+F*u,ot[2]+F*u)}}n.addGroup(U,s.length/3-U,0)}function ct(){const U=s.length/3;let E=0;ft(k,E),E+=k.length;for(let ot=0,ht=y.length;ot<ht;ot++){const lt=y[ot];ft(lt,E),E+=lt.length}n.addGroup(U,s.length/3-U,1)}function ft(U,E){let ot=U.length;for(;--ot>=0;){const ht=ot;let lt=ot-1;lt<0&&(lt=U.length-1);for(let xt=0,Ut=u+m*2;xt<Ut;xt++){const Tt=F*xt,A=F*(xt+1),x=E+ht+Tt,H=E+lt+Tt,K=E+lt+A,$=E+ht+A;Bt(x,H,K,$)}}}function vt(U,E,ot){l.push(U),l.push(E),l.push(ot)}function Ot(U,E,ot){kt(U),kt(E),kt(ot);const ht=s.length/3,lt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);tt(lt[0]),tt(lt[1]),tt(lt[2])}function Bt(U,E,ot,ht){kt(U),kt(E),kt(ht),kt(E),kt(ot),kt(ht);const lt=s.length/3,xt=S.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);tt(xt[0]),tt(xt[1]),tt(xt[3]),tt(xt[1]),tt(xt[2]),tt(xt[3])}function kt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function tt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new zo(n,t.options)}}const c0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new wt(r,a),new wt(o,l),new wt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],h=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new wt(a,1-l),new wt(c,1-f),new wt(d,1-g),new wt(v,1-h)]:[new wt(o,1-l),new wt(u,1-f),new wt(p,1-g),new wt(m,1-h)]}};function u0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bo extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h0 extends bo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class d0 extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ta=new ge,ql=new I,Yl=new I;class f0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kl=new ge,ws=new I,ba=new I;class p0 extends f0{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class m0 extends d0{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new p0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const Ai={flask:"2",bottle:"6",bulb:"30"};function g0(i){const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Hr(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vr(i){const t=new Float32Array(i*3),e=new Float32Array(i*3);let n=0;return{get full(){return n>=i},add(s,r,a,o,l,c){if(n>=i)return;const u=Math.hypot(o,l,c)||1;t[n*3]=s,t[n*3+1]=r,t[n*3+2]=a,e[n*3]=o/u,e[n*3+1]=l/u,e[n*3+2]=c/u,n++},done(s=!0){if(s){const r=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let l=0;l<i*3;l++){const c=l%3;t[l]<r[c]&&(r[c]=t[l]),t[l]>a[c]&&(a[c]=t[l])}const o=2/Math.max(a[0]-r[0],a[1]-r[1],a[2]-r[2],1e-4);for(let l=0;l<i*3;l++){const c=l%3;t[l]=(t[l]-(r[c]+a[c])/2)*o}}return{positions:t,normals:e}}}}function _0(i,t,e,n,s,r,a,o){for(let l=0;l<t;l++){const c=e()*Math.PI*2,u=e()*Math.PI*2,f=g0([s*Math.cos(c),n*Math.sin(c),0]),d=[Math.cos(u)*f[0],Math.cos(u)*f[1],Math.sin(u)],p=a([n*Math.cos(c)+r*d[0],s*Math.sin(c)+r*d[1],r*d[2]]),g=o(d);i.add(p[0],p[1],p[2],g[0],g[1],g[2])}}function v0(i,t){const e=Hr(3),n=Vr(i);for(let s=0;!n.full&&s<i*40;s++){const r=e()*2-1,a=e()*Math.PI*2,o=Math.sqrt(1-r*r),l=Math.cos(a)*o,c=Math.sin(a)*o;if(t&&!t(Math.atan2(l,c)*180/Math.PI,Math.asin(r)*180/Math.PI))continue;const u=1+(e()-.5)*.012;n.add(l*u,r*u,c*u,l,r,c)}return n.done(!1)}function Aa(i,t="2",e=.36){const n=Hr(61),s=Vr(i),r=240,a=document.createElement("canvas");a.width=a.height=r;const o=a.getContext("2d",{willReadFrequently:!0});o.fillStyle="#000",o.textAlign="center",o.textBaseline="middle",o.font=`600 ${r*.86}px "Host Grotesk", sans-serif`;const l=o.measureText(t).width;l>r*.9&&(o.font=`600 ${r*.86*r*.9/l}px "Host Grotesk", sans-serif`),o.fillText(t,r/2,r/2+r*.04);const c=o.getImageData(0,0,r,r).data,u=(h,S)=>h>=0&&S>=0&&h<r&&S<r&&c[(S*r+h)*4+3]>127,f=[],d=[];for(let h=0;h<r;h++)for(let S=0;S<r;S++)u(S,h)&&(f.push(S,h),(!u(S-1,h)||!u(S+1,h)||!u(S,h-1)||!u(S,h+1))&&d.push(S,h));if(!f.length)return s.done();const p=h=>(h-r/2)/(r/2),g=h=>(r/2-h)/(r/2),v=e/2,m=f.length/(f.length+d.length*e*r*.5);for(;!s.full;)if(n()<m){const h=Math.floor(n()*(f.length/2))*2,S=n()<.5;s.add(p(f[h]+n()),g(f[h+1]+n()),S?v:-v,0,0,S?1:-1)}else{const h=Math.floor(n()*(d.length/2))*2,S=d[h],M=d[h+1];let b=0,N=0;for(let C=-2;C<=2;C++)for(let R=-2;R<=2;R++)u(S+R,M+C)||(b+=R,N-=C);s.add(p(S+n()),g(M+n()),(n()*2-1)*v,b||.01,N,0)}return s.done()}function x0(i){const t=Hr(43),e=Vr(i),n=2,s=n/1.414,r=.24,a=r/2,o=.035,l=.42,c=-n/2+a,u=n/2,f=s/2,d=-s/2,p=(N,C,R)=>[N*Math.cos(l)+R*Math.sin(l),C,-N*Math.sin(l)+R*Math.cos(l)],g=(N,C,R,B,et,_)=>{const y=p(N,C,R),G=p(B,et,_);e.add(y[0],y[1],y[2],G[0],G[1],G[2])},v=u-c,m=r-2*o-.03,h=N=>(N>.02&&N<.08?.014*Math.sin(Math.PI*(N-.02)/.06):0)+(N>.08&&N<.17?-.04*Math.sin(Math.PI*(N-.08)/.09):0),S=N=>N>.08&&N<.17?-Math.cos(Math.PI*(N-.08)/.09)*.9:0,M=[["front",v*s],["back",v*s],["spine",Math.PI*a*s],["top",2.2*m*(u-o-c)],["bottom",2.2*m*(u-o-c)],["fore",2.2*m*(s-2*o)]],b=M.reduce((N,[,C])=>N+C,0);for(let N=0;N<Math.round(i*.26)&&!e.full;N++){const C=t()<.7?1:-1,R=C*r/2,B=t(),et=()=>(t()-.5)*.015;switch(Math.floor(t()*6)){case 0:g(c+B*v,f+et(),R,0,1,C);break;case 1:g(c+B*v,d+et(),R,0,-1,C);break;case 2:g(u+et(),d+B*s,R,1,0,C);break;case 3:{const _=Math.PI/2+B*Math.PI,y=t()<.5?f:d;g(c+Math.cos(_)*a,y+et(),Math.sin(_)*a,Math.cos(_),Math.sign(y),Math.sin(_));break}default:{const _=t()<.5?.085:.165;g(c+_,d+B*s,C*(r/2-.012),C*S(_),0,C)}}}for(;!e.full;){let N=t()*b,C=M[0][0];for(const[B,et]of M){if(N<et){C=B;break}N-=et}const R=d+t()*s;if(C==="front"||C==="back"){const B=t()*v,et=C==="front"?1:-1;g(c+B,R,et*(r/2+h(B)),S(B),0,et)}else if(C==="spine"){const B=Math.PI/2+t()*Math.PI;g(c+Math.cos(B)*a,R,Math.sin(B)*a,Math.cos(B),0,Math.sin(B))}else{const B=(t()*2-1)*(m/2);C==="fore"?g(u-o,d+o+t()*(s-2*o),B,1,0,0):g(c+t()*(u-o-c),C==="top"?f-o:d+o,B,0,C==="top"?1:-1,0)}}return e.done()}function M0(i){const t=Hr(53),e=Vr(i),n=s=>s;return _0(e,i,t,1,1,.22,n,n),e.done()}function Zl(i,t,e){switch(i){case"globe":return v0(t,e);case"flask":return Aa(t,Ai.flask);case"bottle":return Aa(t,Ai.bottle);case"bulb":return Aa(t,Ai.bulb);case"chain":return x0(t);case"target":return M0(t)}}async function y0(i){try{const t=await(await fetch(i)).json(),[e,n]=t.transform?.scale??[1,1],[s,r]=t.transform?.translate??[0,0],a=t.arcs.map(g=>{let v=0,m=0;return g.map(([h,S])=>(v+=h,m+=S,[v*e+s,m*n+r]))}),o=1024,l=512,c=document.createElement("canvas");c.width=o,c.height=l;const u=c.getContext("2d",{willReadFrequently:!0});u.fillStyle="#fff";const f=g=>{const v=[];let m=0,h=null;for(const S of g)for(const[M,b]of S<0?a[~S].slice().reverse():a[S])h!==null&&Math.abs(M-h)>180&&(m+=M<h?360:-360),h=M,v.push([M+m,b]);return v},d=(g,v)=>{g.forEach(([m,h],S)=>{const M=(m+v+180)/360*o,b=(90-h)/180*l;S?u.lineTo(M,b):u.moveTo(M,b)}),u.closePath()};for(const g of t.objects.land.geometries){const v=g.type==="MultiPolygon"?g.arcs:[g.arcs];for(const m of v){const h=m.map(f);for(const S of[-360,0,360]){u.beginPath();for(const M of h)d(M,S);u.fill("evenodd")}}}const p=u.getImageData(0,0,o,l).data;return(g,v)=>{const m=Math.min(o-1,Math.max(0,Math.floor((g+180)/360*o))),h=Math.min(l-1,Math.max(0,Math.floor((90-v)/180*l)));return p[(h*o+m)*4+3]>127}}catch{return}}const S0=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float cloud(vec2 p) {
  float sum = 0.0, weight = 0.5;
  for (int i = 0; i < 4; i++) {
    vec2 c = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    sum += weight * mix(mix(hash(c), hash(c + vec2(1.0, 0.0)), f.x), mix(hash(c + vec2(0.0, 1.0)), hash(c + vec2(1.0, 1.0)), f.x), f.y);
    p = p * 2.03 + 17.0; weight *= 0.5;
  }
  return sum;
}`;function E0(i,t,e){const n=new _e(new Ci(2,2),new gn({depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uAspect:{value:1},uSway:{value:0},uLight:{value:i},uDark:{value:t},uBeam:{value:e}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`
uniform float uTime, uAspect, uSway;
uniform vec3 uLight, uDark, uBeam;
varying vec2 vUv;
${S0}
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
}`}));return n.frustumCulled=!1,n.renderOrder=-100,n}function T0(i,t,e,n){const s=Math.random,r=()=>(s()+s()+s()-1.5)/1.5,a=new I,o=Array.from({length:7},()=>{const l=s()*Math.PI*2,c=1.6+s()*2.6,u=new I(Math.cos(l+Math.PI/2)+(s()-.5)*.7,(s()-.35)*.7,Math.sin(l+Math.PI/2)+(s()-.5)*.7).normalize();return{at:new I(Math.cos(l)*c,(s()-.5)*2.4,Math.sin(l)*c),dir:u,across:new I(-u.y,u.x,0).normalize(),length:3+s()*4,width:.5+s()*.9,wave:s()*6}});for(let l=0;l<e;l++){const c=o[l%o.length],u=r()*.5,f=c.width*(.4+Math.abs(u)*2.4);a.copy(c.at).addScaledVector(c.dir,u*c.length).addScaledVector(c.across,Math.sin(u*5+c.wave)*.35),a.x+=r()*f,a.y+=r()*f,a.z+=r()*f,a.length()<1.7&&a.setLength(1.7+s()*1.2),i.push(t.x+a.x,t.y+a.y,t.z+a.z,...n())}}const b0=["#ffc21a","#ffc21a","#ffb21c","#ff9a1f","#ff7a2a","#ff4d6a","#7a5cff","#1e8bff"];function A0(i,t,e,n){const s=Math.random,r=[],a=e?5e3:15e3,o=t*2.2;for(let g=0;g<a;g++)r.push((s()*2-1)*o,(s()*2-1)*3.4,(s()*2-1)*o,3,24,g%3===0?2:g%3===1?1:0);for(let g=0;g<(e?1500:4500);g++){const v=s()*Math.PI*2,m=t+(s()*2-1)*2.6;r.push(Math.cos(v)*m,(s()*2-1)*1.8,Math.sin(v)*m,3,26,g%4===0?2:g%4===1?1:0)}for(let g=0;g<(e?260:700);g++){const v=s()*Math.PI*2,m=t+(s()*2-1)*1.3;r.push(Math.cos(v)*m,(s()*2-1)*1.1,Math.sin(v)*m,4,56,g%3===0?3:0)}for(const g of i)T0(r,g,e?900:2400,()=>{const v=s();return[3.5,16,v<.6?0:v<.75?3:v<.85?2:1]});for(let g=0;g<1e3;g++){const v=s()*2-1,m=s()*Math.PI*2,h=Math.sqrt(1-v*v),S=t*.89;r.push(Math.cos(m)*h*S,v*S,Math.sin(m)*h*S,4.5,10,2)}const l=r.length/6,c=new Float32Array(l*3),u=new Float32Array(l*3),f=new Float32Array(l*4);for(let g=0;g<l;g++){c.set(r.slice(g*6,g*6+3),g*3),u.set(r.slice(g*6+3,g*6+6),g*3);for(let v=0;v<4;v++)f[g*4+v]=s()}const d=new on;d.setAttribute("position",new Ce(c,3)),d.setAttribute("aKind",new Ce(u,3)),d.setAttribute("aSeed",new Ce(f,4));const p=new yo(d,new gn({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uRatio:{value:1},uFocus:{value:4.46},uRange:{value:6.5},uCalm:{value:0},uShow:{value:1},uColours:{value:n},uSpectrum:{value:b0.map(g=>new I(parseInt(g.slice(1,3),16)/255,parseInt(g.slice(3,5),16)/255,parseInt(g.slice(5,7),16)/255))},uSpectrumShare:{value:.45}},vertexShader:`
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
}`}));return p.frustumCulled=!1,p.renderOrder=-1,p}const w0=`
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
`,R0=`
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
`;class C0 extends Kc{constructor(){super();const t=new ms;t.deleteAttribute("uv");const e=new bo({side:Ge}),n=new bo,s=new m0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new _e(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new _e(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new _e(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new _e(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new _e(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new _e(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const f=new _e(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const d=new _e(t,Zi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new _e(t,Zi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new _e(t,Zi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new _e(t,Zi(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new _e(t,Zi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const h=new _e(t,Zi(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zi(i){const t=new Os;return t.color.setScalar(i),t}const vr=(i,t,e)=>`M${i-e} ${t}a${e} ${e} 0 1 0 ${e*2} 0a${e} ${e} 0 1 0 ${-e*2} 0`,ru={globe:[vr(12,12,9),"M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"],flask:["M10 3h4M10.5 3v5.2a6 6 0 1 0 3 0V3","M7.2 15h9.6"],bottle:["M10 2.5h4M10.5 2.5v3.2L8.5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V9l-2-3.3V2.5","M8.5 13h7"],bulb:["M9 17.5h6M10 20.5h4","M9 17.5c0-2.2-3-3.4-3-7.2a6 6 0 0 1 12 0c0 3.8-3 5-3 7.2"],chain:["M5.5 4.5A2.5 2.5 0 0 1 8 2h10.5v15H8a2.5 2.5 0 0 0-2.5 2.5z","M5.5 19.5A2.5 2.5 0 0 0 8 22h10.5","M8.5 2v15"],target:[vr(12,12,9),vr(12,12,5),vr(12,12,1.2)]},Jl={flipbook:"M479.23-185.39q-48.38-35.69-104-55.15Q319.62-260 260-260q-36.61 0-71.92 8.11Q152.77-243.77 120-228q-21.38 9.84-40.69-2.93Q60-243.69 60-267.08v-433.53q0-12.93 6.85-23.89 6.84-10.96 19-15.96 40.61-19.77 84.65-29.65Q214.54-780 260-780q58.38 0 113.69 16.54Q429-746.92 480-716.92v459.38q50.62-32 106.81-47.23Q643-320 700-320q34.46 0 65.11 4.85 30.66 4.84 63.35 15.3 4.23 1.16 7.89.2 3.65-.97 3.65-6.35v-449.23q10.38 3.08 20.27 6.85 9.88 3.77 19.27 9.46 10.23 5 15.34 14.61 5.12 9.62 5.12 20.62v435.84q0 23.39-19.89 35.96-19.88 12.58-42.42 3.12-32.38-15.39-67.11-23.31Q735.85-260 700-260q-60 0-116.38 18.88-56.39 18.89-104.39 55.73ZM560-360v-360l200-200v380L560-360Zm-140 73.46v-394.07q-37.61-18.62-77.92-29.01Q301.77-720 260-720q-37 0-70.27 6.81-33.27 6.81-62.42 18.88-3.08 1.16-5.19 3.27-2.12 2.12-2.12 5.19v381.23q0 5.39 3.65 6.35 3.66.96 7.89-.58 29.61-10.69 61.04-15.92Q224-320 260-320q44.85 0 85.69 9.27 40.85 9.27 74.31 24.19Zm0 0v-394.07 394.07Z",pdf:"M330-250h300v-60H330v60Zm0-160h300v-60H330v60Zm-77.69 310Q222-100 201-121q-21-21-21-51.31v-615.38Q180-818 201-839q21-21 51.31-21H570l210 210v477.69Q780-142 759-121q-21 21-51.31 21H252.31ZM540-620v-180H252.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v615.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-620H540ZM240-800v180-180V-160v-640Z"},yi=84,jl=.13,xr=.035;function P0(i){const t=new vo(i),e=t.fromScene(new C0,.04).texture;return t.dispose(),e}function L0(){const i=a=>(a-42)/84,t=a=>(42-a)/84,e=new eu,n=7,s=34;e.moveTo(i(n),t(0)),e.lineTo(i(84-s),t(0)),e.quadraticCurveTo(i(84),t(0),i(84),t(s)),e.lineTo(i(84),t(84-n)),e.quadraticCurveTo(i(84),t(84),i(84-n),t(84)),e.lineTo(i(s),t(84)),e.quadraticCurveTo(i(0),t(84),i(0),t(84-s)),e.lineTo(i(0),t(n)),e.quadraticCurveTo(i(0),t(0),i(n),t(0));const r=new zo(e,{depth:jl,bevelEnabled:!0,bevelThickness:xr,bevelSize:xr,bevelOffset:-xr,bevelSegments:6,curveSegments:16});return r.translate(0,0,-jl-xr),r}function Ql(i,t,e){const s=document.createElement("canvas");s.width=s.height=yi*4;const r=s.getContext("2d");r.lineCap="round",r.lineJoin="round";const a=Ai[i];if(e&&Jl[e]){const l=.18333333333333332;r.setTransform(l,0,0,l,80,80+960*l),r.fillStyle=t,r.fill(new Path2D(Jl[e]))}else if(a)r.setTransform(4,0,0,4,0,0),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.font=`600 ${a.length>1?34:46}px "Host Grotesk", sans-serif`,r.fillText(a,42,44);else{r.setTransform(176/24,0,0,176/24,80,80),r.strokeStyle=t,r.lineWidth=1.25;for(const l of ru[i])r.stroke(new Path2D(l))}const o=new Zc(s);return o.colorSpace=hn,o.anisotropy=4,o}let wa;function D0(){if(wa)return wa;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,64);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.55,"rgba(0,0,0,.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),wa=new Zc(i)}function tc(i,t,e){const n=new h0({color:e,roughness:.12,metalness:.3,clearcoat:1,clearcoatRoughness:.08,envMap:t,envMapIntensity:1.5,transparent:!0}),s=new Os({transparent:!0,depthWrite:!1,toneMapped:!1}),r=new Os({map:D0(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),a=new Bn,o=new Bn,l=new _e(new Ci(1.7,1.5),r),c=new _e(i,n),u=new _e(new Ci(1,1),s);return l.position.set(.06,-.3,-.5),l.renderOrder=4,c.renderOrder=5,u.position.z=.004,u.renderOrder=6,o.add(c,u),a.add(l,o),a.visible=!1,a.userData.tile=o,{group:a,body:n,face:s,shadow:r,seen:0,turnX:0,turnY:0}}function ec(i,t,e,n,s=0){i.seen=t,i.group.visible=t>.004,i.body.opacity=t,i.face.opacity=t,i.shadow.opacity=t*.7,i.group.userData.tile.rotation.set(ss.degToRad(-e),ss.degToRad(n),ss.degToRad(s))}function nc(i){i.group.removeFromParent(),i.body.dispose(),i.face.dispose(),i.shadow.dispose()}const ic={globe:[.227,.095],flask:[-.2,.12],bottle:[-.2,.12],bulb:[-.27,.14],chain:[-.166,.095],target:[-.282,.12]},I0=["aria-label","onClick","onPointerenter","onFocus"],U0={class:"label"},N0={class:"photo"},F0=["src"],O0={key:1,class:"blank"},B0={class:"place"},Ji=1.2,Ra=50,k0=3.2,z0=5.1,H0=18,V0=.022,G0=10.25,W0=.12,X0=1.05,sc=2,$0=.03,q0=.96,Mr=.0105,yr=40,Y0=15,K0=10,Z0=.94,J0=.015,j0=.95,Q0=.29,t_=.04,e_=.22,rc=195,Ca=2.4,ac=70,Rs=4,n_=$e({__name:"ParticleStage",props:{shapes:{},travel:{},count:{default:1e4},active:{type:Boolean,default:!0},shift:{default:0},landUrl:{default:""},focused:{type:Boolean,default:!1},points:{default:()=>[]},card:{type:Boolean,default:!1},token:{type:Boolean,default:!1},tokenHover:{type:Boolean,default:!1},tiles:{default:0},tileIcons:{},tileHover:{default:-1},gallery:{type:Boolean,default:!1}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,s=oe(),r=oe([]),a=oe(-1),o=oe(null);qe(a,w=>{w>=0&&e.points[w]&&(o.value=e.points[w])}),qe(()=>e.points,()=>{a.value=-1});const l=as().app.baseURL,c=w=>w?/^(https?:)?\/\//.test(w)?w:l+w.replace(/^\//,""):"",u=9.31,f=Math.PI*.4,d={globe:.15,flask:.26,bottle:.26,bulb:.26,chain:.34,target:.28},p={globe:[.12,.1],flask:[.06,.1],bottle:[.06,.1],bulb:[.04,.1],chain:[.03,.08],target:[-.1,.25]},g={globe:1,flask:1.28,bottle:1.28,bulb:1.45,chain:1.5,target:1.5},v={globe:1,flask:1,bottle:1,bulb:.8,chain:1,target:.68},m=new I(.4,.75,.55).normalize();let h,S,M,b,N=[],C,R,B,et,_=1,y=-1,G=0,V=new Float32Array(0),k=new Float32Array(0),Y=new Float32Array(0),F=new Float32Array(0),st=-1,W=0,yt=!1,pt=1,mt=1,Zt=0,Vt,J=!1;const ct=new Kc,ft=new tn(Ra,1,.1,100),vt=new Bn,Ot=new Bn;vt.add(Ot),ct.add(vt);const Bt=(w,D)=>D.set(Math.cos(w)*u,0,Math.sin(w)*u);let kt=1,tt=1;const U={px:0,py:0,x:0,y:0,tx:0,ty:0,on:0,target:0,inside:!1,click:!1},E={x:0,y:0,tx:0,ty:0,vx:0,vy:0,dragging:!1,moved:0,lastX:0,lastY:0,lastT:0};let ot=0,ht=0,lt=0,xt=0,Ut=0,Tt=0;const A=new Bn;ft.add(A),ct.add(ft);const x=[["flask",.2,.31,.9],["globe",.5,.13,-.2],["target",.86,.26,.5],["bottle",.12,.66,1],["chain",.44,.83,1.3],["bulb",.86,.72,-.3]];let H=[],K=0,$=0,Z,Nt=[],Et=0,Pt,ie=20;const dt=new Map;let Ct=[];const $t=new ne,Gt=new ne,Dt=new ne,Qt=(w,D)=>new ne(getComputedStyle(s.value).getPropertyValue(w).trim()||D),Xt=w=>(w%e.shapes.length+e.shapes.length)%e.shapes.length;function de(w){if(pt<=800){const D=yi*.75;return[Math.max(ie+56+D/2,pt*.27),mt*.67,.75]}return[pt/2+ic[w][0]*Math.min(pt,mt*1.5)+yi/2,mt/2+ic[w][1]*mt+yi/2,1]}function O(w,D){const P=(D-1)/2,X=Math.max(40,Math.min(89.6,pt*.075));return[pt/2+(w-P)*(yi+X),mt*.69+(1-Math.min(1,Math.abs(w-P)))*9]}function Lt(w,D,P,X){const nt=2*Rs*Math.tan(ss.degToRad(Ra)/2)/mt;w.group.position.set((D-pt/2)*nt,-(P-mt/2)*nt,-Rs),w.group.scale.setScalar(X*nt)}const q=w=>1-Math.pow(1-Math.min(1,Math.max(0,w)),3);function rt(w,D,P,X){if(!Z)return;const nt=e.shapes[Xt(Math.round(e.travel.state.progress))]??"globe";if(nt!==Pt){Pt=nt,dt.has(nt)||dt.set(nt,Ql(nt,getComputedStyle(s.value).getPropertyValue("--accent-deep").trim()||"#2440c9"));for(const Ft of[Z,...Nt])Ft.face.map=dt.get(nt),Ft.face.needsUpdate=!0,Ft.group.userData.icon=nt}const at=Ft=>X?1:1-Math.exp(-w*Ft),[ut,gt,Mt]=de(nt),_t=Z,Ht=X?0:Math.sin(D*1.26)*6,qt=e.token&&W>=1&&!(P>.4&&P<.8);$=X?qt?1:0:Math.min(1,Math.max(0,$+(qt?w/1.5:-w/1)));const Yt=1-Math.pow(2,-10*$),jt=Math.min(1,$*1.5);_t.seen=e.token?jt:Math.max(0,_t.seen-w*6);const Kt=X?0:Math.sin(D*.9)*4,St=X?0:Math.sin(D*.7+1)*6;_t.turnX+=(-5+Kt+U.y*5*U.on-_t.turnX)*at(6),_t.turnY+=(-9+St+U.x*7*U.on-_t.turnY)*at(6),Lt(_t,ut,gt+(1-Yt)*mt*.12+Ht,yi*Mt*(.7+.3*jt)*(e.tokenHover?1.06:1)),ec(_t,_t.seen,_t.turnX,_t.turnY+(1-Yt)*180,X?0:Math.sin(D*.6)*3);const It=e.tiles;Et=It?Et+w:0;for(let Ft=0;Ft<Nt.length;Ft++){const Wt=Nt[Ft],le=Ft<It,fe=(Math.max(It,1)-1)/2,ye=e.tileIcons?.[Ft],Jt=ye?`page:${ye}`:nt;Wt.group.userData.icon!==Jt&&(ye&&!dt.has(Jt)&&dt.set(Jt,Ql(nt,getComputedStyle(s.value).getPropertyValue("--accent-deep").trim()||"#2440c9",ye)),Wt.face.map=dt.get(Jt)??dt.get(nt),Wt.face.needsUpdate=!0,Wt.group.userData.icon=Jt),Wt.seen=le?Math.min(1,Math.max(0,(Et-.15-Ft*.11)/.8)):Math.max(0,Wt.seen-w/.25),X&&le&&(Wt.seen=1);const ue=le?q(Wt.seen):1,[en,pe]=le?O(Ft,It):[Wt.group.userData.x??0,Wt.group.userData.y??0],re=e.tileHover===Ft,De=ut+(en-ut)*ue,be=gt+(pe-gt)*ue;le&&(Wt.group.userData.x=en,Wt.group.userData.y=pe),Wt.turnX+=((re?0:-8)-Wt.turnX)*at(8),Wt.turnY+=((re?0:-16-(Ft-fe)*7)-Wt.turnY)*at(8),Lt(Wt,De,be-(re?6:0)+Ht*.4*Math.cos(Ft*1.7),yi*(.55+.45*ue)),ec(Wt,le?Math.min(1,Wt.seen*3):Wt.seen,Wt.turnX+(1-ue)*30,Wt.turnY-(1-ue)*50)}}function At(w){w&&(w.removeFromParent(),w.geometry.dispose(),w.material.dispose())}function Rt(){At(S),At(M),b&&(b.removeFromParent(),b.geometry.dispose(),b.material.dispose()),Ke();const w=e.count;N=e.shapes.map(at=>{const ut=g[at]*(pt<=800?v[at]:1),gt=Math.round(w*d[at]),Mt=Zl(at,gt,C),_t=new Float32Array(w*3),Ht=new Float32Array(w*3);for(let qt=0;qt<gt*3;qt++)_t[qt]=Mt.positions[qt]*Ji*ut,Ht[qt]=Mt.normals[qt];return{positions:_t,normals:Ht,count:gt,lean:p[at][0],tip:p[at][1],reach:Ji*ut,spins:at==="globe"}}),V=Float32Array.from({length:w*4},()=>Math.random()),Y=new Float32Array(w*3),F=new Float32Array(w*3);const D=N[Xt(Math.floor(e.travel.state.progress))];R=D,B=D,et=D,k=D.positions.slice(),y=-1,st=-1,$t.copy(Qt("--on-dark","#ffffff")),Gt.copy(Qt("--accent","#c8d2ff")),Dt.copy(Qt("--stage-from","#2440c9"));const P=new on;P.setAttribute("position",new Ce(k.slice(),3).setUsage(Jo)),P.setAttribute("normal",new Ce(D.normals.slice(),3).setUsage(Jo)),P.setDrawRange(0,D.count),P.setAttribute("aSeed",new Ce(V,4)),S=new yo(P,new gn({vertexShader:w0,fragmentShader:R0,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uDot:{value:Ca},uBlur:{value:ac},uFocus:{value:z0},uRange:{value:H0},uReach:{value:Ji},uLight:{value:m.clone()},uFade:{value:1},uLit:{value:$t.clone()},uShade:{value:Dt.clone().lerp(Gt,.5)},uAccent:{value:Gt.clone()}}})),S.frustumCulled=!1,Ot.add(S);const X=Qt("--stage-to","#070c33"),nt=Qt("--brand-deep","#101c66");b=E0(Dt.clone().lerp(X,.1),Dt.clone().lerp(X,.55),Gt.clone()),ct.add(b),M=A0(Array.from({length:5},(at,ut)=>Bt((ut+.5)*f,new I)),u,pt<=800,[Gt.clone(),$t.clone(),nt.lerp(X,.3),Dt.clone().lerp(Gt,.35)]),ct.add(M),Ke()}function se(w,D){const P=N.indexOf(w)*10+D;if(P===y)return;if(w!==et&&S){const gt=S.geometry.getAttribute("normal");gt.array.set(w.normals),gt.needsUpdate=!0,S.geometry.setDrawRange(0,w.count)}y=P,et=w,_=D;const X=w.positions,nt=k,at=nt.length/3;if(D<=0){nt.set(X);return}const ut=X0*D;for(let gt=0;gt<at;gt++){const Mt=gt*4,_t=gt*3;nt[_t]=X[_t]+(V[Mt+1]*2-1)*ut,nt[_t+1]=X[_t+1]+(V[Mt+2]*2-1)*ut,nt[_t+2]=X[_t+2]+(V[Mt+3]*2-1)*ut}}function Ee(){const w=N[Xt(Math.round(e.travel.state.progress))],D=e.points.length;if(Ct=[],!w||!D)return;const P=w.positions,X=w.count,nt=Math.max(1,Math.floor(X/600)),at=[];if(e.shapes[Xt(Math.round(e.travel.state.progress))]==="globe"&&e.points.every(Mt=>Mt.at)){let Mt=0,_t=0;for(const qt of e.points){const Yt=qt.at[0]*Math.PI/180,jt=qt.at[1]*Math.PI/180,Kt=Math.sin(Yt)*Math.cos(jt)*Ji,St=Math.sin(jt)*Ji,It=Math.cos(Yt)*Math.cos(jt)*Ji;let Ft=0,Wt=1/0;for(let le=0;le<X;le++){const fe=(P[le*3]-Kt)**2+(P[le*3+1]-St)**2+(P[le*3+2]-It)**2;fe<Wt&&(Wt=fe,Ft=le)}at.push(Ft),Mt+=Kt,_t+=It}Ct=at;const Ht=-Math.atan2(Mt,_t)-G;E.tx=Ht+Math.round((E.x-Ht)/(Math.PI*2))*Math.PI*2,E.ty=0,E.vx=E.vy=0;return}const ut=Mt=>P[Mt*3+2]>.3;let gt=-1;for(let Mt=0;Mt<X;Mt+=nt)ut(Mt)&&(gt<0||P[Mt*3+1]-P[Mt*3]>P[gt*3+1]-P[gt*3])&&(gt=Mt);for(gt<0&&(gt=0),at.push(gt);at.length<D;){let Mt=0,_t=-1;for(let Ht=0;Ht<X;Ht+=nt){if(!ut(Ht))continue;let qt=1/0;for(const Yt of at)qt=Math.min(qt,(P[Ht*3]-P[Yt*3])**2+(P[Ht*3+1]-P[Yt*3+1])**2+(P[Ht*3+2]-P[Yt*3+2])**2);qt>_t&&(_t=qt,Mt=Ht)}at.push(Mt)}Ct=at,E.tx=-G+Math.round((E.x+G)/(Math.PI*2))*Math.PI*2,E.ty=0,E.vx=E.vy=0}const Te=new I;function ae(){const w=r.value;if(!w.length||!S)return;const D=ft.position.distanceTo(vt.position);for(let P=0;P<w.length;P++){const X=Ct[P],nt=w[P];if(X===void 0||!nt)continue;Te.set(k[X*3]+Y[X*3],k[X*3+1]+Y[X*3+1],k[X*3+2]+Y[X*3+2]).applyMatrix4(S.matrixWorld);const at=ft.position.distanceTo(Te)<D+.25;Te.project(ft);const ut=(Te.x*.5+.5)*pt,gt=(-Te.y*.5+.5)*mt;nt.style.transform=`translate(${ut.toFixed(1)}px, ${gt.toFixed(1)}px)`,nt.classList.toggle("behind",!at),P===a.value&&(s.value.style.setProperty("--hx",`${ut.toFixed(1)}px`),s.value.style.setProperty("--hy",`${gt.toFixed(1)}px`),s.value.style.setProperty("--ty",`${Math.max(72,Math.min(mt-rc-112,gt-rc/2)).toFixed(1)}px`))}}function Fe(w){st=w,R=N[Xt(w)],B=N[Xt(w+1)]}function Ke(){!s.value||!h||(pt=s.value.clientWidth||1,mt=s.value.clientHeight||1,h.setSize(pt,mt,!1),ie=parseFloat(getComputedStyle(s.value).getPropertyValue("--frame"))*parseFloat(getComputedStyle(document.documentElement).fontSize)||20,ft.aspect=pt/mt,vt.scale.setScalar(pt<=800?.85:1))}const _s=new ge,ai=new ge,Ze=new I,Hn=new I,oi=new I,vs=new I,li=new I,ci=new I,Sn=new I;function Xs(w,D,P){const X=U.inside&&!D,nt=U.click;U.click=!1;const at=Y.length/3,ut=Y,gt=F,Mt=k,_t=J0*sc*w,Ht=Math.pow(Z0,w)*(1-_t),qt=Math.pow(j0,w)*(1-_t);let Yt=[],jt=[],Kt=[],St=0;(X||nt)&&(S.updateWorldMatrix(!0,!1),_s.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse).multiply(S.matrixWorld),Yt=_s.elements,jt=S.matrixWorld.elements,ai.copy(S.matrixWorld).invert(),Kt=ai.elements,vs.setFromMatrixColumn(ft.matrixWorld,0).normalize(),li.setFromMatrixColumn(ft.matrixWorld,1).normalize(),ci.copy(vs).transformDirection(ai),Sn.copy(li).transformDirection(ai),oi.setFromMatrixPosition(S.matrixWorld),Ze.copy(ft.position).sub(oi).normalize(),St=oi.dot(Ze),nt&&Hn.set(U.px/pt*2-1,1-U.py/mt*2,.5).unproject(ft).sub(ft.position).normalize().multiplyScalar(ft.position.distanceTo(oi)).add(ft.position));const It=Ze.x,Ft=Ze.y,Wt=Ze.z,le=yr*yr,fe=Y0*sc*w*.01;for(let pe=0;pe<at;pe++){const re=pe*3,De=re+1,be=re+2;if(X||nt){const nn=Mt[re]+ut[re],_n=Mt[De]+ut[De],Vn=Mt[be]+ut[be],ys=Yt[3]*nn+Yt[7]*_n+Yt[11]*Vn+Yt[15],Di=((Yt[0]*nn+Yt[4]*_n+Yt[8]*Vn+Yt[12])/ys*.5+.5)*pt,Ii=(-(Yt[1]*nn+Yt[5]*_n+Yt[9]*Vn+Yt[13])/ys*.5+.5)*mt,ui=U.px-Di,hi=U.py-Ii,Gn=ui*ui+hi*hi;if(Gn<le&&Gn>0){const Ui=Math.sqrt(Gn),we=(yr-Ui)/yr,En=jt[0]*nn+jt[4]*_n+jt[8]*Vn+jt[12],Ni=jt[1]*nn+jt[5]*_n+jt[9]*Vn+jt[13],Go=jt[2]*nn+jt[6]*_n+jt[10]*Vn+jt[14];if(X&&En*It+Ni*Ft+Go*Wt>St){const Wn=we*fe/Ui,Tn=-ui*Wn,bn=hi*Wn;ut[re]+=ci.x*Tn+Sn.x*bn,ut[De]+=ci.y*Tn+Sn.y*bn,ut[be]+=ci.z*Tn+Sn.z*bn}if(nt){let Wn=En-Hn.x,Tn=Ni-Hn.y,bn=Go-Hn.z;const Wo=Math.hypot(Wn,Tn,bn);if(Wo>.001){const Xr=we*K0*.5/Wo;Wn*=Xr,Tn*=Xr,bn*=Xr,gt[re]+=Kt[0]*Wn+Kt[4]*Tn+Kt[8]*bn,gt[De]+=Kt[1]*Wn+Kt[5]*Tn+Kt[9]*bn,gt[be]+=Kt[2]*Wn+Kt[6]*Tn+Kt[10]*bn}}}}ut[re]=ut[re]*Ht+gt[re]*w*.1,ut[De]=ut[De]*Ht+gt[De]*w*.1,ut[be]=ut[be]*Ht+gt[be]*w*.1,gt[re]*=qt,gt[De]*=qt,gt[be]*=qt}const ye=S.geometry.getAttribute("position"),Jt=ye.array,ue=et.normals,en=D?0:V0*(1-_);for(let pe=0;pe<at;pe++){const re=pe*3,De=V[pe*4+2],be=en*Math.cos(P*G0*De+Math.PI*De)*V[pe*4];Jt[re]=Mt[re]+ut[re]+ue[re]*be,Jt[re+1]=Mt[re+1]+ut[re+1]+ue[re+1]*be,Jt[re+2]=Mt[re+2]+ut[re+2]+ue[re+2]*be}ye.needsUpdate=!0}function xs(w){const D=h.domElement.getBoundingClientRect();U.px=w.clientX-D.left,U.py=w.clientY-D.top,U.tx=U.px/D.width*2-1,U.ty=1-U.py/D.height*2}function Gr(w){if(xs(w),U.inside=!0,U.target=1,E.dragging){const D=performance.now(),P=w.clientX-E.lastX,X=w.clientY-E.lastY,nt=D-E.lastT;if(E.tx+=P*Mr,E.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,E.ty+X*Mr)),nt>0){const at=16.666666666666668/nt*.3;E.vx=P*Mr*at,E.vy=X*Mr*at}E.moved+=Math.abs(P)+Math.abs(X),E.lastX=w.clientX,E.lastY=w.clientY,E.lastT=D}}function Ms(){U.inside=!1,U.target=0}function Wr(w){w.pointerType!=="mouse"||w.button!==0||(E.dragging=!0,E.moved=0,E.vx=E.vy=0,E.lastX=w.clientX,E.lastY=w.clientY,E.lastT=performance.now(),h.domElement.setPointerCapture(w.pointerId))}function T(w){E.dragging=!1,w.pointerType!=="mouse"&&Ms()}function z(w,D,P,X){if(!E.dragging&&(Math.abs(E.vx)>1e-4||Math.abs(E.vy)>1e-4)){E.tx+=E.vx*w,E.ty=Math.max(-Math.PI/2,Math.min(Math.PI/2,E.ty+E.vy*w));const _t=Math.pow(q0,w);E.vx*=_t,E.vy*=_t}const nt=P?1:1-Math.pow(1-$0,w);E.x+=(E.tx-E.x)*nt,E.y+=(E.ty-E.y)*nt;const at=1-ht;!P&&et.spins&&(G-=W0*D*at);const ut=P||et.spins?0:Math.cos(X)*.1*at,gt=P?0:at,Mt=P?1:1-Math.exp(-D*3);lt+=(et.lean-lt)*Mt,xt+=(et.tip-xt)*Mt,Ot.rotation.set(E.y+xt+Math.sin(X*.7)*.045*gt,E.x+G+ut,lt+Math.cos(X*.55)*.03*gt,"ZXY"),Ot.position.y=(P?0:Math.sin(X)*.07*(1-ht*.6))+Tt}return xn(()=>{const w=s.value;h=new Lg({antialias:!0,alpha:!0,powerPreference:"high-performance"}),h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),w.prepend(h.domElement);const D=h.domElement;D.addEventListener("pointermove",Gr,{passive:!0}),D.addEventListener("pointerleave",Ms,{passive:!0}),D.addEventListener("pointercancel",Ms,{passive:!0}),D.addEventListener("pointerdown",Wr),D.addEventListener("pointerup",T),D.addEventListener("click",St=>{E.moved<5&&(xs(St),U.click=!0)}),Vt=new ResizeObserver(Ke),Vt.observe(w),yt=e.active,Rt(),h.toneMapping=vc;const P=P0(h),X=L0(),nt=Qt("--surface","#f2f4fb").multiplyScalar(.82);Z=tc(X,P,nt),A.add(Z.group),Nt=Array.from({length:6},()=>{const St=tc(X,P,nt);return A.add(St.group),St}),H=x.map(([St,It,Ft,Wt])=>{const le=St==="globe"?4e3:2600,fe=Zl(St,le,C),ye=new on;ye.setAttribute("position",new Ce(fe.positions,3)),ye.setAttribute("normal",new Ce(fe.normals,3)),ye.setAttribute("aSeed",new Ce(Float32Array.from({length:le*4},()=>Math.random()),4));const Jt=S.material.clone();Jt.uniforms.uBlur.value=0,Jt.uniforms.uFocus.value=Rs,Jt.uniforms.uRange.value=100,Jt.uniforms.uReach.value=1,Jt.uniforms.uFade.value=0;const ue=new yo(ye,Jt);return ue.frustumCulled=!1,ue.rotation.z=Wt,ue.visible=!1,A.add(ue),{points:ue,fx:It,fy:Ft}}),e.landUrl&&y0(e.landUrl).then(St=>{St&&!J&&(C=St,Rt())}),document.fonts?.load('600 200px "Host Grotesk"',"2").then(()=>{if(!J){for(const St of Object.keys(Ai))dt.delete(St);Pt=void 0,Rt()}}).catch(()=>{});const at=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ut=new I,gt=new I,Mt=new I,_t=new I,Ht=new I(0,1,0),qt=St=>{let It=St;for(let Ft=0;Ft<6;Ft++){const Wt=3*(1-It)*(1-It)*It*.45+3*(1-It)*It*It*.25+It*It*It,le=3*(1-It)*(1-It)*.45+6*(1-It)*It*(.25-.45)+3*It*It*(1-.25);It-=(Wt-St)/Math.max(1e-4,le)}return It=Math.min(1,Math.max(0,It)),3*(1-It)*It*It+It*It*It};let Yt=performance.now(),jt=Math.random()*100;const Kt=St=>{const It=Math.min((St-Yt)/1e3,.03333333333333333),Ft=It*60;Yt=St,at||(jt+=It);const Wt=we=>1-Math.exp(-It*we),le=e.travel;le.update(It);const fe=we=>{const En=Math.min(1,Math.max(0,we));return En*En*(3-2*En)},ye=le.state.progress,Jt=Math.floor(ye),ue=ye-Jt,en=(ue+.5)%1,pe=ue>=.6;Jt!==st&&Fe(Jt);const re=pe?B:R;if(!yt)tt=1,se(re,1);else if(W<1)W=at?1:Math.min(1,W+It/k0),tt=0,se(re,1-fe(W));else{const we=ue>=.5&&ue<.6;tt=at?we?1:0:Math.min(1,Math.max(0,tt+(we?It:-It))),re!==et&&(E.x=E.tx=E.y=E.ty=E.vx=E.vy=0,G=0,tt=0,kt=0),se(re,qt(tt))}U.x+=(U.tx-U.x)*Wt(1),U.y+=(U.ty-U.y)*Wt(1),U.on+=(U.target-U.on)*Wt(2),ht+=((e.focused?1:0)-ht)*Wt(2.6);const De=e.shapes[Xt(Math.round(ye))]==="globe",be=e.focused?1:0;Ut+=((De?Q0:t_)*be-Ut)*Wt(2.6),Tt+=((De||ft.aspect<1?0:e_)*be-Tt)*Wt(2.6);const nn=ye*f,_n=((pe?Jt+1:Jt)+.5)*f;Bt(_n,vt.position),Bt(nn-(1-Math.min(1,W*1.3))*.35,ut).lerp(vt.position,Ut*Math.min(1,ft.aspect/1.3));const Vn=1-(fe((en-.1)/.6)-fe((en-.4)/.5));Bt(en<.1?nn+f/2:_n+(nn+f/2-_n)*Vn,gt).lerp(vt.position,ht),vt.lookAt(Bt(nn-.02*Math.PI,Mt));const ys=ut.distanceTo(gt)*Math.tan(ss.degToRad(2.25))*U.on;_t.subVectors(gt,ut).cross(Ht).normalize(),ft.position.copy(ut).addScaledVector(_t,-U.x*ys).addScaledVector(Ht,U.y*ys),ft.lookAt(gt),ot+=(e.shift-ot)*Wt(4),Math.abs(ot)>5e-4?ft.setViewOffset(pt,mt,ot*pt,0,pt,mt):ft.clearViewOffset(),ft.updateProjectionMatrix(),ft.updateMatrixWorld(),z(Ft,It,at,jt);const Di=S.material.uniforms,Ii=h.getPixelRatio();Di.uDot.value=Ca*Ii,Di.uBlur.value=ac*Ii,Di.uReach.value=et.reach,kt=at?1:Math.min(1,kt+It/.6),Di.uFade.value=(1-_)*(.15+.85*kt),Xs(Ft,at,jt),ae(),rt(It,jt,ye-Math.floor(ye),at),K=at?e.gallery?1:0:Math.min(1,Math.max(0,K+(e.gallery?It/1.2:-It/1.1)));const ui=2*Rs*Math.tan(ss.degToRad(Ra)/2)/mt,hi=e.gallery?0:1-K;for(const we of H){if(we.points.visible=K>.003,!we.points.visible)continue;const En=.115*Math.min(mt,pt*.9)*ui*(1+hi*.25);we.points.position.set((we.fx-.5)*pt*ui*(1+hi*.35),-(we.fy-.5)*mt*ui*(1+hi*.35),-Rs),we.points.scale.setScalar(En),we.points.rotation.y=jt*.15+we.fx*4;const Ni=we.points.material.uniforms;Ni.uFade.value=fe(K)*.9,Ni.uDot.value=Ca*Ii*.85,Ni.uReach.value=En}const Gn=M.material.uniforms,Ui=b.material.uniforms;Gn.uTime.value=jt,Gn.uRatio.value=Ii,Gn.uCalm.value=ht,Gn.uShow.value=1,Ui.uTime.value=jt,Ui.uAspect.value=ft.aspect,Ui.uSway.value=Math.sin(nn),h.render(ct,ft),Zt=requestAnimationFrame(Kt)};Zt=requestAnimationFrame(Kt)}),qe(()=>e.active,w=>{w&&(yt=!0)}),qe(()=>e.points,Ee,{immediate:!0}),qe(()=>[e.count,e.shapes.join()],()=>{h&&(yt&&(W=1),Rt())}),si(()=>{J=!0,cancelAnimationFrame(Zt),Vt?.disconnect(),At(S),At(M);for(const w of H)w.points.geometry.dispose(),w.points.material.dispose();Z&&nc(Z),Nt.forEach(nc),dt.forEach(w=>w.dispose()),h?.dispose(),h?.domElement.remove()}),(w,D)=>(j(),it("div",{ref_key:"host",ref:s,class:"stage"},[xe(au,{name:"marker"},{default:Ve(()=>[(j(!0),it(Me,null,Ne(i.points,(P,X)=>(j(),it("button",{key:P.slug,ref_for:!0,ref_key:"markers",ref:r,type:"button",class:ke(["marker",{plain:!i.card}]),style:ti({"--k":X}),"aria-label":P.title,onClick:nt=>n("pick",P.slug),onPointerenter:nt=>a.value=X,onPointerleave:D[0]||(D[0]=nt=>a.value=-1),onFocus:nt=>a.value=X,onBlur:D[1]||(D[1]=nt=>a.value=-1)},[D[2]||(D[2]=Q("span",{class:"dot"},null,-1)),Q("span",U0,zt(P.title),1)],46,I0))),128))]),_:1}),i.card?(j(),it("div",{key:0,class:ke(["card",{on:L(a)>=0}]),"aria-hidden":"true"},[D[3]||(D[3]=Q("span",{class:"thread"},null,-1)),D[4]||(D[4]=Q("svg",{class:"outline",viewBox:"0 0 290 195",fill:"none"},[Q("path",{pathLength:"1",d:"M.5.5h289v178a16 16 0 0 1-16 16H.5Z"})],-1)),Q("span",N0,[L(o)?.image?(j(),it("img",{key:0,src:c(L(o).image),alt:""},null,8,F0)):(j(),it("span",O0))]),Q("span",B0,zt(L(o)?.title),1)],2)):he("",!0)],512))}}),i_=Ye(n_,[["__scopeId","data-v-8c1ad664"]]),s_=["aria-expanded"],r_={class:"sr-only"},a_=["aria-label"],o_=["aria-selected"],l_=["lang","onClick"],c_=$e({__name:"LanguageSwitch",props:{locales:{},current:{},label:{},plain:{type:Boolean}},emits:["pick"],setup(i,{emit:t}){const e=i,n=t,s=oe(!1),r=Re(()=>e.locales.find(u=>u.code===e.current)),a=Re(()=>r.value?.short??e.current.toUpperCase()),o=oe(),l=u=>{o.value&&!o.value.contains(u.target)&&(s.value=!1)};xn(()=>document.addEventListener("pointerdown",l)),si(()=>document.removeEventListener("pointerdown",l));function c(u){s.value=!1,u!==e.current&&n("pick",u)}return(u,f)=>(j(),it("div",{ref_key:"root",ref:o,class:ke(["lang",{plain:i.plain}]),onKeydown:f[1]||(f[1]=ou(pc(d=>s.value=!1,["stop"]),["esc"]))},[Q("button",{type:"button",class:"toggle","aria-haspopup":"listbox","aria-expanded":L(s),onClick:f[0]||(f[0]=d=>s.value=!L(s))},[Hs(zt(L(a)),1),Q("span",r_," — "+zt(i.label)+": "+zt(L(r)?.label),1),Q("span",{class:ke(["arrow",{up:L(s)}]),"aria-hidden":"true"},null,2)],8,s_),xe(Qe,{name:"drop"},{default:Ve(()=>[L(s)?(j(),it("ul",{key:0,role:"listbox","aria-label":i.label},[(j(!0),it(Me,null,Ne(i.locales,d=>(j(),it("li",{key:d.code,role:"option","aria-selected":d.code===i.current},[Q("button",{type:"button",lang:d.code,onClick:p=>c(d.code)},zt(d.label),9,l_)],8,o_))),128))],8,a_)):he("",!0)]),_:1})],34))}}),u_=Ye(c_,[["__scopeId","data-v-1cedc339"]]),h_={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},d_={key:0,x:"12",y:"12.6","text-anchor":"middle","dominant-baseline":"central","font-family":"'Host Grotesk', sans-serif","font-weight":"350","font-size":"16",fill:"currentColor",stroke:"none"},f_=["d"],Ho=$e({__name:"TopicIcon",props:{name:{}},setup(i){return(t,e)=>(j(),it("svg",h_,[L(Ai)[i.name]?(j(),it("text",d_,zt(L(Ai)[i.name]),1)):(j(!0),it(Me,{key:1},Ne(L(ru)[i.name],n=>(j(),it("path",{key:n,d:n},null,8,f_))),128))]))}}),p_=["aria-current","onClick"],m_={class:"name"},g_=$e({__name:"ZoneRail",props:{zones:{},active:{},travel:{}},emits:["select"],setup(i){const t=i,e=oe(),n=r=>{const a=t.zones.length,o=Math.min(Math.abs(r-t.active),a-Math.abs(r-t.active));return o===0?1:o===1?.6:o===2?.4:.3};let s=0;return xn(()=>{const r=()=>{const a=t.travel.state.progress,o=Math.abs(a-Math.round(a))*2;e.value?.style.setProperty("--fill",(.5+o*.5).toFixed(3)),s=requestAnimationFrame(r)};s=requestAnimationFrame(r)}),si(()=>cancelAnimationFrame(s)),(r,a)=>{const o=Ho;return j(),it("nav",{ref_key:"rail",ref:e,class:"rail","aria-label":"Topics"},[a[1]||(a[1]=Q("span",{class:"glow","aria-hidden":"true"},null,-1)),Q("ul",null,[(j(!0),it(Me,null,Ne(i.zones,(l,c)=>(j(),it("li",{key:l.id,class:ke(["stop",{active:c===i.active}]),style:ti({"--fade":n(c)})},[a[0]||(a[0]=Q("span",{class:"line","aria-hidden":"true"},[Q("span",{class:"line-fill"})],-1)),Q("button",{type:"button","aria-current":c===i.active?"true":void 0,onClick:u=>r.$emit("select",c)},[xe(o,{name:l.shape,class:"glyph"},null,8,["name"]),Q("span",m_,zt(l.title),1)],8,p_)],6))),128))])],512)}}}),__=Ye(g_,[["__scopeId","data-v-1326966a"]]),v_={key:0,"aria-hidden":"true"},x_={key:1,class:"mask","aria-hidden":"true"},M_=$e({__name:"RiseText",props:{text:{},tag:{default:"span"},delay:{default:0},step:{default:45}},setup(i){const t=i,e=Re(()=>t.text.split(/(\s+)/).filter(n=>n.length));return(n,s)=>(j(),rn(lu(i.tag),{class:"rise","aria-label":i.text},{default:Ve(()=>[(j(!0),it(Me,null,Ne(L(e),(r,a)=>(j(),it(Me,{key:a+r},[/^\s+$/.test(r)?(j(),it("span",v_,zt(" "))):(j(),it("span",x_,[Q("span",{class:"word",style:ti({animationDelay:`${i.delay+a*i.step/2}ms`})},zt(r),5)]))],64))),128))]),_:1},8,["aria-label"]))}}),Vo=Ye(M_,[["__scopeId","data-v-1885a4ad"]]),y_={class:"row","aria-label":"Pages in this topic"},S_=["aria-label","aria-disabled","onClick","onPointerenter","onFocus"],E_={class:"name","aria-hidden":"true"},T_=$e({__name:"PageTokens",props:{pages:{},soonLabel:{}},emits:["pick","hover"],setup(i,{emit:t}){const e=t;return si(()=>e("hover",-1)),(n,s)=>(j(),it("ul",y_,[(j(!0),it(Me,null,Ne(i.pages,(r,a)=>(j(),it("li",{key:r.slug,style:ti({"--i":a,"--dip":1-Math.min(1,Math.abs(a-(i.pages.length-1)/2))})},[Q("button",{type:"button","aria-label":r.soon?`${r.title} (${i.soonLabel??"coming soon"})`:r.title,"aria-disabled":r.soon||void 0,class:ke({soon:r.soon}),onClick:o=>e("pick",r.slug),onPointerenter:o=>e("hover",a),onPointerleave:s[0]||(s[0]=o=>e("hover",-1)),onFocus:o=>e("hover",a),onBlur:s[1]||(s[1]=o=>e("hover",-1))},null,42,S_),Q("span",E_,zt(r.title),1)],4))),128))]))}}),b_=Ye(T_,[["__scopeId","data-v-9b3ca79e"]]),A_={class:"slider","aria-label":"Pages in this topic"},w_=["onClick"],R_=$e({__name:"LevelSlider",props:{pages:{}},emits:["pick"],setup(i){return(t,e)=>(j(),it("ul",A_,[(j(!0),it(Me,null,Ne(i.pages,(n,s)=>(j(),it("li",{key:n.slug,style:ti({"--i":s})},[Q("button",{type:"button",onClick:r=>t.$emit("pick",n.slug)},[e[0]||(e[0]=Q("span",{class:"dot","aria-hidden":"true"},null,-1)),Hs(zt(n.title),1)],8,w_)],4))),128))]))}}),C_=Ye(R_,[["__scopeId","data-v-150c379b"]]),P_={key:0,class:"menu",role:"dialog","aria-modal":"true","aria-label":"All topics"},L_=["aria-label"],D_={key:0,class:"rows"},I_=["aria-expanded","onClick"],U_={class:"label"},N_={class:"fold"},F_=["tabindex","onClick"],O_=["tabindex","onClick"],B_={key:0,class:"legal"},k_=["onClick"],z_=["onMouseenter","onFocusin"],H_=["tabindex","onClick"],V_={class:"name"},G_=["aria-hidden"],W_=["tabindex","onClick"],X_=["tabindex","onClick"],$_=$e({__name:"TopicMenu",props:{zones:{},extras:{},open:{type:Boolean},active:{},closeLabel:{}},emits:["page","zone","close"],setup(i,{emit:t}){const e=i,n=t,s=oe(null),r=oe(!1);xn(()=>{const l=window.matchMedia("(max-width: 800px)");r.value=l.matches,l.addEventListener("change",c=>{r.value=c.matches})}),qe(()=>e.open,()=>{s.value=null});const a=()=>window.matchMedia("(hover: hover)").matches;function o(l){a()||s.value===l?n("zone",l):s.value=l}return(l,c)=>{const u=Ho;return j(),it(Me,null,[xe(Qe,{name:"veil"},{default:Ve(()=>[i.open?(j(),it("div",{key:0,class:"veil",onClick:c[0]||(c[0]=f=>n("close"))})):he("",!0)]),_:1}),xe(Qe,{name:"menu"},{default:Ve(()=>[i.open?(j(),it("div",P_,[Q("button",{type:"button",class:"close","aria-label":i.closeLabel,onClick:c[1]||(c[1]=f=>n("close"))},[...c[3]||(c[3]=[Q("span",{"aria-hidden":"true"},"×",-1)])],8,L_),L(r)?(j(),it("ul",D_,[(j(!0),it(Me,null,Ne(i.zones,(f,d)=>(j(),it("li",{key:f.id,class:ke(["row",{open:L(s)===d,current:d===i.active}]),style:ti({"--i":d})},[Q("button",{type:"button",class:"head","aria-expanded":L(s)===d,onClick:p=>s.value=L(s)===d?null:d},[xe(u,{name:f.shape,class:"glyph"},null,8,["name"]),Q("span",U_,zt(f.title),1),c[4]||(c[4]=Q("span",{class:"plus","aria-hidden":"true"},null,-1))],8,I_),Q("div",N_,[Q("ul",null,[Q("li",null,[Q("button",{type:"button",tabindex:L(s)===d?0:-1,onClick:p=>n("zone",d)},zt(f.title)+" →",9,F_)]),(j(!0),it(Me,null,Ne(f.pages,p=>(j(),it("li",{key:p.slug},[Q("button",{type:"button",tabindex:L(s)===d?0:-1,onClick:g=>n("page",p.slug)},zt(p.title),9,O_)]))),128))])])],6))),128)),i.extras.length?(j(),it("li",B_,[(j(!0),it(Me,null,Ne(i.extras,f=>(j(),it("button",{key:f.slug,type:"button",onClick:d=>n("page",f.slug)},zt(f.title),9,k_))),128))])):he("",!0)])):(j(),it("ul",{key:1,class:"grid",style:ti({"--rows":Math.ceil(i.zones.length/2)})},[(j(!0),it(Me,null,Ne(i.zones,(f,d)=>(j(),it("li",{key:f.id,class:ke(["cell",{current:d===i.active,listing:L(s)===d}]),style:ti({"--i":d}),onMouseenter:p=>s.value=d,onMouseleave:c[2]||(c[2]=p=>s.value=null),onFocusin:p=>s.value=d},[Q("button",{type:"button",class:"face",tabindex:L(s)===d?-1:0,onClick:p=>o(d)},[xe(u,{name:f.shape,class:"icon"},null,8,["name"]),Q("span",V_,zt(f.title),1)],8,H_),Q("div",{class:"pages","aria-hidden":L(s)!==d},[Q("button",{type:"button",class:"title",tabindex:L(s)===d?0:-1,onClick:p=>n("zone",d)},zt(f.title),9,W_),Q("ul",null,[(j(!0),it(Me,null,Ne(f.pages,p=>(j(),it("li",{key:p.slug},[Q("button",{type:"button",tabindex:L(s)===d?0:-1,onClick:g=>n("page",p.slug)},zt(p.title),9,X_)]))),128))])],8,G_)],46,z_))),128))],4))])):he("",!0)]),_:1})],64)}}}),q_=Ye($_,[["__scopeId","data-v-6097b2d6"]]),Y_=["src","alt"],K_={key:1,class:"blank","aria-hidden":"true"},Z_={key:2},J_={key:0,class:"captions"},j_=["aria-current","onClick"],Q_={class:"num"},tv={key:1,class:"controls"},ev=["disabled"],nv={class:"count"},iv=["disabled"],sv=$e({__name:"BlockCarousel",props:{slides:{},vertical:{type:Boolean}},setup(i){const t=i,e=oe(),n=oe(0);function s(){const a=e.value;a&&(n.value=t.vertical?Math.round(a.scrollTop/a.clientHeight):Math.round(a.scrollLeft/a.clientWidth))}function r(a){const o=e.value;if(!o)return;const l=Math.max(0,Math.min(t.slides.length-1,a));o.scrollTo(t.vertical?{top:l*o.clientHeight,behavior:"smooth"}:{left:l*o.clientWidth,behavior:"smooth"})}return(a,o)=>(j(),it("div",{class:ke(["carousel",{vertical:i.vertical}])},[Q("ul",{ref_key:"track",ref:e,class:"track",tabindex:"0","aria-label":"Image carousel",onScrollPassive:s},[(j(!0),it(Me,null,Ne(i.slides,(l,c)=>(j(),it("li",{key:c},[Q("figure",null,[l.src?(j(),it("img",{key:0,src:l.src,alt:l.caption,loading:"lazy"},null,8,Y_)):(j(),it("div",K_)),i.vertical?he("",!0):(j(),it("figcaption",Z_,zt(l.caption),1))])]))),128))],544),i.vertical?(j(),it("ol",J_,[(j(!0),it(Me,null,Ne(i.slides,(l,c)=>(j(),it("li",{key:c},[Q("button",{type:"button","aria-current":c===L(n),onClick:u=>r(c)},[Q("span",Q_,zt(String(c+1).padStart(2,"0")),1),Hs(zt(l.caption),1)],8,j_)]))),128))])):(j(),it("div",tv,[Q("button",{type:"button","aria-label":"Previous slide",disabled:L(n)===0,onClick:o[0]||(o[0]=l=>r(L(n)-1))},"←",8,ev),Q("span",nv,zt(L(n)+1)+" / "+zt(i.slides.length),1),Q("button",{type:"button","aria-label":"Next slide",disabled:L(n)===i.slides.length-1,onClick:o[1]||(o[1]=l=>r(L(n)+1))},"→",8,iv)]))],2))}}),rv=Ye(sv,[["__scopeId","data-v-7a73ef18"]]),av={class:"video"},ov=["src","poster"],lv={key:1,class:"blank","aria-hidden":"true"},cv=$e({__name:"BlockVideo",props:{caption:{},src:{},poster:{}},setup(i){return(t,e)=>(j(),it("figure",av,[i.src?(j(),it("video",{key:0,src:i.src,poster:i.poster,controls:"",playsinline:"",preload:"metadata"},null,8,ov)):(j(),it("div",lv,[...e[0]||(e[0]=[Q("span",{class:"play"},null,-1)])])),Q("figcaption",null,zt(i.caption),1)]))}}),uv=Ye(cv,[["__scopeId","data-v-8f9c3c35"]]),hv={key:0,class:"sheet"},dv=["aria-label"],fv=["aria-label"],pv={key:0,class:"subtitle"},mv={class:"hero"},gv=["src","alt"],_v={key:1,class:"blank","aria-hidden":"true"},vv={class:"chip"},xv=["src"],Mv={key:0,class:"lead"},yv={key:2,class:"gap"},Sv={class:"blocks"},Ev={key:0,class:"pair"},Tv={class:"figure"},bv=["src","alt"],Av={key:1,class:"blank","aria-hidden":"true"},wv={class:"text"},Rv={key:1},Cv={key:2,class:"text"},Pv={key:3,class:"columns"},Lv={key:4,class:"figure"},Dv=["src","alt"],Iv={key:1,class:"blank","aria-hidden":"true"},Uv={key:7,class:"rule"},Nv={key:8,class:"stat"},Fv={class:"value"},Ov={class:"stat-text"},Bv={key:10,class:"callout"},kv={class:"callout-title"},zv=["onClick"],Hv={class:"label"},Vv=$e({__name:"ContentPanel",props:{page:{},topic:{},closeLabel:{}},emits:["close","go"],setup(i,{emit:t}){const e=i,n=t,s=oe();qe(()=>e.page?.slug,()=>mc(()=>s.value?.scrollTo({top:0})));const r=as().app.baseURL,a=Re(()=>!!e.page?.at),o=Re(()=>{const p=e.page?.blocks[0];return p?.type==="figure"?p:null}),l=Re(()=>{const p=e.page?o.value?e.page.blocks.slice(1):e.page.blocks:[],g=[];for(let v=0;v<p.length;v++){const m=p[v],h=p[v+1];m.type==="figure"&&h?.type==="text"?(g.push({type:"pair",figure:m,text:h.text}),v++):g.push(m)}return g});let c=-1,u=0;function f(){const p=s.value;if(!p)return;const g=c-p.scrollTop;if(Math.abs(g)<.5){p.scrollTop=c,c=-1;return}p.scrollTop+=g*.1,u=requestAnimationFrame(f)}function d(p){const g=s.value;!g||p.ctrlKey||matchMedia("(prefers-reduced-motion: reduce)").matches||(p.preventDefault(),c<0&&(c=g.scrollTop),c=Math.max(0,Math.min(g.scrollHeight-g.clientHeight,c+p.deltaY*(p.deltaMode===1?100/6:1))),cancelAnimationFrame(u),u=requestAnimationFrame(f))}return qe(()=>e.page?.slug,()=>{c=-1,cancelAnimationFrame(u)}),si(()=>cancelAnimationFrame(u)),(p,g)=>{const v=Vo,m=rv,h=uv;return j(),rn(Qe,{name:"sheet",duration:900},{default:Ve(()=>[i.page?(j(),it("div",hv,[Q("div",{class:"veil","aria-hidden":"true",onClick:g[0]||(g[0]=S=>n("close"))}),Q("button",{type:"button",class:"close","aria-label":i.closeLabel,onClick:g[1]||(g[1]=S=>n("close"))},[...g[2]||(g[2]=[Q("svg",{class:"icon-12",viewBox:"0 0 12 12","aria-hidden":"true"},[Q("path",{d:"M3 3l6 6M9 3l-6 6"})],-1)])],8,dv),Q("aside",{class:"panel",role:"dialog","aria-modal":"false","aria-label":i.page.title},[Q("div",{ref_key:"body",ref:s,class:"body",onWheel:d},[xe(Qe,{name:"swap",mode:"out-in"},{default:Ve(()=>[(j(),it("article",{key:i.page.slug},[L(a)?(j(),it(Me,{key:0},[xe(v,{tag:"h2",class:"place-title",text:i.page.title,delay:450},null,8,["text"]),i.page.lead?(j(),it("p",pv,zt(i.page.lead),1)):he("",!0),g[3]||(g[3]=Q("hr",{class:"first"},null,-1))],64)):he("",!0),Q("figure",mv,[L(o)?.src?(j(),it("img",{key:0,src:L(o).src,alt:L(o).caption},null,8,gv)):(j(),it("div",_v)),Q("p",vv,[Q("img",{class:"chip-mark",src:`${L(r)}logo-color.png`,alt:"",width:"320",height:"280"},null,8,xv),Hs(zt(i.topic),1)])]),L(a)?(j(),it("div",yv)):(j(),it(Me,{key:1},[g[4]||(g[4]=Q("hr",null,null,-1)),xe(v,{tag:"h2",text:i.page.title,delay:450},null,8,["text"]),i.page.lead?(j(),it("p",Mv,zt(i.page.lead),1)):he("",!0)],64)),Q("div",Sv,[(j(!0),it(Me,null,Ne(L(l),(S,M)=>(j(),it(Me,{key:M},[S.type==="pair"?(j(),it("div",Ev,[Q("figure",Tv,[S.figure.src?(j(),it("img",{key:0,src:S.figure.src,alt:S.figure.caption,loading:"lazy"},null,8,bv)):(j(),it("div",Av)),Q("figcaption",null,zt(S.figure.caption),1)]),Q("p",wv,zt(S.text),1)])):S.type==="heading"?(j(),it("h3",Rv,zt(S.text),1)):S.type==="text"?(j(),it("p",Cv,zt(S.text),1)):S.type==="columns"?(j(),it("div",Pv,[Q("p",null,zt(S.left),1),Q("p",null,zt(S.right),1)])):S.type==="figure"?(j(),it("figure",Lv,[S.src?(j(),it("img",{key:0,src:S.src,alt:S.caption,loading:"lazy"},null,8,Dv)):(j(),it("div",Iv)),Q("figcaption",null,zt(S.caption),1)])):S.type==="carousel"?(j(),rn(m,{key:5,slides:S.slides,vertical:S.vertical},null,8,["slides","vertical"])):S.type==="spacer"?(j(),it("div",{key:6,class:ke(["spacer",S.size??"m"]),"aria-hidden":"true"},null,2)):S.type==="rule"?(j(),it("hr",Uv)):S.type==="stat"?(j(),it("div",Nv,[Q("p",Fv,zt(S.value),1),Q("p",Ov,zt(S.text),1)])):S.type==="video"?(j(),rn(h,{key:9,caption:S.caption,src:S.src,poster:S.poster},null,8,["caption","src","poster"])):S.type==="button"?(j(),it("div",Bv,[Q("p",kv,zt(S.label),1),Q("button",{type:"button",class:"cta fill-btn btn-md",onClick:b=>n("go",S.to)},[g[5]||(g[5]=Q("span",{class:"fill","aria-hidden":"true"},null,-1)),g[6]||(g[6]=Q("span",{class:"knob","aria-hidden":"true"},[Q("svg",{class:"icon-12 arrow in",viewBox:"0 0 12 12"},[Q("path",{d:"M2 6h8M7 3l3 3-3 3"})]),Q("svg",{class:"icon-12 arrow out",viewBox:"0 0 12 12"},[Q("path",{d:"M2 6h8M7 3l3 3-3 3"})])],-1)),Q("span",Hv,zt(S.label),1)],8,zv)])):he("",!0)],64))),128))])]))]),_:1})],544)],8,fv)])):he("",!0)]),_:1})}}}),Gv=Ye(Vv,[["__scopeId","data-v-59bf5eb8"]]),Wv={class:"tutorial","aria-live":"polite"},Xv={class:"pictures","aria-hidden":"true"},$v={class:"cell"},qv={class:"cell"},Yv={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"},Kv={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"},Zv={class:"text"},Jv={class:"label"},jv=$e({__name:"AppTutorial",props:{steps:{}},emits:["done"],setup(i,{emit:t}){const e=i,n=t,s=oe(0),r=Re(()=>e.steps[s.value]);function a(){s.value<e.steps.length-1?s.value++:n("done")}return(o,l)=>{const c=Ho,u=Vo;return j(),it("section",Wv,[xe(Qe,{name:"card",mode:"out-in"},{default:Ve(()=>[(j(),it("div",{key:L(s),class:"card"},[Q("div",Xv,[Q("span",$v,[xe(c,{name:L(s)===0?"globe":"target"},null,8,["name"])]),Q("span",qv,[L(s)===0?(j(),it("svg",Yv,[...l[0]||(l[0]=[Q("rect",{x:"7",y:"3",width:"10",height:"17",rx:"5"},null,-1),Q("path",{d:"M12 6.5v3",class:"wheel"},null,-1)])])):(j(),it("svg",Kv,[...l[1]||(l[1]=[Q("path",{d:"M9.5 12V5a1.5 1.5 0 0 1 3 0v6M12.5 10.5V9a1.5 1.5 0 0 1 3 0v2M15.5 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4 15a1.5 1.5 0 0 1 2.5-1.6L9.5 16"},null,-1)])]))])]),xe(u,{tag:"h1",text:L(r).title,delay:250},null,8,["text"]),Q("p",Zv,zt(L(r).text),1),Q("button",{type:"button",class:"action fill-btn btn-lg",onClick:a},[l[2]||(l[2]=Q("span",{class:"fill","aria-hidden":"true"},null,-1)),l[3]||(l[3]=Q("span",{class:"knob","aria-hidden":"true"},[Q("svg",{class:"icon-12 arrow in",viewBox:"0 0 12 12"},[Q("path",{d:"M2 6h8M7 3l3 3-3 3"})]),Q("svg",{class:"icon-12 arrow out",viewBox:"0 0 12 12"},[Q("path",{d:"M2 6h8M7 3l3 3-3 3"})])],-1)),Q("span",Jv,zt(L(r).button),1)])]))]),_:1})])}}}),Qv=Ye(jv,[["__scopeId","data-v-32a0c68a"]]),tx=$e({__name:"AppCursor",props:{hint:{},enabled:{type:Boolean}},setup(i){const t=i,e=oe(),n=oe(!1);let s=0,r=0,a=0,o=0,l=0,c=!1;function u(d){if(d.pointerType!=="mouse")return;a=d.clientX,o=d.clientY,c||(c=!0,s=a,r=o);const p=d.target;n.value=!!p&&p.tagName==="CANVAS"}const f=()=>{n.value=!1};return xn(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;window.addEventListener("pointermove",u,{passive:!0}),document.documentElement.addEventListener("pointerleave",f);const d=()=>{s+=(a-s)*.16,r+=(o-r)*.16,e.value&&(e.value.style.transform=`translate(${s.toFixed(1)}px, ${r.toFixed(1)}px)`),l=requestAnimationFrame(d)};l=requestAnimationFrame(d)}),si(()=>{cancelAnimationFrame(l),window.removeEventListener("pointermove",u),document.documentElement.removeEventListener("pointerleave",f)}),(d,p)=>(j(),it("div",{ref_key:"el",ref:e,class:ke(["cursor",{shown:L(n)&&t.enabled}]),"aria-hidden":"true"},[p[0]||(p[0]=Q("span",{class:"halo"},null,-1)),p[1]||(p[1]=Q("span",{class:"ring"},null,-1)),xe(Qe,{name:"swap",mode:"out-in"},{default:Ve(()=>[(j(),it("span",{key:i.hint,class:"hint"},zt(i.hint),1))]),_:1})],2))}}),ex=Ye(tx,[["__scopeId","data-v-3807efc6"]]),nx={class:"sr-only"},ix={class:"title"},sx={class:"line"},rx={class:"line"},Pa=84,oc=280/320,lc=1.9,ax=$e({__name:"AppLoader",props:{progress:{},label:{},brand:{},done:{type:Boolean}},emits:["ready","reveal","gone"],setup(i,{emit:t}){const e=i,n=t,s=oe(),r=oe(),a=oe(),o=oe(),l=oe(),c=`${as().app.baseURL}logo-color.png`,u=Re(()=>e.brand.split(" ")[0]??e.brand),f=Re(()=>e.brand.split(" ").slice(1).join(" ")),d=oe(!1);function p(){const y=Pa,G=Pa*oc,V=y*.17,k=new Path2D,Y=[y*.52,0],F=[y,G],st=[0,G];return k.moveTo((Y[0]+F[0])/2,(Y[1]+F[1])/2),k.arcTo(F[0],F[1],st[0],st[1],V),k.arcTo(st[0],st[1],Y[0],Y[1],V),k.arcTo(Y[0],Y[1],F[0],F[1],V),k.closePath(),{p:k,w:y,h:G,length:3.05*y}}function g(y,G,V,k){return Y=>{let F=Y;for(let st=0;st<6;st++){const W=3*(1-F)**2*F*y+3*(1-F)*F*F*V+F**3,yt=3*(1-F)**2*y+6*(1-F)*F*(V-y)+3*F*F*(1-V);F-=(W-Y)/(yt||1e-4),F=Math.min(1,Math.max(0,F))}return 3*(1-F)**2*F*G+3*(1-F)*F*F*k+F**3}}const v=g(.45,0,.25,1),m=y=>y<=0?0:y>=1?1:y<.5?2**(20*y-10)/2:(2-2**(-20*y+10))/2,h=(y,G,V)=>Math.min(1,Math.max(0,(y-G)/V)),S=y=>{const G=y.replace("#",""),V=G.length===3?G.split("").map(k=>k+k).join(""):G;return[0,2,4].map(k=>parseInt(V.slice(k,k+2),16)||0)},M=[1,1.76,2.43,3.31,4.05,5];let b=0,N=0,C=-1,R=!1,B=!1,et=!1;function _(y){const G=r.value,V=s.value;if(!G||!V)return;const k=G.getContext("2d"),Y=Math.min(devicePixelRatio||1,2),F=V.clientWidth,st=V.clientHeight;G.width!==Math.round(F*Y)&&(G.width=Math.round(F*Y),G.height=Math.round(st*Y));const W=F<=800,yt=Math.min((W?.66:.36)*F,.58*st/oc)/Pa,pt=W?60/84:1,{p:mt,w:Zt,h:Vt,length:J}=p(),ct=getComputedStyle(V),ft=S(ct.getPropertyValue("--surface").trim()||"#f2f4fb"),vt=S(ct.getPropertyValue("--brand").trim()||"#2440c9"),Ot=(ot,ht,lt)=>`rgb(${ot.map((xt,Ut)=>Math.round(xt*lt+ht[Ut]*(1-lt))).join(",")})`,Bt=vt.map((ot,ht)=>ot*.12+ft[ht]*.88),kt=et?99:(y-N)/1e3*lc,tt=C<0?-1:et?99:(y-C)/1e3*lc;k.setTransform(1,0,0,1,0,0),k.clearRect(0,0,G.width,G.height),k.fillStyle=Ot(ft,ft,1),k.fillRect(0,0,G.width,G.height);const U=ot=>{k.setTransform(Y*ot,0,0,Y*ot,(F/2-Zt*ot/2)*Y,(st/2-Vt*2/3*ot+2)*Y),k.lineWidth=1/ot};if(M.forEach((ot,ht)=>{const lt=ot*yt;let xt=lt/1.5+(lt-lt/1.5)*v(h(kt,(M.length-1-ht)*.1,1.2));tt>=0&&(xt*=1+9*v(h(tt,1.2+ht*.1,2.5))),U(xt);const Ut=Math.max(.6,1-ht*.08),Tt=v(h(kt,5.2+ht*.2,1));k.strokeStyle=Ot(vt,Bt,Tt*Ut),k.setLineDash([]),k.stroke(mt),ht===0&&(k.strokeStyle=Ot(vt,vt,1),k.setLineDash([J*Math.min(1,e.progress),J*2]),k.stroke(mt),k.setLineDash([]))}),tt>=1.2){const ot=.98*pt*(1+99*v(h(tt,1.45,3.5)));U(ot),k.globalCompositeOperation="destination-out",k.fill(mt),k.globalCompositeOperation="source-over"}const E=a.value;if(E){const ot=v(h(kt,1.2,1.2)),ht=m(h(kt,2.2,1.2)),lt=tt>=0?m(h(tt,0,1.2)):0,xt=o.value?.closest(".title"),Tt=-(xt?xt.offsetWidth+(W?12:18):W?110:170)/2*ht*(1-lt),A=tt>=1.45?v(h(tt,1.45,1.2)):0;E.style.transform=`translateX(${Tt}px) scale(${(.6+.4*ot)*(1+A*5)})`,E.style.opacity=String(ot*(1-A)),[o.value,l.value].forEach((x,H)=>{if(!x)return;const K=v(h(kt,2.55+H*.3,1.2)),$=tt>=0?m(h(tt,0,1.2)):0;x.style.transform=`translateX(${(-101*(1-K)-101*$).toFixed(2)}%)`})}if(!R&&kt>=7.4&&e.progress>=1&&(R=!0,n("ready")),!B&&tt>=2.1&&(B=!0,n("reveal")),tt>=4.95){d.value=!0,n("gone");return}b=requestAnimationFrame(_)}return xn(()=>{et=matchMedia("(prefers-reduced-motion: reduce)").matches,N=performance.now(),b=requestAnimationFrame(_)}),qe(()=>e.done,y=>{y&&C<0&&(C=performance.now(),et&&(d.value=!0,n("gone")))}),si(()=>cancelAnimationFrame(b)),(y,G)=>L(d)?he("",!0):(j(),it("div",{key:0,ref_key:"root",ref:s,class:ke(["loader",{leaving:i.done}]),role:"status","aria-live":"polite"},[Q("span",nx,zt(i.done?"":`${i.brand} — ${i.label}`),1),Q("canvas",{ref_key:"canvas",ref:r,"aria-hidden":"true"},null,512),Q("div",{ref_key:"mark",ref:a,class:"mark","aria-hidden":"true"},[Q("img",{src:c,alt:"",width:"320",height:"280",decoding:"async"}),Q("p",ix,[Q("span",sx,[Q("span",{ref_key:"top",ref:o,class:"text"},zt(L(u)),513)]),Q("span",rx,[Q("span",{ref_key:"bottom",ref:l,class:"text"},zt(L(f)),513)])])],512)],2))}}),ox=Ye(ax,[["__scopeId","data-v-7fbdee47"]]),lx=.1,cc=100,cx=25e-5,ux=.9,uc=.1,hx=.95,hc=2,dx=.3,fx=100,px=10,Pr=(i,t,e)=>Math.max(t,Math.min(e,i)),mx=(i,t,e)=>Pr((i-t)/(e-t),0,1);function gx(i,t,e){const n={progress:0,velocity:0,direction:1};let s=0,r=0,a=null,o=0,l=0,c=1,u=!1,f=-1e3,d=0,p=!0,g=!1;const v=h=>(h%i+i)%i,m=(h,S=!1)=>{a=h,o=n.progress,l=0,u=S;const M=Math.abs(h-o);c=S?Math.max(.5,px*M):.9+1.3*Math.sqrt(Math.min(3,M)),n.velocity=0,r=0,s=0};return{state:n,get stops(){return i},set stops(h){i=Math.max(1,h)},setEnabled(h){g=h,h||(n.velocity=0,r=0,s=0)},impulse(h){g&&(a!==null&&(a=null),s+=h,f=performance.now())},goTo(h){const S=Math.round(n.progress),M=v(h)-v(S);m(S+(M>i/2?M-i:M<-i/2?M+i:M))},step(h){g&&m(Math.round(a??n.progress)+h)},jump(h){a=null,n.progress=v(h),n.velocity=0,r=0,s=0},nearest:()=>v(Math.round(n.progress)),update(h){const S=n.progress,M=h*60;if(a!==null){l+=h;const R=Math.min(1,l/c),B=u?1-(1-R)*(1-R):R<.5?2*R*R:1-Math.pow(-2*R+2,2)/2;n.progress=o+(a-o)*B,R>=1&&(n.progress=a,a=null)}else{const R=s*(1-Math.pow(1-lx,M));s-=R,r+=Pr(R,-cc*M,cc*M)*cx,r=Pr(r*Math.pow(ux,M),-uc,uc),n.velocity=Pr((n.velocity+r*M)*Math.pow(hx,M),-hc,hc);const B=n.progress-Math.floor(n.progress),et=(B+.5)%1,_=Math.sin(Math.PI*mx(et,.1,.5));n.velocity*=Math.pow(1-.015*_,M),n.progress+=n.velocity*h*dx,performance.now()-f>fx&&Math.abs(s)<1&&Math.abs(n.velocity)<.25&&B>.48&&B<.82&&(n.progress+=n.direction*h*.22)}const b=n.progress-S;Math.abs(b)>1e-5&&(n.direction=Math.sign(b));const N=v(Math.round(n.progress));N!==d&&(d=N,t(N));const C=Math.abs(n.progress-Math.round(n.progress))<.06;C!==p&&(p=C,e(p))}}}let Un,dn,vi,La="",es=!1,dc=0;function Ao(){if(!Un){const i=window.AudioContext??window.webkitAudioContext;if(!i)return;Un=new i,dn=Un.createGain(),dn.gain.value=es?0:1,dn.connect(Un.destination)}return Un.state==="suspended"&&Un.resume(),Un}function fc(i,t,e,n,s="sine"){const r=Ao();if(!r||!dn||es)return;const a=r.createOscillator(),o=r.createGain(),l=r.currentTime;a.type=s,a.frequency.setValueAtTime(i,l),a.frequency.exponentialRampToValueAtTime(t,l+e),o.gain.setValueAtTime(n,l),o.gain.exponentialRampToValueAtTime(1e-4,l+e),a.connect(o).connect(dn),a.start(l),a.stop(l+e+.02)}const Ln={get muted(){return es},init(i=""){es=!1;try{localStorage.removeItem("sound")}catch{}La=i&&(new Audio().canPlayType('audio/webm; codecs="opus"')?`${i}.webm`:`${i}.m4a`)},setMuted(i){es=i,Un&&dn&&dn.gain.setTargetAtTime(i?0:1,Un.currentTime,.15)},startAmbient(){const i=Ao();if(!i||!dn||vi||!La)return;vi=new Audio(La),vi.loop=!0,vi.preload="auto";const t=i.createGain();t.gain.value=0,t.gain.setTargetAtTime(.5,i.currentTime,1.5),i.createMediaElementSource(vi).connect(t).connect(dn),vi.play().catch(()=>{vi=void 0})},click(){fc(720,420,.09,.07)},hover(){const i=performance.now();i-dc<90||(dc=i,fc(1250,1100,.04,.018,"triangle"))},travel(){const i=Ao();if(!i||!dn||es)return;const t=Math.floor(i.sampleRate*.9),e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);for(let l=0;l<t;l++)n[l]=Math.random()*2-1;const s=i.createBufferSource(),r=i.createBiquadFilter(),a=i.createGain(),o=i.currentTime;s.buffer=e,r.type="bandpass",r.Q.value=.8,r.frequency.setValueAtTime(300,o),r.frequency.exponentialRampToValueAtTime(2400,o+.45),r.frequency.exponentialRampToValueAtTime(400,o+.9),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.05,o+.35),a.gain.exponentialRampToValueAtTime(1e-4,o+.9),s.connect(r).connect(a).connect(dn),s.start(o)}},_x="$s";function Dn(...i){const t=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(t);const[e,n]=i;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const s=_x+e,r=cu(),a=uu(r.payload.state,s);if(a.value===void 0&&n){const o=n();if(hu(o))return r.payload.state[s]=o,o;a.value=o}return a}function vx(){const i=Dn("site",()=>null),t=Dn("locales",()=>[]),e=Dn("locale",()=>"en"),n=Dn("phase",()=>"loading"),s=Dn("zone",()=>0),r=Dn("menu",()=>!1),a=Dn("page",()=>null),o=Dn("fromMenu",()=>!1),l=Dn("focused",()=>!1),c=Re(()=>i.value?.zones??[]),u=Re(()=>c.value[s.value]),f=Re(()=>{for(const h of c.value){const S=h.pages.find(M=>M.slug===a.value);if(S)return S}return i.value?.extras?.find(h=>h.slug===a.value)??null});async function d(){const h=as().app.baseURL;t.value=await $fetch(`${h}content/locales.json`);let S=new URLSearchParams(location.search).get("lang");if(!S)try{S=localStorage.getItem("lang")}catch{}const M=t.value.find(N=>N.code===S||N.param===S);await p(M?M.code:t.value[0].code,!1);const b=()=>{const N=location.hash.replace(/^#\/?/,"");N?v(N,!1):a.value=null};b(),window.addEventListener("hashchange",b)}async function p(h,S=!0){const M=as().app.baseURL;if(i.value=await $fetch(`${M}content/${h}.json`),e.value=h,document.documentElement.lang=h,S){try{localStorage.setItem("lang",h)}catch{}const b=new URL(location.href);h===t.value[0].code?b.searchParams.delete("lang"):b.searchParams.set("lang",t.value.find(N=>N.code===h)?.param??h),history.replaceState(null,"",b)}}function g(h){s.value=Math.max(0,Math.min(c.value.length-1,h))}function v(h,S=!0,M=!1){o.value=M;const b=c.value.findIndex(N=>N.pages.some(C=>C.slug===h));b<0&&!i.value?.extras?.some(N=>N.slug===h)||(b>=0&&(s.value=b),a.value=h,r.value=!1,S&&history.replaceState(null,"",`#/${h}`))}function m(){a.value=null,o.value&&(r.value=!0,o.value=!1),history.replaceState(null,"",location.pathname+location.search)}return{site:i,locales:t,locale:e,phase:n,zones:c,zone:u,zoneIndex:s,menuOpen:r,page:f,pageSlug:a,focused:l,fromMenu:o,load:d,setLocale:p,goToZone:g,openPage:v,closePage:m}}const xx=globalThis.setInterval,Mx={class:"bar"},yx=["href"],Sx=["src","alt"],Ex={class:"bar-end"},Tx=["aria-label","aria-pressed"],bx={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Ax={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},wx={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},Rx=["aria-label"],Cx={key:0},Px={key:0,class:"explore"},Lx={class:"index"},Dx={class:"summary"},Ix={class:"foot"},Ux={class:"hint"},Nx={key:0,class:"extra"},Fx={key:0,class:"foot-end"},Ox={key:0,class:"legal","aria-label":"Legal"},Bx=["onClick"],kx=["aria-label","aria-pressed"],zx={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Hx={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},Vx={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},Gx=["aria-label"],Wx={class:"text label"},Xx={key:0,class:"foot tutorial-foot"},$x={class:"foot-end"},qx={key:0,class:"legal","aria-label":"Legal"},Yx=["onClick"],Kx=["aria-label","aria-pressed"],Zx={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Jx={key:0,d:"M16 9.5l5 5M21 9.5l-5 5"},jx={key:1,d:"M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"},Sr="p2630-return",Qx=$e({__name:"index",setup(i){const{site:t,locales:e,locale:n,phase:s,zones:r,zone:a,zoneIndex:o,menuOpen:l,page:c,focused:u,fromMenu:f,load:d,setLocale:p,goToZone:g,openPage:v,closePage:m}=vx();function h(){if(ft.value){u.value=!0;return}const tt=a.value?.pages[0];tt&&v(tt.slug)}function S(){c.value&&(f.value=!1,m()),l.value=!1,u.value=!1,s.value==="explore"&&g(0)}const M=as().app.baseURL,b=oe(0),N=oe(!1);xn(async()=>{const tt=performance.now(),U=1400,E=xx(()=>{b.value=Math.min(N.value?1:.9,(performance.now()-tt)/U)},60);await d(),N.value=!0,await new Promise(ot=>setTimeout(ot,Math.max(0,U-(performance.now()-tt))+250)),clearInterval(E),b.value=1});let C=-1;addEventListener("pageshow",tt=>{if(tt.persisted)try{sessionStorage.removeItem(Sr)}catch{}});function R(){let tt=null;try{tt=sessionStorage.getItem(Sr),sessionStorage.removeItem(Sr)}catch{}if(tt!==null&&!c.value){s.value="explore",C=Number(tt),F.jump(C),g(C);return}s.value=c.value?"explore":"tutorial"}const B=oe(!1),et=oe(!1),_=Re(()=>s.value==="explore"&&!l.value&&!c.value&&!u.value),y=Re(()=>u.value&&a.value?a.value.pages.map(tt=>({slug:tt.slug,title:tt.title,at:tt.at,image:tt.image,icon:tt.icon,href:tt.href,soon:tt.soon})):[]);function G(tt){const U=a.value?.pages.find(E=>E.slug===tt);if(U?.href){try{sessionStorage.setItem(Sr,String(o.value))}catch{}location.href=U.href;return}U?.soon||v(tt)}qe(o,tt=>{if(tt===C){C=-1,mc(()=>{u.value=!0});return}c.value||(u.value=!1)});const V=oe(!0),k=oe(!1);xn(()=>{Ln.init(`${M}audio/ambient`),k.value=Ln.muted;const tt=U=>U.target?.closest?.("button, a");document.addEventListener("click",U=>{tt(U)&&Ln.click(),s.value==="explore"&&!k.value&&Ln.startAmbient()}),document.addEventListener("pointerover",U=>{U.pointerType==="mouse"&&tt(U)&&Ln.hover()})});function Y(){k.value=!k.value,Ln.setMuted(k.value),k.value||Ln.startAmbient()}qe(s,tt=>{tt==="explore"&&Ln.startAmbient()});const F=gx(6,tt=>{o.value=tt,Ln.travel()},tt=>{V.value=tt});qe(()=>r.value.length,tt=>{tt&&(F.stops=tt)}),qe(_,tt=>F.setEnabled(tt),{immediate:!0}),qe(o,tt=>{F.nearest()!==tt&&F.goTo(tt)});const st=oe(!1);function W(tt){F.impulse(tt.deltaY),_.value&&Math.abs(tt.deltaY)>2&&(st.value=!0)}let yt=null;function pt(tt){yt=tt.touches[0].clientY}function mt(tt){if(yt===null)return;const U=tt.touches[0].clientY;F.impulse((yt-U)*4),yt=U,_.value&&(st.value=!0)}function Zt(tt){tt.key==="Escape"?c.value?m():l.value?l.value=!1:u.value=!1:tt.key==="ArrowDown"||tt.key==="ArrowRight"?F.step(1):(tt.key==="ArrowUp"||tt.key==="ArrowLeft")&&F.step(-1)}xn(()=>window.addEventListener("keydown",Zt)),si(()=>window.removeEventListener("keydown",Zt));const Vt=oe(!0);xn(()=>{const tt=window.matchMedia("(min-width: 801px)");Vt.value=tt.matches,tt.addEventListener("change",U=>{Vt.value=U.matches})});const J=oe(!1),ct=oe(-1),ft=Re(()=>a.value?.shape==="chain"),vt=Re(()=>Vt.value&&ft.value),Ot=Re(()=>Vt.value?c.value?.37:l.value?.25:0:0),Bt=Re(()=>Vt.value?42e3:15e3),kt=Re(()=>r.value.length?r.value.map(tt=>tt.shape):["globe"].slice());return fu(()=>{const tt=t.value?.ui.brand??"MCMC P2630",U=c.value?.lead??t.value?.ui.description??"";return{title:c.value?`${c.value.title} · ${tt}`:tt,meta:[{name:"description",content:U},{property:"og:description",content:U}]}}),(tt,U)=>{const E=i_,ot=u_,ht=__,lt=Vo,xt=b_,Ut=C_,Tt=q_,A=Gv,x=Qv,H=ex,K=ox;return j(),it("main",{class:"page",onWheelPassive:W,onTouchstartPassive:pt,onTouchmovePassive:mt},[xe(E,{shapes:L(kt),travel:L(F),active:L(s)==="explore",gallery:L(s)==="tutorial",shift:L(Ot),count:L(Bt),"land-url":`${L(M)}data/land.json`,focused:L(u),points:L(vt)?[]:L(y),card:L(Vt),token:!1,"token-hover":L(J),tiles:L(u)&&L(vt)&&!L(c)&&!L(l)?L(y).length:0,"tile-icons":L(y).map($=>$.icon),"tile-hover":L(ct),onPick:G},null,8,["shapes","travel","active","gallery","shift","count","land-url","focused","points","card","token-hover","tiles","tile-icons","tile-hover"]),L(t)?(j(),it(Me,{key:0},[Q("header",Mx,[Xn(Q("a",{class:"brand",href:L(M),onClick:pc(S,["prevent"])},[Q("img",{src:`${L(M)}logo-badge.png`,alt:L(t).ui.brand,width:"566",height:"206",decoding:"async"},null,8,Sx)],8,yx),[[$n,L(s)==="explore"]]),Q("span",Ex,[L(Vt)?he("",!0):(j(),it(Me,{key:0},[Xn(xe(ot,{locales:L(e),current:L(n),label:L(t).ui.language,onPick:L(p)},null,8,["locales","current","label","onPick"]),[[$n,L(s)==="explore"&&!L(l)&&!L(c)&&L(e).length>1]]),Xn(Q("button",{type:"button",class:"glass square","aria-label":L(k)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(k),onClick:Y},[(j(),it("svg",bx,[U[10]||(U[10]=Q("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(k)?(j(),it("path",Ax)):(j(),it("path",wx))]))],8,Tx),[[$n,L(s)==="explore"&&!L(l)]])],64)),Xn(Q("button",{type:"button",class:ke(["glass topics",{square:!L(Vt)}]),"aria-label":L(Vt)?void 0:L(t).ui.menuShort,"aria-haspopup":"dialog",onClick:U[0]||(U[0]=$=>l.value=!0)},[U[11]||(U[11]=du('<svg viewBox="0 0 12 12" aria-hidden="true" data-v-31643b09><circle cx="6" cy="1.5" r="1" data-v-31643b09></circle><circle cx="6" cy="10.5" r="1" data-v-31643b09></circle><circle cx="1.5" cy="6" r="1" data-v-31643b09></circle><circle cx="10.5" cy="6" r="1" data-v-31643b09></circle><circle cx="2.8" cy="2.8" r=".7" data-v-31643b09></circle><circle cx="9.2" cy="9.2" r=".7" data-v-31643b09></circle></svg>',1)),L(Vt)?(j(),it("span",Cx,zt(L(t).ui.menu),1)):he("",!0)],10,Rx),[[$n,L(s)==="explore"&&!L(c)&&!L(l)]])])]),xe(Qe,{name:"fade"},{default:Ve(()=>[L(s)==="explore"?(j(),it("div",Px,[xe(ht,{zones:L(r),active:L(o),travel:L(F),class:ke(["fades",{gone:L(u)||L(l)}]),onSelect:L(g)},null,8,["zones","active","travel","class","onSelect"]),xe(Qe,{name:"fade"},{default:Ve(()=>[L(u)&&!L(l)?(j(),rn(lt,{key:L(a).title,tag:"p",class:"focus-title",text:L(a).title,delay:300},null,8,["text"])):he("",!0)]),_:1}),xe(Qe,{name:"fade"},{default:Ve(()=>[L(u)&&L(vt)&&!L(c)&&!L(l)?(j(),rn(xt,{key:0,pages:L(y),"soon-label":L(t).ui.soon,onPick:G,onHover:U[1]||(U[1]=$=>{ct.value=$})},null,8,["pages","soon-label"])):he("",!0)]),_:1}),L(u)&&!L(c)&&!L(l)&&!L(Vt)?(j(),rn(Ut,{key:0,pages:L(y),onPick:G},null,8,["pages"])):he("",!0),xe(Qe,{name:"title",mode:"out-in"},{default:Ve(()=>[(j(),it("div",{key:L(o),class:ke(["headline",{aside:!!L(c)||L(l)||L(u)}])},[Q("p",Lx,zt(String(L(o)+1).padStart(2,"0"))+" / "+zt(String(L(r).length).padStart(2,"0")),1),Q("h1",null,zt(L(a).title),1),Q("p",Dx,zt(L(a).summary),1)],2))]),_:1}),Q("footer",Ix,[Q("p",Ux,[Hs(zt(L(u)?L(t).ui.hintFocus:L(t).ui.hintScroll),1),L(u)?he("",!0):(j(),it("span",Nx," · "+zt(L(t).ui.hintPointer),1))]),L(Vt)?Xn((j(),it("div",Fx,[L(t).extras?.length?(j(),it("nav",Ox,[(j(!0),it(Me,null,Ne(L(t).extras,$=>(j(),it("button",{key:$.slug,type:"button",onClick:Z=>L(v)($.slug)},zt($.title),9,Bx))),128))])):he("",!0),L(e).length>1?(j(),rn(ot,{key:1,class:"lang-foot",locales:L(e),current:L(n),label:L(t).ui.language,plain:"",onPick:L(p)},null,8,["locales","current","label","onPick"])):he("",!0),Xn(Q("button",{type:"button",class:"glass square","aria-label":L(k)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(k),onClick:Y},[(j(),it("svg",zx,[U[12]||(U[12]=Q("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(k)?(j(),it("path",Hx)):(j(),it("path",Vx))]))],8,kx),[[$n,!0]])],512)),[[$n,!L(c)&&!L(l)]]):he("",!0),Xn(Q("button",{type:"button",class:ke(["enter fill-btn btn-lg",{small:L(u),end:L(u)}]),"aria-label":L(u)?L(t).ui.close:`${L(t).ui.open}: ${L(a).title}`,onClick:U[2]||(U[2]=$=>L(u)?u.value=!1:h())},[U[13]||(U[13]=Q("span",{class:"fill","aria-hidden":"true"},null,-1)),U[14]||(U[14]=Q("span",{class:"knob","aria-hidden":"true"},null,-1)),Q("span",Wx,zt(L(u)?L(t).ui.close:L(a).title),1)],10,Gx),[[$n,!L(c)&&!L(l)]])])])):he("",!0)]),_:1}),xe(Tt,{zones:L(r),extras:L(t).extras??[],open:L(l),active:L(o),"close-label":L(t).ui.close,onPage:U[3]||(U[3]=$=>L(v)($,!0,!0)),onZone:U[4]||(U[4]=$=>{L(g)($),l.value=!1}),onClose:U[5]||(U[5]=$=>l.value=!1)},null,8,["zones","extras","open","active","close-label"]),xe(A,{page:L(c),topic:L(t).extras?.some($=>$.slug===L(c)?.slug)?L(t).ui.brand:L(a)?.title,"close-label":L(t).ui.close,onClose:L(m),onGo:U[6]||(U[6]=$=>L(v)($,!0,L(f)))},null,8,["page","topic","close-label","onClose"]),xe(Qe,{name:"fade"},{default:Ve(()=>[L(s)==="tutorial"&&L(et)&&L(Vt)?(j(),it("footer",Xx,[Q("div",$x,[L(t).extras?.length?(j(),it("nav",qx,[(j(!0),it(Me,null,Ne(L(t).extras,$=>(j(),it("button",{key:$.slug,type:"button",onClick:Z=>L(v)($.slug)},zt($.title),9,Yx))),128))])):he("",!0),L(e).length>1?(j(),rn(ot,{key:1,class:"lang-foot",locales:L(e),current:L(n),label:L(t).ui.language,plain:"",onPick:L(p)},null,8,["locales","current","label","onPick"])):he("",!0),Xn(Q("button",{type:"button",class:"glass square","aria-label":L(k)?L(t).ui.soundOn:L(t).ui.soundOff,"aria-pressed":!L(k),onClick:Y},[(j(),it("svg",Zx,[U[15]||(U[15]=Q("path",{d:"M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"},null,-1)),L(k)?(j(),it("path",Jx)):(j(),it("path",jx))]))],8,Kx),[[$n,!0]])])])):he("",!0)]),_:1}),xe(Qe,{name:"fade"},{default:Ve(()=>[L(s)==="tutorial"&&L(et)?(j(),rn(x,{key:0,steps:L(t).ui.tutorial,onDone:U[7]||(U[7]=$=>s.value="explore")},null,8,["steps"])):he("",!0)]),_:1})],64)):he("",!0),L(t)?(j(),rn(H,{key:1,hint:L(u)?L(t).ui.cursorFocus:L(t).ui.cursorExplore,enabled:L(s)==="explore"&&!L(l)&&(L(u)||!L(st)&&L(o)===0)},null,8,["hint","enabled"])):he("",!0),L(B)?he("",!0):(j(),rn(K,{key:2,progress:L(b),label:L(t)?.ui.loading??"Loading",brand:L(t)?.ui.brand??"MCMC P2630",done:L(s)!=="loading",onReady:R,onReveal:U[8]||(U[8]=$=>et.value=!0),onGone:U[9]||(U[9]=$=>{B.value=!0,et.value=!0})},null,8,["progress","label","brand","done"]))],32)}}}),nM=Ye(Qx,[["__scopeId","data-v-31643b09"]]);export{nM as default};
