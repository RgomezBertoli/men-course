const { Router } = require('express');
const getUserDataRouter = require('./get-user-data/index');

const LoginRouter = Router();

var usuario = {};

LoginRouter.post('/login', function (req, res, next) {
    usuario = req.body;

    if (usuario.pass === 'asdf1234') {
        res.status(200).send(usuario);
    } else {
        const error = { description: 'Wrong Login' };

        next(error);
    }
});

LoginRouter.use('/user', getUserDataRouter);

module.exports = LoginRouter;