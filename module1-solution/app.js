(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.messageArray ="";

  $scope.checkItems = function(){
    $scope.messageArray = $scope.items.split(',');

    if ($scope.items === ""){
      $scope.message = "Please enter data first";
    } else if ($scope.messageArray.length <= 3){
      $scope.message = "Enjoy!";
    }
    else if ($scope.messageArray.length >= 4){
      $scope.message = "Too Much!";
    }
  };

}

})();
