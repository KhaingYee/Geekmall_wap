<template>
	<div>
		<!-- <div v-title data-title="我要开店">我要开店</div> -->
		<top-header :text="title"></top-header>
		<con-header :text="text[0]"></con-header>
		<ul class="per-center">
			<li>
				<span> {{$t('message.merchant_account')}}：</span><input type="text" :placeholder="$t('message.enter_merchant')" v-model="shop_account">
			</li>
			<li>
				<a href="javascript:;" @click="levChoose">
					<span> {{$t('message.store_level')}}:</span>
					<span v-model="level_id">{{toke}}</span>
					<img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
				</a>
				<mt-popup v-model="popupVisible1" position="bottom" class="tol">
					<div class="picker-toolbar">
						<span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">{{$t('message.cancel')}}</span>
						<span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">{{$t('message.sure')}}</span>
					</div>
					<ul>
						<li class="l" v-for="(levels,index) in level" @click="choose(index)" :key="index">
							{{$t('message.merchant_level')}}：{{levels.level_name}}
						</li>
					</ul>
				</mt-popup>
			</li>
			<li>
				<a href="javascript:;" @click="chokes">
					<span> {{$t('message.store_time')}}:</span>
					<span v-model="shop_long">{{year}}</span>
					<img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
				</a>
				<mt-popup v-model="popupVisible3" position="bottom" class="tol">
					<div class="picker-toolbar">
						<span class="mint-datetime-action mint-datetime-cancel" @click="can">{{$t('message.cancel')}}</span>
						<span class="mint-datetime-action mint-datetime-confirm" @click="sel">{{$t('message.sure')}}</span>
					</div>
					<ul class="time-length">
						<li class="l" v-for="(n,index) in years" @click="choke(index)" :key="index">
							{{$t('message.store_time')}}：{{n}}
						</li>
					</ul>
				</mt-popup>
			</li>
		</ul>
		<con-header :text="text[1]"></con-header>
		<ul class="per-center">
			<li class="listHead">
				<a href="javascript:;" @click="divides">
					<span> {{$t('message.Store_Category')}}:</span>
					<span v-model="shop_class">{{divide}}</span>
					<img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
				</a>
			</li>
			<mt-popup v-model="popupVisible2" position="bottom" class="tol">
				<div class="picker-toolbar">
					<span class="mint-datetime-action mint-datetime-cancel" @click="cancl">{{$t('message.cancel')}}</span>
					<span class="mint-datetime-action mint-datetime-confirm" @click="select">{{$t('message.sure')}}</span>
				</div>
				<ul>
					<li class="l" v-for="(datas,index) in data" @click="chose(index)" :key="index">
						{{datas.sc_name}}
					</li>
				</ul>
			</mt-popup>
		</ul>
		<con-header :text="text[2]"></con-header>
		<ul class="per-center">
			<p class="little-hint"><i>*</i> {{$t('message.classification_bound')}}</p>
			<li class="listHead" v-for="(item,index) in goods_class" :key="item.id">
				<i class="delete" v-if="goods_class.length !=1" @click="del(index)"></i>
				<a href="javascript:;" @click="management(index)">
					<span> {{$t('message.business_classification')}}:</span>
					<span class="content">{{item.content}}</span>
					<img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
				</a>
				<mt-popup v-model="item.popupVisible" position="bottom" class="tol">
					<div class="picker-toolbar">
						<span class="mint-datetime-action mint-datetime-cancel" @click="manageCancl(index)">{{$t('message.cancel')}}</span>
						<span class="mint-datetime-action mint-datetime-confirm" @click="manageSelect(index)">{{$t('message.sure')}}</span>
					</div>
					<div class="select">
						<ul class="address-area-tit">
							<li 
								:class="showProvince?'active':''" 
								@click="selectedArea('province',index)">
								{{ province }}</li>
							<li  
								v-if="choiceCity" 
								:class="showCity?'active':''"
								@click="selectedArea('city',index)">
								{{ city }}</li>
							<li  
								v-if="choiceArea" 
								:class="showArea?'active':''">
							{{ area }}</li>
						</ul>
					</div>
					<ul class="goods-list" v-if="showProvince">
						<li 
                            v-for="(n, i) in item.data" 
							:key="n.id"
                          	@click="getProvince(n.id, n.class_name,index)" 
                            :class="i==provinceIndex?'selected-li':''">
                            {{ n.class_name }}</li>
					</ul>
					<ul class="goods-list" v-if="showCity">
						<li 
                            v-for="(n, i) in item.data" 
							:key="n.id"
                          	@click="getCity(n.id, n.class_name, index)" 
                            :class="i==cityIndex?'selected-li':''">
                            {{ n.class_name }}</li>
					</ul>
					<ul class="goods-list" v-if="showArea">
						<li 
                            v-for="(n, i) in item.data" 
							:key="n.id"
                          	@click="setCityEnd(n.id, n.class_name, index)" 
                            :class="i==cityIndex?'selected-li':''">
                            {{ n.class_name }}</li>
					</ul>
				</mt-popup>
			</li>
		</ul>
		<div class="add-category" @click="addCategory">{{$t('message.choose_category')}}</div>
		<button @click="nextinfor">{{$t('message.submit_application')}}</button>
		<p>{{$t('message.category_mall')}}</p>
	</div>
