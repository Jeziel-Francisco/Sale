"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function response(res, statusCode, data) {
    res.status(statusCode).json(data);
}
exports.default = response;
