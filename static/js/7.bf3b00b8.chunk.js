(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{286:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(14),l=n(15),r=n(17),c=n(16),s=n(18),u=n(0),i=n.n(u),o=n(37),m=n.n(o),p=(n(286),function(e){var t=e.name,n=e.email,a=e.phone,l=e.username,r=e.website,c=e.company;if(c)var s=Object.keys(c).map(function(e){return i.a.createElement("li",{key:e},i.a.createElement("span",null,e),": ",c[e])});return i.a.createElement("div",{className:"post"},i.a.createElement("ul",null,i.a.createElement("li",null,"Name : ",t),i.a.createElement("li",null,"Email : ",n),i.a.createElement("li",null,"Phone : ",a),i.a.createElement("li",null,"Username : ",l),i.a.createElement("li",null,"Website : ",r)),i.a.createElement("ul",null,s))}),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={user:null},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;m.a.get("http://jsonplaceholder.typicode.com/users/"+t).then(function(t){e.setState({user:t.data})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,Object.assign({},this.state.user,{address:this.state.user})))}}]),t}(u.Component);t.default=h}}]);
//# sourceMappingURL=7.bf3b00b8.chunk.js.map