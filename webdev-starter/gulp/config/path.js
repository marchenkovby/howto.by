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
    content: `${buildFolder}/content/`,
    pages: `${buildFolder}/public_html/pages`
  },
  src: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
    styles: `${srcFolder}/styles/style.sass`,
    content: `${srcFolder}/content/*.pug`,
    pages: `${srcFolder}/pages/*.pug` 
  },
  watch: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,wepb}`,
    styles: `${srcFolder}/**/*.sass`,
    content: `${srcFolder}/content/**/*.pug`,
    pages: `${srcFolder}/pages/**/*.pug`,
  },
  clean: {
    styles: `${buildFolder}/public_html/styles/`,
    content: `${buildFolder}/content/`,
    pages: `${buildFolder}/public_html/pages/`,
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}
