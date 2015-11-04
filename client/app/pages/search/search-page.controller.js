(function() {
    'use strict';

    angular
        .module('moviesApp')
        .controller('SearchPageController', SearchPageController);

    SearchPageController.$inject = [
        'movies',
        'topMovies',
        'moviesConnector'
    ];

    /* @ngInject */
    function SearchPageController(movies, topMovies, moviesConnector){
        var vm = this;
        vm.updatedSearch = updatedSearch;

        vm.movies = movies.data.results;
        vm.topMovies = topMovies.data.results;
        vm.topMovieNames = [];
        angular.forEach(vm.topMovies, function (each) {
            vm.topMovieNames.push(each.title);
        });
        angular.forEach(vm.movies, function (each) {
            vm.topMovieNames.push(each.title);
        });


        function updatedSearch(query) {
            moviesConnector.search(query).then(function (response) {
                vm.movies = response.data.results;
                angular.forEach(vm.movies, function (each) {
                    if (vm.topMovieNames.indexOf(each) === -1 ){
                        vm.topMovieNames.push(each.title);
                    }
                });
            });
        }
    }
})();
