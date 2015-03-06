var demoApp = angular.module('demoApp', []);

var movieControllers = angular.module('movieControllers',[]);

movieControllers.controller('movieListController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

    $http.get('./data/imdb250.json').success(function(data) {
    $scope.courseInfo = data;
    $scope.artistOrder = 'name';////
  });

    $scope.orderProp = 'rank';
    $scope.myBool = 'false';
    $rootScope.reverse = false;

    $scope.genre = "";
    $scope.setTrue= function(){
        $rootScope.reverse = true;
        console.log("settingFalse");
        console.log($rootScope.reverse);
    }

    $scope.setFalse= function(){
        $rootScope.reverse = false;
        console.log("settingTrue");
        console.log($rootScope.reverse);
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
        $scope.movie = data;
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