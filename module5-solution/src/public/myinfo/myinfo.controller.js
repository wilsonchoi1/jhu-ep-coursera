(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath) {
  var $ctrl = this;
  
  $ctrl.basePath = ApiPath;
  
  $ctrl.isSignedUp = function(){
	  if (MenuService.favoriteDish){
		  console.log("isSignedUp", MenuService.favoriteDish);
		  $ctrl.user = MenuService.user;
		  $ctrl.menuItem = MenuService.favoriteDish;
		  return true;
	  } else {
		  console.log("isSignedUp", MenuService.favoriteDish);
		  return false;
	  }
  }
}


})();