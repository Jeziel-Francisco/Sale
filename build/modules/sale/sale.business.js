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
var sale_service_1 = require("./sale.service");
var interfate_business_modules_1 = require("../interfate-business.modules");
var SaleBusiness = /** @class */ (function (_super) {
    __extends(SaleBusiness, _super);
    function SaleBusiness() {
        return _super.call(this, sale_service_1.default) || this;
    }
    return SaleBusiness;
}(interfate_business_modules_1.default));
exports.default = new SaleBusiness();
