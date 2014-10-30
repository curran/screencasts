// Gets the appropriate content for the given fragment identifier.
function getContent(fragmentId, callback){

  // Content for each navigation link.
  var partials = {
    home: "This is the Home page. Welcome to my site.",
    about: "This is the About page.",
    contact: "This is the Contact page."
  };

  // Look up the partial for the given fragment id.
  callback(partials[fragmentId]);
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

  // default to #home
  location.hash = "#home";
}

// Navigate once to the initial hash value.
navigate();

// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate)
