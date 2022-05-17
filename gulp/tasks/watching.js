const { parallel, watch } = require('gulp');

module.exports = function watching() {
  watch('app/src/pug/**/*.pug', parallel('pug2html'));
  watch('app/src/sass/**/*.sass', parallel('styles'));
}