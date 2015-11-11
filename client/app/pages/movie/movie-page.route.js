(function() {
    'use strict';

    angular
        .module('moviesApp')
        .config(configRouteListing);

        configRouteListing.$inject = [
            '$stateProvider'
        ];

        function configRouteListing ($stateProvider) {

        $stateProvider
          .state('movie-page', {
                    url: '/movie/:movieId',
                    title: 'Movie',
                    templateUrl: 'app/pages/movie/movie-page.html',
                    controller: 'MoviePageController',
                    controllerAs: 'movieVm',
                    resolve: {
                        movie: ['$stateParams', 'moviesConnector', 
                            function($stateParams, moviesConnector) {
                            if($stateParams.movieId) {
                                return moviesConnector.movieInfo($stateParams.movieId)
                                        .then(function (response) {
                                            return response.data;
                                        });
                            } else {
                                
                            }
                        }]
                    }
                });
        }
})();
