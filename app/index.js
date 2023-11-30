const CrawlList = require('./CrawlList.js')
const SaveToCSV = require('./lib/SaveToCSV.js')

let main = async () => {
  let outputCSV = []
  outputCSV = await CrawlList1()
  await SaveToCSV(outputCSV, '/output/data.csv')
}

// ===========

try {
  main()
}
catch (e) {
  console.error(e)
  process.exit(1)
}
