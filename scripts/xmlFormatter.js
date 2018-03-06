const fs = require('fs');
const path = require('path');
const pretty = require('pretty-data');

const filedir = path.join(__dirname, '../core')
const files = fs.readdirSync(filedir)
for (var i = 0; i < files.length; i++) {

  const filepath = path.join(filedir, files[i])
  console.log(i, '==> filepath:', filepath);
  const filedata = fs.readFileSync(filepath, 'utf8')

  let p = pretty.pd.xml(filedata)
  try {
    fs.writeFileSync(filepath, p, 'utf8')
    console.log(i, "--> file written...");
  } catch (e) {
    console.error(e);
  }


}
