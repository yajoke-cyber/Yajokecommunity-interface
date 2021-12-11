const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const useRoutes = require("../router");
const errorHandler = require("./error-handle");
const app = new Koa();
app.use(bodyParser());
//下面为解决跨域请求必须要放置的跨域头
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    maxAge: 6, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法'
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  })
);
useRoutes(app);
app.on("error", errorHandler);
app.use(async (req, next) => {
  console.log(req);
  await next();
});
//监听错误事件
module.exports = app;
