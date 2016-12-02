var app = angular.module('twitter', ['timeline', 'mytweet', 'ngRoute']);

var tweets = [];

app.factory('tweetService', function() {
  var service = {
    tweets : []
  }

  return service;
});
