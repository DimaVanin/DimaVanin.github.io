(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/loginFB");

		$stateProvider
			.state('login', {
				url: "/loginFB",
				templateUrl: "app/login/login.html"
			})
			.state('info', {
				url: "/userInfo",
				templateUrl: "app/userInfo/userInfoTpl.html",
				controller: "userInfoCtrl",
				controllerAs: "userInfoCtrl"/*,
				resolve: {
					userInfo: ['userService', function(userService){
						return userService.getUserInfo().then(function (response) {
							userService.user = response;
						});
					}]
				}*/
			})
			.state('score', {
				url: "/userScore",
				templateUrl: "app/userScore/userScoreTpl.html"
			})
			.state('friends', {
				url: "/userFriends",
				templateUrl: "app/userFriends/userFriendsTpl.html"
			})
			.state('leaderboard', {
				url: "/leaderboard",
				templateUrl: "app/userFriends/userFriendsTpl.html"
			});

	});

	angular.module('app').run([function () {
		FB.init({
			appId: '242826122726013',
			xfbml: true,
			version: 'v2.5'
		});
	}]);
})();