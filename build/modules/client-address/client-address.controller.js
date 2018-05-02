"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_address_business_1 = require("./client-address.business");
var ClientAddressController = /** @class */ (function () {
    function ClientAddressController() {
    }
    ClientAddressController.prototype.findById = function (req, res) {
        client_address_business_1.default.findById(res, req.params.id);
    };
    ClientAddressController.prototype.create = function (req, res) {
        client_address_business_1.default.create(res, req.body);
    };
    ClientAddressController.prototype.update = function (req, res) {
        client_address_business_1.default.update(res, req.params.id, req.body);
    };
    ClientAddressController.prototype.remove = function (req, res) {
        client_address_business_1.default.remove(res, req.params.id);
    };
    return ClientAddressController;
}());
exports.default = new ClientAddressController();
