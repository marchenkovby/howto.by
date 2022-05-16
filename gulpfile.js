const { parallel, series } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.bs = tasks.bs;
exports.clean = tasks.clean;
exports.pug2html = tasks.pug2html;
exports.styles = tasks.styles;
exports.watching = tasks.watching;
exports.move = tasks.move;

exports.default = series(exports.clean, parallel(exports.pug2html, exports.styles, exports.watching, /*exports.move*/ /*exports.bs*/));