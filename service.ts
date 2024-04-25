import express, { Express, Request, Response } from 'express';
import * as uuid from 'uuid';
import ws from 'ws';

const app: Express = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Macky Dees service listening on port ${port}`)
})

app.use(express.static('public'))

/*
  Extra code for the with-server UI
*/
app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Server!')
})

setInterval(() => console.log(uuid.v4()), 1000)