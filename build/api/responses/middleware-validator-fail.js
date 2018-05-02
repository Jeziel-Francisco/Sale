"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_default_1 = require("./response.default");
var HttpStatus = require("http-status");
function middlewareValidatorFail(res, next, error, result) {
    if (error) {
        return response_default_1.default(res, HttpStatus.BAD_REQUEST, error.message || error);
    }
    next();
}
exports.default = middlewareValidatorFail;
