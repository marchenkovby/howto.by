// Main module
import gulp from "gulp";

// Import path from path.js
import { path } from "./gulp/config/path.js";

// Import common plugins
import { plugins } from "./gulp/config/plugins.js";

// Pass value to global variables
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { buildHtml } from "./gulp/tasks/buildHtml.js";
import { server } from "./gulp/tasks/server.js";
import { buildStyles } from "./gulp/tasks/buildStyles.js";
import { buildJs } from "./gulp/tasks/buildJs.js";
import { compressImages } from "./gulp/tasks/compressImages.js";
 
// Watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy),
  gulp.watch(path.watch.html, buildHtml),
  gulp.watch(path.watch.sass, buildStyles)
  gulp.watch(path.watch.js, buildJs),
  gulp.watch(path.watch.images, compressImages)
}

const mainTasks = gulp.parallel(copy, buildHtml, buildStyles, buildJs);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Make default task
gulp.task('default', dev);