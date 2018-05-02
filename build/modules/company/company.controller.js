"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var company_business_1 = require("./company.business");
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.prototype.findById = function (req, res) {
        company_business_1.default.findById(res, req.params.id);
    };
    CompanyController.prototype.create = function (req, res) {
        company_business_1.default.create(res, req.body);
    };
    CompanyController.prototype.update = function (req, res) {
        company_business_1.default.update(res, req.params.id, req.body);
    };
    CompanyController.prototype.remove = function (req, res) {
        company_business_1.default.remove(res, req.params.id);
    };
    return CompanyController;
}());
exports.default = new CompanyController();
