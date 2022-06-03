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
        Summertime:'Copy link',
        QRcode:'QR code',
        WeChat:'WeChat',
        Circle:'Friends',
        QQ:'QQ',
        Weibo:'Weibo',
        copy:'copy',
        QRscan:'QR scan',
        originalPrice:'original price',
        p_specification:'Specification',
        p_discount:'Discount',
        p_full:'full',
        p_reduce:'reduce',
        product_full:'full',
        give_gifts:'give gifts',
        p_quantity:'quantity',
        stocks_last:'While stocks last',
        order_full:'A single order is full',
        immediate_reduction:'immediate reduction',
        send_to:'Send to',
        select_region:'please select the region',
        serve:'Serve',
        Depend_on:'From',
        Responsible_supply:'Responsible for supply',
        exist:'in',
        responsible_delivery:'responsible for delivery',
        Ships_hours:'ships within hours',
        shipping_freight:'Freight',
        shipping_seller:'seller provide free delivery',
        shipping_delivery:'Delivery',
        shipping_free:'Free Shipping',
        delivery_time:'Delivery time',
        after_payment:'After payment',
        ships_days:'Ships within days',
        in_stock:'In stock',
        presale:'Pre-sale items',
        product_reviews:'Product Reviews',
        see_more:'See More',
        business_consultation:'Business Consultation',
        ask:'Ask',
        answer:'Answer',
        no_reply:'No reply yet',
        replied:'Replied',
        no_answer:'No answer yet',
        coupon:'coupon',
        promotion:'promotion',
        meta_used:'yuan can be used',
        validity:'validity period',
        right_now:'get it right now',
        received:'received',
        cancel:'Cancel',
        sure:'Sure',
        combination:'Best combination',
        discount_package:'Discount Package',
        please_choose:'please choose',
        // product => shopInfo
        all_baby:'All baby',
        followers:'Followers',
        description:'Description matches',
        service_attitude:'Service attitude',
        delivery_speed:'Delivery speed',
        view_category:'View category',
        go_shopping:'Go shopping',
        // product => attributepage
        product_name:'Product name',
        download:'Please download on the computer',
        // product => list
        change:'Change',
        recommendation:'Matching package recommendation',
        // product => detailOptions
        selected:'selected',
        length:'Length(m)',
        total:'total',
        buy_now:'Buy now',
        add_to_cart:'Add to cart',
        buy_original:'original price',
        open_purchase:'open group purchase',
        // flashDetail   
        flash_list:'Flash Sale List',
        remaining_time:'Remaining Time',
        sold_purchased:'sold',
        // comfirmOrder
        confirmOrder:'Confirm Order',
        noAddress:'You have not filled in the delivery address, please fill in!',
        confirm_delivery:'delivery fee',
        confirm_coupon:'Choose a coupon',
        com_invoice:'Invoice',
        Invoiced:'Invoiced',
        invoice_required:'No invoice required',
        leave_message:'Leave a message to the business',
        common:'common',
        Items:'Items',
        limited_characters:'Optional: Remarks are limited to 45 characters',
        before_tax:'Total merchandise before tax',
        con_discount:'discount',
        Shipping_total:'Shipping total',
        total_delivery:'total delivery',
        con_coupon:' Coupon',
        Full_reduction:'Full reduction',
        Submit_orders:'Submit Orders',
        real_payment:'payment',
        select_coupon:'Please select a coupon',
        // detailCouponPackage
        List_coupons:'List of coupons',
        available:'available',
        unavailable:'unavailable',
        meta_available:'meta available',
        ok_confirm:'Confirm',
        //Cashier
        order_amount:'order amount',
        current_balance:'current balance',
        Other_payment:'Other payment methods',
        payment_password:'payment password',
        confirm_payment:'confirm payment',
        pay_immediately:'pay immediately',
        Order_Center:'Order Center',
        // invoice
        issue_invoice:'Whether to issue an invoice',
        invoice_type:'invoice type',
        Invoice:'Invoice',
        invoice_header:'Please enter the invoice header',
        invoice_content:'invoice content',
        Invoice_Information:'Invoice Information',
        // address
        address_modify:'Please do not modify the address where you have placed the order. If you want to change the address, please add an entry',
        default:'default',
        address_empty:'The delivery address is empty, add it now!',
        New_shipping:'New shipping address',
        address_managemen:'Shipping address management',
        // new address
        Receiver:'Receiver',
        consignee_name:'Please enter receiver name',
        phone_number:'phone number',
        enter_phone:'Please enter phone number',
        your_area:'your area',
        Address_label:'Address',
        enter_address:'Please enter detailed address',
        default_address:'set as the default address',
        address_save:'save', 
        // edit address
        Edit_address:'Edit shipping address',
        // commentPage
        ProductReviews:'Product Reviews',
        All_reviews:'All reviews',
        Praise:'Praise',
        Average:'Average',
        Negative_Ratings:'Negative Ratings',
        are_pictures:'There are pictures',
        no_comment:'no comment yet',
        // ans
        commodity_consultation:'Commodity consultation',
        user:'user',
        question:'question',
        all_answer:'See all 1 answer',
        ask_questions:'ask questions',
        // shoplist
        Product_list:'Product list',
        No_data:'No more data',
        Loading:'Loading..',
        Store_Category:'Store Category',
        // shopHome
        store_homepage:'Store homepage',
        classification:'Classification',
        Number_fans:'Number of fans',
        Followed:'Followed',
        focus_on:'focus on',
        recommended_products:'Recommended products',
        store_details:'Store details',
        top_categories:'Top Categories',
        contact_seller:'contact seller',
        by_sales:'By sales',
        price:'price',
        by_popularity:'By popularity',
        // shopHeader
        search_shop:'search goods in the shop...',
        // tabHeader
        Shop_Home:'Shop Home',
        Store_dynamics:'Store dynamics',
        // article
        article_sales:'sales',
        newest:'newest',
        item_added:'1 new item added',
        September:'September 9',
        spike:'spike',
        event_over:'The event is over! !',
        // SearchStoreGoods
        product_search:'product search',
        search_baby:'Search this shop baby',
        search_cancel:'Cancel',
        // shopDetails
        product_description:'product description',
        Minute:'Minute',
        business_phone:'business phone',
        shop_code:'Shop QR code',
        license_information:'License information',
        store_introduction:'Store introduction',
        store_opening:'Store opening time',
        Hetian_Yuyuan:'Hetian Yuyuan Branch',
        // paperwork
        network_operator:'Business license information of the mall network operator',
        Company:'Company Name',
        Business:'Business license registration number',
        Legal:'Legal representative phone number',
        Location:'Location of business license',
        Enterprise:'Enterprise registered capital',
        Validity_license:'Validity of business license',
        company_address:'company address',
        business_scope:'Business license business scope',
        // myNews
        my_message:'My Message',
        keep_shopping:'No news yet, keep shopping!',
        // Search
        popular_searches:'Popular searches',
        top_searches:'Top searches are empty!',
        history_search:'History search',
        browsed_any:'You have n၀t browsed any products yet, go shopping!',
        clear_history:'clear history',
        // home=>footer
        front_page:'Front Page',
        classification_footer:'Classification',
        activity_footer:'Activity',
        shopping_cart:'Shopping Cart',
        mine:'Mine',
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
        Summertime:'夏制链接',
        QRcode:'二维码',
        WeChat:'微信好友',
        Circle:'朋友圈',
        QQ:'QQ好友',
        Weibo:'新浪微博',
        copy:'复制',
        QRscan:'QR扫描',
        originalPrice:'原价',
        p_specification:'规格',
        p_discount:'优惠',
        p_full:'满',
        p_reduce:'减',
        product_full:'购满',
        give_gifts:'送赠品',
        p_quantity:'数量',
        stocks_last:'赠完即止',
        order_full:'单笔订单满',
        immediate_reduction:'立减',
        send_to:'送至',
        select_region:'请选择地区',
        serve:'服务',
        Depend_on:'由',
        Responsible_supply:'负责供货',
        exist:'在',
        responsible_delivery:'负责发货',
        Ships_hours:'小时内发货',
        shipping_freight:'运费',
        shipping_seller:'卖家包邮',
        shipping_delivery:'配送',
        shipping_free:'免配送费',
        delivery_time:'发货时间',
        after_payment:'付款后',
        ships_days:'天内发货',
        in_stock:'有现货',
        presale:'预售商品',
        product_reviews:'商品评论',
        see_more:'查看更多',
        business_consultation:'商口咨询',
        ask:'问',
        answer:'答',
        no_reply:'暂无回复',
        replied:'已回复',
        no_answer:'暂无回答',
        coupon:'领券',
        promotion:'促销',
        meta_used:'元可以使用',
        validity:'有效期',
        right_now:'立即领取',
        received:'已领取',
        cancel:'取消',
        sure:'确定',
        combination:'最佳组合',
        discount_package:'优惠套餐',
        please_choose:'请选择',
        // product => shopInfo
        all_baby:'全部宝贝',
        followers:'关注人数',
        description:'描述相符',
        service_attitude:'服务态度',
        delivery_speed:'发货速度',
        view_category:'查看分类',
        go_shopping:'进店逛逛',
        // product => attributepage
        product_name:'商品名称',
        download:'请在电脑端进行下载',
        // product => list
        change:'换一换',
        recommendation:'搭配套餐推荐',
        // product => detailOptions
        selected:'已选',
        length:'长度(米)',
        total:'共计',
        buy_now:'立即购买',
        add_to_cart:'加入购物车',
        buy_original:'原价购',
        open_purchase:'开团购',
        // flashDetail   
        flash_list:'闪购清单',
        remaining_time:'剩余时间',
        sold_purchased:'已购',
        // comfirmOrder
        confirmOrder:'确认订单',
        noAddress:'您还没有填写收货地址，请填写！',
        confirm_delivery:'配送费',
        confirm_coupon:'选择优惠券',
        com_invoice:'开具发票',
        Invoiced:'已开发票',
        invoice_required:'无需发票',
        leave_message:'给商家留言',
        common:'共',
        Items:'件商品',
        limited_characters:'选填：备注限字在45个字以内',
        before_tax:'税前商品总额',
        con_discount:'折优惠',
        Shipping_total:'运费共计',
        total_delivery:'配送共计',
        con_coupon:'优惠券',
        Full_reduction:'满立减',
        Submit_orders:'提交订单',
        real_payment:'实付款',
        select_coupon:'请选择优惠券',
        // detailCouponPackage
        List_coupons:'优惠券列表',
        available:'可用',
        unavailable:'不可用',
        meta_available:'元可用',
        ok_confirm:'确认',
        //Cashier
        order_amount:'订单金额',
        current_balance:'当前余额',
        Other_payment:'其他支付方式',
        payment_password:'支付密码',
        confirm_payment:'确认支付',
        pay_immediately:'立即支付',
        Order_Center:'订单中心',
        // invoice
        issue_invoice:'是否开具发票',
        invoice_type:'发票类型',
        Invoice:'发票抬头',
        invoice_header:'请输入发票抬头',
        invoice_content:'发票内容',
        Invoice_Information:'发票信息',
        // address
        address_modify:'下过订单的地址请不要修改，如想更换地址请添加一条',
        default:'默认',
        address_empty:'收货地址为空,赶快添加吧!',
        New_shipping:'新增收货地址',
        address_managemen:'收货地址管理',
        // new address
        Receiver:'收货人',
        consignee_name:'请输入收货人姓名',
        phone_number:'手机号',
        enter_phone:'请输入手机号',
        your_area:'所在地区',
        Address_label:'详细地址',
        enter_address:'请输入详细地址',
        default_address:'设为默认地址',
        address_save:'保存',
        // edit address
        Edit_address:'编辑收货地址',
        // commentPage
        ProductReviews:'商品评论',
        All_reviews:'全部评价',
        Praise:'好评',
        Average:'中评',
        Negative_Ratings:'差评',
        are_pictures:'有图',
        no_comment:'暂无评论',
        // ans
        commodity_consultation:'商品咨询',
        user:'用户',
        question:'的提问',
        all_answer:'查看全部1个回答',
        ask_questions:'提问',
        // shoplist
        Product_list:'商品列表',
        No_data:'暂无更多数据',
        Loading:'加载中..',
        Store_Category:'店铺分类',
        // shopHome
        store_homepage:'店铺主页',
        classification:'分类',
        Number_fans:'粉丝数',
        Followed:'已关注',
        focus_on:'关注',
        recommended_products:'推荐商品',
        store_details:'店铺详情',
        top_categories:'热门分类',
        contact_seller:'联系卖家',
        by_sales:'按销量',
        price:'价格',
        by_popularity:'按人气',
        // shopHeader
        search_shop:'搜索店内宝贝...',
        // tabHeader
        Shop_Home:'店铺首页',
        Store_dynamics:'店铺动态',
        // article
        article_sales:'销量',
        newest:'上新',
        item_added:'上新1件商品',
        September:'9月9日',
        spike:'秒杀',
        event_over:'活动已结束！！',
        // SearchStoreGoods
        product_search:'商品搜索',
        search_baby:'搜索该店铺宝贝',
        search_cancel:'取消',
        // shopDetails
        product_description:'商品描述',
        Minute:'分',
        business_phone:'商家电话',
        shop_code:'店铺二维码',
        license_information:'证照信息',
        store_introduction:'店铺简介',
        store_opening:'开店时间',
        Hetian_Yuyuan:'和田余元分店',
        // paperwork
        network_operator:'商城网点经营者营业执照信息',
        Company:'企业名称',
        Business:'营业执照注册号',
        Legal:'法定代表人电话',
        Location:'营业执照所在地',
        Enterprise:'企业注册资金',
        Validity_license:'营业执照有效期',
        company_address:'公司地址',
        business_scope:'营业执照经营范围',
        // myNews
        my_message:'我的消息',
        keep_shopping:'还没有消息哦，继续逛逛吧！',
        // Search
        popular_searches:'热门搜索',
        top_searches:'热门搜索为空!',
        history_search:'历史搜索',
        browsed_any:'你还没浏览过任何商品哦，快去逛逛吧！',
        clear_history:'清空历史记录',
        // home=>footer
        front_page:'首页',
        classification_footer:'分类',
        activity_footer:'活动',
        shopping_cart:'购物车',
        mine:'我的',
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
          Summertime:'Copy link',
          QRcode:'QR ကုဒ်',
          WeChat:'WeChat',
          Circle:'သူငယ်ချင်းများ',
          QQ:'QQ',
          Weibo:'Weibo',
          copy:'ကော်ပီ',
          QRscan:'QR ဖတ်ပါ',
          originalPrice:'မူရင်းစျေးနှုန်း',
          p_specification:'သတ်မှတ်ချက်',
          p_discount:'လျှော့စျေး',
          p_full:'အပြည့်',
          p_reduce:'လျှော့ချပါ',
          product_full:'အပြည့်',
          give_gifts:'လက်ဆောင်​ပေးမည်',
          p_quantity:'ပမာဏ',
          stocks_last:'ကုန်ပစ္စည်းလက်ကျန်များ',
          order_full:'ပစ္စည်းတစ်ခုတည်းမှာယူမှု ပြည့်သွားပါပြီ',
          immediate_reduction:'ချက်ချင်းလျှော့ချ',
          send_to:'သို့ ပေးပို့ပါ',
          select_region:'ကျေးဇူးပြု၍ ဒေသကိုရွေးချယ်ပ',
          serve:'Serve',
          Depend_on:'မှ',
          Responsible_supply:'ထောက်ပံ့ရေးတာဝန်ယူသည်',
          exist:'၏',
          responsible_delivery:'ပေးပို့​ရေးတာဝန်ယူသည်',
          Ships_hours:'နာရီအတွင်းပို့ဆောင်ပေးပါသည်',
          shipping_freight:'ကုန်စည်ပို့ဆောင်ရေး',
          shipping_seller:'ရောင်းသူအတွက်အခမဲ့ပို့ဆောင်ပေးပါသည်',
          shipping_delivery:'ပေးပို့ခြင်',
          shipping_free:'အခမဲ့ပို့ပေးသည်',
          delivery_time:'ပို့ဆောင်ချိန်',
          after_payment:'ငွေပေးချေပြီးနောက်',
          ships_days:'ရက်ပိုင်းအတွင်း ပို့ဆောင်ပေးပါသည်',
          in_stock:'ကုန်ပစ္စည်းလက်ဝယ်ရှိ',
          presale:'ကြိုရောင်းပစ္စည်းများ',
          product_reviews:'ကုန်ပစ္စည်းသုံးသပ်ချက်များ',
          see_more:'ပိုကြည့်',
          business_consultation:'စီးပွားရေး တိုင်ပင်ဆွေးနွေးခြင်း',
          ask:'မေး',
          answer:'ဖြေ',
          no_reply:'အကြောင်းမပြန်သေးပါ',
          replied:'အ​ကြောင်းပြန်သည်',
          no_answer:'အဖြေမရှိသေးပါ',
          coupon:'ကူပွန်',
          promotion:'ပရိုမိုးရှင်း',
          meta_used:'ယွမ် ကိုသုံးနိုင်သည်',
          validity:'သက်တမ်းကာလ',
          right_now:'အခုပဲ ရယူလိုက်ပါ',
          received:'ရရှိခဲ့သည်',
          cancel:'မလုပ်တော့ပါ',
          sure:'သေချာပါတယ်',
          combination:'အကောင်းဆုံးပေါင်းစပ်',
          discount_package:'လျှော့စျေးPackage',
          please_choose:'ရွေးချယ်ပါ',
          // product => shopInfo
          all_baby:'ပစ္စည်းအားလုံး',
          followers:'နောက်လိုက်များ',
          description:'ဖော်ပြချက် ကိုက်ညီမှု',
          service_attitude:'ဝန်ဆောင်မှုသဘောထား',
          delivery_speed:'ပေးပို့မှုမြန်နှုန်း',
          view_category:'အမျိုးအစားကိုကြည့်ပါ',
          go_shopping:'စျေးဝယ်သွားပါ',
          // product => attributepage
          product_name:'ထုတ်ကုန်အမည်',
          download:'ဒေါင်းလုဒ်လုပ်မည်',
          // product => list
          change:'ပြောင်းလဲမည်',
          recommendation:'ကိုက်ညီသော ပက်ကေ့ဂျ် ထောက်ခံချက်',
          // product => detailOptions
          selected:'ရွေးချယ်ထားသည်',
          length:'အလျား (မီတာ)',
          total:'စုစုပေါင်း',
          buy_now:'အခုဝယ်ပါ',
          add_to_cart:'စျေးဝယ်လှည်းသို့ထည့်ပါ',
          buy_original:'မူရင်းစျေးနှုန်းဖြင့်ဝယ်မည်',
          open_purchase:'အုပ်စုလိုက်ဝယ်ယူမှုဖွင့်ပါ',
          // flashDetail   
          flash_list:'flash sale စာရင်း',
          remaining_time:'လက်ကျန်အချိန်',
          sold_purchased:'ဝယ်ထားတယ်',      
          // comfirmOrder
          confirmOrder:'အော်ဒါအတည်ပြု',
          noAddress:'ပေးပို့ရမည့်လိပ်စာကို မဖြည့်ရသေးပါ၊ကျေးဇူးပြု၍ဖြည့်ပါ။',
          confirm_delivery:'ပို့ဆောင်ခ',
          confirm_coupon:'ကူပွန်ကို ရွေးပါ',
          com_invoice:'ပြေစာ',
          Invoiced:'ပြေစာထုတ်ပြီး',
          invoice_required:'ငွေတောင်းခံလွှာ မလိုအပ်ပါ',
          leave_message:'လုပ်ငန်းကို မက်ဆေ့ချ် ထားခဲ့ပါ။',
          common:'ဘုံ',
          Items:'ပစ္စည်းများ',
          limited_characters:'ရွေးချယ်နိုင်သည်- မှတ်ချက်များကို စာလုံးရေ 45 လုံးအထိ ကန့်သတ်ထားသည်။',
          before_tax:'အခွန်မဆောင်မီ စုစုပေါင်းကုန်သွယ်',
          con_discount:'လျှော့စျေး',
          Shipping_total:'ပို့ဆောင်မှုစုစုပေါင်း',
          total_delivery:'စုစုပေါင်းပေးပို့မှု',
          con_coupon:'ကူပွန်',
          Full_reduction:'အပြည့်အဝလျှော့ချ',
          Submit_orders:'အော်ဒါအတည်ပြု',
          real_payment:'ငွေပေးချေမှု',
          select_coupon:'ကူပွန်ကို ရွေးပါ',
          // detailCouponPackage
          List_coupons:'ကူပွန်များစာရင်း',
          available:'ရရှိနိုင်',
          unavailable:'မရရှိနိုင်ပါ။',
          meta_available:'အသုံးပြုနိုင်​သောယွမ်',
          ok_confirm:'အတည်ပြုပါ',
          //Cashier
          order_amount:'မှာယူမှုပမာဏ',
          current_balance:'လက်ကျန်ငွေ',
          Other_payment:'အခြားငွေပေးချေမှုနည်းလမ်းများ',
          payment_password:'ငွေပေးချေမှု စကားဝှက်',
          confirm_payment:'ငွေပေးချေမှုကိုအတည်ပြုပါ',
          pay_immediately:'ချက်ချင်းပေးဆောင်ပါ',
          Order_Center:'အော်ဒါစင်တာ',
          // invoice
          issue_invoice:'ပြေစာထုတ်ပေးမှာလား',
          invoice_type:'ငွေတောင်းခံလွှာအမျိုးအစား',
          Invoice:'ပြေ',
          invoice_header:'ကျေးဇူးပြု၍ ငွေတောင်းခံလွှာခေါင်းစီးကို ထည့်ပါ',
          invoice_content:'ပြေစာ အကြောင်းအရာ',
          Invoice_Information:'ပြေစာအချက်အလက်',
          // address
          address_modify:'ကျေးဇူးပြု၍ သင်အော်ဒါတင်ထားသည့်လိပ်စာကို မပြုပြင်ပါနှင့်။ လိပ်စာပြောင်းလိုပါက ကျေးဇူးပြု၍ အသစ်ထည့်သွင်းပါ',
          default:'ပုံသေ',
          address_empty:'ပေးပို့ရမည့်လိပ်စာမှာဗလာဖြစ်ပြီး ယခုထည့်ပါ',
          New_shipping:'ပို့ဆောင်ရေးလိပ်စာအသစ်',
          address_managemen:'ပစ္စည်းလက်ခံလိပ်စာစီမံခန့်ခွဲမှု',
          // new address
          Receiver:'လက်ခံသူ',
          consignee_name:'ကျေးဇူးပြု၍ကုန်စည်လက်ခံသူအမည်ထည့်သွင်းပါ',
          phone_number:'ဖုန်းနံပါတ်',
          enter_phone:'ကျေးဇူးပြု၍ ဖုန်းနံပါတ်ထည့်ပါ',
          your_area:'သင်၏လိပ်စာ',
          Address_label:'လိပ်စာ',
          enter_address:'လိပ်စာအသေးစိတ်ထည့်ပါ',
          default_address:'မူရင်းလိပ်စာအဖြစ် သတ်မှတ်ပါ',
          address_save:'သိမ်းဆည်းပါ',
          // edit address
          Edit_address:'ပို့ဆောင်ရေးလိပ်စာကို တည်းဖြတ်ပါ',
          // commentPage
          ProductReviews:'ထုတ်ကုန်သုံးသပ်ချက်များ',
          All_reviews:'အားလုံး',
          Praise:'ကောင်းသော',
          Average:'ပုံမှန်',
          Negative_Ratings:'မကောင်းသော',
          are_pictures:'ပုံများ',
          no_comment:'comment မရှိသေးပါ',
          // ans
          commodity_consultation:'ကုန်စည်ညှိနှိုင်းမှု',
          user:'အသုံးပြုသူ',
          question:'၏မေးခွန်း',
          all_answer:'အဖြေ 1 ခုလုံးကို ကြည့်ပါ',
          ask_questions:'မေးခွန်းများမေးပါ',
          // shoplist
          Product_list:'ထုတ်ကုန်စာရင်း',
          No_data:'ဒေတာမရှိတော့ပါ',
          Loading:'အဝိုင်းလည်နေသည်',
          Store_Category:'ဆိုင်အမျိုးအစား',
          // shopHome
          store_homepage:'စတိုးဆိုင်',
          classification:'အမျိုးအစားခွဲခြားခြင်း',
          Number_fans:'ပရိသတ်အရေအတွက်',
          Followed:'Followed',
          focus_on:'အာရုံစိုက်',
          recommended_products:'အကြံပြုထားသော ထုတ်ကုန်များ',
          store_details:'စတိုးဆိုင်အသေးစိတ်',
          top_categories:'ထိပ်တန်း အမျိုးအစားများ',
          contact_seller:'ရောင်းချသူ ကိုဆက်သွယ်ပါ',
          by_sales:'အရောင်းအားဖြင့်',
          price:'စျေးနှုန်း',
          by_popularity:'ကျော်ကြားမှုအားဖြင့်',
          // shopHeader
          search_shop:'ဆိုင်တွင် ကုန်ပစ္စည်းများ ရှာဖွေပါ...',
          // tabHeader
          Shop_Home:'ဆိုင်၏ပင်မစာမျက်နှာ',
          Store_dynamics:'ဆိုင်၏လှုပ်ရှားမှုများ',
          // article
          article_sales:'အရောင်း',
          newest:'နောက်ဆုံးပေါ်',
          item_added:'ပစ္စည်းအသစ် 1 ခု ထပ်ထည့်ထားသည်',
          September:'စက်တင်ဘာ ၉',
          spike:'spike',
          event_over:'ပွဲပြီးပါပြီ။ !',
          // SearchStoreGoods
          product_search:'ထုတ်ကုန်ရှာဖွေရေး',
          search_baby:'ဒီဆိုင်မှပစ္စည်းကိုရှာပါ။',
          search_cancel:'မလုပ်ပါ',
          // shopDetails
          product_description:'ကုန်ပစ္စည်းအကြောင်းအရာ',
          Minute:'မိနစ်',
          business_phone:'လုပ်ငန်းသုံးဖုန်း',
          shop_code:'စတိုးဆိုင်QRကုဒ်',
          license_information:'လိုင်စင်အချက်အလက်',
          store_introduction:'စတိုးဆိုင်မိတ်ဆက်',
          store_opening:'ဆိုင်ဖွင့်ချိန်',
          Hetian_Yuyuan:'Hetian Yuyuan ဆိုင်ခွဲ',
          // paperwork
          network_operator:'ကုန်တိုက်ကွန်ရက်အော်ပရေတာ၏ လုပ်ငန်းလိုင်စင်အချက်အလက်',
          Company:'ကုမ္ပဏီအမည်',
          Business:'လုပ်ငန်းလိုင်စင် မှတ်ပုံတင်အမှတ်',
          Legal:'တရားဝင်ကိုယ်စားလှယ်ဖုန်းနံပါတ်',
          Location:'လုပ်ငန်းလိုင်စင်တည်နေရာ',
          Enterprise:'လုပ်ငန်းမှတ်ပုံတင် အရင်းအနှီး',
          Validity_license:'လုပ်ငန်းလိုင်စင်သက်တမ်း',
          company_address:'ကုမ္ပဏီလိပ်စာ',
          business_scope:'လုပ်ငန်းလိုင်စင် လုပ်ငန်းနယ်ပယ်',
          // myNews
          my_message:'ငါ့မက်ဆေ့',
          keep_shopping:'သတင်းမရသေးပါ၊ စျေးဝယ်ပါ။',
          // Search
          popular_searches:'လူကြိုက်များသောရှာဖွေမှုများ',
          top_searches:'ထိပ်တန်းရှာဖွေမှုများမရှိသေးပါ။',
          history_search:'ပြန်လည်ရှာဖွေမှု',
          browsed_any:'သင်သည် မည်သည့်ထုတ်ကုန်ကိုမျှ မကြည့်ရသေးပါ၊ စျေးဝယ်သွားပါ။',
          clear_history:'ရှင်းလင်းသောမှတ်တမ်း',
          // home=>footer
          front_page:'ရှေ့စာမျက်နှာ',
          classification_footer:'အမျိုးအစားခွဲခြားခြင်း',
          activity_footer:'လှုပ်ရှားမှု',
          shopping_cart:'ဈေးဝယ်လှည်း',
          mine:'ကျွန်ုပ်ဟာ',
          }
    }
  };
  
  const i18n = new VueI18n({
    locale: 'English',
    messages
  });

  export default i18n;