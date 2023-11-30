// src/controllers/supplyController.ts

import { Request, Response } from 'express'
import { supplyService } from '../services/supplyService'
import { getPaginationParams } from '../helpers/getPaginationParams'

export const supplyController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedSupplies = await supplyService.findAllPaginated(page, perPage)

      return res.json(paginatedSupplies)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}