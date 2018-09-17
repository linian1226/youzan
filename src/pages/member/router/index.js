//配置路由入口文件
//1.使用vue-router
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//个人中心进来后不需要路由，是根路由
let routes = [{//一个组件，一个路由配置
    path:'/',
    component:require('../components/member.vue')
},{
    path:'/address',
    component:require('../components/address.vue'),
    children:[{//嵌套路由
        path:'',//没有下一级就跳转
        //component:require('../components/all.vue')
        redirect:'all' //重定向
    },{
        path:'all',
        name:'all',//命名路由
        component:require('../components/all.vue')
    },{
        path:'form',
        name:'form',
        component:require('../components/form.vue')
    }]
}]

//创建router实例
let router = new Router({
    routes
})

export default router
