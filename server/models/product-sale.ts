import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const ProductSale = sequelize.define('ProductSale', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        priceUnit: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
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
        productId: {
            type: dataTypes.INTEGER
        },
        saleId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Product_Sale'
        });

    return ProductSale;
}