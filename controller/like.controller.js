const {
  getLikes,
  likeByMoment,
  dislikeByMoment,
} = require("../service/like.service");
class LikeController {
  async checkMoment(ctx, next) {
    const { moment_id } = ctx.params;
    const result = await getLikes(0, moment_id);
    ctx.body = { liked_users: result, liked_num: result.length };
  }
  async likeMoment(ctx, next) {
    const { moment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await likeByMoment(0, moment_id, id);
    ctx.body = { msg: "动态点赞成功" };
  }
  async dislikeMoment(ctx, next) {
    const { moment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await dislikeByMoment(0, moment_id, id);
    ctx.body = { msg: "取消动态点赞成功" };
  }
  async checkComment(ctx, next) {
    const { comment_id } = ctx.params;
    const result = await getLikes(1, comment_id);
    ctx.body = { liked_users: result, liked_num: result.length };
  }
  async likeComment(ctx, next) {
    const { comment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await likeByMoment(1, comment_id, id);
    ctx.body = { msg: "动态评论点赞成功" };
  }
  async dislikeComment(ctx, next) {
    const { comment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await dislikeByMoment(1, comment_id, id);
    ctx.body = { msg: "取消评论点赞成功" };
  }
}
module.exports = new LikeController();
