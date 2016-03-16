(function () {
	'use strict';
	angular
		.module('app')
		.factory('mainPageService', ['$http', '$q', mainPageService]);

	function mainPageService($http, $q) {

		return {
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
			}, {scope: 'publish_actions'});
			return deferred.promise;
		}

		function userInfo() {
			var deferred = $q.defer();

			$q.all({
				me: me(),
				picture: myPicture(),
				score: myScore()
			}).then(function (response) {
				var info = {
					id: response.me.id,
					name: response.me.name,
					photoUrl: response.picture.data.url,
					score: response.score.data.score || 0
				};

				console.log(info);

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
			FB.api('/me/scores', 'POST', {
					'score': score,
					'score2': score
				}
			)
		}
	}
})();
