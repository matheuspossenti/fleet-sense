import { ResourceOptions } from "adminjs";

export const companyResourceOptions: ResourceOptions = {
  navigation: 'Frota',
  editProperties: ['name', 'cnpj'],
  filterProperties: ['name', 'cnpj', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'cnpj'],
  showProperties: ['id', 'name', 'cnpj', 'createdAt', 'updatedAt']
}