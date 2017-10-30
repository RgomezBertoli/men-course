const { Router } = require('express');
const {
    post,
    get
} = require('./controller');

const TasksRouter = Router();
TasksRouter.route('/tasks').post(post);
TasksRouter.route('/tasks').get(get);

module.exports = TasksRouter;