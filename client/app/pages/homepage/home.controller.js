(function() {
    'use strict';

    angular
        .module('moviesApp')
        .controller('HomePageController', HomePageController);

    HomePageController.$inject = [

    ];

    /* @ngInject */
    function HomePageController(){
        var vm = this;
        vm.goToSearch = goToSearch;

        function goToSearch(query) {
            window.location = '/search/' + query;
        }

    }
})();
