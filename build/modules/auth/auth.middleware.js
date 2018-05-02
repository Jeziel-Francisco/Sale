"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_fail_1 = require("./../../api/responses/auth-fail");
var auth_schema_1 = require("./auth.schema");
var AuthMiddleware = /** @class */ (function () {
    function AuthMiddleware() {
    }
    AuthMiddleware.prototype.security = function (req, res, next) {
        return auth_schema_1.default.validate(req.body, function (error, result) {
            if (error) {
                return auth_fail_1.default(res, error.message || error);
            }
            next();
        });
    };
    return AuthMiddleware;
}());
exports.default = new AuthMiddleware();
