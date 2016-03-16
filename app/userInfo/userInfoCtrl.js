(function () {
	'use strict';
	angular
		.module('app')
		.controller('userInfoCtrl', ['userService', userInfoCtrl]);

	function userInfoCtrl(userService) {
		var vm = this;

		vm.user = userService.user;


		//vm.setScore = setScore;

		init();

		//mainPageService.userInfo().then(function (responce) {
		//	$state.go('userInfo');
		//
		//	vm.showNavigation = true;
		//});

		function init() {
		}
	}
})();