(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService','$state', mainPageController]);

	function mainPageController( mainPageService,$state) {
		var vm = this;

		vm.showNavigation = false;
		vm.scores = 0;
		vm.user = mainPageService.user;

		vm.fbLogin = fbLogin;

		init();

		function init(){
		}

		function fbLogin() {
			mainPageService.fbLogin().then(function(){
				mainPageService.userInfo().then(function(){
					$state.go('userInfo');
					vm.showNavigation = true;
				});
			});
		}
	}
})();