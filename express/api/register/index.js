const { Router } = require('express');
const UserModel = require('../../models/user');

const registerRouter = Router();

registerRouter.post('/new', function (req, res) {
    const body = req.body;

    if (body) {
        UserModel.create(body)
            .then(user => {
                res.send({ user });
            })
            .catch(error => next(error));
    } else {
        const error = {
            description: 'Wrong Body'
        };
        next(error);
    }
});

module.exports = registerRouter;