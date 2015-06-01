'use strict';

var gulp = require('gulp');
var util = require('util');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var options = gulp.options;

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    browserSync.instance = browserSync.init(files, {
        startPath: '/',
        server: {
            baseDir: baseDir,
            routes: routes
        },
        browser: browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
    browserSyncInit([
        options.src,
        options.dist
    ], [
        options.dist + '/*.css'
    ]);
});
