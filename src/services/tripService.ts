import { Trip } from '../models'

export const tripService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Trip.findAndCountAll({
      attributes: ['id', 'truck_id', 'origin', 'destination', 'freight', 'kilometers', 'init_date'],
      order: [['truck_id', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      trips: rows,
      page,
      perPage,
      total: count
    }
  },
}