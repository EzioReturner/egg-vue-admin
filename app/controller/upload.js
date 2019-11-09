'use strict';

const Controller = require('egg').Controller;
const upload = require('../lib/upload.js');

/**
 * 上传客群
 */
class UploadController extends Controller {
  async uploadCustomers() {
    const { ctx } = this;
    const uploadUrl = ctx.app.config.api.domain + '/usersgroup/uploadFile';
    const extraData = {
      key: 'groupName',
      value: ctx.request.header.groupname ? ctx.request.header.groupname : ''
    };
    this.app.logger.info('upload_file', `uploadUrl=${uploadUrl}`, extraData);
    const result = await upload.forSpringMvc(ctx, uploadUrl, 'uploadFile', extraData);
    this.app.logger.info('upload_file', `result=${result}`);
    ctx.body = result;
  }
}

module.exports = UploadController;
