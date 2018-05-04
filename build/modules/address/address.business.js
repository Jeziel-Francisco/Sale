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
var address_service_1 = require("./address.service");
var interfate_business_modules_1 = require("../interfate-business.modules");
var AddressBusiness = /** @class */ (function (_super) {
    __extends(AddressBusiness, _super);
    function AddressBusiness() {
        return _super.call(this, address_service_1.default) || this;
    }
    return AddressBusiness;
}(interfate_business_modules_1.default));
exports.default = new AddressBusiness();
