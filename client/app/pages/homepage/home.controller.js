(function() {
    'use strict';

    angular
        .module('moviesApp')
        .controller('HomePageController', HomePageController);

    HomePageController.$inject = [
        '$window'
    ];

    /* @ngInject */
    function HomePageController($window){
        var vm = this;
        vm.goToSearch = goToSearch;

        function goToSearch(query) {
            $window.location = '/search/' + query;
        }

    }
})();
