"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
var gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
	  ts          = require('gulp-typescript'),
    webserver   = require('gulp-webserver');

//******************************************************************************
//* CONFIG
//******************************************************************************
var settings = {
  projectName : "tsbook1"
};

//******************************************************************************
//* LINT
//******************************************************************************
gulp.task("lint", function() {

  var input = [
    "src/**/**.ts"
  ];

  return gulp.src(input)
             .pipe(tslint())
             .pipe(tslint.report("verbose"));
});

//******************************************************************************
//* BUILD
//******************************************************************************
gulp.task('build', ['lint'], function() {
  
    var tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript')
    });
    
    var compile = ts(tsProject);

    return gulp.src("src/**/**.ts")
                .pipe(compile)
                .js.pipe(gulp.dest("src/"));
});

//******************************************************************************
//* SERVE
//******************************************************************************
gulp.task('serve', ['build'], function() {
  gulp.src('./')
    .pipe(webserver({
      directoryListing: true,
      open: "http://localhost:8000/browser/index.html",
      livereload: {
        enable: true,
        filter: function(fileName) {
          // exclude all source maps from livereload
          if (fileName.match(/.map$/)) {
            return false;
          } else {
            return true;
          }
        }
      }
    }));
});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task('default', ['build']);