<template>
  <div>
       <div v-title data-title="开店申请提交成功">{{$t('message.opening_successfully')}}</div>
      <top-header :text = "title"></top-header>
      <div class="box">
        <img class="agreementSuc" :src="img" alt="">
        <h4>{{$t('message.application_successfully')}}</h4>
        <p>
          
          
          {{$t('message.working_days')}} <br/> 
          {{$t('message.also_log')}}<span class="shopIn">{{$t('message.entry_center')}}</span> {{$t('message.timehant')}}；<br/>
          {{$t('message.paid_offline')}}，     {{$t('message.confirmation')}} <br/>
          {{$t('message.website_customer')}}
        </p>
        <button class="btnOk btn1" @click="reback">{{$t('message.application_canceled')}}</button>
        <button class="btnNo btn2" @click="toProgress">{{$t('message.view_progress')}}</button>
      </div>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
export default {
  data () {
      return {
          title:this.$t('message.opening_successfully'),
          img:require('@/assets/images/agreementSuc.jpg')
      }
  },
  methods:{
    toProgress(){
        this.$router.push("/description")
    },
  	reback(){
  		this.$router.push("/shopOpen")
  	}
  },
    components:{
      topHeader
  }
}
</script>
<style lang="less" scoped>
.box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .agreementSuc{
    width:142/100rem;
    height:142/100rem;
    margin-top: 50/100rem;
  }
  h4{
      color:#333333;
      font-size: 36/100rem;
      margin: 25/100rem 0 40/100rem;
      font-weight: 600;
      text-align: center;
  }
  p{
      color:#989898;
      font-size:28/100rem;
      padding:0 30/100rem;
      line-height: 36/100rem;
  }
  .btn1{
      margin-top: 245/100rem;
  }
  .btn2{
      margin-top: 20/100rem;
  }
}
.shopIn{
    color:#0479C6;
    font-size: 28/100rem;
    padding:10/100rem;
}
</style>
