var router = require('express').Router();
var bodyParser = require('body-parser');
var Tweet = require('../../models/Tweet');

var json = bodyParser.json();

router.post('/tweet', json,  function(req, res) {
  Tweet(req.body).save(function(err, tweet){
    res.json(tweet);
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

module.exports = router;
