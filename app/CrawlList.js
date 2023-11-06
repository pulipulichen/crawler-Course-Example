const $ = require('./lib/jQuery.js')
const GetHTML = require('./lib/GetHTML.js')
const CrawlItem = require('./CrawlItem.js')

// =================================================================
// 工具

// 處理網址
const ResolveFullURL = require('./lib/ResolveFullURL.js')

// 處理日期
const ResolveDate = require('./lib/ResolveDate.js')

// 移除HTML
const StripHTML = require('./lib/StripHTML.js')

// =================================================================
// 1. 指定要抓取的啟始網址
// @TODO 請修改此處以抓取正確的資訊。

const START_BASE_URL = 'https://catweb.ncl.edu.tw/QandA'

// =================================================================

let ParseTable = async (outputArray = [], baseURL) => {
  if (!baseURL) {
    baseURL = START_BASE_URL
  }

  let html = await GetHTML(baseURL)
  
  let $html = $(html)

  let trList = $html.find('#block-system-main > div > div > div.view-content > table tbody tr')
  for (let i = 0; i < trList.length; i++) {
    let eleTr = trList[i]
    eleTr = $(eleTr)

    let output = {}

    // =================================================================
    // 2. 取得ID
    // @TODO 請修改此處以抓取正確的資訊。

    let itemURL = eleTr.find('td a[href]').attr('href')
    itemURL = ResolveFullURL(baseURL, itemURL)

    output['id'] = itemURL
    output['dc.identifier'] = itemURL

    // =================================================================
    // 3. 取得其他資訊
    // @TODO 請修改此處以抓取正確的資訊。

    // 將問題儲存到dc.title
    output['dc.title'] = eleTr.find('td:eq(1)').html()
    let date = eleTr.find('td:eq(2)').html()

    // 將日期儲存到dc.date
    output['dc.date'] = ResolveDate(date)

    // =================================================================
    // 4. 取得更深入的資訊
    // @TODO 如果需要使用，則移除註解「//」即可

    //await CrawlItem(itemURL, output)

    // =================================================================
    
    outputArray.push(output)
  }

  return outputArray
}

module.exports = ParseTable