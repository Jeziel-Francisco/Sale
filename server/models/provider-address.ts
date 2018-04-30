import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    const ProviderAddress = sequelize.define('ProviderAddress', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: dataTypes.STRING,
            validate: {
                max: 10
            }
        },
        complement: {
            type: dataTypes.STRING,
            validate: {
                max: 120
            }
        },
        reference: {
            type: dataTypes.STRING,
            validate: {
                max: 120
            }
        },
        providerId: {
            type: dataTypes.INTEGER
        },
        addressId: {
            type: dataTypes.INTEGER
        }
    }, {
            tableName: 'Provider_Address'
        });

    return ProviderAddress;
}