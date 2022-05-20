//import fileInclude from 'gulp-file-include';
//import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
//import htmlReplace from 'gulp-html-replace';
import htmlRemoveEmptyLines from 'gulp-remove-empty-lines';

export const buildHtml = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        //message: "Error: <%= error.message %>"
      }))
    )
    .pipe(pug({
      doctype: 'html',
      pretty: true,
      verbose: true
    }))
    //.pipe(fileInclude())
    // Call global plugin replace
    .pipe(app.plugins.replace(/@img\//g, 'images/'))
    //.pipe(webpHtmlNosvg())
    .pipe(versionNumber({
        'value': '%DT%',
        'append': {
          'key': 'v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
      }//,
        //'output': {
        //  'file': 'gulp/version.json'
        //}
    }))
    //.pipe(htmlReplace({remove : ''}))
    //.pipe(htmlRemoveEmptyLines())
    //.pipe(rename({
    //  extname: '.php'
    //}))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}