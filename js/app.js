$(document).foundation();
var codeArray = {};

function addClass(code, placeString, codePlaceString) {
  var place = $('#' + placeString);
  var codePlace = $('#' + codePlaceString);
  place.show();
  codePlace.text(code);
  Prism.highlightElement(codePlace[0]);
  location.hash = "#" + placeString;
}


function generateRequest(transpiler, body) {
  return $.ajax({
    type: "POST",
    url: "http://localhost:8081/parse/" + transpiler,
    data: JSON.stringify(body),
    success: function (res) {
      console.log("success " + res);
      addClass(res, 'div-' + transpiler, 'code-' + transpiler);
      codeArray[transpiler] = res;
    },
    error: function (error) {
      console.log(error);
    },
    dataType: "text",
    contentType: "application/json",
    origin: "http://localhost"
  });
}


function listenButton() {
  $('#button-babel').click(function () {
    var classCode = $('#code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    generateRequest("babel", map);
  });

  $('#button-jstransform').click(function () {
    var classCode = $('#code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    generateRequest("jstransform", map);
  });

  $('#button-es6transpiler').click(function () {
    var classCode = $('#code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    generateRequest("es6transpiler", map);
  });

  $('#button-traceur').click(function () {
    var classCode = $('#code').text().trim();
    var map = {"code": classCode};
    console.log(classCode);
    generateRequest("traceur", map);
  });
}