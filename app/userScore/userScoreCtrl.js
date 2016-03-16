(function () {
	'use strict';
	angular
		.module('app')
		.controller('userScoreCtrl', ['userService', userScoreCtrl]);

	function userScoreCtrl(userService) {
		var vm = this;

		init();

		vm.user = userService.user;

		function init() {
		}
	}
})();