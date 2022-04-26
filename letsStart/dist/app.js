"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats/cats.model");
var express = require("express");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("logging middle ware");
    next();
});
app.use(express.json());
app.get("/cats", function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send({
                success: false,
                error: error.message,
            });
        }
    }
});
app.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        var cats = cats_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send({
                success: false,
                error: error.message,
            });
        }
    }
});
app.post("/cats", function (req, res) {
    try {
        var data = req.body;
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: {
                data: data,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send({
                success: false,
                error: error.message,
            });
        }
    }
});
app.use(function (req, res, next) {
    console.log("error middle ware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, function () {
    console.log("Example app listening on port 8000");
});
//# sourceMappingURL=app.js.map