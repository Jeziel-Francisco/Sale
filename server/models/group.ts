import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Group = sequelize.define('Group', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3,
                max: 120
            }
        },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
            tableName: 'Group'
        });

    return Group;
}