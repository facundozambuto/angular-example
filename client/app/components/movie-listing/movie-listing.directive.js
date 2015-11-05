(function() {
    'use strict';

    angular
        .module('moviesApp')
        .directive('movieListing', movieListDirective);
    function movieListDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/movie-listing/movie-listing.html',
            scope: {
                movies: '='
            }
        };
    }
})();
