import catsRouter from "./cats/cats.route";
import * as express from "express";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middle ware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("logging middle ware");
      next();
    });

    // json middle ware
    this.app.use(express.json());

    this.setRoute();

    // 404 middle ware
    this.app.use((req, res, next) => {
      console.log("error middle ware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.app.listen(8000, () => {
      this.setMiddleware();
      console.log(`Example app listening on port 8000`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
