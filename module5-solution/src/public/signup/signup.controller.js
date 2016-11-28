(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  
  $ctrl.invalidDish = false;
  
  $ctrl.submit = function(){
	  console.log("submit", $ctrl.user);
	  MenuService.getMenuItem($ctrl.user.favoritedish).then(function(item){
		  $ctrl.invalidDish = false;
		console.log(item);	
		MenuService.favoriteDish = item;
		MenuService.user = $ctrl.user;
		$ctrl.saved = true;
	  }, function(err){
		  $ctrl.invalidDish = true;
		  console.log(err);
	  });
  }
}


})();
