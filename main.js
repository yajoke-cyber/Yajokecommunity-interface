const app = require("./app/index");
require("./app/database");
const config = require("./app/config");
console.log(process.cwd());
app.listen(config.APP_PORT, () => {
  console.log(`端口在${process.env.APP_PORT}打开了`);
});
