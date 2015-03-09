var demoApp = angular.module('demoApp', []);

var movieControllers = angular.module('movieControllers',['ngAnimate']);

movieControllers.controller('movieListController', ['$scope', '$http', '$rootScope', function($scope, $http) {

    $http.get('./data/imdb250.json').success(function(data) {
    $scope.courseInfo = data;
    $scope.artistOrder = 'name';////
  });

    $scope.orderProp = 'rank';
    $scope.myBool = 'false';
    $scope.reverse = false;

    $scope.genre = "";
    $scope.setTrue= function(){
        $scope.reverse = true;
        console.log("settingFalse");
        console.log($scope.reverse);
    }

    $scope.setFalse= function(){
        $scope.reverse = false;
        console.log("settingTrue");
        console.log($scope.reverse);
    }
   $scope.setGenreFilter = function(newGenre){
        $scope.$parent.genre = newGenre; 
        console.log(newGenre);
    }
}]);

// movieControllers.controller('movieDetailController', ['$scope', '$http','$routeParams',

  
//   function($scope, $routeParams) {
//     $scope.imdbID = $routeParams.imdbID;
//     $scope.hello = "hello";
// }]);

movieControllers.controller('movieDetailController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
         $scope.movies = data;
    });

        $scope.imdbID = $routeParams.imdbID;
        // $scope.hello = "hello";
   

  }]);

// app.controller('movieController', ['$scope', '$http', function($scope, $http) {

//     $http.get('./data/imdb250.json').success(function(data) {
//     $scope.courseInfo = data;
//     $scope.artistOrder = 'name';////
//   });

//     $scope.orderProp = 'rank';
//     $scope.myBool = 'false';
//     $scope.reverse = false;

//     $scope.genre = "";
//     $scope.setTrue= function(){
//     	$scope.reverse = true;
//     	console.log("settingFalse");
//     }

//     $scope.setFalse= function(){
//     	$scope.reverse = false;
//     	console.log("settingTrue");
//         console.log($scope.reverse);
//     }
//    $scope.setGenreFilter = function(newGenre){
//     	$scope.$parent.genre = newGenre; 
//     	console.log(newGenre);
//     }
// }]);