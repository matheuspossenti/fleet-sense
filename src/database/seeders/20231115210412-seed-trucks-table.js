'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [drivers] = await queryInterface.sequelize.query('SELECT id FROM drivers;')

    await queryInterface.bulkInsert('trucks', [{ 
      plate: 'RKX5D72', 
      model:'Scania', 
      capacity: 12, 
      year: 2024,
      color: 'Preto', 
      driver_id: drivers[0].id, 
      created_at: new Date(), 
      updated_at: new Date() 
    },
    {
      plate: 'ABC123',
      model: 'Volvo',
      capacity: 15,
      year: 2023,
      color: 'Azul',
      driver_id: drivers[1].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      plate: 'XYZ789',
      model: 'Mercedes',
      capacity: 20,
      year: 2022,
      color: 'Vermelho',
      driver_id: drivers[2].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      plate: 'LMN456',
      model: 'MAN',
      capacity: 18,
      year: 2025,
      color: 'Verde',
      driver_id: drivers[0].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      plate: 'DEF987',
      model: 'Iveco',
      capacity: 14,
      year: 2021,
      color: 'Branco',
      driver_id: drivers[1].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      plate: 'JKL321',
      model: 'DAF',
      capacity: 16,
      year: 2023,
      color: 'Amarelo',
      driver_id: drivers[2].id,
      created_at: new Date(),
      updated_at: new Date()
    },
    { plate: 'ZYX987', model: 'Volvo', capacity: 18, year: 2022, color: 'Prata', driver_id: drivers[0].id, created_at: new Date(), updated_at: new Date() },
    { plate: 'MNO456', model: 'Scania', capacity: 20, year: 2023, color: 'Azul', driver_id: drivers[1].id, created_at: new Date(), updated_at: new Date() },
    { plate: 'GHI123', model: 'Mercedes', capacity: 16, year: 2021, color: 'Branco', driver_id: drivers[2].id, created_at: new Date(), updated_at: new Date() },
    { plate: 'UVW321', model: 'Iveco', capacity: 14, year: 2024, color: 'Vermelho', driver_id: drivers[0].id, created_at: new Date(), updated_at: new Date() },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trucks', null, {})
  }
};