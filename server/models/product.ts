import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const Product = sequelize.define('Product', {
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
        priceCust: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0
            }
        },
        priceSale: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
            }
        },
        priceSaleMin: {
            type: dataTypes.DECIMAL(3),
            validate: {
                min: 0.001
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
            type: dataTypes.DATE,
        },
        companyId: {
            type: dataTypes.INTEGER
        },
        packingId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Product'
        });

    return Product;
}