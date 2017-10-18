const log4js = require('log4js');

const logger = new log4js.getLogger();
logger.level = log4js.levels.ALL;


function errorHandler(error, req, res, next) {
    logger.error(`ERROR: ${JSON.stringify({ error })}`);

    res.status(500).send(error);
}

module.exports = errorHandler;