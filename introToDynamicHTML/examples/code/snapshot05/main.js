// Get the DOM element that will contain the posts.
var postsDiv = document.getElementById("posts");

// Create an array of objects representing posts.
// Dummy text from http://en.wikipedia.org/wiki/Lorem_ipsum
var posts = [
  {
    "name": "Post 1",
    "author": "Joe Schmoe",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"   
  },
  {
    "name": "Post 2",
    "author": "Jane Doe",
    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];


// Add a DOM structure for each post.
posts.forEach(function (post) {
  var postDiv = document.createElement("div");
  var postNameDiv = document.createElement("div");
  var postAuthorDiv = document.createElement("div");
  var postContentDiv = document.createElement("div");

  postNameDiv.innerHTML = post.name;
  postAuthorDiv.innerHTML = post.author;
  postContentDiv.innerHTML = post.content;

  postDiv.appendChild(postNameDiv);
  postDiv.appendChild(postAuthorDiv);
  postDiv.appendChild(postContentDiv);

  postsDiv.appendChild(postDiv);
});
