export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
    open: false
    //proxy: 'http://howto.by.test',
    //host: 'howto.by.test'
  });
}