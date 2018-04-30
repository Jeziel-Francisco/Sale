import { Sequelize, DataTypes } from 'sequelize';

export default function (sequelize: Sequelize, dataTypes: DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
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
    },
        {
            tableName: 'User'
        });
    return User;
}