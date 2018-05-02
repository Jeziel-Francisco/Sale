"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ProviderPhone = sequelize.define('ProviderPhone', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        phone: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 9,
                max: 15
            }
        },
        contact: {
            type: dataTypes.STRING,
            validate: {
                min: 3,
                max: 120
            }
        },
        providerId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Provider_Phone'
    });
    return ProviderPhone;
});
