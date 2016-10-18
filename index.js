var app = require('express')();
var getData = require('./retrieveData.js');



app.get('/', function (req, res) {
  res.send(getData());
});

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Listening on port:', port);









