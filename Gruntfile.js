module.exports = function(grunt) {

    "use strict";

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    sourcemap : true
                },

                files : {
                    "dist/css/app.css": "src/scss/app.scss"
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/app.min.css': ['node_modules/materialize-css/dist/css/materialize.min.css', 'src/scss/lib/expandable-gallery.css', 'dist/css/app.css']
                }
            }
        },
        uglify: {
            dev: {
                options: {
                    compress: true,
                    mangle: true,
                    preserveComments: false
                },

                files: {
                    "dist/js/app.min.js" : ["node_modules/jquery/dist/jquery.min.js", 'node_modules/materialize-css/dist/js/materialize.min.js', 'src/js/lib/expandable-gallery.js', "src/js/app.js"]
                }
            }
        },
        concat: {
            dev: {
                files: {
                    'dist/js/app.min.js': ['node_modules/jquery/dist/jquery.min.js', 'node_modules/materialize-css/dist/js/materialize.min.js', 'src/js/lib/expandable-gallery.js', 'src/js/app.js'],
                    'dist/css/app.min.css': ['node_modules/materialize-css/dist/css/materialize.min.css', 'src/scss/lib/expandable-gallery.css', 'dist/css/app.css']
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                cwd: 'node_modules/materialize-css/dist/fonts/roboto',
                src: '**',
                dest: 'dist/fonts/roboto/'
            }
        },
        clean: {
            dist: [
                'dist/js', 'dist/css', 'dist/fonts'
            ]
        },
        connect: {
            server : {
                options: {
                    open: false,
                    keepalive: true
                }
            }
        }
    });
    grunt.registerTask("dev", ["clean:dist", "sass:dev", "concat:dev", "copy:fonts", "connect:server"]);
    grunt.registerTask("prod", ["clean:dist", "sass:dev", "cssmin", "uglify:dev", "copy:fonts"]);
};
