/* */ 
"format global";
var fs = require('fs');
var exec = require('child_process').exec;


var bower = require('./bower.json');
var pkg = require('./package.json');
var version = process.argv[2];

console.log('version:', version);
bower.version = version;
pkg.version = version;
pkg.devDependencies.traceur = version;

fs.writeFileSync('bower.json', JSON.stringify(bower, null, 2));
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

exec('rm -rf node_modules', function() {
    exec('npm run build', function (error, stdout, stderr) {
         console.log(stdout);

        if (stderr) {
            console.log(stderr);
        }
    });
});
