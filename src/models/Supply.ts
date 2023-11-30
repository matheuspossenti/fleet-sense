import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'


interface SupplyAttributes {
  id: number
  truck_id: number
  cost: number
  liters: number
  kilometers: number
}

export interface Supply extends Model<SupplyAttributes, Optional<SupplyAttributes, 'id'>> {}

export const Supply = sequelize.define<Supply, SupplyAttributes>('Supply', {
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
  cost: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  liters: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  kilometers: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
});