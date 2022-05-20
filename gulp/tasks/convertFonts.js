import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

// Convert otf to ttf
export const convertOtfToTff = () => {
    // Search otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FONTS"
        }))
      )
      // Convert to ttf
      .pipe(fonter({
        formats: ['ttf']
      }))
      // Upload to source folder
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

// Convert ttf to woff 
export const convertTtfToWoff = () => {
  // Search ttf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS"
      }))
    )
    // Convert to woff
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    // Search ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    // Convert to woff2
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fontes}`))
}

export const fontsStyle = () => {
  // File styles for add fonts
  let fontsFile = `${app.path.srcFolder/sass/fonts.sass}`;
  // Check file fonts
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      // Check file styles for add fonts
      if (!fs.existsSync(fontsFile)) {
        // If file not - create
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          //
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileName !== fontFileName) { 
            let fontName = fontFileName.split('-')[0];
          }
        }
      }
    }
  }
}