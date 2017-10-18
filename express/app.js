const express = require('express');
const bodyParser = require('body-parser');
const requestLogger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(bodyParser.json());
app.use(requestLogger);

app.use('/api', [
    require('./api/login/index')
]);

app.use(errorHandler)

app.listen(9999, function(){
    console.log('El servidor esta escuchando el puerto 9999');
});