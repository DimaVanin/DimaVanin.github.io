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
        vm.showAddNew = false;
        vm.taskList = [];
        vm.typeList = [];
        vm.newTask = {};

        vm.viewAngular = viewAngular;
        vm.viewJQuery = viewJQuery;
        vm.parseData = parseData;
        vm.defineType = defineType;
        vm.addNewTask = addNewTask;

        function viewAngular() {
            vm.angActive = true;
            vm.jQueryActive = false;
            vm.showAddNew = false;

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
            vm.newTask.type = vm.typeList[0].id;
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
            vm.typeList.forEach(function (type) {
                if (id == type.id) {
                    result = type.name || '';
                }
            });
            return result;
        }

        function addNewTask() {
            vm.newTask.expires_at = +vm.newTask.expires_at;
            vm.newTask.expires_at = Date.parse(moment().add(vm.newTask.expires_at,'hours'));
            vm.newTask.created_at = Date.parse(moment());
            vm.taskList.push(vm.newTask);
            vm.newTask = {
                task: '',
                created_at: '',
                expires_at: ''
            }
        }
    }
})();