</template>
<script>
	import { Field, Popup, Radio, Toast } from 'mint-ui';
	import QS from 'qs';
	import topHeader from '@/components/page/children/header.vue';
	import conHeader from '@/com/conHeader'; // 内容头
	export default {
		data() {
			return {
				title: this.$t('message.information_enterprise'),
				text: [this.$t('message.operation_information'), this.$t('message.Store_Category'),this.$t('message.business_classification')],  
				shop_account: "",
				level_id: "",
				shop_long: "",
				data:'',
				shop_class: "",
				sc_bail: '',
				popupVisible1: false,
				popupVisible2: false,
				popupVisible3: false,
				selected: '',
				level: '',
				toke: "",
				toke_id:'',
				divide: '',
				divideId: '',
				year: '',
				years: ["1年", "2年", "3年", "4年", "5年", "6年", '7年', '8年', '9年'],
				goods_class:[],
				choiceProvince: false, // 省按钮的显示隐藏
                choiceCity: false, // 市按钮的显示隐藏
                choiceArea: false, // 区按钮的显示隐藏
				province: this.$t('message.please_choose'),    // 选中的省   
                city: this.$t('message.please_choose'), // 选中的市
                area: this.$t('message.please_choose'), // 选中的区
                street:this.$t('message.please_choose'),//选中的街道
                showProvince: true, // 省选择的显示隐藏
                showCity: false, // 市选择的显示隐藏
                showArea: false, // 区选择的显示隐藏
                showStreet:false,//街道的显示隐藏
                provinceId: '', // 选中的省id
                cityId: '', // 选中的市id
                areaId: '', // 选中的区id
                streetId:'',
                selected: false, // 选中的那个项
                provinceIndex: -1, // 选中态索引
                cityIndex: -1,
                areaIndex: -1,
				streetIndex:-1,
				goods_data:'',
                headParams: {
                    title: sessionStorage.getItem('titleKey'),
                    description: sessionStorage.getItem('updateDescription'),
                    keywords: sessionStorage.getItem('contentKey'),        
                }
            }
        },
        head: {
            meta: function(){
                return [
                    { name: 'title', content: this.headParams.title, id: 'desc' },
                    { name: 'description', content: this.headParams.description, id: 'desc1' },
                    { name: 'keywords', content: this.headParams.keywords, id: 'desc2' },
                ]
            }
        },
		created() {
			let title = "我要开店" + '-' + sessionStorage.getItem('titleKey') + '-' + sessionStorage.getItem('updateDescription');
            this.showScroll.scrollTitle(title);
			this.shopAjax();
			this.levelAjax();
		},
		components: {
			topHeader,
			conHeader
		},
		methods: {
			del(index){
				this.goods_class.splice(index,1);
			},
			//经营分类
			getGoodsClass(index,status){
				this.axios({
					url: this.$httpConfig.getFirstId,
					method: "get",
					params: {
						token: sessionStorage.getItem("data_token")
					}
				}).then(res => {
					if(index ==='1'){
						this.goods_data = res.data.data;
						this.goods_class.push({popupVisible:false,content:'',data:this.goods_data,class_id:''});
					}else if(index === '2'){
						this.goods_class[status].data = res.data.data;
					}else{
						this.goods_class[index].data = res.data.data;
					}
				})
				.catch(err => {
					console.log(err);
				});
			},
			selectedArea(type,index) { // 按钮点击
                    if (type == "province") {
						this.provinceId = '';
						this.cityId = '';
						this.areaId = '';
						this.getGoodsClass(index,'0');
                        this.cityIndex = -1;
                        this.areaIndex = -1;
                        this.streetIndex=-1
                        
                        this.choiceCity = false;
                        this.choiceArea = false;
                        this.choiceStreet=false,
                        
                        this.showProvince = true;
                        this.showCity = false;
                        this.showArea = false;
                        this.showStreet=false;
                       
                    } else if (type == "city") {
						this.cityId = '';
						this.areaId = '';
						this.proAjax(this.provinceId,index);
                        this.cityIndex = -1;
                        this.areaIndex = -1;
                        this.streetIndex=-1
                        this.choiceArea = false;
                        this.choiceStreet=false;
                        
                        this.showProvince = false;
                        this.showCity = true;
                        this.showArea = false;
                        this.showStreet=false;
                    } 
				},
				//获取二级
				getProvince (id, name, index) {
					this.provinceId = id;
					this.proAjax(this.provinceId,index);
                    this.Bcity = '请选择';
                    this.area = '请选择';
                    this.city = '请选择';
                    this.choiceCity = true;
                    this.province = name;
                    this.showProvince = false;
                    this.showCity = true;
                    this.showArea = false;
                    this.showStreet=false;
                    
				},
				//获取三级
				getCity (id, name, index) { 
					this.cityId = id;
					this.proAjax(this.cityId, index);
                    this.area = '请选择', 
                    this.choiceArea = true;
                    this.city = name;
                    this.showProvince = false;
                    this.showCity = false;
                    this.showArea = true;
                    this.showStreet=false;
				},
				//三级分类点完后
				 setCityEnd(id, name, index) {
                    this.area = name;
                    this.areaId = id;
                },
				//获取下级分类
				proAjax(id,index){
					this.axios.post(this.$httpConfig.nextClassId, QS.stringify({
					fid:id,
					token: sessionStorage.getItem("data_token")
				})).then((res) => {
					this.goods_class[index].data = res.data.data;
				}).catch((err) => {
					console.log(err)
				});
				},
			manageCancl(i){
				this.goods_class[i].popupVisible = false;
				this.choiceCity=false;
				this.choiceArea=false;
				this.choiceStreet=false;
				this.choiceProvince=true;
				this.showStreet = false;
				this.showProvince=true;
				this.showCity = false; 
				this.showArea = false;
				this.province="请选择"
			},
			manageSelect(index){
				if(this.province==""||this.province=="请选择") {
					Toast({
						message: '请选择分类',
						duration: 1000
					});
				} else if(this.city==""||this.city=="请选择"){
					Toast({
						message: '请选择分类',
						duration: 1000
					});
				}else if(this.area==""||this.area=="请选择" ){
					Toast({
						message: '请选择分类',
						duration: 1000
					});
				}else{
					if(this.provinceId == ''|| this.cityId == '' || this.areaId == ''){
						this.goods_class[index].popupVisible = false;
						return;
					}
					this.goods_class[index].content = this.province + '-' + this.city + '-' + this.area;
					this.goods_class[index].class_id = {one_class:this.provinceId,two_class:this.cityId,three_class:this.areaId};
					this.choiceCity=false;
					this.choiceArea=false;
					this.choiceStreet=false;
					this.choiceProvince=true;
					this.showStreet = false;
					this.showProvince=true;
					this.showCity = false; 
					this.showArea = false;
					this.province="请选择"
				}
				this.goods_class[index].popupVisible = false;
			},
			management(index){
				this.goods_class[index].popupVisible = true;
				this.getGoodsClass('2',index);
			},
			//添加一个经营分类
			addCategory(){
				this.goods_class.push({popupVisible:false,content:'',data:this.goods_data,class_id:''});
			},
			shopAjax() {
				this.axios.post(this.$httpConfig.storeClasses, QS.stringify({
					token: sessionStorage.getItem("data_token")
				}))
					.then((res) => {
						Toast({
							message: res.data.message,
							duration: 1000
						});
						if(res.data.status == 1) {
							this.data = res.data.data.class;
						}
					}).catch((err) => {
						console.log(err)
					});
			},
			levelAjax() {
				this.axios.post(this.$httpConfig.getShopLevel, QS.stringify({
					token: sessionStorage.getItem("data_token")
				}))
					.then((res) => {
						Toast({
							message: res.data.message,
							duration: 1000
						});
						if(res.data.status == 1) {
							this.level = res.data.data
						}
					}).catch((err) => {
						console.log(err)
					});
			},
			nextinfor: function() {
				let class_id = [];
				for (let key in this.goods_class) {
					if (this.goods_class[key].class_id) {
						class_id.push(this.goods_class[key].class_id)
					}
				}
				if(this.shop_account == '') {
					Toast({
                        message: '请填写商家账号',
                        duration: 1000
					});
					return;
				}
				if(this.toke == '') {
					Toast({
                        message: '请选择店铺等级',
                        duration: 1000
					});
					return;
				}
				if(this.year == '') {
					Toast({
                        message: '请选择开店时长',
                        duration: 1000
					});
					return;
				}
				if(this.divide == '') {
					Toast({
                        message: '请选择店铺分类',
                        duration: 1000
					});
					return;
				}
				if(class_id.length ==0){
					Toast({
                        message: '请选择经营分类',
                        duration: 1000
					});
					return;
				}
				this.axios.post(this.$httpConfig.perfectInfo, QS.stringify({
					store_id: sessionStorage.getItem('shop_ID'),
					shop_account: this.shop_account,
					level_id: this.toke_id,
					shop_long: this.shop_long,
					shop_class: this.divideId,
					sc_bail: this.sc_bail,
					class : class_id,
					token: sessionStorage.getItem("data_token")
				})).then((res) => {
					if(res.data.status == 10001) {
						this.$router.push('/LogIn');
					} else {
						Toast({
							message: res.data.message,
							duration: 1000
						});
						if(res.data.status == 1) {
							this.$router.push({
								name: "settledAgreementSuc"
							})
						}
					}
				}).catch((err) => {
					console.log(err)
				});
			},
			chokes() {
				this.popupVisible3 = true;
			},
			choke(index) {
				this.year = this.years[index];
				this.shop_long = this.years[index].substring("年",1);
				this.popupVisible3 = false;
			},
			can() {
				this.popupVisible3 = false;
			},
			sel() {
				this.popupVisible3 = false;
			},
			choose(index) {
				this.toke = this.level[index].level_name;
				this.toke_id = this.level[index].id;
				this.popupVisible1 = false;

			},
			chose(index) {
				this.divide = this.data[index].sc_name;
				this.divideId = this.data[index].id;
				this.sc_bail = this.data[index].sc_bail;
				this.popupVisible2 = false;
			},
			divides() {
				this.popupVisible2 = true;
			},
			levChoose() {
				this.popupVisible1 = true;
			},
			cancleaddress() {
				this.popupVisible1 = false;
			},
			cancl() {
				this.popupVisible2 = false;
			},
			select() {
				this.popupVisible2 = false;
			},
			selectaddress() {
				this.popupVisible1 = false;
			},

		},

	}
