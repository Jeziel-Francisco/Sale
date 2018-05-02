"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
function authFail(res, error) {
    res.status(HttpStatus.UNAUTHORIZED).json(error.message || { message: 'Erro no processo de autenticação' });
}
exports.default = authFail;
