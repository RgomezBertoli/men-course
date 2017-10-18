const log4js = require('log4js');

const logger = new log4js.getLogger();
logger.level = log4js.levels.ALL;

function requestLogger(req, res, next){
    logger.info(`URL: ${req.url}, METHOD: ${req.method}`);

    next();
}

module.exports = requestLogger;