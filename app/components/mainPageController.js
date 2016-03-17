(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService', '$state', mainPageController]);

	function mainPageController(mainPageService, $state) {
		var vm = this;

		vm.isAuthorised = false;
		vm.fbLogin = fbLogin;
		vm.fbLogout = fbLogout;

		init();

		function init(){
			FB.getAuthResponse(function (response) {
				if (response.status === 'connected') {
					vm.isAuthorised = true;
				} else {
					vm.isAuthorised = false;
				}
			});
		}

		function fbLogin() {
			mainPageService.fbLogin().then(function () {
				vm.isAuthorised = true;
				$state.go('userInfo');
			});
		}

		function fbLogout() {
			mainPageService.fbLogout().then(function () {
				vm.isAuthorised = false;
				$state.go('empty');
			});
		}
	}
})();