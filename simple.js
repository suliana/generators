window.onload = function(){
 	function* gen (){
 		var x = yield 'pear';
 		var y = yield 'banana';
 		var z = yield 'apple';
 		return x + y + z;

 	}
	//console.dir(gen())
 	// set the iterator gen in to a myGen variable
	var myGen = gen();
	// myGen.next();
	// myGen.next();
	// myGen.next();
	// myGen.next()
	console.log(myGen.next());
	console.log(myGen.next(1));
	console.log(myGen.next(2));
	console.log(myGen.next(3));















}