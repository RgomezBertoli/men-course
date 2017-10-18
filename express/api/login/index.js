const { Router } = require('express');
const { encode } = require('../../middlewares/token'); 
const LoginRouter = Router();

var usuario = {};

LoginRouter.post('/login', function (req, res, next) {
    usuario = req.body;

    if (usuario.pass === 'asdf1234') {
        const token = encode(usuario);

        res.setHeader('token', token);
        res.status(200).send(usuario);
    } else {
        const error = { description: 'Wrong Login' };

        next(error);
    }
});

module.exports = LoginRouter;