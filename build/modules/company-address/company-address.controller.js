"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var company_address_business_1 = require("./company-address.business");
var CompanyAddressController = /** @class */ (function () {
    function CompanyAddressController() {
    }
    CompanyAddressController.prototype.findById = function (req, res) {
        company_address_business_1.default.findById(res, req.params.id);
    };
    CompanyAddressController.prototype.create = function (req, res) {
        company_address_business_1.default.create(res, req.body);
    };
    CompanyAddressController.prototype.update = function (req, res) {
        company_address_business_1.default.update(res, req.params.id, req.body);
    };
    CompanyAddressController.prototype.remove = function (req, res) {
        company_address_business_1.default.remove(res, req.params.id);
    };
    return CompanyAddressController;
}());
exports.default = new CompanyAddressController();
