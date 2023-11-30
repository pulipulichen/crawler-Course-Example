const moment = require('moment')
const StripHTMLTags = require('./StripHTMLTags.js')

module.exports = function (date) {
  date = StripHTMLTags(date)
  return moment(date).toISOString()
}