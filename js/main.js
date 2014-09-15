(function() {

  // HTML elements
  var inputBox = document.getElementById('input'),
      resultBox = document.getElementById('result'),
      errorBox = document.getElementById('errors'),
      validateButton = document.getElementById('validateButton');

  // always grab the latest version of the schema
  $.getJSON('https://rawgit.com/doc-metrix/schema/master/metricsSchema.json')
  .done(function onResponse( schema ) {

    
    validateButton.addEventListener('click', validate, false);
    
    /**
    * FUNCTION: validate()
    *   Check if user input JSON is a valid specification
    */
    function validate() {
      var specification = JSON.parse(inputBox.value ? inputBox.value : '{}'),
          result;
      
      if (specification) {
        result = tv4.validateMultiple(specification, schema);
        if (result.valid) {
          resultBox.innerHTML = 'VALID!';
          errorBox.innerHTML = '';
        } else {
          resultBox.innerHTML = 'INVALID!!';
          errorBox.innerHTML = processErrors(result);
        }
      }
    }

    /**
    * FUNCTION: processErrors( resultObj )
    *   Generates an HTML representation of validation errors
    *
    * @param {Object} resultObj - validation results object
    * @returns {String} HTML string
    */
    function processErrors( result ) {
      var htmlString = '';

      if (result.valid) {
        return htmlString;
      }

      for (var i = 0; i < result.errors.length; i++) {
        htmlString += '<div class="error">';
        htmlString += '<strong>Metric:</strong> ' + result.errors[i].dataPath.substr(1) + '<br />';
        htmlString += '<strong>Error:</strong> ' + result.errors[i].message;
        htmlString += '</div>';
        htmlString += '<hr />';
      }

      return htmlString;
    }
  });

})();
