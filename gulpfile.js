var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('build-css', function () {
  return gulp.src('./assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
//Watch task
gulp.task('default', function() {
   gulp.watch('./assets/css/**/*.scss',['build-css']);
});