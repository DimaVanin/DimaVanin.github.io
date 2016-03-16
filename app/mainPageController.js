(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['$scope', 'mainPageService','$state', mainPageController]);

	function mainPageController($scope, mainPageService,$state) {
		var vm = this;

		vm.showNavigation = false;

		vm.user = {};

		vm.fbLogin = fbLogin;

		init();

		function init(){

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