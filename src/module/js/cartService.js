import fetch from 'js/fetch.js'
import url from 'js/api.js'
//对同一个场景下的所有service进行一个封装
class Cart{
    static add(id){//static不需要实例化了，直接Cart.add处理
        return fetch(url.addCart,{
            id,
            number:1
        })
    }
    static reduce(id){
        return fetch(url.cartReduce,{
            id,
            number:1
        })
    }
    static lists(){
        return fetch(url.cartList)
    }
    static cartRemove(id){
        return fetch(url.cartRemove,{
            id,
            number:1
        })
    }
    static cartMremove(ids){
        return fetch(url.cartMremove,{
            ids
        })
    }
    static remove(arr){
        let ids = []
        arr.forEach(good=> {
            ids.push(good.id)
        });
    }

}

export default Cart