angular.module('miniRouting').controller('productsCtrl', function ($scope, $stateParams, productsService) {

  if ($stateParams.id === 'Shoes') {
$scope.productData = productsService.shoeData;
}
else if ($stateParams.id === 'Socks') {
$scope.productData = productsService.sockData;
}
});
