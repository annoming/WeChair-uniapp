const BASE_URL = 'https://wechair.com.cn'
export const wechairRequest = (options)=>{
	/* 
	uni.request({
		
	}) 
	异步封装不建议这样使用
	*/
   return new Promise((resolve,reject)=>{
	   uni.request({
		   url:BASE_URL + options.url,
		   method:options.method || 'GET',
		   data:options.data || {},
		   success: (res) => {
			   if(res.data.status !== 0){
				   return uni.showToast({
				   	title:'获取数据失败'
				   })
			   }
			   resolve(res)
		   },
		   fail: (err) => {
			   uni.showToast({
			   	title:'请求接口失败'
			   })
			   reject(err)
		   }
	   })
   })
}
