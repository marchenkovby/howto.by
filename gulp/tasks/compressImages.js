import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const compressImages = () => {
    return app.gulp.src(app.path.src.images, { sourcemaps: true })
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES"
        }))
      )
      .pipe(app.plugins.newer(app.path.build.images))
      
      // For images webp
      // Create image webp
      .pipe(webp())
      .pipe(app.gulp.dest(app.path.build.images))
      
      // For other images: jpg, jpeg, png, gif and e.t.c.
      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationLevel: 3 // 0 to 7
      }))
      .pipe(app.gulp.dest(app.path.build.images))

      // For images svg
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.build.images))

      .pipe(app.plugins.browsersync.stream())
}