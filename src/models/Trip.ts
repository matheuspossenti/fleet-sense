import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'


interface TripAttributes {
  id: number
  truck_id: number
  origin: string
  destination: string
  freight: number
  kilometers: number
  init_date: Date
}

export interface Trip extends Model<TripAttributes, Optional<TripAttributes, 'id'>> {}

export const Trip = sequelize.define<Trip, TripAttributes>('Trip', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  truck_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'trucks', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  origin: {
    allowNull: false,
    type: DataTypes.STRING
  },
  destination: {
    allowNull: false,
    type: DataTypes.STRING
  },
  freight: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  kilometers: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  init_date: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
});