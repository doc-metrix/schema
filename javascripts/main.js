(function() {

  // HTML elements
  var inputBox = document.getElementById('input'),
      resultBox = document.getElementById('result'),
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
          resultBox.innerHTML = "VALID!";
        } else {
          resultBox.innerHTML = "INVALID!!";
          console.log(result);
        }
      }
    }
  });

})();
