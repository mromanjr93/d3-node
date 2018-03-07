import * as http from 'http';
import App from './config/app';
import sequelize from './app/infrastructure/database/connection';

//const models = require('./models');
//const config = require('./config/env/config')();
const server = http.createServer(App);


sequelize.sync().then(() => {
    server.listen(3000);
    server.on('listening', () => console.log(`Servidor rodando na porta 3000`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro ${error}`));
})

