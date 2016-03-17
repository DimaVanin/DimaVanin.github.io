(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService', '$state', mainPageController]);

	function mainPageController(mainPageService, $state) {
		var vm = this;

		vm.isAuthorised = false;
		vm.fbLogin = fbLogin;


		init();

		function init(){
			FB.getLoginStatus(function (response) {
				if (response.status === 'connected') {
					vm.isAuthorised = true;
					console.log('connected');
				} else {
					vm.isAuthorised = false;
					console.log('disconnected');
				}
			});
		}

		function fbLogin() {
			mainPageService.fbLogin().then(function () {
				vm.showNavigation = true;
				$state.href = 'userInfo';
			});
		}
	}
})();