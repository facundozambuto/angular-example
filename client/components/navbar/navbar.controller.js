'use strict';

angular.module('moviesApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Search',
      'link': '/search/'
    },
    {
      'title': 'Listing',
      'link': '/list/'
    },
     {
      'title': 'Todo',
      'link': '/todo/'
    }];

    $scope.isCollapsed = false;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
