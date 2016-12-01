var router = require('express').Router();
var fs = require('fs');
var routes = require('../config/route');
var auth = require('../middlewares/auth');

var boot = function(folder) {
  var currentFolder = (folder == __dirname) ? __dirname : __dirname + '\\' + folder;
  fs.readdir(currentFolder, function(err, files) {
    files.forEach(function(file){
      if(!(folder == __dirname && file == 'index.js')) {
        if(fs.lstatSync(currentFolder + '/' +file).isDirectory()) {
          boot(file);
        }else {
          var r = routes[folder];
          router.use(r.url, auth(r.auth), require('./' + folder + '/' + file))
        }
      }
    });
  });
}

boot(__dirname);

/*router.use('/', auth, require('./home/homeController'));
router.use('/tweet', auth, require('./tweet/tweetController'));
router.use('/auth', require('./auth/authController'));
router.use('/api', require('./api/tweetApiController'));*/

module.exports = router;
