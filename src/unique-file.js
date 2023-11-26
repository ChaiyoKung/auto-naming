const path = require('node:path');

function uniqueFile(file) {
  const extName = path.extname(file);
  const baseName = path.basename(file, extName);

  const uniqueName = Date.now().toString();
  const fileName = [baseName, uniqueName].join('_');

  return fileName + extName;
}

module.exports = uniqueFile;
