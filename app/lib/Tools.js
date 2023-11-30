
// 將相對網址還原為絕對網址
const ResolveFullURL = require('./ResolveFullURL.js')

// 將日期轉換成ISO標準格式
const DateToISOFormat = require('./DateToISOFormat.js')

// 移除HTML標籤
const StripHTMLTags = require('./StripHTMLTags.js')

// 執行系統指令
const ShellSpawn = require('./ShellSpawn.js')

module.exports = {
  ResolveFullURL,
  DateToISOFormat,
  StripHTMLTags,
  ShellSpawn
}