"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var ReceivePayment = sequelize.define('ReceivePayment', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        registrationDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        cancellationDate: {
            type: dataTypes.DATE
        },
        paymentDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        pricePaid: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        priceDiscount: {
            type: dataTypes.DECIMAL(3),
            defaultValue: 0
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
        receiveId: {
            type: dataTypes.INTEGER
        },
        typeDocumentId: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'Receive_Payment'
    });
    return ReceivePayment;
});
