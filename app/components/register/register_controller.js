
(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('RegisterController', RegisterController);
 
    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;
 
        vm.register = register;
 
        function register() {
            vm.dataLoading = true;
            console.log(vm.user.role)
            UserService.Create(vm.user)
                .then(function (response) {
                    console.log(response)
                    if (response===201) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }
 
})();
 