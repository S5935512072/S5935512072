(this.webpackJsonpminiproject=this.webpackJsonpminiproject||[]).push([[0],{217:function(e,t,a){e.exports=a(411)},222:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(213),c=a.n(l),o=(a(222),a(13)),i=a(14),m=a(16),u=a(15),s=a(9),E=a(31),h=a(10),d=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(s.c,{to:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/book"},"\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/create"},"\u0e08\u0e14\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")))})),p=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(s.c,{to:"/signup"},"Register")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/signin"},"Login")))},b=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(d,{profile:a}):r.a.createElement(p,null);return r.a.createElement("nav",{className:"blue"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{to:"/",className:""},"MyDiary"),n))})),f=(a(94),function(e){var t=e.project;return r.a.createElement("div",null,r.a.createElement("form",{className:"card-box"},r.a.createElement("form",{className:"box-title"},r.a.createElement("spen",{className:"card-name"},t.title)),r.a.createElement("form",{className:"box-name"},r.a.createElement("p",{className:"card-post1"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e42\u0e14\u0e22 ",t.authorFirstName," ",t.LastName))))}),g=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(s.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(f,{project:e}))})))},w=a(29),N=a(22),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(g,{projects:t})))):r.a.createElement(E.a,{to:"/signin"})}}]),a}(n.Component),j=Object(N.d)(Object(h.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(w.firestoreConnect)([{collection:"projects"}]))(v),O=a(412),y=Object(N.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(w.firestoreConnect)([{collection:"project"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"boxSignin"},r.a.createElement("div",null,r.a.createElement(O.a,{color:"primary",pill:!0},"\u0e2a\u0e21\u0e38\u0e14\u0e42\u0e19\u0e49\u0e15"),r.a.createElement("br",null),r.a.createElement("spen",null,t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",null,r.a.createElement("div",null,"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e42\u0e14\u0e22 ",t.authorFistName," ",t.authorLastName)))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(E.a,{to:"/signin"})})),C=a(30),S=(a(377),a(413)),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(E.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"boxSignin"},r.a.createElement("h5",null,"LOGIN (\u0e40\u0e02\u0e49\u0e32\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19)"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))),r.a.createElement("div",{className:"footer text-footer"},r.a.createElement("p",null,"Surasak Noorurk"),r.a.createElement("p",null," miniProject 5935512072 Computer Engineering"),r.a.createElement(S.a,{href:"https://surasak783023869.wordpress.com/"},"\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d")))}}]),a}(n.Component),k=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(R),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={emmail:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(E.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"boxSignup"},r.a.createElement("h5",null,"Register (\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19)"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"firstName"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"lastName"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))),r.a.createElement("div",{className:"footer text-footer"},r.a.createElement("p",null,"Surasak Noorurk"),r.a.createElement("p",null," miniProject 5935512072 Computer Engineering"),r.a.createElement(S.a,{href:"https://surasak783023869.wordpress.com/"},"\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d")))}}]),a}(n.Component),I=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),o=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(x),F=a(39),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"boxSignin"},r.a.createElement("h5",null,"Topic (\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d)"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01")))):r.a.createElement(E.a,{to:"/signin"})}}]),a}(n.Component),A=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,c=a().firebase.auth.uid;r.collection("projects").add(Object(F.a)({},e,{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:c,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(P),U=a(414),G=a(415),_=a(416),L=a(417),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{className:"comming"},r.a.createElement(G.a,{className:"boxStudy"},r.a.createElement("h1",{className:"textbook1"},"\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e41\u0e19\u0e30\u0e19\u0e33"),r.a.createElement("h5",{className:"textbook2"},"\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),r.a.createElement(G.a,{className:"bot1"},r.a.createElement(_.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d"),r.a.createElement("th",null,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"),r.a.createElement("th",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"\u0e2b\u0e25\u0e31\u0e07\u0e1a\u0e49\u0e32\u0e19 YouTuber"),r.a.createElement("td",null,"\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/501859"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"\u0e40\u0e23\u0e32\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19"),r.a.createElement("td",null,"\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/503452"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"\u0e28\u0e34\u0e25\u0e1b\u0e30\u0e01\u0e32\u0e23\u0e1e\u0e39\u0e14\u0e43\u0e2b\u0e49\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e19\u0e31\u0e48\u0e07\u0e43\u0e19\u0e43\u0e08\u0e04\u0e19"),r.a.createElement("td",null,"\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/497526"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"The Positive Shift \u0e23\u0e35\u0e40\u0e0b\u0e47\u0e15\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e1e\u0e34\u0e0a\u0e34\u0e15\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02"),r.a.createElement("td",null,"\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/502178"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 ")))))),r.a.createElement("h5",{className:"textbook3"},"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement(G.a,{className:"bot2"},r.a.createElement(_.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d"),r.a.createElement("th",null,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"),r.a.createElement("th",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1f\u0e49\u0e32\u0e23\u0e2d\u0e1e\u0e1a\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c"),r.a.createElement("td",null,"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/490805"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"\u0e14\u0e49\u0e27\u0e22\u0e40\u0e25\u0e37\u0e2d\u0e14\u0e41\u0e25\u0e30\u0e0a\u0e35\u0e27\u0e34\u0e15"),r.a.createElement("td",null,"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/492073"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"\u0e40\u0e01\u0e32\u0e30\u0e41\u0e2b\u0e48\u0e07\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48\u0e40\u0e2a\u0e35\u0e22\u0e44\u0e1b"),r.a.createElement("td",null,"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/499547"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"\u0e21\u0e38\u0e21\u0e21\u0e37\u0e14\u0e41\u0e25\u0e30\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2d\u0e37\u0e48\u0e19\u0e46"),r.a.createElement("td",null,"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/501372"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"\u0e1a\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e2d\u0e32\u0e08\u0e04\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14\u0e44\u0e1b \u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e01\u0e47\u0e2a\u0e39\u0e0d\u0e2b\u0e32\u0e22\u0e43\u0e19\u0e1e\u0e23\u0e34\u0e1a\u0e15\u0e32"),r.a.createElement("td",null,"\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/475511"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))))))),r.a.createElement("div",{className:"center"},r.a.createElement(L.a,{href:"/book1",className:"btn orange lighten-1 z-depth-0"},"\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e2d\u0e44\u0e1b"))))}}]),a}(n.Component),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{className:"comming"},r.a.createElement(G.a,{className:"boxStudy"},r.a.createElement("h1",{className:"textbook1"},"\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e41\u0e19\u0e30\u0e19\u0e33"),r.a.createElement("h5",{className:"textbook2"},"\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32"),r.a.createElement(G.a,{className:"bot1"},r.a.createElement(_.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d"),r.a.createElement("th",null,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"),r.a.createElement("th",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"\u0e27\u0e34\u0e18\u0e35\u0e40\u0e2d\u0e32\u0e15\u0e31\u0e27\u0e23\u0e2d\u0e14\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e41\u0e2a\u0e19\u0e08\u0e30\u0e19\u0e48\u0e32\u0e40\u0e1a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e32\u0e22"),r.a.createElement("td",null,"\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/202008"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"\u0e21\u0e2d\u0e07\u0e21\u0e38\u0e21\u0e01\u0e25\u0e31\u0e1a \u0e25\u0e31\u0e1a\u0e04\u0e21\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14 [Ignore Everybody]"),r.a.createElement("td",null,"\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/16700"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"\u0e1e\u0e39\u0e14\u0e43\u0e2b\u0e49\u0e04\u0e19\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e07\u0e48\u0e32\u0e22\u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e40\u0e2d\u0e07"),r.a.createElement("td",null,"\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/244742"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c (\u0e01\u0e48\u0e2d\u0e19) \u0e42\u0e19\u0e49\u0e21\u0e19\u0e49\u0e32\u0e27\u0e43\u0e08 PRE - SUASION"),r.a.createElement("td",null,"\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/495372"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 ")))))),r.a.createElement("h5",{className:"textbook3"},"\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07"),r.a.createElement(G.a,{className:"bot2"},r.a.createElement(_.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d"),r.a.createElement("th",null,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"),r.a.createElement("th",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e43\u0e19\u0e27\u0e31\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27"),r.a.createElement("td",null,"\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/234966"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"\u0e1e\u0e25\u0e31\u0e07\u0e27\u0e34\u0e40\u0e28\u0e29\u0e02\u0e2d\u0e07\u0e04\u0e19\u0e18\u0e23\u0e23\u0e21\u0e14\u0e32 BIG MAGIC"),r.a.createElement("td",null,"\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/205889"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"\u0e22\u0e38\u0e48\u0e07\u0e08\u0e23\u0e34\u0e07! \u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e04\u0e48\u0e04\u0e34\u0e14\u0e44\u0e1b\u0e40\u0e2d\u0e07"),r.a.createElement("td",null,"\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07"),r.a.createElement("td",null,r.a.createElement(S.a,{href:"https://www.naiin.com/product/detail/489995"}," \u0e25\u0e32\u0e22\u0e23\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 "))))))),r.a.createElement("div",{className:"center"},r.a.createElement(L.a,{href:"/book",className:"btn orange lighten-1 z-depth-0"},"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"))))}}]),a}(n.Component),J=(a(378),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:j}),r.a.createElement(E.b,{path:"/project/:id",component:y}),r.a.createElement(E.b,{path:"/signin",component:k}),r.a.createElement(E.b,{path:"/signup",component:I}),r.a.createElement(E.b,{path:"/create",component:A}),r.a.createElement(E.b,{path:"/book",component:T}),r.a.createElement(E.b,{path:"/book1",component:z}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(F.a)({},e,{authError:"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"});case"LOGIN_SUCCESS":return console.log("login success"),Object(F.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(F.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(F.a)({},e,{authError:t.err.message});default:return e}},B={projects:[{id:"1",title:"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49\u0e08\u0e30\u0e43\u0e2a\u0e48\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35",content:"blah blah blah"},{id:"2",title:"\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e34\u0e14\u0e17\u0e35\u0e15\u0e30!!!",content:"blah blah blah"},{id:"3",title:"\u0e04\u0e34\u0e14\u0e44\u0e21\u0e48\u0e2d\u0e2d\u0e01",content:"blah blah blah"}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},M=a(60),Q=Object(N.c)({auth:W,project:K,firestore:M.firestoreReducer,firebase:w.firebaseReducer}),Y=a(216),q=a(92),V=a.n(q);a(406),a(409);V.a.initializeApp({apiKey:"AIzaSyDiWWq4BQJUeASV-4AFWQJw2sLon6K7PRY",authDomain:"miniproject-bec39.firebaseapp.com",databaseURL:"https://miniproject-bec39.firebaseio.com",projectId:"miniproject-bec39",storageBucket:"miniproject-bec39.appspot.com",messagingSenderId:"714429261067",appId:"1:714429261067:web:1ae9b63608f4bbbaab2e0e",measurementId:"G-1LP7K9GZGF"}),V.a.firestore().settings({timestampsInSnapshots:!0});var Z=V.a,$=Object(N.e)(Q,Object(N.d)(Object(N.a)(Y.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:M.getFirestore})),Object(M.reduxFirestore)(Z),Object(w.reactReduxFirebase)(Z,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));$.firebaseAuthIsReady.then((function(){c.a.render(r.a.createElement(h.a,{store:$},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}))},94:function(e,t,a){}},[[217,1,2]]]);
//# sourceMappingURL=main.2451bd45.chunk.js.map