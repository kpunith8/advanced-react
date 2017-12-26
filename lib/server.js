import config from '../config';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { initialData: 'Punith' });
});

app.listen(config.port, () => {
  console.log('Running on: ' + config.port);
});
