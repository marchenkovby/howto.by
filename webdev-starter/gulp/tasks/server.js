export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.pages}`
    },
    notify: false,
    port: 3000,
    open: false
    //proxy: 'http://howto.by.test',
    //host: 'howto.by.test'
  });
}