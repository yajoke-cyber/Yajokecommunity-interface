const Router = require("koa-router");
const InfoRouter = new Router({ prefix: "/info" });
InfoRouter.get("/", (ctx) => {
  console.log("测试");
  ctx.body = "哈哈哈哈";
});
module.exports = InfoRouter;
