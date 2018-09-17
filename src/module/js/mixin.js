import Foot from 'components/Foot.vue'

let mixin = {
    filters:{//定义过滤器，当处理数据，通过|过滤一下
        currency(price){
            if(price){
                let tem = String(price).indexOf('.') + 1
                let count = String(price).length -tem
                if(tem === 0){
                    return price + '.00'
                }else if(count === 1){
                    return price + '0'
                }else{
                    return price
                }     
            }   
        }
    },
    components:{
        Foot
    } 
}
//每个实例里有一些公用的方法，公用的数据，或者公用组件的加载，公用生命周期处理
export default mixin