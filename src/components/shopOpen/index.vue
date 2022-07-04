<template>
  <div class="box">
      <div v-title data-title="我要开店">{{$t('message.openshop')}}</div>
      <top-header :text = "title"></top-header>
      <div class="icon">
          <img :src="shopImg" alt="">
      </div>
      <button class="btn" @click="initAgreement">{{$t('message.open_store')}}</button>
      <button @click="must">{{$t('message.checking_progress')}}</button>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
export default {
  data () {
      return {
          title:this.$t('message.openshop'),
          shopImg:require("@/assets/images/zy.png")
      }
  },
  methods:{
      initAgreement(){
      	
          this.$router.push({name:"settledAgreement"})
          
      },
      must(){
      	this.$router.push({name:"description"})
      }
  },
   components:{
      topHeader
  }
}
</script>
<style lang="less" scoped>
.box{
    .icon{
        height: 4.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 2.6rem;
            height: 2.6rem;
        }
    }
    button{
        width: 7.10rem;
        margin: 0 .2rem;
        height: .9rem;
        background-color:#BABABA;
        border-radius: .9rem;
        border:0;
        margin-top: .2rem;
        color: #fff;
        font-size: .28rem;
    }
    .btn{
        background-color:  #d02629;
    }
}
</style>
