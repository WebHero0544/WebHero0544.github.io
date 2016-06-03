var homeTpl = require('../tpl/home.string');

SPA.defineView('home', {

  html: homeTpl,

  plugins:['delegated'],


//绑定功能
  bindEvents:{
  	beforeShow:function(){//在没有切换之前加载，提升用户体验

  	}
  }
});
