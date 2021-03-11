const wifi = require("node-wifi")

wifi.init({
  iface: null
})

function connectedWifi() {
    return new Promise((resolve, reject) => {
        wifi.getCurrentConnections((error, network) => {
            if (error) { reject(error) }
            if (network.length > 0) {
                resolve(network[0])
            } else {
                resolve({ ssid: "No-Wifi-Data" })
            }
        })
    })
}

module.exports.connectedWifi = connectedWifi