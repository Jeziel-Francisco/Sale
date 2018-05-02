"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_business_1 = require("./user.business");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.verify = function (req, res) {
        user_business_1.default.verify(res);
    };
    UserController.prototype.findAll = function (req, res) {
        user_business_1.default.findAll(res);
    };
    UserController.prototype.getByUsername = function (req, res) {
        user_business_1.default.getByUsername(res, req.params.username);
    };
    UserController.prototype.create = function (req, res) {
        user_business_1.default.create(res, req.body);
    };
    UserController.prototype.update = function (req, res) {
        user_business_1.default.update(res, req.params.id, req.body);
    };
    UserController.prototype.updatePassword = function (req, res) {
        user_business_1.default.updatePassword(res, req.params.id, req.body);
    };
    UserController.prototype.updateUsername = function (req, res) {
        user_business_1.default.updateUsername(res, req.params.id, req.body);
    };
    return UserController;
}());
exports.default = new UserController();
