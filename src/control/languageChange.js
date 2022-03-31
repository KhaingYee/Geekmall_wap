import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = {
    English: {
      message: {
        hello: 'Hello',
        hot:'Popular Products',
        current:'1st come 1st serve',
        kill:'The event has not begun',
        field:'Time left from the end',
        snap:'Already bought',
        piece:'piece',
        left:'quantity left',
        over:'The event is over',
        seemore:'See More',
        snapUp:'Buy now',
        redme:'Redeem',
        more:'More',
        integral:'Points',
        recommentedStore:'Recommended store',
        Newarrivals:'New arrivals',
        sold:'Quantity of sold',
        hotSale:'Hot Sale',
        youlike:'You May Also Like',
        nodata:'No data',
      }
    },
    Chinese: {
      message: {
        hello: '你好',
        hot:'线下节点与热推项目',
        current:'现时现量 先到先得',
        kill:'秒杀还未开始',
        field:'距离本场结束',
        snap:'已抢购',
        piece:'件',
        left:'仅剩',
        over:'活动已结束',
        seemore:'查看更多',
        snapUp:'抢购',
        redme:'积分兑换',
        more:'更多',
        integral:'积分',
        recommentedStore:'推荐店铺',
        Newarrivals:'新品上架',
        sold:'已售',
        hotSale:'热销商品',
        youlike:'猜你喜欢',
        nodata:'暂无数据',
      }
    },
    Myanmar: {
        message: {
          hello: 'မင်္ဂလာပါ',
          hot:'လူစိတ်ဝင်စားမှုများသော',
          current:'ဦးသူစနစ်',
          kill:'ဦးသူစနစ် အစီအစဥ်မစသေးပါ',
          field:'ကျန်ရှိသောအချိန်',
          snap:'ဝယ်ယူပြီးအရေအတွက်',
          piece:'ခု',
          left:'ကျန်ရှိသောအရေအတွက်',
          over:'ပြီးဆုံးသွားပါပြီ',
          seemore:'ပိုကြည့်',
          snapUp:'ဝယ်ယူမည်',
          redme:'အမှတ် နှင့်လှဲလှယ်မည်',
          more:'နောက်ထပ်',
          integral:'အမှတ်',
          recommentedStore:'အကြံပြုထားသောဆိုင်',
          Newarrivals:'ပစ္စည်းသစ်များ',
          sold:'ရောင်းထွက်ထားသော',
          hotSale:'အရောင်းရဆုံး',
          youlike:'သင်ကြိုက်နိုင်သော',
          nodata:'ဒေတာမရှိပါ',
        }
    }
  };
  
  const i18n = new VueI18n({
    locale: 'English',
    messages
  });

  export default i18n;