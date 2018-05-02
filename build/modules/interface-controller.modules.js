"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerModules = /** @class */ (function () {
    function ControllerModules(business) {
        this.business = business;
    }
    ControllerModules.prototype.findById = function (req, res) {
        this.business.findById(res, req.params.id);
    };
    ControllerModules.prototype.create = function (req, res) {
        this.business.create(res, req.body);
    };
    ControllerModules.prototype.update = function (req, res) {
        this.business.update(res, req.params.id, req.body);
    };
    ControllerModules.prototype.remove = function (req, res) {
        this.business.remove(res, req.params.id);
    };
    return ControllerModules;
}());
exports.default = ControllerModules;
