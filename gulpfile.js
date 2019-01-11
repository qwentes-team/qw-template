'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
const spawn = require('child_process').spawn;
const colors = require('colors');

const env = process.env.NODE_ENV || 'development';
const isProduction = () => env === 'production';

console.log(colors.green('ENVIRONMENT: ' + env));

gulp.task('build', function (callback) {
  runSequence('webpack', 'jekyll', callback);
});

gulp.task('webpack', function () {
  return gulp.src('./js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./js/prod/'));
});

gulp.task('jekyll', function (gulpCallBack) {
  const jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll-rebuild', ['build'], function () {
  browserSync.notify('Building Jekyll');
  browserSync.reload();
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {baseDir: '_site'},
    host: 'localhost'
  });
});

gulp.task('watch', function () {
  console.log('watch!');
  gulp.watch(['_sass/**.scss', 'css/main.scss'], ['jekyll-rebuild']);
  gulp.watch('js/**.js', ['jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html', '_includes/**/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', function (callback) {
  isProduction()
    ? gulp.start('build')
    : runSequence('build', 'browser-sync', 'watch', callback);
});
