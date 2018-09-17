//使用vuex插件
import Vue from  'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Address from 'js/addressService.js'

//通过异步接口获取数据列表
//两种方式触发mutations里的事件，一种在actions里触发，或在程序里触发
//创建Store实例
const store = new Vuex.Store({
    state:{//状态管理的state里数据不允许修改，只许一系列事件触发
        lists:null,

    },
    mutations:{//同步事件，类似事件，更改state数据只能这个
        init(state,lists){//初始化数据
            state.lists = lists
        },
        add(state,instance){//增加地址，传递一个地址的实例
            //模拟添加id，其实instance最好后台返回
            instance.id = parseInt(Math.random()*10000)           
            state.lists.push(instance)
        },
        remove(state,id){
            let lists = state.lists
            let index = lists.findIndex(item=>{
                return item.id === id
            })
            lists.splice(index,1)
        },
        update(state,instance){
            let lists = JSON.parse(JSON.stringify(state.lists))//先深度复制
            let index = lists.findIndex(item=>{//找到实例的位置，并替换
                return item.id === instance.id
            })
            lists[index] = instance
            state.lists = lists           
        },
        setDefault(state,id){
            let lists = state.lists
            lists.forEach(item=>{
                //判断是否默认地址
                item.isDefault = item.id === id ? true :false                
            })            
        }
    },
    actions:{//删除新增，数据要与后台交互，异步，异步之后->同步
        getLists({commit}){//参数解构 store.commit
            Address.list().then(res=>{
                //this.lists = res.data.lists
                commit('init',res.data.lists)//mutation的载荷
            })
        },
        addAction({commit},instance){//外界触发，传instance
            Address.add(instance).then(res=>{
                commit('add',instance)
            })
        },
        removeAction({commit},id){
            Address.remove(id).then(res=>{
                commit('remove',id)
            })
        },
        updateAction({commit},instance){
            Address.update(instance).then(res=>{
                // 实际开发使用
                // commit('update', res.data.data)
                // 测试使用
                // let data = res.data.data
                // data.id = instance.id
                // data.isDefault = instance.isDefault
                commit('update',instance)
            })
        },
        setDefaultAction({commit},id){
            Address.setDefault(id).then(res=>{
                commit('setDefault',id)
            })
        },
    },
})

export default store