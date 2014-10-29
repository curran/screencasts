// Listen for fragment identifier value changes.
window.addEventListener("hashchange", function (){

  // Get a reference to the "content" div.
  var contentDiv = document.getElementById("content");

  // Set the "content" div to contain the current hash value.
  contentDiv.innerHTML = location.hash;
});
