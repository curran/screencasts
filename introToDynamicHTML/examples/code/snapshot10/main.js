// This JavaScript program reads "posts.json" and renders
// the data to the page.
//
// By Curran Kelleher 9/25/2014 curran.kelleher@gmail.com

(function () {

  // Adds a DOM structure for each post.
  function renderPosts(posts) {

    // Get the DOM element that will contain the posts.
    var postsDiv = document.getElementById("posts");

    posts.forEach(function (post) {

      // Create the DOM elements.
      var postDiv = document.createElement("div"),
          postNameDiv = document.createElement("div"),
          postAuthorDiv = document.createElement("div"),
          postContentDiv = document.createElement("div");

      // Set the content of each element.
      postNameDiv.innerHTML = post.name;
      postAuthorDiv.innerHTML = post.author;
      postContentDiv.innerHTML = post.content;

      // Set CSS classes on each div so they can be styled.
      postDiv.setAttribute("class", "post");
      postNameDiv.setAttribute("class", "post-name");
      postAuthorDiv.setAttribute("class", "post-author");
      postContentDiv.setAttribute("class", "post-content");

      // Assemble the post div.
      postDiv.appendChild(postNameDiv);
      postDiv.appendChild(postAuthorDiv);
      postDiv.appendChild(postContentDiv);

      // Add the post div to the container for posts.
      postsDiv.appendChild(postDiv);
    });
  }

  // Fetches the file "posts.json" and passes the parsed JSON object 
  // into the given callback function.
  function getPosts(callback){

    // Fetch the JSON file using XMLHttpRequest.
    // Draws from:
    // http://en.wikipedia.org/wiki/XMLHttpRequest
    // http://vanilla-js.com/
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    var request = new XMLHttpRequest();

    // When the file has loaded,
    request.onload = function () {

      // parse the JSON text into an array of post objects.
      var posts = JSON.parse(request.responseText);

      // Pass the posts array to the callback.
      callback(posts);
    };
    request.open("GET", "posts.json", true);
    request.send(null);
  }

  // The main program, which gets then renders posts.
  getPosts(function (posts) {
    renderPosts(posts);
  });
}());
