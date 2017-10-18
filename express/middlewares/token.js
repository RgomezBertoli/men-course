const jwt = require('jwt-simple');

function encode(data) {
    data.createDate = new Date().toDateString();

    return jwt.encode(data, 'Secret-Word');
}

function decode(token) {
    return jwt.decode(token, 'Secret-Word');
}

function checkToken(req, res, next) {

    const token = req.get('token');

    try {
        const data = decode(token);

        if (data) {
            req.user = data;
            next();
        } else {
            throw { description: 'NOT AUTHORISED' };
        }
    } catch (thrown) {
        const error = { description: 'NOT AUTHORISED' };
        
        next(error);
    }
}

module.exports = {
    encode,
    checkToken
};