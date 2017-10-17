const { Router } = require('express');

const LoginRouter = Router();

var usuario = {};

LoginRouter.post('/login', function(req, res){
    usuario = req.body;
    res.status(200).send(usuario);
});

LoginRouter.get('/user', function(req, res){
    res.send(usuario);
});

module.exports = LoginRouter;