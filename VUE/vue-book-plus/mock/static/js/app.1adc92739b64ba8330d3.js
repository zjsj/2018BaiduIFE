webpackJsonp([7],{HzVJ:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="ADD_CART"},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=n("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/home"}},[n("i",{staticClass:"iconfont icon-shouye"}),t._v(" "),n("span",[t._v("首页")])]),t._v(" "),n("router-link",{attrs:{to:"/list"}},[n("i",{staticClass:"iconfont icon-plus-listview"}),t._v(" "),n("span",[t._v("列表")])]),t._v(" "),n("router-link",{attrs:{to:"/collect"}},[n("i",{staticClass:"iconfont icon-shoucang"}),t._v(" "),n("span",[t._v("收藏")])]),t._v(" "),n("router-link",{attrs:{to:"/add"}},[n("i",{staticClass:"iconfont icon-tianjia"}),t._v(" "),n("span",[t._v("添加")])])],1)},staticRenderFns:[]};var a={name:"App",components:{Tab:n("VU/8")(null,s,!1,function(t){n("ifJp")},"data-v-669c8ac0",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fadeIn"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1)],1),this._v(" "),e("transition",{attrs:{name:"fadeIn"}},[this.$route.meta.keepAlive?this._e():e("router-view")],1),this._v(" "),e("Tab")],1)},staticRenderFns:[]};var o=n("VU/8")(a,r,!1,function(t){n("u6lS")},null,null).exports,u=n("/ocq");i.a.use(u.a);var l=new u.a({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"lO7g"))},meta:{keepAlive:!0,title:"首页"}},{path:"/collect",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"QV70"))},meta:{title:"收藏"}},{path:"/detail/:bid",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"wHgX"))},name:"detail",meta:{title:"详情"}},{path:"/list",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"tcnj"))},meta:{title:"列表"}},{path:"/add",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"il+h"))},meta:{title:"添加"}},{path:"*",redirect:"/home"}]}),c=n("F3EI"),p=n.n(c),d=(n("v2ns"),n("cTzj")),f=n.n(d),h=n("NYxO"),m=n("sax8"),v=n.n(m),w={count:function(t){return t.cartList.reduce(function(t,e){e.bookCount},0)}},_=n("bOdI"),b=n.n(_),C=n("Gu7T"),g=n.n(C),k=n("HzVJ"),F=b()({},k.a,function(t,e){var n=t.cartList.find(function(t){return t.bookId===e.bookId});n?(n.bookCount+=1,t.cartList=[].concat(g()(t.cartList))):(e.bookCount=1,t.cartList=[].concat(g()(t.cartList),[e]))});i.a.use(h.a);var y=new h.a.Store({state:{cartList:[]},strict:!0,getters:w,mutations:F,plugins:[v()()]});i.a.use(p.a),i.a.use(f.a,{preLoad:1.3,error:"http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E9%94%99%E8%AF%AF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=396805210,4266088262&os=3268477824,4175503894&simid=0,0&pn=2&rn=1&di=188551925760&ln=1746&fr=&fmq=1540714337839_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fphoto.16pic.com%2F00%2F45%2F24%2F16pic_4524591_b.jpg&rpstart=0&rpnum=0&adpicid=0",loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540724476207&di=1b5ba9131308c5cd41a495f8cc52e2aa&imgtype=0&src=http%3A%2F%2Fwww.biymx.com%2Fdata%2Fupload%2Fueditor%2F20180308%2F5aa0d958deb0f.gif",attempt:1}),i.a.config.productionTip=!1,l.beforeEach(function(t,e,n){document.title=t.meta.title,t.path,n()}),new i.a({el:"#app",router:l,store:y,render:function(t){return t(o)}})},ifJp:function(t,e){},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=n("VU/8")(s,a,!1,null,null,null);e.default=r.exports},u6lS:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1adc92739b64ba8330d3.js.map