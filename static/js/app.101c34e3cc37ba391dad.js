webpackJsonp([1],{"18gx":function(t,e){},"7dKL":function(t,e){},"8SCv":function(t,e){},"9n10":function(t,e){},Fc68:function(t,e){},GVOJ:function(t,e){},M6Sr:function(t,e){},MI0E:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("7dKL")},null,null).exports,r=i("/ocq"),o={name:"HomeHeader",data:function(){return{}},props:{city:String}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n        "+t._s(t.city)+"\n        "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n      input city or sight\n    ")])}]};var l=i("VU/8")(o,c,!1,function(t){i("GVOJ")},"data-v-58d0a866",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:t.id}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(u,d,!1,function(t){i("18gx")},"data-v-0481fc9c",null).exports,h={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("i",{class:e.class})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v("Text")])])}),0)}),1)],1)},staticRenderFns:[]};var v=i("VU/8")(h,f,!1,function(t){i("oqKr")},"data-v-377c3c92",null).exports,m={name:"HomeRecommend",props:{list:Array}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("Recommend")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("Details")])])])}),0)])},staticRenderFns:[]};var C=i("VU/8")(m,_,!1,function(t){i("P9Y2")},"data-v-3d6f84ee",null).exports,w={name:"HomeVacation",props:{list:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("Vacation")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var b=i("VU/8")(w,y,!1,function(t){i("8SCv")},"data-v-e5a9a2d4",null).exports,g=i("mtWM"),$=i.n(g),x={name:"Home",components:{HomeHeader:l,HomeSwiper:p,HomeIcons:v,HomeRecommend:C,HomeVacation:b},data:function(){return{city:"",swiperList:[],iconList:[],recommendList:[],vacationList:[]}},methods:{getHomeInfo:function(){$.a.get("/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.city=e.city,this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.vacationList=e.vacationList}}},mounted:function(){this.getHomeInfo()}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-vacation",{attrs:{list:t.vacationList}})],1)},staticRenderFns:[]};var S=i("VU/8")(x,k,!1,function(t){i("Fc68")},"data-v-fd0f3d78",null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n    城市选择\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var E=i("VU/8")({name:"CityHeader",data:function(){return{}}},L,!1,function(t){i("llZ4")},"data-v-7193f73d",null).exports,T=i("GQaK"),H={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new T.a(this.$refs.search)}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type City"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{staticClass:"search-item border-bottom",attrs:{ket:e.id}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配项")])],2)])])},staticRenderFns:[]};var I=i("VU/8")(H,F,!1,function(t){i("fFP0")},"data-v-f4239226",null).exports,V={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},mounted:function(){this.scroll=new T.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[t._m(0),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("Hot City")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom"},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"area "},[e("div",{staticClass:"title border-topbottom"},[this._v("Current City")]),this._v(" "),e("div",{staticClass:"button-list"},[e("div",{staticClass:"button-wrapper"},[e("div",{staticClass:"button"},[this._v("成都")])])])])}]};var U=i("VU/8")(V,R,!1,function(t){i("fBSs")},"data-v-52d1c3e9",null).exports,O={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null,lastIndex:-1}},updated:function(){this.startY=this.$refs.A[0].offsetTop,console.log(this.$refs.A)},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-83.5,s=Math.floor((i-e.startY)/21);s>=0&&s<e.letters.length&&(e.$emit("change",e.letters[s]),e.lastIndex>=0&&s!==e.lastIndex&&(e.$refs[e.letters[e.lastIndex]][0].style.fontWeight="normal",e.$refs[e.letters[e.lastIndex]][0].style.color="#bbbbbb",e.$refs[e.letters[s]][0].style.fontWeight="bold",e.$refs[e.letters[s]][0].style.color="#222222"),e.lastIndex=s)},16))},handleTouchEnd:function(){this.touchStatus=!1}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var N={name:"City",components:{CityHeader:E,CitySearch:I,CityList:U,CityAlphabet:i("VU/8")(O,A,!1,function(t){i("v1VA")},"data-v-0a6c51b4",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterClick}})],1)},staticRenderFns:[]};var j=i("VU/8")(N,M,!1,function(t){i("MI0E")},"data-v-925f50b2",null).exports;s.a.use(r.a);var P=new r.a({routes:[{path:"/",name:"Home",component:S},{path:"/city",name:"City",component:j}],mode:"history"}),Y=i("v5o6"),D=i.n(Y),G=i("F3EI"),K=i.n(G);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,D.a.attach(document.body),s.a.use(K.a),new s.a({el:"#app",router:P,components:{App:a},template:"<App/>"})},P9Y2:function(t,e){},TzC8:function(t,e){},fBSs:function(t,e){},fFP0:function(t,e){},llZ4:function(t,e){},oqKr:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v1VA:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.101c34e3cc37ba391dad.js.map