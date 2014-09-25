
// Adds a DOM structure for each post.
function renderPosts(posts) {

  // Get the DOM element that will contain the posts.
  var postsDiv = document.getElementById("posts");

  posts.forEach(function (post) {

    // Create the DOM elements.
    var postDiv = document.createElement("div");
    var postNameDiv = document.createElement("div");
    var postAuthorDiv = document.createElement("div");
    var postContentDiv = document.createElement("div");

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

// Creates an array of post objects.
function getPosts(){
  return [
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
}

renderPosts(getPosts());
