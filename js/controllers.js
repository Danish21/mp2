var demoApp = angular.module('demoApp', []);

app.controller('movieController', ['$scope', '$http', function($scope, $http) {

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
    }

    $scope.setFalse= function(){
    	$scope.reverse = false;
    	console.log("settingTrue");
    }
   $scope.setGenreFilter = function(newGenre){
    	$scope.genre = newGenre; 
    	console.log(newGenre);
    }
}]);