angular.module('mytweet', [])
  .controller('MyTweetController',
    ['$scope', '$http', 'tweetService', function($scope, $http, tweetService){

    var findById = function(id) {
      return function(tweet) {
        return tweet.user._id == id;
      }
    }

    $scope.tweets = tweetService.tweets.filter(findById(userid));
    /*$http.get('/api/timeline/me').then(function(response){
      $scope.tweets = response.data;
    });*/

  }]);
