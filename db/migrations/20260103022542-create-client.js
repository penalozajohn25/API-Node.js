'use strict';

/** @type {import('sequelize-cli').Migration} */
const { ClientSchema, CLIENT_TABLE } = require('../models/client.model');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(CLIENT_TABLE, ClientSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CLIENT_TABLE);
  }
};
