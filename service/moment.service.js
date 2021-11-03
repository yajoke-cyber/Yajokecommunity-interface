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
    const statement = `SELECT users.id,users.name,moment.content 
    FROM users 
    RIGHT JOIN moment 
    ON users.id=moment.user_id 
    WHERE users.id=?;`;
    const result = await connections.execute(statement, [id]);
    return result[0];
  }
  async getAllMoments() {
    const statement = `SELECT users.id,users.name,moment.content 
    FROM moment 
    RIGHT JOIN users 
    ON users.id=moment.user_id `;
    const result = await connections.execute(statement);
    return result[0];
  }
}
module.exports = new MomentService();
