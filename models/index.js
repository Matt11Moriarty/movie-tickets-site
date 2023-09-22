const User = require('./User');
const Seat = require('./Seat');
const Movie = require('./Movie');

Seat.belongsTo(Movie, {
    foreignKey: 'movie_id',
  });

Movie.hasMany(Seat, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Seat.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Seat, {
  foreignKey: 'user_id'
});

module.exports = { User, Seat, Movie };