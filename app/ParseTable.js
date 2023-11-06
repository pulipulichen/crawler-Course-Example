const $ = require('./lib/jQuery.js')
const moment = require('moment')

const GetHTML = require('./lib/GetHTML.js')
const ResolveFullURL = require('./lib/ResolveFullURL.js')
const CrawlItemPage = require('./CrawlItemPage.js')


let ParseTable = async (baseURL = 'https://catweb.ncl.edu.tw/QandA', outputCSV = []) => {
  let html = await GetHTML(baseURL)
  
  let $html = $(html)

  let trList = $html.find('#block-system-main > div > div > div.view-content > table tbody tr')
  for (let i = 0; i < trList.length; i++) {
    let eleTr = trList[i]
    eleTr = $(eleTr)

    let creator = eleTr.find('td:eq(0)').text().trim()
    let title = eleTr.find('td:eq(1)').text().trim()
    let date = eleTr.find('td:eq(2)').text().trim()
    date = moment(date).toISOString()

    let itemURL = eleTr.find('td a[href]').attr('href').trim()
    itemURL = ResolveFullURL(baseURL, itemURL)

    let outputItemPage = await CrawlItemPage(itemURL)

    outputCSV.push({
      'id': itemURL,
      'dc.creator': creator,
      'dc.title': title,
      'dc.date': date,
      'dc.identifier': itemURL,
      ...outputItemPage
    })
  }

  return outputCSV
}

module.exports = ParseTable