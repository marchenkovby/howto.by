const { src, dest, parallel, series, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browsersync = require('browser-sync').create();
const rename = require('gulp-rename');
const htmlreplace = require('gulp-html-replace');
const htmlremovelines = require('gulp-remove-empty-lines');

function pugcompile() {
  return src([
    'app/src/pug/**/*.pug',
    '!app/src/pug/includes/**/*.pug',
    '!app/src/pug/templates/**/*.pug'
  ])
  .pipe(pug({
    doctype: 'html',
    pretty: true
  }))
  .pipe(htmlreplace({remove : ''}))
  .pipe(htmlremovelines())
  .pipe(rename({
    extname: '.php'
  }))
  .pipe(dest('app/build/content/'))
  .pipe(browsersync.stream());
}

function styles() {
  return src('app/src/sass/styles.sass')
  .pipe(sass({outputStyle: 'expanded'}))
  //.pipe(autoprefixer({overrideBrowserslist: ['last 10 versions']}))
  .pipe(csscomb())
  .pipe(dest('app/build/public_html/styles/'))
  .pipe(browsersync.stream());
}

function startwatch() {
  watch('app/src/pug/**/*.pug', pugcompile)
  watch('app/src/sass/**/*', styles)
}

function clean() {
	return del([
    'app/build/content/**/*',
    'app/build/public_html/styles/',
    'app/build/public_html/images/'
  ],
  {force: true})
}

function browsersee() {
	browsersync.init({
    proxy: 'http://howto.by.test',
    host: 'howto.by.test',
    open: 'external'
    /*https: {
     key: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.key",
     cert: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.crt"
    }*/
	})
}

//function images() {
//	return src('app/src/images/**/*') // Берём все изображения из папки источника
//	.pipe(dest('app/build/public_html/images/')) // Выгружаем оптимизированные изображения в папку назначения
//}

exports.clean = clean;
exports.default = parallel(pugcompile, styles, startwatch, browsersee);
