"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_business_1 = require("./state.business");
var StateController = /** @class */ (function () {
    function StateController() {
    }
    StateController.prototype.findById = function (req, res) {
        state_business_1.default.findById(res, req.params.id);
    };
    StateController.prototype.create = function (req, res) {
        state_business_1.default.create(res, req.body);
    };
    StateController.prototype.update = function (req, res) {
        state_business_1.default.update(res, req.params.id, req.body);
    };
    return StateController;
}());
exports.default = new StateController();
