"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ClientAddress = sequelize.define('ClientAddress', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: dataTypes.STRING,
            validate: {
                max: 10
            }
        },
        complement: {
            type: dataTypes.STRING,
            validate: {
                max: 120
            }
        },
        reference: {
            type: dataTypes.STRING,
            validate: {
                max: 120
            }
        },
        clientId: {
            type: dataTypes.INTEGER
        },
        addressId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Client_Address'
    });
    return ClientAddress;
});
