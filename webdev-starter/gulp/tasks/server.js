export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
    open: false
    //proxy: 'http://howto.by.test',
    //host: 'howto.by.test',
    //open: 'external'
    /*https: {
     key: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.key",
     cert: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.crt"
    }*/
  });
}