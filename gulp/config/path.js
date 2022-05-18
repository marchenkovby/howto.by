// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `./app/build`;
const srcFolder = `./app/src`;

// export - for use variables in other files
export const path = {
  build: {
    css: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`,
    files: `${buildFolder}/files/`
  },
  src: {
    sass: `${srcFolder}/sass/style.sass`,
    html: `${srcFolder}/pug/*.pug`,
    files: `${srcFolder}/files/**/*.*` 
  },
  watch: {
    sass: `${srcFolder}/**/*.sass`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`, 
  },
  clean: {
    html: `${buildFolder}/content/`,
    css: `${buildFolder}/public_html/styles/`,
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}