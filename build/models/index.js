'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../config/config");
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = config_1.default.env || 'development';
var db = {};
var modelRelations = require('./relations/relations');
if (config_1.default.Url) {
    var sequelize = new Sequelize(config_1.default.Url);
}
else {
    var sequelize = new Sequelize(config_1.default.db, config_1.default.username, config_1.default.password);
}
fs
    .readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
})
    .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
modelRelations(db);
module.exports = db;
