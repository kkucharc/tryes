var babel = require("babel-core");

//var code  = "let meBeUrFantasy;";
var code = "[1,2,3].forEach(it => console.log(it*2));"

var trans = babel.transform(code, {"presets": ['es2015']});
console.log("Trans code "+trans.code);
console.log("Trans map "+trans.map);
console.log("Trans ast "+trans.ast);

trans = babel.transformFileSync('src/arrows.js', {}, function (err, result){
	if(err){
		console.log("Error: "+ err);
	}
	console.log(result.code);
	console.log(result.map);
	console.log(result.ast);	
});
