//console.log('Hello!!!');
const fetch = require('node-fetch');
//const co = require('co');
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then( response => response.json())
// 	.then( post => post.title)
// 	.then( x => console.log('Title:',x));

// co(function*(){
// 	const uri = 'https://jsonplaceholder.typicode.com/posts/1';
// 	const response = yield fetch(uri);
// 	const post = yield response.json();
// 	const title = post.title;
// 	console.log('Title:', title)


// })


run(function *(){
	const uri = 'https://jsonplaceholder.typicode.com/posts/1';
	const response = yield fetch(uri);
	const post = yield response.json();
	const title = post.title;
	return title
	console.log('Title:', title)
})

//.catch( error => console.error(error.stack))
.then(x =>
	console.log('Running resulted in:',x)
)

function run (generator){
	const iterator = generator()
	function iterate(iteration){
		if(iteration.done) return iteration.value
		function run (generator){
			const promise = iteration.value
			return promise.then( x => (iterate.next(x)))
		}
		return iterate (iterator.next())
	}
}