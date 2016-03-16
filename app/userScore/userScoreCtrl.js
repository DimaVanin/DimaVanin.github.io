(function () {
	'use strict';
	angular
		.module('app')
		.controller('userScoreCtrl', [ userScoreCtrl]);

	function userScoreCtrl() {
		var vm = this;

		vm.user = {};

		vm.setScore = setScore;

		init();

		function init() {
		}
	}
})();