const connections = require("../app/database");
class MomentService {
  async createComment(content, moment_id, user_id) {
    const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES(?,?,?);`;
    const result = await connections.execute(statement, [
      content,
      moment_id,
      user_id,
    ]);
    //传递数据
    return result;
  }
  async addComment(content, moment_id, user_id, comment_id) {
    const statement = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES(?,?,?,?);`;
    const result = await connections.execute(statement, [
      content,
      moment_id,
      user_id,
      comment_id,
    ]);
    //传递数据
    return result;
  }
}
module.exports = new MomentService();
