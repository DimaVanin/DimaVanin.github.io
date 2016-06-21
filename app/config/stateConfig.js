(function () {
	'use strict';
	angular
		.module('app')
		.constant('stateConfig', {

			LOGIN: 'login',
			USER: 'user',
			EVENT: 'event',
			VIDEO: 'video',
			COMMENTS: 'comments',
			REACTIONS: 'reactions',
			LOGOUT: 'logout'

		});
})();
