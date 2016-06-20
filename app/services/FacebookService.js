(function () {
	'use strict';
	angular
		.module('app')
		.factory('facebookService', ['$window', '$q', 'appConfig', facebookService]);

	function facebookService($window, $q, config) {
		var facebook = $window.FB;

		return {
			init: init,
			getLoginStatus: getLoginStatus,
			login: login
		};

		function init() {
			var defer = $q.defer();

			facebook.init({
				appId: config.FB_APP_ID,
				//status: true,
				xfbml: true,
				version: 'v2.6'
			});

			setTimeout(function () {
				defer.resolve();
			}, 100);

			return defer.promise;
		}

		function getLoginStatus() {
			var defer = $q.defer();

			facebook.getLoginStatus(function (response) {
				console.log(response)
			});

			setTimeout(function () {
				defer.resolve();
			}, 100);

			return defer.promise;
		}

		function login() {
			var deferred = $q.defer();

			facebook.login(function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			}, {scope: 'publish_actions,user_friends'});

			return deferred.promise;
		}
	}
})();
