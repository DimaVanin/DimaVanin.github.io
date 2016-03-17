(function () {
	'use strict';
	angular
		.module('app')
		.controller('userScoreCtrl', ['userService', userScoreCtrl]);

	function userScoreCtrl(userService) {
		var vm = this;

		vm.scores = 0;
		vm.setScores = setScores;

		init();

		function setScores() {
			userService.setScores(vm.scores).then(function(){
				vm.scores = 0;
			});
		}

		function init() {
			vm.user = userService.user;
		}
	}
})();