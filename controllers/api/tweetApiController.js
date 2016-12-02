var router = require('express').Router();
var bodyParser = require('body-parser');
var Tweet = require('../../models/Tweet');

var json = bodyParser.json();

router.post('/tweet', json,  function(req, res) {
  var user = req.session.user;
  var t = {
    tweet: req.body.tweet,
    user: user
  }
  Tweet(t).save(function(err, tweet){
    Tweet.findById(tweet._id).populate({path:'user', select:'username'}).exec(function(err, twt){
      console.log(twt);
      res.json(twt);
    });
  });
});

router.delete('/tweet/:id', function(req, res){
  var id = req.params.id;
  Tweet.remove({_id: id}, function(err){
    res.json({delete: !err});
  });
});

router.get('/timeline', function(req, res){
  Tweet.getTimeline(function(err, tweets){
    res.json(tweets);
  });
});

router.get('/timeline/me', function(req, res){
  var id = req.session.user._id;
  Tweet.getPersonalTimeline(id, function(err, tweets){
    res.json(tweets);
  });
});

module.exports = router;
