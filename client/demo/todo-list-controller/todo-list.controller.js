(function() {
    'use strict';

    // Create module and controller
    angular
        .module('todoListControllerDemo', ["xeditable", "ngAnimate"])
        // .controller('TodoListController', TodoListController)
		.run(function(editableOptions) {
			editableOptions.theme = 'bs3';
									  })
		.controller('EditableRowCtrl', function($scope, $filter, $http) {
 

  $scope.types = [ 
    {value: 1, text: 'Food'},
    {value: 2, text: 'Transportation'},
    {value: 3, text: 'Lodge'},
    {value: 4, text: 'Financial'},
	{value: 5, text: 'Sales'},
	{value: 6, text: 'Others'}
	
	]; 

    $scope.showTypes = function(item) {
    var selected = [];
    if(item.type) {
      selected = $filter('filter')($scope.types, {value: item.type});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.saveItem = function(data, id) {
    //$scope.item not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveItem', data);
  };

  $scope.list = [];
  $scope.itemText = '';
  $scope.amount_food_subtotal = 0;
  $scope.amount_transport_subtotal = 0;
  $scope.amount_lodge_subtotal = 0;
  $scope.amount_financial_subtotal = 0;
  $scope.amount_sales_subtotal = 0;
  $scope.amount_others_subtotal = 0;
  $scope.amount_total = 0;
  var i = 0;
  
  $scope.add = add;
  $scope.remove = remove;
  $scope.updateSubtotal = updateSubtotal;
  
  function add(date, text, amount, type) {
                $scope.list.push({date:date, text:text, amount:amount, type:type});
			    getSubtotal();
                                        }
  
  function remove(index) {
            $scope.list.splice(index,1);
             getSubtotal();
        }
  
  function updateSubtotal(index, item){
	        i = index;
			$scope.list[i].date = item.date;
			$scope.list[i].text = item.text;
			$scope.list[i].amount = item.amount;
			$scope.list[i].type = item.type;
			getSubtotal();
		}
  
  function getSubtotal() {	
		$scope.amount_total  = 0;
		$scope.amount_food_subtotal = 0;
		$scope.amount_transport_subtotal = 0;
		$scope.amount_lodge_subtotal = 0;
		$scope.amount_financial_subtotal = 0;
		$scope.amount_sales_subtotal = 0;
		$scope.amount_others_subtotal = 0;
		for(i=0;i<$scope.list.length;i++)
                {
                    if($scope.list[i].type === '1' || $scope.list[i].type === 1 )
                    {
                      $scope.amount_food_subtotal = $scope.amount_food_subtotal + parseInt($scope.list[i].amount);    
                    }
					if($scope.list[i].type === '2' || $scope.list[i].type === 2)
                    {
                      $scope.amount_transport_subtotal = $scope.amount_transport_subtotal + parseInt($scope.list[i].amount);    
                    }
					if($scope.list[i].type === '3' || $scope.list[i].type === 3)
                    {
                      $scope.amount_lodge_subtotal = $scope.amount_lodge_subtotal + parseInt($scope.list[i].amount);    
                    }
					if($scope.list[i].type === '4' || $scope.list[i].type === 4)
                    {
                      $scope.amount_financial_subtotal = $scope.amount_financial_subtotal + parseInt($scope.list[i].amount);    
                    }
					if($scope.list[i].type === '5' || $scope.list[i].type === 5)
                    {
                      $scope.amount_sales_subtotal = $scope.amount_sales_subtotal + parseInt($scope.list[i].amount);    
                    }
					if($scope.list[i].type === '6' || $scope.list[i].type === 6)
                    {
                      $scope.amount_others_subtotal = $scope.amount_others_subtotal + parseInt($scope.list[i].amount);    
                    }
                }
				$scope.amount_total = $scope.amount_total +  $scope.amount_others_subtotal + $scope.amount_sales_subtotal + $scope.amount_financial_subtotal + $scope.amount_lodge_subtotal + $scope.amount_transport_subtotal + $scope.amount_food_subtotal;
		}	

		
  
});


    // TodoListController.$inject = [
    // ];

    // function TodoListController() {
        // // Controller as viewModel
        // var vm = this;
        // // Initialization
        // vm.list = [];
        // vm.itemText = '';
		// vm.amount_food_subtotal = 0;
		// vm.amount_transport_subtotal = 0;
		// vm.amount_lodge_subtotal = 0;
		// vm.amount_financial_subtotal = 0;
		// vm.amount_sales_subtotal = 0;
		// vm.amount_others_subtotal = 0;
		// vm.amount_total = 0;
		// var i = 0;

        // // Controller methods
        // vm.add = add;
        // vm.remove = remove;

        // /* Adds an item to the todo list */
        // function add(date, text, amount, type) {
            // vm.list.push({date:date, text:text, amount:amount, type:type});
			// getSubtotal();
        // }

        // /* Removes the item in the list with index: $index*/
        // function remove(index) {
            // vm.list.splice(index,1);
			// vm.amount_food_subtotal = 0;
        // }
		
		
		// function getSubtotal() {
			
		// for(i=0;i<vm.list.length;i++)
                // {
                    // if(vm.list[i].text === 'Food')
                    // {
                      // vm.amount_food_subtotal = vm.amount_food_subtotal + parseInt(vm.list[i].amount);    
                    // }
					// if(vm.list[i].text === 'Transportation')
                    // {
                      // vm.amount_transport_subtotal = vm.amount_transport_subtotal + parseInt(vm.list[i].amount);    
                    // }
					// if(vm.list[i].text === 'Lodge')
                    // {
                      // vm.amount_lodge_subtotal = vm.amount_lodge_subtotal + parseInt(vm.list[i].amount);    
                    // }
					// if(vm.list[i].text === 'Financial')
                    // {
                      // vm.amount_financial_subtotal = vm.amount_financial_subtotal + parseInt(vm.list[i].amount);    
                    // }
					// if(vm.list[i].text === 'Sales')
                    // {
                      // vm.amount_sales_subtotal = vm.amount_sales_subtotal + parseInt(vm.list[i].amount);    
                    // }
					// if(vm.list[i].text === 'Other')
                    // {
                      // vm.amount_others_subtotal = vm.amount_others_subtotal + parseInt(vm.list[i].amount);    
                    // }
                // }
				// vm.amount_total = vm.amount_total +  vm.amount_others_subtotal + vm.amount_sales_subtotal + vm.amount_financial_subtotal + vm.amount_lodge_subtotal + vm.amount_transport_subtotal + vm.amount_food_subtotal;
		// }
		
    // }
})();
