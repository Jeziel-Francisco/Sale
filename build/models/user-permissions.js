"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (sequelize, dataTypes) {
    var UserPermissions = sequelize.define('UserPermissions', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        note: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 7,
                max: 120
            }
        },
        permissionsId: {
            type: dataTypes.INTEGER
        },
        userId: {
            type: dataTypes.INTEGER
        },
        userIdPermissions: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'User_Permissions'
    });
    return UserPermissions;
});
