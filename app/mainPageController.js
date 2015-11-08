(function () {
    'use strict';
    angular
        .module('app')
        .controller('mainPageController', ['$scope', '$q', 'mainPageService', mainPageController]);

    function mainPageController($scope, $q, mainPageService) {
        var vm = this;

        vm.angActive = false;
        vm.jQueryActive = false;
        vm.itemLoaded = false;

        vm.taskList = [];
        vm.typeList = [];

        vm.viewAngular = viewAngular;
        vm.viewJQuery = viewJQuery;
        vm.parseData = parseData;
        vm.defineType = defineType;

        function viewAngular() {
            vm.angActive = true;
            vm.jQueryActive = false;

            if (!vm.itemLoaded) {
                loadToDoList();
            }
        }

        function viewJQuery() {
            vm.angActive = false;
            vm.jQueryActive = true;
        }

        function loadToDoList() {
            var promise = $q.all({
                taskList: mainPageService.getTaskList(),
                typeList: mainPageService.getTypeList()
            });

            promise.then(successLoaded, errorLoaded);
        }

        function successLoaded(data) {
            vm.itemLoaded = true;

            vm.taskList = data.taskList.data || [];
            vm.typeList = data.typeList.data || [];
        }

        function errorLoaded(data) {
            vm.itemLoaded = false;
            alert(data);
        }

        function parseData(time) {
            return moment(time).format('lll');
        }

        function defineType(id) {
            var result = "";
            vm.typeList.forEach(function(type){
                if (id == type.id) {
                    result = type.name || '';
                }
            });
            return result;
        }
    }
})();