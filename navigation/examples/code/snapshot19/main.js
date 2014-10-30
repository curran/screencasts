// Gets the appropriate content for the given fragment identifier.
function getContent(fragmentId, callback){

  // Create a new AJAX request for fetching the partial HTML file.
  var request = new XMLHttpRequest();

  // Call the callback with the content loaded from the file.
  request.onload = function () {
    callback(request.responseText);
  };

  // Fetch the partial HTML file for the given fragment id.
  request.open("GET", fragmentId + ".html");
  request.send(null);
}

// Sets the "active" class on the active navigation link.
function setActiveLink(fragmentId){
  var navbarDiv = document.getElementById("navbar"),
      links = navbarDiv.children,
      i, link, pageName;
  for(i = 0; i < links.length; i++){
    link = links[i];
    pageName = link.getAttribute("href").substr(1);
    if(pageName === fragmentId) {
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  }
}

// Updates dynamic content based on the fragment identifier.
function navigate(){

  // Get a reference to the "content" div.
  var contentDiv = document.getElementById("content"),

      // Isolate the fragment identifier using substr.
      // This gets rid of the "#" character.
      fragmentId = location.hash.substr(1);

  // Set the "content" div innerHTML based on the fragment identifier.
  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

  // Toggle the "active" class on the link currently navigated to.
  setActiveLink(fragmentId);
}

// If no fragment identifier is provided,
if(!location.hash) {

  // default to #home.
  location.hash = "#home";
}

// Navigate once to the initial fragment identifier.
navigate();

// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate)
