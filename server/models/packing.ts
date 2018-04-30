import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Packing = sequelize.define('Packing', {
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
                min: 3,
                max: 120
            }
        },
        initials: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 1,
                max: 3
            }
        },
        factor: {
            type: dataTypes.DECIMAL(3),
            defaultValue: 1
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
            tableName: 'Packing'
        });

    return Packing;
}