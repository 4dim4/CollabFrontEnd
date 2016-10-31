(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['UserService','$location', 'AuthenticationService', 'FlashService','$rootScope'];
    function LoginController(UserService,$location, AuthenticationService, FlashService,$rootScope) {
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
 
      /*  function login() {
            vm.dataLoading = true;
          AuthenticationService.Login(vm.id,vm.password, function (response) {
                if (response.id) {
                    console.log("Working2!");
                    AuthenticationService.SetCredentials(vm.id, vm.password);
                    $location.path('/');
                    console.log("Working!");
                } else {
                    FlashService.Error('Username or password is incorrect');
                    vm.dataLoading = false;
                }
            });
        };
*/

/*My login*/
             function login() {
            vm.dataLoading = true;
            UserService.Authenticate(vm.id, vm.password)
                .then(function (response) {
                    if (response.id) {
                        FlashService.Success('Login successful', true);
                         AuthenticationService.SetCredentials(vm.id, vm.password);
                         console.log(vm.id,vm.password)
                        $location.path('/');

                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }
 
})();