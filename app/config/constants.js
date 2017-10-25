module.exports = {
    processConf:{
        port: process.env.PORT || 5000
    },
    mongodb: {
        method: 'mongodb://',
        user: 'altran.developer',
        pass: 'Altran-2015',
        host: '@ds125914.mlab.com:25914/',
        db: 'men-course'
    },
    jwt:{
        secretWord: 'secret-word'
    }
}