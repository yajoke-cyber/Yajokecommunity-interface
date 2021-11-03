const Router = require("koa-router");
const { login } = require("../controller/auth.controller");
const { verifyLogin } = require("../middleware/auth.middleware");
const LoginRouter = new Router({ prefix: "/login" });
LoginRouter.post("/", verifyLogin, login);
module.exports = LoginRouter;
