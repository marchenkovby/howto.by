import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
import htmlReplace from 'gulp-html-replace';
import removeEmptyLines from 'gulp-remove-empty-lines';

export const buildContent = () => {
  return app.gulp.src(app.path.src.content)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
      }))
    )
    .pipe(pug({
      doctype: 'html',
      pretty: true,
      verbose: true
    }))
    .pipe(app.plugins.if(app.isDev, versionNumber({
      'value': '%DT%',
      'append': {
        'key': 'v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ]
      }
    })))
    .pipe(htmlReplace({remove : ''}))
    .pipe(removeEmptyLines())
    .pipe(rename({
      extname: '.php'
    }))
    .pipe(app.gulp.dest(app.path.build.content))
    .pipe(app.plugins.browsersync.stream())
}