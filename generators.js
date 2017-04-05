window.onload = function(){

//debugger;
// --- (function() {
 	genWrapper(function* generator() {
		var tweets = yield $.getJSON('data/tweets.json');
		console.log(tweets);

		var friends = yield $.getJSON('data/fb-friends.json');
		console.log(friends);

		var ytVids = yield $.getJSON('data/yt-vids.json');
		console.log(ytVids);

	});

	function genWrapper (generator) {
		// set up generator /iterator
		var myGen = generator();

		// create function to handle the yilded value
		function handle (yielded) {
			// body...
			if(!yielded.done){
				yielded.value.then(function(data){
					return handle(myGen.next(data));
				});
			}
		} // end handle

		// return handle function, passing in myGen.next
		return handle(myGen.next());
	}

  // var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  // $.getJSON( flickerAPI, {
  //   tags: "mount rainier",
  //   tagmode: "any",
  //   format: "json"
  // })
  //   .done(function( data ) {
  //     $.each( data.items, function( i, item ) {
  //       $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
  //       if ( i === 3 ) {
  //         return false;
  //       }
  //     });
  //   });



// --- })();
}