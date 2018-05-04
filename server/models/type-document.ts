import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const TypeDocument = sequelize.define('TypeDocument', {
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
}