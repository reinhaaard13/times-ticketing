"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{1391:function(e,t,r){r.d(t,{Ph:function(){return v}});var n=r(9762),o=r(2846),i=r(4244),l=r(5031),a=r(8554),u=r.n(a),s=r(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var p=["children","placeholder","className"],f=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],m=["children"],h=(0,o.Gp)((function(e,t){var r=e.children,n=e.placeholder,i=e.className,a=d(e,p);return s.createElement(o.m$.select,c({},a,{ref:t,className:(0,l.cx)("chakra-select",i)}),n&&s.createElement("option",{value:""},n),r)}));l.Ts&&(h.displayName="SelectField");var v=(0,o.Gp)((function(e,t){var r=(0,o.jC)("Select",e),a=(0,o.Lr)(e),p=a.rootProps,m=a.placeholder,v=a.icon,b=a.color,g=a.height,y=a.h,w=a.minH,O=a.minHeight,N=a.iconColor,P=a.iconSize,k=d(a,f),S=(0,l.Vl)(k,i.oE),R=S[0],j=S[1],C=(0,n.Yp)(j),F={width:"100%",height:"fit-content",position:"relative",color:b},T=u()({paddingEnd:"2rem"},r.field,{_focus:{zIndex:"unset"}});return s.createElement(o.m$.div,c({className:"chakra-select__wrapper",__css:F},R,p),s.createElement(h,c({ref:t,height:null!=y?y:g,minH:null!=w?w:O,placeholder:m},C,{__css:T}),e.children),s.createElement(E,c({"data-disabled":(0,l.PB)(C.disabled)},(N||b)&&{color:N||b},{__css:r.icon},P&&{fontSize:P}),v))}));l.Ts&&(v.displayName="Select");var b=function(e){return s.createElement("svg",c({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=(0,o.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),E=function(e){var t=e.children,r=void 0===t?s.createElement(b,null):t,n=d(e,m),o=s.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(g,c({},n,{className:"chakra-select__icon-wrapper"}),s.isValidElement(r)?o:null)};l.Ts&&(E.displayName="SelectIcon")},5039:function(e,t,r){r.d(t,{E:function(){return re}});var n=r(7294);function o(e,t,...r){if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,o),n}var i,l=((i=l||{})[i.None=0]="None",i[i.RenderStrategy=1]="RenderStrategy",i[i.Static=2]="Static",i),a=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(a||{});function u({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:l=!0,name:a}){let u=c(t,e);if(l)return s(u,r,n,a);let d=null!=i?i:0;if(2&d){let{static:e=!1,...t}=u;if(e)return s(t,r,n,a)}if(1&d){let{unmount:e=!0,...t}=u;return o(e?0:1,{0:()=>null,1:()=>s({...t,hidden:!0,style:{display:"none"}},r,n,a)})}return s(u,r,n,a)}function s(e,t={},r,o){let{as:i=r,children:l,refName:a="ref",...u}=f(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof l?l(t):l;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let m={};if(i===n.Fragment&&Object.keys(p(u)).length>0){if(!(0,n.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,n.cloneElement)(d,Object.assign({},c(d.props,p(f(u,["ref"]))),m,s))}return(0,n.createElement)(i,Object.assign({},f(u,["ref"]),i!==n.Fragment&&s,i!==n.Fragment&&m),d)}function c(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},r={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=r[e]||(r[e]=[]),r[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map((e=>[e,void 0]))));for(let n in r)Object.assign(t,{[n](e,...t){let o=r[n];for(let r of o){if(e.defaultPrevented)return;r(e,...t)}}});return t}function d(e){var t;return Object.assign((0,n.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}function f(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let m="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,h={serverHandoffComplete:!1};var v;let b=0;function g(){return++b}let E=null!=(v=n.useId)?v:function(){let e=function(){let[e,t]=(0,n.useState)(h.serverHandoffComplete);return(0,n.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,n.useEffect)((()=>{!1===h.serverHandoffComplete&&(h.serverHandoffComplete=!0)}),[]),e}(),[t,r]=n.useState(e?g:null);return m((()=>{null===t&&r(g())}),[t]),null!=t?""+t:void 0};var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var O,N,P=((N=P||{})[N.First=1]="First",N[N.Previous=2]="Previous",N[N.Next=4]="Next",N[N.Last=8]="Last",N[N.WrapAround=16]="WrapAround",N[N.NoScroll=32]="NoScroll",N),k=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(k||{}),S=((O=S||{})[O.Previous=-1]="Previous",O[O.Next=1]="Next",O);var R=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(R||{});let j=["textarea","input"].join(",");function C(e,t=(e=>e)){return e.slice().sort(((e,r)=>{let n=t(e),o=t(r);if(null===n||null===o)return 0;let i=n.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function F(e,t,r=!0){let n,o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?r?C(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(w))}(e),l=o.activeElement,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,i.indexOf(l))-1;if(4&t)return Math.max(0,i.indexOf(l))+1;if(8&t)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},c=0,d=i.length;do{if(c>=d||c+d<=0)return 0;let e=u+c;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}n=i[e],null==n||n.focus(s),c+=a}while(n!==o.activeElement);return 6&t&&function(e){var t,r;return null!=(r=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,j))&&r}(n)&&n.select(),n.hasAttribute("tabindex")||n.setAttribute("tabindex","0"),2}let T=function(e){let t=function(e){let t=(0,n.useRef)(e);return m((()=>{t.current=e}),[e]),t}(e);return n.useCallback(((...e)=>t.current(...e)),[t])},A=Symbol();function x(...e){let t=(0,n.useRef)(e);(0,n.useEffect)((()=>{t.current=e}),[e]);let r=T((e=>{for(let r of t.current)null!=r&&("function"==typeof r?r(e):r.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[A])))?void 0:r}let D=(0,n.createContext)(null);function _(){let e=(0,n.useContext)(D);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,_),e}return e}function L(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let r=T((e=>(t((t=>[...t,e])),()=>t((t=>{let r=t.slice(),n=r.indexOf(e);return-1!==n&&r.splice(n,1),r}))))),o=(0,n.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n.createElement(D.Provider,{value:o},e.children)}),[t])]}let H=d((function(e,t){let{passive:r=!1,...n}=e,o=_(),i=`headlessui-label-${E()}`,l=x(t);m((()=>o.register(i)),[i,o.register]);let a={ref:l,...o.props,id:i};return r&&("onClick"in a&&delete a.onClick,"onClick"in n&&delete n.onClick),u({ourProps:a,theirProps:n,slot:o.slot||{},defaultTag:"label",name:o.name||"Label"})})),I=(0,n.createContext)(null);function M(){let e=(0,n.useContext)(I);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,M),e}return e}function U(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let r=T((e=>(t((t=>[...t,e])),()=>t((t=>{let r=t.slice(),n=r.indexOf(e);return-1!==n&&r.splice(n,1),r}))))),o=(0,n.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n.createElement(I.Provider,{value:o},e.children)}),[t])]}let $=d((function(e,t){let r=M(),n=`headlessui-description-${E()}`,o=x(t);m((()=>r.register(n)),[n,r.register]);let i=e;return u({ourProps:{ref:o,...r.props,id:n},theirProps:i,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})}));function G(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}var W=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(W||{});let B=d((function(e,t){let{features:r=1,...n}=e;return u({ourProps:{ref:t,"aria-hidden":2===(2&r)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&r)&&2!==(2&r)&&{display:"none"}}},theirProps:n,slot:{},defaultTag:"div",name:"Hidden"})}));function z(e={},t=null,r=[]){for(let[n,o]of Object.entries(e))V(r,Y(t,n),o);return r}function Y(e,t){return e?e+"["+t+"]":t}function V(e,t,r){if(Array.isArray(r))for(let[n,o]of r.entries())V(e,Y(t,n.toString()),o);else r instanceof Date?e.push([t,r.toISOString()]):"boolean"==typeof r?e.push([t,r?"1":"0"]):"string"==typeof r?e.push([t,r]):"number"==typeof r?e.push([t,`${r}`]):null==r?e.push([t,""]):z(r,t,e)}var K=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(K||{});let q={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:C(r,(e=>e.element.current))}},1(e,t){let r=e.options.slice(),n=e.options.findIndex((e=>e.id===t.id));return-1===n?e:(r.splice(n,1),{...e,options:r})}},J=(0,n.createContext)(null);function Z(e){let t=(0,n.useContext)(J);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}function Q(e,t){return o(t.type,q,e,t)}J.displayName="RadioGroupContext";let X=d((function(e,t){let{value:r,name:o,onChange:i,disabled:l=!1,...a}=e,s=T(((e,t)=>e===t)),[c,d]=(0,n.useReducer)(Q,{options:[]}),f=c.options,[h,v]=L(),[b,g]=U(),w=`headlessui-radiogroup-${E()}`,O=(0,n.useRef)(null),N=x(O,t),S=(0,n.useMemo)((()=>f.find((e=>!e.propsRef.current.disabled))),[f]),R=(0,n.useMemo)((()=>f.some((e=>s(e.propsRef.current.value,r)))),[f,r]),j=T((e=>{var t;if(l||s(e,r))return!1;let n=null==(t=f.find((t=>s(t.propsRef.current.value,e))))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(i(e),!0)}));!function({container:e,accept:t,walk:r,enabled:o=!0}){let i=(0,n.useRef)(t),l=(0,n.useRef)(r);(0,n.useEffect)((()=>{i.current=t,l.current=r}),[t,r]),m((()=>{if(!e||!o)return;let t=G(e);if(!t)return;let r=i.current,n=l.current,a=Object.assign((e=>r(e)),{acceptNode:r}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;u.nextNode();)n(u.currentNode)}),[e,o,i,l])}({container:O.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let C=T((e=>{let t=O.current;if(!t)return;let r=G(t),n=f.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case y.Enter:!function(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r)for(let n of r.elements)if("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type)return void n.click()}(e.currentTarget);break;case y.ArrowLeft:case y.ArrowUp:if(e.preventDefault(),e.stopPropagation(),F(n,P.Previous|P.WrapAround)===k.Success){let e=f.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&j(e.propsRef.current.value)}break;case y.ArrowRight:case y.ArrowDown:if(e.preventDefault(),e.stopPropagation(),F(n,P.Next|P.WrapAround)===k.Success){let e=f.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&j(e.propsRef.current.value)}break;case y.Space:{e.preventDefault(),e.stopPropagation();let t=f.find((e=>e.element.current===(null==r?void 0:r.activeElement)));t&&j(t.propsRef.current.value)}}})),A=T((e=>(d({type:0,...e}),()=>d({type:1,id:e.id})))),D=(0,n.useMemo)((()=>({registerOption:A,firstOption:S,containsCheckedOption:R,change:j,disabled:l,value:r,compare:s})),[A,S,R,j,l,r,s]),_={ref:N,id:w,role:"radiogroup","aria-labelledby":h,"aria-describedby":b,onKeyDown:C};return n.createElement(g,{name:"RadioGroup.Description"},n.createElement(v,{name:"RadioGroup.Label"},n.createElement(J.Provider,{value:D},null!=o&&null!=r&&z({[o]:r}).map((([e,t])=>n.createElement(B,{features:W.Hidden,...p({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),u({ourProps:_,theirProps:a,defaultTag:"div",name:"RadioGroup"}))))}));var ee=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(ee||{});let te=d((function(e,t){let r=(0,n.useRef)(null),o=x(r,t),i=`headlessui-radiogroup-option-${E()}`,[l,a]=L(),[s,c]=U(),{addFlag:d,removeFlag:p,hasFlag:f}=function(e=0){let[t,r]=(0,n.useState)(e),o=(0,n.useCallback)((e=>r((t=>t|e))),[t]),i=(0,n.useCallback)((e=>Boolean(t&e)),[t]),l=(0,n.useCallback)((e=>r((t=>t&~e))),[r]),a=(0,n.useCallback)((e=>r((t=>t^e))),[r]);return{addFlag:o,hasFlag:i,removeFlag:l,toggleFlag:a}}(1),{value:h,disabled:v=!1,...b}=e,g=(0,n.useRef)({value:h,disabled:v});m((()=>{g.current.value=h}),[h,g]),m((()=>{g.current.disabled=v}),[v,g]);let{registerOption:y,disabled:w,change:O,firstOption:N,containsCheckedOption:P,value:k,compare:S}=Z("RadioGroup.Option");m((()=>y({id:i,element:r,propsRef:g})),[i,y,r,e]);let R=T((()=>{var e;!O(h)||(d(2),null==(e=r.current)||e.focus())})),j=T((()=>d(2))),C=T((()=>p(2))),F=(null==N?void 0:N.id)===i,A=w||v,D=S(k,h),_={ref:o,id:i,role:"radio","aria-checked":D?"true":"false","aria-labelledby":l,"aria-describedby":s,"aria-disabled":!!A||void 0,tabIndex:A?-1:D||!P&&F?0:-1,onClick:A?void 0:R,onFocus:A?void 0:j,onBlur:A?void 0:C},H=(0,n.useMemo)((()=>({checked:D,disabled:A,active:f(2)})),[D,A,f]);return n.createElement(c,{name:"RadioGroup.Description"},n.createElement(a,{name:"RadioGroup.Label"},u({ourProps:_,theirProps:b,slot:H,defaultTag:"div",name:"RadioGroup.Option"})))})),re=Object.assign(X,{Option:te,Label:H,Description:$})},9396:function(e,t,r){function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})}}]);