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
			login: login,
			logout: logout
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
			return api('getLoginStatus');
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

		function logout() {
			return api('logout');
		}

		function api(functionName) {
			var defer = $q.defer();

			facebook[functionName](function (response) {
				defer.resolve(response);
			});

			setTimeout(defer.reject, config.REQUEST_TIMEOUT);

			return defer.promise;
		}
	}
})();
