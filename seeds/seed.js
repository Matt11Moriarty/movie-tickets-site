const sequelize = require('../config/connection');
const { User, Seat, Movie } = require('../models');

const userData = require('./userData.json');
const seatData = require('./seatData.json');
const movieData = require('./movieData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Movie.bulkCreate(movieData); 
    console.log('\n----- MOVIE SEEDED -----\n');

    for (const seat of seatData) {
      await Seat.create({
        ...seat, 
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
