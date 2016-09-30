(function (){
	// EXTERNAL JSON //
	myApp.controller('MyController', function($scope, $http) {
	  $http.get('public/data/products.json')
	   .then(function(res){
	      $scope.products = res.data;
	    });
	});
}());