const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        username: { type: String, required: true },
        pass: { type: String, required: true }
    }, {
        versionKey: false
    }, {
        collection: 'users'
    });

module.exports = mongoose.model('User', UserSchema);