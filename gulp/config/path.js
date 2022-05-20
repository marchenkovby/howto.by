// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `./app/build`;
const srcFolder = `./app/src`;

// export - for use variables in other files
export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/content/`,
    css: `${buildFolder}/public_html/styles/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/pug/*.pug`,
    sass: `${srcFolder}/sass/style.sass`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
    svg: `${srcFolder}/images/**/*.{svg}`
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.pug`,
    sass: `${srcFolder}/**/*.sass`,
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,wepb}`
  },
  clean: {
    html: `${buildFolder}/content/`,
    css: `${buildFolder}/public_html/styles/`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
