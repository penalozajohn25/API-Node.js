const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    development: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        url: URI,
        dialect: 'postgres',
    },

    production: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        url: URI,
        dialect: 'postgres',
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false
        //     }
        // }
    }
};