(function(){
	app.factory("paymentList", ["$firebaseArray",
  		function($firebaseArray) {
    	// create a reference to the database location where we will store our data
    		var ref = new Firebase("https://dazzling-torch-7927.firebaseio.com/rest/project1/payments");

   			 // this uses AngularFire to create the synchronized array
    		return $firebaseArray(ref);
  		}
]);

	app.controller("PersonListController", ["$scope", "paymentList",
  		// we pass our new chatMessages factory into the controller
  		function($scope, personList) {

	   		// we add chatMessages array to the scope to be used in our ng-repeat
    		$scope.payments = paymentList;

    		// a method to create new messages; called by ng-submit
    		$scope.addPayment = function() {
    		// calling $add on a synchronized array is like Array.push(),
			// except that it saves the changes to our database!
      			$scope.payments.$add({
      				//createdDate: Firebase.ServerValue.TIMESTAMP,
      				sum: $scope.sum,
      				person: $scope.person,
      				description: $scope.description,

        		});
      		// reset the message input
      			$scope.person = "";


    		};
   		}]);
})();

