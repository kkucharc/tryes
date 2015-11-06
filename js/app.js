$(document).foundation();

function addClass(code, placeString, codePlaceString) {
  var place = $('#'+placeString);
  var codePlace = $('#'+codePlaceString);
  place.show();
  codePlace.text(code);
  Prism.highlightElement(codePlace[0]);
}

function listenButton(){
  $('#class-button-babel').click(function () {
    var classCode = $('#class-code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    $.ajax({
      type: "POST",
      url: "http://localhost:8081/parse/babel",
      data: JSON.stringify(map),
      success: function (res) {
        console.log("success " + res);
        addClass(res, 'div-babel', 'code-babel');
      },
      error: function (error) {
        console.log(error);
      },
      dataType: "text",
      contentType: "application/json",
      origin: "http://localhost"
    });
  });
}

function listenJSTransformButton(){
  $('#class-button-jstransform').click(function () {
    var classCode = $('#class-code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    $.ajax({
      type: "POST",
      url: "http://localhost:8081/parse/jstransform",
      data: JSON.stringify(map),
      success: function (res) {
        console.log("success " + res);
        addClass(res, 'div-jstransorm', 'code-jstransorm');
      },
      error: function (error) {
        console.log(error);
      },
      dataType: "text",
      contentType: "application/json",
      origin: "http://localhost"
    });
  });
}

function listenES6transpilerButton(){
  $('#class-button-estranspile').click(function () {
    var classCode = $('#class-code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    $.ajax({
      type: "POST",
      url: "http://localhost:8081/parse/es6transpiler",
      data: JSON.stringify(map),
      success: function (res) {
        console.log("success " + res);
        addClass(res, 'div-es6transpiler', 'code-es6transpiler');
      },
      error: function (error) {
        console.log(error);
      },
      dataType: "text",
      contentType: "application/json",
      origin: "http://localhost"
    });
  });
}

function listenTraceur(){
  $('#class-button-estranspile').click(function () {
    var classCode = $('#class-code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    $.ajax({
      type: "POST",
      url: "http://localhost:8081/parse/traceur",
      data: JSON.stringify(map),
      success: function (res) {
        console.log("success " + res);
        addClass(res, 'div-traceur');
      },
      error: function (error) {
        console.log(error);
      },
      dataType: "text",
      contentType: "application/json",
      origin: "http://localhost"
    });
  });
}