angular.module('mytweet', [])
  .controller('MyTweetController', ['$scope', '$http', function($scope, $http){

    $http.get('/api/timeline/me').then(function(response){
      console.log(response);
      $scope.tweets = response.data;
    });
  }]);
