webpackJsonp([2],{1:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="http://rap2api.taobao.org/app/mock/7058"+a[s]);e.a=a},10:function(t,e,n){"use strict";var a=n(0);new a.default},108:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(78),s=(n.n(a),n(79)),i=(n.n(s),n(77)),o=(n.n(i),n(82)),r=(n.n(o),n(80)),c=(n.n(r),n(81)),d=(n.n(c),n(83)),u=(n.n(d),n(0)),l=n(3),f=n.n(l),h=n(1),p=n(13),m=n.n(p),v=n(7),g=n(24),w=n.n(g),b=m.a.parse(location.search.substr(1)),y=b.id,k=["商品详情","本店成交"];new u.default({el:"#app",data:{id:y,details:null,detailsTab:k,tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.post(h.a.details,{id:y}).then(function(e){t.details=e.data.data,t.bannerLists=[],t.details.imgs.forEach(function(e){t.bannerLists.push({clickUrl:"",img:e})})})},changeTab:function(t){this.tabIndex=t,1===t&&this.getDeal()},getDeal:function(){var t=this;f.a.post(h.a.deal,{id:y}).then(function(e){t.dealLists=e.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(h.a.addCart,{id:y,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},500))})}},components:{Swipe:w.a},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[v.a]})},11:function(t,e){},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,a){return n("li",{class:{active:t.curIndex===a},on:{click:function(n){t.changeNav(e,a)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},24:function(t,e,n){function a(t){n(42)}var s=n(6)(n(33),n(43),a,null,null);t.exports=s.exports},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(69),s=n(41);n.n(s);e.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new a.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}})}}},41:function(t,e){},42:function(t,e){},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},7:function(t,e,n){"use strict";var a=n(8),s=n.n(a),i={filters:{currency:function(t){if(t){var e=String(t).indexOf(".")+1,n=String(t).length-e;return 0===e?t+".00":1===n?t+"0":t}}},components:{Foot:s.a}};e.a=i},77:function(t,e){},78:function(t,e){},79:function(t,e){},8:function(t,e,n){function a(t){n(11)}var s=n(6)(n(9),n(12),a,null,null);t.exports=s.exports},80:function(t,e){},81:function(t,e){},82:function(t,e){},83:function(t,e){},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),s=n.n(a),i=(n(10),s.a.parse(location.search.substr(1))),o=i.index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={data:function(){return{navConfig:r,curIndex:parseInt(o)||0}},created:function(){},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},[108]);
//# sourceMappingURL=goods.2f5df02856431e745198.js.map