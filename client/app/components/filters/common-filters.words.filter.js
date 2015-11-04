(function() {
    'use strict';
    angular.module('common-filters')
        .filter('words', wordsFilter);

    /* Returns a filter function that split a string into words */
    function wordsFilter() {
        return function(input) {
            return input.match(/\S+/g) || ''; 
        };
    }

})();
