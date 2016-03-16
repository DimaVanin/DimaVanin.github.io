(function () {
    'use strict';
    angular
        .module('app')
        .factory('mainPageService', ['$http', mainPageService]);

    function mainPageService($http) {
        return {
            getTaskList: getTaskList,
            getTypeList: getTypeList
        };

        function getTaskList() {
            //return $http.get('http://rygorh.dev.monterosa.co.uk/todo/items.php');
        }

        function getTypeList() {
            //return $http.get('http://rygorh.dev.monterosa.co.uk/todo/types.php');
        }
    }
})();
