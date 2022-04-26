"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_route_1 = require("./cats/cats.route");
var express = require("express");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("logging middle ware");
    next();
});
app.use(express.json());
app.use(cats_route_1.default);
app.use(function (req, res, next) {
    console.log("error middle ware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, function () {
    console.log("Example app listening on port 8000");
});
//# sourceMappingURL=app.js.map