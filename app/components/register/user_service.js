(function () {
    'use strict';
 
    angular
        .module('app')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
 
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.Authenticate=Authenticate;
 
        return service;
 
        function GetAll() {
            return $http.get('http://localhost:8081/CollabBackEnd/UserDetails/').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.get('http://localhost:8081/CollabBackEnd/UserDetails/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        function GetByUsername(username) {
            return $http.get('http://localhost:8085/CollobrationPortal/customers/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
 
        function Create(user) {
            return $http.post('http://localhost:8081/CollabBackEnd/UserDetails/', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Authenticate(id,password) {
            return $http.post('http://localhost:8081/CollabBackEnd/UserDetails/authenticate/', {id: id,password: password}).then(handleSuccess, handleError('Authentication failed'));
        }
 
        function Update(user) {
            return $http.put('http://localhost:8085/CollobrationPortal/customers/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        function Delete(id) {
            return $http.delete('http://localhost:8085/CollobrationPortal/customers/' + id).then(handleSuccess, handleError('Error deleting user'));
        }
 
        // private functions 
 
        function handleSuccess(response) {
            console.log(response.data)
            if(response.data==="")
                return response.status;
            else
            return response.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
 
})();