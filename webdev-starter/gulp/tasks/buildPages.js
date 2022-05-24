import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const buildPages = () => {
  return app.gulp.src(app.path.src.pages)
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
    .pipe(app.gulp.dest(app.path.build.pages))
    .pipe(app.plugins.browsersync.stream())
}