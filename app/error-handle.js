const errorTypes = require("../constants/errorTypes");
const errorHandler = (error, ctx) => {
  let status, message, code;
  switch (error.message) {
    case errorTypes.USER_AREADY_EXISTS:
      code = 409;
      status = 200;
      message = "用户已经存在";
      break;
    case errorTypes.NAME_OR_PWD_VACANT:
      code = 400;
      status = 200;
      message = "用户名或者密码不能为空";
      break;
    case errorTypes.REGISTER_REQUIRED:
      code = 404;
      status = 200;
      message = "请先注册";
      break;
    case errorTypes.PASSWORD_INCORRECT:
      code = 400;
      status = 200;
      message = "密码错误";
      break;
    case errorTypes.UNAUTHORIZATION:
      code = 401;
      status = 200;
      message = "未授权的token~";
      break;
    default:
      code = 404;
      status = 404;
      message = "NOT FOUND";
      break;
  }
  ctx.body = {
    error: {
      code,
      message,
    },
  };
};
module.exports = errorHandler;
