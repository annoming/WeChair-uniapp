<template>
	<view class="index">
		<!-- 轮播图 -->
		<!-- 
			indicator-dot:设置轮播图下的点
			circular:设置轮播图循环轮播 
		-->
		<swiper>
			<swiper-item>
				<image src="../../static/images/swipers/1.jpeg"></image>
			</swiper-item>
			<!-- <swiper-item>
				<image src="../../static/images/swipers/book4.jpeg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/swipers/library2.jpeg" mode=""></image>
			</swiper-item> -->
		</swiper>
		<view class="nav">
			
			<view class="title">

			</view>
			<view class="nav-list">
				<view class="nav-item">

				</view>
				<view class="nav-item">

				</view>
				<!-- <view class="logo">
					<image src="../../static/images/logo.png"></image>
				</view> -->
				<view class="nav-item">

				</view>
				<view class="nav-item">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}

		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				/* console.log("获取轮播图数据")
				uni.request({
					url:'https://wechair.com.cn',
					success:res=>{
						console.log(res)
						if(res.data.status !== 0){
							return uni.showToast({
								title:'获取数据失败'
							})
						}
						this.swipers = res.data
					}
				}) */
				const res = await this.$wechairRequest({
					url: '/api/test'
				})
				this.swipers = res.data
			}
		},
		onLoad() {
			// this.getSwipers()
		}
	}
</script>

<!-- 设置lang之后才支持以下写法 -->
<style lang="scss">
	.index {
		swiper {
			margin-left: 25rpx;
			width: 700rpx;
			height: 260rpx;
			image {
				border-radius: 20rpx;
				height: 100%;
				width: 100%;
			}
		}
		.nav {
			overflow: hidden;
			margin-top: 20rpx;
			
			// overflow: hidden;
			.nav-list {
				padding: 0 25rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				/* .logo{
					position: fixed;
					margin: 170rpx 230rpx;
					width: 250rpx;
					height: 250rpx;
					image{
						width: 100%;
						height: 100%;
					}
					z-index: 100;
				} */
				.nav-item {
					// z-index: 101;
					border-radius: 20rpx;
					// margin: 65rpx 0;
					margin: 20rpx 0;
					// width: 300rpx;
					width: 340rpx;
					height: 150rpx;
					background-color: white;
					box-shadow: 1rpx 1rpx 5rpx $global-color;
				}
			}
		}
	}
</style>
