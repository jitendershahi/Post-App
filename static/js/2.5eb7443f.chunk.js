(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(38),o=a(21),l=a(14),r=a(15),i=a(17),s=a(16),c=a(18),u=a(0),m=a.n(u),p=(a(246),a(22)),g=a(299),d=a(75),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={loginForm:{email:"",password:""},isSignup:!1},a.handleValue=function(e){var t=Object(o.a)({},a.state.loginForm,Object(n.a)({},e.target.name,e.target.value));a.setState({loginForm:t})},a.submitLogin=function(e){e.preventDefault();var t=a.state.isSignup?"SignUp":"SignIn";a.props.auth(a.state.loginForm,t)},a.changeMode=function(){a.setState(function(e){return{isSignup:!e.isSignup}})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=null;return t=localStorage.getItem("token")?m.a.createElement(g.a,{to:"/posts"}):m.a.createElement("form",null,m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Email address"),m.a.createElement("input",{type:"email",name:"email",onChange:function(t){return e.handleValue(t)},value:this.state.loginForm.email,className:"form-control",placeholder:"Enter email"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Password"),m.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleValue(t)},value:this.state.loginForm.password,className:"form-control",placeholder:"Password"})),m.a.createElement("div",{className:"custom-button"},m.a.createElement("button",{type:"submit",onClick:function(t){return e.submitLogin(t)},className:"buton"},"Submit"),m.a.createElement("button",{type:"button",onClick:this.changeMode,className:"buton"},"Switch To ",this.state.isSignup?"SignIn":"SignUp"))),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("h2",null,"Post App ",this.state.isSignup?"SignUp":"Login"," "),m.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},t)))}}]),t}(u.Component);t.default=Object(p.b)(function(e){return{isAuth:null!==e.auth.token}},function(e){return{auth:function(t,a){return e(d.j(t,a))}}})(h)}}]);
//# sourceMappingURL=2.5eb7443f.chunk.js.map