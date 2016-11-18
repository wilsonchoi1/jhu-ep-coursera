(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController);

// Version with resolving to 1 item based on $stateParams in route config
CategoryDetailController.$inject = ['$stateParams', 'items'];
function CategoryDetailController($stateParams, items) {
  var categoryDetail = this;
  
  categoryDetail.items = items.menu_items;
  categoryDetail.category = items.category;
}

})();
