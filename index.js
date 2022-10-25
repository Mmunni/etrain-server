const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('Courses Api Running')
});

app.get('/courses-categories', (req, res) => {
  res.send(categories)
});

// app.get('/category/:id', (req, res) => {
//   const id = req.params.id;
//   if(id === '06'){
//     res.send(news);
//   }
// })

app.listen(port, () => {
  console.log(`Etrain Courses Server ${port}`)
})