(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', ['$http', '$q', mainPageService]);

	function mainPageService($http, $q) {
		return {
			fbLogin: fbLogin,
			userInfo: userInfo
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

		function userInfo() {
			var deferred = $q.defer();

			$q.all({
				me: me(),
				picture: mePicture()
			}).then(function (response) {
				var info = {
					id: response.me.id,
					name: response.me.name,
					photoUrl: response.picture.data.url
				};

				deferred.resolve(info);
			});

			return deferred.promise;
		}

		function me() {
			var deferred = $q.defer();

			FB.api('/me', function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});

			return deferred.promise;
		}

		function mePicture() {
			var deferred = $q.defer();

			FB.api('/me/picture?type=normal', function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});

			return deferred.promise;
		}
	}
})();
