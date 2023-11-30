'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;')

    await queryInterface.bulkInsert('drivers', [{ 
      name: 'João',
      cpf: '12345678900',
      email: 'joao@gmail.com',
      phone: '12345678900',
      cnh: '12345678900',
      company_id: companies[0].id,
      created_at: new Date(), 
      updated_at: new Date() 
    },
    { 
      name: 'Maria',
      cpf: '98765432100',
      email: 'maria@gmail.com',
      phone: '9876543210',
      cnh: '98765432101',
      company_id: companies[1].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Carlos',
      cpf: '11122233344',
      email: 'carlos@hotmail.com',
      phone: '5556667777',
      cnh: '44455566677',
      company_id: companies[2].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Ana',
      cpf: '55566677788',
      email: 'ana@yahoo.com',
      phone: '3334445555',
      cnh: '66677788899',
      company_id: companies[0].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Pedro',
      cpf: '88899900011',
      email: 'pedro@outlook.com',
      phone: '9990001111',
      cnh: '11122233344',
      company_id: companies[1].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Camila',
      cpf: '22233344455',
      email: 'camila@gmail.com',
      phone: '1112223333',
      cnh: '55566677788',
      company_id: companies[2].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { name: 'Fernanda', cpf: '98765432101', email: 'fernanda@gmail.com', phone: '9876543210', cnh: '12345678901', company_id: companies[1].id, created_at: new Date(), updated_at: new Date() },
    { name: 'Ricardo', cpf: '11122233344', email: 'ricardo@hotmail.com', phone: '5556667777', cnh: '44455566678', company_id: companies[2].id, created_at: new Date(), updated_at: new Date() },
    { name: 'Juliana', cpf: '55566677789', email: 'juliana@yahoo.com', phone: '3334445555', cnh: '66677788990', company_id: companies[0].id, created_at: new Date(), updated_at: new Date() },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drivers', null, {})
  }
};