import axios from 'axios'
//所有数据请求有一个统一入口
function fetch(url,data){
    return new Promise((resolve,reject) =>{
        axios.get(url,data).then(res=>{
            let status = res.data.status
            // if(status === 200){
            //     resolve(res)
            // }
            // if(status === 300){
            //     location.href = 'login.html'
            //     resolve(res)
            // }
            //reject(res)
            resolve(res)
        }).catch(error=>{
            reject(error)
        })
    })
}

export default fetch