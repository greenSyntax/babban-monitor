const spreadsheet = require('../helper/google-sheet-log-helper')
const google_config = require('../config/babban-script-config.json')
const { info, error } = require('../helper/term-color-helper')
const {fromJSON} = require('../utility')

module.exports = {

  writeNetworkData: (payload) => {

    spreadsheet.write(payload)
        .then((data) => {
          console.log(info(`[+] Uploaded SpeedTest: ${fromJSON(payload)}`))
        })
        .catch((err) => {
          console.log(error(err.message))
        })
    },

    readNetworkData: () => {
      spreadsheet.read() 
        .then(data => {
            //TODO:
            console.log(data)
        })
        .catch(err => {
            //TODO:
            console.log(err.message)
        })
    }

}