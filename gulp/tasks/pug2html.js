const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const htmlreplace = require('gulp-html-replace');
const htmlremovelines = require('gulp-remove-empty-lines');
const browsersync = require('browser-sync').create();

module.exports = function pug2html() {
  return src([
    'app/src/pug/**/*.pug',
    '!app/src/pug/layouts/**/*.pug',
    '!app/src/pug/includes/**/*.pug',
    '!app/src/pug/modules/**/*.pug'
  ])
  .pipe(pug({
    doctype: 'html',
    pretty: true
  }))
  .pipe(htmlreplace({remove : ''}))
  .pipe(htmlremovelines())
  .pipe(rename({
    extname: '.php'
  }))
  .pipe(dest(['app/build/content/']))
  //.pipe(browsersync.stream());
}