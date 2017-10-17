const { Router } = require('express');

const LoginRouter = Router();

LoginRouter.post('/login', function(req, res){
    res.status(200).send({
        description: 'Ha realizado login correctamente'
    });
});

module.exports = LoginRouter;