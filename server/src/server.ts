import express from 'express';

const app = express()

app.get('/users', (req, res) => {
  res.json([
    {
      name: "David"
    },
    {
      name: "Willian"
    }
  ]);
})

app.listen(3333);