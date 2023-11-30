import { ResourceOptions } from 'adminjs'

export const driverResourceOptions: ResourceOptions = {
  navigation: 'Frota',
  editProperties: ['name', 'cpf', 'email', 'phone', 'cnh'],
  filterProperties: ['name', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'email', 'phone', 'company_id'],
  showProperties: ['id', 'name', 'cpf', 'email', 'phone', 'cnh', 'company_id', 'createdAt', 'updatedAt']
}
