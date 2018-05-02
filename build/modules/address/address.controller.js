"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_business_1 = require("./address.business");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.prototype.findById = function (req, res) {
        address_business_1.default.findById(res, req.params.id);
    };
    AddressController.prototype.create = function (req, res) {
        address_business_1.default.create(res, req.body);
    };
    AddressController.prototype.update = function (req, res) {
        address_business_1.default.update(res, req.params.id, req.body);
    };
    AddressController.prototype.remove = function (req, res) {
        address_business_1.default.remove(res, req.params.id);
    };
    return AddressController;
}());
exports.default = new AddressController();
