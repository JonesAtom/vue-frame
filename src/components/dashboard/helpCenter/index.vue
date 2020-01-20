<template>
	<div class="helps">
		<transition name="slide-fade">
			<div class="help-center" :class="{active: isActive }">
				<!-- 客户服务 -->
				<div class="user-serve">
					<div class="tit">
						<p class="pannel-title">客户服务</p>
					</div>
					<div class="find">
						<div class="find-us clearfix">
							<div class="find-left">
								<img :src="cusData.logo_path" />
							</div>
							<div class="find-right">
								<p>{{cusData.name}}</p>
								<span>有问题请找我</span>
							</div>
						</div>
						<div class="online">
							<div class="online-top clearfix">
								<div class="online-ask">
									<a :href="cusData.online_url" target="_blank">
										<i class="iconfont qmai-xinxi"></i>在线客服
									</a>
								</div>
								<div class="online-left">
									<i class="iconfont qmai-dianhua"></i>
									{{cusData.phone}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<div class="helps-icon" @click="changeStyle">
			<i class="el-icon-question"></i>
		</div>
	</div>
</template>

<script>
export default {
    name: 'helpcenter',
    data() {
        return {
            cusData: {
                logo_path: '/static/img/logo.png',
                name: '企迈客服',
                online_url: 'http://q.url.cn/ab8KHf?_type=wpa&qidian=true',
                phone: '4008-118-115',
                qrcode_path: '//qmaicn.qmimg.cn/uploads/service/201711/27/S08dblzxv4SrrRdxnH43C7hKIDqWxTV7R16J6O9g.png'
            },
            isActive: false,    // 当屏幕小于1680的时候打开帮助中心的样式 带阴影形成立体感
            questionList: [],   // 问题列表
            isShowModel: false  // 是否显示各模块
        }
    },
    
    methods: {
        changeStyle() {
            // 点击顶部打开帮助中心快捷方式
            this.isActive = !this.isActive
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
/* .fade-leave-active 在低于版本 2.1.8 中 */
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.slide-fade-enter-active {
	transition: all 0.1s ease;
}
.slide-fade-leave-active {
	transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* .slide-fade-leave-active 在低于 2.1.8 版本中 */
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(50px);
}

.helps {
	position: relative;
	margin-left: 20px;
	.helps-icon {
		position: fixed;
		top: 19px;
		right: 15px;
		cursor: pointer;
		display: none;
		z-index: 999;
		i {
			font-size: 22px;
			color: #c99d62;
		}
	}
	.active {
		box-shadow: 0 0 20px #ccc;
		z-index: 5;
		display: block !important;
	}
	.help-center {
		width: 240px;
		height: 100%;
		padding-bottom: 20px;
		background: #fff;
		position: relative;
		.help-title {
			color: #333;
			font-size: 14px;
			font-weight: bold;
			height: 44px;
			line-height: 44px;
			padding-left: 38px;
			background-image: url("/static/img/q.jpg");
			background-size: 17px 17px;
			background-repeat: no-repeat;
			background-position: 13px center;
			border-bottom: 1px solid #f1f1f1;
		}
		.tit {
			padding: 10px 10px 10px 20px;
			font-size: 16px;
			position: relative;
			.pannel-title {
				font-size: 14px;
				color: #333;
				font-weight: bold;
			}
			.enterIn {
				a {
					width: 30px;
					text-align: center;
				}
			}
			&:before {
				content: "";
				width: 4px;
				height: 18px;
				background: #d1a974;
				position: absolute;
				left: 0;
				top: 15px;
			}
		}
		.user-serve {
			.find {
				padding: 0 20px;
				.find-us {
					padding: 12px;
					background: #f5f7fa;
					display: flex;
					align-items: center;
					justify-content: center;
					.find-left {
						width: 62px;
						height: 62px;
						margin-right: 10px;
						overflow: hidden;
						text-align: center;
						img {
							width: 100%;
						}
					}
					.find-right {
						flex: 1;
						p {
							color: #323232;
							font-size: 14px;
							line-height: 1;
							margin-bottom: 10px;
						}
						span {
							color: #a9a9a9;
							font-size: 12px;
							display: block;
							line-height: 1;
							margin-top: 5px;
						}
					}
				}
				.online {
					.online-top {
						.online-left {
							color: #323232;
							font-size: 18px;
							background: #f5f7fa;
							height: 50px;
							margin-top: 1px;
							display: flex;
							align-items: center;
							justify-content: center;
							img {
								width: 25px;
								height: 25px;
								display: inline-block;
								vertical-align: middle;
								margin-right: 5px;
							}
							.qmai-dianhua {
								font-size: 22px;
								color: #c99d62;
								display: inline-block;
								vertical-align: middle;
								margin-right: 5px;
							}
						}
						.online-right {
							width: 90px;
							img {
								width: 100%;
							}
						}
					}
					.online-ask {
						text-align: center;
						background: #f5f7fa;
						margin: 0 auto;
						padding-bottom: 12px;
						a {
							color: #323232;
							font-size: 12px;
							width: 166px;
							height: 36px;
							line-height: 36px;
							margin: 0 auto;
							display: inline-block;
							vertical-align: middle;
							background: #fff;
							border: 1px solid #e2e2e0;
							display: flex;
							align-items: center;
							justify-content: center;
							.qmai-xinxi {
								font-size: 22px;
								color: #acb1bc;
								display: block;
								margin-right: 6px;
								margin-top: 2px;
							}
						}
					}
				}
			}
		}
	}
}
</style>