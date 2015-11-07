(function () {
    'use strict';
    angular.module('app',['ngRoute']);

    angular
        .module('app')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);
            //
            //$routeProvider.when('/users', {
            //    controller: 'usersController',
            //    templateUrl: 'app/users/users.html',
            //    resolve: {
            //        initUsers: ['usersService', function (usersService) {
            //            return usersService.getUsers();
            //        }]
            //    }
            //});

            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();