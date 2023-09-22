const User = require('./User');
const Seat = require('./Seat');
const Movie = require('./Movie');

Seat.belongsTo(Movie, {
    foreignKey: 'movie_id',
  });

User.hasMany(Seat, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Seat, Movie };