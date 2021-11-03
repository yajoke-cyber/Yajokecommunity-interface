const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const useRoutes = require("../router");
const errorHandler = require("./error-handle");
const app = new Koa();
app.use(bodyParser());
useRoutes(app);
app.on("error", errorHandler);
//监听错误事件
module.exports = app;
