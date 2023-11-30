import { ResourceOptions } from 'adminjs'

export const tripResourceOptions: ResourceOptions = {
  navigation: 'Controle',
  editProperties: ['origin', 'destination', 'freight',  'kilometers', 'init_date', 'truck_id'],
  filterProperties: ['origin', 'destination', 'init_date', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'truck_id', 'origin', 'destination', 'freight', 'kilometers', 'init_date'],
  showProperties: ['id', 'truck_id', 'origin', 'destination', 'freight', 'kilometers', 'init_date', 'createdAt', 'updatedAt'],
}