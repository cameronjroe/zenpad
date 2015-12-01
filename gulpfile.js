var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
      .pipe(clean());
});

gulp.task('uglify', ['clean'], function () {
  return gulp.src('js/*.js')
    .pipe(concat('zenpad.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('zenpad.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['uglify']);