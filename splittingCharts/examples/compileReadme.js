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
//
//  Updated October 2014
//
//   * put the README in the parent directory
//   * stop producing README.html
//
var _ = require('underscore'),
    fs = require('fs'),

    // This file contains data that changes for each different presentation.
    // This includes fields like project title, and base GitHub URL.
    projectFile = './project.json',

    inputFile = './README_template.md',
    outputFile = '../README.md',
    outputJSONFile = './examples.json',
    entryDir = 'code/',
    snapshotsPath = entryDir,
    messageFile = '/message.txt',
    entryTemplate = _.template(' * [Example <%= number %>](<%= url %>) - ([run it!](<%= runUrl %>) | [index.html](<%= url %>/index.html)) - <%= message %>'),

    // These files are not excluded from the example code viewer.
    irrelevantFiles = ['message.txt', 'README.md', 'server.js', 'backbone.js', 'underscore.js'];

// Read the project description file.
fs.readFile(projectFile, 'utf8', function (err, project) {

  // Parse the JSON text into an object.
  project = JSON.parse(project);

  // Read the template for README.md
  fs.readFile(inputFile, 'utf8', function (err, template) {

    // Generate the data describing the examples.
    var entries = generateExampleJSON(project),

        // The raw data about each example is output as examples.json.
        outputJSON = JSON.stringify(entries, null, 2),

        // The same data is used to generate the model for the README.md template.
        model = generateREADMEmodel(entries), 

        // Evaluate the README.md template.
        output = _.template(template)(model);

    // Write README.md
    write(outputFile, output);

    // Write examples.json (used by the example viewer app)
    write(outputJSONFile, outputJSON);
  });
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

// Generates the object passed into the README template.
function generateREADMEmodel(entries){

  // Return an object with a property "examples",
  // which is referenced from within the README template.
  return {

    // Apply the entry template to each example entry.
    examples: entries.map(entryTemplate).join('\n')
  };
}

// Generates data about all examples by reading
// a directory listing from the file system.
function generateExampleJSON(project){

  // Read the list of examples from the file system.
  var files = fs.readdirSync(snapshotsPath);

  return _.sortBy(files

    // Exclude the "latest" subdirectory.
    .filter(function (file) {
      return file !== "latest";
    })

    // Assemble data about each example.
    .map(function (file) {
      return {
        name: file,
        number: extractNumber(file),
        message: getMessage(file),
        files: listFilesForExample(file),
        url: project.snapshotURL + extractNumber(file),
        runUrl: project.snapshotRunURL + file
      };
    }), "number");
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
