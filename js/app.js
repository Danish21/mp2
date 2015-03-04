var app = angular.module('movieApp',['ngRoute']) ;

// app.config(function($routeProvider){

// 	$routeProvider.when("/",{
// 		templateUrl: "partials/list.html"
// 	}).


// });
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);