
(function(){
'use strict'

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){

  $scope.color = "green";
  $scope.lunchItems="";

  $scope.msg = "";

  $scope.checkIfTooMuch = function(){
    if ($scope.lunchItems === ""){
      $scope.msg = "Please enter data first";
      $scope.color = "red";
      return;
    }
    $scope.color = "green";
    var arrayOfLunchItems = filterBlank($scope.lunchItems.split(","));
    if (arrayOfLunchItems.length <= 3){
      $scope.msg = "Enjoy!";
    } else {
      $scope.msg = "Too much!";
    }
  };

  function filterBlank(input){
    var filtered = [];
    for (var i=0;i<input.length;i++){

      if (input[i].length ===0 || !input[i].trim()){

      } else {
        filtered.push(input[i]);
      }
    }
    return filtered;
  }
}
})();
