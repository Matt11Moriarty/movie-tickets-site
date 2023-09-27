const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Ticket extends Model {}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        seats: {
            type: DataTypes.STRING
        },
        movie_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: 'movie',
            //     key: 'id'
            // }
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket',
    }
)


module.exports = Ticket;