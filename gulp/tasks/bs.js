const browsersync = require('browser-sync').create();

module.exports = function bs() {
	browsersync.init({
    proxy: 'http://howto.by.test',
    host: 'howto.by.test',
    open: 'external'
    /*https: {
     key: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.key",
     cert: "C:/OpenServer/userdata/config/cert_files/localhost/localhost-server.crt"
    }*/
	})
}