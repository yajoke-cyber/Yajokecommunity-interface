const Router = require("koa-router");
const {
  checkComment,
  likeComment,
  dislikeComment,
  checkMoment,
  likeMoment,
  dislikeMoment,
} = require("../controller/like.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const {
  verifyLikedMoment,
  verifyLikedComment,
} = require("../middleware/like.middleware");
const likeRouter = new Router({ prefix: "/like" });
likeRouter.get("/moment/:moment_id", verifyAuth, checkMoment);
likeRouter.post(
  "/momentup/:moment_id",
  verifyAuth,
  verifyLikedMoment,
  likeMoment
);
likeRouter.post("/momentdown/:moment_id", verifyAuth, dislikeMoment);
likeRouter.get("/comment/:comment_id", verifyAuth, checkComment);
likeRouter.post(
  "/commentup/:comment_id",
  verifyAuth,
  verifyLikedComment,
  likeComment
);
likeRouter.post("/commentdown/:comment_id", verifyAuth, dislikeComment);
module.exports = likeRouter;
