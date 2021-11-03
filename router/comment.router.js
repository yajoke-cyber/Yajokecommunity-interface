const Router = require("koa-router");
const {
  createComment,
  addComment,
} = require("../controller/comment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const CommentRouter = new Router({ prefix: "/moment/:moment_id/reply" });
CommentRouter.post("/", verifyAuth, createComment);
CommentRouter.post("/:comment_id", verifyAuth, addComment);
module.exports = CommentRouter;
