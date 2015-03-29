module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            atom: {
                command: './node_modules/atom-shell/dist/Atom.app/Contents/MacOS/Atom src/index.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['shell:atom']);


};

