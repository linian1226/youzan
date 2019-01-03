import 'css/common.css' //css/common这个css是webpack基础设置里'css':'@/module/css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'
//import  bus from 'js/bus.js'

let app = new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false, // 可以加载
        allLoaded:false,
        bannerLists:null

    },
    created() {//生命周期，此时可以拿到this
        this.getLists()
        this.getBanner()
    },
    methods:{
        getLists(){
            if(this.allLoaded) return 
            this.loading = true //开始出现加载
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then(res =>{
                let curLists = res.data.lists
                //判断所有数据是否加载完毕
                if(curLists.length < this.pageSize){
                    this.allLoaded = true
                }
                // if(this.lists){
                //     this.lists = this.lists.concat(curLists)
                // }else{
                //     //第一次请求数据
                //     this.lists = curLists
                // }
                this.lists = this.lists?this.lists.concat(curLists):curLists
                this.loading = false
                this.pageNum++;//第一页的数据
            })
        },
        getBanner(){
            axios.get(url.banner).then(res =>{
                this.bannerLists = res.data.lists
            })
        }

    },
    components:{
        Foot,
        Swipe
    }
})