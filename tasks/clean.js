const del = require('del');

module.exports = function clean() {
  return del([
    'app/build/content/**/*',
    'app/build/public_html/styles/'
  ],
  {force: true})
}