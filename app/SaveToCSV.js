const fs = require('fs')
const Papa = require('papaparse')

let SaveToCSV = async (jsonArray = [], outputPath = '/output/data.csv') => {
  if (jsonArray.length === 0 && fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath)
    return false
  }

  const csv = Papa.unparse(jsonArray);
  fs.writeFileSync(outputPath, csv);
  return true
}

module.exports = SaveToCSV