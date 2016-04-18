'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({compress: true}).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('scripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./src/**/*.js', ['scripts']);
});