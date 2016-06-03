var matchTpl=require('../tpl/match.string');

SPA.defineView('match', {
  html: matchTpl,
  plugins:['delegated'],



  //绑定功能
  bindEvents:{
  	beforeShow:function(){//在没有切换之前加载，提升用户体验

  	}
  }
});