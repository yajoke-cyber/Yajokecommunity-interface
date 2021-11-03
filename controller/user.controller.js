const service = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    const result = await service.create(ctx.request.body);
    ctx.body = result;
  }
}
module.exports = new UserController();
