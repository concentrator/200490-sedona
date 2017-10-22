"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": ["less/style.less"]
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:htmlcopy"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          src: ['js/*.js', '!js/*.min.js'],
          dest: 'build',
          cwd: '.',
          rename: function (dst, src) {
            return dst + '/' + src.replace('.js', '.min.js');
          }
        }]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,svg}"]
        }]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg}"]
        }]
      }
    },

    copy: {
      htmlcopy: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      },
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/*.{jpg,png,svg,webp}",
            "*.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "less",
    "postcss",
    "csso",
    "uglify"
  ]);
};
