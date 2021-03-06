import './cart.css'
import './cart_trade.css'
import './cart_base.css' 

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'
import Velocity from 'velocity-animate' 
import fetch from 'js/fetch.js'
import Cart from 'js/cartService.js'


new Vue({
    el:'.container',
    data:{
        lists:null,
        total:0,
        editingShop:null,
        editingShopIndex:-1,
        removePopup:false,//是否移除
        removeData:null, //移除的数据
        removeMsg:''
    },
    computed:{
        allSelected:{
            get(){
                //获得所有shop.checked的值
                if(this.lists&&this.lists.length){
                    return this.lists.every(shop=>{
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal){//赋给新的值
                this.lists.forEach(shop=>{
                    shop.checked = newVal
                    shop.goodsList.forEach(good=>{
                        good.checked = newVal
                    })
                })
            }
        },
        selectList(){//结算获取的数据
            if(this.lists&&this.lists.length){
                let arr = []
                let total = 0
                this.lists.forEach(shop=>{
                    shop.goodsList.forEach(good=>{
                        if(good.checked){
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        allRemoveSelected:{
            get(){
                if(this.editingShop){
                    return this.editingShop.removeChecked
                }
                return false
            },
            set(newVal){
                if(this.editingShop){
                    this.editingShop.removeChecked = newVal
                    this.editingShop.goodsList.forEach(good=>{
                        good.removeChecked = newVal
                    })
                }
            }
        },
        removeLists() {
            if(this.editingShop) {
                let arr = []
                this.editingShop.goodsList.forEach(good => {
                if(good.removeChecked) {
                    arr.push(good)
                }
                })
                return arr
            }
            return []
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            Cart.lists().then(res =>{
                let lists = res.data.cartList
                //对原始数据进行操作后再放到dom中,先处理后赋值
                lists.forEach(shop=>{
                    shop.editing = false
                    shop.editingMsg = '编辑'
                    shop.checked = true
                    shop.removeChecked = false //是否删除选中
                    shop.goodsList.forEach(good=>{
                        good.checked = true
                        good.removeChecked = false
                    })
                })
                this.lists = lists
            })
        },
        selectGood(shop,good){
            let attr = this.editingShop ? 'removeChecked':'checked'
            good[attr] = !good[attr]
            //当商品全选时，店铺会选上
            shop[attr] = shop.goodsList.every(good=>{
                return good[attr]
            })
        },
        selectShop(shop){
            let attr = this.editingShop ? 'removeChecked':'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good =>{
                good[attr] = shop[attr]
            })
        },
        selectAll(){
            let attr = this.editingShop ? 'allRemoveSelected':'allSelected'
            this[attr] = !this[attr]
        },
        edit(shop,shopIndex){
            shop.editing = !shop.editing
            shop.editingMsg = shop.editing ? '完成':'编辑'
            this.lists.forEach((item,i) =>{
                if(shopIndex !== i){
                    item.editing = false
                    item.editingMsg = shop.editing ? '':'编辑'
                }
            })
            this.editingShop = shop.editing ? shop:null
            this.editingShopIndex = shopIndex
        },
        reduce(good){
            if(good.number===1)return
            // axios.post(url.cartReduce,{
            //     id:good.id,
            //     number:1
            // }).then(res=>{
            //     good.number--;
            // })
            Cart.reduce(good.id).then(res=>{
                good.number--;
            })
        },
        add(good){
            // axios.post(url.addCart,{
            //     id:good.id,
            //     number:1
            // }).then(res=>{
            //     good.number++;
            // })
            Cart.add(good.id).then(res=>{
                good.number++;
            })
        },
        remove(shop,shopIndex,good,goodIndex){
            this.removePopup = true
            this.removeData = {shop,shopIndex,good,goodIndex}
            this.removeMsg = '确定要删除该商品吗？'
        },
        removeList(){
            this.removePopup = true
            this.removeMsg = `确定将所选${this.removeLists.length}个商品删除？`
        },
        removeConfirm(){
            if(this.removeMsg === '确定要删除该商品吗？'){
                let {shop,shopIndex,good,goodIndex} = this.removeData
                Cart.cartRemove().then(res=>{
                    shop.goodsList.splice(goodIndex,1)
                    if(!shop.goodsList.length){
                        this.lists.splice(shopIndex,1)
                        this.removeShop()
                    }
                    this.removePopup = false //移除完毕
                    //this.$refs[`goods-${shopIndex}-${goodIndex}`][0].style = null
                })
            }else{
                let ids = []
                // this.removeLists.forEach(good=>{
                //     ids.push(good.id)
                // })
                Cart.remove(this.removeLists)
                axios.get(url.cartMremove, {
                    ids
                }).then(res=>{
                    let arr = []
                    this.editingShop.goodsList.forEach(good=>{
                        let index = this.removeLists.findIndex(item=>{
                            return item.id == good.id
                        })//没有选中，则index=-1
                        if(index === -1){
                            arr.push(good)//未被选中的商品
                        }
                    })
                    if(arr.length){//还存在未被选中的商品
                        this.editingShop.goodsList = arr
                    }else{
                        //删除整个店铺
                        this.lists.splice(this.editingShopIndex,1)
                        this.removeShop()
                    }
                    this.removePopup = false
                })
            }     
        },
        removeShop(){
            this.editingShop = null
            this.editingShopIndex = -1
            this.lists.forEach(shop=>{
                shop.editing = false
                shop.editingMsg = '编辑'
            })
        },
        start(e,good){
            good.startX = e.changedTouches[0].clientX
        },
        end(e,shopIndex,good,goodIndex){
            let endX = e.changedTouches[0].clientX
            let left = '0'
            if(good.startX- endX>100){
                left = '-60px'
            }
            if(endX - good.startX>100){
                left = '0px'
            }
            Velocity(this.$refs[`goods-${shopIndex}-${goodIndex}`],{
                left
            })
            
            
        }
    },
    mixins:[mixin]
})