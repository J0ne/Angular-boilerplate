(function(){
	var app = angular.module('UPayApp');
	app.factory("paymentList", ["$firebaseArray",
  		function($firebaseArray) {
    	// create a reference to the database location where we will store our data
    		var ref = new Firebase("https://dazzling-torch-7927.firebaseio.com/rest/project1");

   			 // this uses AngularFire to create the synchronized array
    		return $firebaseArray(ref);
  		}
	]);

	app.controller("PaymentController", ["$scope", "paymentList",
  		// we pass our new chatMessages factory into the controller
  		function($scope, paymentList) {

	   		// we add chatMessages array to the scope to be used in our ng-repeat
    		$scope.payments = paymentList;

    		$scope.sum = 0;

    		this.sum = function($scope){
    			return $scope.sum * 15;
    		}
    		$scope.updateSum = function(id){
    			console.log(id);
    			$scope.result+=5;
    		}
    		// a method to create new messages; called by ng-submit
    		$scope.addPayment = function(id) {
    		// calling $add on a synchronized array is like Array.push(),
			// except that it saves the changes to our database!
			ref.child(id).
      			$scope.payments.$add({
      				createdDate: Firebase.ServerValue.TIMESTAMP,
      				sum: $scope.sum,
      				person: id,
      				description: $scope.description,

        		});
      		// reset the message input
      			$scope.payment = "";


    		};
   		}]);
})();

