"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_phone_business_1 = require("./client-phone.business");
var ClientPhoneController = /** @class */ (function () {
    function ClientPhoneController() {
    }
    ClientPhoneController.prototype.findById = function (req, res) {
        client_phone_business_1.default.findById(res, req.params.id);
    };
    ClientPhoneController.prototype.create = function (req, res) {
        client_phone_business_1.default.create(res, req.body);
    };
    ClientPhoneController.prototype.update = function (req, res) {
        client_phone_business_1.default.update(res, req.params.id, req.body);
    };
    ClientPhoneController.prototype.remove = function (req, res) {
        client_phone_business_1.default.remove(res, req.params.id);
    };
    return ClientPhoneController;
}());
exports.default = new ClientPhoneController();
