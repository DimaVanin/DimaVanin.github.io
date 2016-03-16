(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').run(['$state', function ($state) {
		$state.transitionTo('loginFB');
	}]);

	angular.module('app').config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/loginFB");
		//
		// Now set up the states
		$stateProvider
			.state('loginFB', {
				url: "/loginFB",
				templateUrl: "app/templates/login.html"
			})
			.state('userInfo', {
				url: "/userInfo",
				templateUrl: "app/templates/userInfoTpl.html"
			})
			.state('userFriends', {
				url: "/list",
				templateUrl: "app/templates/userFriendsTpl.html"
			})
			.state('state2', {
				url: "/state2",
				templateUrl: "partials/state2.html"
			});
	});
})();