import * as fs from 'fs';
import * as htmlparser2 from 'htmlparser2';
let HTMLFile = './test_files/obama.html';
fs.readFile(HTMLFile, 'utf8', (err, contents) => {
    let fileString = "";
    let parser = new htmlparser2.Parser({
        onopentag (name, attribs) {
            if (name === "p") {
            }
        },
        ontext (text:string) {
            fileString += text;
        },
        onclosetag (tagname:string) {
        }
    }, { decodeEntities: true });
    parser.write(contents);
    parser.end();
    fileString = fileString.replace(/\\./g, "");
    fs.writeFile('./test_files/Output.txt', fileString, (err) => {
        if (err) {
            throw err;
        }
    });
});
