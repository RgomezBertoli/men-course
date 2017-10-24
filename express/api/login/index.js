const { Router } = require('express');
const { encode } = require('../../middlewares/token');
const UserModel = require('../../models/user');
const LoginRouter = Router();


LoginRouter.post('/login', function (req, res, next) {
    const keys = req.body && Object.keys(req.body);

    if (keys && keys.length) {
        UserModel.findOne(req.body, function (err, result) {

            if (!err && result) {
                const token = encode(result);

                res.setHeader('token', token);
                res.status(200).send({ user: result });
            } else {
                const error = { description: 'User Does not exist' };
                next(error);
            }
        });
    } else {
        const error = { description: 'Wrong Login' };

        next(error);
    }
});

module.exports = LoginRouter;