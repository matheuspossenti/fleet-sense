// src/database/migrations/XXXXXXXXXXXXXX-create-drivers-table

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      cnh: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      company_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'companies'
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('drivers')
  }
};