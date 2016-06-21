(function () {
	'use strict';
	angular
		.module('app')
		.controller('userController', ['user', userController]);

	function userController(user) {
		var vm = this;

		console.log(user);
	}
})();