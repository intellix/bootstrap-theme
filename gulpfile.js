'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.options = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e',
    errorHandler: function(title) {
        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    }
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
