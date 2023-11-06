const CrawlList = require('./CrawlList.js')
const SaveToCSV = require('./lib/SaveToCSV.js')

let main = async () => {
  let outputCSV = []
  outputCSV = await CrawlList()
  await SaveToCSV(outputCSV, '/output/data.csv')
}

main()
