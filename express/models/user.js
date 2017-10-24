const odm = require('mongoose');
const Schema = odm.Schema;

const User = new Schema({
    username: { type: String },
    pass: { type: String }
}, {
        versionKey: false
    },
    {
        collection: 'users'
    });

module.exports = odm.model('User', User);