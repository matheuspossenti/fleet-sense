import { Truck } from '../models'

export const truckService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Truck.findAndCountAll({
      attributes: ['plate', 'model', 'capacity', 'year', 'color', 'driver_id'],
      order: [['plate', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      trucks: rows,
      page,
      perPage,
      total: count
    }
  },
}