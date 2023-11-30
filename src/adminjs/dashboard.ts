import AdminJs, { PageHandler } from 'adminjs'
import { Company, Truck, Driver, User, Supply, Trip } from '../models'

export const dashboardOptions: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJs.bundle('../adminjs/components/Dashboard'),
  handler: async (req, res, context) => {
    const trucks = await Truck.count()
    const drivers = await Driver.count()
    const company = await Company.count()
    const supply = await Supply.count()
    const trip = await Trip.count()
    const standardUsers = await User.count({ where: { role: 'user' } })

    res.json({
      'Empresas': company,
      'Motoristas': drivers,
      'Caminhões': trucks,
      'Abastecimentos': supply,
      'Viagens': trip,
      'Usuários Padrão': standardUsers
    })
  },
}