(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryListController', CategoryListController);


function CategoryListController(categories) {
  var catalogList = this;
  catalogList.categories = categories;
  console.log(categories[0].short_name);
}

})();
