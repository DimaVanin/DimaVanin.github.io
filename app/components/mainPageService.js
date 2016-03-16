(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', [mainPageService]);

	function mainPageService() {

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
			}, {scope: 'publish_actions'});
			return deferred.promise;
		}

		function fbLogout() {

		}
	}
})();
