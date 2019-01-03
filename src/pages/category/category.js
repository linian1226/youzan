import 'css/common.css'
import './category.css'

import Vue from 'vue' 
import axios from 'axios'
import url from 'js/api.js'

// import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'
new Vue({
    el:'#app',
    data:{
        topLists:null,  //一级分类数据
        topIndex:-1,
        subData:null,
        rankData:null
    },
    created(){//实例创建后，立即执行代码,初始化
        this.getTopList()
        this.getSubList(0)
    },
    methods:{
        getTopList(){
            axios.get(url.topList).then(res =>{
                this.topLists = res.data.lists
            })
        },
        getSubList(index,id){
            console.log(index,id)
            this.topIndex = index //点击之后改变topIndex值来控制show
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList,{id}).then(res =>{
                    this.subData = res.data.data
                })
            }
           
        },
        getRank(){//综合排行
            axios.get(url.rank).then(res =>{
                this.rankData = res.data.data
            })           
        },
        toSearch(list){
            location.href = `search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    mixins:[mixin]
    // components:{
    //     Foot
    // } ,
    // filters:{//定义过滤器，当处理数据，通过|过滤一下
    //     number(price){
    //         if(price){
    //             let tem = String(price).indexOf('.') + 1
    //             let count = String(price).length -tem
    //             if(tem === 0){
    //                 return price + '.00'
    //             }else if(count === 1){
    //                 return price + '0'
    //             }else{
    //                 return price
    //             }     
    //         }   
    //     }
    // }  
})