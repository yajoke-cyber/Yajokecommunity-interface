const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
class MomentController {
  async createMoment(ctx, next) {
    const { name, id } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });
    ctx.body = {
      id,
      name,
      token,
    };
  }
}
module.exports = new MomentController();
