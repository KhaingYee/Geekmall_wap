<template>
	<div v-loading="loading" element-loading-text="上传中……" element-loading-background="hsla(0,0%,100%,.9)">
		<div v-title data-title="我要开店">{{$t('message.openshop')}}</div>
		<top-header :text="title"></top-header>
		<con-header :text="text[0]"></con-header>
		<ul class="per-center">
			<li>
				<span> {{$t('message.opening_name')}}:</span><input type="text" :placeholder="$t('message.account_name')" v-model="account_name">
			</li>
			<li>
				<span> {{$t('message.bank_account')}}:</span><input type="text" :placeholder="$t('message.enter_bank')" v-model="company_account">
			</li>
			<li>
				<span> {{$t('message.opening_branch')}}:</span><input type="text" :placeholder="$t('message.enter_branch')" v-model="branch_bank">
			</li>
		</ul>
		<con-header :text="text[1]"></con-header>
		<ul class="per-center">
			<li>
				<span> {{$t('message.opening_name')}}:</span><input type="text" :placeholder="$t('message.account_name')" v-model="settle_name">
			</li>
			<li>
				<span> {{$t('message.bank_account')}}:</span><input type="text" :placeholder="$t('message.enter_bank')" v-model="settle_account">
			</li>
			<li>
				<span> {{$t('message.opening_branch')}}:</span><input type="text" :placeholder="$t('message.enter_branch')" v-model="settle_number">
			</li>
		</ul>
		<con-header :text="text[2]"></con-header>
		<ul class="per-center">
			<li>
				<span>{{$t('message.company_weChat')}}:</span><input type="text" :placeholder="$t('message.weChat_ID')" v-model="wechatNum">
			</li>
			<li>
				<span> {{$t('message.Alipay')}}:</span><input type="text" :placeholder="$t('message.Alipay_number')" v-model="alipayNum">
			</li>
		</ul>
		<con-header :text="text[3]"></con-header>
		<ul class="per-center">
			<li>
				<span> {{$t('message.registration_code')}}:</span><input type="text" :placeholder="$t('message.registration_number')" v-model="certificate_number">
			</li>
		</ul>
		<div class="idPhotos">
			<h4>{{$t('message.certificate_number')}}：</h4>
			<div>
				<div>
					<input type="file" @change="iphoneS($event)" v-if="!registration_electronic" class="file" />
					<img :src="URL + registration_electronic" v-show="registration_electronic" class="position" @click="double" />
				</div>
			</div>
		</div>
		<button @click="nextinfor">{{$t('message.next_submit')}}</button>
	</div>
</template>

<script>
	import QS from 'qs';
	import {
		Field,
		Popup,
		Radio,
		Toast
	} from 'mint-ui';
	import topHeader from '@/components/page/children/header.vue';
	import conHeader from '@/com/conHeader'; // 内容头
	export default {
		data() {
			return {
				title: this.$t('message.fill_information'),
				text: [this.$t('message.settlement_account'), this.$t('message.billing_account'), this.$t('message.payment_account'), this.$t('message.tax_registration')],
				prompt: this.$t('message.upload_organization'),
				prompt2: this.$t('message.enterprise_certificate'),
				account_name: '',
				company_account: '',
				branch_bank: "",
				settle_name: '',
				settle_account: '',
				settle_number: '',
				certificate_number: '',
				registration_electronic: '',
				iphoneImg: '',
				wechatNum: '', // 微信帐号
				alipayNum: '', // 支付宝帐号
				loading: false,
			}
		},
		methods: {
			double() {
				this.registration_electronic = false;
			},
			iphoneS(e) {
				this.loading = true;
				var file = e.target.files[0]
				//图片大小设置
				var fileSize = 0;
				if (!e.target.files) {
					var filePath = e.target.value;
					var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
					var file = fileSystem.GetFile(filePath);
					fileSize = file.Size;
				} else {
					fileSize = e.target.files[0].size;
				}
				var size = fileSize / 1024;
				if (size > 1000) {
					this.loading = false;
					Toast("附件不能大于1M");
					e.target.value = "";
					return
				}
				//上传图片接口
				var that = this   
				const reader = new FileReader();
				this.img_type = 'data:' + file.type + ';base64,';
				reader.readAsDataURL(file);
				reader.onload = function() {
					that.iphoneImg = this.result;
				}  
				let param = new FormData() // 创建form对象
				    param.append('voucher', file, file.name) // 通过append向form对象添加数据
				    param.append('chunk', '0') // 添加form表单中其他数据
				let config = {    
					headers: {
						'Content-Type': 'multipart/form-data'
					}   
				}
				this.axios.post(this.$httpConfig.uploadVoucher, param, config)
					.then((res) => {
						this.loading = false;
						if (res.data.status === 1) {
							that.registration_electronic = res.data.pic;
							Toast({
								message: res.data.message,
								duration: 1000
							});
						} else {
							Toast({
								message: res.data.message,
								duration: 1000
							});
						}
					})
	
			},
			nextinfor: function() {
				let reg = /(^[1-9]([0-9]*)$|^[0-9]$)/;
	
				if (!this.account_name) {
					Toast({
						message: '请填写开户名',
						duration: 1000
					});
					return;
				}
				if (!reg.test(this.company_account) || this.company_account.length < 12) {
					Toast({
						message: '公司银行账号错误',
						duration: 1000
					});
					return;
				}
				if (!this.branch_bank) {
					Toast({
						message: '请填写开户银行支行名称',
						duration: 1000
					});
					return;
				}
				if (!this.settle_name) {
					Toast({
						message: '请填写结算账户开户名',
						duration: 1000
					});
					return;
				}
				if (!reg.test(this.settle_account) || this.settle_account.length < 12) {
					Toast({
						message: '结算公司银行账号错误',
						duration: 1000
					});
					return;
				}
				if (!this.settle_number) {
					Toast({
						message: '请填写结算开户支行',
						duration: 1000
					});
					return;
				}
				if (!this.wechatNum) {
					Toast({
						message: '请填写微信账号',
						duration: 1000
					});
					return;
				}
				if (!this.alipayNum) {
					Toast({
						message: '请填写支付宝账号',
						duration: 1000
					});
					return;
				}
				if (!this.certificate_number) {
					Toast({
						message: '请填写税务登记证号',
						duration: 1000
					});
					return;
				}
				if (!this.registration_electronic) {
					Toast({
						message: '请上传税务登记证号电子版',
						duration: 1000
					});
					return;
				}
				this.axios.post(this.$httpConfig.storeBank, QS.stringify({
					store_id: sessionStorage.getItem('shop_ID'),
					account_name: this.account_name,
					company_account: this.company_account,
					branch_bank: this.branch_bank,
					settle_name: this.settle_name,
					settle_account: this.settle_account,
					settle_bank: this.settle_number,
					certificate_number: this.certificate_number,
					registration_electronic: this.registration_electronic,
					alipay_account: this.alipayNum,
					wx_account: this.wechatNum,
					token: sessionStorage.getItem("data_token")
				})).then((res) => {
					if (res.data.status == 10001) {
						this.$router.push('/LogIn');
					} else {
						Toast({
							message: res.data.message,
							duration: 1000
						});
						if (res.data.status == 1) {
							this.$router.push({
								name: "checkComBusinessInfor"
							})
						}
					}
				}).catch((err) => {
					console.log(err)
				});
	
			}
		},
		components: {
			topHeader,
			conHeader
		}
	}
