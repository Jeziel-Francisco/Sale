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
var interface_controller_modules_1 = require("../interface-controller.modules");
var product_group_business_1 = require("./product-group.business");
var ProductGroupController = /** @class */ (function (_super) {
    __extends(ProductGroupController, _super);
    function ProductGroupController() {
        return _super.call(this, product_group_business_1.default) || this;
    }
    return ProductGroupController;
}(interface_controller_modules_1.default));
exports.default = new ProductGroupController();
