require('../lib/swiper-3.3.1.min.js');

var guideTpl=require('../tpl/guide.string');//获取html片段
//console.log(guideTpl)


SPA.defineView('guide',{//定义视图
	html:guideTpl,//将获取到的HTML片段添加到html文档

	plugins:['delegated'],//安装插件   用bindActions必须安装delegated插件



	bindActions:{
		'goto.index':function(){
			SPA.open('index');
		}
	},





	bindEvents:{
		beforeShow:function(){//在没有切换之前加载，提升用户体验
			var mySwiper=new Swiper('#guide-swiper',{
				loop:false
			});//这里不要用.swiper-container来获取dom，以免和其他的起冲突
		},




		//接收index视图传递过来的数据(带路由的时候，即用open时)
		//receiveData:function(data){
		//	console.log(data.data.backData);
		//}
	}
});
