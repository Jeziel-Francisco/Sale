"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_business_1 = require("./../user/user.business");
var auth_success_1 = require("./../../api/responses/auth-success");
var auth_fail_1 = require("./../../api/responses/auth-fail");
var TokenRoutes = /** @class */ (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (req, res) {
        var credentials = {
            username: req.body.username,
            password: req.body.password
        };
        if ((credentials.hasOwnProperty('username')) && (credentials.hasOwnProperty('password'))) {
            user_business_1.default.getByUsernameAuth(credentials.username)
                .then(function (user) { return auth_success_1.default(res, credentials, user); })
                .catch(function (error) { return auth_fail_1.default(res, error); });
        }
    };
    return TokenRoutes;
}());
exports.default = new TokenRoutes();
