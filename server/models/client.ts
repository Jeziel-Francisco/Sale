import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Client = sequelize.define('Client', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 10,
                max: 120
            }
        },
        nameFantasy: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
                max: 120
            }
        },
        registrationState: {
            type: dataTypes.STRING,
            validate: {
                min: 5,
                max: 50
            }
        },
        registrationMunicipal: {
            type: dataTypes.STRING,
            validate: {
                min: 4,
                max: 50
            }
        },
        identification: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 5,
                max: 18
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
        companyId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Client'
        });

    return Client;

}