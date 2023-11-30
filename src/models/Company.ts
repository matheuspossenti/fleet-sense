// src/models/Company.ts

import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Company {
  id: number
  name: string
  cnpj: string
}

export interface CompanyCreationAttributes extends Optional<Company, 'id'> {}

export interface CompanyInstance extends Model<Company, CompanyCreationAttributes>, Company {}

export const Company = sequelize.define<CompanyInstance, Company>('Company', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cnpj: {
    allowNull: false,
    type: DataTypes.STRING
  }
})