const jwt = require('jwt-simple');
const moment = require('moment');
const constant = require('../config/constants');

function encode(data) {
    data.createDate = moment().format();
    data.expiredDate = moment().add(5, 'm').format();

    return jwt.encode(data, constant.jwt.secretWord);
}

function decode(token) {
    return jwt.decode(token, constant.jwt.secretWord);
}

function checkToken(req, res, next) {

    const token = req.get('token');

    try {
        const data = decode(token);
        const now = moment();

        if (data && now.isAfter(moment(data.expiredDate))) {
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