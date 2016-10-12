'use strict';

angular.module('myApp').controller('UserController', ['$scope','UserService', function($scope,UserService){

	var self = this;

	self.user = {id:'',name:'',email:'',password:'',address:'',mobile:''};

	self.users=[];


	self.submit=submit;
	self.edit=edit;
	self.remove=remove;
	self.reset=reset;


	fetchAllUsers();

	function fetchAllusers(){ 
		UserService.fetchAllusers()
		.then(
			function(d) {
				self.users=d;
			},

			function(errResponse) {
				console.error('Error while fetching Users');
			}
			);
	}

	function createUser() {

		UserService.createUser(user)
		.then(
			fetchAllusers,
			function(errResponse){
				console.error("Error while creating User");
			}

			);
	}

	function updateUser() {

		UserService.updateUser(id)
		.then(

			fetchAllusers,

			function(errResponse) {
				console.error("Error while updating User");
			}

			);
	}

	  function deleteUser(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    
	
}])