'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var transpile = require('./transpilers.js').transpile;


app.use(jsonParser);

app.post('/parse/:parser', function (request, response) {
  var parser = request.params.parser;

  if (!request.body) return response.sendStatus(400);

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