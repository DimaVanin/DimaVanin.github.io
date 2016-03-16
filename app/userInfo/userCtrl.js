(function () {
	'use strict';
	angular
		.module('app')
		.controller('userCtrl', ['$scope', 'userCtrl', userCtrl]);

	function userCtrl($scope) {
		var vm = this;

		vm.showNavigation = false;

		vm.fbLogin = fbLogin;

		init();

		function init(){

		}

		function fbLogin() {
			mainPageService.fbLogin().then(function(response){
				vm.showNavigation = true;
			});
		}
	}
})();