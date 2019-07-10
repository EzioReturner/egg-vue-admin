module.exports = {
  keys: "asd13176a7sdhkasd",
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  news: {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  },
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }
};