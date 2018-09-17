import './search.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate' //css动画

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

let {keyword,id} = qs.parse(location.search.substr(1))
new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        isShow:false,
        loading:true,
        allLoaded:false,
        pageNum:1,
        pageSize:8,
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            if(this.allLoaded) return 
            this.loading = true //开始出现加载
            axios.post(url.searchList,{keyword,id}).then(res =>{
                var curLists = res.data.lists
                //数据加载完毕
                if(curLists.length < this.pageSize){
                    this.allLoaded = true
                }

                this.searchList = this.searchList?this.searchList.concat(curLists):curLists
                this.loading = false
                this.pageNum++;
            })
        },
        move(){
            let scrTop=document.documentElement.scrollTop || document.body.scrollTop;
            if(scrTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.body,'scroll',{duration:1000})
        }
    },
    mixins:[mixin]
})