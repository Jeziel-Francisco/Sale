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
var sale_business_1 = require("./sale.business");
var interface_controller_modules_1 = require("../interface-controller.modules");
var SaleController = /** @class */ (function (_super) {
    __extends(SaleController, _super);
    function SaleController() {
        return _super.call(this, sale_business_1.default) || this;
    }
    return SaleController;
}(interface_controller_modules_1.default));
exports.default = new SaleController();
