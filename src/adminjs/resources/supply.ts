import { ResourceOptions } from 'adminjs'

export const supplyResourceOptions: ResourceOptions = {
  navigation: 'Controle',
  editProperties: ['cost', 'liters', 'kilometers'],
  filterProperties: ['truck_id', 'cost', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'truck_id', 'cost', 'liters', 'kilometers'],
  showProperties: ['id', 'truck_id', 'cost', 'liters', 'kilometers', 'createdAt', 'updatedAt']
}