const md5 = require('md5');

const UserModel = require('../../models/user');
const { encode } = require('../../middleware/token');

function post(req, res) {
    const body = req.body;
    const isValid = body && body.username && body.pass;

    if (isValid) {
        const user = {
            username: body.username,
            pass: md5(body.pass)
        };

        UserModel.create(user, function (err, result) {
            if (!err && result) {
                const token = encode({
                    id: result.id
                });

                res.setHeader('token', token);
                delete result.pass;
                return res.send({
                    user: {
                        id: result._id,
                        username: result.username
                    }
                });
            }

            return res.status(500).send({ description: 'No se pudo crear un usuario' });
        });
    } else {
        return res.status(500).send({ description: 'Cuerpo Incorrecto' });
    }
}

module.exports = {
    post
};