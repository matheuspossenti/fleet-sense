'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [trucks] = await queryInterface.sequelize.query('SELECT id FROM trucks;')

    await queryInterface.bulkInsert('trips', [{ 
      truck_id: trucks[0].id,
      origin: 'São Paulo',
      destination: 'Rio de Janeiro',
      freight: 1000,
      kilometers: 500,
      init_date: new Date(),
      created_at: new Date(), 
      updated_at: new Date() 
    },
    {
      truck_id: trucks[1].id,
      origin: 'Belo Horizonte',
      destination: 'Brasília',
      freight: 1200,
      kilometers: 600,
      init_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[2].id,
      origin: 'Curitiba',
      destination: 'Florianópolis',
      freight: 800,
      kilometers: 400,
      init_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[0].id,
      origin: 'Fortaleza',
      destination: 'Recife',
      freight: 1500,
      kilometers: 750,
      init_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[1].id,
      origin: 'Manaus',
      destination: 'Belém',
      freight: 1100,
      kilometers: 550,
      init_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[2].id,
      origin: 'Porto Alegre',
      destination: 'Cuiabá',
      freight: 1300,
      kilometers: 650,
      init_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trips', null, {})
  }
};