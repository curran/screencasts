// This script compiles README_template.md 
// into README.md by
//
//  * compiling metadata about examples 
//  * dynamically generating a markdown list of example entries
//  * injecting the list into the template
//
//  Curran Kelleher 3/2/2014
var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs'),
    inputFile = './README_template.md',
    outputFile = './README.md',
    outputHTMLFile = './README.html',
    entryDir = 'examples/',
    snapshotsPath = entryDir + 'snapshots/',
    snapshotURL = 'https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/',
    snapshotRunURL = 'http://curran.github.io/screencasts/introToAngular/examples/snapshots/',
    messageFile = '/message.txt',
    entryTemplate = _.template(' * [Example <%= number %>](<%= url %>) - ([run it!](<%= runUrl %>) | [index.html](<%= url %>/index.html))<%= message %>');

// Read the template for README.md
fs.readFile(inputFile, 'utf8', function (err, template) {

  // Generate the model for the README.md template.
  var model = generateTemplateModel(entryTemplate),

      // Evaluate the README.md template.
      output = _.template(template, model),

      // Create an HTML page with the compiled markdown.
      outputHTML = marked(output);

  // Write README.md
  write(outputFile, output);

  // Write README.html
  write(outputHTMLFile, outputHTML);
});

function write(outputFile, output){
  fs.writeFile(outputFile, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  });
}

function generateTemplateModel(){
  var files = fs.readdirSync(snapshotsPath),
      entries = files.map(function(file){
        return {
          name: file,
          number: extractNumber(file),
          message: getMessage(file),
          url: snapshotURL + file,
          runUrl: snapshotRunURL + file
        };
      });

  return { examples: entries.map(entryTemplate).join('\n') };
}

function extractNumber(name){
  return parseInt(name.substr(8), 10);
}

function getMessage(file){
  var msgFile = snapshotsPath + file + messageFile;
  if(fs.existsSync(msgFile)){
    var msg = fs.readFileSync(msgFile, 'utf8');
    return ' - ' + msg.replace('\n','');
  }
  return '';
}
