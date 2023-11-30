const $ = require('./lib/jQuery.js')
const GetHTML = require('./lib/GetHTML.js')

// =================================================================
// 工具
// 詳情請查詢：https://github.com/pulipulichen/crawler-Course-Example/blob/main/app/lib/Tools.js

const Tools = require('./lib/Tools.js')

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