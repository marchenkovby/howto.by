// import { configFtp } from '../config/ftp.js';
// import vinylFtp from 'vinyl-ftp';
// import util from 'gulp-util';

// export const deploy = () => {
//   configFtp.log = util.log;
//   const ftpConnect = vinylFtp.create(configFtp);
//   return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
//     .pipe(app.plugins.plumber(
//       app.plugins.notify.onError({
//         title: "FTP"
//       }))
//     )
//     .pipe(ftpConnect.clean('./build', 'js', { base: '.'}))
//     //s.pipe(ftpConnect.clean('/app/', './build/'))
//     //.pipe(ftpConnect.clean('/js/', './build'))
//     //.pipe(ftpConnect.clean('/app/'))
//     //.pipe(ftpConnect.delete())
//     //.pipe(ftpConnect.rmdir(`${app.path.ftp}/public_html`))
//     .pipe(ftpConnect.newer(`${app.path.ftp}`))
//     .pipe(ftpConnect.dest(`${app.path.ftp}`))
// }