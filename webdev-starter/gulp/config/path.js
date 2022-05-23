// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `.. `;
const srcFolder = `src`;

// export - for use variables in other files
export const path = {
  build: {
    images: `${buildFolder}/public_html/images/`,
    scripts: `${buildFolder}/public_html/scripts/`,
    styles: `${buildFolder}/public_html/styles/`,
    html: `${buildFolder}/content/`,
    files: `${buildFolder}/files/`
  },
  src: {
    svg: `${srcFolder}/images/**/*.{svg}`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
    scripts: `${srcFolder}/scripts/app.js`,
    styles: `${srcFolder}/sass/style.sass`,
    html: `${srcFolder}/pug/*.pug`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,wepb}`,
    scripts: `${srcFolder}/**/*.js`,
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
