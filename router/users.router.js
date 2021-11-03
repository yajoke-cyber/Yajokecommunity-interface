const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const { verifyUser, passwordHandle } = require("../middleware/user.middleware");
const UserRouter = new Router({ prefix: "/users" });
UserRouter.post("/", verifyUser, passwordHandle, create);
module.exports = UserRouter;
