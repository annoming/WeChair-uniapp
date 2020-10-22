<template>
	<view class="index">
		<!-- 轮播图 -->
		<!-- 
			indicator-dot:设置轮播图下的点
			circular:设置轮播图循环轮播 
		-->
		<swiper>
			<swiper-item>
				<image src="../../static/images/swipers/book1.jpeg"></image>
			</swiper-item>
			<!-- <swiper-item>
				<image src="../../static/images/swipers/book4.jpeg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/swipers/library2.jpeg" mode=""></image>
			</swiper-item> -->
		</swiper>
		<view class="">
			<view class="">
				
			</view>
			<view class="">
				
			</view>
			<view class="">
				
			</view>
			<view class="">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[]
			}
			
		},
		methods: {
			//获取轮播图数据
			async getSwipers(){
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
					url:'/api/test'
				})
				this.swipers = res.data
			}
		},
		onLoad(){
			// this.getSwipers()
		}
	}
</script>

<!-- 设置lang之后才支持以下写法 -->
<style lang="scss">
	.index{
		swiper{
			margin-left: 25rpx;
			width: 700rpx;
			height: 280rpx;
			image{
				border-radius: 20rpx;
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
