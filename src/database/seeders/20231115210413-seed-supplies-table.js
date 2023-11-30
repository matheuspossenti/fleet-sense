'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [trucks] = await queryInterface.sequelize.query('SELECT id FROM trucks;')

    await queryInterface.bulkInsert('supplies', [{ 
      truck_id: trucks[0].id,
      cost: 100,
      liters: 10,
      kilometers: 100,
      created_at: new Date(), 
      updated_at: new Date() 
    },
    {
      truck_id: trucks[1].id,
      cost: 150,
      liters: 15,
      kilometers: 120,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[2].id,
      cost: 120,
      liters: 12,
      kilometers: 110,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[0].id,
      cost: 90,
      liters: 9,
      kilometers: 95,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[1].id,
      cost: 110,
      liters: 11,
      kilometers: 105,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      truck_id: trucks[2].id,
      cost: 130,
      liters: 13,
      kilometers: 115,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('supplies', null, {})
  }
};