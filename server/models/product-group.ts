import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const ProductGroup = sequelize.define('ProductGroup', {
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
        productId: {
            type: dataTypes.INTEGER
        },
        groupId: {
            type: dataTypes.INTEGER
        }
    }, {});

    return ProductGroup;
}