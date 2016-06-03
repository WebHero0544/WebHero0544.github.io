require('./lib/spa.min.js');

require('./views/guide.js');
require('./views/index.js');
require('./views/single.js');
require('./views/match.js');
require('./views/school.js');
require('./views/my.js');
require('./views/home.js');

// 配置视图的信息
SPA.config({
  indexView: 'guide'//定义第一个要显示的视图 默认为index
});
