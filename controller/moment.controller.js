const {
  getMomentByUser,
  createMoment,
  getAllMoments,
  getSingleMoment,
} = require("../service/moment.service");
class MomentController {
  async createMoment(ctx, next) {
    console.log(123);
    const { content } = ctx.request.body;
    const result = await createMoment(ctx.user, content);
    ctx.body = result;
  }
  async getMyMoment(ctx, next) {
    const result = await getMomentByUser(ctx.user);
    ctx.body = result;
  }
  async getAllMoments(ctx, next) {
    const result = await getAllMoments();
    ctx.body = result;
  }
  async getSingleMoment(ctx, next) {
    const result = await getSingleMoment(ctx.params.id);
    ctx.body = result;
  }
}
module.exports = new MomentController();
