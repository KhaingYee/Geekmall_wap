//const request =  "http://192.168.123.6/shopsn_b2b2c_mobile_api/index.php/"
//const request =  "http://b2b2c.zybv.cn/"
//const request =  "http://api.shopsn.net/"
// const request = 'http://api.shopsn.cn/wap/index.php/';  // thinkphp version 3.2
// const request = 'http://api.shopsn.net/wap/public/index.php/'; // thinkphp version 6.0

// http://api.shopsn.cn/wap/index.php/

// const userModuleIndex = "http://api.shopsn.cn/wap/admin.php/";
// const userModuleIndex = "http://api.shopsn.net/wap/public/admin.php/"; // thinkphp version 6.0
// const uploadImage = 'upload.php/';

const config = {
    //客服配置
    serviceConfig: request + "StoreHelp/customerService",
    customerservice1: request + 'Service/serviceList',  // 客服列表

    //登录注册模块
    logOut: userModuleIndex + 'Register/logOut', //退出登录
    verCode: request + "Register/registerSendMsg", // 短信发送
    register: request + "Register/register", // 用户注册
    getloginMethod: request + "Register/loginMethod",
    getSendMailbox: request + "Register/sendMailbox",
    sendMailboxByPassword: request + "Register/sendMailboxByPassword",
    GoogleLogin: request + "Google/login",
    FacebookLogin: request + "Facebook/login",
    bindingEmail: request + "Facebook/bindingEmail",
    login: request + "Register/loginAccount", // 账户登录
    qqThirdParty: request + 'QQThirdPartyLogin/qqLogin',
    sms: request + "Register/smsLoginSend", // 短信登录--发送短信
    smsLogin: request + "Register/smsLogin", // 短信登录
    thiredCheckMobile: request + 'ThiredBuildAccount/checkMobile', //第三方登录验证手机号,
    bindAccount: request + 'ThiredBuildAccount/bindAccount', // 第三方登录绑定帐号

    backPwdSendSms: request + "Register/backPwdSendSms", //找回密码--短信发送
    backPwd: request + "Register/backPwd", //找回密码
    getImageList: request + 'GoodsImage/getImageList', // 获取商品图片

    // 用户资料（个人中心账号相关）
    userinfo: request + 'User/getUserInfo', // 个人信息获取
    editUserInfo: userModuleIndex + 'User/editUserInfo', //修改个人资料
    uploadPicture: userModuleIndex + 'User/uploadPicture', //上传头像
    resetPassword: request + "User/modifyPassword", //修改密码
    editMobileSendSms: userModuleIndex + 'User/editMobileSendSms', // 修改手机号绑定-发送验证码
    editMobile: userModuleIndex + 'User/editMobile', // 修改手机号绑定

    //个人中心（积分）
    rule: userModuleIndex + 'Integral/rule', // 积分规则
    integralLog: request + 'Integral/integralLog', // 积分明细
    userIntegral: userModuleIndex + 'User/getIntegral', // 我的积分

    //个人中心（用户消息控制器）
    Newslist: userModuleIndex + 'News/lists', // 消息列表
    Newslist1: userModuleIndex + 'StoreHelp/storeHelpList', //优惠券 page
    Newsinfo: userModuleIndex + 'News/info', // 消息详情


    // 首页
    home: request + "HomeIndex/home", // 首页信息获取
    aboutEtcetera: request + "IntnetInformation/aboutEtcetera",
    readLogo: request + "IntnetInformation/readLogo",
    advertise: request + "HomeIndex/getStoreAd",
    indexFloor: request + "GoodsClass/indexFloor", //首页楼层
    getAd: request + "Ad/getAd", //首页楼层中间广告
    getPanicGoods: request + 'Panic/getPanicGoods', //抢购
    panicGoodsDetail: request + 'Panic/panicGoodsDetail', //抢购详情
    promotions: request + "Promotion/promotions", // 首页信息获取
    recommendGoodClass: request + 'HomeIndex/recommendGoodClass', // 首页导航分类获取
    brandList: request + 'Brand/brandList', // 品牌列表接口
    brandDetail: request + 'Brand/brandDetail', // 品牌详情接口

    cityList: request + 'Region/regionLists', // 城市四级联动
    StyColor: request + "IntnetInformation/color",
    // 地址模块
    addAddress: request + 'UserAddress/addAddress', // 新增地址
    getDefaultAddress: userModuleIndex + 'UserAddress/getDefaultAddress', // 默认收货地址
    getDefault: request + 'UserAddress/getDefault', // 默认收货地址
    editAddress: request + 'UserAddress/editAddress', // 编辑收货地址
    addressInfo: request + 'UserAddress/addressInfo', //收货地址获取
    addressLists: request + 'UserAddress/addressLists', // 收货地址列表 page
    addressDelete: userModuleIndex + 'UserAddress/addressDelete', // 收货地址删除


    // 商店
    getAllGoods: request + 'GoodsClass/getClassGoods', // 商品分类列表
    oneClassGoods: request + 'Goods/oneClassGoods', //楼层获取--商品列表
    getFirstId: request + 'GoodsClass/getFirstId', // 一级分类ID
    getOtherClass: request + 'GoodsClass/getOtherClass', // 二级分类
    goodInfo: request + 'Goods/goodInfo', // 商品详情 
    seckillDetail: request + 'Promotion/seckillDetail',
    newArrivals: request + 'Goods/newArrivals',
    hotSellingGoods: request + 'Goods/hotSellingGoods',
    seckillList: request + 'Promotion/seckillList',
    timeList: request + 'Promotion/timeList',
    getSeckillList: request + 'Promotion/getSeckillList',
    guessLove: request + 'GuessYouLike/guessYouLike', // 猜你喜欢
    //	goodSpecs: request + 'Goods/goodSpecs', // 规格
    goodsComboMatch: request + 'GoodsCombo/matchGood', // 最佳搭配套餐
    matchGood: request + 'GoodsPackage/packageSub', // 最佳搭配套餐
    accessories: request + 'GoodsCombo/accessories', // 搭配配件
    package: request + 'GoodsPackage/packageList', // 优惠套餐
    packageList: request + 'GoodsPackage/package',
    shopInfo: request + 'Store/shopInfo', // 商品 归属店铺信息
    newGoods: request + 'Store/NewGoods',
    ShopGoodClass: request + 'StoreBindGoodsClass/getBindGoodsClass', //店铺分类
    storeClass: request + 'StoreBindGoodsClass/storeClass',
    goodsProblems: request + 'GoodsConsultation/consultationData', // 商品咨询
    userCommitProblem: request + 'GoodsConsultation/userCommitProblem', // 提交咨询
    goodsStoreList: request + 'Store/goodsStoreList', //商品界面店铺列表

    //拼团
    //activity
    pluzzgood: request + "Promotion/groupPurchase", 
    confirmGroupPay : request + "PayOrderGroup/initiatePayment",
    payOrderGroupInitiatePayment: request + 'PayOrderByGroup/initiatePayment',
    groupBuySuccessful : request + "OrderGroup/successful",
    //asssembleproduct.vue
    promotionGoodsDetail: request + "Promotion/getGoodsDetail", 
    Assemble: request + "Promotion/getLackingPeopleGroupBuy",
    // goodsevaluate.vue
    sereEvaluateNum: request + "OrderComment/getAllCommentsCount", 
    //store/evaluate.vue
    getShopComment: request + "Shop/getShopComment", 
    getShopCommentCount: request + "Shop/getShopCommentCount", 
    //activityOrder.vue
    panicCartGoodsDetail: request + "Promotion/groupBuyCartGoodsDetail", 
    bargainGoodsInfo: request + "Promotion/bargainGoodsInfo", 
    generateOrder: request + "OrderGroup/generateOrder", 

    bargainOrder: request + "Promotion/bargainOrder", //正在砍价中
    cutprice: request + "Promotion/bargain", //砍价商品
    // puzzleSuccess.vue
    orderGroupLeagueMember: request + "OrderGroup/orderGroupLeagueMember",
    // puzzleOrder.vue
    getOrderGroup: request + "OrderGroup/getOrderGroup", 
    //seckill.vue
    getSeckillTimeList: request + "Promotion/secKillPage", 
    getSeckillcommodity: request + "Promotion/pointSecKill",
    //logIn.vue
    wxLogin: request + "WeChat/wxLogin", 
    //cutPrice.vue
    bargainInfo: request + "Promotion/bargainInfo", 
    //puzzleOrderDetail.vue
    cancellationOfOrder: request + "OrderGroup/cancellationOfOrder",
    orderGroupDetail: request + "OrderGroup/orderGroupDetail",

    cityList: request + 'Region/regionLists', // 城市四级联动

    getShopAddress: request + "Shop/getShopAddress",//搜索分类

    shopLongitudeAndLatitude: request + "Store/shopLongitudeAndLatitude",//地图页获取门店信息

    //个人中心菜单模块
    // 评价
    myComment: request + 'Pcenter/myComment', // 我的评价
    getAllCommentsCount: request + 'OrderComment/getAllCommentsCount', // 评价数量
    getAllCommentContent: request + 'OrderComment/getAllCommentContent', // 评价内容
    myCouponLists: request + 'CouponList/myCouponLists', //优惠券 page
    CouponSendList: request + 'Coupon/couponSendList',
    // couponReceiveBehavior: request + 'CouponReceive/couponReceiveBehavior',
    couponReceiveBehavior: request + 'Coupon/couponReceiveBehavior',

    // 意见
    feedback: userModuleIndex + 'FeedBack/feedback', // 意见反馈
    feedbacktype: userModuleIndex + 'FeedBack/feedBackType', // 意见反馈類型
    onlineMessage: request + 'Problem/onlineMessage', // 在线留言

    // 足迹
    deleteFootprint: userModuleIndex + 'Pcenter/deleteFootprint', // 清除我的足迹
    myFootprint: request + 'Pcenter/myFootprint', //我的足迹

    //公告详情
    announcement_list: request + 'HomeIndex/announcementInfo', //公告

    //客服问题
    helpClass: request + 'StoreHelp/helpClass', //问题分类
    helpList: request + 'StoreHelp/helpList', //问题列表
    helpInfo: request + 'StoreHelp/helpInfo', //问题详情

    // 购买商品
    orderBegin: request + 'Order/orderBegin', // 立即购买
    orderBeginFromGood: request + 'GeneratingOrder/orderBeginFromGood', //立即购买 -- 直接购买 (在商品列表)
    orderBeginFromPanicGood: request + 'GeneratingOrder/orderBeginFromPanicGood', //抢购 -- 直接购买 (在商品列表)
    cartGoodsDetail: request + 'Goods/cartGoodsDetail', //立即购买 -- 获取商品详情 (在商品列表)
    seckillBuyDetail: request + 'Promotion/seckillBuyDetail',
    panicBuy: request + 'Panic/panicCartGoodsDetail', //抢购确认订单页获取数据
    // cartGoodsDetail: request + 'GoodsCart/cartGoodsDetail', //立即购买 -- 获取商品详情 (在商品列表)
    search: request + 'GoodsClass/search', // 搜索宝贝
    hotSearch: request + 'Goods/hotSearch', // 热门搜索
    goodSpecsByGoodsChildren: request + 'Goods/goodSpecsByGoodsChildren', // 规格参数
    //	getGoodInfo: request + 'Goods/getGoodInfo', // 商品属性
    getGoodInfo: request + 'Goods/goodAttr', //商品属性
    getDownloadZip: request + 'GoodsDetail/downloadZip',
    getGoodsDetail: request + 'GoodsDetail/getGoodsDetail', // 图文详情
    keyWordSearch: request + 'HomeIndex/keyWordSearch', //搜索商品
    getSearchList: request + 'Brand/getSearchList',
    getOneClassGoodsSearch: request + 'Brand/getOneClassGoodsSearch',
    //确认订单

    // 店铺相关
    getStoreList: request + 'Store/getStoreList', // 首页店铺列表
    storeHome: request + 'Store/storeHome', // 店铺首页
    storeHotClass: request + 'Store/storeHotClass', // 店铺热门分类
    storeGoodsAll: request + 'Store/storeGoodsAll', // 店铺全部宝贝
    lookShopGoodClass: request + 'GoodsClass/lookShopGoodClass', //查看店铺分类
    storeBanner: request + 'StoreAdv/getBanner', //店铺banner
    storeIrregular: request + 'StoreAdv/getIrregular', //店铺不规则图片
    buttonAdv: request + 'StoreAdv/getButton', //店铺首页最下面广告
    getRecommondGoods: request + "Goods/getRecommondGoods", //店铺推荐商品
    storeDynamic: request + 'Store/storeDynamic', // 店铺动态
    shopDetails: request + 'Store/shopDetails', // 店铺详情
    getAllInvoice: request + 'InvoiceType/getAllInvoice', // 获取发票信息
    attenStore: request + 'Store/attenStore', // 关注店铺
    cancelAttenStore: request + 'Store/cancelAttenStore', // 取消关注
    indexNavLists: request + 'HomeIndex/indexNavLists', // 首页店铺导航菜单
    shopLicense: request + 'Store/shopLicense', // 首页店铺导航菜单

    // 积分
    integralGoodsList: request + 'IntegralGoods/integralGoodsList', // 积分兑换列表
    integralGoodInfo: request + 'IntegralGoods/integralGoodInfo', // 积分商品详情
    confirmExchange: request + 'GeneratingOrderIntegral/confirmExchange', // 确认兑换
    confirmPay: request + 'PayOrderByIntegral/initiatePayment', // 立即支付
    integralGoodDetails: request + 'IntegralGoods/integralGoodDetails', // 积分商品详情--获取数据
    myConfirm: request + 'OrderIntegral/myConfirm', // 我的兑换
    integralGoodsInfo: request + 'OrderIntegral/integralGoodsInfo', // 积分兑换 - 订单详情
    confirmGet: request + 'OrderIntegral/confirmGet', // 确认收货
    cancelOrder: request + 'Order/cancelOrder', // 取消普通订单
    cancelIntegral: request + 'OrderIntegral/cancelOrder', // 取消积分订单
    delOrder: request + 'OrderIntegral/delOrder', // 删除积分订单
    orderNewBuy: request + 'OrderIntegral/orderNewBuy', //再次购买

    // 客服中心
    articleLists: request + 'Article/lists', // 文章列表
    articleInfo: request + 'Article/info', // 文章详情
    categoryLists: request + 'Article/categoryLists', // 文章分类

    // 我的收藏
    myCollection: request + 'Collection/myCollection', // 收藏的宝贝
    cancelCollectionGood: userModuleIndex + 'Collection/cancelCollectionGood', //取消收藏
    collectShops: request + 'Collection/collectShops', // 我关注的店铺,
    addCollection: request + 'Collection/addCollection', // 点击收藏

    //购物车
    addGoodToCart: request + 'GoodsCart/addGoodToCart', //添加购物车
    delGoodsCart: request + 'GoodsCart/delGoodsCart', //删除商品
    cartGoodsList: request + 'GoodsCart/cartGoodsList', //购物车列表
    cartAddCollection: request + 'GoodsCart/cartAddCollection', //购物车去收藏
    userBuyCartGoods: request + 'GoodsCart/userBuyCartGoods', //购物车去结算 -- 获取商品信息 (新)
    cartNumModify: request + 'GoodsCart/cartNumModify', //购物车商品数量修改
    cartNumPlus: request + 'GoodsCart/cartNumPlus', //购车商品数量加
    cartNumReduce: request + 'GoodsCart/cartNumReduce', //购物车商品数量减
    goBuy: request + 'GeneratingOrder/buildOrderByCart', //购物车去结算

    //套餐购物车
    cartPackageList: request + 'GoodsPackageCart/cartPackageList', //购物车-套餐商品列表
    cartPackageDel: request + 'GoodsPackageCart/cartPackageDel', //删除购物车套餐
    cartPackageNumPlus: request + 'GoodsPackageCart/cartNumPlus', //套餐购物车加1
    cartPackageNumReduce: request + 'GoodsPackageCart/cartNumReduce', //套餐购物车减1
    cartPackageNumModify: request + 'GoodsPackageCart/cartNumModify', //套餐购物车数量修改
    cartPackagetoSettleAccounts: request + 'GoodsPackageCart/toSettleAccounts', //套餐购物车去购买
    cartPackageAddGoodsAll: request + 'GoodsCart/addGoodsAll', //多个商品添加购物
    cartPackageAddCart: request + 'GoodsPackageCart/addCart', //套餐添加购物车
    cartPackageBuyNow: request + 'GoodsCombo/goodsComboBuyNow', //多个商品立即购买
    orderBeginAll: request + 'GeneratingOrder/partsBuyNow', //配件创建订单
    purchaseImmediately: request + 'GoodsPackage/cartPackageBuyNow', //套餐商品立即购买
    createsetMealorOder: request + 'OrderPackage/orderBegin', //套餐商品创建订单
    orderBeginByCart: request + 'OrderPackage/orderBeginByCart', //购物车套餐商品创建订单
    orderPackageBuyPay: request + 'PayOrderByPackage/initiatePayment', //套餐支付
    cartPackageInvoices: request + 'OrderPackageInvoice/invoicesOrderAdd', //套餐发票保存

    //我的钱包
    my_wallet: request + 'MyWallet/myWalletMoney',
    walletDetail: request + 'MyWallet/walletMoneyDetail',
    balanceRecharge: userModuleIndex + 'Recharge/balanceRecharge', //余额充值
    distill: userModuleIndex + 'MyWallet/distill', //提现
    makeDistill: userModuleIndex + 'MyWallet/makeDistill', // 提现


    //企业入驻
    uploudCompanyImage: request + 'StoreJoinCompany/uploudCompanyImage', //填写入驻资料– 企业营业执照
    uploadOrganization: request + 'StoreJoinCompany/uploadOrganization', //填写入驻资料– 组织机构代码
    // storeJoinCompany: request + 'StoreJoinCompany/storeJoinCompany', //开户银行信息
    // uploadImage: request + 'UploadImage/uploadImage', //上传图片
    uploadImage: URL + uploadImage + 'UploadImage/uploadImage', //上传图片
    uploadVoucher: request + 'Image/uploadVoucher',
    storeBank: request + 'StoreCompanyBankInformation/storeBank', //银行信息
    storeClasses: request + 'StoreClass/storeClasses', //店铺分类
    getShopLevel: request + 'StoreGrade/getShopLevel', //店铺等级分类
    perfectInfo: request + 'StoreInformation/perfectInfo', //入驻提交--企业
    // storeJoinCompany: request + 'StoreJoinCompany/storeJoinCompany', //填写入驻资料– 开户银行信息
    CompanyStoreAduitProgress: userModuleIndex + 'StoreJoinCompany/getStoreByUser', //企业入驻进度查询
    storeJoinCompany: request + 'StoreJoinCompany/storeJoinCompany', //企业前三步合并一个请求

    //入驻验证
    isCheckIn: request + 'CanICheckIn/isCheckIn', //个人企业入驻验证

    //  个人入驻
    enterBankInfo: request + 'StorePerson/enterBankInfo', //个人入驻-填写结算账号信息
    enterRunInfo: request + 'StorePerson/enterRunInfo', //入驻提交--个人
    nextClassId: request + 'GoodsClass/nextClassId', //个人入驻获取下级分类
    personEnter: request + 'StorePerson/personEnter', //个人入驻-添加店铺和联系人信息
    enterCardInfo: request + 'StorePerson/enterCardInfo', //个人入驻- 提交身份证信息
    openShop: userModuleIndex + '/OpenShopPay/openShop', //开店支付
    PersonStoreAduitProgress: userModuleIndex + 'StorePerson/getStoreByUser', //个人入驻进度查询
    getPayInfo: userModuleIndex + 'StoreInformation/getPayInfo', //审核成功去支付
    standardOfInvestment: request + 'StoreHelp/standardOfInvestment', //入驻标准
    enterFlow: request + 'StoreHelp/enterFlow', //入驻流程
    rulesOfCooperation: request + 'StoreHelp/rulesOfCooperation', //合作细节
    StoreHelp: request + 'StoreHelp/storeHelp', //协议详情内容

    //订单
    orderDetail: request + 'Order/orderDetail', //订单详情
    orderListAll: request + 'Order/orderListAll', //全部订单
    pendingPayment: request + 'Order/pendingPayment', //待付款
    pendingDelivery: request + 'Order/pendingDelivery', //待发货
    goodsToBeReceived: request + 'Order/goodsToBeReceived', //待收货
    toBeEvaluated: request + 'Order/toBeEvaluated', //待评价
    haveBeenCancelled: request + 'Order/haveBeenCancelled', //已取消
    completed: request + 'Order/completed', //已完成
    orderInfoReturnGoods: request + 'Order/orderInfoReturnGoods', //申请售后获取订单商品信息
    progressQueryList: request + 'OrderReturnGoods/progressQueryList', //申请列表 -退货
    progressQueryList2: request + 'OrderExchangeGoods/progressQueryList', //申请列表--换货
    OrderReturnGoodsBack: request + 'OrderReturnGoods/searchOrder', //申请售后搜索--退货
    OrderExchangeGoodsBack: request + 'OrderExchangeGoods/searchOrder', //申请售后搜索--换货
    progressQuery: request + 'OrderReturnGoods/progressQuery', //申请列表--进度查询
    orderInfoCommont: request + 'Order/orderInfoCommont', //评价商品
    commentOrder: request + 'OrderComment/commentOrder', //订单评论
    customerService: request + 'OrderReturnGoods/customerService', //订单评论
    orderDel: request + 'Order/orderDel', //删除普通订单
    getExpressInfo: request + 'Goods/getExpressInfo',
    buyAgain: request + 'OrderBuyAgain/buyAgain', //订单再次购买
    getCoupons: request + 'OrderCouponOptions/usersCanUseCoupons', //获取订单优惠券
    checkCoupons: request + 'Coupon/check', //检查该优惠券是否可用
    lookGoodsExpress: userModuleIndex + 'LogisticsQuery/lookGoodsExpress', //订单物流
    deleteOrder: request + 'Order/deleteOrder', //删除订单
    getCommentImageConfig: URL + uploadImage + 'FileUpload/getCommentImageConfig', //获取上传图片接口配置
    uploadImageByImageComment: URL + uploadImage + 'FileUpload/uploadImageByImageComment', //上传评论图片

    //套餐订单
    packageOrderAll: request + 'OrderPackage/orderListAll', //全部订单
    packagePendingPayment: request + 'OrderPackage/pendingPayment', //代付款订单
    packagePendingDelivery: request + 'OrderPackage/pendingDelivery', //代发货订单
    packageGoodsToBeReceived: request + 'OrderPackage/goodsToBeReceived', //代收货订单
    packageCompleted: request + 'OrderPackage/completed', //已完成订单
    packageHaveBeenCancelled: request + 'OrderPackage/haveBeenCancelled', //已取消订单
    packageToBeEvaluated: request + 'OrderPackage/toBeEvaluated', //待评价订单
    packageOrderDetail: request + 'OrderPackage/orderDetail', //套餐订单详情
    packageCancelOrder: request + 'OrderPackage/cancelOrder', //套餐订单取消订单
    packageOrderDel: request + 'OrderPackage/orderDel', //套餐订单删除订单
    packageBuyAgain: request + 'OrderPackage/buyAgain', //套餐订单再次购买加入购物车
    requeryConfirmOrderId: request + 'Delivery/deliveryMoney', //确认订单 从商品详情直接进入订单 店铺id 和 收货地址id------
    deliveryCalcus: request + 'Goods/deliveryCalculation',
    freightCalcus: request + 'Goods/freightCalculation',





    //发票
    invoicesOrderAdd: request + 'InvoiceType/invoicesOrderAdd', // 保存发票信息
    getInvoiceByOrder: request + 'InvoiceType/getInvoiceByOrder', //根据订单获取发票
    invoicesAreRaisedAdd: request + 'InvoiceType/invoicesAreRaisedAdd', //添加发票抬头
    invoicesAreRaisedDelete: request + 'InvoiceType/invoicesAreRaisedDelete', //删除发票抬头
    invoicesAreRaisedSave: request + 'InvoiceType/invoicesAreRaisedSave', //删除发票抬头
    myInvoice: request + 'InvoiceType/myInvoice', //我的发票抬头

    //增值发票
    capitaAdd: request + 'InvoiceType/capitaAdd', //添加增值发票
    capitaDelete: request + 'InvoiceType/capitaDelete', //删除增值发票
    capitaSave: request + 'InvoiceType/capitaSave', //修改增值发票

    //支付
    paymentType: request + 'GetPayType/getPayResult', //获取支付类型
    rechargeType: request + 'GetPayType/getPayRechargeResult', //获取充值支付类型
    getOrderStatus: request + 'Order/getOrderStatus', //支付结果
    getBalance: request + 'Balance/getBalance', //获取余额
    verifyPassword: request + 'Balance/smsPassword',
    getFreight: request + 'FreightMonery/getFreightMoneyByEnoughToBuyImmediately', //获取运费
    initiatePayment: request + 'PayOrder/initiatePayment', //支付

    // report: userModuleIndex + 'GoodsReport/report',
    // reportTopic: userModuleIndex + 'GoodsReport/reportTopic',
    // commitReport: userModuleIndex + 'GoodsReport/commitReport',

    promoteCommission : request + "PromoterConfig/promotionCommission",
    promoteAddToBalance : request + "PromoterConfig/balance",//推广金额 提现
    promoteOrderListAll : request+"PromoterConfig/orderListAll",//全部
    promoteOrderPendingPayment : request+"PromoterConfig/pendingPayment",//待付款
    promoteOrderPendingDelivery : request+"PromoterConfig/pendingDelivery",//待发货
    promoteOrderToBeReceived : request+"PromoterConfig/goodsToBeReceived",//待收货
    promoteOrderToEvaluated : request+"PromoterConfig/toBeEvaluated",//待评价
    promoteOrderHaveBeenCancelled : request+"PromoterConfig/haveBeenCancelled",//已取消
    promoteOrderComplete : request+"PromoterConfig/completed",//已完成
    promoteConfig : request+"PromoterConfig/extensionList",//推荐列表
    promoteTeam : request+"PromoterConfig/myTeam",//我的推广团队
    promteWithdrawalDetails : request+"PromoterConfig/withdrawalDetails",//推广提现明细
    promoteCode :  request+ "PromoterConfig/code",//获取加密的用户id
    // report
    noticeReport: request + 'GoodsReport/report',//举报
    noticeType: request + 'GoodsReport/reportTopic',//举报类型
    noticeSubmit: userModuleIndex + 'GoodsReport/commitReport',//举报类型提交
    noticeList: userModuleIndex + 'GoodsReport/reportList',//举报类型列表
    noticeCheckSingle: userModuleIndex + 'GoodsReport/reportDetail',//查看单条数据
    cancelNotice: userModuleIndex + 'GoodsReport/cancelReport',//取消举报
    goodsType: request + "Goods/goodsType",
    wechatShareAPI: request + 'WeChat/getWxConfig'
}
export default config

// https://stackoverflow.com/questions/58973341/fire-a-function-onreadystatechange-with-vue