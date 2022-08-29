"use strict";(self.webpackChunkmern_task_manager_2022_frontend=self.webpackChunkmern_task_manager_2022_frontend||[]).push([[733],{4434:function(t,n,e){e.d(n,{HG:function(){return K},IO:function(){return P},Jj:function(){return Z},M$:function(){return v},Nq:function(){return S},Py:function(){return b},Zr:function(){return W},aw:function(){return x},jx:function(){return k},qd:function(){return g},vq:function(){return l},xJ:function(){return m}});var a=e(4569),r=e.n(a),o=e(9109),s=e(7291),i=e(8995),c=e(2507),u=e(634),d=e(7499),h=e(4834),p={headers:{token:(0,c.LP)()}},f="https://mern-task-manager-apk-v1.herokuapp.com/api/v1";function l(t,n,e,a,c,u){i.Z.dispatch((0,s._x)());var d={email:t,firstName:n,lastName:e,mobile:a,password:c,photo:u};return r().post("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/registration",d).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?"fail"===t.data.status?1===t.data.data.keyPattern.email?((0,o.PK)("Email Already Exist"),!1):((0,o.PK)("Something Went Wrong"),!1):((0,o.bF)("Registration Success"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return i.Z.dispatch((0,s.V4)()),(0,o.PK)("Something Went Wrong"),!1}))}function m(t,n){i.Z.dispatch((0,s._x)());var e={email:t,password:n};return r().post("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/login",e).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?((0,c.o4)(t.data.token),(0,c.XN)(t.data.data),(0,o.bF)("Login Success"),!0):((0,o.PK)("Invalid Email or Password"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function g(t,n){i.Z.dispatch((0,s._x)());var e={title:t,description:n,status:"New"};return r().post("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/createTask",e,p).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?((0,o.bF)("New Task Created"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function v(t){i.Z.dispatch((0,s._x)());var n=f+"/listTaskByStatus/"+t;r().get(n,p).then((function(n){i.Z.dispatch((0,s.V4)()),200===n.status?"New"===t?i.Z.dispatch((0,u.kq)(n.data.data)):"Completed"===t?i.Z.dispatch((0,u.PO)(n.data.data)):"Canceled"===t?i.Z.dispatch((0,u.oU)(n.data.data)):"Progress"===t&&i.Z.dispatch((0,u.qY)(n.data.data)):(0,o.PK)("Something Went Wrong")})).catch((function(t){(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)())}))}function Z(){i.Z.dispatch((0,s._x)());r().get("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/taskStatusCount",p).then((function(t){i.Z.dispatch((0,s.V4)()),200===t.status?i.Z.dispatch((0,d.eF)(t.data.data)):(0,o.PK)("Something Went Wrong")})).catch((function(t){(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)())}))}function k(t){i.Z.dispatch((0,s._x)());var n=f+"/deleteTask/"+t;return r().get(n,p).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?((0,o.bF)("Delete Successful"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function W(t,n){i.Z.dispatch((0,s._x)());var e=f+"/updateTaskStatus/"+t+"/"+n;return r().get(e,p).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?((0,o.bF)("Status Updated"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function P(){i.Z.dispatch((0,s._x)());r().get("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/profileDetails",p).then((function(t){i.Z.dispatch((0,s.V4)()),200===t.status?i.Z.dispatch((0,h.Bc)(t.data.data[0])):(0,o.PK)("Something Went Wrong")})).catch((function(t){(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)())}))}function S(t,n,e,a,u,d){i.Z.dispatch((0,s._x)());var h={email:t,firstName:n,lastName:e,mobile:a,password:u,photo:d},f={email:t,firstName:n,lastName:e,mobile:a,photo:d};return r().post("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/profileUpdate",h,p).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?((0,o.bF)("Profile Update Success"),(0,c.XN)(f),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function x(t){i.Z.dispatch((0,s._x)());var n=f+"/RecoverVerifyEmail/"+t;return r().get(n).then((function(n){return i.Z.dispatch((0,s.V4)()),200===n.status?"fail"===n.data.status?((0,o.PK)("No User Found"),!1):((0,c.vV)(t),(0,o.bF)("A 6 Digit Verification code has been sent to your email address"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function K(t,n){i.Z.dispatch((0,s._x)());var e=f+"/RecoverVerifyOTP/"+t+"/"+n;return r().get(e).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?"fail"===t.data.status?((0,o.PK)(t.data.data),!1):((0,c.Z6)(n),(0,o.bF)("Code Verification Success"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){return(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)()),!1}))}function b(t,n,e){i.Z.dispatch((0,s._x)());var a={email:t,OTP:n,password:e};return r().post("https://mern-task-manager-apk-v1.herokuapp.com/api/v1/RecoverResetPass/",a).then((function(t){return i.Z.dispatch((0,s.V4)()),200===t.status?"fail"===t.data.status?((0,o.PK)(t.data.data),!1):((0,c.Z6)(n),(0,o.bF)("New Password Created"),!0):((0,o.PK)("Something Went Wrong"),!1)})).catch((function(t){(0,o.PK)("Something Went Wrong"),i.Z.dispatch((0,s.V4)())}))}},9733:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var a=e(2791),r=e(7022),o=e(1413),s=e(5987),i=e(1694),c=e.n(i),u=e(162),d=e(184),h=["bsPrefix","className","as"],p=a.forwardRef((function(t,n){var e=t.bsPrefix,a=t.className,r=t.as,i=void 0===r?"div":r,p=(0,s.Z)(t,h),f=(0,u.vE)(e,"row"),l=(0,u.pi)(),m=(0,u.zG)(),g="".concat(f,"-cols"),v=[];return l.forEach((function(t){var n,e=p[t];delete p[t],n=null!=e&&"object"===typeof e?e.cols:e;var a=t!==m?"-".concat(t):"";null!=n&&v.push("".concat(g).concat(a,"-").concat(n))})),(0,d.jsx)(i,(0,o.Z)((0,o.Z)({ref:n},p),{},{className:c().apply(void 0,[a,f].concat(v))}))}));p.displayName="Row";var f=p,l=e(6871),m=e(4434),g=e(9109),v=function(){var t,n=(0,a.useRef)(),e=(0,l.s0)();return(0,d.jsx)(r.Z,{fluid:!0,className:"content-body",children:(0,d.jsx)(f,{className:"d-flex justify-content-center",children:(0,d.jsx)("div",{className:"col-12 col-lg-8  col-sm-12 col-md-8  p-2",children:(0,d.jsx)("div",{className:"card shadow",children:(0,d.jsxs)("div",{className:"card-body shadow m-4",children:[(0,d.jsx)("h4",{children:"Create New"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{ref:function(n){return t=n},placeholder:"Task Name",className:"form-control animated fadeInUp",type:"text"}),(0,d.jsx)("br",{}),(0,d.jsx)("textarea",{ref:function(t){return n=t},rows:5,placeholder:"Task Description",className:"form-control animated fadeInUp",type:"text"}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{onClick:function(){var a=t.value,r=n.value;(0,g.si)(a)?(0,g.PK)("Title Required"):(0,g.si)(r)?(0,g.PK)("Description Required"):(0,m.qd)(a,r).then((function(t){!0===t&&e("/All")}))},className:"btn float-end btn-primary",children:"Create"})]})})})})})}},9109:function(t,n,e){e.d(n,{PK:function(){return p},bF:function(){return f},hD:function(){return d},s6:function(){return h},si:function(){return u},y3:function(){return l}});var a=e(5671),r=e(3144),o=e(6960),s=/\S+@\S+\.\S+/,i=/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,c=new(function(){function t(){(0,a.Z)(this,t)}return(0,r.Z)(t,[{key:"IsEmpty",value:function(t){return 0===t.length}},{key:"IsMobile",value:function(t){return i.test(t)}},{key:"IsEmail",value:function(t){return!s.test(t)}},{key:"ErrorToast",value:function(t){o.Z.error(t,{position:"top-right"})}},{key:"SuccessToast",value:function(t){o.Z.success(t,{position:"top-right"})}},{key:"getBase64",value:function(t){return new Promise((function(n,e){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return n(a.result)},a.onerror=function(t){return e(t)}}))}}]),t}()),u=c.IsEmpty,d=c.IsMobile,h=c.IsEmail,p=c.ErrorToast,f=c.SuccessToast,l=c.getBase64}}]);
//# sourceMappingURL=733.e48c46e9.chunk.js.map