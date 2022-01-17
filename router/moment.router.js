const Router = require("koa-router");
const {
  getSingleMoment,
  getMyMoment,
  createMoment,
  getAllMoments,
  getSingleMomentReply,
} = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
momentRouter.get("/", verifyAuth, getAllMoments);
momentRouter.get("/:id", verifyAuth, getSingleMoment);
momentRouter.get("/:id/getreply", verifyAuth, getSingleMomentReply);
momentRouter.post("/mymoment", verifyAuth, getMyMoment);
momentRouter.post("/create", verifyAuth, createMoment);
momentRouter.post("/upload/:id", verifyAuth, getSingleMoment); //给某一动态上传图片
module.exports = momentRouter;
