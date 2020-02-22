"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2 = require("htmlparser2");
/*
const htmlFile = './test_files/obama.html';
fs.readFile(htmlFile, 'utf8', (err, contents) => {
  let fileString = '';
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        if (name === 'p') {
        }
      },
      ontext(text: string) {
        fileString += text;
      },
      onclosetag(tagname: string) {},
    },
    { decodeEntities: true }
  );
  parser.write(contents);
  parser.end();
  fileString = fileString.replace(/\\./g, '');
  fs.writeFile('./test_files/Output.txt', fileString, err => {
    if (err) {
      throw err;
    }
  });
});
*/
function parseText(text) {
    let newText = '';
    const parser = new htmlparser2.Parser({
        onopentag(name, attribs) {
            if (name === 'p') {
            }
            newText += " ";
        },
        ontext(text) {
            newText += text;
        },
        onclosetag(tagname) { },
    }, { decodeEntities: true });
    parser.write(text);
    parser.end();
    newText = newText.replace(/\\./g, '');
    return newText;
}
exports.parseText = parseText;
//# sourceMappingURL=htmlparser.js.map