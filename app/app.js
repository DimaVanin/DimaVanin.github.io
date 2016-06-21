(function () {
	'use strict';
	angular.module('app', ['ui.router'])
		.constant('_', window._)
		.run(function ($rootScope) {
			$rootScope._ = window._;
		});
})();