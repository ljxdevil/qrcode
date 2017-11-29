var gulp = require('gulp');

var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var webserver = require('gulp-webserver');

gulp.task('minicss', function() {
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/'))
})

gulp.task('minijs', function() {
    gulp.src('./js/java.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))
})
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            // directoryListing: false,
            open: true,
            port: 8080,
            host: 'localhost',
            fallback: './twocode.html',
            livereload: true,
        }))
})
gulp.task('default', ['minicss', 'minijs']);