import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        emissionDate: {
            type: dataTypes.DATE,
            defaultValue: Date.now
        },
        type: {
            type: dataTypes.INTEGER
        },
        priceTotal: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        note: {
            type: dataTypes.STRING,
            allowNull: true,
            validate: {
                max: 500
            }
        },
        discount: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        closingDate: {
            type: dataTypes.DATE
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
        },
        clientId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Sale'
        });

    return Sale;
}