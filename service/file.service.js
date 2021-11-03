const connections = require("../app/database");
class FileService {
  async uploadAvatar(user_id, mimetype, filename, size) {
    const statement = `INSERT INTO avatar (user_id,mimetype, filename, size) VALUES(?,?,?,?);`;
    const result = await connections.execute(statement, [
      user_id,
      mimetype,
      filename,
      size,
    ]);
    //传递数据
    return result;
  }
  async getAvatar(id) {
    const statement = `SELECT * FROM avatar WHERE user_id=?`;
    const [result] = await connections.execute(statement, [id]);
    return result.pop();
  }
}
module.exports = new FileService();
