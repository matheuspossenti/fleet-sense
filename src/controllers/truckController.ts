// src/controllers/truckController.ts

import { Request, Response } from 'express'
import { truckService } from '../services/truckService'
import { getPaginationParams } from '../helpers/getPaginationParams'

export const trucksController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedTrucks = await truckService.findAllPaginated(page, perPage)

      return res.json(paginatedTrucks)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}