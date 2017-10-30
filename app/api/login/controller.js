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

        UserModel.findOne(user, function (err, result) {
            if (!err && result) {
                const token = encode({
                    id: result._id
                });

                res.setHeader('token', token);
                
                return res.send();
            }

            return res.status(500).send({ description: 'El usuario no existe' });
        });
    } else {
        return res.status(500).send({ description: 'Cuerpo Incorrecto' });        
    }
}

module.exports = {
    post
};