const CrawlList = require('./CrawlList.js')
const SaveToCSV = require('./lib/SaveToCSV.js')

let main = async () => {
  try {
    // =================================================================
    // @TODO 1. 執行爬蟲
    // 如果要執行多個爬蟲，請修改此處

    let outputCSV = []
    outputCSV = await CrawlList()
    await SaveToCSV(outputCSV, '/output/data.csv')

    // =================================================================
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

// ===========

main()
