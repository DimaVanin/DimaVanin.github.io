(function () {
	'use strict';

	angular
		.module('app')
		.controller('layoutController', ['$state', '_', 'stateConfig', 'facebookService', 'navigationService', layoutController]);

	function layoutController($state, _, stateConfig, facebookService, navigationService) {
		var vm = this;

		/*scope variables*/
		vm.navigation = [];

		vm.loaded = false;
		vm.isSigned = true;

		/*functions*/
		vm.processClass = processClass;
		vm.hideNav = hideNav;

		init();

		function init() {
			//TODO: remove to service with dynamic sref(for video & event)
			vm.navigation = navigationService.navigation;

			facebookService.init()
				.then(getLoginStatus)
				.then(isAuthorized)
				.catch(isUnauthorized)
				.finally(hideLoading);
		}

		function isAuthorized(){
			$state.go(stateConfig.USER);
		}

		function isUnauthorized() {
			$state.go(stateConfig.LOGIN);
		}

		function getLoginStatus() {
			return facebookService.getLoginStatus()
				.then(function (response) {
					console.log(response);
				})
		}

		function processClass(name) {
			return name === $state.current.name;
		}

		function hideNav() {
			//return false;
			var state = $state.current.name;
			return state === 'login' || state === 'logout';
		}

		function hideLoading() {
			vm.loaded = true;
		}
	}
})();