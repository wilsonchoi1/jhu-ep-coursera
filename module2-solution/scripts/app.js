(function(){
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){

    var toBuy = this;
    toBuy.shoppingListItems = ShoppingListCheckOffService.getShoppingListItems();

    toBuy.buy = function(index){
      ShoppingListCheckOffService.buy(index);
    }

    toBuy.isBoughtEverything = function (){
      return toBuy.shoppingListItems.length == 0;
    };



};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){

    var alreadyBought = this;
    alreadyBought.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();

    alreadyBought.isNothingBought = function (){
      return alreadyBought.alreadyBoughtItems.length == 0;
    };

  };

  function ShoppingListCheckOffService(){

    var service = this;

    var alreadyBoughtItems = [];
    var shoppingListItems = [
      {
        name: 'cookies',
        quantity: 10
      },
      {
        name: 'chips',
        quantity: 10
      },
      {
        name: 'suger',
        quantity: 10
      },
      {
        name: 'butter',
        quantity: 10
      },
      {
        name: 'oil',
        quantity: 10
      },
    ];

    service.getShoppingListItems = function(){
      return shoppingListItems;
    }

    service.getAlreadyBoughtItems = function(){
      return alreadyBoughtItems;
    }

    service.buy = function(index){
      console.log("buy item="+index);
      var item = shoppingListItems.splice(index, 1);
      alreadyBoughtItems.push(item[0]);
      console.log(item[0]);
      console.log(shoppingListItems);
      console.log(alreadyBoughtItems);
    };

  }

})();
