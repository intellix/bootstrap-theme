'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var options = gulp.options;

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', function () {

    gulp.watch([
        options.src + '/{,**/}*.scss'
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(options.src + '/{,**/}*.html', function(event) {
        browserSync.reload(event.path);
    });

});
