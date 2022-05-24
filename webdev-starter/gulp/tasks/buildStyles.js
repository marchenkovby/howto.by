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
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(app.plugins.if(app.isBuild, autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions']
    })))
    .pipe(csscomb())
    .pipe(app.plugins.replace(/@charset "UTF-8";\n\n/, ''))
    .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.styles)))
    .pipe(app.plugins.if(app.isBuild, rename({
      extname: '.min.css'
    })))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.styles)))
    .pipe(app.plugins.browsersync.stream())
}
