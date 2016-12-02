var router = require('express').Router();
var bodyParser = require('body-parser');
var User = require('../../models/User');
var hash = require('../../helpers/hash');

var urlencoded = bodyParser.urlencoded({ extended: false });

router.route('/login')
  .get(function(req, res) {
    res.render('login.ejs');
  })
  .post(urlencoded, function(req, res) {
    var usn = req.body.username;
    var psw = req.body.password;

    User.find({username: usn, password: hash(psw)})
        .limit(1)
        .exec(function(err, users){
          if(users[0]) {
            req.session.user = users[0];
            res.redirect('/');
          }else {
            res.render('login.ejs', {error: "Mauvais identifiants"});
          }
        });
  });

  router.route('/register')
    .get(function(req, res) {
      res.render('register.ejs');
    })
    .post(urlencoded, function(req, res){
      var newUser = {
        username: req.body.username,
        password: hash(req.body.password)
      }

      User(newUser).save(function(err, user){
        req.session.user = user;
        res.redirect('/');
      });
    });

module.exports = router;
