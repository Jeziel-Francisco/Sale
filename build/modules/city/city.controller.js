"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var city_business_1 = require("./city.business");
var CityController = /** @class */ (function () {
    function CityController() {
    }
    CityController.prototype.findById = function (req, res) {
        city_business_1.default.findById(res, req.params.id);
    };
    CityController.prototype.create = function (req, res) {
        city_business_1.default.create(res, req.body);
    };
    CityController.prototype.update = function (req, res) {
        city_business_1.default.update(res, req.params.id, req.body);
    };
    CityController.prototype.remove = function (req, res) {
        city_business_1.default.remove(res, req.params.id);
    };
    return CityController;
}());
exports.default = new CityController();
