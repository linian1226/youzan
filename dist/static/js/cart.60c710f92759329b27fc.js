webpackJsonp([4],{1:function(e,t,n){"use strict";var i={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in i)i.hasOwnProperty(o)&&(i[o]="http://rap2api.taobao.org/app/mock/7058"+i[o]);t.a=i},10:function(e,t,n){"use strict";var i=n(0);new i.default},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(75),o=(n.n(i),n(77)),s=(n.n(o),n(76)),r=(n.n(s),n(0)),c=n(7),a=n(4),d=n.n(a),u=n(1),h=n(31),f=n.n(h),l=(n(23),n(72));new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},selectList:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(e.push(n),t+=n.price*n.number)})}),this.total=t,e}return[]},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;l.a.lists().then(function(t){var n=t.data.cartList;n.forEach(function(e){e.editing=!1,e.editingMsg="编辑",e.checked=!0,e.removeChecked=!1,e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=n})},selectGood:function(e,t){var n=this.editingShop?"removeChecked":"checked";t[n]=!t[n],e[n]=e.goodsList.every(function(e){return e[n]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(n){n[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(n,i){t!==i&&(n.editing=!1,n.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=t},reduce:function(e){1!==e.number&&l.a.reduce(e.id).then(function(t){e.number--})},add:function(e){l.a.add(e.id).then(function(t){e.number++})},remove:function(e,t,n,i){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:n,goodIndex:i},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选"+this.removeLists.length+"个商品删除？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,n=t.shop,i=t.shopIndex,o=(t.good,t.goodIndex);l.a.cartRemove().then(function(t){n.goodsList.splice(o,1),n.goodsList.length||(e.lists.splice(i,1),e.removeShop()),e.removePopup=!1})}else{var s=[];l.a.remove(this.removeLists),d.a.get(u.a.cartMremove,{ids:s}).then(function(t){var n=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&n.push(t)}),n.length?e.editingShop.goodsList=n:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,n,i){var o=e.changedTouches[0].clientX,s="0";n.startX-o>100&&(s="-60px"),o-n.startX>100&&(s="0px"),f()(this.$refs["goods-"+t+"-"+i],{left:s})}},mixins:[c.a]})},12:function(e,t){},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,i){return n("li",{class:{active:e.curIndex===i},on:{click:function(n){return e.changeNav(t,i)}}},[n("a",[n("i",{class:t.icon}),n("div",[e._v(e._s(t.name))])])])}),0)])},staticRenderFns:[]}},23:function(e,t,n){"use strict";function i(e,t){return new s.a(function(n,i){c.a.get(e,t).then(function(e){e.data.status;n(e)}).catch(function(e){i(e)})})}var o=n(51),s=n.n(o),r=n(4),c=n.n(r);t.a=i},7:function(e,t,n){"use strict";var i=n(8),o=n.n(i),s={filters:{currency:function(e){if(e){var t=String(e).indexOf(".")+1,n=String(e).length-t;return 0===t?e+".00":1===n?e+"0":e}}},components:{Foot:o.a}};t.a=s},72:function(e,t,n){"use strict";var i=n(52),o=n.n(i),s=n(53),r=n.n(s),c=n(23),a=n(1),d=function(){function e(){o()(this,e)}return r()(e,null,[{key:"add",value:function(e){return n.i(c.a)(a.a.addCart,{id:e,number:1})}},{key:"reduce",value:function(e){return n.i(c.a)(a.a.cartReduce,{id:e,number:1})}},{key:"lists",value:function(){return n.i(c.a)(a.a.cartList)}},{key:"cartRemove",value:function(e){return n.i(c.a)(a.a.cartRemove,{id:e,number:1})}},{key:"cartMremove",value:function(e){return n.i(c.a)(a.a.cartMremove,{ids:e})}},{key:"remove",value:function(e){var t=[];e.forEach(function(e){t.push(e.id)})}}]),e}();t.a=d},75:function(e,t){},76:function(e,t){},77:function(e,t){},8:function(e,t,n){function i(e){n(12)}var o=n(6)(n(9),n(13),i,null,null);e.exports=o.exports},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),o=n.n(i),s=(n(10),o.a.parse(location.search.substr(1))),r=s.index,c=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:c,curIndex:parseInt(r)||0}},created:function(){},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[108]);
//# sourceMappingURL=cart.60c710f92759329b27fc.js.map