(function(t){function e(e){for(var a,s,l=e[0],r=e[1],c=e[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hotels-test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0265":function(t,e,n){"use strict";n("e973")},"0334":function(t,e,n){},"40f7":function(t,e,n){"use strict";n("0334")},"4eac":function(t,e,n){},5872:function(t,e,n){"use strict";n("8abe")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6cda":function(t,e,n){"use strict";n("e390")},"7c91":function(t,e,n){"use strict";n("c0eb")},"85df":function(t,e,n){},"8abe":function(t,e,n){},9038:function(t,e,n){},"9c0c":function(t,e,n){},a61a:function(t,e,n){},af47:function(t,e,n){"use strict";n("85df")},be9d:function(t,e,n){"use strict";n("a61a")},c0eb:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-wrapper"},[t.isOpenModal?n("Modal",{attrs:{"open-target":t.modalTarget},on:{close:t.closeModal}}):t._e(),n("div",{staticClass:"main-container"},[n("router-view")],1)],1)},i=[],s=n("bc3a"),l=n.n(s),r=new a["a"]({}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal__backdrop",on:{click:t.closeModal}},[n("div",{staticClass:"modal__content modal__content--registration"},[n("div",{staticClass:"modal__close",on:{click:t.closeModalIcon}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"22",viewBox:"0 0 12 12",fill:"none"}},[n("path",{attrs:{d:"M7.32166 5.99941L11.8083 10.4862C11.9317 10.6098 11.9998 10.7745 12\n        10.9502C12 11.126 11.9319 11.291 11.8083 11.4143L11.4151 11.8074C11.2915\n        11.9312 11.1267 11.999 10.9508 11.999C10.7752 11.999 10.6104 11.9312\n        10.4868 11.8074L6.0002 7.32088L1.51337 11.8074C1.38995 11.9312 1.22507\n        11.999 1.04927 11.999C0.873659 11.999 0.70878 11.9312 0.585366 11.8074L0.192\n        11.4143C-0.064 11.1583 -0.064 10.7419 0.192 10.4862L4.67873 5.99941L0.192\n        1.51278C0.0684878 1.38907 0.000487805 1.22429 0.000487805 1.04858C0.000487805\n        0.872873 0.0684878 0.708094 0.192 0.584484L0.585268 0.19141C0.708683 0.0677032\n        0.873658 -0.000199318 1.04917 -0.000199318C1.22498 -0.000199318 1.38985 0.0677032\n        1.51327 0.19141L6.0001 4.67805L10.4867 0.19141C10.6103 0.0677032 10.7751 -0.000199318\n        10.9507 -0.000199318H10.9509C11.1266 -0.000199318 11.2914 0.0677032 11.415 0.19141L11.8082\n        0.584484C11.9316 0.707996 11.9997 0.872873 11.9997 1.04858C11.9997 1.22429 11.9316 1.38907\n        11.8082 1.51268L7.32166 5.99941Z",fill:"white"}})])]),"SuccesModal"===t.openTarget?n("SuccesModal",{on:{cancelled:t.closeModalIcon}}):t._e()],1)])},u=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal__inner"},[n("h2",{staticClass:"modal__title"},[t._v("Спасибо за заявку!")]),n("p",{staticClass:"modal__text"},[t._v(" Через несколько минут с Вами свяжется наш менеджер для подтверждения бронирования. ")]),n("div",{staticClass:"modal__info"},[n("button",{staticClass:"btn btn-primary modal__info-btn",on:{click:function(e){return e.preventDefault(),t.cancelled.apply(null,arguments)}}},[t._v("Закрыть")])])])},d=[],m=a["a"].extend({name:"Modal",props:{openTarget:String},data:function(){return{}},computed:{},methods:{cancelled:function(){this.$emit("cancelled")}}}),f=m,h=(n("0265"),n("2877")),g=Object(h["a"])(f,p,d,!1,null,"54ab5bd8",null),_=g.exports,v=a["a"].extend({name:"Modal",components:{SuccesModal:_},props:{openTarget:String},data:function(){return{}},computed:{},methods:{closeModal:function(t){var e=document.querySelector(".modal__backdrop");t.target===e&&(console.log(t.target),this.$emit("close"))},closeModalIcon:function(){this.$emit("close")}}}),b=v,C=(n("be9d"),Object(h["a"])(b,c,u,!1,null,"2d8e14c2",null)),w=C.exports,y=a["a"].extend({name:"App",components:{Modal:w},data:function(){return{hotels:null,hotelsLoading:!1,page:1,itemsPerPage:10,visiblePagesCount:5,itemsCount:0,isOpenModal:!1,modalTarget:""}},computed:{},methods:{getHotelsCount:function(){var t=this;l.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t.itemsCount=e.data.length})).catch((function(t){return console.log(t)}))},loadHotels:function(){var t=this;this.hotelsLoading=!0,l.a.get("https://jsonplaceholder.typicode.com/posts?_page=".concat(this.page,"&_limit=10")).then((function(e){t.hotels=e.data})).then((function(){t.hotelsLoading=!1})).catch((function(t){return console.log(t)}))},paginatePage:function(t){this.page=t},closeModal:function(){this.isOpenModal=!1,document.querySelector("body").style.overflow=this.isOpenModal?"hidden":"auto"},openModal:function(t){this.isOpenModal=!0,this.modalTarget=t,document.querySelector("body").style.overflow=this.isOpenModal?"hidden":"auto"}},watch:{page:function(){this.loadHotels()}},created:function(){var t=this;this.getHotelsCount(),this.loadHotels(),r.$on("showSuccesModal",(function(e){t.openModal(e)}))}}),P=y,k=(n("5c0b"),Object(h["a"])(P,o,i,!1,null,null,null)),x=k.exports,M=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Сервис бронирования отелей")]),n("HoteltList",{attrs:{hotels:t.hotels}}),n("BasePagination",{attrs:{"per-page":t.itemsPerPage,count:t.itemsCount,"visible-pages-count":t.visiblePagesCount},on:{paginate:t.paginatePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},O=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"catalog__list"},t._l(t.hotels,(function(t){return n("HotelItem",{key:t.title,attrs:{hotel:t}})})),1)},H=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"catalog__item"},[n("router-link",{attrs:{to:{name:"hotel",params:{id:t.hotel.id}}}},[n("div",{staticClass:"catalog__img"},[n("img",{attrs:{src:"img/hotel.jpg",alt:"отель"}})]),n("h3",{staticClass:"catalog__title"},[t._v(" "+t._s(t.hotel.title)+" ")]),n("p",{staticClass:"catalog__text"},[t._v(" "+t._s(t.hotel.body)+" ")])])],1)},S=[],E=a["a"].extend({name:"HoteltList",props:{hotel:Object}}),T=E,I=(n("6cda"),Object(h["a"])(T,L,S,!1,null,"3cd20536",null)),B=I.exports,D=a["a"].extend({name:"HoteltList",components:{HotelItem:B},props:{hotels:Array}}),N=D,q=(n("40f7"),Object(h["a"])(N,$,H,!1,null,"ad1f480a",null)),A=q.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>0?n("ul",{staticClass:"catalog__pagination pagination"},[n("li",{staticClass:"pagination__item"},[n("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{href:"#","aria-label":"Предыдущая страница"},on:{click:function(e){return e.preventDefault(),t.paginate(t.page>1?t.page-1:t.page)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"arcs"}},[n("path",{attrs:{d:"M15 18l-6-6 6-6"}})])])]),t._l(t.paginationTriggers,(function(e,a){return n("li",{key:a,staticClass:"pagination__item"},["..."===e?[n("div",{staticClass:"pagination__link--dotted"},[t._v(" "+t._s(e)+" ")])]:n("a",{staticClass:"pagination__link",class:{"pagination__link--current":e===t.page},attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.paginate(e)}}},[t._v(" "+t._s(e)+" ")])],2)})),n("li",{staticClass:"pagination__item"},[n("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.paginate(t.page<t.pages?t.page+1:t.page)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"arcs"}},[n("path",{attrs:{d:"M9 18l6-6-6-6"}})])])])],2):t._e()},J=[],U=(n("a9e3"),n("cb29"),n("d81d"),a["a"].extend({name:"BasePagination",model:{prop:"page",event:"paginate"},props:{page:Number,perPage:Number,count:Number,visiblePagesCount:Number},data:function(){return{currentPage:1}},computed:{pages:function(){return Math.ceil(this.count/this.perPage)},paginationTriggers:function(){var t=this.pages,e=Math.round((this.visiblePagesCount-1)/2),n=Array(this.visiblePagesCount-1).fill(0),a=[];if(this.firstPage(),t<=this.visiblePagesCount){for(var o=1;o<t+1;o+=1)a.push(o);return a}return this.currentPage===t-(e+1)?(n[0]=this.currentPage-e,a=n.map((function(t,e){return n[0]+e})),a.unshift(1,"..."),a.push("...",t),a):this.currentPage<=e+1?(n[0]=1,a=n.map((function(t,e){return n[0]+e})),a.push("...",t),a):this.currentPage>=t-e-1?(a=n.map((function(e,n){return t-n})),a.reverse().unshift(1,"..."),a):(n[0]=this.currentPage-e+1,a=n.map((function(t,e){return n[0]+e})),a.unshift(1,"..."),a.push("...",t),a)}},methods:{paginate:function(t){this.$emit("paginate",+t),this.currentPage=+t},firstPage:function(){1===this.page&&(this.currentPage=1)}}})),Z=U,z=(n("af47"),Object(h["a"])(Z,F,J,!1,null,"71eb7eb5",null)),G=z.exports,K=a["a"].extend({name:"App",components:{HoteltList:A,BasePagination:G},data:function(){return{hotels:null,hotelsLoading:!1,page:1,itemsPerPage:10,visiblePagesCount:5,itemsCount:0}},computed:{},methods:{getHotelsCount:function(){var t=this;l.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t.itemsCount=e.data.length})).catch((function(t){return console.log(t)}))},loadHotels:function(){var t=this;this.hotelsLoading=!0,l.a.get("https://jsonplaceholder.typicode.com/posts?_page=".concat(this.page,"&_limit=10")).then((function(e){t.hotels=e.data})).then((function(){t.hotelsLoading=!1})).catch((function(t){return console.log(t)}))},paginatePage:function(t){this.page=t}},watch:{page:function(){this.loadHotels()}},created:function(){this.getHotelsCount(),this.loadHotels()}}),Q=K,R=(n("5872"),Object(h["a"])(Q,j,O,!1,null,null,null)),V=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"hotel__block"},[n("router-link",{staticClass:"back-link",attrs:{to:{name:"main"}}},[t._v(" Назад ")]),n("a",{staticClass:"back"}),n("h1",{staticClass:"hotel__title"},[t._v(t._s(t.hotel.title))]),t._m(0),n("p",{staticClass:"hotel__text"},[t._v(t._s(t.hotel.body))]),n("HotelBooking",{attrs:{"hotel-id":t.hotelId}})],1)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotel__img"},[n("img",{attrs:{src:"img/hotel.jpg",alt:"отель"}})])}],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotel__form"},[n("p",{staticClass:"hotel__form-title"},[t._v("Оставьте заявку на бронирование отеля")]),n("form",{staticClass:"form__booking",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("div",{staticClass:"form__item"},[n("label",{staticClass:"form__label"},[n("span",{staticClass:"form__label-title"},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form__input input",attrs:{type:"email",placeholder:"Введите ваш email",name:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"form__error"})])]),n("div",{staticClass:"form__item"},[n("label",{staticClass:"form__label"},[n("span",{staticClass:"form__label-title"},[t._v("Имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form__input input",attrs:{type:"text",placeholder:"Введите ваше имя",name:"name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),n("span",{staticClass:"form__error"})])]),n("div",{staticClass:"form__item"},[n("label",{staticClass:"form__label"},[n("span",{staticClass:"form__label-title"},[t._v("Номер телефона")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.tel,expression:"form.tel",modifiers:{trim:!0}}],staticClass:"form__input input",attrs:{type:"number",placeholder:"Введите номер телефона",name:"tel",required:""},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"form__error"})])]),n("input",{attrs:{type:"hidden",name:"hotel_id"},domProps:{value:t.hotelId}}),n("button",{staticClass:"btn btn-primary form__btn--submit",attrs:{type:"submit"}},[t._v("Забронировать отель")])])])},tt=[],et=(n("b0c0"),a["a"].extend({name:"HotelBooking",props:{hotelId:Number},data:function(){return{form:{email:"",name:"",tel:""}}},methods:{onSubmit:function(t){t.target;""!==this.form.name&&""!==this.form.email&&""!==this.form.tel&&r.$emit("showSuccesModal","SuccesModal")}}})),nt=et,at=(n("7c91"),Object(h["a"])(nt,Y,tt,!1,null,null,null)),ot=at.exports,it=a["a"].extend({name:"HotelPage",components:{HotelBooking:ot},data:function(){return{hotelData:null}},computed:{hotelId:function(){return+this.$route.params.id},hotel:function(){return this.hotelData?this.hotelData:[]}},methods:{loadHotel:function(){var t=this;l.a.get("https://jsonplaceholder.typicode.com/posts/".concat(this.hotelId)).then((function(e){t.hotelData=e.data})).catch((function(t){return console.log(t)}))}},created:function(){this.loadHotel()}}),st=it,lt=(n("cf0d"),Object(h["a"])(st,W,X,!1,null,null,null)),rt=lt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Страница не найдена")])},ut=[],pt=a["a"].extend({name:"NotFoundPage"}),dt=pt,mt=(n("d525"),Object(h["a"])(dt,ct,ut,!1,null,null,null)),ft=mt.exports;a["a"].use(M["a"]);var ht=[{name:"main",component:V,path:"/"},{name:"hotel",component:rt,path:"/hotel/:id"},{name:"notFound",component:ft,path:"*"}],gt=new M["a"]({routes:ht}),_t=gt,vt=n("2f62");a["a"].use(vt["a"]);var bt=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:_t,store:bt,render:function(t){return t(x)}}).$mount("#app")},cf0d:function(t,e,n){"use strict";n("9038")},d525:function(t,e,n){"use strict";n("4eac")},e390:function(t,e,n){},e973:function(t,e,n){}});
//# sourceMappingURL=app.ab4cfee7.js.map