</script>
<style lang="less" scoped>
	.tol {
		width: 100%;
		/*height: 4rem;*/
	}
	
	.per-center {
		li {
			background-color: #fff;
			border-bottom: 1px solid #F1F1F1;
			height: 100/100rem;
			display: flex;
			align-items: center;
			font-size: 28/100rem;
			padding: 0 20/100rem;
			line-height: .4rem;
			span {
				width: 100px;
				font-size: 30/100rem;
				color: #BDBDBD
			}
			.mint-datetime-action{
				color: #ff8000;
			}
			input {
				width: 500/100rem;
				height: 90/100rem;
				border: 0;
				font-size: 28/100rem;
				padding-left: 30/100rem;
				box-sizing: border-box;
			}
		}
		.mint-datetime-action{
				color: #ff8000;
			}
		.little-hint{
			margin: 0;
			i{
				font-style:normal;
				color: red;
			}
		}
		.listHead {
			margin-bottom: 10/100rem;
			position: relative;
			.delete{
				background: url(../../../assets/delect01.png) no-repeat;
				background-size: 100% 100%;
				display: block;
				width: .5rem;
				height: .5rem;
				position: absolute;
				right: .5rem;
				top: 0;
			}
			.select{
				padding:.2rem;
				.address-area-tit{
					padding: 0;
					box-shadow: none;
					border-bottom: 0;
					line-height: 41px;
					height: 41px;
					li{
						padding: 0 .2rem;
						height: 40px;
						width: 24%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: center;
						font-size: 12px;
						display: inline-block;
						border-bottom: 1px solid #ccc;
					}
					li.active {
						border-bottom: 1px solid #ff8000;
						color: #ff8000;
					}
				}
			}
		}
		.addList {
			height: 150/100rem;
			background-color: #F1F1F1;
			div {
				margin: 20/100rem 0 50/100rem;
				border: 1/100rem solid #C2C2C2;
				width: 100%;
				height: 75/100rem;
				font-size: 32/100rem;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #7C7C7C
			}
		}
		a {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input {
				width: 500/100rem;
				height: 90/100rem;
				border: 0;
				font-size: 28/100rem;
				padding-left: 30/100rem;
				box-sizing: border-box;
			}
		}
		.content{
			display: block;
    		width: 5rem;
		}
		.rightImg {
			width: 24/100rem;
			height: 44/100rem;
		}
		.time-length {
			height: 4.7rem;
    		overflow-y: scroll;
		}
		.goods-list{
			margin-top: 10px;
            height:4.5rem;
			overflow-y: scroll;
			li{
				height: 30px;
				padding: 0 35px;
				line-height: 30px;
				font-size: 12px;
			}
			li.selected-li {
				color: #ff8000;
			}
		}
	}
	.add-category{
		margin: .2rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		font-size: .3rem;
		color: #666;
		border: 1px solid #c2c2c2;
	}
	button {
		margin: 75/100rem 20/100rem 0;
		height: 90/100rem;
		color: #fff;
		background-color: #d02629;
		border-radius: 90/100rem;
		border: 0;
		width: 710/100rem;
		outline: none;
		font-size: 32/100rem
	}
	
	p {
		padding: 20/100rem;
		margin: 30/100rem 0 40/100rem;
		font-size: 24/100rem;
		color: #959595;
		text-align: left;
	}
</style>