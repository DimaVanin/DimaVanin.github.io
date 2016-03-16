(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['$scope', 'mainPageService', mainPageController]);

	function mainPageController($scope, mainPageService) {
		var vm = this;

		vm.showNavigation = false;

		vm.user = {};

		vm.fbLogin = fbLogin;

		init();

		function init(){

		}

		function fbLogin() {
			mainPageService.fbLogin().then(function(){


				mainPageService.userInfo().then(function(response){
					vm.user = response;
					vm.showNavigation = true;
				});

			});
		}
	}
})();