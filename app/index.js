const ParseTable = require('./ParseTable.js')
const SaveToCSV = require('./SaveToCSV.js')

let main = async () => {
  let outputCSV = []
  outputCSV = await ParseTable(`https://catweb.ncl.edu.tw/QandA`, outputCSV)
  await SaveToCSV(outputCSV)
}

main()
