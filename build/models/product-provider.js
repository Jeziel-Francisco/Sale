"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ProductProvider = sequelize.define('ProductProvider', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        providerId: {
            type: dataTypes.INTEGER
        },
        productId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Product_Provider'
    });
    return ProductProvider;
});
