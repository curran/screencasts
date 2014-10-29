// Gets the appropriate content for the given fragment identifier.
function getContent(fragmentId){

  // Content for each navigation link.
  var partials = {
    home: "This is the Home page. Welcome to my site.",
    about: "This is the About page.",
    contact: "This is the Contact page."
  };

  // Look up the partial for the given fragment id.
  return partials[fragmentId];
}

// Updates dynamic content based on the fragment identifier.
function navigate(){

  // Get a reference to the "content" div.
  var contentDiv = document.getElementById("content"),

      // Isolate the fragment identifier using substr.
      // This gets rid of the "#" character.
      fragmentId = location.hash.substr(1);

  // Set the "content" div innerHTML based on the fragment identifier.
  contentDiv.innerHTML = getContent(fragmentId);
}

// If no fragment identifier is provided,
if(!location.hash) {

  // default to #home
  location.hash = "#home";
}

// Navigate once to the initial hash value.
navigate();

// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate)
