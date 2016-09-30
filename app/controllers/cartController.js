(function (){
	myApp.controller('CartController', function($scope, $http) {
	  $scope.products = [
	    //JSON...
	  ];

	  $scope.remove = function(index) {
	    $scope.products.splice(index, 1);
	  }
	});
}());