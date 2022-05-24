import imagemin from 'gulp-imagemin';

export const compressImages = () => {
    return app.gulp.src(app.path.src.images, { sourcemaps: true })
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES"
        }))
      )
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationLevel: 3 // 0 to 7
      }))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browsersync.stream())
}