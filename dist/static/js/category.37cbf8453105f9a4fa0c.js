webpackJsonp([6],{1:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},10:function(t,e,a){"use strict";var n=a(0);new n.default},107:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(15),s=(a.n(n),a(76)),r=(a.n(s),a(0)),i=a(3),o=a.n(i),c=a(1),d=a(7);new r.default({el:"#app",data:{topLists:null,topIndex:-1,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;o.a.get(c.a.topList).then(function(e){t.topLists=e.data.lists})},getSubList:function(t,e){var a=this;console.log(t,e),this.topIndex=t,0===t?this.getRank():o.a.post(c.a.subList,{id:e}).then(function(t){a.subData=t.data.data})},getRank:function(){var t=this;o.a.get(c.a.rank).then(function(e){t.rankData=e.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[d.a]})},11:function(t,e){},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:t.curIndex===n},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},15:function(t,e){},7:function(t,e,a){"use strict";var n=a(8),s=a.n(n),r={filters:{currency:function(t){if(t){var e=String(t).indexOf(".")+1,a=String(t).length-e;return 0===e?t+".00":1===a?t+"0":t}}},components:{Foot:s.a}};e.a=r},76:function(t,e){},8:function(t,e,a){function n(t){a(11)}var s=a(6)(a(9),a(12),n,null,null);t.exports=s.exports},9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(13),s=a.n(n),r=(a(10),s.a.parse(location.search.substr(1))),i=r.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={data:function(){return{navConfig:o,curIndex:parseInt(i)||0}},created:function(){},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},[107]);
//# sourceMappingURL=category.37cbf8453105f9a4fa0c.js.map