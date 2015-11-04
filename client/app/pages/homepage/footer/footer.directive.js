(function() {
    'use strict';

    angular
        .module('moviesApp')
        .directive('homeFooter', homeFooterDirective);
    function homeFooterDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/homepage/footer/footer.html'
        };
    }

})();
