(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{5193:function(e,t,n){"use strict";n.d(t,{hE:function(){return v},hU:function(){return k},zx:function(){return x}});var i=n(7375),r=n(2846),a=n(5031),o=n(8554),l=n.n(o),c=n(7294),s=n(6450),u=n(9609);function d(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var p=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],m=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),g=m[0],h=m[1],v=(0,r.Gp)((function(e,t){var n=e.size,i=e.colorScheme,o=e.variant,l=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,m=e.isAttached,h=e.isDisabled,v=d(e,p),b=(0,a.cx)("chakra-button__group",l),y=c.useMemo((function(){return{size:n,colorScheme:i,variant:o,isDisabled:h}}),[n,i,o,h]),w={display:"inline-flex"};return w=f({},w,m?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(g,{value:y},c.createElement(r.m$.div,f({ref:t,role:"group",__css:w,className:b,"data-attached":m?"":void 0},v)))}));a.Ts&&(v.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],y=function(e){var t=e.label,n=e.placement,i=e.spacing,o=void 0===i?"0.5rem":i,l=e.children,s=void 0===l?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):l,p=e.className,m=e.__css,g=d(e,b),h=(0,a.cx)("chakra-button__spinner",p),v="start"===n?"marginEnd":"marginStart",y=c.useMemo((function(){var e;return f(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[v]=t?o:0,e.fontSize="1em",e.lineHeight="normal",e),m)}),[m,t,v,o]);return c.createElement(r.m$.div,f({className:h},g,{__css:y}),s)};a.Ts&&(y.displayName="ButtonSpinner");var w=["children","className"],S=function(e){var t=e.children,n=e.className,i=d(e,w),o=c.isValidElement(t)?c.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,a.cx)("chakra-button__icon",n);return c.createElement(r.m$.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},i,{className:l}),o)};a.Ts&&(S.displayName="ButtonIcon");var z=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],x=(0,r.Gp)((function(e,t){var n=h(),o=(0,r.mq)("Button",f({},n,e)),s=(0,r.Lr)(e),u=s.isDisabled,p=void 0===u?null==n?void 0:n.isDisabled:u,m=s.isLoading,g=s.isActive,v=s.children,b=s.leftIcon,w=s.rightIcon,S=s.loadingText,x=s.iconSpacing,_=void 0===x?"0.5rem":x,k=s.type,I=s.spinner,A=s.spinnerPlacement,j=void 0===A?"start":A,O=s.className,N=s.as,R=d(s,z),C=c.useMemo((function(){var e,t=l()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o,!!n&&{_focus:t})}),[o,n]),M=function(e){var t=c.useState(!e),n=t[0],i=t[1];return{ref:c.useCallback((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(N),P=M.ref,L=M.type,q={rightIcon:w,leftIcon:b,iconSpacing:_,children:v};return c.createElement(r.m$.button,f({disabled:p||m,ref:(0,i.qq)(t,P),as:N,type:null!=k?k:L,"data-active":(0,a.PB)(g),"data-loading":(0,a.PB)(m),__css:C,className:(0,a.cx)("chakra-button",O)},R),m&&"start"===j&&c.createElement(y,{className:"chakra-button__spinner--start",label:S,placement:"start",spacing:_},I),m?S||c.createElement(r.m$.span,{opacity:0},c.createElement(E,q)):c.createElement(E,q),m&&"end"===j&&c.createElement(y,{className:"chakra-button__spinner--end",label:S,placement:"end",spacing:_},I))}));function E(e){var t=e.leftIcon,n=e.rightIcon,i=e.children,r=e.iconSpacing;return c.createElement(c.Fragment,null,t&&c.createElement(S,{marginEnd:r},t),i,n&&c.createElement(S,{marginStart:r},n))}a.Ts&&(x.displayName="Button");var _=["icon","children","isRound","aria-label"],k=(0,r.Gp)((function(e,t){var n=e.icon,i=e.children,r=e.isRound,a=e["aria-label"],o=d(e,_),l=n||i,s=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(x,f({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":a},o),s)}));a.Ts&&(k.displayName="IconButton")},8045:function(e,t,n){"use strict";var i=n(9361).default,r=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,f=void 0!==o&&o,m=e.priority,h=void 0!==m&&m,S=e.loading,k=e.lazyRoot,A=void 0===k?null:k,j=e.lazyBoundary,O=e.className,N=e.quality,R=e.width,C=e.height,M=e.style,P=e.objectFit,L=e.objectPosition,q=e.onLoadingComplete,B=e.placeholder,D=void 0===B?"empty":B,T=e.blurDataURL,W=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=l.useContext(d.ImageConfigContext),G=l.useMemo((function(){var e=b||U||s.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[U]),V=W,F=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(F=V.layout),delete V.layout);var H=_;if("loader"in V){if(V.loader){var $=V.loader;H=function(e){e.config;var t=g(e,["config"]);return $(t)}}delete V.loader}var Z="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(T=T||J.blurDataURL,Z=J.src,(!F||"fill"!==F)&&(C=C||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:Z;var Q=E(R),K=E(C),X=E(N),Y=!h&&("lazy"===S||"undefined"===typeof S);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Y=!1);y.has(t)&&(Y=!1);v&&(f=!0);var ee,te=r(l.useState(!1),2),ne=te[0],ie=te[1],re=r(u.useIntersection({rootRef:A,rootMargin:j||"200px",disabled:!Y}),3),ae=re[0],oe=re[1],le=re[2],ce=!Y||oe,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:L};0;var pe=Object.assign({},M,fe),me="blur"!==D||ne?{}:{backgroundSize:P||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(T,'")')};if("fill"===F)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var ge=K/Q,he=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===F?(se.display="block",se.position="relative",de=!0,ue.paddingTop=he):"intrinsic"===F?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===F&&(se.display="inline-block",se.position="relative",se.width=Q,se.height=K)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};ce&&(ve=x({config:G,src:t,unoptimized:f,layout:F,width:Q,quality:X,sizes:n,loader:H}));var be=t;0;var ye,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var ze=(i(ye={},we,ve.srcSet),i(ye,Se,ve.sizes),ye),xe=l.default.useLayoutEffect,Ee=l.useRef(q),_e=l.useRef(t);l.useEffect((function(){Ee.current=q}),[q]),xe((function(){_e.current!==t&&(le(),_e.current=t)}),[le,t]);var ke=p({isLazy:Y,imgAttributes:ve,heightInt:K,widthInt:Q,qualityInt:X,layout:F,className:O,imgStyle:pe,blurStyle:me,loading:S,config:G,unoptimized:f,placeholder:D,loader:H,srcString:be,onLoadingCompleteRef:Ee,setBlurComplete:ie,setIntersection:ae,isVisible:ce,noscriptSizes:n},V);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:se},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(I,Object.assign({},ke))),h?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},ze))):null)};var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(o=n(5443))&&o.__esModule?o:{default:o},s=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/times/_next/image",loader:"default",experimentalUnoptimized:!0}||{},v=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/times/_next/image",loader:"default",experimentalUnoptimized:!0},y=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t.path).concat(A(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,o=e.width,l=e.quality,c=e.sizes,s=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(i);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,c),d=u.widths,f=u.kind,p=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[p]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=S.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,a){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===i&&a(!0),null==r?void 0:r.current)){var n=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:o})}})))}var I=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,a=e.className,o=e.imgStyle,c=e.blurStyle,s=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,m=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,E=(e.isVisible,e.noscriptSizes),_=g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":r,className:a,style:p({},o,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,f,0,u,b,y)}),[w,f,r,u,b,y]),onLoad:function(e){k(e.currentTarget,f,0,u,b,y),S&&S(e)},onError:function(e){"blur"===u&&y(!0),z&&z(e)}})),(s||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,x({config:m,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:E,loader:v}),{decoding:"async","data-nimg":r,style:o,className:a,loading:d}))))};function A(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!o,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],p=d[1],m=i(r.useState(null),2),g=m[0],h=m[1];r.useEffect((function(){if(o){if(u.current&&(u.current(),u.current=void 0),s||f)return;return g&&g.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},c.push(n),l.set(n,t),t}(n),r=i.id,a=i.observer,o=i.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(g,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[g,s,n,t,f]);var v=r.useCallback((function(){p(!1)}),[]);return[h,f,v]};var r=n(7294),a=n(9311),o="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}}]);