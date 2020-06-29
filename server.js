const express = require('express');
const dotenv = require('dotenv');
const morgan = require ('morgan');
const reportsroute = require('./routes/reportsroute');
const db = require('./model/dbConnectionORM');
//var cors = require('cors');
// Load the configuration file

dotenv.config({path: './config/config.env'});

// Sync the Sequelize ORM
db.sequelize.sync();

//Call the express middleware

const app=express();

// Body parser for reading JSON Object 

app.use(express.json());

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Handle unhandled promise rejection

process.on('unhandledRejection',(err,process) => {
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1));
});


// Mount router
app.use('/api/reports',reportsroute);

//error handler
//app.use(errorHandler);

const PORT= process.env.PORT || 5000

const server = app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );
