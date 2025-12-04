import express from 'express';
import cors from 'cors';
import data from './data/packages.json';

const app = express();
app.use(cors());

app.get('/api/packages', (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});