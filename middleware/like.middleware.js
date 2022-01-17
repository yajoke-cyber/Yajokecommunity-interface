const { checkLiked } = require("../service/like.service");
const verifyLikedMoment = async (ctx, next) => {
  const { moment_id } = ctx.params;
  const { id } = ctx.user;
  let result = await checkLiked(0, moment_id, id);
  if (result.length) {
    ctx.body = { msg: "您已经点赞过了" };
  } else {
    await next();
  }
};
const verifyLikedComment = async (ctx, next) => {
  const { comment_id } = ctx.params;
  const { id } = ctx.user;
  let result = await checkLiked(1, comment_id, id);
  if (result.length) {
    ctx.body = { msg: "您已经点赞过了" };
  } else {
    await next();
  }
};
module.exports = { verifyLikedMoment, verifyLikedComment };
