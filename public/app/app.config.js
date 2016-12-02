angular.module('twitter')
  .config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/all', {
        templateUrl: 'public/app/timeline/timeline.template.html',
        controller: 'TimelineController'
      })
      .when('/me', {
        templateUrl: 'public/app/mytweet/me.template.html',
        controller: 'MyTweetController'
      })
      .otherwise({
        redirectTo: '/all'
      });

  }]);
