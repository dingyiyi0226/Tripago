(this.webpackJsonptripago=this.webpackJsonptripago||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),c=a(15),o=a.n(c),i=(a(70),a(71),a(32)),l=(a.p,a(72),a(12)),u=a(13),j=a(7),b=a(8),h=a(11),d=a(10),p=a(108),m=a(109),O=r.a.createContext({loginStatus:{isLogin:!1,userID:""},setLoginStatus:function(){}}),x=a(9),f=a.n(x),g=a(14),v=a(18),w=a.n(v),C={status:{isLogin:!0,userID:"123"},message:"login success"},y={status:{isLogin:!1,userID:""},message:"Wrong username or password"},k=function(e){return new Promise((function(t){setTimeout(t,e)}))},N=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.email,t.password,e.next=3,k(500);case 3:return e.abrupt("return",C);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.useContext)(O),t=e.loginStatus,a=e.setLoginStatus;return t.isLogin?Object(n.jsx)(p.a,{className:"justify-content-end",children:Object(n.jsx)(p.a.Item,{onClick:function(){console.log("logout clicked"),a({isLogin:!1,userID:""})},children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/login",children:"Log out"})})}):Object(n.jsxs)(p.a,{className:"justify-content-end",children:[Object(n.jsx)(p.a.Item,{children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/register",children:"Register"})}),Object(n.jsx)(p.a.Item,{children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/login",children:"Log in"})})]})},S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(m.a,{variant:"dark",bg:"primary",children:[Object(n.jsx)(m.a.Brand,{as:l.b,to:"/home",children:"Tripago"}),Object(n.jsxs)(p.a,{className:"mr-auto",children:[Object(n.jsx)(p.a.Item,{children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/home",children:"Home"})}),Object(n.jsx)(p.a.Item,{children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/albums",children:"Albums"})})]}),Object(n.jsx)(L,{})]})}}]),a}(s.Component),I=a(104),P=a(105),D=a(63),A=a(103),M=(a(39),a.p+"static/media/testpic.f038f9e1.png"),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"p-3",children:[Object(n.jsx)(A.a,{src:M,fluid:!0,rounded:!0,className:"my-3"}),Object(n.jsxs)("div",{className:"profile__text px-4",children:[Object(n.jsx)("h3",{className:"py-1",children:"Ethia Polis"}),Object(n.jsx)("h6",{children:"#SuperStar"}),Object(n.jsx)("h6",{children:"#Star4Real"}),Object(n.jsx)("h6",{children:"#StarFish"})]})]})}}]),a}(s.Component),F=a(44),U={lat:25.0174,lng:121.5405},E=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"}),G=function(e){return'\n  <div class="travel-map__info-window">\n    <p>'.concat(e.id,"</p>\n    <img src=").concat(e.coverPhoto.url,' alt="">\n  </div>')},R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).renderGoogleApi=function(e,t,a){var n=[],s=[];a.filter((function(e){return e.coverPhoto&&e.coverPhoto.location})).forEach((function(a){n.push(new t.Marker({position:{lat:a.coverPhoto.location._latitude,lng:a.coverPhoto.location._longitude},map:e})),s.push(new t.InfoWindow({content:G(a)}))})),n.forEach((function(t,a){t.addListener("click",(function(){s[a].open(e,t)}))}))},n.state={fetching:!0,albums:[],mapCenter:U},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(g.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("/albums");case 2:a=t.sent,console.log(a.data),e.setState({fetching:!1,albums:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photos"}):Object(n.jsxs)("div",{className:"py-3 travel-map__container",children:[Object(n.jsx)("h2",{children:"TravelMap"}),Object(n.jsx)("div",{className:"travel-map",children:Object(n.jsx)(F.a,{bootstrapURLKeys:{key:""},defaultCenter:this.state.mapCenter,defaultZoom:5,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.renderGoogleApi(a,n,e.state.albums)}})})]})}}]),a}(s.Component),T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsx)(I.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(P.a,{className:"h-100",children:[Object(n.jsx)(D.a,{xs:4,lg:3,children:Object(n.jsx)(_,{})}),Object(n.jsx)(D.a,{xs:8,lg:9,children:Object(n.jsx)(R,{})})]})})}}]),a}(s.Component),B=a(111),W=a.p+"static/media/add-outline.019bb36e.svg",H=a.p+"static/media/testpic2.bc0cfe5e.png",J=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"}),K=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={fetching:!0,albums:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(g.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.get("/albums");case 2:a=t.sent,console.log(a.data),e.setState({fetching:!1,albums:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photos"}):Object(n.jsx)("div",{className:"p-4",children:Object(n.jsx)(I.a,{className:"albums-gallery",children:Object(n.jsxs)(P.a,{xs:1,sm:2,md:3,lg:4,children:[Object(n.jsx)(D.a,{className:"p-3",children:Object(n.jsxs)(B.a,{as:l.b,to:"/albumcreation",children:[Object(n.jsx)("div",{className:"card-img__wrapper",children:Object(n.jsx)(B.a.Img,{src:W})}),Object(n.jsx)(B.a.Footer,{children:"Click to Add"})]})}),this.state.albums.map((function(e){return Object(n.jsx)(D.a,{className:"p-3",children:Object(n.jsxs)(B.a,{as:l.b,to:"albums/".concat(e.id),children:[Object(n.jsx)("div",{className:"card-img__wrapper",children:e.coverPhoto&&e.coverPhoto.url?Object(n.jsx)(B.a.Img,{src:e.coverPhoto.url}):Object(n.jsx)(B.a.Img,{src:H})}),Object(n.jsx)(B.a.Footer,{children:e.id})]})},e.id)}))]})})})}}]),a}(s.Component),Z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsx)(I.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(P.a,{className:"h-100",children:[Object(n.jsx)(D.a,{xs:4,lg:3,children:Object(n.jsx)(_,{})}),Object(n.jsx)(D.a,{xs:8,lg:9,children:Object(n.jsx)(K,{})})]})})}}]),a}(s.Component),q=(a(40),w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"})),z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={description:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(g.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.get("album-description",{params:{album:e.props.id}});case 2:a=t.sent,console.log(a),a.data&&e.setState({description:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.props.id;return Object(n.jsx)("div",{className:"position-sticky pt-3",children:Object(n.jsxs)(p.a,{className:"flex-column align-items-start",children:[Object(n.jsx)(p.a.Item,{as:"h5",className:"mr-0",children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/albums/".concat(e,"/"),children:e.toUpperCase()})}),Object(n.jsx)(p.a.Item,{className:"mr-0",children:Object(n.jsx)(p.a.Link,{as:"p",className:"m-0 sidebar__description",children:this.state.description})}),Object(n.jsx)(p.a.Item,{className:"mr-0",children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/albums/".concat(e),children:"Home"})}),Object(n.jsx)(p.a.Item,{className:"mr-0",children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/albums/".concat(e,"/upload"),children:"Image Uploader"})}),Object(n.jsx)(p.a.Item,{className:"mr-0",children:Object(n.jsx)(p.a.Link,{as:l.b,to:"/albums/".concat(e,"/map"),children:"Travel Map"})})]})})}}]),a}(s.Component),Q=a.p+"static/media/close-circle-outline.b3f38ee2.svg",V=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"}),X=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onDeletePhoto=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.delete("/photo",{params:{album:n.props.id,photo:t}});case 2:e.sent,n.setState((function(e){return{photos:e.photos.filter((function(e){return e.id!==t}))}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={fetching:!0,photos:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(g.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get("/album-photos",{params:{album:e.props.id}});case 2:a=t.sent,e.setState({fetching:!1,photos:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photos"}):Object(n.jsx)(I.a,{className:"album-gallery",children:Object(n.jsx)(P.a,{xs:1,sm:2,md:3,lg:4,children:this.state.photos.map((function(t){return Object(n.jsx)(D.a,{className:"p-3",children:Object(n.jsxs)(B.a,{children:[Object(n.jsx)(B.a.Img,{src:t.url}),Object(n.jsx)("img",{className:"cross",src:Q,onClick:function(){return e.onDeletePhoto(t.id)}}),t.location?Object(n.jsx)(B.a.Footer,{as:l.b,to:{pathname:"/albums/".concat(e.props.id,"/map"),hash:"#".concat(t.id)},children:"SHOW ON MAP"}):Object(n.jsx)(B.a.Footer,{children:"NO LOCATION INFO"})]})},t.id)}))})})}}]),a}(s.Component),Y=a(64),$=a.n(Y),ee=a(106),te=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com",headers:{"content-type":"multipart/form-data"}}),ae=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onDrop=function(e,t){n.setState((function(t){return{photos:t.photos.concat(e)}}))},n.onUpload=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("upload photos to backend"),(t=new FormData).append("album",n.props.id),n.state.photos.forEach((function(e,a){t.append("photos",e)})),e.next=6,te.post("/upload-photos",t);case 6:a=e.sent,console.log(a),n.setState((function(e){return{photos:[],key:e.key+1}}));case 9:case"end":return e.stop()}}),e)}))),n.state={photos:[],key:0},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)($.a,{className:"album-uploader",withPreview:!0,buttonText:"Choose photos",label:"Max file size = 5mb",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png"],buttonClassName:"album-uploader__button"},this.state.key),Object(n.jsx)(ee.a,{onClick:function(){return e.onUpload()},children:"Upload"})]})}}]),a}(s.Component),ne=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"}),se={lat:25.0174,lng:121.5405},re=function(e){return'\n  <div class="album-map__info-window">\n    <p>'.concat(e.id,"</p>\n    <img src=").concat(e.url,' alt="">\n  </div>')},ce=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).renderGoogleApi=function(e,t,a,n){var s=[],r=[],c=void 0;a.filter((function(e){return e.location})).forEach((function(a,o){a.id===n.id&&(c=o),s.push(new t.Marker({position:{lat:a.location._latitude,lng:a.location._longitude},map:e})),r.push(new t.InfoWindow({content:re(a)}))})),s.forEach((function(t,a){t.addListener("click",(function(){r[a].open(e,t)}))})),c&&r[c].open(e,s[c])},n.state={fetching:!0,photos:[],centerPhoto:void 0},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.hash.slice(1);(function(){var a=Object(g.a)(f.a.mark((function a(){var n,s,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ne.get("/album-photos",{params:{album:e.props.id}});case 2:if(n=a.sent,!t){a.next=8;break}s=n.data.find((function(e){return e.id===t})),e.setState({fetching:!1,photos:n.data,centerPhoto:s}),a.next=12;break;case 8:return a.next=10,ne.get("album-coverphoto",{params:{album:e.props.id}});case 10:(r=a.sent).data&&r.data.location?e.setState({fetching:!1,photos:n.data,centerPhoto:r.data}):e.setState({fetching:!1,photos:n.data});case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state,a=t.photos,s=t.centerPhoto;console.log("centerphoto",s);var r=s&&s.location?{lat:s.location._latitude,lng:s.location._longitude}:se;return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photo Locations"}):Object(n.jsx)("div",{className:"album-map",children:Object(n.jsx)(F.a,{bootstrapURLKeys:{key:""},defaultCenter:r,defaultZoom:10,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,r=t.maps;return e.renderGoogleApi(n,r,a,s)}})})}}]),a}(s.Component),oe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.id;return Object(n.jsxs)("div",{className:"h-100",children:[Object(n.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(n.jsxs)(u.d,{children:[Object(n.jsxs)(u.b,{exact:!0,path:"/albums/".concat(e,"/"),children:["Album - ",e]}),Object(n.jsx)(u.b,{path:"/albums/".concat(e,"/upload"),children:"Image Uploader"}),Object(n.jsx)(u.b,{path:"/albums/".concat(e,"/map"),children:"Travel Map"})]})}),Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/albums/".concat(e),children:Object(n.jsx)(X,{id:e})}),Object(n.jsx)(u.b,{path:"/albums/".concat(e,"/upload"),children:Object(n.jsx)(ae,{id:e})}),Object(n.jsx)(u.b,{path:"/albums/".concat(e,"/map"),render:function(t){var a=t.location;return Object(n.jsx)(ce,{id:e,location:a})}})]})]})}}]),a}(s.Component);var ie=function(){var e=Object(u.g)().id;return Object(n.jsx)(I.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(P.a,{className:"h-100",children:[Object(n.jsx)(D.a,{xs:4,sm:3,lg:2,children:Object(n.jsx)(z,{id:e})}),Object(n.jsx)(D.a,{xs:8,sm:9,lg:10,children:Object(n.jsx)(oe,{id:e})})]})})},le=a(30),ue=a(110),je=a(107),be=w.a.create({baseURL:"https://our-tripago.an.r.appspot.com"}),he=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.id,s=t.value;n.setState(Object(le.a)({},a,s))},n.onSubmit=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,s,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,s=a.albumName,r=a.albumDescription,e.prev=2,e.next=5,be.post("/album-create",{albumName:s,albumDescription:r});case 5:e.sent,n.setState({submit:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("album already exists"),n.setState({albumName:"",albumDescription:"",showAlert:!0});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.onCloseAlert=function(){n.setState({showAlert:!1})},n.state={submit:!1,albumName:"",albumDescription:"",showAlert:!1},n}return Object(b.a)(a,[{key:"render",value:function(){return this.state.submit?Object(n.jsx)(u.a,{to:"/albums/".concat(this.state.albumName)}):Object(n.jsxs)("div",{className:"album-creation",children:[Object(n.jsx)(ue.a,{variant:"danger",show:this.state.showAlert,onClose:this.onCloseAlert,dismissible:!0,children:"Album already exists."}),Object(n.jsxs)(je.a,{validated:!0,onSubmit:this.onSubmit,children:[Object(n.jsxs)(je.a.Group,{controlId:"albumName",children:[Object(n.jsx)(je.a.Label,{children:"Album Name"}),Object(n.jsx)(je.a.Control,{type:"text",value:this.state.albumName,placeholder:"Album name",onChange:this.onChange,required:!0}),Object(n.jsx)(je.a.Control.Feedback,{type:"invalid",children:"Please input the album name"})]}),Object(n.jsxs)(je.a.Group,{controlId:"albumDescription",children:[Object(n.jsx)(je.a.Label,{children:"Description"}),Object(n.jsx)(je.a.Control,{type:"text",value:this.state.albumDescription,placeholder:"Description of this album",onChange:this.onChange})]}),Object(n.jsx)(ee.a,{variant:"primary",type:"submit",children:"Submit"})]})]})}}]),a}(s.Component),de=a(29),pe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return this.props.errorMessage?Object(n.jsx)(ue.a,{variant:"warning",children:this.props.errorMessage}):Object(n.jsx)("div",{})}}]),a}(s.Component),me=function(e,t){var a=Object(s.useContext)(O),r=a.loginStatus,c=a.setLoginStatus,o=Object(s.useState)(""),l=Object(i.a)(o,2),j=l[0],b=l[1];console.log("loginStatus: ",r);var h=function(){var a=Object(g.a)(f.a.mark((function a(n){var s,o,i;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,N(e,t);case 3:s=a.sent,o=s.status,i=s.message,console.log("Received login status: ",o,i),o.isLogin||(b(i),console.log(i)),c(o),console.log("Is login after clicking: ",r);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)(ee.a,{variant:"primary",type:"submit",onClick:h,children:"Login"}),function(){if(r.isLogin)return console.log("redirect rendered"),Object(n.jsx)(u.a,{to:"/home"})}(),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{width:"80%",margin:"auto"},children:Object(n.jsx)(pe,{errorMessage:j})})]})},Oe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(le.a)({},a,s))},n.state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(de.a)(n)),n}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{width:"40%",margin:"auto"},children:Object(n.jsxs)(je.a,{children:[Object(n.jsxs)(je.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsxs)(je.a.Label,{children:[Object(n.jsx)("br",{}),"Email Address"]}),Object(n.jsx)(je.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(n.jsxs)(je.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(je.a.Label,{children:"Password"}),Object(n.jsx)(je.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(n.jsx)(me,{email:this.state.email,password:this.state.password})]})})}}]),a}(s.Component),xe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.password,a=e.passwordConfirm,s=e.passwordChanged,r=e.passwordConfirmChanged;return s&&r&&t!==a?Object(n.jsx)(ue.a,{variant:"warning",children:"unmatched passwords!"}):Object(n.jsx)("div",{})}}]),a}(s.Component),fe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return this.props.errorMessage?Object(n.jsx)(ue.a,{variant:"warning",children:this.props.errorMessage}):Object(n.jsx)("div",{})}}]),a}(s.Component),ge=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t,a=e.target,n=a.name,r=a.value;s.setState((t={},Object(le.a)(t,n,r),Object(le.a)(t,n+"Changed",!0),t))},s.handleSubmit=function(e){e.preventDefault(),s.setState({redirect:!0})},s.renderRedirect=function(){if(s.state.redirect)return Object(n.jsx)(u.a,{to:"/home"})},s.state={email:"",password:"",passwordConfirm:"",passwordChanged:!1,passwordConfirmChanged:!1,errorMessage:"",redirect:!1},s.handleChange=s.handleChange.bind(Object(de.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(de.a)(s)),s}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{width:"40%",margin:"auto"},children:[Object(n.jsxs)(je.a,{children:[Object(n.jsxs)(je.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsxs)(je.a.Label,{children:[Object(n.jsx)("br",{}),"Email Address"]}),Object(n.jsx)(je.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(n.jsxs)(je.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(je.a.Label,{children:"Password"}),Object(n.jsx)(je.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(n.jsxs)(je.a.Group,{controlId:"formBasicPasswordConfirm",children:[Object(n.jsx)(je.a.Label,{children:"Confirm Password"}),Object(n.jsx)(je.a.Control,{type:"password",placeholder:"Password",name:"passwordConfirm",value:this.state.passwordConfirm,onChange:this.handleChange})]}),Object(n.jsx)("div",{style:{width:"80%",margin:"auto"},children:Object(n.jsx)(xe,{data:this.state})}),this.renderRedirect(),Object(n.jsx)(ee.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,children:"Register"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{width:"60%",margin:"auto"},children:Object(n.jsx)(fe,{errorMessage:this.state.errorMessage})})]})}}]),a}(s.Component),ve=function(){var e=Object(s.useContext)(O),t=e.loginStatus;e.setloginStatus;return t.isLogin?Object(n.jsxs)(l.a,{basename:"/tripago",children:[Object(n.jsx)(S,{}),Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/",children:Object(n.jsx)(u.a,{to:"/home"})}),Object(n.jsx)(u.b,{path:"/home",children:Object(n.jsx)(T,{})}),Object(n.jsx)(u.b,{exact:!0,path:"/albums",children:Object(n.jsx)(Z,{})}),Object(n.jsx)(u.b,{path:"/albums/:id",children:Object(n.jsx)(ie,{})}),Object(n.jsx)(u.b,{path:"/albumcreation",children:Object(n.jsx)(he,{})}),Object(n.jsx)(u.b,{path:"/login",children:Object(n.jsx)(Oe,{})}),Object(n.jsx)(u.b,{path:"/register",children:Object(n.jsx)(ge,{})})]})]}):Object(n.jsxs)(l.a,{basename:"/tripago",children:[Object(n.jsx)(S,{}),Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/register",children:Object(n.jsx)(ge,{})}),Object(n.jsx)(u.b,{path:"/login",children:Object(n.jsx)(Oe,{})}),Object(n.jsx)(u.b,{path:"/",children:Object(n.jsx)(u.a,{to:"/login"})})]})]})};var we=function(){var e=Object(s.useState)({isLogin:!1,userID:void 0}),t=Object(i.a)(e,2),a=t[0],r=t[1],c={loginStatus:a,setLoginStatus:r};return Object(s.useEffect)((function(){r(y)}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O.Provider,{value:c,children:Object(n.jsx)(ve,{})})})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(we,{})}),document.getElementById("root")),Ce()},39:function(e,t,a){},40:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.e9d23475.chunk.js.map