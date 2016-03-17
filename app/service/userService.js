(function () {
	'use strict';
	angular
		.module('app')
		.factory('userService', ['$http', '$q', userService]);

	function userService($http, $q) {

		return {
			user: {},
			getUserInfo: getUserInfo,
			getLeaderboard: getLeaderboard,
			setScores: setScores
		};

		function getLeaderboard() {
			var deferred = $q.defer();

			FB.api('/242826122726013/scores', {fields: 'picture'}, function (response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});

			return deferred.promise;
		}

		function getUserInfo() {
			var deferred = $q.defer();

			if (this.user.id) {
				deferred.resolve(this.user);
			} else {
				$q.all({
					me: me(),
					picture: myPicture(),
					score: getScore('me'),
					//friends: myFriedns()
				}).then(function (response) {
					deferred.resolve(
						angular.extend({}, response.me, {
							photoUrl: response.picture.data.url,
							score: response.score,
							//friends: response.friends
						}));
				});
			}

			return deferred.promise;
		}

		function me() {
			var deferred = $q.defer();

			FB.api('/me', {
				fields: "id,name,first_name,gender,last_name,link,locale,relationship_status,timezone"
			}, function (response) {
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

			FB.api('/me/friends', {'fields': 'id,name,scores'},
				function (response) {
					if (!response || response.error) {

						deferred.reject('Error occured');

					} else {

						response.data.forEach(function (friend, i) {
							friends.push({
								id: friend.id,
								name: friend.name,
								score: friend.scores.data[0] ? friend.scores.data[0].score || 0 : 0
							});
						});

						deferred.resolve(friends);
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
					deferred.resolve(response.data[0] ? response.data[0].score || 0 : 0);
				}
			});

			return deferred.promise;
		}

		function setScores(score) {
			var deferred = $q.defer();

			var self = this;

			FB.api('/me/scores', 'POST', {
					'score': score
				}, function (response) {
					if (!response || response.error) {
						deferred.reject('Error occured');
					} else {
						self.user.score = score;
						deferred.resolve(response);
					}
				}
			);

			return deferred.promise;
		}
	}
})();
