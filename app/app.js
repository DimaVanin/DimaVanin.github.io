(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/login");

			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: './app/login/loginTpl.html',
					controller: 'loginController',
					controllerAs: 'loginCtrl'
				})
				.state('user', {
					url: "/user",
					template: "<div>user</div>"
				})
				.state('event', {
					url: "/event",
					template: "<div>event</div>"
				})
				.state('video', {
					url: "/video",
					template: "<div>video</div>"
				})
				.state('comments', {
					url: "/comments",
					template: "<div>comments</div>"
				})
				.state('reaction', {
					url: "/reaction",
					template: "<div>reaction</div>"
				})
				.state('logout', {
					url: "/logout",
					template: "<div>logout</div>"
				})


		}]);

})();