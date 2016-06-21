(function () {
	'use strict';
	angular
		.module('app')
		.controller('loginController', ['$state', 'facebookService', loginController]);

	function loginController($state, facebookService) {
		var vm = this;

		vm.loginWithFacebook = loginWithFacebook;

		function loginWithFacebook() {
			facebookService.login()
				.then(successAuth)
		}

		function successAuth() {
			$state.go('user')
		}
	}
})();