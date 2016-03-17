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
				resolve: {
					userInfo: ['userService', function (userService) {
						return userService.getUserInfo().then(function (response) {
							userService.user = response;
						});
					}]
				}
			})
			.state('userScore', {
				url: "/userScore",
				templateUrl: "app/userScore/userScoreTpl.html",
				controller: "userScoreCtrl",
				controllerAs: "userScoreCtrl",
				resolve: {
					userInfo: ['userService', function (userService) {
						return userService.getUserInfo().then(function (response) {
							userService.user = response;
						});
					}]
				}
			})
			.state('userFriends', {
				url: "/userFriends",
				templateUrl: "app/userFriends/userFriendsTpl.html",
				resolve: {
					userInfo: ['userService', function (userService) {
						return userService.getUserInfo().then(function (response) {
							userService.user = response;
						});
					}]
				}
			})
			.state('leaderboard', {
				url: "/leaderboard",
				templateUrl: "app/leaderboard/leaderboardTpl.html",
				controller: "leaderboardCtrl",
				controllerAs: "leaderboardCtrl",
				resolve: {
					leaderboard: ['userService', function (userService) {
						return userService.getLeaderboard();
					}]
				}
			});

	}]);

	angular.module('app').run(['userService',function () {
		FB.init({
			appId: '242826122726013',
			xfbml: true,
			version: 'v2.5'
		});
	}]);
})();