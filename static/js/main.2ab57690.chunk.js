(this["webpackJsonpproyecto-final-ag"]=this["webpackJsonpproyecto-final-ag"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(62),a=n.n(c),r=n(61),i="[Auth] Login",s="[Auth] Logout",j=n(95),u=Object(r.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.types){case i:return{uid:t.payLoad.uid,name:t.payLoad.displayName};case s:return{};default:return e}}}),d="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,l=Object(r.d)(u,d(Object(r.a)(j.a))),b=n(42),p=n(53),h=n.n(p),x=n(65),O=n(8),g=n(20),f=n(14),m=n(58);n(142),n(124);m.a.initializeApp({apiKey:"AIzaSyCgsrjF18DOmeDBHbd9wBkbxpqRHJu7L-w",authDomain:"bd-find-pet.firebaseapp.com",projectId:"bd-find-pet",storageBucket:"bd-find-pet.appspot.com",messagingSenderId:"649767277617",appId:"1:649767277617:web:09884fa40e950156a8b110"});m.a.firestore();var w=new m.a.auth.GoogleAuthProvider,v=n(97),k=n.n(v),C=function(e,t){return{type:i,payload:{uid:e,displayName:t}}},y=function(){return{type:s}},S=n(153),A=n(154),z=n(155),_=n(168),I=n(166),D=n(104),R=n(73),E=n(4),L=function(){var e=Object(b.b)();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(D.a,{}),Object(E.jsx)(S.a,{height:"100vh",alignItems:"center",justifyContent:"center",background:"#d8f8b7",children:Object(E.jsxs)(S.a,{direction:"column",alignItems:"center",justifyContent:"center",background:"#a3d2ca",p:12,rounded:6,children:[Object(E.jsx)(A.a,{mt:20,mb:25,children:"Log In PetFind"}),Object(E.jsx)(z.a,{children:Object(E.jsx)(_.a,{rounded:100,boxSize:"200px",src:"https://image.freepik.com/vector-gratis/lindo-perro-gato-amigo-caricatura_138676-2432.jpg",alt:"Logo FindPet"})}),Object(E.jsx)(I.a,{leftIcon:Object(E.jsx)(R.b,{}),mt:20,mb:20,colorScheme:"teal",variant:"outline",onClick:function(t){e((function(e){m.a.auth().signInWithPopup(w).then((function(t){var n=t.user;e(C(n.uid,n.displayName)),console.log(n)})).catch((function(e){console.log(e),k.a.fire({icon:"error",title:"Error",text:"No seleccion\xf3 ninguna cuenta de Google!",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}))}))},children:"Iniciar Sesion con Google"})]})})]})},N=function(){return Object(E.jsx)("div",{className:"auth__main",children:Object(E.jsx)("div",{className:"auth__box-container",children:Object(E.jsxs)(f.d,{children:[Object(E.jsx)(f.b,{exact:!0,path:"/auth/login",component:L}),Object(E.jsx)(f.a,{to:"/auth/login"})]})})})},P=n(44),q=n(77),H=function(e){var t=e.isAuthenticated,n=e.component,o=Object(q.a)(e,["isAuthenticated","component"]);return Object(E.jsx)(f.b,Object(P.a)(Object(P.a)({},o),{},{component:function(e){return t?Object(E.jsx)(f.a,{to:"/"}):Object(E.jsx)(n,Object(P.a)({},e))}}))},B=function(e){var t=e.isAuthenticated,n=e.component,o=Object(q.a)(e,["isAuthenticated","component"]);return Object(E.jsx)(f.b,Object(P.a)(Object(P.a)({},o),{},{component:function(e){return t?Object(E.jsx)(n,Object(P.a)({},e)):Object(E.jsx)(f.a,{to:"/auth/login"})}}))},W=n(157),F=n(167);var G=function(){return Object(E.jsx)(S.a,{fontWeight:"500",maxWidth:"80%",color:"#33A109",borderRadius:"10px",backgroundColor:"white",padding:2,alignSelf:"flex-start",children:"Hola, c\xf3mo est\xe1s? puedo preguntar algo?"})};var J=function(){return Object(E.jsx)(S.a,{maxWidth:"80%",color:"white",borderRadius:"10px",backgroundColor:"#33A109",padding:2,alignSelf:"flex-end",children:"Hola, c\xf3mo est\xe1s? puedo preguntar algo?"})};var T=function(){return Object(E.jsxs)(F.b,{spacing:4,padding:4,minHeight:"80vh",backgroundColor:"#77D353",children:[Object(E.jsx)(J,{}),Object(E.jsx)(G,{}),Object(E.jsx)(W.a,{position:"fixed",backgroundColor:"white",type:"text",height:"50px",bottom:"20px",width:"90%"})]})},U=n(160),X=n(158),K=n(159),M=n(22);var V=function(){var e=Object(f.g)();return Object(E.jsxs)(X.a,{flexDirection:"column",position:"relative",bg:"#33A109",height:"20vh",children:[Object(E.jsx)(z.a,{backgroundImage:"url('https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"50%",width:"64px",height:"64px"}),Object(E.jsx)(K.a,{fontWeight:"600",mt:2,color:"white",children:"Contacto"}),Object(E.jsx)(U.a,{onClick:function(){return e.goBack()},fontSize:"30px",color:"white",position:"absolute",top:"calc(50%-30px)",left:8,as:M.a})]})};var Q=function(){return Object(E.jsxs)(z.a,{children:[Object(E.jsx)(V,{}),Object(E.jsx)(T,{})]})};var Y=function(){return Object(E.jsx)(X.a,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},height:"40px",width:"40px",backgroundColor:"#33A109",position:"fixed",bottom:"0",right:"40px",children:Object(E.jsx)(U.a,{color:"white",fontSize:20,as:M.b})})},Z=n(161);var $=function(){return Object(E.jsxs)(z.a,{mb:"20px",width:"160px",height:"200px",backgroundColor:"#77D353",children:[Object(E.jsx)(_.a,{height:"80%",src:"https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg"}),Object(E.jsx)(K.a,{color:"white",children:"Desaparecido"})]})};var ee=function(){return Object(E.jsx)(S.a,{justifyContent:"space-between",wrap:"wrap",mt:"100px",width:"90%",mx:"auto",children:Array(8).fill("").map((function(e,t){return Object(E.jsx)(Z.a,{as:g.b,to:"/detail/".concat(t),children:Object(E.jsx)($,{id:t})},t)}))})},te=n(162),ne=n(163);var oe=function(){var e=Object(b.b)();return Object(E.jsxs)(F.a,{id:"header-main-page",px:4,spacing:8,backgroundColor:"#33A109",height:"80px",position:"fixed",top:"0",left:"0",right:"0",children:[Object(E.jsx)(U.a,{fontSize:20,color:"white",as:M.d}),Object(E.jsxs)(te.a,{children:[Object(E.jsx)(ne.a,{pointerEvents:"none",children:Object(E.jsx)(M.e,{})}),Object(E.jsx)(W.a,{type:"text",placeholder:"Search",color:"black",backgroundColor:"white"})]}),Object(E.jsx)(Z.a,{color:"white",to:"/post",as:g.b,children:" Publicar"}),Object(E.jsx)(Z.a,{onClick:function(){e(function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(y());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:Object(E.jsx)(R.a,{})})]})};var ce=function(){return Object(E.jsxs)(z.a,{children:[Object(E.jsx)(oe,{}),Object(E.jsx)(Y,{}),Object(E.jsx)(ee,{})]})};var ae=function(){var e=Object(f.g)();return Object(E.jsx)(z.a,{position:"relative",backgroundImage:"url('https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg')",height:"50vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",children:Object(E.jsx)(X.a,{onClick:function(){return e.goBack()},cursor:"pointer",boxSize:10,borderRadius:"50%",backgroundColor:"#33A109",position:"absolute",top:"20px",left:"20px",children:Object(E.jsx)(U.a,{color:"white",as:M.a})})})};var re=function(){return Object(E.jsxs)(z.a,{padding:6,position:"relative",minHeight:"50vh",backgroundColor:"#77D353",children:[Object(E.jsx)(I.a,{onClick:function(){return function(){var e=document.createElement("input");e.setAttribute("value",window.location.href.split("?")[0].split("#")[0]),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}()},position:"absolute",top:"20px",right:"20px",color:"white",backgroundColor:"#33A109",rightIcon:Object(E.jsx)(M.f,{color:"white"}),children:"Compartir"}),Object(E.jsx)(K.a,{fontSize:"xl",color:"white",children:"Nombre"}),Object(E.jsx)(K.a,{fontSize:"xl",color:"white",children:"Raza"}),Object(E.jsx)(K.a,{fontSize:"xl",color:"white",children:"Direcci\xf3n"}),Object(E.jsx)(K.a,{fontSize:"xl",color:"white",children:"Detalles"}),Object(E.jsx)(K.a,{fontSize:"xl",color:"white",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat maxime consequuntur doloremque alias rem illum autem deserunt debitis. Lorem rem illum autem deserunt debitis. Lorem"}),Object(E.jsxs)(F.a,{justifyContent:"space-between",mt:4,children:[Object(E.jsx)(U.a,{fontSize:30,color:"white",as:M.g}),Object(E.jsx)(Z.a,{to:"/chat",as:g.b,children:Object(E.jsx)(I.a,{color:"white",backgroundColor:"#33A109",children:"Contactar"})})]})]})};var ie=function(){return Object(E.jsxs)(z.a,{children:[Object(E.jsx)(ae,{}),Object(E.jsx)(re,{})]})},se=n(164),je=n(100);var ue=function(){return Object(E.jsxs)(X.a,{flexDirection:"column",pt:"100px",px:6,backgroundColor:"#77D353",minHeight:"100vh",children:[Object(E.jsx)(se.a,{height:"300px",backgroundColor:"white",placeholder:"Coloca la informaci\xf3n de tu mascota, trata de dar la mayor cantidad de detalles posibles..."}),Object(E.jsxs)(F.a,{width:"100%",justifyContent:"space-between",px:"16px",borderRadius:"0 0 10px 10px",position:"relative",top:"-10px",height:"60px",backgroundColor:"#33A109",children:[Object(E.jsx)(U.a,{fontSize:30,color:"white",as:je.a}),Object(E.jsx)(I.a,{color:"#33A109",children:"Publicar"})]})]})};var de=function(){return Object(E.jsx)(F.a,{position:"fixed",top:"0",width:"100%",padding:6,height:"80px",backgroundColor:"#33A109",children:Object(E.jsx)(Z.a,{to:"/",as:g.b,children:Object(E.jsx)(U.a,{fontSize:30,color:"white",as:M.c})})})};var le=function(){return Object(E.jsxs)(z.a,{children:[Object(E.jsx)(de,{}),Object(E.jsx)(ue,{})]})};var be=function(){return Object(E.jsx)(g.a,{children:Object(E.jsxs)(f.d,{children:[Object(E.jsx)(f.b,{exact:!0,path:"/",component:ce}),Object(E.jsx)(f.b,{exact:!0,path:"/post",component:le}),Object(E.jsx)(f.b,{exact:!0,path:"/detail/:id",component:ie}),Object(E.jsx)(f.b,{exact:!0,path:"/chat",component:Q})]})})},pe=function(){var e=Object(o.useState)(!0),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!1),r=Object(O.a)(a,2),i=r[0],s=r[1],j=Object(b.b)();return Object(o.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(j(C(t.uid,t.displayName)),s(!0)):(console.log("Usuario no Registrado"),s(!1)),c(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[j,c]),n?Object(E.jsx)("h2",{children:"Espere por favor"}):Object(E.jsx)(g.a,{children:Object(E.jsx)("div",{children:Object(E.jsxs)(f.d,{children:[Object(E.jsx)(H,{path:"/auth",component:N,isAuthenticated:i}),Object(E.jsx)(B,{exact:!0,path:"/",component:be,isAuthenticated:i}),Object(E.jsx)(f.a,{to:"/auth/login"})]})})})},he=n(165),xe=function(){return Object(E.jsx)(he.a,{children:Object(E.jsx)(b.a,{store:l,children:Object(E.jsx)(pe,{})})})};a.a.render(Object(E.jsx)(xe,{}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.2ab57690.chunk.js.map