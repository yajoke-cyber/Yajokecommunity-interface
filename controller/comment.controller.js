const { createComment, addComment } = require("../service/comment.service");
class CommentController {
  async createComment(ctx, next) {
    const { content } = ctx.request.body;
    const { moment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await createComment(content, moment_id, id);
    ctx.body = result;
  }
  async addComment(ctx, next) {
    const { content } = ctx.request.body;
    const { moment_id, comment_id } = ctx.params;
    const { id } = ctx.user;
    const result = await addComment(content, moment_id, id, comment_id);
    ctx.body = result;
  }
}
module.exports = new CommentController();
