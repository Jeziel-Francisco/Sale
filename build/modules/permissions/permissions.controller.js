"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permissions_business_1 = require("./permissions.business");
var PermissionsController = /** @class */ (function () {
    function PermissionsController() {
    }
    PermissionsController.prototype.findById = function (req, res) {
        permissions_business_1.default.findById(res, req.params.id);
    };
    PermissionsController.prototype.create = function (req, res) {
        permissions_business_1.default.create(res, req.body);
    };
    PermissionsController.prototype.update = function (req, res) {
        permissions_business_1.default.update(res, req.params.id, req.body);
    };
    PermissionsController.prototype.remove = function (req, res) {
        permissions_business_1.default.remove(res, req.params.id);
    };
    return PermissionsController;
}());
exports.default = new PermissionsController();
