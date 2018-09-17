
//import { mapState } from 'vuex'

export default {
    data(){
        return {
            name:'',
            tel:'',
            provinceValue:-1,
            cityValue:-1,
            districtValue:-1,
            address:'',
            id:'',
            type: this.$route.query.type,
            instance: this.$route.query.instance,
            addressData:require('js/address.json'),
            cityList:null,
            districtList:null,
            isChangeEdit:false //是否修改编辑页
        }
    },
    computed:{
        lists(){
            return this.$store.state.lists
        }
    },
    //computed:mapState(['lists']),// 映射 this.lists 为 store.state.lists'
    // computed:{
    //     mapState:{
    //         lists:state=>state.lists
    //     }
    // },
    created(){
        // let query = this.$route.query //路由信息
        // this.type = query.type
        // this.instance = query.instance
        //未挂载时传入数据，从编辑页all跳转到form
        if(this.type === 'edit'){
            let ad = this.instance
            this.provinceValue = parseInt(ad.provinceValue)
            this.name = ad.name
            this.tel = ad.tel
            this.address = ad.address
            this.id = ad.id
        }
    },
    methods:{
        add(){
            //需要做非空和合法性校验
            let {name,tel,provinceValue,cityValue,districtValue,address} = this
            let data = {name,tel,provinceValue,cityValue,districtValue,address}
            // if(this.type === 'add'){//若从all是add状态=>form
            //     Address.add(data).then(res=>{
            //         this.$router.go(-1) //回到原路由all
            //     })
            // }
            if(this.type === 'edit'){//若从all是edit状态=>form，此时表单加数据
                // Address.update(data).then(res=>{
                //     data.id = this.id
                //     this.$router.go(-1)//回到all
                // })
                data.id = this.id
                data.isDefault = this.isDefault
                this.$store.dispatch('updateAction',data)
            }else{
                // Address.add(data).then(res=>{
                //     this.$router.go(-1) //回到原路由all
                // })
                this.$store.dispatch('addAction',data)
            }
        },
        remove() {
            if (window.confirm("确认删除?")) { 
              this.$store.dispatch('removeAction',this.id)
            } 
        },
        setDefault(){
            this.$store.dispatch('setDefaultAction',this.id)
        }
    },
    watch: {
        lists:{//监听lists
            handler(){
                this.$router.go(-1)
            },
            deep:true
        },
        provinceValue(val){//得到city的数据
            if(val === -1) return
            let list = this.addressData.list
            let index = list.findIndex(item =>{
                return item.value === val
            })
            this.cityList = list[index].children
            this.cityValue = -1
            this.districtValue = -1
            if(!this.isChangeEdit){
                if(this.type === 'edit'){
                    this.cityValue = parseInt(this.instance.cityValue)
                    this.isChangeEdit = true
                }
            }
        },
        cityValue(val){//得到区的数据
            if(val === -1) return
            let list = this.cityList
            let index = list.findIndex(item=>{
                return item.value === val
            })
            this.districtList = list[index].children           
            this.districtValue = -1
            if(!this.isChangeEdit){
                if(this.type === 'edit'){
                    this.districtValue = parseInt(this.instance.districtValue)
                    this.isChangeEdit = true
                }
            }    
        },
    }
    
}