(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['$scope', '$q', 'mainPageService', mainPageController]);

	function mainPageController($scope, $q, mainPageService) {
		var vm = this;

		vm.showNavigation = false;

		vm.fbLogin = fbLogin;


		init();


		function init(){
			window.fbAsyncInit = function() {
				FB.init({
					appId      : '242826122726013',
					xfbml      : true,
					version    : 'v2.5'
				});
			};

			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}

		function fbLogin() {
			FB.init({
				appId      : '242826122726013',
				xfbml      : true,
				version    : 'v2.5'
			});

			FB.login(function (response) {}, { scope:'publish_actions' });
		}
	}
})();