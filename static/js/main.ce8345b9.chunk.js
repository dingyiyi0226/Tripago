(this.webpackJsonptripago=this.webpackJsonptripago||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),c=a(17),o=a.n(c),i=(a(82),a(83),a(7)),l=a.n(i),u=a(10),h=a(55),d=(a.p,a(85),a(13)),p=a(16),j=a(126),b=a(125),m=s.a.createContext({loginStatus:{isLogin:!1,name:""},setLoginStatus:function(){}}),f=a(15),O=a.n(f),x=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),g={status:{isLogin:!1,userID:""},message:"Wrong email or password"},v=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.next=3,x.post("/login",t).then((function(e){console.log("Login 200: ",e.data),a=e.data})).catch((function(e){console.log("Login err: ",e),a=g}));case 3:return e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.next=3,x.post("/register",t).then((function(e){console.log("Register + Login 200: ",e.data),a=e.data})).catch((function(e){console.log("Registration Error: ",e),a=g}));case 3:return e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.post("/logout");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checkLoginStatus called"),e.next=3,x.get("/session");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(r.useContext)(m),t=e.loginStatus,a=e.setLoginStatus;return t.isLogin?(console.log("header rendered, logged in"),Object(n.jsxs)(j.a,{variant:"dark",bg:"primary",children:[Object(n.jsx)(j.a.Brand,{as:d.b,to:"/home",children:"Tripago"}),Object(n.jsxs)(b.a,{className:"mr-auto",children:[Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/map",children:"Map"})}),Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/albums",children:"Albums"})}),Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/platform",children:"Platform"})})]}),Object(n.jsx)(b.a,{className:"justify-content-end",children:Object(n.jsx)(b.a.Item,{onClick:function(){console.log("logout clicked"),y(),a({isLogin:!1,userID:""})},children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/login",children:"Log out"})})})]})):(console.log("header rendered, not logged in"),Object(n.jsxs)(j.a,{variant:"dark",bg:"primary",children:[Object(n.jsx)(j.a.Brand,{as:d.b,to:"/home",children:"Tripago"}),Object(n.jsx)(b.a,{className:"mr-auto",children:Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/platform",children:"Platform"})})}),Object(n.jsxs)(b.a,{className:"justify-content-end",children:[Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/register",children:"Register"})}),Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/login",children:"Log in"})})]})]}))},N=a(8),L=a(9),P=a(12),S=a(11),A=a(124),I=a(116),D=a(117),M=(a(44),a.p+"static/media/search-outline.b350c0d8.svg"),R=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onKeyDown=function(e){"Enter"===e.key&&(n.setState({submit:!0}),e.preventDefault())},n.onInputRegion=function(e){n.setState({region:e.target.value})},n.onSearch=function(){n.setState({region:""})},n.state={region:"",submit:!1},n}return Object(L.a)(a,[{key:"render",value:function(){var e=this.state.region;return this.state.submit?Object(n.jsx)(p.a,{to:{pathname:"/platform",search:"?region=".concat(e)}}):Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsx)("p",{className:"logo-text",children:"Tripago"}),Object(n.jsx)(A.a,{children:Object(n.jsx)(A.a.Group,{controlId:"search",children:Object(n.jsxs)(I.a,{size:"sm",children:[Object(n.jsx)(A.a.Control,{type:"text",value:e,placeholder:"Region",onChange:this.onInputRegion,onKeyDown:this.onKeyDown}),Object(n.jsx)(I.a.Append,{as:d.b,to:{pathname:"/platform",search:"?region=".concat(e)},onClick:this.onSearch,children:Object(n.jsx)(D.a,{src:M})})]})})})]})}}]),a}(r.Component),_=a(118),U=a(119),E=a(73),T=a.p+"static/media/testpic.f038f9e1.png",F=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),G=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={userName:"",userDescription:"",userPhoto:""},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.get("/profile").then((function(t){e.setState(t.data),e.setState({userPhoto:T})})).catch((function(e){console.log("ProfileDidMountError: ",e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"p-3",children:[Object(n.jsx)(D.a,{src:this.state.userPhoto,fluid:!0,rounded:!0,className:"my-3"}),Object(n.jsxs)("div",{className:"profile__text px-4",children:[Object(n.jsx)("h3",{className:"py-1",children:this.state.userName}),Object(n.jsx)("h6",{children:this.state.userDescription})]})]})}}]),a}(r.Component),B=a(39),Z=a(41),H={lat:25.0174,lng:121.5405},K=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),W=function(e){return'\n  <div class="travel-map__info-window">\n    <p>'.concat(e.id,"</p>\n    <img src=").concat(e.coverPhoto.url,' alt="">\n  </div>')},z=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).renderGoogleApi=function(e,t,a){var n=[],r=[];a.filter((function(e){return e.coverPhoto&&e.coverPhoto.location})).forEach((function(a){n.push(new t.Marker({position:{lat:a.coverPhoto.location._latitude,lng:a.coverPhoto.location._longitude},map:e})),r.push(new t.InfoWindow({content:W(a)}))}));new B.a(e,n,{imagePath:"".concat("/tripago","/images/m")});n.forEach((function(t,a){t.addListener("click",(function(){r[a].open(e,t)}))}))},n.state={fetching:!0,albums:[],mapCenter:H},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.get("/albums");case 2:a=t.sent,console.log(a.data),e.setState({fetching:!1,albums:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.fetching?Object(n.jsx)("h3",{className:"fetching-text",children:"Fetching Albums"}):Object(n.jsx)("div",{className:"p-4 travel-map__container",children:Object(n.jsx)("div",{className:"travel-map",children:Object(n.jsx)(Z.a,{bootstrapURLKeys:{key:"AIzaSyB0KyAyMCcrEaAZQIiT6y6NTPqI_-MBov4"},defaultCenter:this.state.mapCenter,defaultZoom:5,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.renderGoogleApi(a,n,e.state.albums)}})})})}}]),a}(r.Component),q=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){return Object(n.jsx)(_.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(U.a,{className:"h-100",children:[Object(n.jsx)(E.a,{xs:4,lg:3,children:Object(n.jsx)(G,{})}),Object(n.jsx)(E.a,{xs:8,lg:9,children:Object(n.jsx)(z,{})})]})})}}]),a}(r.Component),J=a(127),Q=a.p+"static/media/add-outline.019bb36e.svg",V=a.p+"static/media/testpic2.bc0cfe5e.png",X=a.p+"static/media/close-circle-outline.b3f38ee2.svg",Y=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),$=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onDeleteAlbum=function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("ondeleteAlbum",a),e.next=4,Y.delete("/album",{params:{album:a}});case 4:e.sent,n.setState((function(e){return{albums:e.albums.filter((function(e){return e.id!==a}))}}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={fetching:!0,albums:[]},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.get("/albums");case 2:a=t.sent,console.log(a.data),e.setState({fetching:!1,albums:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.fetching?Object(n.jsx)("h3",{className:"fetching-text",children:"Fetching Photos"}):Object(n.jsx)("div",{className:"p-4",children:Object(n.jsx)(_.a,{className:"albums-gallery",children:Object(n.jsxs)(U.a,{xs:1,sm:2,md:3,lg:4,children:[Object(n.jsx)(E.a,{className:"p-3",children:Object(n.jsxs)(J.a,{as:d.b,to:"/albumcreation",children:[Object(n.jsx)("div",{className:"card-img__wrapper",children:Object(n.jsx)(J.a.Img,{src:Q})}),Object(n.jsx)(J.a.Footer,{children:"Click to Add"})]})}),this.state.albums.map((function(t){return Object(n.jsx)(E.a,{className:"p-3",children:Object(n.jsxs)(J.a,{as:d.b,to:"albums/".concat(t.id),children:[Object(n.jsx)("div",{className:"card-img__wrapper",children:t.coverPhoto&&t.coverPhoto.url?Object(n.jsx)(J.a.Img,{src:t.coverPhoto.url}):Object(n.jsx)(J.a.Img,{src:V})}),Object(n.jsx)("img",{className:"cross",src:X,onClick:function(a){return e.onDeleteAlbum(a,t.id)}}),Object(n.jsx)(J.a.Footer,{children:t.id})]})},t.id)}))]})})})}}]),a}(r.Component),ee=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){return Object(n.jsx)(_.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(U.a,{className:"h-100",children:[Object(n.jsx)(E.a,{xs:4,lg:3,children:Object(n.jsx)(G,{})}),Object(n.jsx)(E.a,{xs:8,lg:9,children:Object(n.jsx)($,{})})]})})}}]),a}(r.Component),te=(a(49),O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0})),ae=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={description:""},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.get("album-description",{params:{album:e.props.id}});case 2:a=t.sent,console.log(a),a.data&&e.setState({description:a.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.props.id;return Object(n.jsx)("div",{className:"position-sticky pt-3",children:Object(n.jsxs)(b.a,{className:"flex-column align-items-start",children:[Object(n.jsx)(b.a.Item,{as:"h5",className:"mr-0",children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/albums/".concat(e,"/"),children:e.toUpperCase()})}),Object(n.jsx)(b.a.Item,{className:"mr-0",children:Object(n.jsx)(b.a.Link,{as:"p",className:"m-0 sidebar__description",children:this.state.description})}),Object(n.jsx)(b.a.Item,{className:"mr-0",children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/albums/".concat(e),children:"Home"})}),Object(n.jsx)(b.a.Item,{className:"mr-0",children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/albums/".concat(e,"/upload"),children:"Image Uploader"})}),Object(n.jsx)(b.a.Item,{className:"mr-0",children:Object(n.jsx)(b.a.Link,{as:d.b,to:"/albums/".concat(e,"/map"),children:"Travel Map"})})]})})}}]),a}(r.Component),ne=a(61),re=a(123),se=a(120),ce=a.p+"static/media/close-circle-outline.b3f38ee2.svg",oe=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0});function ie(e){if(!e.photo)return null;var t=e.photo,a=t.id,r=t.url;return Object(n.jsxs)(re.a,Object(ne.a)(Object(ne.a)({},e),{},{centered:!0,className:"preview",children:[Object(n.jsx)(re.a.Header,{closeButton:!0,children:Object(n.jsx)(re.a.Title,{className:"w-75",children:a})}),Object(n.jsx)(re.a.Body,{children:Object(n.jsx)(D.a,{src:r,className:"w-100"})}),Object(n.jsx)(re.a.Footer,{children:Object(n.jsx)(se.a,{variant:"primary",onClick:e.onHide,children:"Close"})})]}))}var le=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onDeletePhoto=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.delete("/photo",{params:{album:n.props.id,photo:t}});case 2:e.sent,n.setState((function(e){return{photos:e.photos.filter((function(e){return e.id!==t}))}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onClickImage=function(e){n.setState({showPreview:!0,previewPhoto:e})},n.onHidePreview=function(){n.setState({showPreview:!1})},n.state={fetching:!0,photos:[],showPreview:!1,previewPhoto:void 0},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.get("/album-photos",{params:{album:e.props.id}});case 2:a=t.sent,e.setState({fetching:!1,photos:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photos"}):Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(_.a,{className:"album-gallery",children:Object(n.jsx)(U.a,{xs:1,sm:2,md:3,lg:4,children:this.state.photos.map((function(t){return Object(n.jsx)(E.a,{className:"p-3",children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Img,{src:t.url,onClick:function(){e.onClickImage(t)}}),Object(n.jsx)("img",{className:"cross",src:ce,onClick:function(){return e.onDeletePhoto(t.id)}}),t.location?Object(n.jsx)(J.a.Footer,{as:d.b,to:{pathname:"/albums/".concat(e.props.id,"/map"),hash:"#".concat(t.id)},children:"SHOW ON MAP"}):Object(n.jsx)(J.a.Footer,{children:"NO LOCATION INFO"})]})},t.id)}))})}),Object(n.jsx)(ie,{show:this.state.showPreview,onHide:this.onHidePreview,photo:this.state.previewPhoto})]})}}]),a}(r.Component),ue=a(76),he=a.n(ue),de=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",headers:{"content-type":"multipart/form-data"},withCredentials:!0}),pe=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onDrop=function(e,t){n.setState((function(t){return{photos:t.photos.concat(e)}}))},n.onUpload=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("upload photos to backend"),(t=new FormData).append("album",n.props.id),n.state.photos.forEach((function(e,a){t.append("photos",e)})),e.next=6,de.post("/upload-photos",t);case 6:a=e.sent,console.log(a),n.setState((function(e){return{photos:[],key:e.key+1}}));case 9:case"end":return e.stop()}}),e)}))),n.state={photos:[],key:0},n}return Object(L.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(he.a,{className:"album-uploader",withPreview:!0,buttonText:"Choose photos",label:"Max file size = 5mb",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png"],buttonClassName:"album-uploader__button"},this.state.key),Object(n.jsx)(se.a,{onClick:function(){return e.onUpload()},children:"Upload"})]})}}]),a}(r.Component),je=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),be={lat:25.0174,lng:121.5405},me=function(e){return'\n  <div class="album-map__info-window">\n    <p>'.concat(e.id,"</p>\n    <img src=").concat(e.url,' alt="">\n  </div>')},fe=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).renderGoogleApi=function(e,t,a,n,r){var s=[],c=[],o=void 0;a.filter((function(e){return e.location})).forEach((function(a,i){r&&a.id===n.id&&(o=i),s.push(new t.Marker({position:{lat:a.location._latitude,lng:a.location._longitude},map:e})),c.push(new t.InfoWindow({content:me(a)}))}));new B.a(e,s,{imagePath:"".concat("/tripago","/images/m")});s.forEach((function(t,a){t.addListener("click",(function(){c[a].open(e,t)}))})),void 0!==o&&c[o].open(e,s[o])},n.state={fetching:!0,photos:[],centerPhoto:void 0,defaultZoom:10,openInfo:!1},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.hash.slice(1);(function(){var a=Object(u.a)(l.a.mark((function a(){var n,r,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,je.get("/album-photos",{params:{album:e.props.id}});case 2:if(n=a.sent,!t){a.next=8;break}r=n.data.find((function(e){return e.id===t})),e.setState({fetching:!1,photos:n.data,centerPhoto:r,defaultZoom:14,openInfo:!0}),a.next=12;break;case 8:return a.next=10,je.get("album-coverphoto",{params:{album:e.props.id}});case 10:(s=a.sent).data&&s.data.location?e.setState({fetching:!1,photos:n.data,centerPhoto:s.data}):e.setState({fetching:!1,photos:n.data});case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state,a=t.photos,r=t.centerPhoto,s=t.defaultZoom,c=t.openInfo;console.log("centerphoto",r);var o=r&&r.location?{lat:r.location._latitude,lng:r.location._longitude}:be;return this.state.fetching?Object(n.jsx)("h3",{children:"Fetching Photo Locations"}):Object(n.jsx)("div",{className:"album-map",children:Object(n.jsx)(Z.a,{bootstrapURLKeys:{key:"AIzaSyB0KyAyMCcrEaAZQIiT6y6NTPqI_-MBov4"},defaultCenter:o,defaultZoom:s,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,s=t.maps;return e.renderGoogleApi(n,s,a,r,c)}})})}}]),a}(r.Component),Oe=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){var e=this.props.id;return Object(n.jsxs)("div",{className:"h-100",children:[Object(n.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(n.jsxs)(p.d,{children:[Object(n.jsxs)(p.b,{exact:!0,path:"/albums/".concat(e,"/"),children:["Album - ",e]}),Object(n.jsx)(p.b,{path:"/albums/".concat(e,"/upload"),children:"Image Uploader"}),Object(n.jsx)(p.b,{path:"/albums/".concat(e,"/map"),children:"Travel Map"})]})}),Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/albums/".concat(e),children:Object(n.jsx)(le,{id:e})}),Object(n.jsx)(p.b,{path:"/albums/".concat(e,"/upload"),children:Object(n.jsx)(pe,{id:e})}),Object(n.jsx)(p.b,{path:"/albums/".concat(e,"/map"),render:function(t){var a=t.location;return Object(n.jsx)(fe,{id:e,location:a})}})]})]})}}]),a}(r.Component);var xe=function(){var e=Object(p.h)().id;return Object(n.jsx)(_.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(U.a,{className:"h-100",children:[Object(n.jsx)(E.a,{xs:4,sm:3,lg:2,children:Object(n.jsx)(ae,{id:e})}),Object(n.jsx)(E.a,{xs:8,sm:9,lg:10,children:Object(n.jsx)(Oe,{id:e})})]})})},ge=a(32),ve=a(121),we=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),ye=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.id,r=t.value;n.setState(Object(ge.a)({},a,r))},n.onSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.albumName,s=a.albumDescription,e.prev=2,e.next=5,we.post("/album-create",{albumName:r,albumDescription:s});case 5:e.sent,n.setState({submit:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("album already exists"),n.setState({albumName:"",albumDescription:"",showAlert:!0});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.onCloseAlert=function(){n.setState({showAlert:!1})},n.state={submit:!1,albumName:"",albumDescription:"",showAlert:!1},n}return Object(L.a)(a,[{key:"render",value:function(){return this.state.submit?Object(n.jsx)(p.a,{to:"/albums/".concat(this.state.albumName)}):Object(n.jsxs)("div",{className:"album-creation",children:[Object(n.jsx)(ve.a,{variant:"danger",show:this.state.showAlert,onClose:this.onCloseAlert,dismissible:!0,children:"Album already exists."}),Object(n.jsxs)(A.a,{validated:!0,onSubmit:this.onSubmit,children:[Object(n.jsxs)(A.a.Group,{controlId:"albumName",children:[Object(n.jsx)(A.a.Label,{children:"Album Name"}),Object(n.jsx)(A.a.Control,{type:"text",value:this.state.albumName,placeholder:"Album name",onChange:this.onChange,required:!0}),Object(n.jsx)(A.a.Control.Feedback,{type:"invalid",children:"Please input the album name"})]}),Object(n.jsxs)(A.a.Group,{controlId:"albumDescription",children:[Object(n.jsx)(A.a.Label,{children:"Description"}),Object(n.jsx)(A.a.Control,{type:"text",value:this.state.albumDescription,placeholder:"Description of this album",onChange:this.onChange})]}),Object(n.jsx)(se.a,{variant:"primary",type:"submit",children:"Submit"})]})]})}}]),a}(r.Component),Ce=a(38),ke=(a(71),function(e){var t=Object(r.useContext)(m),a=t.loginStatus,s=t.setLoginStatus,c=function(){var t=Object(u.a)(l.a.mark((function t(n){var r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v(e);case 3:r=t.sent,c=r.status,o=r.message,console.log("Received login status: ",c,o),c.isLogin?s(c):(s(c),e.setAlert(o),console.log(o)),console.log("Is login after clicking: ",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)(se.a,{variant:"primary",type:"submit",onClick:c,children:"Login"}),function(){if(a.isLogin)return console.log("redirect rendered"),Object(n.jsx)(p.a,{to:"/home"})}()]})}),Ne=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(ge.a)({},a,r))},n.setAlert=function(e){n.setState({showAlert:!0,alertMsg:e,email:"",password:""})},n.onCloseAlert=function(){n.setState({showAlert:!1})},n.state={email:"",password:"",showAlert:!1,alertMsg:"Login failed."},n.handleChange=n.handleChange.bind(Object(Ce.a)(n)),n}return Object(L.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(ve.a,{variant:"danger",show:this.state.showAlert,onClose:this.onCloseAlert,dismissible:!0,children:this.state.alertMsg}),Object(n.jsxs)(A.a,{children:[Object(n.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(A.a.Label,{children:"Email Address"}),Object(n.jsx)(A.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(n.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(A.a.Label,{children:"Password"}),Object(n.jsx)(A.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(n.jsx)(ke,{email:this.state.email,password:this.state.password,setAlert:this.setAlert})]})]})}}]),a}(r.Component),Le=function(e){var t=Object(r.useContext)(m),a=t.loginStatus,s=t.setLoginStatus,c=function(){var t=Object(u.a)(l.a.mark((function t(n){var r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!e.unmatchedPwd){t.next=5;break}e.setAlert("Unmatched Password"),t.next=13;break;case 5:return t.next=7,w(e);case 7:r=t.sent,c=r.status,o=r.message,console.log("Received registration response: ",c,o),c.isLogin?s(c):(s({isLogin:!1,user:""}),e.setAlert(o),console.log(o)),console.log("Is login after clicking: ",a.isLogin);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)(se.a,{variant:"primary",type:"submit",onClick:c,children:"Register"}),function(){if(a.isLogin)return console.log("redirect rendered"),Object(n.jsx)(p.a,{to:"/home"})}()]})},Pe=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(ge.a)({},a,r))},n.unmatchedPwd=function(){var e=n.state;return e.password!==e.passwordConfirm},n.setAlert=function(e){n.setState({showAlert:!0,alertMsg:e})},n.onCloseAlert=function(){n.setState({showAlert:!1})},n.state={email:"",name:"",password:"",passwordConfirm:"",redirect:!1,showAlert:!1,alertMsg:"Registration Failed"},n.handleChange=n.handleChange.bind(Object(Ce.a)(n)),n}return Object(L.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"registration",children:[Object(n.jsx)(ve.a,{variant:"danger",show:this.state.showAlert,onClose:this.onCloseAlert,dismissible:!0,children:this.state.alertMsg}),Object(n.jsxs)(A.a,{children:[Object(n.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(A.a.Label,{children:"Email Address"}),Object(n.jsx)(A.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(n.jsxs)(A.a.Group,{controlId:"username",children:[Object(n.jsx)(A.a.Label,{children:"User name"}),Object(n.jsx)(A.a.Control,{type:"text",placeholder:"Enter username",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(n.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(A.a.Label,{children:"Password"}),Object(n.jsx)(A.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(n.jsxs)(A.a.Group,{controlId:"formBasicPasswordConfirm",children:[Object(n.jsx)(A.a.Label,{children:"Confirm Password"}),Object(n.jsx)(A.a.Control,{type:"password",placeholder:"Password",name:"passwordConfirm",value:this.state.passwordConfirm,onChange:this.handleChange,isInvalid:this.unmatchedPwd()}),Object(n.jsx)(A.a.Control.Feedback,{type:"invalid",children:"Unmatched Password"})]}),Object(n.jsx)(Le,{email:this.state.email,name:this.state.name,password:this.state.password,unmatchedPwd:this.unmatchedPwd(),setAlert:this.setAlert})]})]})}}]),a}(r.Component),Se=(a(50),a.p+"static/media/search-outline.b350c0d8.svg"),Ae=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onInputRegion=function(e){n.setState({region:e.target.value})},n.onSearch=function(){n.setState({region:""})},n.onSelect=function(e){n.setState({region:e.target.id})},n.state={region:"",options:["Taiwan","Japan","Taipei City","Taichung City","Tokyo"]},n}return Object(L.a)(a,[{key:"render",value:function(){var e=this,t=this.state.region;return Object(n.jsxs)("div",{className:"platform-sidebar position-sticky",children:[Object(n.jsx)("p",{className:"pt-3 pb-2 mb-3 border-bottom",children:"Filter"}),Object(n.jsxs)(A.a,{children:[Object(n.jsxs)(A.a.Group,{controlId:"region",children:[Object(n.jsx)(A.a.Label,{children:"Region Search"}),Object(n.jsxs)(I.a,{size:"sm",children:[Object(n.jsx)(A.a.Control,{type:"text",value:t,placeholder:"Region",onChange:this.onInputRegion}),Object(n.jsx)(I.a.Append,{as:d.b,to:{pathname:"/platform",search:"?region=".concat(t)},onClick:this.onSearch,children:Object(n.jsx)(D.a,{src:Se})})]})]}),this.state.options.map((function(a){return Object(n.jsx)(A.a.Check,{custom:!0,type:"radio",name:"region-radio",id:a,label:a,checked:t===a,onChange:e.onSelect},a)}))]})]})}}]),a}(r.Component),Ie=a(122),De=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),Me={lat:25.0174,lng:121.5405},Re=function(e){return'\n  <div class="platform-card-map__info-window">\n    <p>'.concat(e.id,"</p>\n    <img src=").concat(e.url,' alt="">\n  </div>')},_e=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).renderGoogleApi=function(e,t,a,n){var r=[],s=[];a.filter((function(e){return e.location})).forEach((function(a){r.push(new t.Marker({position:{lat:a.location._latitude,lng:a.location._longitude},map:e})),s.push(new t.InfoWindow({content:Re(a)}))}));new B.a(e,r,{imagePath:"".concat("/tripago","/images/m")});r.forEach((function(t,a){t.addListener("click",(function(){s[a].open(e,t)}))}))},n.state={fetching:!0,photos:[],centerPhoto:void 0,defaultZoom:10},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.user,n=t.album;console.log("cardmap mount"),function(){var t=Object(u.a)(l.a.mark((function t(){var r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,De.get("/platform-album-photos",{params:{user:a,album:n}});case 2:return r=t.sent,t.next=5,De.get("platform-album-coverphoto",{params:{user:a,album:n}});case 5:s=t.sent,console.log(r.data),s.data&&s.data.location?e.setState({fetching:!1,photos:r.data,centerPhoto:s.data}):e.setState({fetching:!1,photos:r.data});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){var e=this;if(this.state.fetching)return Object(n.jsx)("h3",{children:"Fetching Photo Locations"});var t=this.state,a=t.photos,r=t.centerPhoto,s=t.defaultZoom,c=r&&r.location?{lat:r.location._latitude,lng:r.location._longitude}:Me;return Object(n.jsx)("div",{className:"platform-card-map",children:Object(n.jsx)(Z.a,{bootstrapURLKeys:{key:"AIzaSyB0KyAyMCcrEaAZQIiT6y6NTPqI_-MBov4"},defaultCenter:c,defaultZoom:s,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,s=t.maps;return e.renderGoogleApi(n,s,a,r)}})})}}]),a}(r.Component),Ue=a.p+"static/media/testpic.f038f9e1.png",Ee=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0}),Te=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).toggleExpand=function(){n.setState((function(e){return{expand:!e.expand}}))},n.state={expand:!1,address:[],profilePic:Ue,description:"No Description"},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.user,n=t.album,r=function(){var t=Object(u.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee.get("/platform-album-description",{params:{user:a,album:n}});case 2:(r=t.sent).data&&e.setState({description:r.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(u.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee.get("/platform-album-address",{params:{user:a,album:n}});case 2:(r=t.sent).data&&e.setState({address:r.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r(),s(),c()}},{key:"render",value:function(){return Object(n.jsxs)(J.a,{className:"platform-card",children:[Object(n.jsxs)(J.a.Header,{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsx)("p",{className:"region",children:this.state.address.length?this.state.address.join(" - "):"no location"}),Object(n.jsx)(se.a,{variant:"info",size:"sm",onClick:this.toggleExpand,children:this.state.expand?"Hide":"Expand"})]}),Object(n.jsx)(J.a.Body,{children:Object(n.jsxs)(Ie.a,{children:[Object(n.jsx)(D.a,{src:this.state.profilePic,rounded:!0,className:"profilePic"}),Object(n.jsxs)(Ie.a.Body,{children:[Object(n.jsx)("h5",{children:this.props.album}),this.state.expand?Object(n.jsx)(_e,{user:this.props.user,album:this.props.album}):Object(n.jsx)("p",{className:"description",children:this.state.description})]})]})})]})}}]),a}(r.Component),Fe=O.a.create({baseURL:"https://our-tripago.an.r.appspot.com",withCredentials:!0});var Ge=function(e){var t=Object(r.useState)([]),a=Object(h.a)(t,2),s=a[0],c=a[1],o=new URLSearchParams(Object(p.g)().search).get("region");return Object(r.useEffect)((function(){console.log("useeffect",o),function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe.get("/platform",{params:{region:o}});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o]),Object(n.jsxs)("div",{className:"h-100",children:[Object(n.jsxs)("p",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:["Region - ",o||"All Region"]}),Object(n.jsx)("div",{className:"platform",children:s.length?s.map((function(e){return Object(n.jsx)(Te,{user:e.user,album:e.albumName},"".concat(e.user,"-").concat(e.albumName))})):Object(n.jsx)("h3",{className:"no-result",children:" No Result"})})]})},Be=function(e){Object(P.a)(a,e);var t=Object(S.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){return Object(n.jsx)(_.a,{fluid:!0,className:"h-100",children:Object(n.jsxs)(U.a,{className:"h-100",children:[Object(n.jsx)(E.a,{xs:2,children:Object(n.jsx)(Ae,{})}),Object(n.jsx)(E.a,{xs:8,children:Object(n.jsx)(Ge,{})}),Object(n.jsx)(E.a,{xs:2})]})})}}]),a}(r.Component),Ze=function(){var e=Object(r.useContext)(m).loginStatus;return console.log("@Tripago",e),e.isLogin?(console.log("Tripago rendered, logged in"),Object(n.jsxs)(d.a,{basename:"/tripago",children:[Object(n.jsx)(k,{}),Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",children:Object(n.jsx)(p.a,{to:"/home"})}),Object(n.jsx)(p.b,{path:"/home",children:Object(n.jsx)(R,{})}),Object(n.jsx)(p.b,{path:"/map",children:Object(n.jsx)(q,{})}),Object(n.jsx)(p.b,{exact:!0,path:"/albums",children:Object(n.jsx)(ee,{})}),Object(n.jsx)(p.b,{path:"/albums/:id",children:Object(n.jsx)(xe,{})}),Object(n.jsx)(p.b,{path:"/albumcreation",children:Object(n.jsx)(ye,{})}),Object(n.jsx)(p.b,{path:"/login",children:Object(n.jsx)(Ne,{})}),Object(n.jsx)(p.b,{path:"/register",children:Object(n.jsx)(Pe,{})}),Object(n.jsx)(p.b,{path:"/platform",children:Object(n.jsx)(Be,{})})]})]})):(console.log("Tripago rendered, not logged in"),Object(n.jsxs)(d.a,{basename:"/tripago",children:[Object(n.jsx)(k,{}),Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",children:Object(n.jsx)(p.a,{to:"/home"})}),Object(n.jsx)(p.b,{path:"/home",children:Object(n.jsx)(R,{})}),Object(n.jsx)(p.b,{path:"/platform",children:Object(n.jsx)(Be,{})}),Object(n.jsx)(p.b,{path:"/register",children:Object(n.jsx)(Pe,{})}),Object(n.jsx)(p.b,{path:"/login",children:Object(n.jsx)(Ne,{})})]})]}))},He=function(){var e=Object(r.useState)({isLogin:!1,userID:void 0}),t=Object(h.a)(e,2),a=t[0],s=t[1],c={loginStatus:a,setLoginStatus:s};return Object(r.useEffect)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,console.log("newstatus@App",t.data),s(t.data);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m.Provider,{value:c,children:Object(n.jsx)(Ze,{})})})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(He,{})}),document.getElementById("root")),Ke()},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.ce8345b9.chunk.js.map