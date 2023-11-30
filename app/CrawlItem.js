const $ = require('./lib/jQuery.js')
const GetHTML = require('./lib/GetHTML.js')

// =================================================================
// 工具

// 將相對網址還原為絕對網址
const ResolveFullURL = require('./lib/ResolveFullURL.js')

// 將日期轉換成ISO標準格式
const ResolveDate = require('./lib/ResolveDate.js')

// 移除HTML標籤
const StripHTMLTag = require('./lib/StripHTMLTag.js')

// 執行系統指令
const ShellSpawn = require('./lib/ShellSpawn.js')

// =================================================================

let CrawlItemPage = async (baseURL = 'https://catweb.ncl.edu.tw/QandA/page/31939', outputAll = {}) => {
  let output = {}

  let html = await GetHTML(baseURL)
  
  let $html = $(html)

  // =================================================================
  // @TODO 1. 取得必要資訊
  // 請修改此處以抓取正確的資訊。

  // 將回覆儲存到dc.description
  output['dc.description'] = $html.find('#block-system-main > div > div.content.node-reference > div > table > tbody > tr:nth-child(4) > td > div > div').html()
  
  // =================================================================

  Object.keys(output).forEach(key => outputAll[key] = output[key])
}

module.exports = CrawlItemPage