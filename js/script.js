
(function() {
	'use strict';

	var URLs = {};

	URLs.schema = 'https://api.github.com/repos/doc-metrix/schema/contents/schema/index.json';

	getResource( URLs.schema, onSchema );

	// FUNCTIONS //

	/**
	* FUNCTION: getResource( url, clbk )
	*	Fetches a resource from a provided URL and returns the result to a provided callback.
	*
	* @private
	* @param {String} url - resource location
	* @param {Function} clbk - callback to invoke upon resource receipt. Function should accept one input argument: [ result ]
	*/
	function getResource( url, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'GET', url );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send();
		} // end IF (parameters)
	} // end FUNCTION getResource()

	/**
	* FUNCTION: onSchema( blob )
	*	Handler for receiving a schema resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onSchema( blob ) {
		var schema = JSON.parse( window.atob( JSON.parse( blob ).content ) );
		console.log( schema );
	} // end FUNCTION onSchema()

})();