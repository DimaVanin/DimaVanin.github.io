(function () {
	'use strict';
	angular
		.module('app')
		.controller('leaderboardCtrl', ['userService', leaderboardCtrl]);

	function leaderboardCtrl(userService) {
		var vm = this;

		init();

		function init() {
			vm.user = userService.user;
			vm.list = [];
			vm.list.push(vm.user);
			vm.list.push(vm.user.friends);
			console.log(vm.list);
		}
	}
})();