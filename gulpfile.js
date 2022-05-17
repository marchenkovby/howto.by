// Main module
import gulp from "gulp";

// Import path from path.js
import { path } from "./gulp/config/path.js";

// Pass value to global variables
global.app = {
    path: path,
    gulp: gulp
}

// Import tasks
import { copy } from "./gulp/tasks/copy.js";

// Make default task
gulp.task('default', copy);

// Start command "gulp"

//const { parallel, series } = require('gulp');
//const requireDir = require('require-dir');
//const tasks = requireDir('./gulp/tasks');

//exports.bs = tasks.bs;
//exports.clean = tasks.clean;
//exports.pug2html = tasks.pug2html;
//exports.styles = tasks.styles;
//exports.watching = tasks.watching;
//exports.move = tasks.move;

//exports.default = series(exports.clean, parallel(exports.pug2html, exports.styles, exports.watching, /*exports.move*/ /*exports.bs*/));
// exports.default = testTask;

// gulp --tasks
