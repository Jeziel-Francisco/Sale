"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var TypeDocument = sequelize.define('TypeDocument', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        isReceive: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
        isLiquidate: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
        typeDocument: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: dataTypes.STRING,
            allowNull: true,
            validate: {
                max: 120
            }
        },
        registrationDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        cancellationDate: {
            type: dataTypes.DATE
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
        companyId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Type_Document'
    });
    return TypeDocument;
});
