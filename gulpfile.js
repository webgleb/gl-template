'use strict';


// npm i gulpjs/gulp#4.0 gulp-if gulp-pug emitty
const gulp = require('gulp');
const gulpif = require('gulp-if');
const pug = require('gulp-pug');
const emitty = require('emitty').setup('dev/templates', 'pug');

// Your "watch" task
gulp.task('watch', () => {
	// Shows that run "watch" mode
	global.watch = true;

	gulp.watch('dev/templates/**/*.pug', gulp.series('templates'))
		.on('all', (event, filepath) => {
			global.emittyChangedFile = filepath;
		});
});

gulp.task('templates', () =>
	new Promise((resolve, reject) => {
		emitty.scan(global.emittyChangedFile).then(() => {
			gulp.src('dev/templates/*.pug')
				.pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
				.pipe(pug({ pretty: true }))
				.pipe(gulp.dest('build'))
				.on('end', resolve)
				.on('error', reject);
		});
	})
);


// const route                = require("./gulp-tasks/route")();
// const gulp                 = require('gulp'),
//       gulpif               = require('gulp-if'),
//       browserSync          = require("browser-sync"),
//       reload               = browserSync.reload,
//       pug                  = require('gulp-pug'),
//       emitty               = require('emitty').setup(route.src.pug, 'pug', {
// 		makeVinylFile: true
// 	  });

// // Your "watch" task
// gulp.task('html:watch', () => {
// 	// Shows that run "watch" mode
// 	global.watch = true;

// 	gulp.watch(route.src.pugFiles, gulp.series('templates'))
// 		.on('all', (event, filepath) => {
// 			global.emittyChangedFile = filepath;
// 		});
// });

// gulp.task('templates', () =>
// 	new Promise((resolve, reject) => {
// 		const sourceOptions = global.watch ? { read: false } : {};
		
// 		emitty.scan(global.emittyChangedFile).then(() => {
// 			gulp.src(route.src.pugPages, sourceOptions)
// 				.pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
// 				.pipe(pug({ pretty: true }))
// 				.pipe(gulp.dest('build'))
// 				.on('end', resolve)
// 				.on('error', reject);
// 		});
// 	})
// );










// // ---------packages
// var gulp                 = require('gulp'),
// 	requireDir           = require('require-dir');
// // ---------paths
// var route = require("./gulp-tasks/route")();

// // --------- tasks
// requireDir('./gulp-tasks');

// // ---------build tasks
// gulp.task('build', [
// 	'html:build',
// 	'style:build',
// 	'js:replace',
// 	'data:replace',
// 	'js:build',
// 	'fonts:build',
// 	'svg:build',
// 	'images:build',
// 	'videos:build'
// ]);

// gulp.task('setWatch', function() {
// 	global.isWatching = true;
// });


// // ---------watch tasks
// gulp.task('watch', ['setWatch', 'html:build'], function() {
// 	gulp.watch(route.src.componentsStyles, ['style:build']);
// 	gulp.watch(route.watch.styles,         ['style:build']);
// 	gulp.watch(route.src.componentsJs,     ['js:replace']);
// 	gulp.watch(route.watch.js,             ['js:build']   );
// 	gulp.watch(route.src.imagesFiles,      ['svg:build']);
// 	gulp.watch(route.src.imagesFiles,      ['images:build']);
// 	gulp.watch(route.watch.fonts,          ['fonts:build']);
// 	gulp.watch(route.src.data,             ['data:replace']);
// });

// gulp.task('default', ['build', 'webserver', 'watch']);
