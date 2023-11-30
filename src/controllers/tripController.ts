// src/controllers/supplyController.ts

import { Request, Response } from 'express'
import { supplyService } from '../services/supplyService'
import { getPaginationParams } from '../helpers/getPaginationParams'

export const tripController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedTrips = await supplyService.findAllPaginated(page, perPage)

      return res.json(paginatedTrips)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}