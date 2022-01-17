const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { uploadAvatar, getAvatar } = require("../controller/file.controller"); //寻找请求中的avatar字段
const { avatarHandler } = require("../middleware/file.middleware");
const avatarRouter = new Router({ prefix: "/avatar" });
avatarRouter.post("/upload", verifyAuth, avatarHandler, uploadAvatar);
avatarRouter.get("/", verifyAuth, getAvatar);
avatarRouter.get("/:user_id", getAvatar);
module.exports = avatarRouter;
