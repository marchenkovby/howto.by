import webpack from 'webpack-stream';

export const buildJs = () => {
    return app.gulp.src(app.path.src.scripts, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS"
        }))
      )
      /*.pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        }
      }))*/
      .pipe(app.gulp.dest(app.path.build.scripts))
      .pipe(app.plugins.browsersync.stream())
}