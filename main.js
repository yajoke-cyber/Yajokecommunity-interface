const app = require("./app/index");
const cors = require("koa2-cors");
require("./app/database");
const config = require("./app/config");
console.log(process.cwd());
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法'
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  })
);
app.listen(config.APP_PORT, () => {
  console.log(`端口在${process.env.APP_PORT}打开了`);
});
