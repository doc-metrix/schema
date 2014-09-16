
(function() {
	'use strict';

	var url,
		schema,
		button,
		input,
		results,
		errors;

	url = 'https://api.github.com/repos/doc-metrix/schema/contents/schema/index.json';

	// Get the validation elements:
	button = document.querySelector( '[name="validate"]' );
	input = document.querySelector( '[name="validation-input"]' );
	results = document.querySelector( '.results' );
	errors = document.querySelector( '.errors' );

	if ( !button || !results || !input || !errors ) {
		throw new Error( 'Unable to find validation elements.' );
	}

	// Get the JSON schema:
	getResource( url, onSchema );

	return;

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
		schema = JSON.parse( window.atob( JSON.parse( blob ).content ) );
		addListener();
	} // end FUNCTION onSchema()

	/**
	* FUNCTION: addListener()
	*	Adds an event listener to a validation button.
	*
	* @private
	*/
	function addListener() {
		button.addEventListener( 'click', validate, false );
	} // end FUNCTION addListener()

	/**
	* FUNCTION: validate()
	*	Validates a metric specification and outputs the validation results.
	*
	* @private
	*/
	function validate() {
		var spec = input.value,
			str = '',
			errs,
			res;

		results.innerHTML = '';
		errors.innerHTML = '';
		if ( !spec ) {
			errors.innerHTML = '<p>Validation requires a metric specification.</p>';
			return;
		}
		try {
			spec = JSON.parse( spec );
		} catch ( error ) {
			errors.innerHTML = '<p>A metric specification must be valid JSON.</p>';
			return;
		}
		res = tv4.validateMultiple( spec, schema );
		if ( res.valid ) {
			results.innerHTML = '<p>Specification is valid.</p>';
			return;
		}
		errs = results.errors;
		for ( var i = 0; i < errs.length; i++ ) {
			str += '<p class="error">';
			str += '<strong>Metric:</strong>' + errs[ i ].dataPath.substr( 1 ) + '<br/>';
			str += '<strong>Error:</strong>' + errs[ i ] .message;
			str += '</p><hr>';
		}
		errors.innerHTML = str;
	} // end FUNCTION validate()

})();