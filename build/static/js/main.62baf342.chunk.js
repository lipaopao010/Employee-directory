(this["webpackJsonpemplyee-directory"]=this["webpackJsonpemplyee-directory"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"name":"John One","image":"https://randomuser.me/api/portraits/lego/2.jpg","Phone":"98742211","Email":"John@abc.com","DOB":"01-07-1960"},{"id":2,"name":"Alice Two","image":"https://randomuser.me/api/portraits/lego/7.jpg","Phone":"94356677","Email":"Alice@hotmail.com","DOB":"11-10-1955"},{"id":3,"name":"Albert Three","image":"https://randomuser.me/api/portraits/lego/6.jpg","Phone":"98704455","Email":"AlbertThree@hotmail.com","DOB":"08-23-1965"},{"id":4,"name":"Alexa Four","image":"https://randomuser.me/api/portraits/lego/5.jpg","Phone":"90876354","Email":"Alexa@google.com","DOB":" 04-12-1978"},{"id":5,"name":"Smith Five","image":"https://randomuser.me/api/portraits/lego/3.jpg","Phone":"97216677","Email":"Smithfive@gmail.com","DOB":"08-11-1980"}]')},17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(15),m=a(5),i=a(6),s=a(8),p=a(7);a(22);var u=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},h=a(29),E=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"id"),r.a.createElement("th",{scope:"col"},"Name ",r.a.createElement(h.a,{onClick:function(){return e.props.onSort("name",!0)}},"\u25b2"),r.a.createElement(h.a,{onClick:function(){return e.props.onSort("name",!1)}},"\u25bc")),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,this.props.employees.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.Phone),r.a.createElement("td",null,r.a.createElement("imag",{src:e.image})),r.a.createElement("td",null,e.Email),r.a.createElement("td",null,e.DOB))}))))}}]),a}(n.Component),d=a(11);a(23);var g=function(e){return e.handleSearchChange,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("h1",null,"Employee Directory")))},f=a(28);function b(e){return r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"booktitle"},r.a.createElement(f.a.Label,null,"search here"),r.a.createElement(f.a.Control,{placeholder:"search",onChange:e.onSearch})))}var v=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:d,filteredEmployees:d},e.onSearch=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));e.setState({filteredEmployees:n})},e.onSort=function(t,a){console.log(t);var n=Object(c.a)(e.state.filteredEmployees);a?n.sort((function(e,a){return e[t]<a[t]?-1:1})):n.sort((function(e,a){return e[t]<a[t]?1:-1})),e.setState({filteredEmployees:n}),console.log("sorted!")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(g,null),r.a.createElement(b,{onSearch:this.onSearch}),r.a.createElement(E,{employees:this.state.filteredEmployees,onSort:this.onSort}," "))}}]),a}(n.Component);o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.62baf342.chunk.js.map