</script>

<style lang="less" scoped>
	.idPhotos {
		border-bottom: 1/100rem solid #fff;
		padding: 0 27/100rem;
		h4 {
			padding: 30/100rem 0 25/100rem;
			color: #BDBDBD;
			font-size: 32/100rem;
		}
		background-color: #fff;
		div {
			margin-bottom: 20/100rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			font-size: 32/100rem;
			color: #959595;
			h6 {
				padding: 0 30/100rem;
			}
			div {
				width: 280/100rem;
				height: 210/100rem;
				border: 1/100rem solid #BDBDBD;
				.position {
					width: 99%;
					height: 99%;
				}
				.file {
					width: 100%;
					height: 100%;
					opacity: 0;
				}
			}
			div:last-child {
				border: 1/100rem dashed #BDBDBD;
			}
		}
		p {
			margin: 30/100rem 0 40/100rem;
			font-size: 24/100rem;
			color: #959595;
			text-align: left;
		}
	}
	
	.per-center {
		li {
			background-color: #fff;
			border-bottom: 1px solid #F1F1F1;
			height: 90/100rem;
			display: flex;
			align-items: center;
			font-size: 28/100rem;
			padding: 0 20/100rem;
			line-height: .4rem;
			span {
				width: 130px;
				font-size: 28/100rem;
				color: #BDBDBD
			}
			input {
				width: 520/100rem;
				height: 90/100rem;
				border: 0;
				font-size: 28/100rem;
				padding-left: 25/100rem;
				box-sizing: border-box
			}
			div {
				font-size: 32/100rem;
				display: flex;
				align-items: center;
				color: #BDBDBD
			}
		}
		.businessScope {
			margin-bottom: 10/100rem;
			height: 260/100rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			span {
				width: 100%;
				height: 90/100rem;
				display: flex;
				align-items: center;
				text-align: left;
			}
			textarea {
				width: 700/100rem;
				height: 160/100rem;
				resize: none;
				border: 0;
				padding: 10/100rem;
			}
		}
		a {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.rightImg {
			margin-left: 20/100rem;
			width: 24/100rem;
			height: 44/100rem;
		}
	}
	
	button {
		margin: 45/100rem 20/100rem 25/100rem;
		height: 90/100rem;
		color: #fff;
		background-color: #d02629;
		border-radius: 90/100rem;
		border: 0;
		width: 710/100rem;
		outline: none;
		font-size: 32/100rem;
		line-height: .4rem;
		padding: 0 .1rem;
	}
	
	p {
		text-align: center;
		line-height: normal;
		.reds {
			color: #FE0100
		}
	}
</style>