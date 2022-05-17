const { src, dest } = require('gulp');
const rename = require('gulp-rename');

module.exports = function move() {
  return src([
    'app/build/content/post.php',
  ])
  .pipe(rename("build/app/template-new.php"))
  .pipe(dest(['app/']))
}