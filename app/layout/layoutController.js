(function () {
	'use strict';

	angular
		.module('app')
		.controller('layoutController', ['$state', 'facebookService','_', layoutController]);

	function layoutController($state, facebookService, _) {
		var vm = this;

		/*scope variables*/
		vm.navigation = [];

		vm.loaded = false;
		vm.isSigned = true;

		/*functions*/
		vm.processClass = processClass;
		vm.hideNav = hideNav;

		init();

		function init() {
			//TODO: remove to service with dynamic sref(for video & event)
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
				.finally(hideLoading);

			//getLoginStatus();
		}

		function getLoginStatus() {
			return facebookService.getLoginStatus()
				.then(function(response) {
					console.log(response);
				})
		}

		function processClass(name) {
			return name === $state.current.name;
		}

		function hideNav() {
			return false;
			//var state =  $state.current.name;
			//return state === 'login' || state === 'logout';
		}

		function hideLoading() {
			vm.loaded = true;
		}
	}
})();