// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath,resolve());
  
const buildFolder = `./app/build`;
const srcFolder = `./app/src/`;

// export - for use variables in other files
export const path = {
  build: {
    files: `${buildFolder}/files/`
  },
  src: {
    files: `${srcfolder}/files/**/*.*`, 
  },
  watch: {},
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}