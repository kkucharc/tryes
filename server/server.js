'use strict';

var app = require('./routes.js');

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});