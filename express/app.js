const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');

const app = express();

app.use(bodyParser());

app.use('/api', [
    require('./api/login/index')
]);

app.listen(9999, function(){
    console.log('El servidor esta escuchando el puerto 9999');
});