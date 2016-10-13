var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'app/components/login/pages-login.html',
  /*  controller  : 'HomeController'*/
  })

  .when('/home', {
    templateUrl : 'app/components/home/pages-home.html',
    /*controller  : 'BlogController'*/
  })

  .when('/register', {
    templateUrl : 'app/components/register/pages-user_registration.html',
    /*controller  : 'AboutController'*/
  })

  .otherwise({redirectTo: '/'});
});


/*myApp.run(["$rootScope","$location" , 'userModel', 

  function($rootScope,$location,userModel){
    $rootScope.$on("$rootChangeStart", 
      function(event,next,current){
        if(next.$$route.authenticated) {
          if(userModel.getAuthStatus()) {
            $location.path('/');
          }
        }
        if(next.$$route.originalPath == '/') {
          console.log('Login Page');
          if(userModel.getAuthStatus()) {
            $location.path(current.$$route.originalPath);
          }
        }
      });*/
  
/*}])*/
