(function () {
	'use strict';
	angular
		.module('app')
		.factory('navigationService', ['stateConfig', navigationService]);

	function navigationService(stateConfig) {
		var navigation = {
			//login: {
			//	sref: stateConfig.LOGIN,
			//	fontClass: 'sign-in'
			//},
			user: {
				sref: stateConfig.USER,
				fontClass: 'user',
				title: 'user info'
			},
			event: {
				sref: stateConfig.EVENT,
				fontClass: 'cube',
				title: 'event'
			},
			video: {
				sref: stateConfig.VIDEO,
				fontClass: 'video-camera',
				title: 'video'
			},
			comments: {
				sref: stateConfig.COMMENTS,
				fontClass: 'comments-o',
				title: 'video comments'
			},
			reactions: {
				sref: stateConfig.REACTIONS,
				fontClass: 'smile-o',
				title: 'video reactions'
			},
			logout: {
				sref: stateConfig.LOGOUT,
				fontClass: 'sign-out',
				title: 'logout'
			}
		};

		return {
			navigation: navigation,
			updateUserSref: updateUserSref,
			resetUserSref: resetUserSref,
			updateVideoSref: updateVideoSref,
			resetVideoSref: resetVideoSref
		};

		function updateUserSref(user) {
			navigation.user.sref = stateConfig.USER + '/:' + user;
		}

		function resetUserSref() {
			navigation.user.sref = stateConfig.USER;
		}

		function updateVideoSref(video) {
			navigation.video.sref = stateConfig.video + '/:' + video;
		}

		function resetVideoSref() {
			navigation.video.sref = stateConfig.video;
		}
	}
})();
