(function () {
	'use strict';
	angular
		.module('app')
		.controller('logoutController', ['$state', '$window', 'facebookService', logoutController]);

	function logoutController($state, $window, facebookService) {
		var vm = this;

		vm.logout = logout;
		vm.cancel = cancel;

		function logout() {
			facebookService.logout()
				.then(successLogout)
		}

		function successLogout() {
			$state.go('login')
		}

		function cancel() {
			$window.history.back();
		}
	}
})();