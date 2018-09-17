<template>
    <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-if="lists&&lists.length">
      <a class="block-item js-address-item address-item " 
        @click="toEdit(list)"
        v-for="list in lists"
        :key="list.id"
        :class="{'address-item-default':list.isDefault}"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.address}}</p>
      </a>
    </div>
    <div v-if="lists&&!lists.length">
        没有地址，请添加
    </div>
    <div class="block stick-bottom-row center">
        <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" 
        :to="{name:'form',query:{type:'add'}}">
                新增地址
        </router-link>
    </div>
  </div>
</template>
<script>
//import Address from 'js/addressService.js'
export default {
    // data(){
    //     return {
    //         lists:null
    //     }
    // },
    computed:{//通过计算属性
        lists(){
            return this.$store.state.lists //$store像路由一样注入到所有组件
        }
    },
    created(){
        if(!this.lists){
            this.$store.dispatch('getLists') //分发的形式触发vuex/index.js里的action行为
        }
    },
    methods:{
        toEdit(list){//编程式导航
            //this.$router.push({path:'/address/form'})
            this.$router.push({name:'form',query:{
                type:'edit',
                instance:list //地址实例
            }})
        }
    }
}
</script>

