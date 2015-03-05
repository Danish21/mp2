var app = angular.module('movieApp',['ngRoute']) ;

// app.config(function($routeProvider){

// 	$routeProvider.when("/",{
// 		templateUrl: "partials/list.html"
// 	}).


// });
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/list.html',
        controller: 'movieController'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'movieController'
      }).
      when('/movies/:imdbID', {
        templateUrl: 'partials/details.html',
        controller: 'movieController'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/phones', {
//         templateUrl: 'partials/phone-list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);