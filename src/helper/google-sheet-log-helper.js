const { GoogleSpreadsheet } = require("google-spreadsheet")
require("dotenv").config();

const sheetUniqueId = process.env.GOOGLE_SHEET_UNIQUE_ID;
const spreadsheet = new GoogleSpreadsheet(sheetUniqueId)

module.exports = {

  // Setup
  setup: async () => {
    await spreadsheet.useServiceAccountAuth({
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    });

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
