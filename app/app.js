(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('empty', {
				url: "/",
				templateUrl: "app/login/login.html"
			})
			.state('userInfo', {
				url: "/userInfo",
				templateUrl: "app/userInfo/userInfoTpl.html",
				controller: "userInfoCtrl",
				controllerAs: "userInfoCtrl",
				//resolve: {
				//	userInfo: ['userService', function (userService) {
				//		return userService.getUserInfo().then(function (response) {
				//			userService.user = response;
				//		});
				//	}]
				//}
			})
			.state('userScore', {
				url: "/userScore",
				templateUrl: "app/userScore/userScoreTpl.html"
			})
			.state('userFriends', {
				url: "/userFriends",
				templateUrl: "app/userFriends/userFriendsTpl.html"
			})
			.state('leaderboard', {
				url: "/leaderboard",
				templateUrl: "app/userFriends/userFriendsTpl.html"
			});
	}]);

	angular.module('app').run(['$rootScope', '$state', function ($rootScope, $state) {
		FB.init({
			appId: '242826122726013',
			xfbml: true,
			version: 'v2.5'
		});

		$rootScope.$on('$stateChangeStart', function (event) {
			//event.preventDefault();
			//$state.go('login');
		});
	}]);
})();