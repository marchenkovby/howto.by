const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');
const browsersync = require('browser-sync').create();

module.exports = function styles() {
  return src('app/src/sass/styles.sass')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(csscomb())
  .pipe(dest('app/build/public_html/styles/'))
  //.pipe(browsersync.stream());
}