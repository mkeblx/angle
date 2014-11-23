var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function() {
  
});

gulp.task('sass', function() {
  gulp.src('app/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});