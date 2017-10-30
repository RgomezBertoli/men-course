const { Router } = require('express');
const {
    post
} = require('./controller');

const RegisterRoute = Router();
RegisterRoute.route('/register').post(post);

module.exports = RegisterRoute;