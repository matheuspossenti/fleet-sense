// src/database/migrations/XXXXXXXXXXXXXX-create-trucks-table

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trucks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      plate: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      capacity: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      color: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      driver_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'drivers'
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('trucks')
  }
};