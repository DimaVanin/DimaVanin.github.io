(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', ['$q','userService', mainPageService]);

	function mainPageService($q, userService) {
		return {
			fbLogin: fbLogin,
			fbLogout: fbLogout
		};

		function fbLogin() {
			var deferred = $q.defer();

			FB.login(function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			}, {scope: 'publish_actions,user_friends'});

			return deferred.promise;
		}

		function fbLogout() {
			var deferred = $q.defer();

			FB.logout(function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					userService.user = {};
					deferred.resolve(response);
				}
			});

			return deferred.promise;
		}
	}
})();
