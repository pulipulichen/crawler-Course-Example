const $ = require('./lib/jQuery.js')
const GetHTML = require('./lib/GetHTML.js')

// =================================================================
// 工具

// 處理網址
const ResolveFullURL = require('./lib/ResolveFullURL.js')

// 處理日期
const ResolveDate = require('./lib/ResolveDate.js')

// 移除HTML
const StripHTML = require('./lib/StripHTML.js')

// =================================================================

let CrawlItemPage = async (baseURL = 'https://catweb.ncl.edu.tw/QandA/page/31939', output = {}) => {
  let outputItem = {}

  let html = await GetHTML(baseURL)
  
  let $html = $(html)

  // =================================================================
  // 1. 取得必要資訊
  // @TODO 請修改此處以抓取正確的資訊。

  // 將分類儲存到dc.type
  outputItem['dc.type'] = $html.find('#block-system-main > div > div.content.node-reference > div > table > tbody > tr:nth-child(3) > td').html()

  // 將回覆儲存到dc.description
  outputItem['dc.description'] = $html.find('#block-system-main > div > div.content.node-reference > div > table > tbody > tr:nth-child(4) > td > div > div').html()
  outputItem['dc.description'] = StripHTML(outputItem['dc.description'])

  // =================================================================

  Object.keys(outputItem).forEach(key => output[key] = outputItem[key])
}

module.exports = CrawlItemPage