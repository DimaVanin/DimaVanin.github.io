(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', ['$http', '$q', mainPageService]);

	function mainPageService($http, $q) {
		var user = {};

		return {
			user: {user: user},
			fbLogin: fbLogin,
			userInfo: userInfo,
			setScore: setScore
		};

		function fbLogin() {
			var deferred = $q.defer();
			FB.login(function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			}, {scope: ['publish_actions', 'user_friends']});
			return deferred.promise;
		}

		function userInfo() {
			var deferred = $q.defer();

			$q.all({
				me: me(),
				picture: myPicture(),
				score: myScore()
			}).then(function (response) {
				user = {
					id: response.me.id,
					name: response.me.name,
					photoUrl: response.picture.data.url,
					score: response.score.data
				};

				console.log(user);

				deferred.resolve(response);
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

		function myPicture() {
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

		function myScore() {
			var deferred = $q.defer();

			FB.api('/me/score', function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});

			return deferred.promise;
		}

		function setScore(score) {
			var deferred = $q.defer();

			FB.api('/me/score', 'POST', {'score': score}, function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
					userInfo();
				}
			});

			return deferred.promise;
		}
	}
})();
