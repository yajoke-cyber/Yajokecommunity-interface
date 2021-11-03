const errorTypes = require("../constants/errorTypes");
const service = require("../service/user.service");
const md5password = require("../utils/md5pwd");
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PWD_VACANT);
    return ctx.app.emit("error", error, ctx);
    //把参数传递过去
  }
  const result = await service.getByUserName(name);
  if (result.length) {
    const error = new Error(errorTypes.USER_AREADY_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
const passwordHandle = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
};
module.exports = { verifyUser, passwordHandle };
