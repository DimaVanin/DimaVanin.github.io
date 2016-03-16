(function () {
	'use strict';
	angular
		.module('app')
		.controller('userInfoCtrl', [ userInfoCtrl]);

	function userInfoCtrl() {
		var vm = this;

		vm.user = {};

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