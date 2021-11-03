const errorTypes = require("../constants/errorTypes");
const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.USER_AREADY_EXISTS:
      status = 409;
      message = "用户已经存在";
      break;
    case errorTypes.NAME_OR_PWD_VACANT:
      status = 400;
      message = "用户名或者密码不能为空";
      break;
    case errorTypes.REGISTER_REQUIRED:
      status = 400;
      message = "请先注册";
      break;
    case errorTypes.PASSWORD_INCORRECT:
      status = 400;
      message = "密码错误";
      break;
    case errorTypes.UNAUTHORIZATION:
      status = 401;
      message = "未授权的token~";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
      break;
  }
  ctx.status = status;
  ctx.body = message;
};
module.exports = errorHandler;
