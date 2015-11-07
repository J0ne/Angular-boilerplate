(function(){
	var app = angular.module('UPayApp');
	// app.config(function config($stateProvider){
 // 	$stateProvider.state('index', {
 // 		url: "",
 // 		controller: "PaymentController",
 // 		templateUrl: "templates/payment.html"
 // 	}
 // 	)
 // 	});
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
    		// $scope.payment.description = '';
    		// $scope.payment.shares = [];
    		$scope.updateSum = function(id){
    			$scope.active = true;
    		}

    		$scope.initPayment = function(id){
    			$scope.active = true;
    			$scope.payment.name = id;
    		}
    		// a method to create new messages; called by ng-submit
    		$scope.addPayment = function() {
    		// calling $add on a synchronized array is like Array.push(),
			// except that it saves the changes to our database!

      		$scope.payments.$add({
      				createdDate: Firebase.ServerValue.TIMESTAMP,
      				sum: $scope.payment.sum,
      				payer: $scope.payment.name,
      				description: 'joku kuvaus', //$scope.payment.description,
      				shares: [{
      					Ile: 15,
      					active: true
      				},{
      					Jouni: 15,
      					active: true
      				}]

        		});
      		// reset the message input
      			$scope.payment = "";
      			$scope.active = false;

    		};
   		}]);
})();

