<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
                <a class="js-no-follow" v-bind:href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
                </a>
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<style>
    .swiper-slide img{
        height:100%;
        width:100%;
    }
</style>
<script>
    //swiper对dom节点进行操作的,dom节点什么时候生成,mounted
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'swipe',//组件名称
        //props: ['lists']     //组件参数，数组或对象形式
        props:{//向子组件传递数据
            lists:{
                type:Array,
                required:true
            },
            name:{}
        },
        created(){

        },
        mounted(){//挂载到了之后，才能用swiper
            new Swiper('.swiper-container',{
                loop:true,//循环
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },//分页
                autoplay: {//自动轮播
                    delay: 2500,
                    disableOnInteraction: false,
                }
            })
        }
        // watch:{
        //     lists(val,oldVal){
        //         console.log(val,oldVal)
        //         this.$nextTick(() =>{//下一次数据更新完成，同时dom确定后开始使用
        //             console.log(document.querySelectorAll('.swiper-slide'))
        //         })
        //     }
        // }
    }
</script>
