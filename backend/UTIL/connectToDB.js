const Sequelize = require('sequelize');

const sequelize = new Sequelize('attendencemanagement','root','localhost',{
    dialect: 'root',
    host: 'localhost'
});

module.exports = sequelize;