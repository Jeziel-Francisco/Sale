import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const City = sequelize.define('City', {
        code: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        name: {
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
        stateId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'City'
        });

    return City;
}