const { Router } = require('express');
const {
    post
} = require('./controller');

const LoginRoute = Router();
LoginRoute.route('/login').post(post);

module.exports = LoginRoute;