const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {

        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // blog_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Blog',
        //         key: 'id'
        //     }
        // },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'User',
        //         key: 'id',
        //     }
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'comment',
    }

)

module.exports = Comment;

