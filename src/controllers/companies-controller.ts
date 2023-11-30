import { Request, Response } from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { companyService } from '../services/companyService'

export const companiesController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedCompanies = await companyService.findAllPaginated(page, perPage)

      return res.json(paginatedCompanies)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const company = await companyService.findByIdWithDrivers(id)
      return res.json(company)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}

