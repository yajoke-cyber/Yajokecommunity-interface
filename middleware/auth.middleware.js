const jwt = require("jsonwebtoken");
const errorTypes = require("../constants/errorTypes");
const service = require("../service/user.service");
const { PUBLIC_KEY } = require("../app/config");
const md5password = require("../utils/md5pwd");
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PWD_VACANT);
    return ctx.app.emit("error", error, ctx);
    //把参数传递过去
  }
  const result = await service.getByUserName(name);
  if (!result.length) {
    const error = new Error(errorTypes.REGISTER_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  if (md5password(password) !== result[0].password) {
    const error = new Error(errorTypes.PASSWORD_INCORRECT);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = { id: result[0].id, name: result[0].name };
  await next();
};
const verifyAuth = async (ctx, next) => {
  try {
    const token = ctx.headers.authorization.replace("Bearer ", "");
    const result = jwt.verify(token, PUBLIC_KEY, { algorithms: ["RS256"] });
    ctx.user = { id: result.id, name: result.name };
    //解析得出来通过，解析不出来报bug输出错误
    await next();
  } catch (err) {
    console.log(err);
    const error = new Error(errorTypes.UNAUTHORIZATION);
    return ctx.app.emit("error", error, ctx);
  }
};
module.exports = { verifyLogin, verifyAuth };
