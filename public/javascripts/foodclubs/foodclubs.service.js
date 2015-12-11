(function () {
    'use strict'

    var foodclubsService = function($http){

        var getFoodclubs = function(){
            return $http.get('foodclubs',
                {header : {'Content-Type' : 'application/json; charset=UTF-8'}
                }).then(function(response) {
                    return response.data;
                });
        };

        var createFoodclub = function(newDish){
            return $http.post('http://http://188.166.0.128:3000/createFoodclub', newDish)
                .success(function (data) {
                    console.log("Dish created");
                    console.log(data);
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }

        var deleteFoodclub = function(id){
            return $http.post('http://http://188.166.0.128:3000/deleteFoodclub', {id: id})
                .success(function (data) {
                    console.log("Dish deleted");
                    console.log(data);
                    getFoodclubs();
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }

        return {
            getFoodclubs: getFoodclubs,
            createFoodclub: createFoodclub,
            deleteFoodclub: deleteFoodclub
        }
    }

    angular.module('app')
        .factory('foodclubsService', foodclubsService);
})();