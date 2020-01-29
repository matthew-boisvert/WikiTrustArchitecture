"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const htmlparser2 = require("htmlparser2");
let HTMLFile = './test_files/obama.html';
fs.readFile(HTMLFile, 'utf8', (err, contents) => {
    let fileString = "";
    let parser = new htmlparser2.Parser({
        onopentag(name, attribs) {
            if (name === "p") {
            }
        },
        ontext(text) {
            fileString += text;
        },
        onclosetag(tagname) {
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
//# sourceMappingURL=htmlparser.js.map