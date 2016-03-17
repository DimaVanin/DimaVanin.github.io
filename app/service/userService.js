(function () {
	'use strict';
	angular
		.module('app')
		.factory('userService', ['$http', '$q', userService]);

	function userService($http, $q) {

		return {
			getUserInfo: getUserInfo,
			setScore: setScore
		};

		function getUserInfo(){
			return true;
		}

		function userInfo() {
			var deferred = $q.defer();

			$q.all({
				me: me(),
				picture: myPicture(),
				score: getScore('me'),
				friends: myFriedns()
			}).then(function (response) {
				var info = {
					id: response.me.id,
					name: response.me.name,
					photoUrl: response.picture.data.url,
					score: response.score
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


		function myFriedns() {
			var deferred = $q.defer();

			var friends = [];

			FB.api('/me/friends', function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);

					response.data.forEach(function (friend, i) {

						if (i < 10) friends.push(friend);

					});
				}
			});

			return deferred.promise;
		}

		function getScore(id) {
			var deferred = $q.defer();

			FB.api('/' + id + '/score', function (response) {
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
					'score': score
				}
			)
		}
	}
})();
