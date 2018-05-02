"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ClientPhone = sequelize.define('ClientPhone', {
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
        clientId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Client_Phone'
    });
    return ClientPhone;
});
