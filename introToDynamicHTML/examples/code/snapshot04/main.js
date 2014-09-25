// Get the DOM element that will contain the posts.
var postsDiv = document.getElementById("posts");

// Create an array of strings representing posts.
var posts = ["Post 1", "Post 2", "Post 3"];

// Add a DOM element for each post.
posts.forEach(function (post) {
  var postDiv = document.createElement("div");
  postDiv.innerHTML = post;
  postsDiv.appendChild(postDiv);
});
