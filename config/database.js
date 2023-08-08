// require('dotenv').config()
// const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env
// const { Sequelize, DataTypes } = require('sequelize')
// const UserModel = require("../src/models/user")
// const GeolocationModel = require("../src/models/geolocation")

// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: 'mysql',
//     logging: false,
//     define: {
//         underscored: true
//     }
// })

// try {
//     sequelize.authenticate();
//     console.log("Connection establised successfully");
// }
// catch (err) {
//     console.error("Unable to connect to the database", err);

// }

// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize
// db.sequelize.sync();

// db.User = UserModel(DataTypes, sequelize);
// db.Geolocation = GeolocationModel(sequelize, DataTypes)

// module.exports = db;


