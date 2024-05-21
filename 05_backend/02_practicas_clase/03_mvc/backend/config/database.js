const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' });
const conectmongo = () =>{
    mongoose.connect(process.env.DB_URL);
  
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected');
    })

    connection.once('error', (error) => {
        console.log(`Error connecting to database: ${error}`);
    })
  }

  module.exports = {conectmongo}