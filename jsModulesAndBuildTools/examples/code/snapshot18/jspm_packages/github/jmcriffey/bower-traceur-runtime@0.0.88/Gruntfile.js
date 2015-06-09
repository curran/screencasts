/* */ 
"format global";
module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json'),
        npmTasks = [
            'grunt-contrib-copy',
            'grunt-contrib-uglify'
        ];

    grunt.initConfig({
        pkg: pkg,
        uglify: {
            main: {
                options: {
                    sourceMap: true
                },
                files: {
                    'traceur-runtime.min.js': 'traceur-runtime.js'
                }
            }
        },
        copy: {
            main: {
                src: 'node_modules/traceur/bin/traceur-runtime.js',
                dest: './traceur-runtime.js'
            }
        }
    });

    npmTasks.forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    grunt.registerTask('default', ['copy', 'uglify']);
};
