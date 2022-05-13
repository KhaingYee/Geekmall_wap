<template>
  <div>
      <shop-header :text="text"></shop-header>
      <h4>{{$constant.mainTitle}}{{$t('message.network_operator')}}</h4>
      <p>{{$t('message.Company')}}：<span>{{shopInfo.company_name}}</span></p>
      <p>{{$t('message.Business')}}：<span>{{shopInfo.license_number}}</span></p>
      <p>{{$t('message.Legal')}}：<span>{{shopInfo.mobile}}</span></p>
      <p>{{$t('message.Location')}}：<span>{{shopInfo.address}}</span></p>
      <p>{{$t('message.Enterprise')}}：<span>{{shopInfo.registered_capital}}</span></p>
      <p>{{$t('message.Validity_license')}}：<span>{{shopInfo.validity_start}}-{{shopInfo.validity_end}}</span></p>
      <p>{{$t('message.company_address')}}：<span>{{shopInfo.address}}</span></p>
      <p>{{$t('message.business_scope')}}：<span>{{shopInfo.scope_of_operation}}</span></p>
      <h6>{{$constant.licence_remark}}</h6>
  </div>
</template>
<script>
import qs from 'qs'
import shopHeader from '@/components/page/children/header.vue';
export default {
  data () {
    return {
        text:this.$t('message.license_information'),
        shopInfo:''
    }
  },
  mounted(){
  	this.work();
  },
  methods:{
  	work(){
  		this.axios.post(this.$httpConfig.shopLicense,qs.stringify({
  			id:this.$route.params.id,
            token: sessionStorage.getItem("data_token")
  		})).then((res)=>{
  			this.shopInfo=res.data.data
  		}).catch((err)=>{
  			console.log(err)
  		});
  	}
  },
  components:{
      shopHeader
  }
}
</script>
<style lang="less" scoped>
    h4{
        font-size:.32rem;
        text-align: center;
        margin: .2rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p{
        font-size: .28rem;
        padding: 0 .2rem;
        line-height: .5rem;
        span{
        	font-size: .28rem;
        	line-height: .5rem;
        }
    }
    h6{
        margin-top: .55rem;
        font-size: .28rem;
        font-weight: 600;
        padding: 0 .2rem;
    }
</style>
