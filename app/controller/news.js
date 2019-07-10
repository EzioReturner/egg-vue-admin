const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    const newsList = [
      {
        title: '123',
        url: 'asdasd'
      }
    ]
    await ctx.render('news/list.ejs', { list: newsList });
  }
}

module.exports = NewsController;