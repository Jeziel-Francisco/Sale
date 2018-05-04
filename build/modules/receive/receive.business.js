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
var interfate_business_modules_1 = require("../interfate-business.modules");
var receive_service_1 = require("./receive.service");
var ReceiveBusiness = /** @class */ (function (_super) {
    __extends(ReceiveBusiness, _super);
    function ReceiveBusiness() {
        return _super.call(this, receive_service_1.default) || this;
    }
    return ReceiveBusiness;
}(interfate_business_modules_1.default));
exports.default = new ReceiveBusiness();
