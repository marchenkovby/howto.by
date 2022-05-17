const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

module.exports = function images() {
  return src('app/src/images/**/*')
  .pipe(cache(imagemin()))
  .pipe(dest('app/build/public_html/images/**/*'))
}


// Попробовать убрать module.exports, а также const { src, dest } = require('gulp')
//
// gulp-newer - https://github.com/alstupakov/airStart
// npm install gulp-imagemin --save-dev
// npm install gulp-cache --save-dev
// https://webref.ru/dev/gulp-for-beginners/optimizing-images
