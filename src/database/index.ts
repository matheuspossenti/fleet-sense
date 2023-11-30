import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  database: 'fleetsense_development',
  username: 'fleetsense',
  password: 'fleetsense',
  define: {
    underscored: true,
  }
});