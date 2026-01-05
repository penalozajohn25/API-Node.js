'use strict';

/** @type {import('sequelize-cli').Migration} */
const { ClientSchema, CLIENT_TABLE } = require('../models/client.model');
const { DataTypes } = require('sequelize');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(CLIENT_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
