import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csscomb from 'gulp-csscomb';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import sassGlob from 'gulp-sass-glob';
import cssbeautify from 'gulp-cssbeautify';

const sass = gulpSass(dartSass);

export const buildStyles = () => {
  return app.gulp.src(app.path.src.styles, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SASS"
      }))
    )
    //.pipe(app.plugins.replace(/@img\//g, '../images/'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions']
    }))
    .pipe(csscomb())
    .pipe(app.plugins.replace(/@charset "UTF-8";\n\n/, ''))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cleanCss())
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream())
}
