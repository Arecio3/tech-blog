
const { Model, DataTypes, Sequelize } = require('sequelize');
//Whats gonna gives us access to DB
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
    {

        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // user_id: {
        //     type: Datatypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'User',
        //         key: 'id'
        //     }     
        // },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;