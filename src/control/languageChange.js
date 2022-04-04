import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = {
    English: {
      message: {
        hello: 'Hello',
        // home
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
        // class
        searchShop:'Search shop...',
        // activity
        activity:'Activity',
        together:'Let’s create a group',
        peopleOrder:'people have ordered',
        inGroup:'in a group',
        startGroup:'to start a group',
        // cart
        shoppingCart:'Shopping Cart',
        commodity:'Products',
        RecommendedPackage:'Recommended Package',
        NoshoppingCart:'There is no products in your shopping cart yet',
        buyNow:'buy it now',
        selectAll:'Select All',
        edit:'Edit',
        finish:'Finish',
        total:'Total',
        settle:'Checkout',
        move:'move to favorites',
        interested:'Products you may be interested in',
        fullReduction:'full reduction',
        full:'full',
        orderDiscount:'Order immediate discount',
        giveaway:'Giveaway',
        delete:'Delete',
        //person
        nameAuthentication:'name authentication',
        benefits:'Sign in benefits',
        member:'VIP Member',
        production:'Production',
        favorite:'Favorite',
        shop:'Shop',
        store:'Store',
        footprint:'History',
        MyOrde:'My Order',
        checkOrder:'Check order',
        payment:'Payment',
        delivered:'Delivered',
        pendingReceipt:'Pending Receipt',
        completed:'Completed',
        repair:'Repair/Return',
        groupOr:'Group Order',
        packageOr:'Package Order',
        otherOr:'Other Orders',
        PointsAvailable:'Points Available',
        voucher:'Voucher',
        balance:'Balance',
        myService:'My service',
        invoice:'My invoice',
        scores:'My scores',
        mall:'Points Mall',
        management:'Evaluation management',
        settings:'Account settings',
        service:'Customer service',
        report:'Report',
        feedback:'Feedback',
        collection:'My Collection',
        openshop:'I want to open a shop',
        ShippingAddress:'Shipping Address',
        PointsOrder:'Points Order',
        // product
        commodityy:'Commodity',
        details:'Details',
        attributes:'Attributes',
        recommend:'Recommend',
        frontpage:'front page',
        information:'information',
        share:'share',
      }
    },
    Chinese: {
      message: {
        hello: '你好',
        // home
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
        // class
        searchShop:'搜索宝贝、店铺...',
        // activity
        activity:'活动',
        together:'一起来拼团',
        peopleOrder:'人已拼单',
        inGroup:'拼团中',
        startGroup:'去开团',
        // cart
        shoppingCart:'我的购物车',
        commodity:'商品',
        RecommendedPackage:'推荐套餐',
        NoshoppingCart:'您的购物车还没有宝贝哦',
        buyNow:'快选购看看',
        selectAll:'全选',
        edit:'编辑',
        finish:'完成',
        total:'总计',
        settle:'去结算',
        move:'移入收藏',
        interested:'您可能感兴趣的产品',
        fullReduction:'满减',
        full:'已满',
        orderDiscount:'下单立减',
        giveaway:'赠品',
        delete:'删除',
        //person
        nameAuthentication:'已实名认证',
        benefits:'签到福利',
        member:'超级会员',
        production:'产看权限',
        favorite:'收藏宝贝',
        shop:'关注店铺',
        store:'关注门店',
        footprint:'足迹',
        MyOrde:'我的订单',
        checkOrder:'查看订单',
        payment:'待付款',
        delivered:'待发货',
        pendingReceipt:'待收货',
        completed:'已完成',
        repair:'返修/退货',
        groupOr:'拼团订单',
        packageOr:'套餐订单',
        otherOr:'其他订单',
        PointsAvailable:'可用积分',
        voucher:'优惠卷',
        balance:'余额',
        myService:'我的服务',
        invoice:'我的发票',
        scores:'我的积分',
        mall:'积分商城',
        management:'评价管理',
        settings:'账户设置',
        service:'客服服务',
        report:'举报',
        feedback:'意见反馈',
        collection:'我的收藏',
        openshop:'我要开店',
        ShippingAddress:'收货地址',
        PointsOrder:'积分订单',
        // product
        commodityy:'商品',
        details:'详情',
        attributes:'属性',
        recommend:'推荐',
        frontpage:'首页',
        information:'消息',
        share:'分享',
      }
    },
    Myanmar: {
        message: {
          hello: 'မင်္ဂလာပါ',
          // home
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
          // class
          searchShop:'ဆိုင်ရှာပါ...',
          // activity
          activity:'လှုပ်ရှားမှု',
          together:'အဖွဲ့ဖွဲ့သည်',
          peopleOrder:'ဝယ်ယူထားသောလူဦးရေ',
          inGroup:'အဖွဲ့ထဲမှာ',
          startGroup:'အဖွဲ့တစ်ခုစတင်ရန်',
          // cart
          shoppingCart:'စျေးဝယ်လှည်း',
          commodity:'ကုန်စည်',
          RecommendedPackage:'အကြံပြုထားသော',
          NoshoppingCart:'မင်းရဲ့ဈေးဝယ်လှည်းထဲမှာ မရှိသေးပါ',
          buyNow:'အခုဝယ်ပါ',
          selectAll:'အားလုံးကိုရွေးပါ',
          edit:'ပြင်ဆင်ပါ',
          finish:'ပြီးအောင်',
          total:'စုစုပေါင်း',
          settle:'ငွေရှင်းမည်',
          move:'စိတ်ကြိုက်များသို့ ရွှေ့ပါ',
          interested:'သင်စိတ်ဝင်စားသောထုတ်ကုန်များ',
          fullReduction:'အပြည့်အဝလျှော့ချ',
          full:'ပြည့်နေသည်',
          orderDiscount:'ချက်ခြင်းလျှော့စျေးဖြင့် မှာယူမည်',
          giveaway:'လက်ဆောင်',
          delete:'ဖျက်မည်',
          //person
          nameAuthentication:'အမည်ရင်း စစ်မှန်ကြောင်း အတည်ပြုခြင်း',
          benefits:'ဝင်ရောက်ခံစားခွင့်',
          member:'VIP အဖွဲ့ဝင်',
          production:'ထုတ်လုပ်မှု',
          favorite:'အကြိုက်ဆုံး',
          shop:'ဆိုင်',
          store:'စတိုးဆိုင်',
          footprint:'အရင်အော်ဒါများ',
          MyOrde:'အော်ဒါ',
          checkOrder:'အော်ဒါစစ်ဆေးရန်',
          payment:'ငွေပေးချေမှု',
          delivered:'ပေးပို့ရန်',
          pendingReceipt:'ဆိုင်းငံ့ထား သောပြေစာ',
          completed:'ပြီးပါပြီ',
          repair:'ပြုပြင်/ပြန်လဲ',
          groupOr:'အဖွဲ့လိုက်အော်ဒါ',
          packageOr:'အထုပ်အော်ဒါ',
          otherOr:'အခြားအော်ဒါ',
          PointsAvailable:'သုံးနိုင်သောအမှတ်များ',
          voucher:'ဘောက်ချာ',
          balance:'ငွေလက်ကျန်',
          myService:'ဝန်ဆောင်မှု',
          invoice:'ငါ့ပြေစာ',
          scores:'ငါ့ရမှတ်များ',
          mall:'ပွိုင့်ဈေးဆိုင်',
          management:'အကဲဖြတ်စီမံခန့်ခွဲမှု',
          settings:'အကောင့် ဆက်တင်များ',
          service:'ဧည့်ဝန်ဆောင်မှု',
          report:'အစီရင်ခံစာ',
          feedback:'တုံ့ပြန်ချက်',
          collection:'ကျွန်ုပ်၏ စုဆောင်းမှု',
          openshop:'ဆိုင်ဖွင့်ချင် ပါတယ်',
          ShippingAddress:'ကုန်ပစ္စည်းပို့ ဆောင်ရမည့်လိပ်စာ',
          PointsOrder:'ပွိုင့်ဖြင့်မှာထား သောအော်ဒါ',
          // product
          commodityy:'ကုန်စည်',
          details:'အသေးစိတ်',
          attributes:'အချက်အလက်',
          recommend:'အကြံပြု',
          frontpage:'ရှေ့စာမျက်နှာ',
          information:'သတင်းအချက်အလက်',
          share:'မျှဝေပါ',
        }
    }
  };
  
  const i18n = new VueI18n({
    locale: 'English',
    messages
  });

  export default i18n;