(function () {
	'use strict';
	angular
		.module('app')
		.controller('loginController', ['$state', 'stateConfig', 'facebookService', 'navigationService', loginController]);

	function loginController($state, stateConfig, facebookService, navigationService) {
		var vm = this;

		vm.loginWithFacebook = loginWithFacebook;

		function loginWithFacebook() {
			facebookService.login()
				.then(successAuth)
				.then(successLogin)
		}

		function successAuth(response) {
			return navigationService.updateUserSref('me');
		}

		function successLogin() {
			$state.go(stateConfig.USER);
		}
	}
})();