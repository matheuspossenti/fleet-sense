import { Supply } from '../models'

export const supplyService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Supply.findAndCountAll({
      attributes: ['id', 'truck_id', 'cost', 'liters', 'kilometers'],
      order: [['truck_id', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      supplies: rows,
      page,
      perPage,
      total: count
    }
  },
}