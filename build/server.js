"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api/api");
var config_1 = require("./config/config");
var http = require("http");
var models = require('./models');
var server = http.createServer(api_1.default);
models.sequelize.sync().then(function () {
    console.log('then');
    server.listen(config_1.default.serverPort);
    server.on('listening', function () { return console.log("Servidor rodando na porta " + config_1.default.serverPort); });
    server.on('error', function (error) { return console.log("Ocorreu Erro " + error); });
});
