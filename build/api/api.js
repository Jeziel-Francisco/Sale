"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes/routes");
var auth_1 = require("./../auth");
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var morgan = require("morgan");
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
        this.auth = auth_1.default();
        this.middeware();
    }
    Api.prototype.middeware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.express.use(this.auth.initialize());
        this.routes(this.express, this.auth);
    };
    Api.prototype.routes = function (app, auth) {
        routes_1.default.routes(app, auth);
    };
    return Api;
}());
exports.default = new Api().express;
