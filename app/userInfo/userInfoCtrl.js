(function () {
	'use strict';
	angular
		.module('app')
		.controller('userInfoCtrl', ['userService', userInfoCtrl]);

	function userInfoCtrl(userService) {
		var vm = this;

		init();

		function init() {
			vm.user = userService.user;
		}
	}
})();