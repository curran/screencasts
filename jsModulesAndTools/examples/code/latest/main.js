require(["./sum"], function (sum) {
	var numbers = [1, 2, 3];
	var result = sum(numbers);

  // This check is required when using the r.js optimizer,
	// because it actually runs the code in Node.
  if(typeof document !== 'undefined'){
		var outputElement = document.getElementById("output");
		outputElement.innerHTML = result;
	}
});
