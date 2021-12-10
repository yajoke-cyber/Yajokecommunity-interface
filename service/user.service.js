const connections = require("../app/database");
class UserService {
  async create(user) {
    console.log("执行数据库创建语句");
    const { name, password } = user;
    const statement = `INSERT INTO users (name,password) VALUES(?,?);`;
    const result = await connections.execute(statement, [name, password]);
    //传递数据
    return result;
  }
  async getByUserName(name) {
    console.log("获取用户名");
    const statement = `SELECT * FROM users WHERE name=?;`;
    const result = await connections.execute(statement, [name]);
    return result[0];
  }
}
module.exports = new UserService();
