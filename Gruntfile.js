module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/main.css": "assets/css/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);

};