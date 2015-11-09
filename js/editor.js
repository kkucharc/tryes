function reload() {
  var insertText = $('#dialog')[0].value;
  var codePlace = $('#code');
  codePlace.text(insertText);
  Prism.highlightElement(codePlace[0]);
}

function editor() {
  $('#reload').click(function () {
    reload();
  });

  $('#dialog').bind('input propertychange', function () {
    reload();
  });
}