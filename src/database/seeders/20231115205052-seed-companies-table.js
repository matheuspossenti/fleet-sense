'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      { name: 'GR Transportes', cnpj:'123546832', created_at: new Date(), updated_at: new Date() },
      { name: 'Transportadora Expressa', cnpj: '987654321', created_at: new Date(), updated_at: new Date() },
      { name: 'Logística Rápida Ltda.', cnpj: '456789012', created_at: new Date(), updated_at: new Date() },
      { name: 'Cargas Velozes S.A.', cnpj: '135792468', created_at: new Date(), updated_at: new Date() },
      { name: 'Frete Seguro Transportes', cnpj: '246801357', created_at: new Date(), updated_at: new Date() },
      { name: 'TransGlobal Logistics', cnpj: '789012345', created_at: new Date(), updated_at: new Date() }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {})
  }
};