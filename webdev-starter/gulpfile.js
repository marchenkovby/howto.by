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
import { reset } from './gulp/tasks/reset.js';
import { buildContent } from './gulp/tasks/buildContent.js';
import { buildPages } from './gulp/tasks/buildPages.js';
import { server } from './gulp/tasks/server.js';
import { buildStyles } from './gulp/tasks/buildStyles.js';
import { compressImages } from './gulp/tasks/compressImages.js';

// Watcher for changes in files
function watcher() {
  gulp.watch(path.watch.content, buildContent),
  gulp.watch(path.watch.pages, buildPages),    
  gulp.watch(path.watch.styles, buildStyles)
  gulp.watch(path.watch.images, compressImages)
}

const mainTasks = gulp.parallel(buildContent, buildPages, buildStyles);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Make default task
gulp.task('default', dev);

// Single task 
// Example: gulp CompressImages
export { dev }
export { build }
export { buildContent }
export { buildPages }
export { buildStyles }
export { compressImages }
export { server }
export { reset }
