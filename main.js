const app = require("./app/index");
require("./app/database");
const config = require("./app/config");
console.log(process.cwd());
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set("Access-Control-Allow-Headers", "Content-Type");
//   ctx.set("Access-Control-Allow-Methods", "GET");
//   await next();
// });

app.listen(config.APP_PORT, () => {
  console.log(`端口在${process.env.APP_PORT}打开了`);
});
