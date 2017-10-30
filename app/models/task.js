const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        ownerId: { type: String, required: true }
    }, {
        versionKey: false
    }, {
        collection: 'tasks'
    });

module.exports = mongoose.model('Task', TaskSchema);