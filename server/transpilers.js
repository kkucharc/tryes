var jstranform = require('jstransform/simple');
var babel = require('babel-core');
var es6_transpiler = require("es6-transpiler");
var traceur = require('traceur/src/node/api.js');

var babelTranlate = function (code) {
  console.log("babel " + code);
  // babel returns object with a lot of metadata
  // babel requires to install preset
  return babel.transform(code, {presets: ['es2015']}).code;
};

var jstranformTranslate = function (code) {
  console.log("jstranform " + code);
  //jstransform returns map with code and sourceMap
  //js transorm has all visitors inside (presets)
  return jstranform.transform(code, {'es6': true}).code;
};

var es6_transpilerTranslate = function (code) {
  console.log("es6_transpiler " + code);
  return es6_transpiler.run({src: code}).src
};

var traceurTranslate = function(code){
  return traceur.compile(code);
};

var transpile = exports.transpile = {
  "jstransform": jstranformTranslate,
  "babel": babelTranlate,
  "es6transpiler": es6_transpilerTranslate,
  "traceur": traceurTranslate
};