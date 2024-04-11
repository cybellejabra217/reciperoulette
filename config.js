require("dotenv").config();

// configures the database based on the information in the .env file
const config = {
    db:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        connectionLimit: 10,
    }
}

module.exports = config;