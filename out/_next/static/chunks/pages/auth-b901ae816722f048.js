(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{876:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return r(4261)}])},3476:function(e,s){"use strict";s.Z={src:"/_next/static/media/logo.5e3442f0.png",height:289,width:310,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAArklEQVR42mP4//8/AxAr/Pv3z/Pzt48iQDYTEDOAcMwyIUYw4/ef3wJA+gwQZ9x+fl1AeAaDaNF6Xy6QHMPff391gIxpP359n1q/JTHSYR6DWcIKhdqYZfwaYAVAoxWBeC2Q08fQw+CZuELtfswywSMgydjlwmArwBioSAhiL38mUGIS0H5umAkgRzEjHCZcBJR8DMRXgFgBbsKnbx8ZoS5fELNceCqQto9ZJsQHAIgviQmOwgQrAAAAAElFTkSuQmCC"}},366:function(e,s,r){"use strict";var t=r(5893),n=(r(7294),r(9762)),a=r(4612);s.Z=function(e){var s=e.label,r=e.name,l=e.type,i=e.id,o=e.value,u=e.onChange,c=e.onBlur,d=e.error,m=e.className,h=e.touched;return(0,t.jsxs)(n.NI,{className:m,isInvalid:d&&h,children:[(0,t.jsx)(n.lX,{htmlFor:i,fontWeight:"semibold",fontSize:"sm",mb:2,textTransform:"uppercase",textColor:"gray.600",children:s}),(0,t.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,t.jsx)(a.II,{type:l||"text",id:i,name:r,value:o,onChange:u,onBlur:c}),(0,t.jsx)(n.J1,{className:"text-red-500 text-sm ",children:d})]})]})}},4261:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return v}});var t=r(5893),n=(r(7294),r(9008)),a=r.n(n),l=r(5675),i=r.n(l),o=r(7568),u=r(4051),c=r.n(u),d=r(2175),m=r(4231),h=(r(9669),r(1895)),x=r(5193),f=r(366),g=r(9904),p=m.Ry().shape({user:m.Z_().min(3,"Must be at least 3 characters").required("Required"),password:m.Z_().min(3,"Must be at least 3 characters").required("Required")}),w=function(e){var s=(0,h.a)().login,r=(0,d.TA)({initialValues:{user:"",password:""},validationSchema:p,onSubmit:function(){var e=(0,o.Z)(c().mark((function e(t){var n,a,l,i,o,u,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setSubmitting(!0),e.prev=1,e.next=4,g.Z.login(t.user,t.password);case 4:n=e.sent,a=n.data,l=a.user,i=a.token,o=a.refreshToken,u=a.role,d=a.privileges,s(l,i,o,u,d),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.t0.response.data.message.endsWith("password")?r.setFieldError("password",e.t0.response.data.message):r.setFieldError("user",e.t0.response.data.message);case 13:return e.prev=13,r.setSubmitting(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(s){return e.apply(this,arguments)}}()});return(0,t.jsxs)("div",{className:"flex flex-col w-full max-w-md bg-white p-8 rounded-xl shadow-lg",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Login"}),(0,t.jsxs)("form",{className:"flex flex-col",onSubmit:r.handleSubmit,children:[(0,t.jsx)(f.Z,{label:"Enter Your Username / Email",id:"user",name:"user",value:r.values.user,onChange:r.handleChange,onBlur:r.handleBlur,error:r.errors.user,touched:r.touched.user}),(0,t.jsx)(f.Z,{label:"Enter Your Password",id:"password",name:"password",type:"password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,error:r.errors.password,touched:r.touched.password}),(0,t.jsx)(x.zx,{type:"submit",px:5,py:2,rounded:"full",fontSize:"md",text:"sm",alignSelf:"center",letterSpacing:"wider",textTransform:"uppercase",colorScheme:"facebook",isLoading:r.isSubmitting,children:"Login"})]})]})},A=r(3476),v=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"TIMES Login"})}),(0,t.jsxs)("div",{className:"flex md:flex-row flex-col h-full min-h-screen p-2 w-full md:justify-evenly items-center bg-gradient-to-tl from-[#485563] to-[#29323c]",children:[(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center my-4",children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(i(),{src:A.Z,alt:"logo",width:200,height:200})}),(0,t.jsxs)("h1",{className:"font-bold text-xl md:text-3xl md:mt-4 text-white logo",children:["TIMES ",(0,t.jsx)("span",{className:"font-normal",children:"Ticketing"})]})]}),(0,t.jsx)(w,{})]})]})}}},function(e){e.O(0,[781,69,231,774,888,179],(function(){return s=876,e(e.s=s);var s}));var s=e.O();_N_E=s}]);