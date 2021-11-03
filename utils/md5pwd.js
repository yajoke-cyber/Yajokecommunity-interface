const crypto = require("crypto");
const md5password = (password) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update(password).digest("hex");
  //update得到加密的对象，通过digest转为buffer类型里面的字符串则设置为16进制，减小密码长度
  return result;
};
module.exports = md5password;
