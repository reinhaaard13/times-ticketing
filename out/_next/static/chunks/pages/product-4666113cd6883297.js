(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{9042:function(e,r,n){"use strict";n.d(r,{Td:function(){return T},Th:function(){return _},Tr:function(){return N},hr:function(){return j},iA:function(){return v},p3:function(){return w},xJ:function(){return x}});var t=n(2846),c=n(5031),s=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,c={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}var i=["overflow","overflowX","className"],o=["className"],l=["placement"],d=["isNumeric"],f=["isNumeric"],p=(0,t.eC)("Table"),h=p[0],m=p[1],x=(0,t.Gp)((function(e,r){var n,o=e.overflow,l=e.overflowX,d=e.className,f=u(e,i);return s.createElement(t.m$.div,a({ref:r,className:(0,c.cx)("chakra-table__container",d)},f,{__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=o?o:l)?n:"auto",overflowY:"hidden",maxWidth:"100%"}}))})),v=(0,t.Gp)((function(e,r){var n=(0,t.jC)("Table",e),i=(0,t.Lr)(e),l=i.className,d=u(i,o);return s.createElement(h,{value:n},s.createElement(t.m$.table,a({role:"table",ref:r,__css:n.table,className:(0,c.cx)("chakra-table",l)},d)))}));c.Ts&&(v.displayName="Table");var b=(0,t.Gp)((function(e,r){var n=e.placement,c=void 0===n?"bottom":n,i=u(e,l),o=m();return s.createElement(t.m$.caption,a({},i,{ref:r,__css:a({},o.caption,{captionSide:c})}))}));c.Ts&&(b.displayName="TableCaption");var j=(0,t.Gp)((function(e,r){var n=m();return s.createElement(t.m$.thead,a({},e,{ref:r,__css:n.thead}))})),w=(0,t.Gp)((function(e,r){var n=m();return s.createElement(t.m$.tbody,a({},e,{ref:r,__css:n.tbody}))})),_=(0,t.Gp)((function(e,r){var n=e.isNumeric,c=u(e,d),i=m();return s.createElement(t.m$.th,a({},c,{ref:r,__css:i.th,"data-is-numeric":n}))})),N=(0,t.Gp)((function(e,r){var n=m();return s.createElement(t.m$.tr,a({role:"row"},e,{ref:r,__css:n.tr}))})),T=(0,t.Gp)((function(e,r){var n=e.isNumeric,c=u(e,f),i=m();return s.createElement(t.m$.td,a({role:"gridcell"},c,{ref:r,__css:i.td,"data-is-numeric":n}))}))},3192:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return n(7963)}])},7963:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return j}});var t=n(5893),c=n(7294),s=n(9008),a=n.n(s),u=(n(9669),n(8790)),i=n(9237),o=n(7568),l=n(4051),d=n.n(l),f=n(1664),p=n.n(f),h=n(6893),m=n(9042),x=n(5193),v=n(3040),b=function(e){var r=(0,c.useState)([]),n=r[0],s=r[1];return(0,c.useEffect)((function(){function e(){return e=(0,o.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getAllProducts();case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,t.jsx)(m.xJ,{shadow:"lg",className:"border border-slate-500/20 rounded-xl w-full",children:(0,t.jsxs)(m.iA,{bg:"whiteAlpha.900",backdropFilter:"auto",backdropBlur:"md",variant:"simple",size:"sm",children:[(0,t.jsx)(m.hr,{className:"bg-slate-500/20",children:(0,t.jsxs)(m.Tr,{children:[(0,t.jsx)(m.Th,{width:"2",children:"No."}),(0,t.jsx)(m.Th,{children:"Product Name"}),(0,t.jsx)(m.Th,{children:"Sub products"})]})}),(0,t.jsxs)(m.p3,{children:[n.map((function(e,r){return(0,t.jsxs)(m.Tr,{children:[(0,t.jsx)(m.Td,{className:"uppercase",children:r+1}),(0,t.jsxs)(m.Td,{children:[e.product_name,(0,t.jsx)("span",{className:"block text-xs text-slate-800/80",children:e.product_desc})]}),(0,t.jsx)(m.Td,{children:e.Subproducts.map((function(e,r){return(0,t.jsx)(u.Ct,{marginRight:1,colorScheme:"green",children:e.subproduct_name},r)}))})]},r)})),(0,t.jsxs)(m.Tr,{children:[(0,t.jsx)(m.Td,{}),(0,t.jsx)(m.Td,{children:(0,t.jsx)(p(),{href:"/product/new",children:(0,t.jsx)(x.zx,{size:"sm",leftIcon:(0,t.jsx)(h.OvN,{}),children:"Add New Product"})})}),(0,t.jsx)(m.Td,{children:(0,t.jsx)(p(),{href:"/product/sub/new",children:(0,t.jsx)(x.zx,{size:"sm",leftIcon:(0,t.jsx)(h.OvN,{}),children:"Add New Sub Product"})})})]})]})]})})},j=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Products List"})}),(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"container px-1",children:[(0,t.jsx)(u.xv,{fontSize:"2xl",fontWeight:"semibold",className:"text-lime-500",marginTop:5,marginBottom:4,children:"Products List"}),(0,t.jsx)(b,{})]})})]})}},3040:function(e,r,n){"use strict";var t=n(7568),c=n(1438),s=n(2951),a=n(4051),u=n.n(a),i=n(9669),o=n.n(i),l=function(){function e(){(0,c.Z)(this,e)}return(0,s.Z)(e,[{key:"getAllProducts",value:function(){return(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/products");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()}},{key:"getAllSubproducts",value:function(){return(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/subproducts");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()}}]),e}();r.Z=new l},1438:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}n.d(r,{Z:function(){return t}})},2951:function(e,r,n){"use strict";function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}n.d(r,{Z:function(){return c}})}},function(e){e.O(0,[228,445,617,556,885,781,518,237,774,888,179],(function(){return r=3192,e(e.s=r);var r}));var r=e.O();_N_E=r}]);