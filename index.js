const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const dbpool = require('./database/connect/makepool');

app.get('/admin/database', (req, res) => {
  res.sendFile(__dirname + '/database/admin/master_page.html');
});

const master_query = require('./database/admin/master_query');
const wrapped_master_query = ((master_query, pool) => ((command) => master_query))(master_query, dbpool);

app.post('/api/admin/master_query', (req, res) => {
  const command = req.body.command;
  res.send('asdf');
  return;
  (async () => {
    let query_result = await wrapped_master_query(command);
    res.json({'data': query_result});
  })();
});


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log('listening on *:' + PORT.toString());
});
