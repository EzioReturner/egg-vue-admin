module.exports = app => {
  const { router, controller } = app;
  const gzip = app.middleware.gzip({ threshold: 1 });
  router.get('/home', controller.home.index);
  router.get('/news', controller.news.list);
  router.redirect('/', '/home', 302);
  router.get('/needGzip', gzip, controller.news.list);
};