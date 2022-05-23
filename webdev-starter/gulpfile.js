// Main module
import gulp from 'gulp';

// Import path from path.js
import { path } from './gulp/config/path.js';

// Import common plugins
import { plugins } from './gulp/config/plugins.js';

// Pass value to global variables
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

// Import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { buildHtml } from './gulp/tasks/buildHtml.js';
import { server } from './gulp/tasks/server.js';
import { buildStyles } from './gulp/tasks/buildStyles.js';
import { buildJs } from './gulp/tasks/buildJs.js';
import { compressImages } from './gulp/tasks/compressImages.js';
//import { zip } from './gulp/tasks/zip.js';
//import { deploy } from 'gulp/tasks/deploy.js';

// Watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy),
  gulp.watch(path.watch.html, buildHtml),
  gulp.watch(path.watch.styles, buildStyles)
  gulp.watch(path.watch.scripts, buildJs)
  gulp.watch(path.watch.images, compressImages)
}

const mainTasks = gulp.parallel(copy, buildHtml, buildStyles, buildJs, compressImages);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
//const zip = gulp.series(reset, mainTasks, zip)

// Make default task
gulp.task('default', dev);

// Single task 
// Example: gulp CompressImages
export { dev }
export { build }
export { reset }
export { buildHtml }
export { buildStyles }
export { buildJs }
export { compressImages }
export { server }