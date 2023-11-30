
// 將相對網址還原為絕對網址
const ResolveFullURL = require('./ResolveFullURL.js')

// 將日期轉換成ISO標準格式
const ResolveDate = require('./ResolveDate.js')

// 移除HTML標籤
const StripHTMLTag = require('./StripHTMLTag.js')

// 執行系統指令
const ShellSpawn = require('./ShellSpawn.js')

module.exports = {
  ResolveFullURL,
  ResolveDate,
  StripHTMLTag,
  ShellSpawn
}