(function(){
	var app = angular.module('UPayApp');
	app.factory("paymentList", ["$firebaseArray",
  		function($firebaseArray) {
    	// create a reference to the database location where we will store our data
    		var ref = new Firebase("https://dazzling-torch-7927.firebaseio.com/rest/project1/payments");

   			 // this uses AngularFire to create the synchronized array
    		return $firebaseArray(ref);
  		}
	]);

	app.controller("PaymentController", ["$scope", "paymentList",
  		// we pass our new chatMessages factory into the controller
  		function($scope, paymentList) {

	   		// we add chatMessages array to the scope to be used in our ng-repeat
    		$scope.payments = paymentList;
    		this.active = false;
    		this.shares = [];

    		// $scope.payment.description = '';
    		// $scope.payment.shares = [];
    		$scope.updateSum = function(id){
    			$scope.active = true;
    		}

    		$scope.initPayment = function(name, persons){
    			$scope.active = true;
    			$scope.payment.name = name;
    			$scope.persons = persons;
    		}

    		// a method to create new messages; called by ng-submit
    		$scope.addPayment = function() {
    		// calling $add on a synchronized array is like Array.push(),
			// except that it saves the changes to our database!

      		$scope.payments.$add({
      				createdDate: Firebase.ServerValue.TIMESTAMP,
      				sum: $scope.payment.sum,
      				payer: $scope.payment.name,
      				description: 'Maksettu: ' + Date.now(),//$scope.payment.description,
      				shares: countShares($scope.payment.sum, $scope.payment.name, $scope.persons)
        		});
      		// reset the message input
      			$scope.payment = "";
      			$scope.active = false;

    		};
   		}]);

	function countShares(sum, payer, persons) {
		console.log(sum + ' ' + payer + ' ' + persons);
    	var shares = [];
    	
    	var sharePerPerson = sum / persons.length;
    	$.each(persons, function(index,value){

    		var active = true;
    		if(payer == value.name){
    			active = false;
    		}
    		
    		var share = 
    			{
    				name: value.name,
    				sum: sharePerPerson,
    				active: active
    			}
    		shares.push(share);
    	});
    	console.log("Jaot: " + shares[0].sum + " / hlö");
    	return shares;
    }
})();

