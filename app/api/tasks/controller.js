const TaskModel = require('../../models/task');

module.exports = {
    post,
    get
};

function post(req, res) {
    const body = req.body;
    const isValid = body && body.title && body.description;

    if (isValid) {
        const task = Object.assign({}, body, { ownerId: req.user.id });

        TaskModel.create(task, function (err, result) {
            if (!err) {
                res.send({ task: result });
            } else {
                const error = {
                    description: 'No ha sido posible crear la tarea'
                };
                res.status(500).send({ error });
            }
        });
    } else {
        return res.status(500).send({ description: 'Cuerpo Incorrecto' });
    }
}

function get(req, res) {
    const task = {
        ownerId: req.user.id
    };

    TaskModel.find(task, function (err, result){
        if (!err) {
            res.send({ tasks: result });
        } else {
            const error = {
                description: 'No ha sido posible recuperar las tareas'
            };
            res.status(500).send({ error });
        }
    });
}