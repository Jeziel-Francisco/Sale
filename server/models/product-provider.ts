import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const ProductProvider = sequelize.define('ProductProvider', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        providerId: {
            type: dataTypes.INTEGER
        },
        productId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Product_Provider'
        });

    return ProductProvider;
}