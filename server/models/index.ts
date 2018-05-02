'use strict';
import CONFIG from './../config/config';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = CONFIG.env || 'development';
var db: any = {};
var modelRelations = require('./relations/relations');

if (CONFIG.Url) {
  var sequelize = new Sequelize(CONFIG.Url);
} else {
  var sequelize = new Sequelize(CONFIG.db, CONFIG.username, CONFIG.password);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
modelRelations(db);

module.exports = db;
