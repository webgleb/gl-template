var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('clean', function () {
    return gulp.src('docs/bower_components/**/*.md')
        .pipe(clean())
        .pipe(gulp.dest('dist/bower_components'));
});