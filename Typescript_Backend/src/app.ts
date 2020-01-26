import * as express from 'express';
import * as logger from 'morgan';
import * as search from './routes/search';
const app = express();
const port = 8080; // default port to listen

app.get('/', (req, res) => {
  search.search_by_page('Kobe Bryant');
  res.send('Hello world!');
});

app.use(
  logger(':method :url :status :res[content-length] - :response-time ms')
);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
