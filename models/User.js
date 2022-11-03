const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//USER MODEL =========================
class User extends Model {}

//user init
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            aurtoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
        },
        account_status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

//EXPORT USER ----------------------------
module.exports = User;