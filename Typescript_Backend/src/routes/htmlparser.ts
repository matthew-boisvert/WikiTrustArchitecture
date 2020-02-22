import * as fs from 'fs';
import * as htmlparser2 from 'htmlparser2';
export function parseText(text: string) {
  let newText = '';
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        if (name === 'p') {
          
        }
        newText += " ";
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
