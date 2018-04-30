import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Permissions = sequelize.define('Permissions', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 7,
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
        event: {
            type: dataTypes.INTEGER
        },
        pageId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Permissions'
        });

    return Permissions;
}