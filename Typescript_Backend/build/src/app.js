"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const search = require("./routes/search");
const app = express();
const port = 8080; // default port to listen
app.get('/', (req, res) => {
    search.search_by_page('Barack Obama');
    res.send('Hello world!');
});
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map