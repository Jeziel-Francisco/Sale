"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../config/config");
var jwtSimple = require("jwt-simple");
var HttpStatus = require("http-status");
function authSuccess(res, credentials, data) {
    var isMath = (credentials.password === data.password);
    if (isMath) {
        var payload = { id: data.id };
        res.json({
            token: jwtSimple.encode(payload, config_1.default.secret)
        });
    }
    else {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Usuario ou Senha Invalidos' });
    }
}
exports.default = authSuccess;
