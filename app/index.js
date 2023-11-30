const CrawlList = require('./CrawlList.js')
const SaveToCSV = require('./lib/SaveToCSV.js')

// =================================================================
// 工具
// 詳情請查詢：https://github.com/pulipulichen/crawler-Course-Example/blob/main/app/lib/Tools.js

const Tools = require('./lib/Tools.js')
// =================================================================


let main = async () => {
  try {
    // =================================================================
    // @TODO 1. 執行爬蟲
    // 如果要執行多個爬蟲，請修改此處

    let outputCSV = []
    outputCSV = await CrawlList()
    await SaveToCSV(outputCSV, '/output/data.csv')

    let result = await Tools.ShellSpawn(`python3 -c 'print("Hello, World!")'`)
    console.log(result)

    // =================================================================
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

// ===========

main()
