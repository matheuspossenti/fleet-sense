import express from 'express'
import { authController } from './controllers/authController'
import { companiesController } from './controllers/companies-controller'
import { trucksController } from './controllers/truckController'
import { supplyController } from './controllers/supplyController'
import { tripController } from './controllers/tripController'
import { ensureAuth } from './middlewares/auth'
import { usersController } from './controllers/usersController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/companies', ensureAuth, companiesController.index)
router.get('/companies/:id', ensureAuth, companiesController.show)

router.get('/trucks', ensureAuth, trucksController.index)

router.get('/supplies', ensureAuth, supplyController.index)

router.get('/trips', ensureAuth, tripController.index)

router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)

export { router }