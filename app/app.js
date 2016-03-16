(function () {
	'use strict';
	angular.module('app', ['ui.router']);

	angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/loginFB");

		$stateProvider
			.state('loginFB', {
				url: "/loginFB",
				templateUrl: "app/login/login.html"
			})
			.state('userInfo', {
				url: "/userInfo",
				templateUrl: "app/userInfo/userInfoTpl.html",
				controller: "userInfoCtrl",
				controllerAs: "userInfoCtrl"
			})
			.state('userFriends', {
				url: "/list",
				templateUrl: "app/userFriends/userFriendsTpl.html"
			})
			.state('userScore', {
				url: "/userScore",
				templateUrl: "app/userScore/userScoreTpl.html"
			});
	});

	angular.module('app').run(['$state', function ($state) {
		FB.init({
			appId: '242826122726013',
			xfbml: true,
			version: 'v2.5'
		});

		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				$state.transitionTo('userInfo');
				console.log('connected');
			} else {
				console.log('disconnected');
				$state.transitionTo('loginFB');
			}
		});
	}]);
})();