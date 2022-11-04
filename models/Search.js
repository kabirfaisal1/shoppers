//DECLARATIONS: sequelize, db connection -----------------------------------------
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//SEARCH MODEL =========================
class Search extends Model {}

//init search
Search.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'search'
    }
);

//EXPORT SEARCH ----------------------------
module.exports = Search;