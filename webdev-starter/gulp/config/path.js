// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `..`;
const srcFolder = `./src`;

// export - for use variables in other files
export const path = {
  build: {
    images: `${buildFolder}/public_html/images/`,
    styles: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`,
    files: `${buildFolder}/files/`
  },
  src: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
    styles: `${srcFolder}/styles/style.sass`,
    html: `${srcFolder}/pug/*.pug`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,wepb}`,
    styles: `${srcFolder}/**/*.sass`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: {
    styles: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
