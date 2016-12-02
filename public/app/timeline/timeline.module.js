var timeline = angular.module('timeline', []);

timeline.controller('TimelineController',
  ['$scope', '$http', 'tweetService', function($scope, $http, tweetService){

  $http.get('/api/timeline').then(function(response){
    console.log(response.data);
    $scope.tweets = tweetService.tweets = response.data;
  });

  $scope.deleteTweet = function (tweet) {
    $http.delete('/api/tweet/'+tweet._id)
      .then(function(response){
        if(response.data.delete) {
          var idx = $scope.tweets.indexOf(tweet);

          $scope.tweets.splice(idx, 1);
        }
      }
    );
  }

}]);

timeline.controller('PublishController', ['$scope', '$http', function($scope, $http){

  $scope.sendTweet = function() {

    $http.post('/api/tweet', $scope.twt).then(function(response){
      tweets.unshift(response.data);
      $scope.tweet = {};
    });

  }

}]);
