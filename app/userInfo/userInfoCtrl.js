(function () {
	'use strict';
	angular
		.module('app')
		.controller('userInfoCtrl', ['userService', userInfoCtrl]);

	function userInfoCtrl(userService) {
		var vm = this;

		vm.model = userService.model;


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