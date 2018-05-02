"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_permissions_business_1 = require("./user-permissions.business");
var UserPermissionsController = /** @class */ (function () {
    function UserPermissionsController() {
    }
    UserPermissionsController.prototype.findById = function (req, res) {
        user_permissions_business_1.default.findById(res, req.params.id);
    };
    UserPermissionsController.prototype.create = function (req, res) {
        user_permissions_business_1.default.create(res, req.body);
    };
    UserPermissionsController.prototype.update = function (req, res) {
        user_permissions_business_1.default.update(res, req.params.id, req.body);
    };
    UserPermissionsController.prototype.remove = function (req, res) {
        user_permissions_business_1.default.remove(res, req.params.id);
    };
    return UserPermissionsController;
}());
exports.default = new UserPermissionsController();
