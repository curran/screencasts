// This script compiles README_template.md 
// into README.md by
//
//  * compiling metadata about examples 
//  * dynamically generating a markdown list of example entries
//  * injecting the list into the template
//
//  Created by Curran Kelleher 3/2/2014
//
//  Updated July 2014 to point to the "code" subdirectory,
//  so the URL looks like modelDrivenDataVis/examples/code/index.html
//  rather than modelDrivenDataVis/examples/examples/index.html
var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs'),
    inputFile = './README_template.md',
    outputFile = './README.md',
    outputJSONFile = './examples.json',
    outputHTMLFile = './README.html',
    entryDir = 'code/',
    snapshotsPath = entryDir,
    snapshotURL = 'https://github.com/curran/screencasts/tree/gh-pages/modelDrivenDataVis/examples/code/',
    snapshotRunURL = 'http://curran.github.io/screencasts/modelDrivenDataVis/examples/code',
    messageFile = '/message.txt',
    entryTemplate = _.template(' * [Example <%= number %>](<%= url %>) - ([run it!](<%= runUrl %>) | [index.html](<%= url %>/index.html)) - <%= message %>'),
    irrelevantFiles = ['message.txt', 'README.md', 'server.js'];

// Read the template for README.md
fs.readFile(inputFile, 'utf8', function (err, template) {

  // Generate the data describing the examples.
  var data = generateExampleJSON(),
      outputJSON = JSON.stringify(data, null, 2),

      // Generate the model for the README.md template.
      model = generateREADMEmodel(data), 

      // Evaluate the README.md template.
      output = _.template(template, model),

      // Create an HTML page with the compiled markdown.
      outputHTML = marked(output);

  // Write README.md
  write(outputFile, output);

  // Write README.html
  write(outputHTMLFile, outputHTML);

  // Write examples.json (used by the example viewer app)
  write(outputJSONFile, outputJSON);
});

function write(outputFile, output){
  fs.writeFile(outputFile, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote file " + outputFile);
    }
  });
}

function generateREADMEmodel(data){
  return { examples: data.map(entryTemplate).join('\n') };
}

function generateExampleJSON(){
  var files = fs.readdirSync(snapshotsPath);
  return files
    .filter(function (file) {
      return file !== "latest";
    })
    .map(function (file) {
    return {
      name: file,
      number: extractNumber(file),
      message: getMessage(file),
      files: listFilesForExample(file),
      url: snapshotURL + file,
      runUrl: snapshotRunURL + file
    };
  });

}

// Computes the list of files for each example.
// Sorts files by:
// index.html > *.html > *.js > *.json > *
function listFilesForExample(file){
  var path = snapshotsPath + file,
      allFiles = fs.readdirSync(path),
      files =_.difference(allFiles, irrelevantFiles);
  return _.sortBy(files, filePrecedence);
}

function filePrecedence(name){
  var ext = name.substr(name.lastIndexOf('.'));

  if(name === 'index.html'){
    return 0;
  } else if (ext === '.html') {
    return 1;
  } else if (ext === '.js') {
    return 2;
  } else if (ext === '.json') {
    return 3;
  } else {
    return 4;
  }
}

function extractNumber(name){
  return parseInt(name.substr(8), 10);
}

function getMessage(file){
  var msgFile = snapshotsPath + file + messageFile;
  if(fs.existsSync(msgFile)){
    var msg = fs.readFileSync(msgFile, 'utf8');
    return msg.replace('\n','');
  }
  return '';
}
