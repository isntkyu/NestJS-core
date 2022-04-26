import { Cat, CatType } from "./cats/cats.model"; //mock db
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

app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  }
});

app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  }
});

app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  }
});

// 404 middle ware
app.use((req, res, next) => {
  console.log("error middle ware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
