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
var interface_service_modules_1 = require("../interface-service.modules");
var models = require('./../../models');
var ProductProviderService = /** @class */ (function (_super) {
    __extends(ProductProviderService, _super);
    function ProductProviderService() {
        return _super.call(this, models.ProductProvider, [''], ['id', 'providerId', 'productId']) || this;
    }
    return ProductProviderService;
}(interface_service_modules_1.default));
exports.default = new ProductProviderService();
