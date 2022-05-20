// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `./app/build`;
const srcFolder = `./app/src`;

// TODO: Reverse order variables
// export - for use variables in other files
export const path = {
  build: {
    images: `${buildFolder}/images/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`,
    files: `${buildFolder}/files/`
  },
  src: {
    svg: `${srcFolder}/images/**/*.{svg}`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
    js: `${srcFolder}/js/app.js`,
    sass: `${srcFolder}/sass/style.sass`,
    html: `${srcFolder}/pug/*.pug`,
    files: `${srcFolder}/files/**/*.*` 
  },
  watch: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,wepb}`,
    js: `${srcFolder}/**/*.js`,
    sass: `${srcFolder}/**/*.sass`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*` 
  },
  clean: {
    css: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
