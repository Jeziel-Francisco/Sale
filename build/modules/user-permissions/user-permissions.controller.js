"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_permissions_business_1 = require("./user-permissions.business");
var interface_controller_modules_1 = require("../interface-controller.modules");
var UserPermissionsController = /** @class */ (function (_super) {
    __extends(UserPermissionsController, _super);
    function UserPermissionsController() {
        return _super.call(this, user_permissions_business_1.default) || this;
    }
    return UserPermissionsController;
}(interface_controller_modules_1.default));
exports.default = new UserPermissionsController();
