(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService', '$state', mainPageController]);

	function mainPageController(mainPageService, $state) {
		var vm = this;
		vm.showNavigation = false;
		vm.fbLogin = fbLogin;

		function fbLogin() {
			mainPageService.fbLogin().then(function () {
				$state.transitionTo('userInfo');
			});
		}
	}
})();