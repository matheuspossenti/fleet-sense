import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Truck {
  id: number
  plate: string
  model: string
  capacity: number
  year: number
  color: string
  driver_id: number
}

export interface TruckCreationAttributes extends Optional<Truck, 'id'> {}

export interface TruckInstance extends Model<Truck, TruckCreationAttributes>, Truck {}

export const Truck = sequelize.define<TruckInstance, Truck>('Truck', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  plate: {
    allowNull: false,
    type: DataTypes.STRING
  },
  model: {
    allowNull: false,
    type: DataTypes.STRING
  },
  capacity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING
  },
  driver_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'drivers', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})