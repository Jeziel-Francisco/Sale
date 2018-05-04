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
var client_phone_business_1 = require("./client-phone.business");
var interface_controller_modules_1 = require("../interface-controller.modules");
var ClientPhoneController = /** @class */ (function (_super) {
    __extends(ClientPhoneController, _super);
    function ClientPhoneController() {
        return _super.call(this, client_phone_business_1.default) || this;
    }
    return ClientPhoneController;
}(interface_controller_modules_1.default));
exports.default = new ClientPhoneController();
