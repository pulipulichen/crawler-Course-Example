const moment = require('moment')
const StripHTMLTag = require('./StripHTMLTag.js')

module.exports = function (date) {
  date = StripHTMLTag(date)
  return moment(date).toISOString()
}