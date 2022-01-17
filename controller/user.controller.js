const service = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    await service.create(ctx.request.body);
    ctx.body = { message: "注册成功" };
  }
}
module.exports = new UserController();
