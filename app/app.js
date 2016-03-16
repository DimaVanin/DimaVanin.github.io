(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/loginFB");

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
			.state('userScore', {
				url: "/userScore",
				templateUrl: "app/templates/userScoreTpl.html"
			});
	});

	angular.module('app').run(['$state', function ($state) {
		FB.getLoginStatus(function(response){
			debugger;
		});


		$state.transitionTo('loginFB');
		$state.go('loginFB');
	}]);
})();