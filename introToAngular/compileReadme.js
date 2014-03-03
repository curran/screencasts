// This script compiles README_template.md 
// into README.md by
//
//  * compiling metadata about examples 
//  * dynamically generating a markdown list of example entries
//  * injecting the list into the template
var _ = require('underscore'),
    fs = require('fs'),
    inputFile = './README_template.md',
    outputFile = './README.md',
    entryDir = 'examples/',
    entryTemplate = _.template(' * [<%= name %>](./examples/<%= name %>) - <%= message %>');

// Read the template for README.md
fs.readFile(inputFile, 'utf8', function (err, template) {

  // Generate the model for the README.md template.
  var model = generateTemplateModel(entryTemplate),

      // Evaluate the README.md template.
      output = _.template(template, model);

  // Write README.md
  fs.writeFile(outputFile, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  }); 
});

function generateTemplateModel(){
  
  var snapshotsPath = entryDir + 'snapshots/',
      files = fs.readdirSync(snapshotsPath),
      entries = files.map(function(file){
        var msgFile = snapshotsPath + file + '/message.txt',
            message = fs.readFileSync(msgFile, 'utf8');
        message = message.replace('\n','');
        return {
          name: file,
          message: message
        };
      });

  return {
    examples: entries.map(entryTemplate).join('\n')
  };
}
