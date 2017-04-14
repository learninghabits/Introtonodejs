var logger = require('logger').createLogger('development.log');

module.exports = {
    log: function (message) {
		logger.info(message);
    },
    warn: function (message) {
		logger.warn(message);
    },
    error: function (message) {
		logger.error(message);
    }
};

