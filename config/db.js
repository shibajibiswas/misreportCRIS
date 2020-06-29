const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});


    module.exports={
        host     : process.env.dbhost,
        user     : process.env.dbuser,
        password : process.env.dbpassword,
        database : process.env.dbname,
        dialect  : process.env.dbtype,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
