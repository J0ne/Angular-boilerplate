(function(){

	 app.factory("personList", ["$firebaseArray",
  		function($firebaseArray) {
    	// create a reference to the database location where we will store our data
    		var ref = new Firebase("https://dazzling-torch-7927.firebaseio.com/rest/project1/persons");

   			 // this uses AngularFire to create the synchronized array
    		return $firebaseArray(ref);
  		}
]);

	app.controller("PersonListController", ["$scope", "personList",
  		// we pass our new chatMessages factory into the controller
  		function($scope, personList) {
	   		// we add chatMessages array to the scope to be used in our ng-repeat
    		$scope.persons = personList;

    		// a method to create new messages; called by ng-submit
    		$scope.addPerson = function() {
    		// calling $add on a synchronized array is like Array.push(),
			// except that it saves the changes to our database!
      			$scope.persons.$add({
      				name: $scope.person
        		});
      		// reset the message input
      			$scope.person = "";

    		};
   		}]);
    })();

 //    usersRef.push().set({
 //      reissu: {
 //        payer: "Jouni",
 //        summa: 15
 //      }
 //    }, function(error){
 //    	  if (error) {
 //    alert("Data could not be saved." + error);
 //  } else {
 //    alert("Tiedot tallennettu. Avain: " + usersRef.key());
 //  }
 //    });
 //    console.log(usersRef.key()); 
 /*
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
 */


  // function PersonListController($scope){
    


  //   $scope.addPerson = function(){
  //   myFirebaseRef.push().set({
  //       name: $scope.newPerson
  //   }, function(error){
  //   	  if (error) {
  //   alert("Data could not be saved." + error);
  // } else {
  //   alert("Tiedot tallennettu. Avain: " + myFirebaseRef.key());
  // }
  //   });
  //     $scope.persons.push(
  //     	{name:$scope.newPerson,
  //     	 });
  //     $scope.newPerson = '';
  //   }
  // }
