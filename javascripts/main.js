(function() {

  var inputBox = document.getElementById('input');
  var resultBox = document.getElementById('result');
  var validateButton = document.getElementById('validateButton');

  $.getJSON('https://rawgit.com/doc-metrix/schema/master/metricsSchema.json')
  .done(function ( schema ) {

    var validate = function validate() {
      var specification = JSON.parse(inputBox.value);
      if (specification) {
        var result = tv4.validateMultiple(specification, schema);
        if (result.valid) {
          resultBox.innerHTML = "VALID!";
        } else {
          resultBox.innerHTML = "INVALID!!";
          console.log(result);
        }
      }
    };
    
    validateButton.addEventListener('click', validate, false);
  });

})();
