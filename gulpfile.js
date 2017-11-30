var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var path = require('path');
var webpackConfig = require('./webpack.config.js');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({includePaths : ['./src/sass/includes/'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(path.join('./app/css')));
});

gulp.task('server', function() {
    connect.server({
        root: 'app',
        port : 8080,
        livereload: true
    });
});

gulp.task('webpack',function(){
    try {
        return gulp.src('./src/js/app/js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('./app/js/'))
    } catch (e) {
        throw e;
    }
});

gulp.task('watch' , function(){
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js',['webpack'])
});

gulp.task('default' , ['server','watch','webpack']);
