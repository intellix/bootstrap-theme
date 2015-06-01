'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var options = gulp.options;

gulp.task('styles', function () {

    var sassOptions = {
        style: 'expanded',
        precision: 10
    };

    return gulp.src([
        options.src + '/**/*.scss'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(options.dist))
    .pipe(browserSync.reload({
        stream: true
    }));
});
