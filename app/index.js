const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const odm = require('mongoose');
const log4js = require('log4js');

const { mongodb, processConf } = require('./config/constants');
const { checkToken } = require('./middleware/token');

log4js.configure({
    appenders: {
        request: { type: 'console', category: 'request' },
        features: { type: 'console', category: 'features' }
    },
    categories: {
        request: { level: 'all', appenders: ['request'] },
        features: { level: 'all', appenders: ['features'] },
        default: { level: 'all', appenders: ['features'] }
    },
    replaceConsole: true
});

const logger = log4js.getLogger('request');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));


app.use('/public', [
    require('./api/login/index')
]);

app.use('/private', checkToken);
/*app.use('private', [

]);*/

const dbURI = `${mongodb.method}${mongodb.user}:${mongodb.pass}${mongodb.host}${mongodb.db}`;

odm.connect(dbURI, { useMongoClient: true }, function (err) {
    if (!err) {
        logger.info('La base de datos se ha conectado correctamente');
        app.listen(processConf.port, function (error) {
            if (!error) {
                logger.info('El servidor está escuchando en el puerto' + processConf.port);
            } else {
                logger.error(error);
            }
        });
    } else {
        logger.error(err);
    }
})
