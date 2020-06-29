const Sequelize = require('sequelize');

const connectDB = require('../config/db')


const sequelize = new Sequelize(connectDB.database, connectDB.user, connectDB.password, {
    host: connectDB.host,
    dialect: connectDB.dialect,
    operatorsAliases: false,
  
    pool: {
      max: connectDB.pool.max,
      min: connectDB.pool.min,
      acquire: connectDB.pool.acquire,
      idle: connectDB.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
    
  db.reports = require('./reportsmodel')(sequelize, Sequelize);
  
  module.exports = db;

