const { GoogleSpreadsheet } = require("google-spreadsheet")
const google_config = require("../config/babban-script-config.json")

const sheetUniqueId = "1VvwaJdDwQ2XCzs5-GdhROlm48CEEPVzpZ6LV4MpP1Ic"
const spreadsheet = new GoogleSpreadsheet(sheetUniqueId)

module.exports = {

  // Setup
  setup: async () => {
    await spreadsheet.useServiceAccountAuth({
      client_email: google_config.client_email,
      private_key: google_config.private_key,
    })

    let info = await spreadsheet.loadInfo()
    return info
  },

  // Create worksheet in Google Sheet
  createWorksheet: async (worksheetName) => {
    let response = await doc.addSheet({ title: worksheetName })
    return response
  },
  
  // Read Data
  read: async () => {
    await module.exports.setup()
    const rows = await spreadsheet.sheetsByIndex[0].getRows()
    return rows
  },
  
  // Write Data
  write: async (payload) => {
    await module.exports.setup()
    let response = await spreadsheet.sheetsByIndex[0].addRow(payload)
    return response
  },
  
  // Delete Row
  delete: async (rowNumber) => {
    await module.exports.setup()
    let rows = await spreadsheet.sheet.getRows()
    await rows[rowNumber].delete()
  },
  
}
