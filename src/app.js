const path = require("path");
const jsonServer = require("json-server");
const router = require("./router");
const db = require("./db")();

const TokenService = require("./service/token");
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "../public"),
});
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 鉴权
server.use((req, res, next) => {
  if (TokenService.isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use((req, res, next) => {
  const json = res.json.bind(res);
  res.success = (data) => {
    return json({
      code: 0,
      msg: "成功",
      data,
    });
  };
  res.fail = (msg, code = -1, data) => {
    return json({
      code,
      msg,
      data,
    });
  };
  next();
});

router(server);
const jsonRouter = jsonServer.router(db);

server.use((req, res, next) => {
  setTimeout(next, 1000);
});
server.use("/api", jsonRouter);

server.listen(8000, () => {
  console.log("JSON Server is running at 8000");
});
