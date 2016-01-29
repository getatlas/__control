// sudo npm install --save-dev gulp-sass gulp-rename gulp-minify-css gulp-livereload gulp-styledown gulp-autoprefixer gulp-load-plugins gulp-autoprefixer gulp-sourcemaps gulp-htmlmin gulp-shell
//
// DURING DEVELOPMENT USE:
// gulp watch

// MINIFY HTML FOR PRODUCTION:
// gulp minifyHtml
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var styledown = require('gulp-styledown');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var shell = require('gulp-shell');


gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});


// gulp.task('build', shell.task([ 'jekyll serve' ]));


gulp.task('minifyHtml', function() {
  return gulp.src('_site/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site/'))
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
  // gulp.watch([
  //   '_includes/**/*.html',
  //   '_layouts/**/*.html',
  //   '_posts/**/*'
  // ], ['build']);
});
