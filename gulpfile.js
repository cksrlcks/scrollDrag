var gulp = require("gulp");
var concat = require("gulp-concat");
var order = require("gulp-order");
//js
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
//css
var sass = require("gulp-sass");
var minificss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
//img
var imagemin = require("gulp-imagemin");
var changed = require("gulp-changed");
var del = require("del");
//php live server
var phpConnect = require("gulp-connect-php");
var browsersync = require("browser-sync");
//path
var devsrc = "src";
var pubsrc = "build";
var paths = {
  dev: {
    js: devsrc + "*.js"
  },
  pub: {
    js: pubsrc
  },
};

function gulp_js() {
  return gulp
    .src('src/hScrollDrag.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("hScrollDrag.min.js"))
    .pipe(gulp.dest('build/'))
}


gulp.task(
  "default",
  gulp.series(
    //clean,
    gulp.parallel(
      gulp.series(gulp_js),
    )
  )
);