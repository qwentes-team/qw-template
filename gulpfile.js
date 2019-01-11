'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
const spawn = require('child_process').spawn;

// RunSequence run tasks synchronous
gulp.task('build-dev', function (callback) {
  runSequence('webpack', 'jekyll', 'browser-sync', callback);
});

gulp.task('build-watch', function (callback) {
  runSequence('webpack', 'jekyll', callback);
});

gulp.task('webpack', function() {
  return gulp.src('./js/dev/script.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./js/prod/'));
});

// Build jekyll
gulp.task('jekyll', function (gulpCallBack) {
  const jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['build-watch'], function () {
  browserSync.notify('Building Jekyll');
  browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: '_site'
    },
    host: 'localhost'
  });
});

// Watch
gulp.task('watch', function () {
  // Watch .scss files
  gulp.watch('_sass/**.scss', ['jekyll-rebuild']);
  // Watch .js files
  gulp.watch('js/dev/**.js', ['jekyll-rebuild']);
  // Watch .html files and posts
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

// Define default tasks for gulp
gulp.task('default', function () {
  gulp.start('watch', ['build-dev']);
});
