const winston = require("winston")
const colors = require('colors/safe');
const { formatDateTime } = require("format_date_time_moment/node")

const myFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
    let readableTime;
    let white = colors.white.bold
    let red = colors.red.bold;
    let green = colors.green.bold;
    let pink = colors.magenta;
    let teal = colors.cyan.bold;
    let blue = colors.brightBlue.bold;
    let yellow = colors.yellow;
    let rainbow = colors.rainbow.bold
    let gray = colors.bold.gray
    let bgBlack = colors.cyan.bgBlack
    let impMessage = colors.white
    if (timestamp) {
        readableTime = formatDateTime.format(timestamp, "LTS")
        timestamp = yellow(timestamp);
        readableTime = yellow(readableTime)
    }
    if (level) {
        if (level === "problem") {
            level = colors.red(level)
            message = red(message)
        } else if (level === "should") {
            level = colors.white(level)
            message = white(message)
        } else if (level === "is") {
            level = colors.magenta(level)
            message = pink(message)
        } else if (level === 'step') {
            level = colors.green(level)
            message = green(message)
        } else if (level === "motherlode") {
            level = colors.gray(level)
            message = gray(message)
        } else if (level === "how") {
            level = colors.cyan(level)
            message = teal(message)
        } else if (level === "start") {
            readableTime = teal(readableTime)
            level = colors.cyan(level)
            message = pink(message)
        } else if (level === "end") {
            readableTime = teal(readableTime)
            level = colors.cyan(level)
            message = pink(message)
        } else {
            level = colors.blue(level)
            message = pink(message)
        }
    }


    let msg = `${readableTime} [${level}] : ${message}`
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

module.exports = { myFormat }