const fs = require('fs')
const Papa = require('papaparse')

const IDParser = require('./IDParser.js')

let SaveToCSV = async (jsonArray = [], outputPath = '/output/data.csv') => {
  if (jsonArray.length === 0 && fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath)
    return false
  }

  jsonArray = jsonArray.map(item => {
    let keys = Object.keys(item)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let value = item[key]
      if (typeof(value) === 'string') {
        item[key] = value.trim()
      }

      if (key === 'id') {
        item[key] = IDParser(value)
      }
    }
    return item
  })

  const csv = Papa.unparse(jsonArray);
  fs.writeFileSync(outputPath, csv);
  return true
}

module.exports = SaveToCSV