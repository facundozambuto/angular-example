(function() {
    'use strict';

    angular
        .module('moviesApp')
        .directive('movie', movieDirective);
    function movieDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/movie/movie.html',
            scope: {
                movie: '=',
            }
        };
    }
})();
