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
var city_business_1 = require("./city.business");
var interface_controller_modules_1 = require("../interface-controller.modules");
var CityController = /** @class */ (function (_super) {
    __extends(CityController, _super);
    function CityController() {
        return _super.call(this, city_business_1.default) || this;
    }
    return CityController;
}(interface_controller_modules_1.default));
exports.default = new CityController();
