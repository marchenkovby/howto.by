// Main module
import gulp from 'gulp';

// Import path from path.js
import { path } from 'config/path.js';

// Import common plugins
import { plugins } from 'config/plugins.js';

// Pass value to global variables
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

// Import tasks
import { copy } from 'tasks/copy.js';
import { reset } from 'tasks/reset.js';
import { buildHtml } from 'tasks/buildHtml.js';
import { server } from 'tasks/server.js';
import { buildStyles } from 'tasks/buildStyles.js';
import { buildJs } from 'tasks/buildJs.js';
import { compressImages } from 'tasks/compressImages.js';
import { zip } from 'tasks/zip.js';
//import { deploy } from 'tasks/deploy.js';

// Watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy),
  gulp.watch(path.watch.html, buildHtml),
  gulp.watch(path.watch.sass, buildStyles)
  gulp.watch(path.watch.js, buildJs),
  gulp.watch(path.watch.images, compressImages)
}

const mainTasks = gulp.parallel(copy, buildHtml, buildStyles, buildJs, compressImages);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
//const zip = gulp.series(/*reset, mainTasks, */zip)

// Make default task
gulp.task('default', dev);

// Single task 
// Example: gulp CompressImages
export { compressImages }
export { dev }
export { build }
export { zip }
//export { deploy }