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
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { styles } from "./gulp/tasks/styles.js";
 
// Watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy),
  gulp.watch(path.watch.html, html),
  gulp.watch(path.watch.sass, styles)
}

const mainTasks = gulp.parallel(copy, html, styles);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Make default task
gulp.task('default', dev);