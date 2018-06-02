// ---------packages
var gulp = require('gulp'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	filter = require('gulp-filter'),
	imagemin = require('gulp-imagemin'),
	file = require('gulp-file'),
	spritesmith = require('gulp.spritesmith'),
	webp = require('gulp-webp');

var onError = require("./onError");
var route = require("./route")();

gulp.task('svg:build', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(gulp.dest(route.build.images));
});

gulp.task('images:opti', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(webp())
		.pipe(filter(function (file) {
			var name = file.path.substring(file.path.lastIndexOf(".") + 1, file.path.length).toLowerCase();
			return name == 'svg' ? false : true;
		}))
		.pipe(gulp.dest(route.build.images));
});
gulp.task('images:build', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(filter(function (file) {
			var name = file.path.substring(file.path.lastIndexOf(".") + 1, file.path.length).toLowerCase();
			return name == 'svg' ? false : true;
		}))
		.pipe(gulp.dest(route.build.images));
});

gulp.task('sprite:build', function () {
	var spriteData = gulp.src('./dev/images/useful/sprites/overview/not-render/*.*').pipe(
		spritesmith({
			cssName: 'overview-sprite.scss',
			imgName: 'overview-sprite.png',
			imgPath: '../images/useful/sprites/overview/overview-sprite.png',
			retinaSrcFilter: './dev/images/useful/sprites/overview/not-render/*@2x.png',
			retinaImgName: 'overview-sprite@2x.png',
			retinaImgPath: '../images/useful/sprites/overview/overview-sprite@2x.png',
			algorithm: 'binary-tree',
			padding: 2,
			sort: false
		})
	)
	return spriteData.pipe(gulp.dest('./dev/images/useful/sprites/overview/'));
});