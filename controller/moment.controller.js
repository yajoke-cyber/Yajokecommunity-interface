const { APP_PORT, APP_HOST, PROTOCOL } = process.env;
const {
  getMomentByUser,
  createMoment,
  getAllMoments,
  getSingleMoment,
  getSingleMomentReply,
} = require("../service/moment.service");
const { getLikes } = require("../service/like.service");
const { getAvatar } = require("../service/file.service");
class MomentController {
  async createMoment(ctx, next) {
    const { content } = ctx.request.body;
    const result = await createMoment(ctx.user, content);
    ctx.body = { msg: "添加成功" };
  }
  async getMyMoment(ctx, next) {
    const result = await getMomentByUser(ctx.user);
    ctx.body = result;
  }
  async getAllMoments(ctx, next) {
    const result = await getAllMoments();
    await Promise.all(
      result.map((data) => {
        return (async () => {
          await getLikes(0, data.moment_id).then((res) => {
            data.likesnum = res.length;
          });
        })();
      })
    ).then(() => {
      ctx.body = result;
    });

    ctx.body = result;
  }
  async getSingleMoment(ctx, next) {
    const result = await getSingleMoment(ctx.params.id);
    ctx.body = result;
  }
  async getSingleMomentReply(ctx, next) {
    const result = await getSingleMomentReply(ctx.params.id);
    await Promise.all(
      result.map((data) => {
        return (async () => {
          await getLikes(1, data.id).then((res) => {
            data.likesnum = res.length;
          });
          data.user_avatar = `${PROTOCOL}://${APP_HOST}:${APP_PORT}/avatar/${data.user_id}`;
        })();
      })
    ).then(() => {
      ctx.body = result;
    });
  }
}
module.exports = new MomentController();
