// sudo npm install --save-dev gulp-sass gulp-rename gulp-minify-css gulp-livereload gulp-autoprefixer gulp-load-plugins gulp-autoprefixer gulp-htmlmin gulp-concat

// DURING DEVELOPMENT USE:
// gulp watch

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// gulp.task('minifyHtml', function() {
//   return gulp.src('_site/*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('_site/'))
// });


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['scripts']);
  // gulp.watch([
  //   '_includes/**/*.html',
  //   '_layouts/**/*.html',
  //   '_posts/**/*'
  // ], ['build']);
});


gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});


gulp.task('scripts', function() {
  return gulp.src(['js/jquery.pin.min.js', 'js/script.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
