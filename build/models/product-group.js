"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ProductGroup = sequelize.define('ProductGroup', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3,
                max: 120
            }
        },
        productId: {
            type: dataTypes.INTEGER
        },
        groupId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Product_Group'
    });
    return ProductGroup;
});
