import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Driver {
  id: number
  name: string
  cpf: number
  email: string
  phone: string
  cnh: string
  company_id: number
}

export const Driver = sequelize.define<Model<Driver, Optional<Driver, 'id'>>>(
  'Driver',
  {
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
    cpf: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cnh: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  }
);