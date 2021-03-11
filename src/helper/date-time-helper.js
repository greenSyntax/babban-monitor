const date = require("date-and-time")

function getCurrentDate() {
    const now = new Date()
    return date.format(now, "YYYY/MM/DD HH:mm:ss A") //TODO: Pass it as Param
}

module.exports.getCurrentDate = getCurrentDate