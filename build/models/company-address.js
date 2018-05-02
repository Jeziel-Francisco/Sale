"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var CompanyAddress = sequelize.define('CompanyAddress', {
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
        companyId: {
            type: dataTypes.INTEGER
        },
        addressId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Company_Address'
    });
    return CompanyAddress;
});
