const exec = require("child_process").exec
const {info} = require('./term-color-helper')

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout)
  })
}

function speedTest(activeTime) {
    console.log(info(`[+] Started SpeedTest at ${activeTime}`))
    return new Promise((resolve, reject) => {
        execute("speed-test -j", (response) => {
          resolve(response)
        })
    })
}

module.exports.speedTest = speedTest
