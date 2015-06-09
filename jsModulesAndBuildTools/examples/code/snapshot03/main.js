(function (){
  var numbers = [1, 2, 3];
  var result = FunctionalUtils.sum(numbers);

  var outputElement = document.getElementById("output")
  outputElement.innerHTML = result;
}());
