(function () {
    'use strict';
    angular
        .module('app')
        .controller('mainPageController', ['$scope', mainPageController]);

    function mainPageController($scope) {
        var vm = this;
        vm.menuList = [{title: 'Calendar', href: 'calendar', iconClass: 'fa-table'},
            {title: 'Map', href: 'map', iconClass: 'fa-map'},
            {title: 'About', href: 'about', iconClass: 'fa-user'},
            {title: 'Turkey', href: 'turkey', iconClass: 'fa-moon-o'}];
    }
})();
