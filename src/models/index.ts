import { Company } from './Company'
import { Truck } from './Truck'
import { Driver } from './Driver'
import { Supply } from './Supply'
import { Trip } from './Trip'
import { User } from './User'

Driver.belongsTo(Company)
Company.hasMany(Driver, { as: 'drivers' })

Truck.belongsTo(Driver)
Supply.belongsTo(Truck)
Trip.belongsTo(Truck)

export {
  Company,
  Truck,
  Driver,
  Supply,
  Trip,
  User,
}