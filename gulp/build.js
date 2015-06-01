'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var options = gulp.options;

gulp.task('other', function () {
    return gulp.src([
        options.src + '/**/*',
        '!' + options.src + '/**/*.{html,css,js,scss}'
    ])
    .pipe(gulp.dest(options.dist + '/'));
});

gulp.task('clean', function (done) {
    $.del([options.dist + '/', options.tmp + '/'], done);
});

gulp.task('build', ['styles', 'other']);
