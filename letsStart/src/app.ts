import catsRouter from "./cats/cats.route";
import * as express from "express";

const app: express.Express = express();

// logging middle ware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("logging middle ware");
  next();
});

// json middle ware
app.use(express.json());

app.use(catsRouter);

// 404 middle ware
app.use((req, res, next) => {
  console.log("error middle ware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
