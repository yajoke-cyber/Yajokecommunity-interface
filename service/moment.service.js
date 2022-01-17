const connections = require("../app/database");
class MomentService {
  async createMoment(user, content) {
    const { id } = user;
    const statement = `INSERT INTO moment (user_id,content) VALUES(?,?);`;
    const result = await connections.execute(statement, [id, content]);
    //传递数据
    return result;
  }
  async getSingleMoment(moment_id) {
    const statement = `SELECT content FROM moment WHERE id=?;`;
    const [result] = await connections.execute(statement, [moment_id]);
    return result[0];
  }
  async getMomentByUser(user) {
    const { id } = user;
    const statement = `SELECT users.id,users.name,moment.content, moment.id as  moment_id
    FROM users 
    RIGHT JOIN moment 
    ON users.id=moment.user_id 
    WHERE users.id=?;`;
    const result = await connections.execute(statement, [id]);
    return result[0];
  }
  async getAllMoments() {
    const statement = `SELECT users.id as user_id,users.name,moment.content,moment.id as moment_id
    FROM users 
    RIGHT JOIN moment 
    ON users.id=moment.user_id;`;
    const result = await connections.execute(statement);
    return result[0];
  }
  async getSingleMomentReply(moment_id) {
    const statement = `SELECT comment.id,comment.content,comment.user_id,users.name as uname,comment.comment_id as comment_id,comment.createAt
    FROM comment
    RIGHT JOIN moment 
    ON comment.moment_id=moment.id
		RIGHT JOIN users
		ON comment.user_id=users.id
		WHERE moment.id=?;`;
    const [result] = await connections.execute(statement, [moment_id]);
    return result;
  }
}
module.exports = new MomentService();
