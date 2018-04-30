import Api from './api/api';
import CONFIG from './config/config';

import * as http from 'http';

const models = require('./models');

const server = http.createServer(Api);

models.sequelize.sync().then(() => {
    console.log('then');
    server.listen(CONFIG.serverPort);
    server.on('listening', () => console.log(`Servidor rodando na porta ${CONFIG.serverPort}`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu Erro ${error}`));
})

