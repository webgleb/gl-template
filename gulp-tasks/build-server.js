"use strict";

var gulp                 = require('gulp'),
    browserSync          = require("browser-sync");
	
var route = require("./route")();

var config = {
    server: {
        baseDir: route.main.build
    },
    host: 'localhost',
    port: 9001,
    reloadDelay: 0,
    open: true
};

gulp.task('webserver', function() {
    browserSync(config);
});