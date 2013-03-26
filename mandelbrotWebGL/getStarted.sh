# This script downloads the two starter files

# gl-matrix is used as-is
curl https://raw.github.com/toji/gl-matrix/master/dist/gl-matrix.js > gl-matrix.js

# This file, taken from a WebGL tutorial, was modified:
#  - Split across an HTML file and a .js file
#  - JS uses an immediately invoked function to operate in local scope
#  - Matrix calls were changed to match the gl-matrix API
curl http://learningwebgl.com/lessons/lesson01/index.html > index.html
