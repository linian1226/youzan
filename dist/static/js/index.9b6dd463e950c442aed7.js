webpackJsonp([3],{1:function(e,t,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+a[s]);t.a=a},10:function(e,t,n){"use strict";var a=n(0);new a.default},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(24),s=(n.n(a),n(30)),i=n.n(s),r=n(15),o=(n.n(r),n(86)),c=(n.n(o),n(0)),d=n(4),l=n.n(d),u=n(1),f=n(8),p=n.n(f),h=n(25),m=n.n(h);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var e=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(t){var n=t.data.lists;n.length<e.pageSize&&(e.allLoaded=!0),e.lists=e.lists?e.lists.concat(n):n,e.loading=!1,e.pageNum++}))},getBanner:function(){var e=this;l.a.get(u.a.banner).then(function(t){e.bannerLists=t.data.lists})}},components:{Foot:p.a,Swipe:m.a}})},12:function(e,t){},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,a){return n("li",{class:{active:e.curIndex===a},on:{click:function(n){return e.changeNav(t,a)}}},[n("a",[n("i",{class:t.icon}),n("div",[e._v(e._s(t.name))])])])}),0)])},staticRenderFns:[]}},15:function(e,t){},24:function(e,t){},25:function(e,t,n){function a(e){n(43)}var s=n(6)(n(33),n(44),a,null,null);e.exports=s.exports},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(71),s=n(42);n.n(s);t.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new a.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}})}}},42:function(e,t){},43:function(e,t){},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])}),0),e._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},8:function(e,t,n){function a(e){n(12)}var s=n(6)(n(9),n(13),a,null,null);e.exports=s.exports},86:function(e,t){},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),s=n.n(a),i=(n(10),s.a.parse(location.search.substr(1))),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},created:function(){},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[111]);
//# sourceMappingURL=index.9b6dd463e950c442aed7.js.map