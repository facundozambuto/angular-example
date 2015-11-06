(function() {
    'use strict';

    // Create module and controller
    angular
        .module('randomDemo')
        .controller('RandomController', RandomController);


    RandomController.$inject = [
        'randomService'
    ];

    function RandomController(randomService) {
        // Controller as viewModel
        var vm = this;
        // Initialization
        vm.randomNumber = 0;
        vm.message = null;
        vm.numbers = randomService.values;

        // Controller methods
        vm.updateNextRandom = updateNextRandom;

        /* Get next random number */
        function updateNextRandom() {
            vm.message = 'Updating...';
            randomService.getRandom()
                .then(function(aValue) {
                    vm.status = 200;
                    vm.message = null;
                    vm.randomNumber = aValue;
                })
                .catch(function(aResponse) {
                    vm.message = 'Failed with: ' + aResponse.status + ' ' + aResponse.data.value;
                    vm.randomNumber = NaN;
                });
        }

    }
})();
