// Updates dynamic content based on the fragment identifier.
function navigate(){

  // Get a reference to the "content" div.
  var contentDiv = document.getElementById("content");

  // Set the "content" div to contain the current hash value.
  contentDiv.innerHTML = location.hash;
}

// Navigate once to the initial hash value.
navigate();

// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate)
