require('dotenv').config();

const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_BDD } = process.env;
const VideogameFunction = require('./models/Videogame');
const GenreFunction = require('./models/Genre')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_BDD}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

VideogameFunction(sequelize);
GenreFunction(sequelize);

const { Videogame, User, Favorite, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Videogame.belongsToMany(Genre, { through: 'VideogameGenre' });
Genre.belongsToMany(Videogame, { through: 'VideogameGenre' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
