const moment = require('moment')
const StripHTML = require('./StripHTML.js')

module.exports = function (date) {
  date = StripHTML(date)
  return moment(date).toISOString()
}