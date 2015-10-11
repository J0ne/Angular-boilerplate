var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',  function(req, res, next){
  res.sendFile('public/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server started at http://localhost:%s', port);
});
