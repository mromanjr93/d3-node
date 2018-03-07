import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    url: process.env.DATABASE_URL,
    dialect : "postgres",
    modelPaths: [__dirname + '/models']
});

export default sequelize;