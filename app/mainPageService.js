(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', ['$http', '$q', mainPageService]);

	function mainPageService($http, $q) {
		return {
			fbLogin: fbLogin
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
	}
})();
