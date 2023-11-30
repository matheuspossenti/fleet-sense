import { Company } from '../models'

export const companyService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Company.findAndCountAll({
      attributes: ['id', 'name', 'cnpj'],
      order: [['cnpj', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      companies: rows,
      page,
      perPage,
      total: count
    }
  },

  findByIdWithDrivers: async (id: string) => {
    const companyWithDrivers = await Company.findByPk(id, {
      attributes: ['id', 'name'],
      include: {
        association: 'drivers',
        attributes: ['id', 'name'],
      }
    })

    return companyWithDrivers
  }
}