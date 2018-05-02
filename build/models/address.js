"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var Address = sequelize.define('Address', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
                max: 120
            }
        },
        zipCode: {
            type: dataTypes.INTEGER,
            validate: {
                min: 8,
                max: 8
            }
        },
        neighborhood: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 3,
                max: 120
            }
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
        registrationDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        cancellationDate: {
            type: dataTypes.DATE
        },
        cityCode: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Address'
    });
    return Address;
});
