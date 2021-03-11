const schedule = require('node-schedule')
const {debug} = require('./term-color-helper')

function scheduleEveryMinutes(minutes, onJobHandler) {
  console.log(debug(`[+] Job Scheduled for every ${minutes} minutes`))
  
  let cronJobString = `${minutes} * * * * *`;
    schedule.cancelJob(0)
    const job = schedule.scheduleJob(cronJobString, function () {
      console.log(debug("Schedular Callback"))
      onJobHandler()
    })
}

module.exports.scheduleEveryMinutes = scheduleEveryMinutes