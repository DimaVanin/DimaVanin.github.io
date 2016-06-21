(function () {
	'use strict';
	angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'stateConfig',
		function ($stateProvider, $urlRouterProvider, stateConfig) {
			console.log(stateConfig);

			$urlRouterProvider.otherwise("/login");

			$stateProvider
				.state(stateConfig.LOGIN, {
					url: '/login',
					templateUrl: './app/login/loginTpl.html',
					controller: 'loginController',
					controllerAs: 'loginCtrl'
				})
				.state(stateConfig.USER, {
					url: "/user",
					template: "<div>user</div>"
				})
				.state(stateConfig.EVENT, {
					url: "/event",
					template: "<div>event</div>"
				})
				.state(stateConfig.VIDEO, {
					url: "/video",
					template: "<div>video</div>"
				})
				.state(stateConfig.COMMENTS, {
					url: "/comments",
					template: "<div>comments</div>"
				})
				.state(stateConfig.REACTIONS, {
					url: "/reaction",
					template: "<div>reaction</div>"
				})
				.state(stateConfig.LOGOUT, {
					url: "/logout",
					templateUrl: './app/logout/logoutTpl.html',
					controller: 'logoutController',
					controllerAs: 'logoutCtrl'
				})


		}]);

})();