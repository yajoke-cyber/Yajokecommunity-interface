const connections = require("../app/database");
//0为动态,1为评论
class LikeService {
  async getLikes(flag, id) {
    let statement;
    if (!flag) {
      statement = `SELECT id,user_id FROM moment_like WHERE moment_id=?;`;
    } else {
      statement = `SELECT id,user_id FROM comment_like WHERE comment_id=?;`;
    }
    const [result] = await connections.execute(statement, [id]);
    //传递数据
    return result;
  }
  async checkLiked(flag, id, user_id) {
    let statement;
    if (!flag) {
      statement = `SELECT * FROM moment_like where moment_id = ? AND user_id=?;`;
    } else {
      statement = `SELECT * FROM comment_like where comment_id = ? AND user_id=?;`;
    }
    const [result] = await connections.execute(statement, [id, user_id]);
    return result;
  }
  async likeByMoment(flag, id, user_id) {
    let statement;
    if (!flag) {
      statement = `INSERT INTO moment_like (moment_id, user_id) VALUES(?,?);`;
    } else {
      statement = `INSERT INTO comment_like (comment_id, user_id) VALUES(?,?);`;
    }
    const result = await connections.execute(statement, [id, user_id]);
    //传递数据
    return result;
  }
  async dislikeByMoment(flag, id, user_id) {
    let statement;
    if (!flag) {
      statement = `delete from moment_like where moment_id = ? AND user_id=?;`;
    } else {
      statement = `delete from comment_like where comment_id = ? AND user_id=?;`;
    }
    const result = await connections.execute(statement, [id, user_id]);
    //传递数据
    return result;
  }
}
module.exports = new LikeService();
