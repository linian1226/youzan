webpackJsonp([3],{1:function(e,t,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);t.a=n},10:function(e,t,a){"use strict";var n=a(0);new n.default},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(23),s=(a.n(n),a(30)),i=a.n(s),r=a(15),o=(a.n(r),a(84)),c=(a.n(o),a(0)),d=a(3),l=a.n(d),u=a(1),f=a(8),p=a.n(f),h=a(24),g=a.n(h);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var e=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(t){var a=t.data.lists;a.length<e.pageSize&&(e.allLoaded=!0),e.lists=e.lists?e.lists.concat(a):a,e.loading=!1,e.pageNum++}))},getBanner:function(){var e=this;l.a.get(u.a.banner).then(function(t){e.bannerLists=t.data.lists})}},components:{Foot:p.a,Swipe:g.a}})},11:function(e,t){},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-nav"},[a("ul",e._l(e.navConfig,function(t,n){return a("li",{class:{active:e.curIndex===n},on:{click:function(a){e.changeNav(t,n)}}},[a("a",[a("i",{class:t.icon}),a("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]}},15:function(e,t){},23:function(e,t){},24:function(e,t,a){function n(e){a(42)}var s=a(6)(a(33),a(43),n,null,null);e.exports=s.exports},33:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(69),s=a(41);a.n(s);t.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}})}}},41:function(e,t){},42:function(e,t){},43:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])})),e._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},8:function(e,t,a){function n(e){a(11)}var s=a(6)(a(9),a(12),n,null,null);e.exports=s.exports},84:function(e,t){},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),s=a.n(n),i=(a(10),s.a.parse(location.search.substr(1))),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},created:function(){},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[109]);
//# sourceMappingURL=index.709f25f376cc02ec9112.js.map