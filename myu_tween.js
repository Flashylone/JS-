Math.easeOut = function( start, end, rate, callback ){
	if( start === end || typeof start !== 'number' ){
		console.log( start );
		return;
	}

	var step = function( ){
		start = start + ( end - start ) / rate;
		if( start < 1 ){
			callback( end, true );
			return;
		}
		callback( start, false );
		requestAnimationFrame( step );
	}
	step();
}