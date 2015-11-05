(function() {
    'use strict';

    angular
        .module('moviesApp')
        .controller('ListingPageController', ListingPageController);

    ListingPageController.$inject = [
        'movies',
        'configuration',
        'moviesConnector'
    ];

    /* @ngInject */
    function ListingPageController(movies, configuration){
        var vm = this;
        vm.configuration = configuration.data;
        vm.movies = movies.data.results;

    }
})();
