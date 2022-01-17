const fs = require("fs");
const {
  uploadAvatar,
  getAvatar,
  deleteAvatar,
} = require("../service/file.service");
class FileController {
  async uploadAvatar(ctx, next) {
    try {
      console.log(ctx.req.file);
      const { id } = ctx.user;
      const res = await getAvatar(id);
      if (!res) {
        const { mimetype, filename, size } = ctx.req.file;
        await uploadAvatar(id, mimetype, filename, size);
      } else {
        fs.unlink(`./uploads/avatar/${res.filename}`, async (err) => {
          if (err) console.log(err);
          else {
            await deleteAvatar(id);
            const { mimetype, filename, size } = ctx.req.file;
            await uploadAvatar(id, mimetype, filename, size);
          }
        });
      }
      ctx.body = { msg: "上传头像成功" };
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  }
  async getAvatar(ctx, next) {
    let id;
    if (ctx.params.user_id) id = ctx.params.user_id;
    else id = ctx.user.id;
    const result = await getAvatar(id);
    if (!result) {
      ctx.response.set("content-type", "image/jpeg");
      ctx.body = fs.createReadStream(`./uploads/avatar/default.JPG`);
      return;
    }
    const { filename, mimetype } = result;
    ctx.response.set("content-type", mimetype); //设置图片为直接获取，而不是一个图片文件
    ctx.body = fs.createReadStream(`./uploads/avatar/${filename}`);
  }
}
module.exports = new FileController();
