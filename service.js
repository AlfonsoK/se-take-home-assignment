import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Macky Dees service listening on port ${port}`)
})

app.use(express.static('public'))

/*
  Extra code for the with-server UI
*/
app.get('/', (req, res) => {
  res.send('Hello From Server!')
})