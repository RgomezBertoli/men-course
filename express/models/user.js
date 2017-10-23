const odm = require('mongoose');
const Schema = odm.Schema;

const User = new Schema({
    username: 'String',
    pass: 'String'
});

module.exports = odm.model('User', User, 'Users');