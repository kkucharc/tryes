'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var transpile = require('./transpilers.js').transpile;


app.use(jsonParser);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.post('/parse/:parser', function (request, response) {
  var parser = request.params.parser;

  debugger;
  if (!request.body) return response.sendStatus(400);

console.log("code " + request.body.code);
console.log("code " + request.body);
  if (parser) {
    try {
      var transpileFun = transpile[parser];

      var code = transpileFun(request.body.code);
      console.log("code " + code);
      response.send(code);
    } catch (e) {
      console.log(e);
      response.status(404).send("Transpiler not supported " + parser);
    }

  } else {
    response.status(409).send("Tranpiler can't be null");
  }
});

module.exports = app;