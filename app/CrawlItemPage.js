const GetHTML = require('./lib/GetHTML.js')
const ResolveFullURL = require('./lib/ResolveFullURL.js')
const $ = require('./lib/jQuery.js')
const moment = require('moment')

let CrawlItemPage = async (baseURL = 'https://catweb.ncl.edu.tw/QandA/page/31939') => {
  let outputItem = {}

  let html = await GetHTML(baseURL)
  
  let $html = $(html)

  outputItem['dc.type'] = $html.find('#block-system-main > div > div.content.node-reference > div > table > tbody > tr:nth-child(3) > td').text().trim()
  outputItem['dc.description'] = $html.find('#block-system-main > div > div.content.node-reference > div > table > tbody > tr:nth-child(4) > td > div > div').html().trim()

  return outputItem
}

module.exports = CrawlItemPage