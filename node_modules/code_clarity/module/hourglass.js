const winston = require("winston")
const colors = require('colors/safe');
const { getDate } = require("./getDate")
const { myFormat } = require("./format")

const hourglass = winston.createLogger({
    levels: {
        start: 0,
        end: 1,
    },
    format: winston.format.combine(winston.format.splat(),
        winston.format.timestamp(),
        myFormat),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `code_clarity/tracker/${getDate}.log`,
            format: winston.format.json()
        })
    ],
    level: 'end',
});


module.exports = { hourglass }
    // hourglass.start("starting module")
    // hourglass.end("ending module")