const { Router } = require('express');

const userRouter = Router();

userRouter.get('/user', function (req, res){
    res.send({
        name: 'unknown',
        age: '30'
    });
})

module.exports = userRouter;