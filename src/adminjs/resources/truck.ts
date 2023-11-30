import { ResourceOptions } from 'adminjs'



export const truckResourceOptions: ResourceOptions = {
  navigation: 'Frota',
  editProperties: ['plate', 'model', 'capacity', 'year', 'color', 'driver_id'],
  filterProperties: ['plate', 'model', 'driver_id', 'createdAt', 'updatedAt'],
  listProperties: ['plate', 'model', 'capacity', 'driver_id'],
  showProperties: ['plate', 'model', 'capacity', 'year', 'color', 'driver_id', 'createdAt', 'updatedAt']
}