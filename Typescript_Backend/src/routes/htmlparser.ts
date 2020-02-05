import * as fs from 'fs';
import * as htmlparser2 from 'htmlparser2';
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
export function parseText(text: string) {
  let newText = '';
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        if (name === 'p') {
        }
      },
      ontext(text: string) {
        newText += text;
      },
      onclosetag(tagname: string) {},
    },
    { decodeEntities: true }
  );
  parser.write(text);
  parser.end();
  newText = newText.replace(/\\./g, '');
  return newText;
}
