// EXTERNAL JSON //
myApp.controller('MyController', function($scope, $http) {
  $http.get('public/data/products.json')
   .then(function(res){
      $scope.products = res.data.products;
	});

   	$scope.cartProducts = [];

	$scope.addCart = function() {
		$scope.cartProducts.push({
			//$scope.products = res.data;
		});
		console.log("Get animations.");
	}

});
