window.addEventListener( 'load', function() {

	setOverriddenFunctions();
	console.log( 'functions have been overriden' );
	iAmGeneric( 'Hi from apply', 10 );


} );


setOverriddenFunctions = ( function( _super ) {

	return function() {

		iAmGeneric = ( function( _super ) {

			return function() {
				console.log( 'The new generic from apply got called' );

				console.log( 'Its the new' + _super.a.toString() + ' ' + _super.b.toString() );

			};

		} )( iAmGeneric );

	};

} )( setOverriddenFunctions );

