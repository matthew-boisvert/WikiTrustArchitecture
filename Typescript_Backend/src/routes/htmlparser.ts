var fs = require('fs');
var htmlparser2 = require("htmlparser2");
var HTMLFile = './test_files/obama.html';
fs.readFile(HTMLFile, 'utf8', function (err:Error, contents:string) {
    var fileString:string = "";
    var parser = new htmlparser2.Parser({
        onopentag: function (name:string, attribs:string) {
            if (name === "p") {
            }
        },
        ontext: function (text:string) {
            fileString += text;
        },
        onclosetag: function (tagname:string) {
        }
    }, { decodeEntities: true });
    parser.write(contents);
    parser.end();
    fileString = fileString.replace(/\\./g, "");
    fs.writeFile('./test_files/Output.txt', fileString, function (err:Error) {
        if (err)
            throw err;
    });
});
