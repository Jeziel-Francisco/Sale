"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var company_phone_business_1 = require("./company-phone.business");
var CompanyPhoneController = /** @class */ (function () {
    function CompanyPhoneController() {
    }
    CompanyPhoneController.prototype.findById = function (req, res) {
        company_phone_business_1.default.findById(res, req.params.id);
    };
    CompanyPhoneController.prototype.create = function (req, res) {
        company_phone_business_1.default.create(res, req.body);
    };
    CompanyPhoneController.prototype.update = function (req, res) {
        company_phone_business_1.default.update(res, req.params.id, req.body);
    };
    CompanyPhoneController.prototype.remove = function (req, res) {
        company_phone_business_1.default.remove(res, req.params.id);
    };
    return CompanyPhoneController;
}());
exports.default = new CompanyPhoneController();
