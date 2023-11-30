// src/database/migrations/XXXXXXXXXXXXXX-create-supplies-table

'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('supplies', {
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
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      liters: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      kilometers: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('supplies')
  }
};