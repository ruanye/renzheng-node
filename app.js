const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 设置跨域
app.use(cors());
app.use(express.static(path.resolve(__dirname, "uploads")));

//路由配置
const user = require("./router/user");
const api = require("./router/api");
const allapi = require("./router/allapi");
const project = require("./router/project");
const upload = require("./router/upload");
const statistical = require("./router/statistical.js");

// 持久化登录验证

app.use("/user", user);
app.use("/api", api);
app.use("/mock", allapi);
app.use("/project", project);
app.use("/statistical", statistical);
app.listen(80, () => {
  console.log("监听80端口");
});
module.exports = app;
