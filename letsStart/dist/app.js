"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_route_1 = require("./cats/cats.route");
var express = require("express");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("logging middle ware");
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            console.log("error middle ware");
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(8000, function () {
            _this.setMiddleware();
            console.log("Example app listening on port 8000");
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map