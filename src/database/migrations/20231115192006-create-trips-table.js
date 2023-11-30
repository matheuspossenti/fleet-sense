// src/database/migrations/XXXXXXXXXXXXXX-create-trips-table

'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      truck_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'trucks', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      origin: {
        allowNull: false,
        type: DataTypes.STRING
      },
      destination: {
        allowNull: false,
        type: DataTypes.STRING
      },
      freight: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      kilometers: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      init_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trips')
  }
};