const fs = require("fs");
const { uploadAvatar, getAvatar } = require("../service/file.service");
class FileController {
  async uploadAvatar(ctx, next) {
    const { id } = ctx.user;
    const { mimetype, filename, size } = ctx.req.file;
    const result = await uploadAvatar(id, mimetype, filename, size);
    ctx.body = result;
  }
  async getAvatar(ctx, next) {
    const result = await getAvatar(3);
    const { filename, mimetype } = result;
    ctx.response.set("content-type", mimetype); //设置图片为直接获取，而不是一个图片文件
    ctx.body = fs.createReadStream(`./uploads/avatar/${filename}`);
  }
}
module.exports = new FileController();
