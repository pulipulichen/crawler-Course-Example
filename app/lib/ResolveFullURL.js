module.exports = function (baseURLFull, url) {
  if (typeof(url) !== 'string') {
    return null
  }
  
  url = url.trim()
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  if (url.startsWith('/')) {
    const parsedUrl = new URL(baseURLFull);
    const baseURL = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

    return baseURL + url
  }
  else if (url.startsWith('#')) {
    if (baseURLFull.indexOf('#') > -1) {
      baseURLFull = baseURLFull.slice(0, baseURLFull.lastIndexOf('#'))
    }
    return baseURLFull + url
  }
  else {
    const parsedUrl = new URL(baseURLFull);
    const basePath = `${parsedUrl.origin}${parsedUrl.pathname.split('/').slice(0, 3).join('/')}/`;
    return basePath + url
  }

  return url
}