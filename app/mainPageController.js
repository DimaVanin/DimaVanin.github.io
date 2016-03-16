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
			console.log('go to login page');

			$state.go('loginFB');
		}

		function fbLogin() {
			mainPageService.fbLogin().then(function(){
				$state.go('userInfo');
				vm.showNavigation = true;

				mainPageService.userInfo().then(function(response){
					vm.user = response;
				});

			});
		}
	}
})();