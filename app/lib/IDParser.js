const crypto = require('crypto');

function generateMD5Hash(input) {
  const hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex');
}

module.exports = function (id) {
  if (typeof(id) === 'number') {
    return id
  }

  return generateMD5Hash(id)
}