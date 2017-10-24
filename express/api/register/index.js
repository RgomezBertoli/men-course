const { Router } = require('express');
const UserModel = require('../../models/user');

const registerRouter = Router();

registerRouter.post('/new', function (req, res, next) {
    const body = req.body;

    if (body) {
        var user = new UserModel(body);

        user.save(function (error) {
            if (error) {
                return next(error);
            }

            res.send({ user });
        });
    } else {
        const error = {
            description: 'Wrong Body'
        };
        next(error);
    }
});

module.exports = registerRouter;