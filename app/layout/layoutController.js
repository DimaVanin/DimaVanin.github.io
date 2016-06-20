(function () {
	'use strict';

	angular
		.module('app')
		.controller('layoutController', ['$state', 'facebookService', layoutController]);

	function layoutController($state, facebookService) {
		var vm = this;

		/*scope variables*/
		vm.navigation = [];

		vm.loaded = false;
		vm.isSigned = true;

		/*functions*/
		vm.processClass = processClass;
		vm.isSigned = isSigned;
		init();

		function init() {
			vm.navigation = [
				{sref: 'login', fontClass: 'sign-in'},
				{sref: 'user', fontClass: 'user'},
				{sref: 'event', fontClass: 'cube'},
				{sref: 'video', fontClass: 'video-camera'},
				{sref: 'comments', fontClass: 'comments-o'},
				{sref: 'reaction', fontClass: 'smile-o'},
				{sref: 'logout', fontClass: 'sign-out'}];

			facebookService.init()
				.then(getLoginStatus)
				.then(hideLoading)
		}

		function getLoginStatus() {
			return facebookService.getLoginStatus()
		}

		function processClass(name) {
			return name === $state.current.name;
		}

		function isSigned() {
			return $state.current.name !== 'login'
		}

		function hideLoading() {
			vm.loaded = true;
		}
	}
})();