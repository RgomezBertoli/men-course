const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const odm = require('mongoose');

const requestLogger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const { checkToken } = require('./middlewares/token');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    exposedHeaders: ['token']
}))

app.use(requestLogger);

app.use('/api', [
    require('./api/login/index'),
    require('./api/register/index')
]);

app.use('/private', checkToken);
app.use('/private', [
    require('./api/user/index')
]);

app.use(errorHandler)

odm.connect('mongodb://localhost:27051/men-course', { useMongoClient: true }, function (err) {
    if (!err) {
        console.log('Se ha conectado correctamente a la base de datos');
        app.listen(9999, function () {
            console.log('El servidor esta escuchando el puerto 9999');
        });
    }
})