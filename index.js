var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Zainab" }');
});

app.get('/test1', function (req, res) {
    res.send('{ "response": "Server 1" }');
});
app.get('/test2', function (req, res) {
    res.send('{ "response": "Server 2" }');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
  