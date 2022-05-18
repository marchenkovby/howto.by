// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `./app/build`;
const srcFolder = `./app/src`;

// export - for use variables in other files
export const path = {
  build: {
    html: `${buildFolder}/content`,
    files: `${buildFolder}/files/`
  },
  src: {
    html: `${srcFolder}/pug/*.pug`,
    files: `${srcFolder}/files/**/*.*` 
  },
  watch: {
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`, 
  },
  clean: {
    html: `${buildFolder}/content/`,
    style: `${buildFolder}/public_html/style/`,
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}