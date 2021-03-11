const controller = require('./src/controller/log-controller.js')
const network = require('./src/helper/shell-execute-helper')
const wifi = require('./src/helper/wifi-connectivity-helper')
const utility = require('./src/utility')
const schedular = require('./src/helper/schedular-helper')
const dateTime = require('./src/helper/date-time-helper')

async function main() {
  // Get Timestamp
  let currentTimstamp = dateTime.getCurrentDate()
  
  // Get Speed-Data
  let speedData = await network.speedTest(currentTimstamp)

  // Get Wifi Information
  let wifiInfo = await wifi.connectedWifi()

  // Prepare Payload
  let payload = {
    ...utility.toJSON(speedData),
    wifiName: wifiInfo.ssid,
    timestamp: currentTimstamp,
  }

  // Write Payload to Google Sheet
  controller.writeNetworkData(payload)
}

// Trigger On every 10 Minutes
schedular.scheduleEveryMinutes(1, () => {
  main();
});
