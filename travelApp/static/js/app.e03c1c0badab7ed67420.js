webpackJsonp([0],{"76cu":function(t,e){},"7dKL":function(t,e){},"9n10":function(t,e){},FXSM:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("7dKL")},null,null).exports,r=i("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n      input city or sight\n    ")]),this._v(" "),e("div",{staticClass:"header-right"},[this._v("\n      City\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])}]};var c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:t.id}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var l={name:"HomeIcons",data:function(){return{iconList:[{id:"001",class:"fa  fa-github-alt fa-4x icon-img-content",desc:"iconText"},{id:"002",class:"fa  fa-yc-square fa-4x icon-img-content",desc:"iconText"},{id:"003",class:"fa  fa-github-alt fa-4x icon-img-content",desc:"iconText"},{id:"004",class:"fa  fa-yc-square fa-4x icon-img-content",desc:"iconText"},{id:"005",class:"fa  fa-github-alt fa-4x icon-img-content",desc:"iconText"},{id:"006",class:"fa  fa-yc-square fa-4x icon-img-content",desc:"iconText"},{id:"007",class:"fa  fa-github-alt fa-4x icon-img-content",desc:"iconText"},{id:"008",class:"fa  fa-yc-square fa-4x icon-img-content",desc:"iconText"},{id:"009",class:"fa  fa-gratipay fa-4x icon-img-content",desc:"iconText"},{id:"010",class:"fa  fa-gratipay fa-4x icon-img-content",desc:"iconText"},{id:"011",class:"fa  fa-gratipay fa-4x icon-img-content",desc:"iconText"},{id:"012",class:"fa  fa-gratipay fa-4x icon-img-content",desc:"iconText"}]}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("i",{class:e.class})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v("Text")])])}),0)}),1)],1)},staticRenderFns:[]};var m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("Recommend")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("Details")])])])}),0)])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("Vacation")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var p={name:"Home",components:{HomeHeader:i("VU/8")({name:"HomeHeader",data:function(){return{}}},o,!1,function(t){i("76cu")},"data-v-70c63169",null).exports,HomeSwiper:i("VU/8")({name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0},swiperList:[{id:"001",imgUrl:"@/../static/img/5.jpg"},{id:"002 ",imgUrl:"@/../static/img/11.jpg"},{id:"004 ",imgUrl:"@/../static/img/6.jpg"},{id:"005 ",imgUrl:"@/../static/img/4.jpg"}]}}},c,!1,function(t){i("yprJ")},"data-v-5c0e820c",null).exports,HomeIcons:i("VU/8")(l,d,!1,function(t){i("enCZ")},"data-v-71e264f2",null).exports,HomeRecommend:i("VU/8")({name:"HomeRecommend",data:function(){return{recommendList:[{id:"001",imgUrl:"@/../static/img/recommend-6.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"002",imgUrl:"@/../static/img/recommend-9.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"003",imgUrl:"@/../static/img/recommend-14.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"004",imgUrl:"@/../static/img/recommend-12.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"005",imgUrl:"@/../static/img/recommend-10.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."}]}}},m,!1,function(t){i("ld1q")},"data-v-44fa85d5",null).exports,HomeVacation:i("VU/8")({name:"HomeVacation",data:function(){return{recommendList:[{id:"001",imgUrl:"@/../static/img/recommend-5.jpg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"002",imgUrl:"@/../static/img/recommend-3.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"003",imgUrl:"@/../static/img/recommend-4.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"004",imgUrl:"@/../static/img/recommend-8.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"005",imgUrl:"@/../static/img/recommend-7.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"006",imgUrl:"@/../static/img/recommend-11.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."},{id:"007",imgUrl:"@/../static/img/recommend-13.jpeg",title:"Lorem",desc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit.Dolore,eum."}]}}},u,!1,function(t){i("y+Zz")},"data-v-4525ae76",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("home-swiper"),this._v(" "),e("home-icons"),this._v(" "),e("home-recommend"),this._v(" "),e("home-vacation")],1)},staticRenderFns:[]};var g=i("VU/8")(p,f,!1,function(t){i("FXSM")},"data-v-39a3b1cb",null).exports;s.a.use(r.a);var v=new r.a({routes:[{path:"/",name:"Home",component:g}],mode:"history"}),h=i("v5o6"),_=i.n(h),w=i("F3EI"),C=i.n(w);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,_.a.attach(document.body),s.a.use(C.a),new s.a({el:"#app",router:v,components:{App:a},template:"<App/>"})},TzC8:function(t,e){},enCZ:function(t,e){},ld1q:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},"y+Zz":function(t,e){},yprJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e03c1c0badab7ed67420.js.map