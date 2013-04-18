/* global module */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        spry: {
            simple: {
                options: {
                    downscale: true,
                    format: 'less',
                    cssOut: 'css/includes/sprite.less'
                },
                files: [
                    {src: ['images/sprite@2x/*.png'], dest: 'images/sprite@2x.png', retina: true},
                    {src: ['images/sprite/*.png'], dest: 'images/sprite.png'}
                ]
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('grunt-spry', ['spry']);
    grunt.registerTask('default', ['grunt-spry']);
};
