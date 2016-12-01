var app = angular.module('twitter', []);

var tweets = [];

app.controller('TimelineController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/timeline').then(function(response){
    $scope.tweets = tweets = response.data;
  });

}]);

app.controller('PublishController', ['$scope', '$http', function($scope, $http){

  $scope.sendTweet = function() {

    $http.post('/api/tweet', $scope.twt).then(function(response){
      tweets.unshift(response.data);
      $scope.tweet = {};
    });

  }

}]);
