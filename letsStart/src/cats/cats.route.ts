import { Cat, CatType } from ".//cats.model"; //mock db
import { Router } from "express";

const router = Router();

router.get("/cats", (req, res) => {
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

router.get("/cats/:id", (req, res) => {
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

router.post("/cats", (req, res) => {
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

router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
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

router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
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

router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: {
        newCat,
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

export default router;
