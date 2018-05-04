"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var Receive = sequelize.define('Receive', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        history: {
            type: dataTypes.STRING,
            validate: {
                max: 120
            }
        },
        portion: {
            type: dataTypes.STRING,
            validate: {
                max: 17,
                min: 11
            }
        },
        priceTotal: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        balance: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
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
        emissionDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        maturityDate: {
            type: dataTypes.DATE
        },
        paymentDate: {
            type: dataTypes.DATE
        },
        priceInterest: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        clientId: {
            type: dataTypes.INTEGER
        },
        saleId: {
            type: dataTypes.INTEGER
        },
        typeDocumentId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Receive'
    });
    return Receive;
});
