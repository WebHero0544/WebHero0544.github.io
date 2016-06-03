var indexTpl = require('../tpl/index.string');
require('../lib/swiper-3.3.1.min.js');

SPA.defineView('index', {

  html: indexTpl,

  plugins:['delegated'],

  // 初始化视图的属性和方法
  init: {
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },

  // 子视图的嵌套定义
  modules: [{
    name: 'content',
    container: '.m-index-container',
    views: ['home', 'single', 'match','school','my'],
    defaultTag: 'home'
  }],

  bindActions: {

    'switch.sonView': function (e) {//通过点击来显示对应的子视图
      // 视图切换方法
      //console.log(e.data.tag);
      this.modules.content.launch(e.data.tag);//用自定义属性data-tag来获取当前被点击的视图名以切换对应的视图，记着获取的是视图名
      this.setActive($(e.el));//$(e.el)来获取当前被点击的元素，然后添加高亮
    }
  },

//绑定功能
  bindEvents:{
  	beforeShow:function(){//在没有切换之前加载，提升用户体验
  		//console.log(Swiper);
  		var playpicSwiper=new Swiper('#playpic-swiper',{
  			loop:true,
  			// 如果需要分页器
  			pagination: '.swiper-pagination',
  			autoplay:2000,
  			speed:1000
  		});//这里不要用.swiper-container来获取dom，以免和其他的起冲突
  	}

  }
});
