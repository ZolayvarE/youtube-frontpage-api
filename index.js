var app = require('express')();

app.get('/', function (req, res) {
  res.send('hello!');
});

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Listening on port:', port);









