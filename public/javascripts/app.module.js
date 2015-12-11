(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'app.foodclubs'])
        .config(function($routeProvider){
            $routeProvider
              .when('/', {
                templateUrl: 'views/foodclubs.html',
                controller: 'foodclubsCtrl as vm'
            }).when('/createFoodclub', {
                    templateUrl: 'views/createFoodclub.html',
                    controller: 'foodclubsCtrl as vm'
                }).otherwise({ redirectTo: '/' });
        })
})();