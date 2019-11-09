'use strict';
const Controller = require('egg').Controller;
/**
 * 农场
 */
class Download extends Controller {
  /**
   * 模板下载
   * @returns {Promise<void>}
   */
  async index() {
    const { ctx } = this;
    const {
      request: { path, body },
      app
    } = ctx;
    const { domain, defaultToken, headerTokenKey, timeout } = app.config.api;
    const url = `${domain}${path}`;
    app.logger.info('[download url]', url);
    let headers = {};
    const sessionToken = await ctx.getSession(app.config.authLogin.sessionTokenKey);
    headers[headerTokenKey] = sessionToken || defaultToken;
    const curlParam = {
      method: 'post',
      data: body,
      headers: headers,
      timeout: timeout,
      contentType: 'json'
    };
    const result = await this.ctx.curl(url, curlParam);

    if (result.status === 200) {
      const disposition = result.headers['content-disposition'];
      ctx.body = result.data;
      ctx.response.set({
        'Access-Control-Expose-Headers': 'Content-Disposition',
        'Content-Type': 'application/octet-stream;charset=UTF-8',
        'Content-Disposition': disposition
      });
    } else {
      ctx.status = result.status;
    }
  }
}

module.exports = Download;
