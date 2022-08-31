(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{1391:function(e,n,t){"use strict";t.d(n,{Ph:function(){return j}});var r=t(9762),s=t(2846),i=t(4244),a=t(5031),c=t(8554),o=t.n(c),l=t(7294);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}var h=["children","placeholder","className"],p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],m=["children"],x=(0,s.Gp)((function(e,n){var t=e.children,r=e.placeholder,i=e.className,c=d(e,h);return l.createElement(s.m$.select,u({},c,{ref:n,className:(0,a.cx)("chakra-select",i)}),r&&l.createElement("option",{value:""},r),t)}));a.Ts&&(x.displayName="SelectField");var j=(0,s.Gp)((function(e,n){var t=(0,s.jC)("Select",e),c=(0,s.Lr)(e),h=c.rootProps,m=c.placeholder,j=c.icon,f=c.color,v=c.height,_=c.h,b=c.minH,C=c.minHeight,I=c.iconColor,k=c.iconSize,y=d(c,p),w=(0,a.Vl)(y,i.oE),S=w[0],N=w[1],E=(0,r.Yp)(N),B={width:"100%",height:"fit-content",position:"relative",color:f},P=o()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return l.createElement(s.m$.div,u({className:"chakra-select__wrapper",__css:B},S,h),l.createElement(x,u({ref:n,height:null!=_?_:v,minH:null!=b?b:C,placeholder:m},E,{__css:P}),e.children),l.createElement(g,u({"data-disabled":(0,a.PB)(E.disabled)},(I||f)&&{color:I||f},{__css:t.icon},k&&{fontSize:k}),j))}));a.Ts&&(j.displayName="Select");var f=function(e){return l.createElement("svg",u({viewBox:"0 0 24 24"},e),l.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},v=(0,s.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),g=function(e){var n=e.children,t=void 0===n?l.createElement(f,null):n,r=d(e,m),s=l.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return l.createElement(v,u({},r,{className:"chakra-select__icon-wrapper"}),l.isValidElement(t)?s:null)};a.Ts&&(g.displayName="SelectIcon")},3441:function(e,n,t){"use strict";t.d(n,{g:function(){return u}});var r=t(9762),s=t(2846),i=t(5031),a=t(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var o=["className","rows"],l=["h","minH","height","minHeight"],u=(0,s.Gp)((function(e,n){var t=(0,s.mq)("Textarea",e),u=(0,s.Lr)(e),d=u.className,h=u.rows,p=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(u,o),m=(0,r.Yp)(p),x=h?(0,i.CE)(t,l):t;return a.createElement(s.m$.textarea,c({ref:n,rows:h},m,{className:(0,i.cx)("chakra-textarea",d),__css:x}))}));i.Ts&&(u.displayName="Textarea")},8018:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ticket/new",function(){return t(6295)}])},6295:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(5893),s=t(7294),i=t(9008),a=t.n(i),c=t(9669),o=t.n(c),l=t(9237),u=t(7568),d=t(943);var h=t(3375);var p=t(1566);function m(e){return function(e){if(Array.isArray(e))return(0,d.Z)(e)}(e)||(0,h.Z)(e)||(0,p.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=t(4051),j=t.n(x),f=t(2175),v=t(1163),g=t(1895),_=t(7375),b=t(6658),C=t(8790),I=t(5193),k=t(9762),y=t(1391),w=t(4612),S=t(3441),N=function(e){return(0,r.jsx)(s.Fragment,{children:(0,r.jsx)("input",{type:"file",accept:".jpg, .png, .jpeg, .pdf",onChange:e.onPickedImage,name:e.name,id:e.id,multiple:!0})})},E=["IT","BA","MKT","OPR"],B=function(e){var n={};return e.location||(n.location="Location is required"),e.cust_name||(n.cust_name="Customer name is required"),e.cust_no||(n.cust_no="Customer number is required"),e.cust_email||(n.cust_email="Customer email is required"),e.product||(n.product="Product is required"),e.subproduct||(n.subproduct="Subproduct is required"),e.assigned_to||(n.assigned_to="Choose who you assign this ticket to"),e.casesubject||(n.casesubject="Pick a subject for this ticket"),e.description||(n.description="Describe the issue"),n},P=function(){var e,n,t,i=(0,_.qY)(),a=i.isOpen,c=i.onOpen,l=i.onClose,d=(0,s.useState)({}),h=d[0],p=d[1],x=(0,v.useRouter)(),P=(0,g.a)().token,F=(0,s.useState)([]),T=F[0],O=F[1];(0,s.useEffect)((function(){function e(){return e=(0,u.Z)(j().mark((function e(){var n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/products");case 2:n=e.sent,O(n.data);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var q=(0,f.TA)({initialValues:{location:"",cust_name:"",cust_no:"",cust_email:"",product:"",subproduct:"",assigned_to:"",casesubject:"",description:"",attachment:""},validate:B,onSubmit:function(){var e=(0,u.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.setSubmitting(!0),(t=new FormData).append("location",n.location),t.append("cust_name",n.cust_name),t.append("cust_no",n.cust_no),t.append("cust_email",n.cust_email),t.append("product",n.product),t.append("subproduct",n.subproduct),t.append("assigned_to",n.assigned_to),t.append("casesubject",n.casesubject),t.append("description",n.description),m(n.attachment).forEach((function(e){t.append("attachment",e)})),t.append("created_by","admin"),e.prev=13,e.next=16,o().post("/api/tickets",t,{headers:{Authorization:"Bearer ".concat(P)}});case 16:r=e.sent,q.resetForm(),p(r.data.newTicket),c(),e.next=24;break;case 22:e.prev=22,e.t0=e.catch(13);case 24:q.setSubmitting(!1);case 25:case"end":return e.stop()}}),e,null,[[13,22]])})));return function(n){return e.apply(this,arguments)}}()});return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(b.u_,{isOpen:a,onClose:l,children:[(0,r.jsx)(b.ZA,{}),(0,r.jsxs)(b.hz,{children:[(0,r.jsx)(b.xB,{children:"Successfully created!"}),(0,r.jsx)(b.ol,{}),(0,r.jsxs)(b.fe,{children:["The ticket has been successfully created! Your ticket ID is"," ",(0,r.jsx)(C.xv,{align:"center",fontSize:"lg",fontWeight:"semibold",children:h.ticket_id})]}),(0,r.jsxs)(b.mz,{children:[(0,r.jsx)(I.zx,{mr:3,onClick:l,children:"Create another ticket"}),(0,r.jsx)(I.zx,{colorScheme:"teal",onClick:function(){x.push("/")},children:"Back to home"})]})]})]}),(0,r.jsx)("form",{onSubmit:q.handleSubmit,children:(0,r.jsx)(C.xu,{width:"full",maxW:"2xl",bg:"whiteAlpha.900",backdropFilter:"auto",backdropBlur:"md",p:4,rounded:"2xl",shadow:"lg",children:(0,r.jsxs)(C.kC,{flexDirection:"column",children:[(0,r.jsxs)(C.kC,{flexDir:["column","row"],children:[(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.product&&q.touched.product,children:[(0,r.jsx)(k.lX,{htmlFor:"product",children:"Choose Product"}),(0,r.jsx)(y.Ph,{id:"product",name:"product",placeholder:"Select Product",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.product,children:T.map((function(e,n){return(0,r.jsx)("option",{value:e.product_id,children:e.product_name},n)}))}),(0,r.jsx)(k.J1,{children:q.errors.product})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.subproduct&&q.touched.subproduct,children:[(0,r.jsx)(k.lX,{htmlFor:"subproduct",children:"Choose Sub Product"}),(0,r.jsx)(y.Ph,{id:"subproduct",name:"subproduct",placeholder:"Select Sub Product",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.subproduct,children:null===(e=T.find((function(e){return e.product_id===parseInt(q.values.product)})))||void 0===e?void 0:e.Subproducts.map((function(e,n){return(0,r.jsx)("option",{value:e.subproduct_id,children:e.subproduct_name},n)}))}),(0,r.jsx)(k.J1,{children:q.errors.subproduct})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.casesubject&&q.touched.casesubject,children:[(0,r.jsx)(k.lX,{htmlFor:"casesubject",children:"Choose Case Subject"}),(0,r.jsx)(y.Ph,{id:"casesubject",name:"casesubject",placeholder:"Select Case Subject",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.casesubject,children:null===(t=null===(n=T.find((function(e){return e.product_id===parseInt(q.values.product)})))||void 0===n?void 0:n.Subproducts.find((function(e){return e.subproduct_id===parseInt(q.values.subproduct)})))||void 0===t?void 0:t.CaseSubjects.map((function(e,n){return(0,r.jsx)("option",{value:e.id,children:e.subject},n)}))}),(0,r.jsx)(k.J1,{children:q.errors.casesubject})]})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.location&&q.touched.location,children:[(0,r.jsx)(k.lX,{htmlFor:"location",children:"Event Location"}),(0,r.jsx)(w.II,{id:"location",type:"text",name:"location",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.location}),(0,r.jsx)(k.J1,{children:q.errors.location})]}),(0,r.jsxs)(C.kC,{flexDir:["column","row"],children:[(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.cust_name&&q.touched.cust_name,children:[(0,r.jsx)(k.lX,{htmlFor:"cust_name",children:"Customer Name"}),(0,r.jsx)(w.II,{id:"cust_name",type:"text",name:"cust_name",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.cust_name}),(0,r.jsx)(k.J1,{children:q.errors.cust_name})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.cust_no&&q.touched.cust_no,children:[(0,r.jsx)(k.lX,{htmlFor:"cust_no",children:"Customer Phone"}),(0,r.jsx)(w.II,{id:"cust_no",type:"text",name:"cust_no",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.cust_no}),(0,r.jsx)(k.J1,{children:q.errors.cust_no})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.cust_email&&q.touched.cust_email,children:[(0,r.jsx)(k.lX,{htmlFor:"cust_email",children:"Customer Email"}),(0,r.jsx)(w.II,{id:"cust_email",type:"email",name:"cust_email",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.cust_email}),(0,r.jsx)(k.J1,{children:q.errors.cust_email})]})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.description&&q.touched.description,children:[(0,r.jsx)(k.lX,{htmlFor:"description",children:"Description"}),(0,r.jsx)(S.g,{id:"description",name:"description",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.description}),(0,r.jsx)(k.J1,{children:q.errors.description})]}),(0,r.jsxs)(k.NI,{padding:2,isRequired:!0,isInvalid:q.errors.assigned_to&&q.touched.assigned_to,children:[(0,r.jsx)(k.lX,{htmlFor:"assigned_to",children:"Assign To Department"}),(0,r.jsx)(y.Ph,{id:"assigned_to",name:"assigned_to",placeholder:"Select Asignee",onChange:q.handleChange,onBlur:q.handleBlur,value:q.values.assigned_to,children:E.map((function(e,n){return(0,r.jsx)("option",{value:e,children:e},n)}))}),(0,r.jsx)(k.J1,{children:q.errors.assigned_to})]}),(0,r.jsxs)(k.NI,{padding:2,isInvalid:q.errors.attachment,children:[(0,r.jsx)(k.lX,{htmlFor:"attachment",children:"Attachment"}),(0,r.jsx)(N,{onPickedImage:function(e){var n=e.target.files;(null===n||void 0===n?void 0:n.size)>1e7?q.setErrors({attachment:"Attachment size is too large"}):n?q.setFieldValue("attachment",n):q.setFieldValue("attachment",null)},name:"attachment",id:"attachment",value:q.values.attachment}),(0,r.jsx)(k.J1,{children:q.errors.attachment})]}),(0,r.jsx)(C.iz,{margin:2}),(0,r.jsx)(I.zx,{isLoading:q.isSubmitting,loadingText:"Creating Ticket",margin:2,colorScheme:"teal",type:"submit",disabled:!q.isValid,children:"Create Ticket"})]})})})]})},F=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Create New Ticket"})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"px-4 w-full flex flex-col items-center",children:[(0,r.jsx)("h1",{className:"my-4 font-semibold text-lime-500 text-2xl",children:"Create new ticket"}),(0,r.jsx)(P,{products:e.products})]})})]})}}},function(e){e.O(0,[228,445,617,556,885,781,518,69,658,237,774,888,179],(function(){return n=8018,e(e.s=n);var n}));var n=e.O();_N_E=n}]);