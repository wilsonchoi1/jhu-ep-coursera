(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){

    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'nidc',
      bindToController: true
    };
    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";

  menu.showNothingFound = false;
  menu.showResult = false;

  menu.removeItem = function(index){
    menu.found.splice(index, 1);
  }

  menu.getMatchedMenuItems = function(){

    console.log("showNothingFound="+menu.showNothingFound);
    if (menu.searchTerm === ""){
      menu.showNothingFound = true;
      menu.showResult = false;
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {
      menu.found = response;
      if (menu.found.length > 0){
        menu.showNothingFound = false;
        menu.showResult = true;
      } else {
        menu.showNothingFound = true;
        menu.showResult = false;
      }

    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

}


MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
function MenuSearchService($q, $http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var deferred = $q.defer();
    var promise = deferred.promise;

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result){
      var found = [];
      for (var i=0;i<result.data.menu_items.length;i++){
        if (searchTerm === ""){
          found.push(result.data.menu_items[i]);
        } else if (result.data.menu_items[i].description.indexOf(searchTerm) > 0){
          found.push(result.data.menu_items[i]);
        }
      }
      deferred.resolve(found);
    });

    return promise;
  };



}

})();
