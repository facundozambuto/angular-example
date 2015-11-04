(function() {
    'use strict';

    angular
        .module('moviesApp')
        .config(configRouteHome);

        configRouteHome.$inject = [
	        '$stateProvider'
        ];

        function configRouteHome ($stateProvider) {

        $stateProvider
          .state('home', {
        			url: '/',
        			title: 'Movies Home Page',
                    templateUrl: 'app/pages/homepage/home.html',
					controller: 'HomePageController',
					controllerAs: 'homeVm'
        		});
        }
})();
