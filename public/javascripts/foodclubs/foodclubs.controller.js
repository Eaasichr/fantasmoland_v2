(function () {
    'use strict';

    angular.module('app.foodclubs', [])
        .controller('foodclubsCtrl', foodclubsController);

    function foodclubsController(foodclubsService){
        var vm = this;
        vm.createFoodclub = createFoodclub;
        vm.deleteFoodclub = deleteFoodclub;
        vm.foodclubs = foodclubsService.getFoodclubs()
            .then(function(result){
                console.log(result);
                vm.foodclubs = result;
            });

        function createFoodclub(){
            console.log("Test create foodclub");
            var newDish = {
                month: vm.month,
                year: vm.year,
                place: vm.place,
                dish: vm.dish,
                dessert: vm.dessert,
                missing: vm.missing,
                guests: vm.guests
            }
            console.log(newDish);
            foodclubsService.createFoodclub(newDish);
        }

        function deleteFoodclub(id){
            console.log("Test delete foodclub");
            foodclubsService.deleteFoodclub(id)
                .then(foodclubsService.getFoodclubs()
            .then(function(result){
                console.log(result);
                vm.foodclubs = result;
            }));
        }


    }
})();