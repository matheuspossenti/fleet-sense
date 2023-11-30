import { Driver } from '../models'

export const driverService = {
  findAllPaginated: async (page: number, perPage: number) => {
    try {
      const offset = (page - 1) * perPage

      const { count, rows } = await Driver.findAndCountAll({
        attributes: ['id', 'name', 'cpf', 'email', 'phone', 'cnh', 'company_id'],
        order: [['name', 'ASC']],
        limit: perPage,
        offset
      })

      return {
        drivers: rows,
        page,
        perPage,
        total: count
      }
    } catch (error) {
      console.error(error)
    }
    
  },

  findByIdWithTrucks: async (id: string) => {
    const driverWithTrucks = await Driver.findByPk(id, {
      attributes: ['id', 'plate'],
      include: {
        association: 'truck',
        attributes: ['id', 'plate'],
      }
    })

    return driverWithTrucks
  }
}