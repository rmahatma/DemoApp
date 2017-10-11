angular.module('modal.demo',['ui.bootstrap','ui.bootstrap.modal'])
.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {
$scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../view/loginModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
	$scope.closeModal = function(){
		$uibModalInstance.close();
	};
})

