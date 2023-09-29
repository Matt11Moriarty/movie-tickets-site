const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Seat extends Model {}

Seat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    seatNumber: {
      type: DataTypes.STRING,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id'
      }
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
    modelName: 'seat',
  }
);

module.exports = Seat;
