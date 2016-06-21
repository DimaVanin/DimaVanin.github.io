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
			userInfo: userInfo,
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
			var defer = $q.defer();

			method('getLoginStatus')
				.then(function (response) {
					if (response.status === 'connected') {
						defer.resolve();
					}
				})
				.catch(defer.reject);
			return defer.promise;
		}

		function login() {
			var deferred = $q.defer();

			facebook.login(function (response) {
				if (!response || response.error) {
					deferred.reject();
				} else {
					deferred.resolve(response);
				}
			}, {scope: 'publish_actions,user_friends'});

			return deferred.promise;
		}

		function userInfo() {
			var params = {fields: "id,name,first_name,gender,last_name,link,locale,relationship_status,timezone"};
			return api('/me', params);
		}

		function logout() {
			return method('logout');
		}

		function method(functionName) {
			var defer = $q.defer();

			facebook[functionName](function (response) {
				defer.resolve(response);
			});

			setTimeout(defer.reject, config.REQUEST_TIMEOUT);

			return defer.promise;
		}

		function api(api, params) {
			var defer = $q.defer();

			params = params || {};

			facebook.api(api, params, function (response) {
				defer.resolve(response);
			});

			setTimeout(defer.reject, config.REQUEST_TIMEOUT);

			return defer.promise;
		}
	}
})();
