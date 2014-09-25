// Get the DOM element that will contain the posts.
var postsDiv = document.getElementById("posts");

// Create a new DOM element that is not attached to the DOM.
var postDiv = document.createElement("div");

// Set the text content of the new element.
postDiv.innerHTML = "Post Content";

// Append the new element to the posts element.
postsDiv.appendChild(postDiv);
