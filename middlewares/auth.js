module.exports = function(auth) {
  var router = require('express').Router();

 router.all('/', function(req, res, next) {
   if(!auth || req.session.user) {
     next();
   }else {
     res.redirect('/auth/login');
   }
 });

 return router;
}
