(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService','$state', mainPageController]);

	function mainPageController( mainPageService,$state) {
		var vm = this;

		vm.showNavigation = false;
		vm.scores = 0;
		vm.user = {};

		vm.fbLogin = fbLogin;
		vm.setScore = setScore;

		init();

		function init(){
		}


		function fbLogin() {
			mainPageService.fbLogin().then(function(){
				mainPageService.userInfo().then(function(responce){
					$state.go('userInfo');
					vm.user = responce;

					vm.showNavigation = true;
				});
			});
		}

		function setScore() {
			mainPageService.setScore(vm.scores).then(function(responce){
				vm.user.score = vm.scores;
				vm.scores = 0;
			});
		}

	}
})();