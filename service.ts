import express, { Express, Request, Response } from 'express';
import expressWs from 'express-ws';
import * as uuid from 'uuid';

const { app, getWss, applyTo } = expressWs(express());
const port = 3000;
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Macky Dees service listening on port ${port}`)
})


app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.body);
  ws.send('Received');
});

// setInterval(() => console.log(uuid.v4()), 1000)