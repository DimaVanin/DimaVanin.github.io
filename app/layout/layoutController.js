(function () {
	'use strict';

	angular
		.module('app')
		.controller('layoutController', ['$scope', layoutController]);

	function layoutController($scope) {
		var vm = this;
		vm.width = '0%';
		vm.widthE = 0;

		$scope.safeApply = function(fn) {
			var phase = this.$root.$$phase;
			if(phase == '$apply' || phase == '$digest') {
				if(fn && (typeof(fn) === 'function')) {
					fn();
				}
			} else {
				this.$apply(fn);
			}
		};

		function incr(){
			setTimeout(function(){
					vm.widthE += 5;

				$scope.safeApply(function() {
					vm.width = vm.widthE + '%';
				});

				console.log(vm.width);
				incr()
			}, 1000)
		}

		incr();
	}
})();