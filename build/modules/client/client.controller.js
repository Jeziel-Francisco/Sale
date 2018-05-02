"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_business_1 = require("./client.business");
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    ClientController.prototype.findById = function (req, res) {
        client_business_1.default.findById(res, req.params.id);
    };
    ClientController.prototype.create = function (req, res) {
        client_business_1.default.create(res, req.body);
    };
    ClientController.prototype.update = function (req, res) {
        client_business_1.default.update(res, req.params.id, req.body);
    };
    ClientController.prototype.remove = function (req, res) {
        client_business_1.default.remove(res, req.params.id);
    };
    return ClientController;
}());
exports.default = new ClientController();
