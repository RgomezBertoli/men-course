const { Router } = require('express');

const getUserDataRouter = Router();

getUserDataRouter.get('/data', function (req, res){
    res.send({
        name: 'unknown',
        age: '30'
    });
})

module.exports = getUserDataRouter;