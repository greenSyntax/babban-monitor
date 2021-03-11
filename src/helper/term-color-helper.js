const clc = require("cli-color")

module.exports = {
    info: (data) => {
        return clc.green.bold(data)
    },
        
    error: (data) => {
        return clc.red.bold(data)
    },

    warning: (data) => {
        return clc.yellow(data)
    },

    debug: (data) => {
        return clc.cyan(data)
    },
 }