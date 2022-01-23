const { src, dest, parallel, series, watch } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
//const del = require('del');
const browsersync = require('browser-sync').create();
const rename = require('gulp-rename');
const htmlreplace = require('gulp-html-replace');
const htmlremovelines = require('gulp-remove-empty-lines');
const htmlValidator = require('gulp-w3c-html-validator')

function pug2html() {
  return src([
    'app/src/pug/**/*.pug',
    '!app/src/pug/includes/**/*.pug',
    '!app/src/pug/templates/**/*.pug'
  ])
  .pipe(pug({
    //doctype: 'html',
    pretty: true
  }))
  //.pipe(htmlreplace({remove : ''}))
  //.pipe(htmlremovelines())
  //.pipe(htmlValidator())
  /*.pipe(rename({
    extname: '.php'
  }))*/
  .pipe(dest('app/build/content/'))
  //.pipe(browsersync.stream());
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
  watch('app/src/pug/**/*.pug', pug2html)
  watch('app/src/sass/**/*', styles)
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

exports.clean = tasks.clean;

//exports.default = parallel(pug2html, styles, startwatch, browsersee);
exports.pug2html = pug2html;
