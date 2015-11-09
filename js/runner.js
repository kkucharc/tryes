function runner() {
  $('.run').click(function () {
    var transpiler = $(this).attr('transpiler');
    run(transpiler);
  })
}

function run(transpiler) {
  var code = codeArray[transpiler];
  try {
    if (!code) {
      throw new Error('Whooops!');
    }
    var out = eval(code, function(){
      cmd(transpiler);
    });
  } catch (err) {
    publish(err, transpiler);
  }
  publish(out, transpiler);
}

function publish(code, transpiler) {
  var where = '#logger-' + transpiler;
  $(where).show();
  $(where).text(code);
}

function cmd(transpiler) {
  var old = console.log;
  //var logger = $('#'+place);
  var out ="";
  console.log("kaka");
  console.log = function (message) {
    if (typeof message == 'object') {
       out += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
    } else {
      out += message + '<br />';
    }
    place(out, transpiler);
  }
};